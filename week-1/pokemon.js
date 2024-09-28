
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

export {createPokemon, Pokemon};