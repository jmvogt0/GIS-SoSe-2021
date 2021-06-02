"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    //Synchrone Funktion SendData, welche die URL erweitert
    function sendDataHtml() {
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/html";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        communicateHtml(url);
    }
    async function communicateHtml(_url) {
        let response = await fetch(_url);
        let responseString = await response.text();
        //HTML Code während der Laufzeit einfügen
        let answerOutput = document.getElementById("answer");
        answerOutput.innerHTML = responseString;
    }
    function sendDataJson() {
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/json";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        communicateJson(url);
    }
    async function communicateJson(_url) {
        let response = await fetch(_url);
        let responseString = await response.json();
        console.log(responseString);
    }
    //Buttons/
    document.querySelector("#sendDataHtml").addEventListener("click", sendDataHtml);
    document.querySelector("#sendDataJson").addEventListener("click", sendDataJson);
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map