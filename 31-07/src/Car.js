"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    brand;
    model;
    year;
    speed;
    constructor(brand, model, year, speed) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    getBrand() {
        return this.brand;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getSpeed() {
        if (this.speed < 0) {
            throw new Error("A velocidade não pode ser negativa.");
        }
        return this.speed;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    setModel(model) {
        this.model = model;
    }
    setYear(year) {
        this.year = year;
    }
    accelerate(value) {
        if (this.speed < 0) {
            throw new Error("A velocidade não pode ser negativa.");
        }
        return console.log("o carro acelerou" + this.speed);
    }
    brake() {
        console.log("o carro freiou");
    }
    showInformation() {
        console.log("dados do carro:" + this.model, +this.brand, +this.year, +this.speed);
    }
}
exports.Car = Car;
