import { describe, beforeAll, test, expect } from 'vitest';
// Import necessary modules and functions
import { createPokemon, Pokemon } from './pokemon'; // Adjust the import path as needed
import charmanderData from "./data/charmander.json" assert { type: 'json' };
import pikachuData from "./data/pikachu.json" assert { type: 'json' };

describe('Pokemon Factory Function and Class Tests', () => {
  // Tests for createPokemon factory function
  describe('createPokemon Factory Function', () => {
    let pikachu, charmander;

    beforeAll(() => {
      pikachu = createPokemon(pikachuData);
      charmander = createPokemon(charmanderData);
    });

    test('createPokemon creates a Pokemon object with name, weight, and abilities', () => {
      expect(pikachu).toHaveProperty('name', pikachuData.name);
      expect(pikachu).toHaveProperty('weight', pikachuData.weight);
      expect(pikachu.abilities).toEqual(pikachuData.abilities.map(a => a.ability.name));
    });

    test('showStatus returns the correct status message', () => {
      expect(pikachu.showStatus()).toBe(`${pikachuData.name} is ${pikachuData.weight} kg`);
      expect(charmander.showStatus()).toBe(`${charmanderData.name} is ${charmanderData.weight} kg`);
    });

    test('attack returns the correct attack message for a valid ability index', () => {
      expect(pikachu.attack(1)).toBe(`${pikachu.name} performed a ${pikachu.abilities[1]}`);
      expect(charmander.attack(0)).toBe(`${charmander.name} performed a ${charmander.abilities[0]}`);
    });
  });

  // Tests for Pokemon class
  describe('Pokemon Class', () => {
    let pikachuToo, charmanderToo;

    beforeAll(() => {
      pikachuToo = new Pokemon(pikachuData);
      charmanderToo = new Pokemon(charmanderData);
    });

    test('Pokemon class creates an instance with name, weight, and abilities', () => {
      expect(pikachuToo).toHaveProperty('name', pikachuData.name);
      expect(pikachuToo).toHaveProperty('weight', pikachuData.weight);
      expect(pikachuToo.abilities).toEqual(pikachuData.abilities.map(a => a.ability.name));
    });

    test('showStatus returns the correct status message', () => {
      expect(pikachuToo.showStatus()).toBe(`${pikachuToo.name} is ${pikachuToo.weight} kg!`);
      expect(charmanderToo.showStatus()).toBe(`${charmanderToo.name} is ${charmanderToo.weight} kg!`);
    });

    test('attack returns the correct attack message for a valid ability index', () => {
      expect(pikachuToo.attack(0)).toBe(`${pikachuToo.name} busted a ${pikachuToo.abilities[0]}`);
      expect(charmanderToo.attack(1)).toBe(`${charmanderToo.name} busted a ${charmanderToo.abilities[1]}`);
    });
  });
});
