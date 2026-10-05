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
    addQuantity(quantity) {
        this.amountKg += quantity;
    }
    removeQuantity(quantity) {
        if (quantity > this.amountKg) {
            return false;
        }
        this.amountKg -= quantity;
        return true;
    }
    getAvailableQuantity() {
        return this.amountKg;
    }
    donate(quantity) {
        this.removeQuantity(quantity);
    }
}
exports.Food = Food;
