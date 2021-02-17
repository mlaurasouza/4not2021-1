// Função para fins ilustrativos. Se precisar realmente elevar
//um número ao quadrado, use o operador ** ou a função Math.pow

//Características desta função
//1- tem apenas 1 argumento, que é o n
//2- seu corpo tem apenas uma linha de cód, com return

function quadrado(n){
    return n*n
}

//Reescrevendo a função anterior como arrow function
//1- os parenteses em torno do argumento são omitidos
//2- a palavra function, ANTES do argumento, é substituída pelo símbolo => após o argumento
//3- as chaves são omitidas
//4- a palavra return é otimida

const quadrado2= n => n*n

console.log(quadrado(8), quadrado2(8))

//Função com mais de um argumento
function potencia(b, e){
    return b**e
}

// Com mais de um argumento, os parenteses em volta deve retornar
let potencia2=(b,e) => b** e

console.log(potencia(2,6), potencia2(2,6))

// Função sem argumentos
function megasena() {
    // retorna um nº aleatório entre 1 e 60
    //Math.random() -> retorna um número aleatório entre 0 e 1
    // multiplicando por 60 -> temos um número entre 0 e 59 (fracionário)
    // soma 1 -> ajusta a faixa para entre 1 e 60
    // floor() -> retirar as casas decimais

    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena())

// Quando não há argumentos, os parênteses marcam o lugar deles
const megasena2 =() => Math.floor(Math.random()*60+1)

console.log(megasena2(), megasena2(), megasena2())

// Função com mais de uma linha de código
function somaTudo(...nums){
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

// Arrow function para corpos com mais de uma linha
// Voltam as chaves
// (Os parênteses em torno do argumento são necessários por se tratar
// de um argumento de resto)
let somaTudo2 = (...nums) => {
    let soma = 0
    for (let n of nums) soma += n
    return soma 
}