import JoinForm from "../../components/JoinForm/JoinForm";
import "../AccountPage/AccountPage.css";

function Join() {
    return (
        <div>
            <h1>Create an account</h1>

            <div className="account-page-content">
                <JoinForm />
            </div>
        </div>
    );
}

export default Join;