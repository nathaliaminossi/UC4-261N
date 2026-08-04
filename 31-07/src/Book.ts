export class Book {
    private title: string;
    private author: string;
    private pages: number;
    private available: boolean;

    public constructor(title: string, author: string, pages: number, available: boolean) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.available = available;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getPages(): number {
        return this.pages;
    }

    public getAvailable(): boolean {
        return this.available;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public setAuthor(author: string) {
        this.author = author;
    }

    public setPages(pages: number) {
        this.pages = pages;
    }

    public setAvailable(available: boolean) {
        this.available = available;
    }

    public borrow(): void {
        if (!this.available) {
            throw new Error("Este livro já está emprestado.");
        }

        this.available = false;
        console.log("Livro emprestado com sucesso!");
    }


    public returnBook(): void {
        console.log("voce devolveu esse livro.")
    }

    public showInformation(): void {
        console.log((`
        Título: ${this.title}
        Autor: ${this.author}
        Páginas: ${this.pages}
        Disponível: ${this.available ? "Sim" : "Não"}
                `))
    }


}