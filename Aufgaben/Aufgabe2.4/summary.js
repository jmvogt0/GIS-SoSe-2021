"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    //Daten aus data.ts JSON String auslesen
    let trainObject = JSON.parse(Aufgabe2_4.railVehicleJSON);
    let headlines = JSON.parse(Aufgabe2_4.headlineJSON);
    //Button um auf die Startseite zurückzukehren
    let backToStartButton = document.getElementById("backToStartButton");
    backToStartButton.addEventListener("click", backToStart);
    //Ausgwählte Werte visuell anzeigen
    let kategoryValueString = "";
    let kategoryValue = 0;
    //Schleife um die Ausgewählten Werte der Kategorie auszuwählen
    for (let i = 0; i < 3; i++) {
        switch (i) {
            case 0:
                kategoryValueString = (localStorage.getItem("kategorie1"));
                kategoryValue = +kategoryValueString;
                break;
            case 1:
                kategoryValueString = (localStorage.getItem("kategorie2"));
                kategoryValue = +kategoryValueString;
                break;
            case 2:
                kategoryValueString = (localStorage.getItem("kategorie3"));
                kategoryValue = +kategoryValueString;
                break;
        }
        let contentValueArray = contentValueArrayAusgabe(trainObject, i, kategoryValue);
        //Switch für die ID des ContainerDivs anlegen
        let containerID = "";
        switch (i) {
            case 0:
                containerID = "containerItem1";
                break;
            case 1:
                containerID = "containerItem2";
                break;
            case 2:
                containerID = "containerItem3";
                break;
        }
        //For-Schleife um das Div zu befüllen
        for (let j = 0; j < headlines.headlineElements.length; j++) {
            let kategory1Content = document.getElementById(containerID);
            let kategoryContentDiv = document.createElement("div");
            kategoryContentDiv.className = "summaryContent";
            let contentTypeContentH4 = document.createElement("h4");
            let contentTypeContentSpan = document.createElement("span");
            contentTypeContentH4.textContent = headlines.headlineElements[j];
            contentTypeContentSpan.textContent = contentValueArray[j];
            kategoryContentDiv.appendChild(contentTypeContentH4);
            kategoryContentDiv.appendChild(contentTypeContentSpan);
            kategory1Content.appendChild(kategoryContentDiv);
        }
    }
    //Aus dem Train für den Container den jeweils richtigen Wert auslesen
    function contentValueArrayAusgabe(_trainObject, _kategoryNumber, _selectedNumber) {
        let contentValueArray = [];
        switch (_kategoryNumber) {
            case 0:
                contentValueArray.push(_trainObject.locomotive[_selectedNumber].name);
                contentValueArray.push(_trainObject.locomotive[_selectedNumber].type);
                contentValueArray.push(_trainObject.locomotive[_selectedNumber].topSpeed.toString());
                contentValueArray.push(_trainObject.locomotive[_selectedNumber].color);
                break;
            case 1:
                contentValueArray.push(_trainObject.car[_selectedNumber].name);
                contentValueArray.push(_trainObject.car[_selectedNumber].type);
                contentValueArray.push(_trainObject.car[_selectedNumber].topSpeed.toString());
                contentValueArray.push(_trainObject.car[_selectedNumber].color);
                break;
            case 2:
                contentValueArray.push(_trainObject.specialCar[_selectedNumber].name);
                contentValueArray.push(_trainObject.specialCar[_selectedNumber].type);
                contentValueArray.push(_trainObject.specialCar[_selectedNumber].topSpeed.toString());
                contentValueArray.push(_trainObject.specialCar[_selectedNumber].color);
                break;
        }
        return contentValueArray;
    }
    //Funktion um wieder die Startseite des Konfigurators aufzurufen
    function backToStart() {
        //local Storage leeren
        localStorage.clear();
        //Startseite aufrufen
        location.href = "index.html";
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=summary.js.map