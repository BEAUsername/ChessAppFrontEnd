import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./authContext";
import { getCurrentUsername, login, logout } from "../services/authService";

// Wraps the whole app (in main.tsx) and remembers who is logged in
function AuthProvider({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // When the app opens, ask the back end who the saved token belongs to
    useEffect(() => {
        getCurrentUsername()
            .then((name) => setUsername(name))
            .finally(() => setLoading(false));
    }, []);

    async function loginUser(name: string, password: string): Promise<string> {
        const loggedInName = await login(name, password);
        setUsername(loggedInName);
        return loggedInName;
    }

    function logoutUser() {
        logout();
        setUsername(null);
    }

    return (
        <AuthContext.Provider value={{ username, loading, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;