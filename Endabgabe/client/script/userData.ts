namespace Endabgabe {
    document.querySelector("#sendData").addEventListener("click", sendData);
    let displayTime: HTMLElement = document.getElementById("time");
    let playTime: number = +localStorage.getItem("playTime");
    let minutes: number = Math.floor(playTime % (1000 * 60 * 60) / (1000 * 60));
    let seconds: number = Math.floor(playTime % (1000 * 60) / 1000);
    displayTime.textContent = minutes.toString() + "m" + seconds.toString() + "s";

    async function sendData(): Promise <void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "https://gis-sose-2021-jmvogt.herokuapp.com/addScore";
        //let url: RequestInfo = "http://localhost:8100/addScore";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let playTime: string = localStorage.getItem("playTime");
        let year: number = new Date().getFullYear();
        let month: number = new Date().getMonth();
        let day: number = new Date().getDate();
        let date: string = day + "." + month + "." + year;
        //query an die Url anhängen
        url = url + "?" + query.toString();
        url = url + "&" + "date=" + date + "&" + "duration=" + playTime;
  
        let response: Response = await fetch(url);
        if (response != undefined) {
            console.log("Daten erfolgreich gesendet");
        }
        if (response == undefined) {
            console.log("pus");
        }
        console.log(response);
        location.href = "score.html";
    } 
}