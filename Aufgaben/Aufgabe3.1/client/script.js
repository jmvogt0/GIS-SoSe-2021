"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let formData = new FormData(document.forms[0]);
    console.log("HelloWorld");
    function sendData() {
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com";
        console.log(url);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        communicate(url);
    }
    document.querySelector("#sendData").addEventListener("click", sendData);
    async function communicate(_url) {
        let response = await fetch(_url);
        let responseString = await response.text();
        console.log(responseString);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map