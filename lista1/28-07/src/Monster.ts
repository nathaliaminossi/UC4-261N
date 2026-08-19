
export class Monster {
    private nome: string;
    private forca: number;
    private saude: number;

    public constructor(nome: string) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;

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

   public atacar(): void {
        console.log("o monstro atacou")
    }
}