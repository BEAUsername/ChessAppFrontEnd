import type { playerPageTypes } from "../types/playerTypes.ts"; //imports the definition: one page = list of players, page number, total pages

export async function getPlayerPage(page: number, username: string): Promise<playerPageTypes> {
    const params = new URLSearchParams({ page: String(page), username: username }); //builds "page=0&username=Acc" and encodes special characters safely
    const response = await fetch(`/api/players?${params}`); //asks the back end for one page of players

    if (!response.ok) {
        throw new Error("Could not load players");
    }

    return response.json(); //the real page (players, page, totalPages) arrives here.
}


// called by the page (Players.tsx). FE Service runs in the user's browser and
// the purpose of the FE service is the ask the back end for data, it talks over HTTP (fetch)
// Example: Call api/players?page=0&username=Acc and give me the results