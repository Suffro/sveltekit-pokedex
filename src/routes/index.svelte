<script>
	import Card from '../components/card.svelte';
    import SearchBar from '../components/searchBar.svelte';
    import { pokemons, pokemonNameSearchQuery, pokemonsListFetch } from '../stores/pokeApi';
    pokemonsListFetch($pokemonNameSearchQuery);

    let loadedAll=false;
    let hideLoadLess=false;
    const loadMore = (n) => {
        let newNumber = ($pokemons.length+n);
        pokemonsListFetch($pokemonNameSearchQuery, newNumber);
        loadedAll=$pokemons.length>=1126;
        hideLoadLess=$pokemons.length<=0;
    }
    const loadLess = (n) => {
        let newNumber = ($pokemons.length-n);
        pokemonsListFetch($pokemonNameSearchQuery, newNumber);
        hideLoadLess=$pokemons.length-n<=0;
        loadedAll=$pokemons.length>1126;
    }
</script>

<svelte:head>
	<title>SvelteKit Pokedex</title>
</svelte:head>

<div class="px-4 sm:px-6">
    <SearchBar/>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8">
        {#each $pokemons as pokemon}
            <Card pokemon={pokemon}/>
        {/each}
    </ul>
    <div class="flex justify-center">
        {#if !hideLoadLess}
            <button on:click={()=>{loadLess(99)}} value={hideLoadLess} class="mb-8 mr-2 w-30 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Load less</button>
        {/if}
        {#if !loadedAll}
            <button on:click={()=>{loadMore(99)}} value={loadedAll} class="mb-8 mx-2 w-30 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Load more</button>
            <button on:click={()=>{loadMore(1126)}} value={loadedAll} class="mb-8 ml-2 w-30 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Load all</button>
        {/if}
    </div>
</div>