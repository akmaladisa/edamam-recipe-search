<template>
    <div class="my-3">
        <h1 class="font-semibold mb-3 text-3xl text-center">Find Recipe</h1>

        <form @submit.prevent="searchRecipe">
            <div class="mb-5">
                <label for="default-input" class="block mb-1 text-sm font-medium text-gray-900">Recipe Keywords</label>
                <input v-model="recipeKeyword" type="text" placeholder="e.g. rendang, chicken, etc." id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-slate-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="mb-10">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Diet Label</label>
                <div class="flex flex-wrap mb-4 justify-start">
                    <div>
                        <input type="checkbox" value="balanced" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">balanced</label>
                    </div>

                    <div>
                        <input type="checkbox" value="high-fiber" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">high-fiber</label>
                    </div>

                    <div>
                        <input type="checkbox" value="high-protein" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">high-protein</label>
                    </div>
                </div>
                <div class="flex flex-wrap justify-start">
                    <div>
                        <input type="checkbox" value="low-carb" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">low-carb</label>
                    </div>

                    <div>
                        <input type="checkbox" value="low-fat" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">low-fat</label>
                    </div>

                    <div>
                        <input type="checkbox" value="low-sodium" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">low-sodium</label>
                    </div>
                </div>
            </div>

            <div class="mb-10">
                <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900">Health Label</label>
                <div class="flex flex-wrap mb-4 justify-start">
                    <div>
                        <input type="checkbox" value="alcohol-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">alcohol-free</label>
                    </div>

                    <div>
                        <input type="checkbox" value="celery-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">celery-free</label>
                    </div>

                    <div>
                        <input type="checkbox" value="vegetarian" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">vegetarian</label>
                    </div>
                </div>
                <div class="flex flex-wrap justify-start mb-4">
                    <div>
                        <input type="checkbox" value="egg-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">egg-free</label>
                    </div>

                    <div>
                        <input type="checkbox" value="fish-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">fish-free</label>
                    </div>

                    <div>
                        <input type="checkbox" value="vegan" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">vegan</label>
                    </div>
                </div>
                <div class="flex flex-wrap justify-start mb-4">
                    <div>
                        <input type="checkbox" value="gluten-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">gluten-free</label>
                    </div>

                    <div>
                        <input type="checkbox" value="sugar-conscious" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">sugar-conscious</label>
                    </div>

                    <div>
                        <input type="checkbox" value="mustard-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">mustard-free</label>
                    </div>
                </div>
                <div class="flex flex-wrap justify-start mb-4">
                    <div>
                        <input type="checkbox" value="soy-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">soy-free</label>
                    </div>

                    <div>
                        <input type="checkbox" value="low-fat-abs" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">low-fat-abs</label>
                    </div>

                    <div>
                        <input type="checkbox" value="low-potassium" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">low-potassium</label>
                    </div>
                </div>
                <div class="flex flex-wrap justify-start mb-4">
                    <div>
                        <input type="checkbox" value="low-sugar" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">low-sugar</label>
                    </div>

                    <div>
                        <input type="checkbox" value="pork-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">pork-free</label>
                    </div>

                    <div>
                        <input type="checkbox" value="red-meat-free" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="mr-5 ml-1 text-sm text-gray-900 dark:text-gray-300">red-meat-free</label>
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

export default {
    data() {
        return {
            recipeKeyword: '',
            recipeResults: [],
            healthLabels: [],
            dietLabels: []
        }
    },

    methods: {
        async searchRecipe() {
            if( this.recipeKeyword.trim() == '' ) {
                return alert('Recipe keywords must be filled')
            }
        }
    }
}

</script>