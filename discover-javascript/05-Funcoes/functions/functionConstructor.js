/**
 * Function() constructor
 * 
 * expressao new
 * criar um novo objeto
 * this keyword
 */

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " esta andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk)
console.log(joao)
console.log(mayk.walk())
