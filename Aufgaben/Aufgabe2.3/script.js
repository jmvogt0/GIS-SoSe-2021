"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //zwei Buttons für die Bedienung anlegen
    document.querySelector("#buttonAddRectangle").addEventListener("click", addRectangle);
    document.querySelector("#buttonReloadCanvas").addEventListener("click", resetArea);
    function createRect() {
        //Ein Rechteck anlegen und mit zufälligen Werten füllen
        let rect1 = { sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
        return rect1;
    }
    function drawRect(rect1) {
        //div generieren
        let rectangleArea = document.getElementById("rectangleArea");
        let div = document.createElement("div");
        //String anlegen, um mit einer Variable style.transform zu definieren
        let randomTransform = "translate(" + Math.random() * 400 + "px," + Math.random() * 400 + "px)";
        //String für random colour
        let randomColour = "rgb(" + Math.random() * 255 + " ," + Math.random() * 255 + " ," + Math.random() * 255 + ")";
        //allgemeine Style Einstellungen
        div.style.width = (rect1.sizeX) + "px";
        div.style.height = (rect1.sizeY) + "px";
        div.style.backgroundColor = randomColour;
        div.style.position = ("absolute");
        //hier wird die Position des Rectangles verändert
        div.style.transform = randomTransform;
        //Rechteck dem Eltern-Div unterordnen
        rectangleArea.appendChild(div);
    }
    //Array anlegen für die Rechtecke
    let rectangles = [];
    //Immmer ein Rechteck hinzufügen, dann das Canvas leeren / reloaden und dann das Array mit Rechtecken neu zeichnen
    function addRectangle() {
        rectangles.push(createRect());
        reloadArea();
        for (let i = 0; i < rectangles.length; i++) {
            drawRect(rectangles[i]);
        }
    }
    //Länge des Arrays für Rechtecke auf 0 setzen und Reload der Area veranlassen
    function resetArea() {
        reloadArea();
        rectangles.length = 0;
    }
    //Mit einer while-Schleife immer das erste Kind des Elternknotens entfernen
    function reloadArea() {
        let rectangleArea = document.getElementById("rectangleArea");
        while (rectangleArea.firstChild) {
            rectangleArea.removeChild(rectangleArea.firstChild);
        }
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
var Aufgabe2_3_Kapitelaufgabe;
(function (Aufgabe2_3_Kapitelaufgabe) {
    //Klasse für ein Schienenfahrzeug anlegen
    class RailVehicle {
        constructor(_name, _axes, _topSpeed, _color, _type, _numberOfCars, _capacity) {
            this.name = _name;
            this.axes = _axes;
            this.topSpeed = _topSpeed;
            this.color = _color;
            this.type = _type;
            this.numberOfCars = _numberOfCars;
            this.capacity = _capacity;
        }
    }
    Aufgabe2_3_Kapitelaufgabe.RailVehicle = RailVehicle;
    //Klasse für eine Lokomotive anlegen, erbt von RailVehicle, da jede Lokomotive auch ein Schienenfahrzeug ist
    class Locomotive extends RailVehicle {
        constructor(_name, _axes, _topSpeed, _color, _type, _numberOfCars, _capacity, _power) {
            super(_name, _axes, _topSpeed, _color, _type, _numberOfCars, _capacity);
            this.power = _power;
        }
    }
    Aufgabe2_3_Kapitelaufgabe.Locomotive = Locomotive;
    //Klasse für einen Spezialwagen wie einen Wohnwagen oder Speisewagen anlegen
    class SpecialCar extends RailVehicle {
        constructor(_name, _axes, _topSpeed, _color, _type, _numberOfCars, _capacity, _specialSkill) {
            super(_name, _axes, _topSpeed, _color, _type, _numberOfCars, _capacity);
            this.specialSkill = _specialSkill;
        }
    }
    Aufgabe2_3_Kapitelaufgabe.SpecialCar = SpecialCar;
})(Aufgabe2_3_Kapitelaufgabe || (Aufgabe2_3_Kapitelaufgabe = {}));
//# sourceMappingURL=script.js.map