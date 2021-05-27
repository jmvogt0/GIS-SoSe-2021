namespace Aufgabe3_1 {
    //Synchrone Funktion SendData, welche die URL erwitert
    function sendData (): void {
        //Daten asus Formular auslesen
        let formData: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gis-sose-2021-jmvogt.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        //asynchrone Funktion communicate aufrufen, welche die Anfrage per fetch an den server schickt
        communicate (url);
    }
    document.querySelector("#sendData").addEventListener("click", sendData);


    async function communicate (_url: RequestInfo): Promise<void> {
        //Anfrage an den Server
        let response: Response = await fetch(_url);
        //Antwort vom server
        let responseString: string = await response.text();
        console.log(responseString);
    }
}