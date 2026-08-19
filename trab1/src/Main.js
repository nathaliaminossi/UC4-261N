"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Warrior_1 = require("./Warrior");
const Mage_1 = require("./Mage");
const Weapon_1 = require("./Weapon");
const Spell_1 = require("./Spell");
const Party_1 = require("./Party");
// Cria as armas
const longsword = new Weapon_1.Weapon("Longsword", 35);
const battleAxe = new Weapon_1.Weapon("Battle Axe", 45);
// Cria as magias
const fireball = new Spell_1.Spell("Fireball", 50, 30);
const iceBolt = new Spell_1.Spell("Ice Bolt", 30, 20);
// Cria os personagens
const aragorn = new Warrior_1.Warrior("Aragorn", 10, 150, 40, longsword);
const gimli = new Warrior_1.Warrior("Gimli", 9, 160, 45, battleAxe);
const gandalf = new Mage_1.Mage("Gandalf", 12, 150, 100, fireball);
const merlin = new Mage_1.Mage("Merlin", 8, 120, 110, iceBolt);
// Cria a Party
const party = new Party_1.Party("The Dragon Slayers", []);
console.log("========================================");
console.log("        THE DRAGON SLAYERS");
console.log("========================================");
// Adiciona os personagens na Party
party.addMember(aragorn);
party.addMember(gimli);
party.addMember(gandalf);
party.addMember(merlin);
// Mostra os membros
party.showMembers();
// Mostra informações dos personagens
console.log("\n========================================");
console.log("        CHARACTER INFORMATION");
console.log("========================================");
aragorn.showInfo();
gimli.showInfo();
gandalf.showInfo();
merlin.showInfo();
// Warriors atacam
console.log("\n========================================");
console.log("              ATTACKS");
console.log("========================================");
aragorn.attack();
gimli.attack();
// Mages usam suas magias
console.log("\n========================================");
console.log("              SPELLS");
console.log("========================================");
gandalf.castSpell();
merlin.castSpell();
// Mostra a mana depois das magias
console.log("\n========================================");
console.log("        MANA AFTER SPELLS");
console.log("========================================");
console.log(`Gandalf mana: ${gandalf.getMana()}`);
console.log(`Merlin mana: ${merlin.getMana()}`);
// Causa dano ao personagem
console.log("\n========================================");
console.log("              DAMAGE");
console.log("========================================");
gandalf.takeDamage(40);
console.log(`Gandalf health remaining: ${gandalf.getHealth()}`);
// Demonstra o uso de setter
console.log("\n========================================");
console.log("             SETTER");
console.log("========================================");
aragorn.setLevel(11);
console.log(`Aragorn's new level: ${aragorn.getLevel()}`);
// Remove um personagem
console.log("\n========================================");
console.log("       PARTY AFTER REMOVAL");
console.log("========================================");
party.removeMember(gimli);
// Mostra a Party novamente
party.showMembers();
