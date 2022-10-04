<template>
    <!-- MAIN HOME COMPONENT -->

    <div class="home-container row">
        <!-- Essay about the site. -->
        <div class="col-7 about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat eos temporibus maiores dolorem nobis quibusdam, soluta sequi sint obcaecati officia distinctio beatae esse natus ipsam molestias excepturi a minus.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod distinctio amet, deserunt error quibusdam eligendi voluptate accusamus quis suscipit libero illo. Aliquid amet, labore corrupti quam laudantium voluptatem ipsum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti optio reprehenderit. Deserunt autem fugiat officiis vero. Officia, laudantium fuga possimus tempora asperiores dicta doloribus velit voluptatibus? Nemo, natus veritatis?</p>
        </div>

        <!-- The sign in box at the right side. -->
        <div class="col-4 sign-in">
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

    .about {
        margin: 2rem;
    }

    .sign-in {
        margin: 2rem;
        border: 2px solid black;
        padding: 4rem 1rem;
    }

    .about p {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 2;
    }

</style>