export class Product{

   private name: string;
   private price: number;
   private stock: number;

   public constructor(name:string, price: number, stock: number){
        this.name = name;
        this.price = price
        this.stock = stock;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }
    
    public getStock(): number{
        return this.stock;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setPrice(price:number) {
        this.price = price;
    }

    public setStock(stock: number){
        this.stock = stock;
    }

    public addStock(quantity: number): void {
        if(quantity < 0){
            throw new Error ("nao é perimitido estoque negativo")
        }
       this.stock += quantity;
       console.log("adicionado")
    }
    

    public removeStock(quantity:number): void { 
        console.log("removido do estoque ")
    }

    public showProduct(): void {
        console.log("mostrar produtos", "nome:" + this.name + "preço:"+ this.price + "estoque:" + this.stock);
    }

    


}