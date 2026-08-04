"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    title;
    author;
    pages;
    available;
    constructor(title, author, pages, available) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.available = available;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getPages() {
        return this.pages;
    }
    getAvailable() {
        return this.available;
    }
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
    setPages(pages) {
        this.pages = pages;
    }
    setAvailable(available) {
        this.available = available;
    }
    borrow() {
        if (!this.available) {
            throw new Error("Este livro já está emprestado.");
        }
        this.available = false;
        console.log("Livro emprestado com sucesso!");
    }
    returnBook() {
        console.log("voce devolveu esse livro");
    }
    showInformation() {
        console.log((`
        Título: ${this.title}
        Autor: ${this.author}
        Páginas: ${this.pages}
        Disponível: ${this.available ? "Sim" : "Não"}
                `));
    }
}
exports.Book = Book;
