namespace Aufgabe2_4 {
    //ZugDaten aus JSON-Datei auslesen
    let trainObject: Train = JSON.parse(railVehicleJSON);
    
    //Span anlegen, welcher dann den Name des ausgewählten Elements aus Kategorie1 ausgibt
    let previousSelectionDiv: HTMLElement = document.getElementById("previousSelectionKat1");
    let previousSelectionSpan: HTMLSpanElement = document.createElement("span");

    let kategoryValueString: string = (localStorage.getItem("kategorie1"));
    let kategoryValue: number = +kategoryValueString;

    let selectedContent: string = trainObject.locomotive[kategoryValue].name;
    previousSelectionSpan.textContent = selectedContent;

    previousSelectionDiv.appendChild(previousSelectionSpan);

    //Span anlegen, welcher dann den Name des ausgewählten Elements aus Kategorie2 ausgibt 
    //wird nur aufgerufen, wenn der Wert für Kategorie2 nicht null ist.
    if (localStorage.getItem("kategorie2") != null) {
        let previousSelectionDiv2: HTMLElement = document.getElementById("previousSelectionKat2");
        let previousSelectionSpan2: HTMLSpanElement = document.createElement("span");
    
        let kategoryValueString2: string = (localStorage.getItem("kategorie2"));
        let kategoryValue2: number = +kategoryValueString2;
    
        let selectedContent2: string = trainObject.car[kategoryValue2].name;
        previousSelectionSpan2.textContent = selectedContent2;
    
        previousSelectionDiv2.appendChild(previousSelectionSpan2);
    }
}