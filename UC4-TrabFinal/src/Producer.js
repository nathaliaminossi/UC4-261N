"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
class Producer {
    constructor(name, cpf, amountFood) {
        this.name = name;
        this.cpf = cpf;
        this.amountFood = amountFood;
    }
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getAmountFood() {
        return this.amountFood;
    }
    setName(name) {
        this.name = name;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setAmountFood(amountFood) {
        this.amountFood = amountFood;
    }
}
exports.Producer = Producer;
