import { Warrior } from "./Warrior";
import { Monster } from "./Monster";

const guerreiro1: Warrior = new Warrior("nat", "aura");
const monstro1: Monster = new Monster( "enxaqueca")

console.log(guerreiro1);
console.log(monstro1);

guerreiro1.atacar();
monstro1.atacar();

