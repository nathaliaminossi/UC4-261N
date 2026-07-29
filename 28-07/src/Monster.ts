
export class monstro {
    private nome: string;
    private forca: number;
    private saude: number;

    constructor(nome: string, forca: number, saude: number) {
        this.nome = nome;
        this.forca = forca;
        this.saude = saude;

    }

    public getNome(): string {
        return this.nome;
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

    public setForca(forca: number) {
        this.forca;
    }

    public setSaude(saude: number) {
        this.saude;
    }

    atacar(): void {
        console.log("o monstro atacou")
    }
}