namespace Aufgabe2_3 {
    //zwei Buttons für die Bedienung anlegen
    document.querySelector("#buttonAddRectangle").addEventListener("click", addRectangle);
    document.querySelector("#buttonReloadCanvas").addEventListener("click", resetArea);
    
    //Interface für Rectangle
    interface OwnRect {
        sizeX: number;
        sizeY: number;
        posX?: number;
        posY?: number;
    }
    function createRect(): OwnRect {
        //Ein Rechteck anlegen und mit zufälligen Werten füllen
        let rect1: OwnRect = {sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
        return rect1;
    } 
    function drawRect(rect1: OwnRect): void {
        //div generieren
        let rectangleArea: HTMLElement = document.getElementById("rectangleArea");
        let div: HTMLDivElement = document.createElement("div");

        //String anlegen, um mit einer Variable style.transform zu definieren
        let randomTransform: string = "translate(" + Math.random() * 400 + "px," + Math.random() * 400 + "px)";
        //String für random colour
        let randomColour: string = "rgb(" + Math.random() * 255 + " ," + Math.random() * 255 + " ," + Math.random() * 255 + ")";
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
    let rectangles: OwnRect[] = [];
    
    //Immmer ein Rechteck hinzufügen, dann das Canvas leeren / reloaden und dann das Array mit Rechtecken neu zeichnen
    function addRectangle(): void {
        rectangles.push(createRect());
        reloadArea();
        for (let i: number = 0; i < rectangles.length; i++) {
            drawRect(rectangles[i]);
        }
    }
    //Länge des Arrays für Rechtecke auf 0 setzen und Reload der Area veranlassen
    function resetArea(): void {
        reloadArea();
        rectangles.length = 0;
    } 
    //Mit einer while-Schleife immer das erste Kind des Elternknotens entfernen
    function reloadArea(): void {
        let rectangleArea: HTMLElement = document.getElementById("rectangleArea");
        while (rectangleArea.firstChild) {
            rectangleArea.removeChild(rectangleArea.firstChild);
        }
    }
}
namespace Aufgabe2_3_Kapitelaufgabe {
    //Klasse für ein Schienenfahrzeug anlegen
    export class RailVehicle {
        name: string;
        axes: number;
        topSpeed: number;
        color: string;
        type: string;
        numberOfCars: number;
        capacity: number;

        constructor(_name: string, _axes: number, _topSpeed: number, _color: string, _type: string, _numberOfCars: number, _capacity: number) {
            this.name = _name;
            this.axes = _axes;
            this.topSpeed = _topSpeed;
            this.color = _color;
            this.type = _type;
            this.numberOfCars = _numberOfCars;
            this.capacity = _capacity;
        }
    }
    //Klasse für eine Lokomotive anlegen, erbt von RailVehicle, da jede Lokomotive auch ein Schienenfahrzeug ist
    export class Locomotive extends RailVehicle {
        power: number;
        constructor(_name: string, _axes: number, _topSpeed: number, _color: string, _type: string, _numberOfCars: number, _capacity: number, _power: number) {
            super(_name, _axes, _topSpeed, _color, _type, _numberOfCars, _capacity);
            this.power = _power;
        }
    }
    //Klasse für einen Spezialwagen wie einen Wohnwagen oder Speisewagen anlegen
    export class SpecialCar extends RailVehicle {
        specialSkill:  string;
        constructor(_name: string, _axes: number, _topSpeed: number, _color: string, _type: string, _numberOfCars: number, _capacity: number, _specialSkill: string) {
            super(_name, _axes, _topSpeed, _color, _type, _numberOfCars, _capacity);
            this.specialSkill = _specialSkill;
        }
    }
}