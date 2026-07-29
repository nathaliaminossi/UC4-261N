export class Warrior {

    private nome: string;
    private tipo: string;
    private forca: number;
    private saude: number;


    constructor(nome: string, tipo: string, forca: number, saude: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = saude;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getForca(): number {
        return this.forca;
    }
    public getSaude(): number {
        return this.saude;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }
    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public setForca(froca: number): void {
        this.forca = this.forca;
    }

    public setSaude(saude: number): void {
        this.saude = saude;
    }

    atacar(): void {
        console.log("o guerreiro atacou")
    }

    desviar(): void {
        console.log("o guerreiro desviou")

    }

    curar(): void {
        console.log("o guerreiro curou")
    }

    reviver(): void {
        console.log("o guerreiro reviveu")
    }

}