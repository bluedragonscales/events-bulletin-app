<template>
    <!-- MAIN HOME COMPONENT -->

    <div class="home-container row d-flex align-items-center">
        <!-- Essay about the site. -->
        <div class="col-lg-7 col-sm-12 about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat eos temporibus maiores dolorem nobis quibusdam, soluta sequi sint obcaecati officia distinctio beatae esse natus ipsam molestias excepturi a minus.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod distinctio amet, deserunt error quibusdam eligendi voluptate accusamus quis suscipit libero illo. Aliquid amet, labore corrupti quam laudantium voluptatem ipsum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti optio reprehenderit. Deserunt autem fugiat officiis vero. Officia, laudantium fuga possimus tempora asperiores dicta doloribus velit voluptatibus? Nemo, natus veritatis?</p>
        </div>

        <!-- The sign in box at the right side. -->
        <div class="col-lg-4 col-sm-12 sign-in">
            <sign-in></sign-in>
        </div>
    </div>
    
</template>



<script>
    import SignIn from './SignIn.vue';

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