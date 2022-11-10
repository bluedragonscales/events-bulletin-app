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


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, name: 'home'},
        {path: '/terms', component: TermsOfUse},
        {path: '/register', component: Register},
        {path: '/contact', component: Contact},
        {path: '/dashboard', component: Dashboard},
        {path: '/settings', component: Settings},
        {path: '/admin/settings', component: AdminSettings}
    ]
});



const validateCheck = (to, from, next) => {
    next();
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