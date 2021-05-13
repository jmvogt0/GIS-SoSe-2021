namespace Aufgabe2_4 {
    //Interface für ein Schienenfahrzeug anlege
    export interface RailVehicle {
        name: string;
        topSpeed: number;
        color: string;
        type: string;
    }   
    export interface Train {
        locomotive: RailVehicle [];
        car: RailVehicle [];
        specialCar: RailVehicle [];
    }   
    export interface Headline {
        headlineElements: string [];
    }
}