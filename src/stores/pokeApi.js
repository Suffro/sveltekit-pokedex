import { writable } from "svelte/store";

export const pokemons = writable([]);

const pokemonFetch = async (limit=150) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
    const result = await fetch(url);
    const data = await result.json();
    const loadedPokemons = data.results.map((data, index) => {
        return{
            name: data.name,
            index: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index + 1}.png`,
            url: data.url
        };
    });
    pokemons.set(loadedPokemons);
}

pokemonFetch();