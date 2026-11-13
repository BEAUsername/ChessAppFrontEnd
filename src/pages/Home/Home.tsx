import JoinForm from "../../components/JoinForm/JoinForm";
import { useAuth } from "../../context/authContext";
import "./Home.css";

function Home() {
    const { username, loading } = useAuth();

    return (
        <div className="home-hero">
            {!loading && username === null && (
                <div className="home-join-box">
                    <h2>Create an account</h2>
                    <JoinForm />
                </div>
            )}
        </div>
    );
}

export default Home;