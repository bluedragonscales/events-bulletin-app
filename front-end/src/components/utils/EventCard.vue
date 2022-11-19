<template>

    <article class="col-lg-4 col-sm-12" v-for="(ev, index) in currentEvents" :key="index">
        <h4>{{ev.title}}</h4>
        <h5>{{ev.host}}</h5>
        <p>{{ev.time}}</p>
        <p>{{ev.description}}</p>
        <p v-if="isAdmin">{{ev.owner.email}}</p>
        <button v-if="isAdmin" type="button" class="btn btn-dark btn-sm">Delete Event</button>
    </article>

</template>




<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                isAdmin: 'auth/getAdminStatus',
                currentEvents: 'events/getAllEvents'
            })
        }
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