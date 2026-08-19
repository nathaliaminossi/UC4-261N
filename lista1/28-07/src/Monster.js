"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
class Monster {
    nome;
    forca;
    saude;
    constructor(nome) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }
    getNome() {
        return this.nome;
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
    setForca(forca) {
        this.forca;
    }
    setSaude(saude) {
        this.saude;
    }
    atacar() {
        console.log("o monstro atacou");
    }
}
exports.Monster = Monster;
