import * as Http from "http";
import * as Url from "url";

export namespace P_3_2Server {
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);

    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Hearing");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            //URL parsen
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            
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
                let jsonString: string = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
        } 
        _response.end();
    }
}