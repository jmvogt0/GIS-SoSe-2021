namespace Aufgabe3_1 {
    let formData: FormData = new FormData(document.forms[0]);


    console.log("HelloWorld");

    function sendData (): void {
        let url: RequestInfo = "https://gis-sose-2021-jmvogt.herokuapp.com";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        communicate (url);
    }
    document.querySelector("#sendData").addEventListener("click", sendData);


    async function communicate (_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        let responseString: string = await response.text();
        console.log(responseString);
    }
}