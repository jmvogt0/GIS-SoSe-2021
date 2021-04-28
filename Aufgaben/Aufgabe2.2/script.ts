namespace Abgabe2_2 {
    //Aufgabe1 a)
    function min(...numbers: number[]): number {
        let min: number = numbers[0];

        //Schleife durchläuft die Zahlen des Arrays, wenn eine Zahl kleiner als min ist und wird dann mit dieser Zahl überschrieben
        for (let i: number = 0; i < numbers.length; i++) {
            if (min > numbers[i]) {
                min = numbers[i];
            }
        }
        return min;
    }
    console.log("Minimum: " + min(7, 2, 3, 1, 5, 6, 7));

    //Aufgabe1 b)
    function isEven(num: number): boolean {
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
    let num1: number = 50;
    let num2: number = 75;
    console.log(num1 + " " + isEven(num1));
    console.log(num2 + " " + isEven(num2));
    //Mit -1 würde die while Schleife nicht gestartet werden, da die Zahl >= 0 sein sollte. In dem Fall wird dann der angegebenen Rückgabewert (in meinem Fall false).
    //Die Funktion könnte sich jedoch so umbauen lassen, dass eine negative Zahl erkannt wird if(num < 0) und diese in dem Fall dann mit -1 multipliziert wird.

    //Aufgabe 1c)
    class Student {
        name: string;
        age: number;
        faculty: string;
        courseOfStudy: string;
        semester: number;

        constructor(_name: string, _age: number, _faculty: string, _courseOfStudy: string, _semester: number) {
            this.name = _name;
            this.age = _age;
            this.faculty = _faculty;
            this.courseOfStudy = _courseOfStudy;
            this.semester = _semester;
        }

        showInfo(): void {
            console.log(this.name);
            console.log("Alter " + this.age);
            console.log(this.faculty);
            console.log(this.courseOfStudy);
            console.log("Semester: " + this.semester);
        }
    }
    //Studententen vom Typ Student anlegen
    let s1: Student = new Student("Reiner Zufall", 20, "DigitaleMedien", "OMB", 2);
    let s2: Student = new Student("Max Mustermann", 23, "Gesundheit", "HebammenWissenschaften", 4);
    let s3: Student = new Student("Marianne Musterfrau", 28, "DigitaleMedien", "MIB", 7);
    //Array mit Studenten anlegen 
    let students: Student[] = [s1, s2, s3];
    //weiteren Student dem Array hinzufügen
    students.push(new Student("Hermann Mann", 40, "Gesundheit", "KeineAngabe", 1));

    //Ausgabe der Informationen
    for (let i: number = 0; i < students.length; i++) {
        console.log("-------------------");
        students[i].showInfo();
    }

    //Aufgabe2
    //a)
    function backwards(array1: number[]): number[] {
        let array2: number[] = [];
        //Variable loopIndex als gegenläufigen Index zu i der Forschleife
        let loopIndex: number = 0;
        for (let i: number = array1.length - 1; i >= 0; i--) {
            array2[loopIndex] = array1[i];
            loopIndex++;
        }
        return array2;
    }
    //Array anlegen und Funktion aufrufen
    let array1: number[] = [2, 4, 6, 3];
    console.log("function backwards:");
    console.log(backwards(array1));

    //b)
    function join(arrayB1: number[], arrayB2: number[]): number[] {
        let arrayBRes: number[] = [];
        for (let i: number = 0; i < arrayB1.length; i++) {
            //array 1 wird mit .push stück für stück an arrayBRes angehangen
            arrayBRes.push(arrayB1[i]);
        }
        for (let i: number = 0; i < arrayB2.length; i++) {
            //selbiges mit Array2
            arrayBRes.push(arrayB2[i]);
        }
        return arrayBRes;
    }
    let arrayB1: number[] = [2, 0];
    let arrayB2: number[] = [2, 1];
    console.log("function join:");
    console.log(join(arrayB1, arrayB2));

    //c)
    function split(arrayC1: number[], numC1: number, numC2: number): number[] {
        let arrayCRes: number[] = [];
        //Werte von num1 und num2 tauschen, falls num1 > num 2
        if (numC1 > numC2) {
            let numC3: number = 0;
            numC3 = numC1;
            numC1 = numC2;
            numC2 = numC3;
        }
        //Teil des Arrays in neues Array schreiben
        for (let i: number = numC1; i < numC2 + 1; i++) {
            arrayCRes.push(arrayC1[i]);
        }
        return arrayCRes;
    }
    let arrayC1: number[] = [2, 1, 4, 5, 6, 7, 8];
    console.log("function split:");
    console.log(split(arrayC1, 2, 0));

    //Aufgabe3
    //a)
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

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

    //b)
    interface OwnRect {
        posX: number;
        posY: number;
        sizeX: number;
        sizeY: number;
    }

    //c)
    function createRect(): OwnRect {
        //Ein Rechteck anlegen und mit zufälligen Werten füllen
        let rect1: OwnRect = { posX: Math.random() * 400, posY: Math.random() * 400, sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
        return rect1;
    }
    //d)
    //Zufällige Rechtecke auf dem Canvas zeichnen
    function drawRect(rect1: OwnRect): void {
        context.beginPath();
        context.fillRect(rect1.posX += 10, rect1.posY, rect1.sizeX, rect1.sizeY);
        context.fill();
    }
    //e)
    //Array anlegen und Rechtecke anfügen
    let rectangles: OwnRect[] = [];
    rectangles.push(createRect());
    rectangles.push(createRect());
    rectangles.push(createRect());
    rectangles.push(createRect());
    rectangles.push(createRect());
    //Für jedes angelegte Rechteck die drawRect() Funktion ausführen
    for (let i: number = 0; i < rectangles.length; i++) {
        drawRect(rectangles[i]);
    }
    //context.clearRect(0, 0, 400, 400);
}