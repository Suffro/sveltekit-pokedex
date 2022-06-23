<script>
	import { onMount } from 'svelte';

	export let pokemon;
	let pokemonDetails;
	onMount(async () => {
		const response = await fetch(pokemon.url);
		const data = await response.json();
		pokemonDetails = data;
	});
</script>

<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
	<div class="w-full flex items-center justify-between p-6 space-x-6">
		<div class="flex-1 truncate">
			<div class="flex items-center space-x-3">
				<h3 class="text-gray-900 text-sm font-medium truncate capitalize">{pokemon.name}</h3>
			</div>
			<p class="mt-1 text-gray-500 text-sm truncate">
				{#if pokemonDetails}
					{#each pokemonDetails.types as type}
						<span class="capitalize mr-2 flex-shrink-0 inline-block px-2 py-0.5 text-white-800 text-xs font-medium bg-gray-100 rounded-full">
							{type.type.name}
                        </span>
					{/each}
				{/if}
			</p>
		</div>
		<img
			class="w-20 h-20 bg-gray-0 rounded-full flex-shrink-0"
			src={pokemon.image}
			alt={pokemon.name}
		/>
	</div>
	<div>
		<div class="-mt-px flex divide-x divide-gray-200">
            {#if pokemonDetails}
                <p class="p-3 text-sm"><span class="font-medium">Weight:</span> {pokemonDetails.weight/10} kg</p> 
            {/if}
		</div>
	</div>
</li>
