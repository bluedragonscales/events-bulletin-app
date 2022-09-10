import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'},
            {href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'},
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap'}
        ]
    }
});