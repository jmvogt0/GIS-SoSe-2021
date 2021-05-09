"use strict";
var Aufgabe2_3_Kapitelaufgabe;
(function (Aufgabe2_3_Kapitelaufgabe) {
    let locomotiveHeadlines = ["Name:", "Typ:", "Achsen:", "MaxSpeed:", "Farbe:"];
    //Variable Lokomotive anlegen
    let locomotive1 = new Aufgabe2_3_Kapitelaufgabe.Locomotive("Thomas", 2, 100, "Grün", "Elektro", 1, 2, 1000);
    let locomotive2 = new Aufgabe2_3_Kapitelaufgabe.Locomotive("Lok112", 3, 150, "Rot", "Elektro", 1, 2, 1000);
    let locomotive3 = new Aufgabe2_3_Kapitelaufgabe.Locomotive("Elias", 5, 395, "Blau", "Diesel", 1, 2, 1000);
    //Lokomotive dem Array locomotiveArray hinzufügen
    Aufgabe2_3_Kapitelaufgabe.locomotiveArray.push(locomotive1);
    Aufgabe2_3_Kapitelaufgabe.locomotiveArray.push(locomotive2);
    Aufgabe2_3_Kapitelaufgabe.locomotiveArray.push(locomotive3);
    //Variable RailVehicle anlegen
    let car1 = new Aufgabe2_3_Kapitelaufgabe.RailVehicle("Typ1", 4, 200, "Green", "PersonVehicle", 1, 200);
    //Wagon dem Array hinzufügen
    Aufgabe2_3_Kapitelaufgabe.railvehicleCarArray.push(car1);
    //Angelegte Variablen einem GesamtArray (Dem Zug) hinzufügen
    //trainArray.push(locomotiveArray[0]);
    Aufgabe2_3_Kapitelaufgabe.fillContent(Aufgabe2_3_Kapitelaufgabe.locomotiveArray, Aufgabe2_3_Kapitelaufgabe.idGenerator(Aufgabe2_3_Kapitelaufgabe.locomotiveArray, locomotiveHeadlines), locomotiveHeadlines);
})(Aufgabe2_3_Kapitelaufgabe || (Aufgabe2_3_Kapitelaufgabe = {}));
//# sourceMappingURL=data.js.map