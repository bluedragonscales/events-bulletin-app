<template>

    <footer>
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/termsofservice">Terms of Service</router-link>
    </footer>

</template>




<style scoped>

    footer {
        background-color: rgb(39, 39, 39);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
        padding: 1rem;
        cursor: pointer;
    }

    a:hover {
        background-color: rgb(83, 83, 83);
    }

    @media screen and (max-width: 700px) {
        footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        a {
            font-size: 1.5rem;
            padding: 10px;
        }
    }

</style>