import {getnumber, write} from './utils/io_utils.js'

/**22. Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo. */

function main(){
    const n = getnumber('Numero de Fichas: ')
    let id_mais_gordo = 0
    let id_mais_magro = 0
    let peso_mais_gordo = -Infinity
    let peso_mais_magro = Infinity

    for (let i = 1; i <= n; i++){
        const id = getnumber(`ID DO BOI ${i}: `)
        const peso = getnumber(`PESO: `)

        if (peso < peso_mais_magro){
            id_mais_magro = id
            peso_mais_magro = peso
        }if (peso > peso_mais_gordo){
            id_mais_gordo = id
            peso_mais_gordo = peso
        }
    }
    write(`
BOI MAIS MAGRO: ${id_mais_magro} (${peso_mais_magro.toFixed(1)} kg)
BOI MAIS GORDO: ${id_mais_gordo} (${peso_mais_gordo.toFixed(1)} kg)`)
}

main()