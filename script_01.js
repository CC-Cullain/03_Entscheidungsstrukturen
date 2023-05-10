"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

const ageJohn = 30;
const ageMark = 30;

let isJohnOlder
let isJohnEqual
let isJohnYounger
// Test | Logische Aussage

isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
isJohnYounger = (ageJohn < ageMark);

// Ausgabe

console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("isJohnEqual: " + isJohnYounger);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (isJohnOlder) {
//     console.log("John ist älter");
// }

// Else if fügt eine weitere Bedingung hinzu.
//  Älter, jünger oder gleichalt

if (isJohnOlder) {
    console.log("John ist älter");
}
else if (isJohnEqual) {
    console.log("Sie sind gleich alt");
}
 else {
    console.log("John ist jünger");
}

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

// Switch ist eine alternative und übersichtlichere Form zu einer If else if Kette
// Schafft erweiterte Struktur

switch (true) {
    case isJohnOlder:
        console.log("John ist älter");
        break;
    case isJohnEqual:
        console.log("Sie sind gleich alt");
        break;
    default:
        console.log("John ist jünger");
        break;
}

console.log("-------------");

// Switch mit anderen Variablen als bisher

const firstName = "Jane";
let job;

job = "driver";     // .. fährt TAXI! / UBER
job = "diver";      // .. taucht im Rhein
job = "artist";     // .. malt ein Bild!
job = "pilot";      // .. macht etwas anderes! --> default
job = "teacher";    // .. unterrichtet!
job = "instructor"; // .. unterrichtet!

switch (job) {

    case "driver": //hier wird auf Gleichheit getestet
        console.log(firstName + " fährt Taxi!");
        break;

    case "diver": //hier wird auf Gleichheit getestet
        console.log(firstName + " taucht im Rhein");
        break;

    case "artist": //hier wird auf Gleichheit getestet
        console.log(firstName + " malt ein Bild!");
        break;

    case "teacher": //hier wird auf Gleichheit getestet
    case "instructor": //hier wird auf Gleichheit getestet
        console.log(firstName + " unterrichtet!");
        break;  

    default:
        console.log(firstName + " macht etwas anderes!");
        break;
}

/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const a = 2;

switch (cond) {
    case (a == 1):
        console.log("A hat den Wert 1!");
        break;

    case (a == 12):
        console.log("A hat den Wert 2!");
        break;

    default:
        console.log("A hat einen andere Wert");
        break;
}