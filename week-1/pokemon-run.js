import {Pokemon, createPokemon} from "./pokemon.js";

import charmanderData from "./data/charmander.json" assert { type: 'json' };
import pikachuData from "./data/pikachu.json" assert { type: 'json' };

// Have a look at data/charmander.data for more details
console.log("Hi I'm " + charmanderData.name);
// Have a look at data/pikachu.data for more details
console.log("Hi I'm " + pikachuData.name);

console.log("\n\n ********* factory function pattern *********")
// instance of a pokemon created by the factory function
let pikachu = createPokemon(pikachuData);
let charmander = createPokemon(charmanderData);
console.log(pikachu.showStatus());
console.log(pikachu.attack(1));
console.log(charmander.showStatus());
console.log(charmander.attack(1));


console.log("\n\n ********* class pattern *********")
// instance of a pokemon created by the class
let pikachuToo = new Pokemon(pikachuData);
let charmanderToo = new Pokemon(charmanderData);
console.log(pikachuToo.showStatus());
console.log(pikachuToo.attack(0));
console.log(charmanderToo.showStatus());
console.log(charmanderToo.attack(0));

export {createPokemon, Pokemon};
