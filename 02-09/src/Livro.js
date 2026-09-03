"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livro1 = {
    titulo: "O amor me trouxe de volta",
    autor: "Carol Bowman",
    anoPublicacao: 2008,
    disponivel: true
};
function mostrarLivro(livro1) {
    console.log(`titulo: ${livro1.titulo}, autor: ${livro1.autor}, ano publicado: ${livro1.anoPublicacao}, disponivel: ${livro1.disponivel} `);
}
console.log(mostrarLivro);
