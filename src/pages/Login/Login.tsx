import LoginForm from "../../components/LoginForm/LoginForm";
import "../AccountPage/AccountPage.css";

function Login() {
    return (
        <div>
            <h1>Log in</h1>

            <div className="account-page-content">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;