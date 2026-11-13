import { useState } from "react";
import { Link } from "react-router-dom";
import { join } from "../../services/authService";
import "../AccountForm/AccountForm.css";

function JoinForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit() {
        join(username, password, birthDate)
            .then(() => setMessage("Account created. You can now log in."))
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

            <label>
                Date of birth
                <input
                    type="date"
                    required
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                />
            </label>

            <button type="submit">Join</button>

            {message && <p>{message}</p>}

            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </form>
    );
}

export default JoinForm;