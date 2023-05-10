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
    console.log("Sie ist gleich alt");
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

job = "driver"; // .. fährt TAXI! / UBER
job = "diver"; // .. taucht im Rhein

switch (job) {
    case "driver": //hier wird auf Gleichheit getestet
        console.log(firstName + " fährt Taxi!");
        break;

    case "diver": //hier wird auf Gleichheit getestet
        console.log(firstName + " taucht im Rhein");
        break;

    case "diver": //hier wird auf Gleichheit getestet
        console.log(firstName + " taucht im Rhein");
        break;


    default:
        console.log(firstName + " macht etwas anderes!");
        break;
}