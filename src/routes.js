import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('./views/Notfound.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router