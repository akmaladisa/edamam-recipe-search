<template>
    <main-slot>
        <the-jumbotron></the-jumbotron>
        <the-form></the-form>
        <recipe-results></recipe-results>
    </main-slot>
</template>

<script>

import TheJumbotron from './TheJumbotron.vue';
import TheForm from './TheForm.vue';
import MainSlot from '../slots/MainSlot.vue';
import RecipeResults from './RecipeResult.vue';

export default {
    components: {
        TheJumbotron,
        TheForm,
        MainSlot,
        RecipeResults
    }
}

</script>