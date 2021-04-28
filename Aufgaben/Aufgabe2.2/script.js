"use strict";
var Abgabe2_2;
(function (Abgabe2_2) {
    //Aufgabe1 a)
    function min(...numbers) {
        let min = numbers[0];
        //Schleife durchläuft die Zahlen des Arrays, wenn eine Zahl kleiner als min ist und wird dann mit dieser Zahl überschrieben
        for (let i = 0; i < numbers.length; i++) {
            if (min > numbers[i]) {
                min = numbers[i];
            }
        }
        return min;
    }
    console.log("Minimum: " + min(7, 2, 3, 1, 5, 6, 7));
    //Aufgabe1 b)
    function isEven(num) {
        while (num >= 0) {
            if (num == 0) {
                return true;
                break;
            }
            if (num == 1) {
                return false;
                break;
            }
            num = num - 2;
        }
        console.log("Ergebnis nicht möglich");
        return false;
    }
    //Ausgabe
    let num1 = 50;
    let num2 = 75;
    console.log(num1 + " " + isEven(num1));
    console.log(num2 + " " + isEven(num2));
    //Mit -1 würde die while Schleife nicht gestartet werden, da die Zahl >= 0 sein sollte. In dem Fall wird dann der angegebenen Rückgabewert (in meinem Fall false).
    //Die Funktion könnte sich jedoch so umbauen lassen, dass eine negative Zahl erkannt wird if(num < 0) und diese in dem Fall dann mit -1 multipliziert wird.
    //Aufgabe 1c)
    class Student {
        constructor(_name, _age, _faculty, _courseOfStudy, _semester) {
            this.name = _name;
            this.age = _age;
            this.faculty = _faculty;
            this.courseOfStudy = _courseOfStudy;
            this.semester = _semester;
        }
        showInfo() {
            console.log(this.name);
            console.log("Alter " + this.age);
            console.log(this.faculty);
            console.log(this.courseOfStudy);
            console.log("Semester: " + this.semester);
        }
    }
    //Studententen vom Typ Student anlegen
    let s1 = new Student("Reiner Zufall", 20, "DigitaleMedien", "OMB", 2);
    let s2 = new Student("Max Mustermann", 23, "Gesundheit", "HebammenWissenschaften", 4);
    let s3 = new Student("Marianne Musterfrau", 28, "DigitaleMedien", "MIB", 7);
    //Array mit Studenten anlegen 
    let students = [s1, s2, s3];
    //weiteren Student dem Array hinzufügen
    students.push(new Student("Hermann Mann", 40, "Gesundheit", "KeineAngabe", 1));
    //Ausgabe der Informationen
    for (let i = 0; i < students.length; i++) {
        console.log("-------------------");
        students[i].showInfo();
    }
    //Aufgabe2
    //a)
    function backwards(array1) {
        let array2 = [];
        //Variable loopIndex als gegenläufigen Index zu i der Forschleife
        let loopIndex = 0;
        for (let i = array1.length - 1; i >= 0; i--) {
            array2[loopIndex] = array1[i];
            loopIndex++;
        }
        return array2;
    }
    //Array anlegen und Funktion aufrufen
    let array1 = [2, 4, 6, 3];
    console.log("function backwards:");
    console.log(backwards(array1));
    //b)
    function join(arrayB1, arrayB2) {
        let arrayBRes = [];
        for (let i = 0; i < arrayB1.length; i++) {
            //array 1 wird mit .push stück für stück an arrayBRes angehangen
            arrayBRes.push(arrayB1[i]);
        }
        for (let i = 0; i < arrayB2.length; i++) {
            //selbiges mit Array2
            arrayBRes.push(arrayB2[i]);
        }
        return arrayBRes;
    }
    let arrayB1 = [2, 0];
    let arrayB2 = [2, 1];
    console.log("function join:");
    console.log(join(arrayB1, arrayB2));
    //c)
    function split(arrayC1, numC1, numC2) {
        let arrayCRes = [];
        //Werte von num1 und num2 tauschen, falls num1 > num 2
        if (numC1 > numC2) {
            let numC3 = 0;
            numC3 = numC1;
            numC1 = numC2;
            numC2 = numC3;
        }
        //Teil des Arrays in neues Array schreiben
        for (let i = numC1; i < numC2 + 1; i++) {
            arrayCRes.push(arrayC1[i]);
        }
        return arrayCRes;
    }
    let arrayC1 = [2, 1, 4, 5, 6, 7, 8];
    console.log("function split:");
    console.log(split(arrayC1, 2, 0));
    //Aufgabe3
    //a)
    let canvas = document.getElementById("myFirstCanvas");
    let context = canvas.getContext("2d");
    context.lineWidth = 5;
    //Himmel
    context.fillStyle = "#8ED6FF";
    context.fillRect(0, 0, 400, 250);
    //Boden
    context.fillStyle = "Green";
    context.fillRect(0, 250, 400, 220);
    //Sonne
    context.beginPath();
    context.fillStyle = "Yellow";
    context.arc(50, 50, 70, 0, 360, false);
    context.fill();
    //Wolke
    context.beginPath();
    context.fillStyle = "White";
    context.arc(300, 50, 40, 0, 360, false);
    context.arc(350, 50, 40, 0, 360, false);
    context.arc(400, 50, 40, 0, 360, false);
    context.arc(325, 80, 40, 0, 360, false);
    context.arc(375, 80, 40, 0, 360, false);
    context.fill();
    //Baum
    context.beginPath();
    context.fillStyle = "Green";
    context.arc(320, 190, 25, 0, 360, false);
    context.fill();
    context.beginPath();
    context.fillStyle = "Brown";
    context.fillRect(315, 210, 10, 40);
    context.fill();
    //Haus
    context.beginPath();
    context.moveTo(30, 250);
    context.lineTo(80, 250);
    context.lineTo(80, 200);
    context.lineTo(55, 180);
    context.lineTo(30, 200);
    context.closePath();
    context.fillStyle = "Black";
    context.fill();
    context.stroke();
    //c)
    function createRect() {
        //Ein Rechteck anlegen und mit zufälligen Werten füllen
        let rect1 = { posX: Math.random() * 400, posY: Math.random() * 400, sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
        return rect1;
    }
    //d)
    //Zufällige Rechtecke auf dem Canvas zeichnen
    function drawRect(rect1) {
        context.beginPath();
        context.fillRect(rect1.posX += 10, rect1.posY, rect1.sizeX, rect1.sizeY);
        context.fill();
    }
    //e)
    //Array anlegen und Rechtecke anfügen
    let rectangles = [];
    rectangles.push(createRect());
    rectangles.push(createRect());
    rectangles.push(createRect());
    rectangles.push(createRect());
    rectangles.push(createRect());
    //Für jedes angelegte Rechteck die drawRect() Funktion ausführen
    for (let i = 0; i < rectangles.length; i++) {
        drawRect(rectangles[i]);
    }
    //context.clearRect(0, 0, 400, 400);
})(Abgabe2_2 || (Abgabe2_2 = {}));
//# sourceMappingURL=script.js.map