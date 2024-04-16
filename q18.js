import {getnumber, write} from './utils/io_utils.js'


function main(){
    const n = getnumber('N: ')
    let soma = Number()
    for (let i = 1; i <= n; i++){
        soma+= i/(n-(i-1))
    }
    write(`Soma: ${soma.toFixed(2)}`)
}

main()