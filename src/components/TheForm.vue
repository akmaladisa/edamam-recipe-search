<template>
    <div class="my-3">
        <h1 class="font-semibold mb-3 text-3xl text-center">Find Recipe</h1>

        <form @submit.prevent="searchRecipe">
            <div class="mb-5">
                <label for="default-input" class="block mb-1 text-sm font-medium text-gray-900">Recipe Keywords</label>
                <input v-model="recipeKeyword" type="text" placeholder="e.g. rendang, chicken, etc." id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-slate-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="mb-2 flex justify-between">
                <div>
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Health Label</label>
                    <div class="flex flex-wrap mb-4 justify-start flex-col">
                        <div v-for="healthLabel in healthLabels" :key="healthLabel.id">
                            <input v-model="selectedHealthLabels" type="checkbox" :value="healthLabel.id" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">{{ healthLabel.appear }}</label>
                        </div>
                    </div>
                </div>

                <div>
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Diet Label</label>
                    <div class="flex flex-wrap mb-4 justify-start flex-col">
                        <div v-for="dietLabel in dietLabels" :key="dietLabel.id">
                            <input v-model="selectedDietLabels" type="checkbox" :value="dietLabel.id" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">{{ dietLabel.appear }}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button type="submit" class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { recipe } from "../stores/index.js"

export default {
    data() {
        return {
            recipeKeyword: '',
            selectedHealthLabels: [],
            selectedDietLabels: [],
            healthLabels: [
                {
                    id: 'alcohol-free',
                    appear: 'Alcohol Free'
                },
                {
                    id: 'celery-free',
                    appear: 'Celery Free'
                },
                {
                    id: 'vegetarian',
                    appear: 'Vegetarian'
                },
                {
                    id: 'egg-free',
                    appear: 'Egg Free'
                },
                {
                    id: 'fish-free',
                    appear: 'Fish Free'
                },
                {
                    id: 'vegan',
                    appear: 'Vegan'
                },
                {
                    id: 'gluten-free',
                    appear: 'Gluten Free'
                },
                {
                    id: 'sugar-conscious',
                    appear: 'Sugar Conscious'
                },
                {
                    id: 'mustard-free',
                    appear: 'Mustard Free'
                },
                {
                    id: 'soy-free',
                    appear: 'Soy Free'
                },
                {
                    id: 'low-fat-abs',
                    appear: 'Low Fat Abs'
                },
                {
                    id: 'low-potassium',
                    appear: 'Low Potassium'
                },
                {
                    id: 'low-sugar',
                    appear: 'Low Sugar'
                },
                {
                    id: 'pork-free',
                    appear: 'Pork Free'
                },
                {
                    id: 'red-meat-free',
                    appear: 'Red Meat Free'
                },
            ],
            dietLabels: [
                {
                    id: 'balanced',
                    appear: 'Balanced'
                },
                {
                    id: 'high-fiber',
                    appear: 'High Fiber'
                },
                {
                    id: 'high-protein',
                    appear: 'High Protein'
                },
                {
                    id: 'low-carb',
                    appear: 'Low Carb'
                },
                {
                    id: 'low-fat',
                    appear: 'Low Fat'
                },
                {
                    id: 'low-sodium',
                    appear: 'Low Sodium'
                },
            ],
            recipeResults: [],
            isLoadingToSearch: false
        }
    },

    methods: {
        async searchRecipe() {
            if( this.recipeKeyword.trim() == '' ) {
                return alert('Recipe keywords must be filled')
            }

            if( this.selectedDietLabels.length < 1 && this.selectedHealthLabels.length < 1 ) {
                recipe.isLoadingToSearch = !recipe.isLoadingToSearch;

                const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${this.recipeKeyword}&app_id=b05b0cfb&app_key=c3460b53b7a76fc2ed202ad1ae776112`)

                recipe.recipeResults = response.data;

                recipe.isLoadingToSearch = !recipe.isLoadingToSearch
                this.recipeKeyword = '';

                console.log(recipe.recipeResults);
            }

            if( this.selectedDietLabels.length > 0 && this.selectedHealthLabels.length < 1 ) {
                // URL with params should look like this
                // `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=b05b0cfb&app_key=c3460b53b7a76fc2ed202ad1ae776112&diet=high-fiber&diet=high-protein&diet=low-carb&diet=low-fat`
                recipe.isLoadingToSearch = !recipe.isLoadingToSearch;

                let baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.recipeKeyword}&app_id=b05b0cfb&app_key=c3460b53b7a76fc2ed202ad1ae776112`;

                for (const params of this.selectedDietLabels) {
                    baseURL += `&diet=${params}`;
                }

                this.recipeKeyword = '';
                this.selectedDietLabels = [];

                const response = await axios.get( baseURL );
                recipe.recipeResults = response.data;
                recipe.isLoadingToSearch = !recipe.isLoadingToSearch;
                console.log(recipe.recipeResults);
            }

            if( this.selectedHealthLabels.length > 0 && this.selectedDietLabels.length < 1 ) {
                recipe.isLoadingToSearch = !recipe.isLoadingToSearch;

                let baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.recipeKeyword}&app_id=b05b0cfb&app_key=c3460b53b7a76fc2ed202ad1ae776112`;

                for (const params of this.selectedHealthLabels) {
                    baseURL += `&health=${params}`;
                }

                this.recipeKeyword = '';
                this.selectedHealthLabels = [];

                const response = await axios.get( baseURL );
                recipe.recipeResults = response.data;
                recipe.isLoadingToSearch = !recipe.isLoadingToSearch;
                console.log(recipe.recipeResults);  
            }

            if( this.selectedDietLabels.length > 0 && this.selectedHealthLabels.length > 0 ) {
                recipe.isLoadingToSearch = !recipe.isLoadingToSearch;
                let baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.recipeKeyword}&app_id=b05b0cfb&app_key=c3460b53b7a76fc2ed202ad1ae776112`;

                for (const params of this.selectedDietLabels) {
                    baseURL += `&diet=${params}`;
                }
                
                for (const params of this.selectedHealthLabels) {
                    baseURL += `&health=${params}`;
                }

                this.recipeKeyword = '';
                this.selectedDietLabels = [];
                this.selectedHealthLabels = [];

                const response = await axios.get( baseURL );
                recipe.recipeResults = response.data;
                recipe.isLoadingToSearch = !recipe.isLoadingToSearch;
                console.log(recipe.recipeResults);
            }
        },
    }
}

</script>