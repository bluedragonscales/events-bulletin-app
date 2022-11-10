<template>
    <!-- MAIN APP COMPONENT -->

    <app-header></app-header>

    <router-view v-if="!isLoading"></router-view>

    <div class="text-center m-5 load-container" v-else>
        <app-loader></app-loader>
    </div>

    <app-footer></app-footer>

</template>



<script>
    import AppHeader from './components/header-footer/AppHeader.vue';
    import AppFooter from './components/header-footer/AppFooter.vue';
    import AppLoader from './components/utils/AppLoader.vue';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            AppHeader,
            AppFooter,
            AppLoader
        },
        computed: {
            ...mapGetters({
                toastMsg: 'notify/getToastMsg',
                isLoading: 'notify/getLoadingState'
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

    .load-container {
        min-height: 50vh;
    }

</style>