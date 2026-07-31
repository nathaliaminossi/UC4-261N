"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanckAccount = void 0;
class BanckAccount {
    owner;
    balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    getOwner() {
        return this.owner;
    }
    getBalance() {
        return this.balance;
    }
    setOwner(owner) {
        this.owner = owner;
    }
    setBalance(balance) {
        this.balance = balance;
    }
    deposit(value) {
        if (value < 0) {
            throw new Error("O valor do saque deve ser maior que zero");
        }
    }
    withDraw(value) {
        if (value > this.balance) {
            throw new Error("Não é permitido sacar um valor maior que o saldo.");
        }
        this.balance -= value;
    }
    showBalance() {
    }
}
exports.BanckAccount = BanckAccount;
