<template>
    <!-- HEADER COMPONENT -->

    <nav class="nav-container p-4 navbar">
        <h1 class="text-white navbar-brand">Eat, Drink, What!</h1>

        <!-- The list of nav links at top right. -->
        <ul class="navbar-nav mb-2">
            <li class="nav-item fs-4" v-if="isAuth">
                <span class="nav-link text-white" @click="signOutUser">Log Out</span>
            </li>

            <li class="nav-item fs-4" v-if="isAuth">
                <router-link to="/dashboard" class="nav-link text-white">Dashboard</router-link>
            </li>

            <li class="nav-item fs-4" v-if="isAuth && !isAdmin">
                <router-link to="/settings" class="nav-link text-white">Settings</router-link>
            </li>

            <li class="nav-item fs-4" v-if="isAuth && isAdmin">
                <router-link to="/admin/settings" class="nav-link text-white">Admin Settings</router-link>
            </li>
        </ul>
    </nav>

</template>




<script>
    import {mapGetters} from 'vuex';

    export default {
        methods: {
            signOutUser() {
                this.$store.dispatch('auth/signOut');
            }
        },
        computed: {
            ...mapGetters({
                isAuth: 'auth/getAuthStatus',
                isAdmin: 'auth/getAdminStatus'
            })
        }
    }

</script>





<style scoped>

    h1 {
        font-weight: 700;
        padding-left: 3rem;
        font-size: 4rem;
        cursor: default;
    }

    @media screen and (max-width: 997px) {
        h1 {
            padding-left: 10px;
            font-size: 2rem;
        }
    }

    .nav-container {
        background-color: black;
    }

    @media screen and (max-width: 997px) {
        .nav-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
    }

    ul {
        display: flex;
        flex-direction: row;
    }

    li {
        margin: 1.5rem;
    }

    li span {
        cursor: pointer;
    }

    @media screen and (max-width: 997px) {
        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        li {
            margin: 10px;
        }
    }

</style>