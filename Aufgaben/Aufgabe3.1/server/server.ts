import * as Http from "http";

//Namespace anlegen
export namespace P_3_1Server {
    //Konsolenausgabe "Starting Server"
    console.log("Starting server");
    //Variable Port vom Typ Number definieren
    let port: number = Number(process.env.PORT);
    //Falls der Port nicht gesetzt ist, wird er auf 8100 geändert
    if (!port)
        port = 8100;

    //Server erstellen
    let server: Http.Server = Http.createServer();
    //Eventlistener welcher auf das Event request reagiert und dann die Funktion handleRequest aufruft
    server.addListener("request", handleRequest);
    //Eventlistener welcher auf das Event listening reagiert und dann die Funktion handleListen aufruft
    server.addListener("listening", handleListen);
    //Server hört dann auf die Variable Port (in unserem Fall 8100)
    server.listen(port);

    //Wenn das Event listening ausgelöst wird, wird eine Ausgabe in der Konsole mit "Listening" ausgeben
    function handleListen(): void {
        console.log("Listening");
    }
    //Wenn das Event request ausgelöst wird, wird diese Funktion aufgerufen und die Übergabeparameter _request und _response übergeben
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //Dann die Konsolenausgabe "I hear voices"
        console.log("I hear voices!");
        //content type und Zeichenset definieren
        _response.setHeader("content-type", "text/html; charset=utf-8");

        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe visuell ausgeben
        _response.write(_request.url);
        _response.end();
        //Ausgabe der query
        console.log(_request.url);
    }
}