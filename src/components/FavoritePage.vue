<template>
    <main-slot>
        <the-jumbotron></the-jumbotron>
        <div class="my-3">
            <h3 class="text-center font-semibold text-3xl">Favorite Recipes</h3>
            <input v-model="searchRecipe" type="text" placeholder="Your Fav Recipes... " id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3 dark:bg-slate-600 dark:text-gray-200">
        </div>
        <div v-if="recipe.favoriteRecipes.length" class="mt-5">
            <div v-for="(resep, i) in filteredItems" :key="i" class="mb-10">
                <the-card class="relative" href="#" variant="horizontal" :img-src="resep.recipe.image" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ resep.recipe.label }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                    source : <a :href="resep.recipe.url" class="text-blue-500 hover:text-blue-700 hover:font-medium" target="_blank" rel="noopener">{{ resep.recipe.source }}</a>
                    </p>
                    <button @click.prevent="deleteFavoriteRecipe(i)" role="button" class="absolute top-0 right-0 shadow hover:bg-red-600 hover:top-1 hover:shadow-sm bg-red-500 p-2 text-white rounded-lg">Delete</button>
                </the-card>
            </div>
        </div>
    </main-slot>
</template>

<script>

import MainSlot from '../slots/MainSlot.vue';
import TheForm from './TheForm.vue';
import TheJumbotron from './TheJumbotron.vue';
import { recipe } from '../stores';
import { TheCard } from 'flowbite-vue'

export default {
    components: {
        TheForm,
        TheJumbotron,
        MainSlot,
        TheCard
    },

    data() {
        return {
            recipe,
            searchRecipe: ''
        }
    },

    methods: {
        deleteFavoriteRecipe(i) {
            recipe.favoriteRecipes.splice(i, 1)
        }
    },  

    computed: {
        filteredItems() {
            return recipe.favoriteRecipes.filter(recipe => {
                return recipe.recipe.label.toLowerCase().includes(this.searchRecipe.toLowerCase())
            })
        }
    }
}

</script>