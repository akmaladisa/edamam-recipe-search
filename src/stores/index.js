import { reactive } from "vue"

export const recipe = reactive({
    recipeResults: {},
    favoriteRecipes: [],
    isLoadingToSearch: false,
    isRecipeNotFound: false
})