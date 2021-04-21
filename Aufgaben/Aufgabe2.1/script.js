"use strict";
//Aufgabe1
//a)
var Aufgabe4;
(function (Aufgabe4) {
    function a1() {
        let x = "Alles";
        console.log(x);
        func2();
        func3(x);
        func1();
        func3(x);
        console.log("Logo!");
    }
    a1();
    function func1() {
        console.log("Klar?");
    }
    function func2() {
        console.log("Gute!");
    }
    function func3(x) {
        console.log(x);
    }
})(Aufgabe4 || (Aufgabe4 = {}));
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
var Aufgabe2;
(function (Aufgabe2) {
    function a2() {
        let i = 9;
        do {
            console.log(i);
            i = i - 1;
        } while (i > 0);
    }
    a2();
})(Aufgabe2 || (Aufgabe2 = {}));
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
(function (Aufgabe4) {
    let x = "Hallo";
    console.log(x);
    func1(x);
    console.log(x);
    func2();
    func3();
    console.log(x);
    function func1(y) {
        y = "Bla";
        console.log(y);
    }
    function func2() {
        let x = "Blubb";
        console.log(x);
    }
    function func3() {
        x = "Test";
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//Aufgabe5
var Aufgabe5;
(function (Aufgabe5) {
    let zahl1 = 2;
    let zahl2 = 5;
    //a)
    function multiply(zahl1, zahl2) {
        return zahl1 * zahl2;
    }
    console.log(multiply(zahl1, zahl2));
    //b)
    function max(zahl1, zahl2) {
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
    let i = 1;
    let zahl3 = 0;
    while (i <= 100) {
        zahl3 += i;
        i++;
    }
    console.log(zahl3);
    //d)
    console.log("10 Zufällige Zahlen:");
    let zahl1Max = 100;
    let zahlRandom;
    for (let j = 0; j <= 9; j++) {
        zahlRandom = Math.random() * zahl1Max;
        console.log(zahlRandom);
    }
    //e)
    console.log("Fakultät berechnen:");
    let n = 7;
    let ergebnis = 1;
    function factorial(n) {
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
    function leapyears() {
        let jahreszahl = 1900;
        while (jahreszahl <= 2021) {
            if ((jahreszahl % 4 == 0) && (jahreszahl % 100 != 0) || (jahreszahl % 400 == 0)) {
                console.log("Hierbei handelt es sich beim Jahr " + jahreszahl + " um ein Schaltjahr!");
            }
            jahreszahl++;
        }
    }
    leapyears();
})(Aufgabe5 || (Aufgabe5 = {}));
//Aufgabe6
var Aufgabe6;
(function (Aufgabe6) {
    //a)
    let hashtag = "";
    for (let i = 0; i <= 6; i++) {
        hashtag += "#";
        console.log(hashtag);
    }
    //b)
    console.log("AufgabeB");
    let j = 1;
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
    let k = 1;
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
    let zeile = " ";
    function schachbrett() {
        let zeilenZahl = 8;
        let spaltenZahl = 8 / 2;
        for (let l = 0; l < zeilenZahl; l++) {
            if (l % 2 == 0) {
                for (let m = 0; m < spaltenZahl; m++) {
                    zeile += " " + "#";
                }
            }
            else {
                for (let m = 0; m < spaltenZahl; m++) {
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
    let zeilenZahl2 = 12;
    let spaltenZahl2 = 12;
    let zeile2 = " ";
    function schachbrett2(zeilenZahl2, spaltenZahl2) {
        spaltenZahl2 /= 2;
        for (let n = 0; n < zeilenZahl2; n++) {
            if (n % 2 == 0) {
                for (let o = 0; o < spaltenZahl2; o++) {
                    zeile2 += " " + "#";
                }
            }
            else {
                for (let o = 0; o < spaltenZahl2; o++) {
                    zeile2 += "#" + " ";
                }
            }
            console.log(zeile2 + "\n");
            zeile2 = " ";
        }
    }
    schachbrett2(zeilenZahl2, spaltenZahl2);
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=script.js.map