import type { playerPageTypes, playerTypes } from "../types/playerTypes.ts"; //imports the definitions: one page (list of players, page number, total pages) and one single player

export async function getPlayerPage(page: number, username: string): Promise<playerPageTypes> {
    const params = new URLSearchParams({ page: String(page), username: username }); //builds "page=0&username=Acc" and encodes special characters safely
    const response = await fetch(`/api/players?${params}`); //asks the back end for one page of players

    if (!response.ok) {
        throw new Error("Could not load players");
    }

    return response.json(); //the real page (players, page, totalPages) arrives here.
}

export async function getPlayerByUsername(username: string): Promise<playerTypes> {
    const response = await fetch(`/api/players/by-username/${encodeURIComponent(username)}`); //asks the back end for exactly one player

    if (response.status === 404) {
        throw new Error("This player does not exist");
    }
    if (!response.ok) {
        throw new Error("Could not load this player");
    }

    return response.json(); //the single player arrives here
}


// called by the pages (Players.tsx, Profile.tsx). FE Service runs in the user's browser and
// the purpose of the FE service is the ask the back end for data, it talks over HTTP (fetch)
// Example: Call api/players?page=0&username=Acc and give me the results

