import { Character } from "./Character";
import { Spell } from "./Spell";

export class Mage extends Character {

    private mana: number
    private spell: Spell

    public constructor(name: string, level: number, health: number, mana: number, spell: Spell) {
        super(name, level, health)
        this.mana = mana;
        this.spell = spell;
    }

    public getMana(): number {
        return this.mana;
    }
    public getSpell(): Spell {
        return this.spell;
    }

    public setSpell(spell: Spell): void {
        this.spell = spell;
    }

    public setMana(mana: number): void {
        this.mana = mana;
    }

    public castSpell(): void {

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
