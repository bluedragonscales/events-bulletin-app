<template>
    <!-- HEADER COMPONENT -->

    <nav class="nav-container p-4 navbar">
        <!-- The top left site banner. -->
        <router-link to="/" class="nav-link">
            <h1 class="text-white navbar-brand">Eat, Drink, What!</h1>
        </router-link>

        <!-- The list of nav links at top right. -->
        <ul class="navbar-nav mb-2 d-flex flex-row">
            <li class="nav-item m-4 fs-4">
                <span class="nav-link text-white">Log Out</span>
            </li>

            <li class="nav-item m-4 fs-4">
                <router-link to="/user/dashboard" class="nav-link text-white">Dashboard</router-link>
            </li>

            <li class="nav-item m-4 fs-4">
                <router-link to="/user/dashboard" class="nav-link text-white">Settings</router-link>
            </li>
        </ul>
    </nav>

</template>




<style scoped>

    h1 {
        font-weight: 700;
        padding-left: 5%;
        font-size: 4rem;
    }

    .nav-container {
        background-color: black;
    }

    li span {
        cursor: pointer;
    }

</style>