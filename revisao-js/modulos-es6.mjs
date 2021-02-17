//ES6 -> ECMAScript versão 6, de 2016

//toda vez que o arquivo tem export(sem default), a importação precisa acontecer entre chaves [desestruturação]
import {numeros} from './includes/dados.mjs'

//podemos importar só o que vamos efetivamente usar, caso o arquivo de origem exporte mais de um item
import {somaVet, quadradoVet} from './includes/funcoes.mjs'

//quanto existe export default no arquivo de origem, a importação não tem chaves
import dobraVet from './includes/funcoes2.mjs'

//usando os itens importados
console.log(somaVet(numeros))
//console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))