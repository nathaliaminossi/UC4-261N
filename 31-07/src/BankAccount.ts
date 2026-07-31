export class BanckAccount {
    private owner: string;
    private balance: number;

    public constructor(owner: string, balance: number){
        this.owner = owner;
        this.balance = balance;
    }

    public getOwner() {
        return this.owner
    }

    public getBalance(){
       
        return this.balance;
    }

    public setOwner(owner: string){
        this.owner = owner;
    }
    public setBalance(balance: number){
        this.balance = balance;
    }

    public deposit(value:number): void{
        if(value < 0) {
            throw new Error("O valor do saque deve ser maior que zero")
        }
      
    }

    public withDraw(value: number): void{

        if (value > this.balance) {
            throw new Error("Não é permitido sacar um valor maior que o saldo.");
        }

        this.balance -= value;
    }

    public showBalance(): void {

    }
} 