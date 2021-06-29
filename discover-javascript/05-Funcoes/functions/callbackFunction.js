// callback function

function sayMayName(name) {
    console.log('antes de executar a funcao callBack')

    name()

    console.log('depois de executar a callback')
}

sayMayName(
    () => {
        console.log('estou em uma callback')
    }
)