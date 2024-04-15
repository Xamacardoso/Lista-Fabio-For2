import {getnumber, write} from './utils/io_utils.js'

/**14. Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6). */

function main(){
    const n = getnumber('N: ')
    let quadrado = Number()
    for (let i = 1; i*i <= n; i++){
        quadrado = i
    }
    write(`O maior quadrado menor que ${n} é ${quadrado**2}, quadrado de ${quadrado}`)
}

main()