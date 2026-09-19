import readlineSync from "readline-sync";
import { Stock } from "./products/Stock";
import { Book } from "./products/Book";
import { Clothing } from "./products/Clothing";
import { Toy } from "./products/Toy";
import { Eletronic } from "./products/Eletronic";

const stokBook = new Stock<Book>();
const stokClothing = new Stock<Clothing>();
const stokToy = new Stock<Toy>();
const stokEletronic = Stock<Eletronic>();

