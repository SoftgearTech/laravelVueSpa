import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import * as auth from './services/auth_service';

Vue.use(Router);

const routes = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/Dashboard.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import('./views/Categories.vue'),
                beforeEnter(to, from, next) {
                    if (auth.getUserRole() === 'administrator') {
                        next();
                    } else {
                        next('/404');
                    }
                }
            },
            {
                path: 'products',
                name: 'products',
                component: () => import('./views/Products.vue'),
                beforeEnter(to, from, next) {
                    if (auth.getUserRole() === 'user') {
                        next();
                    } else {
                        next('/404');
                    }
                }
            },
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next('/login');
            } else {
                next();
            }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/home');
            }
        }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('./views/404.vue')
    }
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
