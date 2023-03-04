<template>
    
    <div class="my-10">
        <div v-if="begin">
            <p>Search for some recipes</p>
        </div>

        <div v-if="loading">
            <p>Loading...</p>
        </div>
        
        <div v-if="resultShow">
            <div v-for="resep in recipe.recipeResults.hits" :key="resep.recipe.uri" class="mb-10">
                <the-card href="#" variant="horizontal" :img-src="resep.recipe.image" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ resep.recipe.label }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                    source : <a :href="resep.recipe.url" class="text-blue-500 hover:text-blue-700 hover:font-medium" target="_blank" rel="noopener">{{ resep.recipe.source }}</a>
                    </p>
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
        }
    }
}

</script>

