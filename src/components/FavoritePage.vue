<template>
    <main-slot>
        <the-jumbotron></the-jumbotron>
        <div class="my-3">
            <h3 class="text-center font-semibold text-3xl">Favorite Recipes</h3>
            <input type="text" placeholder="Your Fav Recipes... " id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3 dark:bg-slate-600 dark:text-gray-200">
        </div>
    </main-slot>
</template>

<script>

import MainSlot from '../slots/MainSlot.vue';
import TheForm from './TheForm.vue';
import TheJumbotron from './TheJumbotron.vue';

export default {
    components: {
        TheForm,
        TheJumbotron,
        MainSlot
    }
}

</script>