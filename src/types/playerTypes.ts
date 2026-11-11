export interface playerTypes {
    id: number;
    username: string;
    creationDate: string;
    wins: number;
    losses: number;
    draws: number;
    gamesPlayed: number;
    winPercentage: number;
}

export interface playerPageTypes {
    players: playerTypes[];
    page: number;
    totalPages: number;
}