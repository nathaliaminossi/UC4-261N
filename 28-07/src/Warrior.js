"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
class Warrior {
    nome;
    tipo;
    forca;
    saude;
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = 40;
        this.saude = 100;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return this.tipo;
    }
    getForca() {
        return this.forca;
    }
    getSaude() {
        return this.saude;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setForca(froca) {
        this.forca = this.forca;
    }
    setSaude(saude) {
        this.saude = saude;
    }
    atacar() {
        console.log("o guerreiro atacou");
    }
    desviar() {
        console.log("o guerreiro desviou");
    }
    curar() {
        console.log("o guerreiro curou");
    }
    reviver() {
        console.log("o guerreiro reviveu");
    }
}
exports.Warrior = Warrior;
