"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodile = void 0;
const Reptil_1 = require("./Reptil");
class Crocodile extends Reptil_1.Reptil {
    constructor(nome, idade, tipoEscama, genero) {
        super(nome, idade, tipoEscama);
        this.genero = genero;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(genero) {
        this.genero = genero;
    }
}
exports.Crocodile = Crocodile;
