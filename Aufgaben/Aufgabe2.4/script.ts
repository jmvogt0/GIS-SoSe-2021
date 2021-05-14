namespace Aufgabe2_4 {
     //Daten aus data.ts JSON String auslesen
    let headlineArray: Headline = JSON.parse(headlineJSON);
    let trainObject: Train = JSON.parse(railVehicleJSON);

    kategorySelector();

    function kategorySelector(): void {
        let kategoryNumber: number = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString: string = localStorage.getItem("kategoryCounter");
        //String zu Number konvertieren und um eins erhöhen
        kategoryNumber = +kategoryNumberString;
        
        fillContent(trainObject, headlineArray, kategoryNumber);

        //Wert der Kategorie um eins erhöhen
        kategoryCounter();
    }
    //Content-Boxen erzeugen und darin die Funktion FillElement aufrufen
    export function fillContent(_train: Train, _headlinesArray: Headline, _kategoryNumber: number): void {
        let _headlineIdArray: string[][] = idGenerator(_train, _headlinesArray);

        switch (_kategoryNumber) {
            case 0:
                for (let i: number = 0; i < _train.locomotive.length; i++) {
                    fillElement (_headlineIdArray, _headlinesArray, i, _train);
                }
                break;
            case 1:
                for (let i: number = 0; i < _train.car.length; i++) {
                    fillElement (_headlineIdArray, _headlinesArray, i, _train);
                }
                break;
            case 2:
                for (let i: number = 0; i < _train.specialCar.length; i++) {
                    fillElement (_headlineIdArray, _headlinesArray, i, _train);
                }
                break;
            default:
                console.log("Error");
                break;
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

        //Button mit Event
        konfiguratorButton.textContent = "Auswählen";
        konfiguratorButton.id = buttonId;
        konfiguratorButton.className = "chooseButton";
        konfiguratorButton.addEventListener("click", objectSelected);

        //Wird nach dem Event des Buttons aufgerufen. Speichert daten in den LocalStorag und gibt die Daten in der Konsole aus
        function objectSelected(): void {
            printChosenObject();
            let chosenObject: number = _loopNumber;
            
            //kategorySelector();
            //kategoryCounter();
            //Seite neuladen um neue Inhalte anzuzeigen
            let kategoryNumber: number = getKategoryNumber();

            //Je nach KategorieNummer wird auf die nächste Html-Seite weitergeleitet
            switch (kategoryNumber) {
                case 0:
                    console.log("Test");
                    break;
                case 1:
                    //im LocalStorage einen JSON String ablegen
                    localStorage.setItem("kategorie1", JSON.stringify(chosenObject));
                    location.href = "kategory2.html";
                    break;
                case 2:
                    //im LocalStorage einen JSON String ablegen
                    localStorage.setItem("kategorie2", JSON.stringify(chosenObject));
                    location.href = "kategory3.html";
                    break;
                case 3:
                    //im LocalStorage einen JSON String ablegen
                    localStorage.setItem("kategorie3", JSON.stringify(chosenObject));
                    location.href = "summary.html";
            }
            
        }

        //Ausgewähltes Objekt in der Konsole ausgeben
        function printChosenObject(): void {
            let kategoryNumber: number = getKategoryNumber();

            switch (kategoryNumber) {
                case 0:
                    let railVehicleSelected0: Train = _elementeArray;
                    console.log("Name: " + railVehicleSelected0.locomotive[_loopNumber].name);
                    console.log("Typ: " + railVehicleSelected0.locomotive[_loopNumber].type);
                    console.log("Top Speed: " + railVehicleSelected0.locomotive[_loopNumber].topSpeed.toString());
                    console.log("Farbe: " + railVehicleSelected0.locomotive[_loopNumber].color);
                    break;
                case 1:
                    let railVehicleSelected1: Train = _elementeArray;
                    console.log("Name: " + railVehicleSelected1.car[_loopNumber].name);
                    console.log("Typ: " + railVehicleSelected1.car[_loopNumber].type);
                    console.log("Top Speed: " + railVehicleSelected1.car[_loopNumber].topSpeed.toString());
                    console.log("Farbe: " + railVehicleSelected1.car[_loopNumber].color);
                    break;
                case 2:
                    let railVehicleSelected2: Train = _elementeArray;
                    console.log("Name: " + railVehicleSelected2.specialCar[_loopNumber].name);
                    console.log("Typ: " + railVehicleSelected2.specialCar[_loopNumber].type);
                    console.log("Top Speed: " + railVehicleSelected2.specialCar[_loopNumber].topSpeed.toString());
                    console.log("Farbe: " + railVehicleSelected2.specialCar[_loopNumber].color);
                    break;
                default:
                    console.log("Error");
                    break;
            }
        }
        konfiguratorLabel.appendChild(konfiguratorButton);

        //InnerDiv erzeugen
        let innercontentDiv: HTMLElement = document.getElementById(konfiguratorContentBoxID);
        let innerdiv: HTMLDivElement = document.createElement("div");
        innerdiv.className = "konfiguratorContent";
        innerdiv.id = konfiguratorContentID;
        innercontentDiv.appendChild(innerdiv);

        fillInnerDiv(_headlineIdArray, konfiguratorContentID, _loopNumber, contentValueArray, _headlinesArray);
    }

    export function fillInnerDiv(_headlineIdArray: string [][], konfiguratorContentID: string, _loopNumber: number, _contentValueArray: string [], _headlinesArray: Headline): void {
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
            contentTypeContentSpan.textContent = _contentValueArray[i];
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
    export function contentValue(_railVehicle: Train, _loopNumber: number): string[] {
        let contentValueArray: string[] = [];

        let kategoryNumber: number = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString: string = localStorage.getItem("kategoryCounter");
        //String zu Number konvertieren
        kategoryNumber = +kategoryNumberString;
        switch (kategoryNumber) {
            case 0:
                contentValueArray.push(_railVehicle.locomotive[_loopNumber].name);
                contentValueArray.push(_railVehicle.locomotive[_loopNumber].type);
                contentValueArray.push(_railVehicle.locomotive[_loopNumber].topSpeed.toString());
                contentValueArray.push(_railVehicle.locomotive[_loopNumber].color);
                break;
            case 1:
                contentValueArray.push(_railVehicle.car[_loopNumber].name);
                contentValueArray.push(_railVehicle.car[_loopNumber].type);
                contentValueArray.push(_railVehicle.car[_loopNumber].topSpeed.toString());
                contentValueArray.push(_railVehicle.car[_loopNumber].color);
                break;
            case 2:
                contentValueArray.push(_railVehicle.specialCar[_loopNumber].name);
                contentValueArray.push(_railVehicle.specialCar[_loopNumber].type);
                contentValueArray.push(_railVehicle.specialCar[_loopNumber].topSpeed.toString());
                contentValueArray.push(_railVehicle.specialCar[_loopNumber].color);
                break;
            default:
                console.log("Error");
                break;
        }
        return contentValueArray; 
    }

    //IDs für Buttons dynamisch erstellen
    export function buttonIdGenerator(_loopNumber: number): string {
        let buttonId: string = "buttonSelected" + _loopNumber;
        return buttonId;
    }

    //KategorieCounter: Speichert und liest aus dem localStorage, in welcher Kategorie er sich befindet
    function kategoryCounter(): void {
        //Fürs Debugging
        console.log("Kategorienummer:" + localStorage.getItem("kategoryCounter"));
        let kategoryNumber: number = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString: string = localStorage.getItem("kategoryCounter");
        //String zu Number konvertieren und um eins erhöhen
        kategoryNumber = +kategoryNumberString;
        kategoryNumber += 1;
        //Wert wieder im localStorage ablegen
        localStorage.setItem("kategoryCounter", JSON.stringify(kategoryNumber));
    }

    //Liefert die aktuell im LocalStorage zwischengespeicherte KategorieNummer zurück
    function getKategoryNumber(): number {
        let kategoryNumber: number = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString: string = localStorage.getItem("kategoryCounter");
        //String zu Number konvertieren
        kategoryNumber = +kategoryNumberString; 
        return kategoryNumber;
    }
}