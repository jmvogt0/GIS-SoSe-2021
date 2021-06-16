namespace Task3_4 {
    async function sendData(): Promise <void> {
        //let url: string = "https://gis-sose-2021-jmvogt.herokuapp.com/html";
        let url: string = "http://localhost:8100/sendData";
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        //wenn eine response vorliegt ausgabe tätigen
        if (response != undefined) {
            let answerOutput: HTMLElement = document.getElementById("answer");
            answerOutput.innerHTML = "Daten an Datenbank gesendet";
        }
    }

    async function getData(): Promise<void> {
        let url: string = "http://localhost:8100/getData";
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        //HTML Code während der Laufzeit einfügen
        let serverResponse: HTMLElement = document.getElementById("answer");
        serverResponse.innerHTML = responseString;
    }
    
    //Buttons
    document.querySelector("#sendData").addEventListener("click", sendData);
    document.querySelector("#printData").addEventListener("click", getData);
}
