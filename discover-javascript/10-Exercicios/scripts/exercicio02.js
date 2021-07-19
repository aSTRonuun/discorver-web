/*
    Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        - receitas: []
        - despesas: []

    Agora, crie uma função que irá calcular o total de receitas e despesas
    e irá mostrar uma mensagem se a família está com saldo positivo ou
    negativo, seguido do valor do saldo.

*/

function calculateTotal(objetc){
    const incomeTotal = sum(objetc.income)
    const expensesTotal = sum(objetc.expenses)
    const balance = incomeTotal - expensesTotal 

    const positive = balance >= 0
    let balanceText = 'negativo'
    
    if(positive)
        balanceText = 'positivo'

    return `Seu saldo é ${balanceText}: ${balance.toFixed(2)} R$`
    
}

function sum(array){
    let total = 0
    for(let value of array){
        total += value
    }

    return total
}

let finance = {
    income: [1000, 500, 400, 700, 332, 150.99],
    expenses: [460, 177, 600.28, 199, 99.46, 4600]
}

console.log(finance)
console.log(calculateTotal(finance))
