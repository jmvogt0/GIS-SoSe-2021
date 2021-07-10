namespace Endabgabe {
    localStorage.clear();
    document.querySelector("#startGame").addEventListener("click", startGame);
    let cardBackground: string = "../../img/Background.png";
    

    async function getData(): Promise <void> {
        let url: string = "https://gis-sose-2021-jmvogt.herokuapp.com/getMemoryData";
        //let url: string = "http://localhost:8100/getMemoryData";
        let response: Response = await fetch(url);
        //Array mit den jeweiligen Memorykarten
        let dataArray: Memorycard [] = await response.json();
        //Array duplizieren
        for (let i: number = 8; i < 16; i++) {
            dataArray [i] = dataArray [i - 8];
        }
        //Array zufällig anordnen nach Fisher-Yates -- https://www.delftstack.com/de/howto/javascript/shuffle-array-javascript/
        for (let i: number = dataArray.length - 1; i > 0; i--) {
            let j: number = Math.floor(Math.random() * (i + 1)); //random index --//Math.floor rundet ab und gibt die nächste Ganzzahl zurück
            [dataArray[i], dataArray[j]] = [dataArray[j], dataArray[i]]; //swap
        }
        //Array im LocalStorage speicher
        localStorage.setItem("dataArray", JSON.stringify(dataArray));
    }
    //Spielfläche erstellen
    buildMemoryArea();
    //Alle LocalStorage-Werte auf 0 setzen, falls der Spieler die Seite neu lädt, damit es noch funktioniert
    localStorage.setItem("cardCounter", "0"); 

    //Spiel starten
    function startGame(): void {
        startTimer();
        activatePointerEvents();
        //Button ändern
        let button: HTMLElement = document.getElementById("startGame");
        button.id = "stopGame";
        button.textContent = "Spiel stoppen";
        button.removeEventListener("click", startGame);
        button.addEventListener("click", stopGame);
        setStartTime();
        getData();
    }
    //Spiel stoppen
    function stopGame(): void {
        //MemoryArea zurücksetzen
        buildMemoryArea();
        stopTimer();

        //Button ändern
        let button: HTMLElement = document.getElementById("stopGame");
        button.id = "startGame";
        button.removeEventListener("click", stopGame);
        button.addEventListener("click", startGame);
        button.textContent = "Start New Game";

        disablePointerEvents();
    }

    let timerNumber: number;    
    function startTimer(): void {
        //aktuelle Zeit auslesen
        let startTime: number = new Date().getTime();
    
        timerNumber = window.setInterval(function(): void { 
            let now: number = new Date().getTime();
        
            let passedTime: number = now - startTime;
            //Zeit umrechnen
            let minutes: number = Math.floor((passedTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds: number = Math.floor((passedTime % (1000 * 60)) / 1000);
            //Zeit ausgeben
            let timer: HTMLElement = document.getElementById("passedTime");
            timer.innerHTML = "Vergangene Zeit: " +  minutes + "m " + seconds + "s";
        },                               1000);
    }
    function stopTimer(): void {
        clearInterval(timerNumber);
    }
    //Legt eine Spielfläche mit 16 Bildern an
    function buildMemoryArea(): void {
        //Vor dem Aufbau die Spielfläche zurücksetzen
        destroyMemoryArea();
        let memoryContainer: HTMLElement = document.getElementById("memoryContainer");
        for (let i: number = 0; i < 16; i++) {
            let memoryItem: HTMLImageElement = document.createElement("img");
            memoryItem.src = cardBackground;
            memoryItem.id = "field" + i;
            memoryItem.addEventListener("click", selectMemoryCard);
            memoryContainer.appendChild(memoryItem);
        }
    }

    //Setzt die Spielfläche zurück
    function destroyMemoryArea(): void {
        let memoryContainer: HTMLElement = document.getElementById("memoryContainer");
        while (memoryContainer.firstChild) {
            memoryContainer.removeChild(memoryContainer.firstChild);
        }
    }
    //Karte auswählen
    function selectMemoryCard(_event: Event): void {
        let target: HTMLElement = <HTMLElement> _event.target;
        let cardRotated: boolean;
        //--TODO-- wenn die 2. KArte angeklickt wurde auch das EVENT entfernen, bis beide wieder umgedeckt sind*
        //Auslesen, ob schon eine Karte umgedreht wurde
        cardRotated = JSON.parse(localStorage.getItem("1cardRotated"));
        //Wenn bisher keine Karte umgedreht wurde Karte aufdecken und cardCounter um 1 erhöhen
        if (cardRotated == false || cardRotated == null) {
            rotateCard(target.id);
            cardRotated = true;
            localStorage.setItem("cardId", target.id);
            localStorage.setItem("1cardRotated", JSON.stringify(cardRotated));
            removeButtonEvent(target.id);
        }
        //Wenn bereits eine Karte umgedreht wurde weitere Karte aufdecken und cardCounter zurücksetzen
        else {
            //Alle Pointer-Events in der MemoryArea deaktivieren
            disablePointerEvents();
            rotateCard(target.id);
            cardRotated = false;
            localStorage.setItem("1cardRotated", JSON.stringify(cardRotated));
            //Prüfen, ob die Karten dem selben Paar angehören
            let checkedPairID: boolean = checkPairID (target.id, localStorage.getItem("cardId"));
            //-->JA--> Dann EventListener entfernen und Karten aufgedeckt lassen (EventListener in Exra Funktion entfernen) Richtige KarteCounter hochzählen
            if (checkedPairID) {
                //ButtonEvents entfernen
                removeButtonEvent(localStorage.getItem("cardId"));
                //KartenCounter im LocalStorage erhöhen
                let countedCardString: string = localStorage.getItem("cardCounter");
                let countedCard:  number = +countedCardString + 1;
                localStorage.setItem("cardCounter", countedCard.toString());
                activatePointerEvents();
            }
            //-->NEIN--> Karten wieder umdrehen
            if (checkedPairID == false) {
                rotateBack();
            }
            //Auslesen ob noch eine Karte umgedreht werden muss, sonst Spiel beenden
            if (+localStorage.getItem("cardCounter") >= 8) {
                stopGame();
                location.href = "userData.html";
                let playTime: number = (new Date().getTime()) - +localStorage.getItem("startTime");
                localStorage.setItem("playTime", playTime.toString());
            }
        }
        function rotateBack(): void {
            setTimeout(function(): void {
                //EventListener wieder auf die 1. Karte legen
                addButtonEvent(localStorage.getItem("cardId"));
                //Beide Karten wieder zurückdrehen
                rotateCardBack(localStorage.getItem("cardId"));
                rotateCardBack(target.id);
                activatePointerEvents();
            },         2000);
        }
    }
    //Alle Pointer-Events in der MemoryArea wieder aktivieren
    function activatePointerEvents(): void {
        let activateClick: HTMLElement = document.getElementById("memoryContainer");
        activateClick.style.pointerEvents = "all";
    }
    //Alle Pointer-Events in der MemoryArea deaktivieren
    function disablePointerEvents(): void {
        let disableClick: HTMLElement = document.getElementById("memoryContainer");
        disableClick.style.pointerEvents = "none";
    }

    //Aus target.id die Zahl auslesen
    function getCardId(_id: string): number {
        let numberIdString: string = _id.charAt(5);
        if (_id.length > 5) numberIdString += _id.charAt(6);
        let numberId: number = parseInt(numberIdString);
        return numberId;
    }

    //Karte wieder zurückdrehen
    function rotateCardBack(_id: string): void {
        let image: HTMLElement = document.getElementById(_id);
        //Rückseite wieder anzeigen
        image.setAttribute("src",  cardBackground);
    }
    
    //Karte umdrehen und anderes Bild anzeigen
    function rotateCard(_id: string): void {
        //Das Array mit den Urls aus dem LocalStorage aufrufen
        let dataArray: Memorycard [] = getDataArray();
        let imageSrc: string = dataArray[getCardId(_id)].pictureUrl;
        let image: HTMLElement = document.getElementById(_id);
        image.setAttribute("src", imageSrc);
    }

    //CheckPairID -- Die zwei Pair-IDs vergleichen und je nachdem einen Rückgabewert zurückgeben
    function checkPairID (_id1: string, _id2: string): boolean {
        //Das Array mit den Urls aus dem LocalStorage aufrufen
        let dataArray: Memorycard [] = getDataArray();
        let pairID1: string = dataArray[getCardId(_id1)].pairID;
        let pairID2: string = dataArray[getCardId(_id2)].pairID;
        //Wenn gleich, dann TRUE, sonst FALSE
        if (pairID1 == pairID2) {
            return true;
        }
        return false;
    }

    //RemoveButton
    function removeButtonEvent (_id: string): void {
        let button: HTMLElement = document.getElementById(_id);
        button.removeEventListener("click", selectMemoryCard);
    }
    //AddButtonEvent
    function addButtonEvent(_id: string): void {
        let button: HTMLElement = document.getElementById(_id);
        button.addEventListener("click", selectMemoryCard);
    }

    //Das Array mit den Urls aus dem LocalStorage aufrufen
    function getDataArray (): Memorycard [] {
        let localStorageDataArray: string = localStorage.getItem("dataArray");
        let dataArray: Memorycard [] = JSON.parse(localStorageDataArray);
        return dataArray;
    }

    //Startzeit im Localstorage abspeichern
    function setStartTime(): void {
        let startTime: number = new Date().getTime();
        localStorage.setItem("startTime", JSON.stringify(startTime));
    }
}
    
    