<template>
    <div class="container text-center">

        <h2 class="mt-5 text-center">Dashboard</h2>

        <button class="btn btn-dark mt-3 mb-5">Add Event</button>

        <section class="row g-4">
            <event-block :eventData="events"></event-block>
        </section>
    </div>
</template>



<script>
    import EventBlock from '../utils/EventCard.vue';

    export default {
        components: {
            EventBlock
        },
        data() {
            return {
                events: [
                    {title: 'Event One', address: '207 Maple St'},
                    {title: 'Event Two', address: '207 Maple St'},
                    {title: 'Event Three', address: '207 Maple St'},
                    {title: 'Event Four', address: '207 Maple St'},
                    {title: 'Event Five', address: '207 Maple St'},
                ]
            }
        }
    }

</script>




<style scoped>

    section {
        margin-bottom: 1rem;
        max-height: 200vh;
        overflow-y: scroll;
    }

</style>