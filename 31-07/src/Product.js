"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    price;
    stock;
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getStock() {
        return this.stock;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    setStock(stock) {
        this.stock = stock;
    }
    addStock(quantity) {
        if (quantity < 0) {
            throw new Error("nao é perimitido estoque negativo");
        }
        this.stock += quantity;
        console.log("adicionado");
    }
    removeStock(quantity) {
        console.log("removido do estoque ");
    }
    showProduct() {
        console.log("mostrar produtos", "nome:" + this.name + "preço:" + this.price + "estoque:" + this.stock);
    }
}
exports.Product = Product;
