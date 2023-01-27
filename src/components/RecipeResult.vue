<template>
    
    <div class="my-10">
        <div v-if="begin">
            <p>Search for some recipes</p>
        </div>

        <div v-if="loading">
            <p>Loading Cuyy...</p>
        </div>
        
        <div v-if="resultShow">
            <h1>results</h1>
        </div>

        <div v-if="recipeNotFound">
            <h1>Recipe Not Found</h1>
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

