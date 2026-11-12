export async function join(username: string, password: string, birthDate: string): Promise<void> {
    const response = await fetch("/api/auth/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, birthDate }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? "Could not reach the server. Try again later.");
    }
}