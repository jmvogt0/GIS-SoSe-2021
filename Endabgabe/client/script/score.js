"use strict";
var Endabgabe;
(function (Endabgabe) {
    getScoreData();
    async function getScoreData() {
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/getScoreData";
        //let url: string = "http://localhost:8100/getScoreData";
        let response = await fetch(url);
        //Array mit den jeweiligen ScoreDaten
        let scoreArray = await response.json();
        //Array im LocalStorage speicher
        localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
        //Alle Daten anzeigen
        displayScoreData();
    }
    function displayScoreData() {
        let scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
        let container1 = document.getElementById("container1");
        container1.className = "container1";
        //Sortieren
        for (let i = 0; i < scoreArray.length - 1; i++) {
            for (let j = i + 1; j < scoreArray.length; j++) {
                if (scoreArray[i].duration < scoreArray[j].duration) {
                    let x;
                    x = scoreArray[i];
                    scoreArray[i] = scoreArray[j];
                    scoreArray[j] = x;
                }
            }
        }
        //Array umdrehen
        scoreArray.reverse();
        //Ausgabe
        for (let i = 0; i < scoreArray.length; i++) {
            //Elemente erstellen
            let container2 = document.createElement("div");
            container2.className = "container2";
            let name = document.createElement("p");
            name.textContent = scoreArray[i].name;
            let date = document.createElement("p");
            date.textContent = scoreArray[i].date;
            let time = document.createElement("p");
            //Dauer in Minuten+Sekunden anzeigen
            let timeString = Math.floor((scoreArray[i].duration % (1000 * 60 * 60)) / (1000 * 60)).toString() + "m";
            timeString = timeString + Math.floor((scoreArray[i].duration % (1000 * 60)) / (1000)) + "s";
            time.textContent = timeString;
            //Erstellte Elemente aneinander anf??gen
            container2.appendChild(name);
            container2.appendChild(date);
            container2.appendChild(time);
            container1.appendChild(container2);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=score.js.map