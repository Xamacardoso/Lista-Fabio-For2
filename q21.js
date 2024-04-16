import {getnumber, write} from './utils/io_utils.js'


function main(){
    let soma = Number()
    for (let i = 1; i <= 50; i++){
        soma+= ((i*2)-1)/i
    }
    write(`Soma: ${soma.toFixed(2)}`)
}

main()