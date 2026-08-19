"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartPhone = void 0;
class SmartPhone {
    marca;
    modelo;
    bateria;
    constructor(marca, modelo, bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 100;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getBateria() {
        return this.bateria;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setBateria(bateria) {
        this.bateria = bateria;
    }
    uso(minutos) {
        if (minutos < 0) {
            throw new Error("Os minutos devem ser positivos.");
        }
        this.bateria -= minutos;
        if (this.bateria < 0) {
            this.bateria = 0;
        }
    }
    charge() {
        this.bateria = 100;
    }
    mostrarInformacao() {
        (`
        marca: ${this.marca}
        modelo: ${this.modelo}
        bateria: ${this.bateria} `);
    }
}
exports.SmartPhone = SmartPhone;
