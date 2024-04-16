import {getnumber, write} from './utils/io_utils.js'

/**24. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.*/

function main(){
    const n = getnumber('Numero de Habitantes: ')
    let somafilhos = 0
    let somasalarios = 0
    let salarios_ate_mil = 0

    for (let i = 1; i <= n; i++){
        const salario = getnumber(`SALARIO DO HABITANTE ${i}: `)
        const filhos = getnumber(`FILHOS: `)
        somasalarios+=salario
        somafilhos+=filhos
        salario <= 1000? salarios_ate_mil++ : -1
    }
    write(`
------------ RELATÓRIO PESQUISA --------------
MÉDIA SALARIAL      :\t R$ ${(somasalarios/n).toFixed(2)}
MÉDIA DE FILHOS     :\t ${(somafilhos/n).toFixed(1)}
SALARIOS ATÉ R$ 1000:\t ${((salarios_ate_mil/n)*100).toFixed(2)}%
----------------------------------------------`)
}

main()