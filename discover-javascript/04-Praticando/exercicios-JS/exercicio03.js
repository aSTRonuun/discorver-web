
let student = {}

// Qual é o tipo de dado da variável student
console.log(typeof student)

// Atribua a ela as mesmas propriedades e valores do exercicio 2.
student = {
    name: "Vitor",
    age: 20,
    weight: 63.14,
    isSubscribed: true
}

//console.log(student)

/**
 * Mostre a seguinte mensagem
 * <name> de idade <age> pesa <weight> kg.
 */

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

let students = [
    student
]

console.log(students)

// Coloque no console o valor da posição zero do Array acima.
console.log(students[0])

// Crie um novo student e coloque na posição 1 do Array students

const  adriele = {
    name: "Adriele",
    age: 20,
    weight: 55.15,
    isSubscribed: false
}
students[1] = adriele

console.log(students)