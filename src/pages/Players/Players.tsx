import { useEffect, useState } from "react";
import type { playerTypes } from "../../types/playerTypes";
import { getAllPlayers } from "../../services/playerService";

function Players() {
    const [players, setPlayers] = useState<playerTypes[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAllPlayers()
            .then(setPlayers)
            .catch((err: Error) => setError(err.message));
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Players</h1>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        {player.username} - {player.wins} wins - {player.losses} losses - {player.winPercentage} winrate
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Players;