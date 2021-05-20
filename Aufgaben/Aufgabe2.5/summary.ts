namespace Aufgabe2_4 {
    //Daten aus data.ts JSON String auslesen
    //let trainObject: Train = JSON.parse(railVehicleJSON);
    //let headlines: Headline = JSON.parse(headlineJSON);

    async function loadJSON (_url: RequestInfo, _url2: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let response2: Response = await fetch(_url2);

        let train: Train = await response.json();
        let headlineArray: Headline = await response2.json();
        
        showInfo(train, headlineArray);
    }
    
    //Button um auf die Startseite zurückzukehren
    let backToStartButton: HTMLElement = document.getElementById("backToStartButton");
    backToStartButton.addEventListener("click", backToStart);
    
    function showInfo(_trainObject: Train, _headlineArray: Headline): void {
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
            let contentValueArray: string[] = contentValueArrayAusgabe(_trainObject, i, kategoryValue);

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
            for (let j: number = 0; j < _headlineArray.headlineElements.length; j++) {
            
                let kategory1Content: HTMLElement = document.getElementById(containerID);

                let kategoryContentDiv: HTMLDivElement = document.createElement("div");
                kategoryContentDiv.className = "summaryContent";
            
                let contentTypeContentH4: HTMLHeadElement = document.createElement("h4");
                let contentTypeContentSpan: HTMLSpanElement = document.createElement("span");

                contentTypeContentH4.textContent = _headlineArray.headlineElements[j];
                contentTypeContentSpan.textContent = contentValueArray[j];
            
                kategoryContentDiv.appendChild(contentTypeContentH4);
                kategoryContentDiv.appendChild(contentTypeContentSpan);

                kategory1Content.appendChild(kategoryContentDiv);
            }
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

    async function serverCommunication(_url: RequestInfo): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();

        let answer: Response = await fetch(_url);
        // tslint:disable-next-line: no-any
        let output: any = await answer.json();

        if (output.message != null) {
            let displayOutput: HTMLParagraphElement = <HTMLDivElement> document.getElementById("serverOutputMessage");
            displayOutput.textContent = output.message;
        }
        else {
            let displayOutput: HTMLParagraphElement = <HTMLDivElement> document.getElementById("serverOutputError");
            displayOutput.textContent = output.error;
        }
        

        

        /*let promise: Promise<Response> = fetch(_url);
        promise.then(handleSuccess, handleFailure);*/        
    }

    /*
    function handleFailure(_response: Response): void {
        console.log("Failure", _response);
      }
      
    async function handleSuccess(_response: Response): void {
        console.log("Success", _response);
        let answer: Response = await fetch(_url);
        let displayOutput: HTMLParagraphElement = <HTMLDivElement> document.getElementById("serverOutput");
        displayOutput.textContent = output;
    }*/

    loadJSON ("https://jmvogt0.github.io/GIS-SoSe-2021/Aufgaben/Aufgabe2.5/dataObject.json", "https://jmvogt0.github.io/GIS-SoSe-2021/Aufgaben/Aufgabe2.5/dataHeadline.json");
    serverCommunication("https://gis-communication.herokuapp.com");
}