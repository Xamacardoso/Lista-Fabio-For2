import { question } from "readline-sync";

export function getnumber(msg){
    return Number(question(msg))
}

export function getstr(msg){
    return String(question(msg))
}

export function write(msg){
    console.log(msg)
}