"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
class FamilyFarmer extends Producer_1.Producer {
    constructor(name, cpf, amountFood, propertySize) {
        super(name, cpf, amountFood);
        this.propertySize = propertySize;
    }
    getPropertySize() {
        return this.propertySize;
    }
    setPropertySize(propertySize) {
        this.propertySize = propertySize;
    }
    present() {
        console.log(`Family Farmer: ${this.getName()} | CPF: ${this.getCpf()} | Property Size: ${this.propertySize} hectares`);
    }
}
exports.FamilyFarmer = FamilyFarmer;
