export class Reptil {
    private nome: string;
    private idade: number;
    private tipoEscama: string;

    public constructor(nome: string, idade: number, tipoEscama: string) {
        this.nome = nome;
        this.idade = idade;
        this.tipoEscama = tipoEscama;
    }

    public getNome(): string {
        return this.nome
    }

    public getIdade(): number {
        return this.idade
    }

    public getTipoEscama(): string {
        return this.tipoEscama;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public setTipoEscama(tipoEscama: string): void {
        this.tipoEscama = tipoEscama;
    }

    public swin(): void {
        console.log(`${this.nome} nadou.`);
    }
}
