"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    async function sendData() {
        console.log("HelloWorld");
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        await fetch(url);
        //let response: Response = await fetch(url);
        //let responseString: string = await response.text();
        //console.log(responseString);
    }
    document.querySelector("#sendData").addEventListener("click", sendData);
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map