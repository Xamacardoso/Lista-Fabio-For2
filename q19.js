import {getnumber, write} from './utils/io_utils.js'


function main(){
    const n = getnumber('N: ')
    let soma = Number()
    for (let i = 1; i <= n; i++){
        i % 2 != 0? soma += i/(n-(i-1)) : soma -= (n-(i-1))/i
    }
    write(`Soma: ${soma.toFixed(2)}`)
}

main()