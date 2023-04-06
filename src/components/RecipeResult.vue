<template>
    
    <div class="my-10 px-8">
        <div v-if="begin">
            <p>Search for some recipes</p>
        </div>

        <div v-if="loading">
            <p>Loading...</p>
        </div>
        
        <div v-if="resultShow">
            <div v-for="(resep, i) in recipe.recipeResults.hits" :key="i" class="mb-10">
                <the-card class="relative" href="#" variant="horizontal" :img-src="resep.recipe.image" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ resep.recipe.label }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                    source : <a :href="resep.recipe.url" class="text-blue-500 hover:text-blue-700 hover:font-medium" target="_blank" rel="noopener">{{ resep.recipe.source }}</a>
                    </p>
                    <button role="button" @click.prevent="addToFav(i)" class="absolute top-0 right-0 shadow hover:bg-blue-600 hover:top-1 hover:shadow-sm bg-blue-500 p-2 text-white rounded-lg">+ Favorite</button>
                </the-card>
            </div>
        </div>

        <div v-if="recipeNotFound">
            <h1>Recipe Not Found</h1>
        </div>
    </div>

</template>

<script>

import { recipe } from '../stores/index.js';
import { TheCard } from 'flowbite-vue'

export default {
    data() {
        return {
            recipe,
        }
    },

    components: {
        TheCard
    },

    methods: {
        addToFav(i) {
            recipe.favoriteRecipes.push( recipe.recipeResults.hits[i] )
            console.log(recipe.favoriteRecipes);
        }
    },

    computed: {
        loading() {
            return recipe.isLoadingToSearch == true;
        },

        begin() {
            return recipe.isLoadingToSearch == false && Object.keys(recipe.recipeResults).length < 1;
        },

        resultShow() {
            return recipe.isLoadingToSearch == false && Object.keys(recipe.recipeResults).length > 0 && !this.recipeNotFound;
        },

        recipeNotFound() {
            return recipe.isRecipeNotFound && !this.loading
        },

        // recipeIsFavorite(uri) {
        //     return recipe.favoriteRecipes.some( r => r.recipe.uri == uri )
        // }
    }
}

</script>

