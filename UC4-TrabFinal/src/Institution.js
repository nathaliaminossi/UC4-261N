"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
class Institution {
    constructor(name, address, numberOfPeopleServed) {
        this.name = name;
        this.address = address;
        this.numberOfPeopleServed = numberOfPeopleServed;
        this.receivedFood = 0;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getNumberOfPeopleServed() {
        return this.numberOfPeopleServed;
    }
    getReceivedFood() {
        return this.receivedFood;
    }
    setName(name) {
        this.name = name;
    }
    setAddress(address) {
        this.address = address;
    }
    setNumberOfPeopleServed(numberOfPeopleServed) {
        this.numberOfPeopleServed = numberOfPeopleServed;
    }
    receiveFood(quantity) {
        this.receivedFood += quantity;
    }
}
exports.Institution = Institution;
