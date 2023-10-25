<template>
    <!-- MAIN HOME COMPONENT -->

    <div class="home-container row d-flex align-items-center">
        <!-- Essay about the site. -->
        <div class="col-lg-7 col-sm-12 about">
            
            <p>Eat, Drink, What! is an app made for bringing people together and having fun about town, whether that be with food, drink, or summersaults at the park! Once you create an account you have access 
                to a bulletin board of events posted by others who also have an account. You'll be able to see the title of the event, the location, the date, and the time. The host of the event might choose to 
                keep their identity hidden, but that just means you might make some new and unexpected friends! There is no posting or direct messaging because we'd 
                like to encourage you to discard your hermit ways (for a short time at least) and become part of the world.</p>
            
        </div>

        <!-- The sign in box at the right side. -->
        <div class="col-lg-4 col-sm-12 sign-in">
            <sign-in></sign-in>
        </div>
    </div>
    
</template>



<script>
    import SignIn from '../utils/SignIn.vue';

    export default {
        components: {
            SignIn,
        }
    }

</script>



<style scoped>

    .home-container {
        min-height: 70vh;
        margin: 2%;
    }

    .sign-in {
        margin: 1rem;
        border: 2px solid black;
        padding: 4.5rem 1rem;
    }

    .about p {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.7;
    }

    @media screen and (max-width: 997px) {
        .about {
            padding: 1rem;
        }
        
        .sign-in {
            margin: 5px;
        }
    }

</style>
