<template>
    <div class="my-3">
        <h1 class="font-semibold mb-3 text-3xl text-center">Find Recipe</h1>

        <form>
            <div class="mb-5">
                <label for="default-input" class="block mb-1 text-sm font-medium text-gray-900">Recipe Keywords</label>
                <input v-model="recipeKeyword" type="text" placeholder="e.g. rendang, chicken, etc." id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-slate-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="mb-7">
                <label for="default-input" class="block mb-1 text-sm font-medium text-gray-900">Calories</label>
                <input v-model="calories" type="number" placeholder="e.g. 200-300." id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-slate-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <select v-model="dietLabel" id="diet" class="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:bg-slate-600 dark:text-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected disabled>Diet Label</option>
                <option value="balanced">balanced</option>
                <option value="high-fiber">high-fiber</option>
                <option value="high-protein">high-protein</option>
                <option value="low-carb">low-carb</option>
                <option value="low-fat">low-fat</option>
                <option value="low-sodium">low-sodium</option>
            </select>

            <div>
                <button type="submit" class="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Search</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            recipeKeyword: '',
            calories: '',
            dietLabel: ''
        }
    },
}

</script>