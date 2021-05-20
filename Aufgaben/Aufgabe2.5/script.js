"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    /*
    function getSubpage(): string {
        return window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    }*/
    console.log("HelloWorld");
    async function communicate(_url, _url2) {
        let response = await fetch(_url);
        let response2 = await fetch(_url2);
        let train = await response.json();
        let headlineArray = await response2.json();
        console.log(train.car.length);
        console.log(headlineArray.headlineElements.length);
        kategorySelector(train, headlineArray);
    }
    communicate("https://jmvogt0.github.io/GIS-SoSe-2021/Aufgaben/Aufgabe2.5/dataObject.json", "https://jmvogt0.github.io/GIS-SoSe-2021/Aufgaben/Aufgabe2.5/dataHeadline.json");
    function kategorySelector(_trainObject, _headlineArray) {
        let kategoryNumber = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString = localStorage.getItem("kategoryCounter");
        //String zu Number konvertieren und um eins erhöhen
        kategoryNumber = +kategoryNumberString;
        fillContent(_trainObject, _headlineArray, kategoryNumber);
        //Wert der Kategorie um eins erhöhen
        kategoryCounter();
    }
    //Content-Boxen erzeugen und darin die Funktion FillElement aufrufen
    function fillContent(_train, _headlinesArray, _kategoryNumber) {
        let _headlineIdArray = idGenerator(_train, _headlinesArray);
        switch (_kategoryNumber) {
            case 0:
                for (let i = 0; i < _train.locomotive.length; i++) {
                    fillElement(_headlineIdArray, _headlinesArray, i, _train);
                }
                break;
            case 1:
                for (let i = 0; i < _train.car.length; i++) {
                    fillElement(_headlineIdArray, _headlinesArray, i, _train);
                }
                break;
            case 2:
                for (let i = 0; i < _train.specialCar.length; i++) {
                    fillElement(_headlineIdArray, _headlinesArray, i, _train);
                }
                break;
            default:
                console.log("Error");
                break;
        }
    }
    Aufgabe2_5.fillContent = fillContent;
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
        //Button mit Event
        konfiguratorButton.textContent = "Auswählen";
        konfiguratorButton.id = buttonId;
        konfiguratorButton.className = "chooseButton";
        konfiguratorButton.addEventListener("click", objectSelected);
        //Wird nach dem Event des Buttons aufgerufen. Speichert daten in den LocalStorag und gibt die Daten in der Konsole aus
        function objectSelected() {
            printChosenObject();
            let chosenObject = _loopNumber;
            //kategorySelector();
            //kategoryCounter();
            //Seite neuladen um neue Inhalte anzuzeigen
            let kategoryNumber = getKategoryNumber();
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
        function printChosenObject() {
            let kategoryNumber = getKategoryNumber();
            switch (kategoryNumber) {
                case 0:
                    let railVehicleSelected0 = _elementeArray;
                    console.log("Name: " + railVehicleSelected0.locomotive[_loopNumber].name);
                    console.log("Typ: " + railVehicleSelected0.locomotive[_loopNumber].type);
                    console.log("Top Speed: " + railVehicleSelected0.locomotive[_loopNumber].topSpeed.toString());
                    console.log("Farbe: " + railVehicleSelected0.locomotive[_loopNumber].color);
                    break;
                case 1:
                    let railVehicleSelected1 = _elementeArray;
                    console.log("Name: " + railVehicleSelected1.car[_loopNumber].name);
                    console.log("Typ: " + railVehicleSelected1.car[_loopNumber].type);
                    console.log("Top Speed: " + railVehicleSelected1.car[_loopNumber].topSpeed.toString());
                    console.log("Farbe: " + railVehicleSelected1.car[_loopNumber].color);
                    break;
                case 2:
                    let railVehicleSelected2 = _elementeArray;
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
        let innercontentDiv = document.getElementById(konfiguratorContentBoxID);
        let innerdiv = document.createElement("div");
        innerdiv.className = "konfiguratorContent";
        innerdiv.id = konfiguratorContentID;
        innercontentDiv.appendChild(innerdiv);
        fillInnerDiv(_headlineIdArray, konfiguratorContentID, _loopNumber, contentValueArray, _headlinesArray);
    }
    function fillInnerDiv(_headlineIdArray, konfiguratorContentID, _loopNumber, _contentValueArray, _headlinesArray) {
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
            contentTypeContentSpan.textContent = _contentValueArray[i];
            //Erstellte Elemente an das Elternelement anhängen
            contentTypeContent.appendChild(contentTypeContentH4);
            contentTypeContent.appendChild(contentTypeContentSpan);
        }
    }
    Aufgabe2_5.fillInnerDiv = fillInnerDiv;
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
    Aufgabe2_5.idGenerator = idGenerator;
    //Informationen der Objekte ausgeben
    function contentValue(_railVehicle, _loopNumber) {
        let contentValueArray = [];
        let kategoryNumber = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString = localStorage.getItem("kategoryCounter");
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
    Aufgabe2_5.contentValue = contentValue;
    //IDs für Buttons dynamisch erstellen
    function buttonIdGenerator(_loopNumber) {
        let buttonId = "buttonSelected" + _loopNumber;
        return buttonId;
    }
    Aufgabe2_5.buttonIdGenerator = buttonIdGenerator;
    //KategorieCounter: Speichert und liest aus dem localStorage, in welcher Kategorie er sich befindet
    function kategoryCounter() {
        //Fürs Debugging
        console.log("Kategorienummer:" + localStorage.getItem("kategoryCounter"));
        let kategoryNumber = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString = localStorage.getItem("kategoryCounter");
        //String zu Number konvertieren und um eins erhöhen
        kategoryNumber = +kategoryNumberString;
        kategoryNumber += 1;
        //Wert wieder im localStorage ablegen
        localStorage.setItem("kategoryCounter", JSON.stringify(kategoryNumber));
    }
    //Liefert die aktuell im LocalStorage zwischengespeicherte KategorieNummer zurück
    function getKategoryNumber() {
        let kategoryNumber = 0;
        //KategorieNummer aus localStorage auslesen
        let kategoryNumberString = localStorage.getItem("kategoryCounter");
        //String zu Number konvertieren
        kategoryNumber = +kategoryNumberString;
        return kategoryNumber;
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map