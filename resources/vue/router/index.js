import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/main/Main.vue')
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../components/auth/Auth.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../components/auth/Register')
        },
    ]
})


export default router