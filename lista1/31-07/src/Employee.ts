export class Employee {
    name: string;
    salario: number;

    public constructor(name:string, salario: number){
        this.name = name;
        this.salario = salario
       
    }

    public getName(): string {
        return this.name;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setSalario(salario:number) {
        this.salario = salario;
    }

    public aumentoDoSalario(percentual:number){
        if(percentual < 0){
            console.log("O percentual deve ser positivo")
        }
        this.salario = this.salario + (this.salario * percentual / 100);
    }
     public mostrarInformaçao(){
        console.log((`
        Nome: ${this.name}
        Salario: ${this.salario}
        }`))
     }

}