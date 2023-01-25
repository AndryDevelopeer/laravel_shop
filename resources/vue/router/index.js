import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/main/Main.vue'),
            meta: {
                breadcrumbs: [
                    {
                        name: 'Главная',
                    },
                ],
            }
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../components/auth/Auth.vue'),
            meta: {
                breadcrumbs: [
                    {
                        name: 'Главная',
                        path: '/',
                    },
                    {
                        name: "Авторизация"
                    },
                ],
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../components/auth/Register'),
            meta: {
                breadcrumbs: [
                    {
                        name: 'Главная',
                        path: '/',
                    },
                    {
                        name: "Регистрация"
                    },
                ],
            }
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('../components/personal/Personal'),
            meta: {
                breadcrumbs: [
                    {
                        name: 'Главная',
                        path: '/',
                    },
                    {
                        name: "Личный кабинет"
                    },
                ],
            }
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import('../components/catalog/CatalogComponent'),
            meta: {
                breadcrumbs: [
                    {
                        name: 'Главная',
                        path: '/',
                    },
                    {
                        name: "Каталог"
                    },
                ],
            }
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: () => import('../components/favorites/FavoritesComponent'),
            meta: {
                breadcrumbs: [
                    {
                        name: 'Главная',
                        path: '/',
                    },
                    {
                        name: "Избранное"
                    },
                ],
            }
        },
    ]
})

export default router