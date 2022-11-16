// ROUTES FILE
/* eslint-disable */
import { createRouter, createWebHistory, START_LOCATION } from "vue-router";
import Home from './components/main/AppHome.vue';
import TermsOfUse from './components/main/TermsOfUse.vue';
import Register from './components/main/AppRegister.vue';
import Contact from './components/main/ContactQuestions.vue';
import Dashboard from './components/main/UserDashboard.vue';
import Settings from './components/main/UserSettings.vue';
import AdminSettings from './components/main/AdminSettings.vue';
import {onAuthStateChanged} from 'firebase/auth';
import {fireAuth} from './firebase.js';
import Store from './store';
import store from "./store";


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, meta: {home: true}},
        {path: '/terms', component: TermsOfUse},
        {path: '/register', component: Register, meta: {home: true}},
        {path: '/contact', component: Contact},
        {path: '/dashboard', component: Dashboard, meta: {auth: true}},
        {path: '/settings', component: Settings, meta: {auth: true}},
        {path: '/admin/settings', component: AdminSettings, meta: {auth: true}}
    ]
});



const validateCheck = (to, from, next) => {
    if(to.meta.auth && !store.getters['auth/getAuthStatus']) {
        //If the meta shows that the user has to be authenticated AND the auth status shows as not authenticated.
        next('/');
    } else if(to.meta.home && store.getters['auth/getAuthStatus']) {
        //If the meta shows that the user has to be authenticated AND the auth status shows as authenticated.
        next('/dashboard');
    } else {
        next();
    }

    Store.commit('notify/setLoadingState', false);
}



routes.beforeEach((to, from, next) => {
    if(from === START_LOCATION) {
        const unsubscribe = onAuthStateChanged(fireAuth, user => {
            if(user) {
                Store.dispatch('auth/autoSignIn', user).then(() => {
                    validateCheck(to, from, next);
                })
            } else {
                validateCheck(to, from, next);
            }
        });
        unsubscribe();
    } else {
        validateCheck(to, from, next);
    }
});




export default routes;