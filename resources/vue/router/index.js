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
        {
            path: '/registration',
            name: 'registration',
            component: () => import('../components/auth/Registration')
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('../components/personal/Personal')
        },
    ]
})

export default router