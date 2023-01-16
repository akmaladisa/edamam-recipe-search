<template>
    <div class="container flex justify-center pb-10">
    
        <div class="flex flex-col justify-center">

            <the-jumbotron></the-jumbotron>

            <the-form></the-form>
        </div>

    </div>
</template>

<script>

import TheJumbotron from './TheJumbotron.vue';
import TheForm from './TheForm.vue';

export default {
    components: {
        TheJumbotron,
        TheForm
    }
}

</script>