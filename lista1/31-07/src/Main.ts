import { BanckAccount } from "./BankAccount";
import { Book } from "./Book";
import { Car } from "./Car";
import { Employee } from "./Employee";
import { Movie } from "./Movie";
import { Person } from "./Person";
import { Product } from "./Product";
import { SmartPhone } from "./SmartPhone";
import { Student } from "./Student";

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
/**
const livro1:Book = new Book("A hora da estrela", "Clarice Lispector", 200, true);
const livro2:Book = new Book("Agua viva", "Clarice Lispector", 250, true);

livro1.borrow()
livro1.returnBook()
livro1.showInformation()

const estudante1: Student = new Student("nat", 10, 5);
const estudante2: Student = new Student("isabelly", 0, 5);
const estudante3: Student = new Student("tutui", 0, 0);

estudante1.calculateAverage()
estudante2.calculateAverage()
estudante3.calculateAverage()


const funcionario1: Employee = new Employee("Ana", 3000);
const funcionario2:Employee = new Employee("julia", 4500);

console.log("Antes do aumento:");
funcionario1.mostrarInformaçao();
funcionario2.mostrarInformaçao();

funcionario1.aumentoDoSalario(10); 
funcionario2.aumentoDoSalario(5);  

console.log("Depois do aumento:");
funcionario1.mostrarInformaçao();
funcionario2.mostrarInformaçao();

const filme1 = new Movie("Vingadores: Ultimato", 90, 9.0);
const filme2 = new Movie("Toy Story", 90, 8.5);
const filme3 = new Movie("Interestelar", 90, 10);


filme1.classificacaoChange(9.5);
filme2.classificacaoChange(8.8);
filme3.classificacaoChange(9.9);

filme1.showMovie();
filme2.showMovie();
filme3.showMovie();
*/
const celular: SmartPhone = new SmartPhone("Samsung", "Galaxy S24", 100);

console.log("Antes do uso:");
celular.mostrarInformacao();

celular.uso(35);

console.log("Depois de usar 35 minutos:");
celular.mostrarInformacao();

celular.charge();

console.log("Depois de recarregar:");
celular.mostrarInformacao();