export class Movie{
    titulo: string;
    duracao: number;
    classificacao: number;

    public constructor(titulo: string, duracao: number, classificacao: number,) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.classificacao = classificacao;
       
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDuracao(): number {
        return this.classificacao;
    }

    public getClassificacao(): number {
        return this.classificacao;
    }

    public setTitulo(titulo:string) {
        return this.titulo;
    }

    public setDuracao(duracao:number) {
         this.duracao = duracao;
    }

    public setClassificacao(classificacao:number) {
       this.classificacao = classificacao;
    }

    public classificacaoChange(novaAvaliação:number): void{
        if(novaAvaliação < 0 || novaAvaliação > 10){
            console.log("A nota deve ficar entre 0 e 10.  ")
        }
        this.classificacao = novaAvaliação
    }

    public showMovie(): void {
        console.log((`
        Título: ${this.titulo}
        Duração: ${this.duracao}
        Classificação: ${this.classificacao} `))
    }
}