<template>

    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>

</template>



<script>
    import AppHeader from './components/header-footer/AppHeader.vue';
    import AppFooter from './components/header-footer/AppFooter.vue';

    export default {
        components: {
            AppHeader,
            AppFooter
        }
    }

</script>




<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nanum Myeongjo', serif;
    }

</style>