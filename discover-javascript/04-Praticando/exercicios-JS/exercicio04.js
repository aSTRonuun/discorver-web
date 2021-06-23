/*
 * Sem rodar o código responda qual é a resposta do código abaixo e por que?
 * Após sua reposta, rode o código e veja se você acertou.
 * 
 * console.log(a)
 * var a = 1
 */

/**
 * Resposta: será imprimido a msg undefined, pois, como 'a' está declarado com
 * uma 'var' o interpretador JS, vai sobre a elevação (hoisting) de 'a' e quando isso acontece
 * o interpretador não declara nenhum valor, somente inicializa. Diante disso, a
 * variável 'a' não tera nenhum valor, consequentemente será undefined.
*/

//console.log(a)
//var a = 1

/*
 * Sem rodar o código responda qual é a resposta do código abaixo e por que?
 * Após sua reposta, rode o código e veja se você acertou.
 * 
 * console.log(a)
 * let a = 1
 */

/**
 * Resposta: será imprimido um erro de referência na variável, pois, ela ainda não foi criada.
*/

console.log(a)
let a = 1