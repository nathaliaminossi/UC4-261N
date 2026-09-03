import { Livro } from "./Livro";

const livro1: Livro = {
    titulo: "O amor me trouxe de volta",
    autor: "Carol Bowman",
    anoPublicacao: 2008,
    disponivel: true
}

function mostrarLivro(livro: Livro): void {
    console.log(`titulo: ${livro1.titulo}, autor: ${livro1.autor}, ano publicado: ${livro1.anoPublicacao}, disponivel: ${livro1.disponivel} `);
}

mostrarLivro(livro1)


function calcularBonus(funcionario: Funcionario) {
    return funcionario.salario * 0.1
}


