namespace Aufgabe2_4 {
    //Content-Boxen erzeugen und darin die Funktion FillElement aufrufen
    export function fillContent(_train: Train, _headlinesArray: Headline): void {
        let _headlineIdArray: string[][] = idGenerator(_train, _headlinesArray);
        //i ist die LoopNumber
        for (let i: number = 0; i < _train.locomotive.length; i++) {
            fillElement (_headlineIdArray, _headlinesArray, i, _train);
        }
    }
    //Funktion erstellt einen Container im Flexbereich für ein Element einer Kategorie
    //_headlineIdArray liefert individuelle Ids für die Divs, _headlinesArray liefert individuelle Überschriften für die Eigenschaften, _loopNumber ist die Anzahl des Durchlaufs, also die Nummer des Elements/der Auswahlmöglichkeit der Kategorie
    function fillElement(_headlineIdArray: string[][], _headlinesArray: Headline, _loopNumber: number, _elementeArray: Train): void {
        let contentValueArray: string [] = contentValue(_elementeArray, _loopNumber);

        //Strings für die IDs erstellen, die dann je nach Durchlauf die Durchgangsnummer der Schleife anzeigen --> So ist jede ID verschieden und der Inhalt der Website flexibel erweiterbar
        let konfiguratorContentBoxID: string = "konfiguratorContentBoxID" + _loopNumber;

        //let konfiguratorLabelContainerID: string = "konfiguratorLabelContainerID" + _loopNumber; 
        //
        let konfiguratorContentID: string = "konfiguratorContentID" + _loopNumber;
        
        //Div erzeugen
        let contentDiv: HTMLElement = document.getElementById("konfiguratorFlexBox");
        let outerdiv: HTMLDivElement = document.createElement("div");
        //Dem Div Klassen geben
        outerdiv.className = "konfiguratorContentBox";
        outerdiv.id = konfiguratorContentBoxID;
        contentDiv.appendChild(outerdiv);

        //Überschrift der Box sowie Button erzeugen
        let konfiguratorLabel: HTMLElement = document.getElementById(konfiguratorContentBoxID);
        //let konfiguratorLabelContainer: HTMLHeadElement = document.createElement("label");
        let konfiguratorButton: HTMLButtonElement = document.createElement("button");

        let buttonId: string = buttonIdGenerator(_loopNumber);
        //let selectedObjekt: RailVehicle = _elementeArray[_loopNumber];

        konfiguratorButton.textContent = "Auswählen";
        konfiguratorButton.id = buttonId;
        konfiguratorButton.className = "chooseButton";
        konfiguratorButton.addEventListener("click", printChosenObject);


        //Ausgewähltes Objekt in der Konsole ausgeben
        function printChosenObject(): void {
            let railVehicleSelected: Train = _elementeArray;
            console.log("Name: " + railVehicleSelected.locomotive[_loopNumber].name);
            console.log("Typ: " + railVehicleSelected.locomotive[_loopNumber].type);
            console.log("Top Speed: " + railVehicleSelected.locomotive[_loopNumber].topSpeed.toString());
            console.log("Farbe: " + railVehicleSelected.locomotive[_loopNumber].color);
        }
        konfiguratorLabel.appendChild(konfiguratorButton);

        //InnerDiv erzeugen
        let innercontentDiv: HTMLElement = document.getElementById(konfiguratorContentBoxID);
        let innerdiv: HTMLDivElement = document.createElement("div");
        innerdiv.className = "konfiguratorContent";
        innerdiv.id = konfiguratorContentID;
        innercontentDiv.appendChild(innerdiv);
        //Inhalt von InnerDiv

        for (let i: number = 0; i < _headlinesArray.headlineElements.length; i++) {
            //Create Div
            let contentType: HTMLElement = document.getElementById(konfiguratorContentID);
            let contentTypeDiv: HTMLDivElement = document.createElement("div");
            contentTypeDiv.id = _headlineIdArray[_loopNumber][i];
            contentType.appendChild(contentTypeDiv);
            //Elemente für den Typ
            let contentTypeContent: HTMLElement = document.getElementById(_headlineIdArray[_loopNumber][i]);
            let contentTypeContentH4: HTMLHeadElement = document.createElement("h4");
            let contentTypeContentSpan: HTMLSpanElement = document.createElement("span");
            //Inhalt für h4 und span
            contentTypeContentH4.textContent = _headlinesArray.headlineElements[i];
            contentTypeContentSpan.textContent = contentValueArray[i];
            //Erstellte Elemente an das Elternelement anhängen
            contentTypeContent.appendChild(contentTypeContentH4);
            contentTypeContent.appendChild(contentTypeContentSpan);
        }
    }

    //Funktion, welche dynamisch, je nach Anzahl an Parametern ein Array mit IDs zurückgibt
    export function idGenerator(_kategorieArray: Train, _headlineArray: Headline): string [][] {
        let idArray: string [][] = [];
        let headlineIdArray: string [] = [];

        let locomotiveLength: number = _kategorieArray.locomotive.length;
        
        for (let i: number = 0; i < locomotiveLength; i++) {
            for (let j: number = 0; j < _headlineArray.headlineElements.length; j++) {
                let headlinePos: string = "headlinePosA" + i + "B" + j;
                headlineIdArray.push(headlinePos);
            }
            idArray.push(headlineIdArray);
            //Array zurücksetzen
            headlineIdArray = [];
        }
        return idArray;
    }

    //Informationen der Objekte ausgeben
    function contentValue(_railVehicle: Train, _loopNumber: number): string[] {
        let contentValueArray: string[] = [];
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].name);
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].type);
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].topSpeed.toString());
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].color);
        return contentValueArray; 
    }

    //IDs für Buttons dynamisch erstellen
    export function buttonIdGenerator(_loopNumber: number): string {
        let buttonId: string = "buttonSelected" + _loopNumber;
        return buttonId;
    }

    

    //Daten aus data.ts JSON String auslesen
    let headlineArray: Headline = JSON.parse(headlineJSON);
    //let headlineArray: Headline = {headlineElements: ["Name:", "Typ:", "MaxSpeed:", "Farbe:"]};

    console.log(headlineArray);
    console.log(headlineArray.headlineElements.length);
    console.log(headlineArray.headlineElements[1]);

    let trainObject: Train = JSON.parse(railVehicleJSON);

    console.log(trainObject);
    console.log(trainObject.locomotive.length);

    
    /*let myObj: Person = JSON.parse(myJSON);
    console.log(myObj.name);
    console.log(myObj.age);
    console.log(myObj);*/


    fillContent(trainObject, headlineArray);
}