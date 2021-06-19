// var é global e, também local

console.log('existe x antes do bloco', x)

{
    var x = 0
}

console.log('existe x depois do bloco?', x)

// const e let são locais e só funcionam no escopo onde foi criada
let y = 1

{
    let y = 0
    console.log('existe y antes do bloco', y)
}

console.log('existe y antes do bloco', y)
