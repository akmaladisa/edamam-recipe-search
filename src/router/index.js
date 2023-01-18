import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "../components/MainPage.vue"
import FavoritePage from "../components/FavoritePage.vue";

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: '/favorite',
        component: FavoritePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;