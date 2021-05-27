"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    //Synchrone Funktion SendData, welche die URL erwitert
    function sendData() {
        //Daten asus Formular auslesen
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        //asynchrone Funktion communicate aufrufen, welche die Anfrage per fetch an den server schickt
        communicate(url);
    }
    document.querySelector("#sendData").addEventListener("click", sendData);
    async function communicate(_url) {
        //Anfrage an den Server
        let response = await fetch(_url);
        //Antwort vom server
        let responseString = await response.text();
        console.log(responseString);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map