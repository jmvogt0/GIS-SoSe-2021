"use strict";
var Endabgabe;
(function (Endabgabe) {
    document.querySelector("#sendData").addEventListener("click", sendData);
    let displayTime = document.getElementById("time");
    let playTime = +localStorage.getItem("playTime");
    let minutes = Math.floor(playTime % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(playTime % (1000 * 60) / 1000);
    displayTime.textContent = minutes.toString() + "m" + seconds.toString() + "s";
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/addScore";
        //let url: RequestInfo = "http://localhost:8100/addScore";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let playTime = localStorage.getItem("playTime");
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let day = new Date().getDate();
        let date = day + "." + month + "." + year;
        //query an die Url anhängen
        url = url + "?" + query.toString();
        url = url + "&" + "date=" + date + "&" + "duration=" + playTime;
        let response = await fetch(url);
        if (response != undefined) {
            console.log("Daten erfolgreich gesendet");
        }
        if (response == undefined) {
            console.log("pus");
        }
        console.log(response);
        location.href = "score.html";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=userData.js.map