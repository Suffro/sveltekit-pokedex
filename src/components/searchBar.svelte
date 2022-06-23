<script>
    import { pokemonNameSearchQuery, pokemonsListFetch } from '../stores/pokeApi';

    const updateSearchQuery = (e) => {
        pokemonNameSearchQuery.set(e.target.value);
        pokemonsListFetch($pokemonNameSearchQuery);
    }
</script>

<div class="mt-5">
  <label for="search" class="block text-sm font-medium text-gray-700">Search pokemon by name</label>
  <div class="mt-1 relative flex items-center">
    <input on:change={(e)=>{updateSearchQuery(e)}} type="text" name="search" id="search" placeholder="Pikachu" class="pl-3 h-10 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm rounded-md border border-gray-200">
    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-3">
      <i class="bi bi-search text-gray-500"/>
    </div>
  </div>
</div>
