"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
//import * as Url from "url";
var P_3_1Server;
(function (P_3_1Server) {
    //Ausgabe Starting Server
    console.log("Starting server");
    //Port nummer definieren
    let port = Number(process.env.PORT);
    //Falls kein Port definiert ist, wird Port 8100 definiert
    if (!port)
        port = 8100;
    //Server erstellen
    let server = Http.createServer();
    //der Variable Server einen Eventlistener request hinzufügen, welcher die Funktion handleRequest aufruft
    server.addListener("request", handleRequest);
    //der Variable Server einen Eventlistener request hinzufügen, welcher die Funktion handleRequest aufruft
    server.addListener("listening", handleListen);
    server.listen(port);
    //Ausgabe in der Konsole: "Listening"
    function handleListen() {
        console.log("Listening");
    }
    //Funktion handleRequest mit den geforderten Parametern _request vom Typ Http.IncomingMessage und _response vom Typ Http.ServerResponse
    //Der Rückgabewert der Funktion ist void
    function handleRequest(_request, _response) {
        //Ausgabe in der Konsole "I hear voices". sobald die Funktion aufgerufen wird
        console.log("I hear voices!");
        //
        _response.setHeader("content-type", "text/html; charset=utf-8");
        //
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Funktion write aufrufen, welchen den Inhalt der Url dann in das html schreibt
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map