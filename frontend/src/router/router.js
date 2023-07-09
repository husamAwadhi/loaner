import Home from './../views/Home.vue'
import NotFound from './../views/errors/NotFound.vue'
import NewApplication from './../views/NewApplication.vue'
import { createRouter, createWebHistory } from 'vue-router'
import auth from './../middlewares/auth'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/apply',
        name: 'New Application',
        component: NewApplication,
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        path: "/:notFound",
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next
    }
    return middleware[0]({
        ...context
    })
})

export default router
