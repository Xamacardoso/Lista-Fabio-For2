import {getnumber, write} from './utils/io_utils.js'

/**23. Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário. */

function main(){
    const n = getnumber('Numero de Fichas: ')
    

    for (let i = 1; i <= n; i++){
        const codigo = getnumber(`CODIGO DO TRABALHADOR: `)
        const horas = getnumber(`HORAS TRABALHADAS: `)
        const dependentes = getnumber(`DEPENDENTES: `)

        const salarioBruto = (horas * 12) + (dependentes * 40)
        const inss = (8.5/100)*salarioBruto
        const ir = (5/100)*salarioBruto
        const salarioLiquido = salarioBruto - (inss + ir)

        write(`
------------ FUNCIONARIO ${codigo} --------------
(+) SALÁRIO BRUTO   :\t R$ ${salarioBruto.toFixed(2)}
(-) IMPOSTO DE RENDA:\t R$ ${ir.toFixed(2)}
(-) INSS            :\t R$ ${inss.toFixed(2)}
--------------------------------------------
>>> SALÁRIO LÍQUIDO :\t R$ ${salarioLiquido.toFixed(2)}\n`)

    }
}

main()