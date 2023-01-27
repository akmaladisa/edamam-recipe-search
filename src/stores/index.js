import { reactive } from "vue"

export const recipe = reactive({
    recipeResults: {},
    isLoadingToSearch: false,
    isRecipeNotFound: false
})