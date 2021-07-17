/*
    Exercicio 01 - Transformar notas escolares

    de 90 para cima     -> A
    entre 80 - 89       -> B
    entre 70 - 79       -> C
    entre 60 - 69       -> D
    menor que 60        -> F   
*/

function transformarNota(score){

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    if(scoreA)
        return 'A'
    else if(scoreB)
        return 'B'
    else if(scoreC)
        return 'C'
    else if(scoreD)
        return 'D'
    else if(scoreF)
        return 'F'
    else
        return 'Nota inválida'
}

console.log(transformarNota(101))
console.log(transformarNota(56))
console.log(transformarNota(89))
console.log(transformarNota(71))
console.log(transformarNota(63))