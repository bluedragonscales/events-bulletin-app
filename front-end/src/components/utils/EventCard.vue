<template>

    <article class="col-lg-4 col-sm-12" v-for="(event, index) in eventData" :key="index">
        <h4>{{event.title}}</h4>
        <p>Date and time</p>
        <p>{{event.address}}</p>
        <p>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam dolorem et quia facere dicta? Fuga nisi repellendus deserunt ipsa, unde cupiditate non culpa, repellat nihil harum soluta, cumque consectetur!</p>
    </article>

    <!-- If the event is today then reverse colors: black background and white text. -->

</template>




<script>

    export default {
        props: ['eventData']
    }

</script>




<style scoped>

    article {
        border: 2px solid black;
        padding: 10px;
        text-align: center;
        /* margin: 1rem; */
    }

    h4 {
        text-decoration: underline;
    }

</style>