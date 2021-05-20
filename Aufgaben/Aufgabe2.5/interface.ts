namespace Aufgabe2_5 {
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

    //Zwar kein Interface aber eine Variable die später die Kategoriedurchläufe zählt
    let kategoryNumber: number = 0;
    sessionStorage.setItem("kategoryCounter", JSON.stringify(kategoryNumber));
}