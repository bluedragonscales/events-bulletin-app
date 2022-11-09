<template>

    <article class="col-lg-4 col-sm-12" v-for="(event, index) in eventData" :key="index">
        <h4>{{event.title}}</h4>
        <p>Date and time</p>
        <p>{{event.address}}</p>
        <p>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquam dolorem et quia facere dicta? Fuga nisi repellendus deserunt ipsa, unde cupiditate non culpa, repellat nihil harum soluta, cumque consectetur!</p>
        <h5>Event Host</h5>
    </article>

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
    }

    h4 {
        text-decoration: underline;
    }

</style>