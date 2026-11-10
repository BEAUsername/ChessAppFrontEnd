import type { playerTypes } from "../types/playerTypes.ts"; //imports the definition: list of fields, etc.

export async function getAllPlayers(): Promise<playerTypes[]> {
    const response = await fetch("/api/players"); //asks the back end for actual data.

    if (!response.ok) {
        throw new Error("Could not load players");
    }

    return response.json(); //the real players arrives here.
}


// called by the page (Players.tsx). FE Service runs in the user's browser and
// the purpose of the FE service is the ask the back end for data, it talks over HTTP (fetch)
// Example: Call api/players and give me the results