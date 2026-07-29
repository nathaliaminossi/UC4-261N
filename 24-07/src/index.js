"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timesTwo(num) {
    return num * 2;
}
let MyNumber = 10;
console.log(timesTwo(MyNumber));
function Saudacao(nome) {
    return "Olá" + nome;
}
console.log(Saudacao("nathy"));
function NomeAmigos(amigos) {
    for (let amigo of amigos) {
        console.log(amigo);
    }
}
let amigos = ["nathy", "arthur", "olivia"];
console.log(amigos);
let pessoa = ["Nathy", 18];
console.log(pessoa);
var niveisAcesso;
(function (niveisAcesso) {
    niveisAcesso[niveisAcesso["ADMIN"] = 0] = "ADMIN";
    niveisAcesso[niveisAcesso["USER"] = 1] = "USER";
    niveisAcesso[niveisAcesso["GUEST"] = 2] = "GUEST";
})(niveisAcesso || (niveisAcesso = {}));
console.log(niveisAcesso);
