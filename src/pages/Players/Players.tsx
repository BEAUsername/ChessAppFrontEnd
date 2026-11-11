import { useEffect, useState } from "react";
import type { playerTypes } from "../../types/playerTypes";
import { getPlayerPage } from "../../services/playerService";
import "./Players.css";

const PAGE_SIZE = 20;

function Players() {
    const [players, setPlayers] = useState<playerTypes[]>([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPlayerPage(page, search)
            .then((result) => {
                setPlayers(result.players);
                setTotalPages(result.totalPages);
                setError(null);
            })
            .catch((err: Error) => setError(err.message));
    }, [page, search]);

    function handleSearchChange(text: string) {
        setSearch(text);
        setPage(0);
    }

    return (
        <div>
            <h1>Players</h1>

            <div className="players-content">
                <input
                    type="text"
                    placeholder="Search username..."
                    value={search}
                    onChange={(event) => handleSearchChange(event.target.value)}
                />

                {error && <p>{error}</p>}

                <table>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Draws</th>
                        <th>Win %</th>
                    </tr>
                    </thead>
                    <tbody>
                    {players.map((player, index) => (
                        <tr key={player.id}>
                            <td>{page * PAGE_SIZE + index + 1}</td>
                            <td>{player.username}</td>
                            <td>{player.wins}</td>
                            <td>{player.losses}</td>
                            <td>{player.draws}</td>
                            <td>{player.winPercentage}%</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                        Previous
                    </button>
                    <span>Page {page + 1} of {Math.max(totalPages, 1)}</span>
                    <button onClick={() => setPage(page + 1)} disabled={page + 1 >= totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Players;