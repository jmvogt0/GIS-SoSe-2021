"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Hearing");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            //URL parsen
            let url = Url.parse(_request.url, true);
            //Über den Pfad auslesen, was nun getan werden soll
            if (url.pathname == "/html") {
                //Ausgabe in Html Code
                _response.write("<h3>" + "Serverantwort:" + "</h3>");
                for (let key in url.query) {
                    _response.write("<p>" + key + ":" + url.query[key] + "</p>");
                }
            }
            if (url.pathname == "/json") {
                //JSON string erstellen und an Client schicken
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=server.js.map