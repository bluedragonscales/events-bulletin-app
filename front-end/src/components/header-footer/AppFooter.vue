<template>
    <!-- FOOTER COMPONENT -->

    <footer>
        <ul class="navbar-nav mb-2 text-white d-flex flex-row justify-content-around">
            <li class="nav-item m-4 fs-3">
                <router-link to="/" class="nav-link text-white">Home</router-link>
            </li>

            <li class="nav-item m-4 fs-3">
                <router-link to="/register" class="nav-link text-white">Register</router-link>
            </li>

            <li class="nav-item m-4 fs-3">
                <router-link to="/terms" class="nav-link text-white">Terms of Use</router-link>
            </li>

            <li class="nav-item m-4 fs-3">
                <router-link to="/contact" class="nav-link text-white">Questions</router-link>
            </li>
        </ul>
    </footer>

</template>



<style scoped>

    footer {
        background-color: black;
        /* margin-bottom: 0; */
    }

</style>