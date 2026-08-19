"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    constructor(name, level, health, mana, spell) {
        super(name, level, health);
        this.mana = mana;
        this.spell = spell;
    }
    getMana() {
        return this.mana;
    }
    getSpell() {
        return this.spell;
    }
    setSpell(spell) {
        this.spell = spell;
    }
    setMana(mana) {
        this.mana = mana;
    }
    castSpell() {
        // Verifica se a mana do mago é menor que o custo da magia
        if (this.mana < this.spell.getManaCost()) {
            // Se não tiver mana suficiente, mostra essa mensagem
            console.log(`${this.getName()} does not have enough mana!`);
            return;
        }
        console.log(`${this.getName()} casts ${this.spell.getName()}!`);
        //  dano 
        console.log(`Damage: ${this.spell.getDamage()}`);
        // Diminui da mana do mago o custo da magia
        this.mana -= this.spell.getManaCost();
        console.log(`Mana remaining: ${this.mana}`);
    }
}
exports.Mage = Mage;
