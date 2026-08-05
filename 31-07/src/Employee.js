"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    name;
    salario;
    constructor(name, salario) {
        this.name = name;
        this.salario = salario;
    }
    getName() {
        return this.name;
    }
    getSalario() {
        return this.salario;
    }
    setName(name) {
        this.name = name;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    aumentoDoSalario(percentual) {
        if (percentual < 0) {
            console.log("O percentual deve ser positivo");
        }
        this.salario = this.salario + (this.salario * percentual / 100);
    }
    mostrarInformaçao() {
        console.log((`
        Nome: ${this.name}
        Salario: ${this.salario}
        }`));
    }
}
exports.Employee = Employee;
