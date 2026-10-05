"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, category, amountKg, responsibleProducer) {
        this.name = name;
        this.category = category;
        this.amountKg = amountKg;
        this.responsibleProducer = responsibleProducer;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
    }
    getAmountKg() {
        return this.amountKg;
    }
    setAmountKg(amountKg) {
        this.amountKg = amountKg;
    }
    getResponsibleProducer() {
        return this.responsibleProducer;
    }
    setResponsibleProducer(responsibleProducer) {
        this.responsibleProducer = responsibleProducer;
    }
    // adiciona uma quantidade ao estoque
    addQuantity(quantity) {
        this.amountKg += quantity;
    }
    // remove uma quantidade do estoque
    removeQuantity(quantity) {
        // verifica se existe quantidade suficiente
        if (quantity > this.amountKg) {
            return false;
        }
        // diminui a quantidade disponível
        this.amountKg -= quantity;
        return true;
    }
    // retorna a quantidade disponível
    getAvailableQuantity() {
        return this.amountKg;
    }
    // realiza a doação de uma quantidade
    donate(quantity) {
        this.removeQuantity(quantity);
    }
}
exports.Food = Food;
