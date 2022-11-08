<template>
    <!-- MAIN APP COMPONENT -->

    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>

</template>



<script>
    import AppHeader from './components/header-footer/AppHeader.vue';
    import AppFooter from './components/header-footer/AppFooter.vue';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            AppHeader,
            AppFooter
        },
        computed: {
            ...mapGetters({
                toastMsg: 'notify/getToastMsg'
            })
        },
        watch: {
            toastMsg(toastMsg) {
                if(toastMsg[0] === true) {
                    if(toastMsg[2] === 'error') {
                        this.$toast.error(toastMsg[1]);
                    } else if(toastMsg[2] === 'success') {
                        this.$toast.success(toastMsg[1]);
                    }
                }
            }
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