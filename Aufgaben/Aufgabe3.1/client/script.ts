namespace Aufgabe3_1 {
    async function sendData (): Promise<void> {
        console.log("HelloWorld");
        let formData: FormData = new FormData(document.forms[0]);
        
        let url: string = "https://gis-sose-2021-jmvogt.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(url);
        await fetch(url);
        //let response: Response = await fetch(url);
        //let responseString: string = await response.text();


        //console.log(responseString);
    }
    document.querySelector("#sendData").addEventListener("click", sendData);

}



