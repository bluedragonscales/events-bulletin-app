<template>
    <!-- FOOTER COMPONENT -->

    <footer>
        <ul class="navbar-nav mb-2 text-white d-flex flex-row justify-content-around">
            <li class="nav-item m-4 fs-3">
                <router-link to="/">Home</router-link>
            </li>

            <li class="nav-item m-4 fs-3">
                <router-link to="/register">Register</router-link>
            </li>

            <li class="nav-item m-4 fs-3">
                <router-link to="/terms">Terms of Use</router-link>
            </li>
        </ul>
    </footer>

</template>



<style scoped>

    footer {
        background-color: black;
    }

    footer li {
        cursor: pointer;
    }

</style>