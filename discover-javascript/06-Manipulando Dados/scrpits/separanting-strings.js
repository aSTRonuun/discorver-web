/*

    Separe um teto que contém espaços, em um novo arrau onde cada texto
    é uma posição do array. Depois disso, transorme o array em um texto
    e onte eram espaços, coloque '_'
*/

let phrase = "Programar é muito legal";
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())