"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
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
/**
const conta1: BanckAccount = new BanckAccount("nathalia", 200)

conta1.deposit(100);
conta1.withDraw(50);
 */
/**
const produto1:Product = new Product("shampoo", 100, 30);
const produto2:Product = new Product("condicionador", 120, 20);
const produto3:Product = new Product("mascara", 150, 10);

produto1.addStock(10)
produto1.removeStock(10)
produto1.showProduct()
*/
const livro1 = new Book_1.Book("A hora da estrela", "Clarice Lispector", 200, true);
const livro2 = new Book_1.Book("Agua viva", "Clarice Lispector", 250, true);
livro1.borrow();
livro1.returnBook();
livro1.showInformation();
