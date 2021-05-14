namespace Aufgabe2_4 {
    //Daten aus data.ts JSON String auslesen
    let trainObject: Train = JSON.parse(railVehicleJSON);
    let headlines: Headline = JSON.parse(headlineJSON);
    
    //Button um auf die Startseite zurückzukehren
    let backToStartButton: HTMLElement = document.getElementById("backToStartButton");
    backToStartButton.addEventListener("click", backToStart);
    
    //Ausgwählte Werte visuell anzeigen
    let kategoryValueString: string = "";
    let kategoryValue: number = 0;
    //Schleife um die Ausgewählten Werte der Kategorie auszuwählen
    for (let i: number = 0; i < 3; i++) {
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
        let contentValueArray: string[] = contentValueArrayAusgabe(trainObject, i, kategoryValue);

        //Switch für die ID des ContainerDivs anlegen
        let containerID: string = "";
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
        for (let j: number = 0; j < headlines.headlineElements.length; j++) {
        
            let kategory1Content: HTMLElement = document.getElementById(containerID);
            
            let kategoryContentDiv: HTMLDivElement = document.createElement("div");
            kategoryContentDiv.className = "summaryContent";
    
            let contentTypeContentH4: HTMLHeadElement = document.createElement("h4");
            let contentTypeContentSpan: HTMLSpanElement = document.createElement("span");
            
            contentTypeContentH4.textContent = headlines.headlineElements[j];
            contentTypeContentSpan.textContent = contentValueArray[j];
    
            kategoryContentDiv.appendChild(contentTypeContentH4);
            kategoryContentDiv.appendChild(contentTypeContentSpan);

            kategory1Content.appendChild(kategoryContentDiv);
        }
    }

    //Aus dem Train für den Container den jeweils richtigen Wert auslesen
    function contentValueArrayAusgabe (_trainObject: Train, _kategoryNumber: number, _selectedNumber: number): string [] {
        let contentValueArray: string [] = [];
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
    function backToStart(): void {
        //local Storage leeren
        localStorage.clear();

        //Startseite aufrufen
        location.href = "index.html";
    }
}