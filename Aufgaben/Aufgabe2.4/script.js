"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    //Content-Boxen erzeugen und darin die Funktion FillElement aufrufen
    function fillContent(_train, _headlinesArray) {
        let _headlineIdArray = idGenerator(_train, _headlinesArray);
        //i ist die LoopNumber
        for (let i = 0; i < _train.locomotive.length; i++) {
            fillElement(_headlineIdArray, _headlinesArray, i, _train);
        }
    }
    Aufgabe2_4.fillContent = fillContent;
    //Funktion erstellt einen Container im Flexbereich für ein Element einer Kategorie
    //_headlineIdArray liefert individuelle Ids für die Divs, _headlinesArray liefert individuelle Überschriften für die Eigenschaften, _loopNumber ist die Anzahl des Durchlaufs, also die Nummer des Elements/der Auswahlmöglichkeit der Kategorie
    function fillElement(_headlineIdArray, _headlinesArray, _loopNumber, _elementeArray) {
        let contentValueArray = contentValue(_elementeArray, _loopNumber);
        //Strings für die IDs erstellen, die dann je nach Durchlauf die Durchgangsnummer der Schleife anzeigen --> So ist jede ID verschieden und der Inhalt der Website flexibel erweiterbar
        let konfiguratorContentBoxID = "konfiguratorContentBoxID" + _loopNumber;
        //let konfiguratorLabelContainerID: string = "konfiguratorLabelContainerID" + _loopNumber; 
        //
        let konfiguratorContentID = "konfiguratorContentID" + _loopNumber;
        //Div erzeugen
        let contentDiv = document.getElementById("konfiguratorFlexBox");
        let outerdiv = document.createElement("div");
        //Dem Div Klassen geben
        outerdiv.className = "konfiguratorContentBox";
        outerdiv.id = konfiguratorContentBoxID;
        contentDiv.appendChild(outerdiv);
        //Überschrift der Box sowie Button erzeugen
        let konfiguratorLabel = document.getElementById(konfiguratorContentBoxID);
        //let konfiguratorLabelContainer: HTMLHeadElement = document.createElement("label");
        let konfiguratorButton = document.createElement("button");
        let buttonId = buttonIdGenerator(_loopNumber);
        //let selectedObjekt: RailVehicle = _elementeArray[_loopNumber];
        konfiguratorButton.textContent = "Auswählen";
        konfiguratorButton.id = buttonId;
        konfiguratorButton.className = "chooseButton";
        konfiguratorButton.addEventListener("click", printChosenObject);
        //Ausgewähltes Objekt in der Konsole ausgeben
        function printChosenObject() {
            let railVehicleSelected = _elementeArray;
            console.log("Name: " + railVehicleSelected.locomotive[_loopNumber].name);
            console.log("Typ: " + railVehicleSelected.locomotive[_loopNumber].type);
            console.log("Top Speed: " + railVehicleSelected.locomotive[_loopNumber].topSpeed.toString());
            console.log("Farbe: " + railVehicleSelected.locomotive[_loopNumber].color);
        }
        konfiguratorLabel.appendChild(konfiguratorButton);
        //InnerDiv erzeugen
        let innercontentDiv = document.getElementById(konfiguratorContentBoxID);
        let innerdiv = document.createElement("div");
        innerdiv.className = "konfiguratorContent";
        innerdiv.id = konfiguratorContentID;
        innercontentDiv.appendChild(innerdiv);
        //Inhalt von InnerDiv
        for (let i = 0; i < _headlinesArray.headlineElements.length; i++) {
            //Create Div
            let contentType = document.getElementById(konfiguratorContentID);
            let contentTypeDiv = document.createElement("div");
            contentTypeDiv.id = _headlineIdArray[_loopNumber][i];
            contentType.appendChild(contentTypeDiv);
            //Elemente für den Typ
            let contentTypeContent = document.getElementById(_headlineIdArray[_loopNumber][i]);
            let contentTypeContentH4 = document.createElement("h4");
            let contentTypeContentSpan = document.createElement("span");
            //Inhalt für h4 und span
            contentTypeContentH4.textContent = _headlinesArray.headlineElements[i];
            contentTypeContentSpan.textContent = contentValueArray[i];
            //Erstellte Elemente an das Elternelement anhängen
            contentTypeContent.appendChild(contentTypeContentH4);
            contentTypeContent.appendChild(contentTypeContentSpan);
        }
    }
    //Funktion, welche dynamisch, je nach Anzahl an Parametern ein Array mit IDs zurückgibt
    function idGenerator(_kategorieArray, _headlineArray) {
        let idArray = [];
        let headlineIdArray = [];
        let locomotiveLength = _kategorieArray.locomotive.length;
        for (let i = 0; i < locomotiveLength; i++) {
            for (let j = 0; j < _headlineArray.headlineElements.length; j++) {
                let headlinePos = "headlinePosA" + i + "B" + j;
                headlineIdArray.push(headlinePos);
            }
            idArray.push(headlineIdArray);
            //Array zurücksetzen
            headlineIdArray = [];
        }
        return idArray;
    }
    Aufgabe2_4.idGenerator = idGenerator;
    //Informationen der Objekte ausgeben
    function contentValue(_railVehicle, _loopNumber) {
        let contentValueArray = [];
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].name);
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].type);
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].topSpeed.toString());
        contentValueArray.push(_railVehicle.locomotive[_loopNumber].color);
        return contentValueArray;
    }
    //IDs für Buttons dynamisch erstellen
    function buttonIdGenerator(_loopNumber) {
        let buttonId = "buttonSelected" + _loopNumber;
        return buttonId;
    }
    Aufgabe2_4.buttonIdGenerator = buttonIdGenerator;
    //Daten aus data.ts JSON String auslesen
    let headlineArray = JSON.parse(Aufgabe2_4.headlineJSON);
    //let headlineArray: Headline = {headlineElements: ["Name:", "Typ:", "MaxSpeed:", "Farbe:"]};
    console.log(headlineArray);
    console.log(headlineArray.headlineElements.length);
    console.log(headlineArray.headlineElements[1]);
    let trainObject = JSON.parse(Aufgabe2_4.railVehicleJSON);
    console.log(trainObject);
    console.log(trainObject.locomotive.length);
    /*let myObj: Person = JSON.parse(myJSON);
    console.log(myObj.name);
    console.log(myObj.age);
    console.log(myObj);*/
    fillContent(trainObject, headlineArray);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map