import {getnumber, write} from './utils/io_utils.js'

/**25. Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.*/

function main(){
    const n = getnumber('Numero de Eleitores: ')
    let mais_votos = -Infinity
    let vencedor = ''
    let votos1 = 0
    let votos2 = 0
    let votos3 = 0
    let votosnulos = 0
    let votosbrancos = 0

    for (let i = 1; i <= n; i++){
        write(`
----- CANDIDATOS -----

CANDIDATO 1 - 1
CANDIDATO 2 - 2
CANDIDATO 3 - 3

BRANCO      - 0
NULO        - 9
----------------------`)

        const voto = getnumber(`Voto do Eleitor ${i}: `)
        if (voto == 1){
            votos1++
        }else if (voto == 2){
            votos2++
        }else if (voto == 3){
            votos3++
        }else if (voto == 0){
            votosbrancos++
        }else{
            votosnulos++
        }
    }
    if (votos1>mais_votos){
        vencedor = 'CANDIDATO 1'
        mais_votos = votos1
    }if (votos2>mais_votos){
        vencedor = 'CANDIDATO 2'
        mais_votos = votos2
    }if (votos3>mais_votos){
        vencedor = 'CANDIDATO 3'
        mais_votos = votos3
    }if (votosbrancos>mais_votos || votosnulos > mais_votos){
        vencedor = 'NINGUÉM!!'
    }

    write(`
------------ RELATÓRIO ELEIÇÃO --------------
CANDIDATO 1 - ${votos1} votos
CANDIDATO 2 - ${votos2} votos
CANDIDATO 3 - ${votos3} votos
BRANCOS     - ${votosbrancos} votos
NULOS       - ${votosnulos} votos
----------------------------------------------

VENCEDOR DA ELEIÇÃO: ${vencedor}`)
}

main()