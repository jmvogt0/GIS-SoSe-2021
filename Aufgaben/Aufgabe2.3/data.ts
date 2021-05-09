namespace Aufgabe2_3_Kapitelaufgabe {
    let locomotiveHeadlines: string [] = ["Name:", "Typ:", "Achsen:", "MaxSpeed:", "Farbe:"];

    //Variable Lokomotive anlegen
    let locomotive1: Locomotive = new Locomotive("Thomas", 2, 100, "Grün", "Elektro", 1, 2, 1000);
    let locomotive2: Locomotive = new Locomotive("Lok112", 3, 150, "Rot", "Elektro", 1, 2, 1000);
    let locomotive3: Locomotive = new Locomotive("Elias", 5, 395, "Blau", "Diesel", 1, 2, 1000);

    //Lokomotive dem Array locomotiveArray hinzufügen
    locomotiveArray.push(locomotive1);
    locomotiveArray.push(locomotive2);
    locomotiveArray.push(locomotive3);
    
    //Variable RailVehicle anlegen
    let car1: RailVehicle = new RailVehicle("Typ1", 4, 200, "Green", "PersonVehicle", 1, 200);
    //Wagon dem Array hinzufügen
    railvehicleCarArray.push(car1);

    //Angelegte Variablen einem GesamtArray (Dem Zug) hinzufügen
    //trainArray.push(locomotiveArray[0]);

    fillContent(locomotiveArray, idGenerator(locomotiveArray, locomotiveHeadlines), locomotiveHeadlines);
}