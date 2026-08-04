export class Student{
    name: string;
    grade1: number;
    grade2: number;

    constructor(name:string, grade1: number, grade2:number){
        this.name = name;
        this.grade1 = grade1;
        this.grade2 = grade2;

    }

    public getName():string{
        return this.name;
    }

    public getGrade1():number{
        return this.grade1;
    }

    public getGrade2(): number{
        return this.grade2;
    }

    public setName(name:string){
        this.name = name;
    }

    public setGrade1(grade1: number){
        this.grade1 = grade1;
    }

    public setGrade2(grade2:number){
        this.grade2 = grade2;
    }

    public calculateAverage():void{
        if(this.grade1 || this.grade2 >= 7){
            console.log('voce foi aprovado')

        }

        
    }

    public approved(): void {

    }

}