namespace Endabgabe {
    getImageData();
    async function getImageData(): Promise <void> {
        let url: string = "https://gis-sose-2021-jmvogt.herokuapp.com/getMemoryData";
        //let url: string = "http://localhost:8100/getMemoryData";
        let response: Response = await fetch(url);
        //Array mit den jeweiligen Memorykarten
        let dataArray: Memorycard [] = await response.json();
        //Array im LocalStorage speicher
        localStorage.setItem("dataArray", JSON.stringify(dataArray)); 

        //Alle Bilder der Datenbank anzeigen
        displayImageData();
    }

    
    function displayImageData(): void {
        let dataArray: Memorycard [] = JSON.parse(localStorage.getItem("dataArray"));

        let container: HTMLElement = document.getElementById("container1");
        container.textContent = "";

        for (let i: number = 0; i < dataArray.length; i++) {
            let container2: HTMLDivElement = document.createElement("div");
            container2.className = "container2";
            //Anzeigebild
            let memoryImage: HTMLImageElement = document.createElement("img");
            memoryImage.src = dataArray[i].pictureUrl;
            container2.appendChild(memoryImage);
            //InputElement
            let form: HTMLFormElement = document.createElement("form");
            let input: HTMLInputElement = document.createElement("input");
            input.type = "text";
            input.name = "input";
            input.value = dataArray[i].pictureUrl;
            form.appendChild(input);
            container2.appendChild(form);
            //Button
            let button: HTMLButtonElement = document.createElement("button");
            button.textContent = "Ändern";
            button.id = "image" + i;
            button.addEventListener("click", changeImage);
            container2.appendChild(button);
            container.appendChild(container2);
        }
    }

    //Bild in der Datenbank ändern
    function changeImage(_event: Event): void {
        let target: HTMLElement = <HTMLElement> _event.target;
        let id:  number = getPictureId(target.id);
        let formData: FormData = new FormData(document.forms[id]);

        let url: string = "https://gis-sose-2021-jmvogt.herokuapp.com/changeImage";
        //let url: string = "http://localhost:8100/changeImage";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        id = id + 1;
        url = url + "&" + "id=" + id;

        changeImageCommunicate(url);
    }
    async function changeImageCommunicate (_url: RequestInfo): Promise <void> {
        await fetch(_url);
        getImageData();
    }

    //Nummer von der ID extrahieren
    function getPictureId(_id: string): number {
        let numberIdString: string = _id.charAt(5);
        if (_id.length > 5) numberIdString += _id.charAt(6);
        let numberId: number = parseInt(numberIdString);
        return numberId;
    } 
}


