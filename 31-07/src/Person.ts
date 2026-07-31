export class Person {

   private name: string;
   private age: number;


   public constructor(name: string, age: number){
        this.name = name    
        this.age = age;
    }

    public getName(): string {
       return this.name
    }

    public getAge(): number {
        return this.age
    }

    public setName(name: string) {
        this.name = name;
    }   

    public setAge(age: number) {
        this.age = age
    }

    public introduce(): void{
        console.log("Hello! my name is" + this.name, "and im" + this.age, "years old")
    }

}