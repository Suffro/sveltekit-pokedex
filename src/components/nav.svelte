<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative">
  <div>
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10 px-4 sm:px-6">
        <div class="flex justify-start items-center lg:w-0 lg:flex-1">
            <a href="/">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto sm:h-10" src="https://i.ibb.co/s5rMQW5/4.png" alt="SveltKit Pokedex Logo">
            </a>
            <div>
                <p class="ml-4 font-bold text-xl">SvelteKit Pokedex</p>
                <span class="ml-4 font-light text-sm">Made with ❤️ by <a href="https://github.com/Suffro" target="_blank" class="hover:underline">Lorenzo</a></span>
            </div>
        </div>
        <div>
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: outline/menu -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            <nav class="hidden md:flex space-x-10">
                <a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> About </a>
                <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900"> Home </a>
            </nav>
        </div>
    </div>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          </div>
          <div class="-mr-2">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="py-6 px-5 space-y-6">
        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
          <a href="/about" class="text-base font-medium text-gray-900 hover:text-gray-700"> About </a>

          <a href="/" class="text-base font-medium text-gray-900 hover:text-gray-700"> Home </a>
        </div>
      </div>
    </div>
  </div>
</div>
