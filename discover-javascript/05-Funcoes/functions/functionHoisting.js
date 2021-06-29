// function hoisting

sayMyName()
console.log(nome)
sayMyName1()


// funcoes sofrem elevacao (hoisting)
function sayMyName() {
    console.log('Mayk')
}

// nao funciona apenas a variavel sofre elevacao
var nome = function sayMyName1(){
    console.log('Vitor')
}