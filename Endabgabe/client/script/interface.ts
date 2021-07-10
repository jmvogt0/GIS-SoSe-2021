namespace Endabgabe {
    export interface Memorycard {
        pairID: string;
        pictureUrl: string;
        checked: boolean;
    }

    export interface SelectedCard {
        cardCounter: number;
        cardID: string;
    }
    export interface UserData {
        name: string;
        duration: number;
        date: string;
    }
}