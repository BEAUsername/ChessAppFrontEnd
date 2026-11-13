// Talks to /api/auth on the back end.
// After login the token is kept in localStorage and sent along as "Authorization: Bearer <token>".

const TOKEN_KEY = "token";

async function readError(response: Response): Promise<Error> {
    const error = await response.json().catch(() => null);
    return new Error(error?.message ?? "Could not reach the server. Try again later.");
}

export function getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

// The header line every protected request needs; empty when nobody is logged in
export function authHeader(): Record<string, string> {
    const token = getToken();
    return token === null ? {} : { Authorization: `Bearer ${token}` };
}

export async function join(username: string, password: string, birthDate: string): Promise<void> {
    const response = await fetch("/api/auth/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, birthDate }),
    });

    if (!response.ok) {
        throw await readError(response);
    }
}

export async function login(username: string, password: string): Promise<string> {
    const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw await readError(response);
    }

    const result: { token: string; username: string } = await response.json();
    localStorage.setItem(TOKEN_KEY, result.token);
    return result.username;
}

export async function getCurrentUsername(): Promise<string | null> {
    if (getToken() === null) {
        return null;
    }

    const response = await fetch("/api/auth/me", { headers: authHeader() });

    if (!response.ok) {
        logout(); // the token is expired or invalid, so throw it away
        return null;
    }

    const result: { username: string | null } = await response.json();
    return result.username;
}

export function logout(): void {
    localStorage.removeItem(TOKEN_KEY);
}