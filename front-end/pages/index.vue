<template>

    <div class="front-container">
        <FrontSummary></FrontSummary>
        <FrontLogIn></FrontLogIn>
    </div>

</template>


<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .front-container {
        margin: 2%;
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 850px) {
        .front-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin: 1rem;
        }
    }

</style>