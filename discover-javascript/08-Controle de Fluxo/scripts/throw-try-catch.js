// throw

function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// sayMyName()

// console.log('apos a funcao de erro')

// try... catch
try{
    sayMyName('Vitor')
} catch(e){
    console.log(e)
}

console.log('apos ao try/catch')