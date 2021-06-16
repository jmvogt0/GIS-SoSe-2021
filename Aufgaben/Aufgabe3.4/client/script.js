"use strict";
var Task3_4;
(function (Task3_4) {
    async function sendData() {
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/sendData";
        //let url: string = "http://localhost:8100/sendData";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        let response = await fetch(url);
        //wenn eine response vorliegt ausgabe tätigen
        if (response != undefined) {
            let answerOutput = document.getElementById("answer");
            answerOutput.innerHTML = "Daten an Datenbank gesendet";
        }
    }
    async function getData() {
        //let url: string = "http://localhost:8100/getData";
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/getData";
        let response = await fetch(url);
        let responseString = await response.text();
        //HTML Code während der Laufzeit einfügen
        let serverResponse = document.getElementById("answer");
        serverResponse.innerHTML = responseString;
    }
    //Buttons
    document.querySelector("#sendData").addEventListener("click", sendData);
    document.querySelector("#printData").addEventListener("click", getData);
})(Task3_4 || (Task3_4 = {}));
//# sourceMappingURL=script.js.map