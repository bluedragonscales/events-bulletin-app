<template>
    <!-- HEADER COMPONENT -->

    <nav class="nav-container p-4 navbar">
        <h1 class="text-white navbar-brand">Eat, Drink, What!</h1>

        <ul class="navbar-nav mb-2 text-white d-flex flex-row">
            <li class="nav-item m-4 fs-4">
                <span>Log Out</span>
            </li>

            <li class="nav-item m-4 fs-4">
                <router-link to="/user/dashboard">Dashboard</router-link>
            </li>
        </ul>
    </nav>

</template>




<style scoped>

    h1 {
        font-family: 'Nanum Myeongjo', serif;
        padding-left: 5%;
        font-size: 4rem;
        cursor: pointer;
    }

    .nav-container {
        background-color: black;
    }

    li {
        cursor: pointer;
    }

</style>