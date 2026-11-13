import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./Settings.css";

function Settings() {
    const { username, loading, logoutUser } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logoutUser();
        navigate("/");
    }

    return (
        <div>
            <h1>Settings</h1>

            <div className="settings-content">
                {loading ? null : username === null ? (
                    <p>You are not logged in. <Link to="/login">Log in</Link></p>
                ) : (
                    <>
                        <p>Logged in as <b>{username}</b></p>
                        <button type="button" onClick={handleLogout}>Log out</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Settings;