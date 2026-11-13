import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "../AccountForm/AccountForm.css";

function LoginForm() {
    const { loginUser } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit() {
        loginUser(username, password)
            .then((loggedInName) => navigate(`/user/${loggedInName}`))
            .catch((err: Error) => setMessage(err.message));
    }

    return (
        <form
            className="account-form"
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}
        >
            <label>
                Username
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>

            <label>
                Password
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>

            <button type="submit">Log in</button>

            {message && <p>{message}</p>}

            <p>No account yet? <Link to="/join">Create one</Link></p>
        </form>
    );
}

export default LoginForm;