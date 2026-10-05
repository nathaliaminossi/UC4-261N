"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
// armazena e organiza diferentes tipos de objetos
class Registry {
    constructor() {
        // armazena os itens do registro
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    // retorna todos os itens do registro
    list() {
        return this.items;
    }
    find(index) {
        return this.items[index];
    }
}
exports.Registry = Registry;
