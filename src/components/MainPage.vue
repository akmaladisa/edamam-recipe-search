<template>
    <main-slot>
        <the-jumbotron></the-jumbotron>
        <the-form></the-form>
    </main-slot>
</template>

<script>

import TheJumbotron from './TheJumbotron.vue';
import TheForm from './TheForm.vue';
import MainSlot from '../slots/MainSlot.vue';

export default {
    components: {
        TheJumbotron,
        TheForm,
        MainSlot
    }
}

</script>