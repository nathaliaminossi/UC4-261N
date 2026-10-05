
// armazena e organiza diferentes tipos de objetos
export class Registry<T> {

    // armazena os itens do registro
    private items: T[] = [];


    public add(item: T): void {

        this.items.push(item);

    }

    // retorna todos os itens do registro
    public list(): T[] {

        return this.items;

    }
    
    public find(index: number): T | undefined {

        return this.items[index];

    }

}

