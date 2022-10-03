<template>

    <div class="home-container row">
        <div class="p-5 col-8 about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat eos temporibus maiores dolorem nobis quibusdam, soluta sequi sint obcaecati officia distinctio beatae esse natus ipsam molestias excepturi a minus.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod distinctio amet, deserunt error quibusdam eligendi voluptate accusamus quis suscipit libero illo. Aliquid amet, labore corrupti quam laudantium voluptatem ipsum?</p>
        </div>

        <div class="p-5 col-4">
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
        margin: 2rem 5%;
    }

    .about p {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 2;
    }

</style>