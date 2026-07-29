

function timesTwo(num: number): number {
    return num * 2;
}

let MyNumber:number = 10;

console.log(timesTwo(MyNumber))


function Saudacao(nome: string): string {
    return "Olá" + nome;
}
console.log(Saudacao("nathy"))


function NomeAmigos(amigos:string[]):void {
  for(let amigo of amigos) {
    console.log(amigo)
  }
} 

let amigos: string[] = ["nathy", "arthur", "olivia"]

console.log(amigos);

let pessoa: [string, number] = ["Nathy", 18]
console.log(pessoa);

enum niveisAcesso
{ADMIN, USER, GUEST}
console.log(niveisAcesso);


type Pessoa = {
    nome: string,
    idade: number,
    email: string
}