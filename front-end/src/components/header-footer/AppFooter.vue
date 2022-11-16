<template>
    <!-- FOOTER COMPONENT -->

    <footer>
        <ul class="navbar-nav mb-2 text-white">
            <li class="nav-item fs-3" v-if="!isAuth">
                <router-link to="/" class="nav-link text-white">Home</router-link>
            </li>

            <li class="nav-item fs-3" v-if="!isAuth">
                <router-link to="/register" class="nav-link text-white">Register</router-link>
            </li>

            <li class="nav-item fs-3">
                <router-link to="/terms" class="nav-link text-white">Terms of Use</router-link>
            </li>

            <li class="nav-item fs-3" v-if="!isAdmin">
                <router-link to="/contact" class="nav-link text-white">Questions</router-link>
            </li>

            <li class="nav-item fs-3">
                <span class="nav-link text-white">Copyright</span>
            </li>
        </ul>
    </footer>

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

    footer {
        background-color: black;
        margin-bottom: -1rem;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    li {
        margin: 1rem;
    }

    @media screen and (max-width: 650px) {
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        li {
            margin: 8px;
        }
    }

    span {
        cursor: default;
    }

</style>