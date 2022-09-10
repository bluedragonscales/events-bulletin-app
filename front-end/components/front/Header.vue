<template>

    <header>
        <a href="/"><h1>Let's Eat!</h1></a>
    </header>

</template>



<style>

    h1 {
        font-family: 'Cinzel Decorative', cursive;
        font-size: 6rem;
        padding: 1rem 0 1rem 9%;
        color: white;
        cursor: pointer;
    }

    header {
        background-color: rgb(83, 83, 83);
        height: 20%;
    }

    @media screen and (max-width: 700px) {
        h1 {
            padding: 0.5rem;
            font-size: 3rem;
            text-align: center;
        }
    }

    a {
        text-decoration: none;
    }

</style>