import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { playerTypes } from "../../types/playerTypes";
import { getPlayerByUsername } from "../../services/playerService";
import "./Profile.css";

function Profile() {
    const { username } = useParams();
    const [player, setPlayer] = useState<playerTypes | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPlayerByUsername(username ?? "")
            .then((result) => {
                setPlayer(result);
                setError(null);
            })
            .catch((err: Error) => setError(err.message));
    }, [username]);

    return (
        <div>
            <h1>{player ? player.username : username}</h1>

            <div className="profile-content">
                {error && <p>{error}</p>}

                {player && (
                    <div className="profile-stats">
                        <div className="profile-card">
                            <p className="profile-label">Wins</p>
                            <p className="profile-value">{player.wins}</p>
                        </div>
                        <div className="profile-card">
                            <p className="profile-label">Losses</p>
                            <p className="profile-value">{player.losses}</p>
                        </div>
                        <div className="profile-card">
                            <p className="profile-label">Draws</p>
                            <p className="profile-value">{player.draws}</p>
                        </div>
                        <div className="profile-card">
                            <p className="profile-label">Games played</p>
                            <p className="profile-value">{player.gamesPlayed}</p>
                        </div>
                        <div className="profile-card">
                            <p className="profile-label">Win %</p>
                            <p className="profile-value">{player.winPercentage}%</p>
                        </div>
                        <div className="profile-card">
                            <p className="profile-label">Member since</p>
                            <p className="profile-value">{player.creationDate}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;