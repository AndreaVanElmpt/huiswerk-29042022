// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [6, 9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// STAPPENPLAN
// 1. aanmaken placeholder voor cijfer [amountCumLaude]
// 2. loop door de grades array en check op 8 of hoger
// 3. Als er 8 of hoger staat zet dan het cijfer in [amountCumLaude]
// 4. Nieuwe waarde [amountCumLader] + 1
// 5. log totaal in de terminal


let amountCumLaude = 0;

    for (let i = 0; i <= grades.length; i++) {

        if (grades[i] >= 8) {
            amountCumLaude++
        }
    }
        console.log(amountCumLaude)

// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

//STAPPENPLAN
// 1. maak een function [cumLaude]
// 2. Definieer variable [listToCheck] die ook voor andere array gebruikt kan worden
// 3. aanmaken placeholder voor cijfer [amountCumLaude]
// 4. loop door de grades array en check op 8 of hoger
// 5. Als er 8 of hoger staat zet dan het cijfer in [amountCumLaude]
// 6. Nieuwe waarde [amountCumLader] + 1
// 7. log totaal in de terminal

let testArray = [6, 4, 5]

function cumLaude(array){

let amountCumLaude = 0;

    for (let i = 0; i <= array.length; i++) {

        if (array[i] >= 8) {
            amountCumLaude++
        }
    }
       return amountCumLaude


}
console.log ('Opdracht 1B: ' + cumLaude(testArray))
console.log ('Opdracht 1B: ' + cumLaude(grades))
console.log ('Opdracht 1B: ' + cumLaude([8, 9, 4, 6, 10]))

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// STAPPENPLAN
// 1. reken uit hoeveel cijfer er in de array staan
// 2. deel de array door het aantal cijfers
// 3. reken het gemiddelde uit van een array
// 4. maak de berekening zo dat de lengte van de array niet uitmaak



let averageGrade = 0

for (let i = 0; i <grades.length; i++) {
    averageGrade+=grades[i]
}

const average = averageGrade/grades.length;

console.log('Het gemiddelde cijfer is ' + average)


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.


function averageGradeStudent (arrayTwo) {

    let gradeStudent = 0;

    for (let i = 0; i <arrayTwo.length; i++) {
        gradeStudent += arrayTwo[i]

    }

    return gradeStudent/arrayTwo.length
}



console.log('Het gemiddelde cijfer van een student is ' + averageGradeStudent(grades))
console.log('Het gemiddelde cijfer van een student is ' + averageGradeStudent(testArray))
console.log('Het gemiddelde cijfer van een student is ' + averageGradeStudent([8, 9, 4, 6, 10]))

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
/* 2c: Afronden op twee decimalen */

const rondUp = averageGradeStudent(grades)
console.log('afgerond op 2 decimaal ' + rondUp.toFixed(2))

// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!




/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

//STAPPENPLAN
// 1. Maak een conditie om de hoogste waarde te selecteren [gradeMax]
// 2. Check op de hoogste waarde
// 3. maak variable die waarde bewaard

let maxTwo = 0;

for (let i=0; i<grades.length; i++) {
    if (grades[i] > maxTwo) {
        maxTwo = grades[i]
    }

}


console.log('Hoogste cijfer is ' + maxTwo)


// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade(maxGrade){

    let maximum = 0;

    for (let i=1; i<maxGrade.length; i++) {
        if (maxGrade[i] > maximum) {
            maximum = maxGrade[i]

        }

    }
    return maximum
}

console.log('Het hoogst behaalde cijfer is ' + highestGrade(grades))
console.log('Het hoogst behaalde cijfer is ' + highestGrade(testArray))
console.log('Het hoogst behaalde cijfer is ' + highestGrade([8, 9, 4, 6, 10]))

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
