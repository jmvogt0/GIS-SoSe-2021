"use strict";
var Endabgabe;
(function (Endabgabe) {
    getImageData();
    async function getImageData() {
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/getMemoryData";
        //let url: string = "http://localhost:8100/getMemoryData";
        let response = await fetch(url);
        //Array mit den jeweiligen Memorykarten
        let dataArray = await response.json();
        //Array im LocalStorage speicher
        localStorage.setItem("dataArray", JSON.stringify(dataArray));
        //Alle Bilder der Datenbank anzeigen
        displayImageData();
    }
    function displayImageData() {
        let dataArray = JSON.parse(localStorage.getItem("dataArray"));
        let container = document.getElementById("container1");
        container.textContent = "";
        for (let i = 0; i < dataArray.length; i++) {
            let container2 = document.createElement("div");
            container2.className = "container2";
            //Anzeigebild
            let memoryImage = document.createElement("img");
            memoryImage.src = dataArray[i].pictureUrl;
            container2.appendChild(memoryImage);
            //InputElement
            let form = document.createElement("form");
            let input = document.createElement("input");
            input.type = "text";
            input.name = "input";
            input.value = dataArray[i].pictureUrl;
            form.appendChild(input);
            container2.appendChild(form);
            //Button
            let button = document.createElement("button");
            button.textContent = "Ändern";
            button.id = "image" + i;
            button.addEventListener("click", changeImage);
            container2.appendChild(button);
            container.appendChild(container2);
        }
    }
    //Bild in der Datenbank ändern
    function changeImage(_event) {
        let target = _event.target;
        let id = getPictureId(target.id);
        let formData = new FormData(document.forms[id]);
        let url = "https://gis-sose-2021-jmvogt.herokuapp.com/changeImage";
        //let url: string = "http://localhost:8100/changeImage";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        id = id + 1;
        url = url + "&" + "id=" + id;
        changeImageCommunicate(url);
    }
    async function changeImageCommunicate(_url) {
        await fetch(_url);
        getImageData();
    }
    //Nummer von der ID extrahieren
    function getPictureId(_id) {
        let numberIdString = _id.charAt(5);
        if (_id.length > 5)
            numberIdString += _id.charAt(6);
        let numberId = parseInt(numberIdString);
        return numberId;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=adminpageScript.js.map