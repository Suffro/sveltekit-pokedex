import { writable } from "svelte/store";

export const pokemons = writable([]);
export const pokemonNameSearchQuery = writable('');

export const pokemonsListFetch = async (pokemonName = '', limit = 99) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}?limit=${limit}&offset=0`;
    const result = await fetch(url);
    const data = await result.json();
    let loadedPokemons;
    if (data.results) {
        loadedPokemons = data.results.map((data, index) => {
            return{
                name: data.name,
                index: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                url: data.url
            };
        });
    }else{
        loadedPokemons = [{
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
        }];
    }
    pokemons.set(loadedPokemons);
}