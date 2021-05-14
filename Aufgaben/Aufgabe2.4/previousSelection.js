"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    //ZugDaten aus JSON-Datei auslesen
    let trainObject = JSON.parse(Aufgabe2_4.railVehicleJSON);
    //Span anlegen, welcher dann den Name des ausgewählten Elements aus Kategorie1 ausgibt
    let previousSelectionDiv = document.getElementById("previousSelectionKat1");
    let previousSelectionSpan = document.createElement("span");
    let kategoryValueString = (localStorage.getItem("kategorie1"));
    let kategoryValue = +kategoryValueString;
    let selectedContent = trainObject.locomotive[kategoryValue].name;
    previousSelectionSpan.textContent = selectedContent;
    previousSelectionDiv.appendChild(previousSelectionSpan);
    //Span anlegen, welcher dann den Name des ausgewählten Elements aus Kategorie2 ausgibt 
    //wird nur aufgerufen, wenn der Wert für Kategorie2 nicht null ist.
    if (localStorage.getItem("kategorie2") != null) {
        let previousSelectionDiv2 = document.getElementById("previousSelectionKat2");
        let previousSelectionSpan2 = document.createElement("span");
        let kategoryValueString2 = (localStorage.getItem("kategorie2"));
        let kategoryValue2 = +kategoryValueString2;
        let selectedContent2 = trainObject.car[kategoryValue2].name;
        previousSelectionSpan2.textContent = selectedContent2;
        previousSelectionDiv2.appendChild(previousSelectionSpan2);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=previousSelection.js.map