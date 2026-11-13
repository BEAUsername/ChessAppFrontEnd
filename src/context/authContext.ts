import { createContext, useContext } from "react";

// What every component can read from the context
export interface AuthContextValue {
    username: string | null;
    loading: boolean;
    loginUser: (username: string, password: string) => Promise<string>;
    logoutUser: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

// Lets any component ask: who is logged in?
export function useAuth(): AuthContextValue {
    const value = useContext(AuthContext);
    if (value === null) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return value;
}