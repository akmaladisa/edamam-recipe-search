<template>
    <div class="w-100 mb-3 text-center">
        <a href="https://edamam.com" class="block">
            <img src="../assets/edamam.svg" alt="">
        </a>
    </div>

    <div class="w-96 my-3">
        <img src="../assets/food.svg" alt="Food">

        <p class="mt-1 text-center">Welcome To</p>
        <h1 class="text-center text-5xl mt-1 font-semibold text-orange-500">NyamNyum!</h1>
        <p class="mt-3 text-center">Find your favorite recipe</p>
    </div>

    <div class="my-4 flex justify-center">
        <router-link to="/" class="mr-2">Search</router-link>
        <router-link to="/search" class="ml-2">Favorite</router-link>
    </div>
</template>

<style scoped>

a.router-link-active {
    background-color: #FFE5B4;
    color: #1A4D2E;
    padding: .8em;
    border-radius: 25px;
    box-shadow: .5px .5px .5px;
}

</style>