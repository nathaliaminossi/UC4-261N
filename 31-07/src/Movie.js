"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    titulo;
    duracao;
    classificacao;
    constructor(titulo, duracao, classificacao) {
        this.titulo = titulo;
        this.duracao = duracao;
        this.classificacao = classificacao;
    }
    getTitulo() {
        return this.titulo;
    }
    getDuracao() {
        return this.classificacao;
    }
    getClassificacao() {
        return this.classificacao;
    }
    setTitulo(titulo) {
        return this.titulo;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
    setClassificacao(classificacao) {
        this.classificacao = classificacao;
    }
    classificacaoChange(novaAvaliação) {
        if (novaAvaliação < 0 || novaAvaliação > 10) {
            console.log("A nota deve ficar entre 0 e 10.  ");
        }
        this.classificacao = novaAvaliação;
    }
    showMovie() {
        console.log((`
        Título: ${this.titulo}
        Duração: ${this.duracao}
        Classificação: ${this.classificacao}

                `));
    }
}
exports.Movie = Movie;
