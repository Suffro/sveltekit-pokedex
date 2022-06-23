<script>
	import Card from '../components/card.svelte';
    import { pokemons } from '../stores/pokeApi';
</script>

<svelte:head>
	<title>SvelteKit Pokedex</title>
</svelte:head>

<div class="px-4 sm:px-6">
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8">
        {#each $pokemons as pokemon}
            <Card pokemon={pokemon}/>
        {/each}
    </ul>
</div>