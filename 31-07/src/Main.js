"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
/*Exercicio 1
const person1: Person = new Person("nat", 18);
const person2: Person = new Person("arthur", 19)

console.log(person1)
console.log(person2)

person1.introduce();

*/
/**
 * exercicio 2
 const car1: Car = new Car("BMW","teste", 2008, 100)

car1.accelerate();
car1.brake();
car1.showInformation();
 */
const conta1 = new BankAccount_1.BanckAccount("nathalia", 200);
conta1.deposit(100);
conta1.withDraw(50);
