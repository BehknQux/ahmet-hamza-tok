import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage/HomePage.vue")
},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router