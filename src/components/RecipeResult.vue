<template>
    
    <div class="my-10">
        <div v-if="begin">
            <p>Search for some recipes</p>
        </div>

        <div v-else-if="loading">
            <p>Loading...</p>
        </div>

        <div v-else>
            <h1 class="text-4xl font-semibold">NO RECIPE FOUND</h1>
        </div>
    </div>

</template>

<script>

import { recipe } from '../stores/index.js';

export default {
    computed: {
        loading() {
            return recipe.isLoadingToSearch == true;
        },

        begin() {
            return recipe.isLoadingToSearch == false;
        },

        noRecipeFound() {
            return recipe.recipeResults.hits.length < 1;
        }
    }
}

</script>

