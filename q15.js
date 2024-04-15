import {getnumber, write} from './utils/io_utils.js'

/**15. Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).*/

function main(){
    const n = getnumber('N: ')
    let a = 1
    for (let i = 0; i < n; i++){
        write(a+i)
        a+=i+1
    }
}

main()