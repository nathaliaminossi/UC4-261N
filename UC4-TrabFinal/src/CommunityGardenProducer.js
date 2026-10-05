"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
class CommunityGardenProducer extends Producer_1.Producer {
    constructor(name, cpf, amountFood, numberOfVolunteers) {
        super(name, cpf, amountFood);
        this.numberOfVolunteers = numberOfVolunteers;
    }
    getNumberOfVolunteers() {
        return this.numberOfVolunteers;
    }
    setNumberOfVolunteers(numberOfVolunteers) {
        this.numberOfVolunteers = numberOfVolunteers;
    }
    present() {
        console.log(`Community Garden Producer: ${this.getName()} | CPF: ${this.getCpf()} | Volunteers: ${this.numberOfVolunteers}`);
    }
}
exports.CommunityGardenProducer = CommunityGardenProducer;
