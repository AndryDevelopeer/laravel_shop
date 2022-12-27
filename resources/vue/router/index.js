import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
/*        {
            path: '/',
            name: 'home',
            component: () => import('../components/home/Home.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../components/test/Test.vue')
        },*/
    ]
})


export default router