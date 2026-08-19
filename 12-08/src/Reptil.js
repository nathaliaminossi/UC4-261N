"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reptil = void 0;
class Reptil {
    constructor(nome, idade, tipoEscama) {
        this.nome = nome;
        this.idade = idade;
        this.tipoEscama = tipoEscama;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getTipoEscama() {
        return this.tipoEscama;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setTipoEscama(tipoEscama) {
        this.tipoEscama = tipoEscama;
    }
    swin() {
        console.log(`${this.nome} nadou.`);
    }
}
exports.Reptil = Reptil;
