<template>
    <div class="container flex justify-center pb-10">
    
        <div class="flex flex-col justify-center">

            <the-jumbotron></the-jumbotron>

            <div class="my-3 text-center">
                <h1 class="font-semibold mb-3 text-3xl">Find Recipe</h1>

                <form>
                    <input type="text" placeholder="Food Recipe" class="drop-shadow-lg text-orange-500 rounded-lg p-3 focus:outline-none focus:drop-shadow-md">
                </form>
            </div>
        </div>

    </div>
</template>

<script>

import TheJumbotron from './TheJumbotron.vue';

export default {
    components: {
        TheJumbotron,
    }
}

</script>