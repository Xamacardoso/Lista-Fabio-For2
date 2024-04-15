import {getnumber, write} from './utils/io_utils.js'

/**16. Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.*/

function main(){
    const n = getnumber('N: ')
    let ultimo = 1
    let penultimo = 0
    let termo
    for (let i = 1; i <= n; i++){
        i == 1 ? termo = 0: termo = ultimo + penultimo
        write(termo)
        penultimo = ultimo
        ultimo = termo
    }
}

main()