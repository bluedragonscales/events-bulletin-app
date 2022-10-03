// ROUTES FILE
/* eslint-disable */
import { createRouter, createWebHistory, START_LOCATION } from "vue-router";
import Home from './components/main/AppHome.vue';
import TermsOfUse from './components/main/TermsOfUse.vue';
import Register from './components/main/AppRegister.vue';


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, name: 'home'},
        {path: '/terms', component: TermsOfUse, name: 'terms'},
        {path: '/register', component: Register, name: 'register'}
    ]
});


export default routes;