
// EXAMPLE
// factory function

function createPokemon(data) {
  let name = data.name || "Unknown"; 
  let weight = data.weight || "Unknown";
  let abilities = [];
  for(let i=0; i<data.abilities.length; i++) {
    abilities.push(data.abilities[i].ability.name)
  }
  return {
    name: name,
    weight: weight,
    abilities: abilities,
    showStatus() {
      return `${this.name} is ${this.weight} kg`;
    },
    attack(id) {
      if(id<this.abilities.length) {
        return `${this.name} performed a ${this.abilities[id]}`;
      }
    }
  }
}

// instance of a pokemon created by the factory function
let pikachu = createPokemon(pikachuData);
let charmander = createPokemon(charmanderData);

console.log("\n\n ********* factory function pattern *********")
console.log(pikachu.showStatus());
console.log(pikachu.attack(1));
console.log(charmander.showStatus());
console.log(charmander.attack(1));

// EXAMPLE
// class
class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.weight = data.weight;
    this.abilities = [];
    for(let i=0; i<data.abilities.length; i++) {
      this.abilities.push(data.abilities[i].ability.name)
    }
  }

  showStatus() {
    return `${this.name} is ${this.weight} kg!`;
  }

  attack(id) {
    if(id<this.abilities.length) {
      return `${this.name} busted a ${this.abilities[id]}`;
    }
  }
}

console.log("\n\n ********* class pattern *********")
// instance of a pokemon created by the class
let pikachuToo = new Pokemon(pikachuData);
let charmanderToo = new Pokemon(charmanderData);
console.log(pikachuToo.showStatus());
console.log(pikachuToo.attack(0));
console.log(charmanderToo.showStatus());
console.log(charmanderToo.attack(0));

export {createPokemon, Pokemon};