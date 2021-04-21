//Aufgabe1
//a)
namespace Aufgabe4 {
    function a1(): void {
        let x: string = "Alles";
        console.log(x);
        func2();
        func3(x);
        func1();
        func3(x);
        console.log("Logo!");
    }
    
    a1();
    
    function func1(): void {
        console.log("Klar?");
    }
    
    function func2(): void {
        console.log("Gute!");
    }
    
    function func3(x: string): void {
        console.log(x);
    }
}
/*
Alles
Klar?
Logo!
Variablen können die Zahlen von 0-9 enthalten und Buchstaben ohne Sonderzeichen wie Ä,Ö und Ü.
b)
Zu erst wird die Variable X ausgegeben. Diese wurde in der Zeile darüber definiert. Danach wird die Funktion func1 aufgerufen, welche "Klar?" ausgibt.
Und zum Schluss wird noch mit console.log "Logo!" ausgegeben.
*/
//Aufgabe2
/*
Die Funktion a2 wird in Zeile 10 aufgerufen. Danach wird eine Variable i mit dem Wert 9 deklariert. In Zeile 4 wird dann eine do-while Schleife ausgeführt,
 die solange den Wert von I in der Konsole ausgibt, wie I größer als 0 ist. Nach jedem durchlauf der Schleife wird I um eins subtrahiert.
 Es werden somit dann die Zahlen von 9 bis 1 ausgegeben.
*/
namespace Aufgabe2 {
    function a2(): void {
        let i: number = 9;
    
        do {
            console.log(i);
            i = i - 1;
        } while ( i > 0);
    }
    a2();
}
//Aufgabe4
/*
a)
Hallo           -- Da die Variable X in Zeile 1 mit dem Wert "Hallo" versehen wurde.
Bla             -- func1 wird aufgerufen. Die Variable X wird zwar übergeben, jedoch von "Bla" überschrieben und dann ausgegeben.
Hallo           -- Nun wird wieder X aufgerufen und ausgegeben.
Blubb           -- Jetzt wird func2 aufgerufen. Es wird eine Lokale Variable X deklariert und ausgegeben.
Test            -- Zuletzt wird func3 aufgerufen. In func3 wird die Globale Variable x mit "Test" überschrieben und dann nach dem Aufruf ausgegeben.

b)
Unterschiede:
Bei Funktionen können Variablen mit übergeben werden.
Funktionen können einen Rückgabewert haben, während Variablen einen Wert haben, welcher aufgerufen werden kann.
Eine Funktion kann mehrere lokale Variablen enthalten.
Eine Funktion kann einen viel größeren Umfang als eine Variable haben.

Gemeinsamheiten:
Funktionen und Variablen müssen definiert werden.
Sie können aufgerufen werden
Sie haben einen Namen, der frei gewählt werden kann.
*/
namespace Aufgabe4 {
    let x: string = "Hallo";
    console.log(x);
    func1(x);
    console.log(x);
    func2();
    func3();
    console.log(x);

    function func1(y: string): void {
        y = "Bla";
        console.log(y);
    }

    function func2(): void {
        let x: string = "Blubb";
        console.log(x);
    }

    function func3(): void {
        x = "Test";
    }
}
//Aufgabe5
namespace Aufgabe5 {
    let zahl1: number = 2 ;
    let zahl2: number = 5 ;
    //a)
    function multiply(zahl1: number, zahl2: number): number {
        return zahl1 * zahl2;
    }
    console.log(multiply(zahl1, zahl2));

    //b)
    function max(zahl1: number, zahl2: number): number {
        if (zahl1 > zahl2) {
            return zahl1;
        }
        else {
            return zahl2;
        }
    }
    console.log(max(zahl1, zahl2));

    //c)
    console.log("Die Zahlen 1 bis 100 Addiert:");
    let i: number = 1;
    let zahl3: number = 0;
    while (i <= 100) {
        zahl3 += i;
        i++;
    }
    console.log(zahl3);

    //d)
    console.log("10 Zufällige Zahlen:");
    let zahl1Max: number = 100;
    let zahlRandom: number;
    for (let j: number = 0; j <= 9; j++) {
        zahlRandom = Math.random() * zahl1Max;
        console.log(zahlRandom);
    }

    //e)
    console.log("Fakultät berechnen:");
    let n: number = 7;
    let ergebnis: number = 1;
    function factorial( n: number): number {
        if (n < 1) {
            return 1;
        }
        while (n > 0) {
            ergebnis = ergebnis * n;
            n--;
        }
        return ergebnis;
    }
    factorial(n);
    console.log(ergebnis);

    //f)
    console.log("Schaltjahre von 1900 bis 2021:");
    function leapyears(): void {
        let jahreszahl: number = 1900;
        while (jahreszahl <= 2021) {
            if ((jahreszahl % 4 == 0) && (jahreszahl % 100 != 0) || (jahreszahl % 400 == 0)) {
                console.log("Hierbei handelt es sich beim Jahr " + jahreszahl + " um ein Schaltjahr!");
            }
            jahreszahl++;
        }
    }
    leapyears();
}
//Aufgabe6
namespace Aufgabe6 {
    //a)
    let hashtag: string = "";
    for (let i: number = 0; i <= 6; i++) {
        hashtag += "#";
        console.log(hashtag);
    }
    
    //b)
    console.log("AufgabeB");
    let j: number = 1;
    while (j < 100) {
        if (j % 3 == 0) {
            console.log("Fizz");
            j++;
        }
        if (j % 5 == 0) {
            console.log("Buzz");
            j++;
        }
        else {
            console.log(j);
            j++;
        }
    }
    //c)
    console.log("AufgabeC");
    let k: number = 1;
    while (k < 100) {
        if (k % 15 == 0) { //Entweder teilen durch 15 oder durch Verkettung der Argumente mit && --> ((k % 3 == 0) && (k % 5 == 0))
            console.log("FizzBuzz");
            k++;
        }
        if (k % 3 == 0) {
            console.log("Fizz");
            k++;
        }
        if (k % 5 == 0) {
            console.log("Buzz");
            k++;
        }
        else {
            console.log(k);
            k++;
        }
    }
    //d)
    let zeile: string = " ";
    function schachbrett(): void {
        let zeilenZahl: number = 8;
        let spaltenZahl: number = 8 / 2;
        for (let l: number = 0; l < zeilenZahl; l++) {
            if (l % 2 == 0) {
                for (let m: number = 0; m < spaltenZahl; m++) {
                    zeile += " " + "#";
                }
            }
            else {
                for (let m: number = 0; m < spaltenZahl; m++) {
                    zeile += "#" + " ";
                }
            }
            console.log(zeile + "\n");
            zeile = " ";
        }
    }
    schachbrett();
    //e)
    console.log("Aufgabe E");
    let zeilenZahl2: number = 12;
    let spaltenZahl2: number = 12;
    let zeile2: string = " ";
    function schachbrett2(zeilenZahl2: number, spaltenZahl2: number): void {
        spaltenZahl2 /= 2;
        for (let n: number = 0; n < zeilenZahl2; n++) {
            if (n % 2 == 0) {
                for (let o: number = 0; o < spaltenZahl2; o++) {
                    zeile2 += " " + "#";
                }
            }
            else {
                for (let o: number = 0; o < spaltenZahl2; o++) {
                    zeile2 += "#" + " ";
                }
            }
            console.log(zeile2 + "\n");
            zeile2 = " ";
        }
    }
    schachbrett2(zeilenZahl2, spaltenZahl2);
}