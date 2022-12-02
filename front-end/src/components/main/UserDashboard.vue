<template>
    <div class="container text-center" v-if="!isLoading">

        <h2 class="mt-5 text-center">Dashboard</h2>

        <!-- Button to trigger modal. -->
        <button type="button" class="btn btn-dark mt-3 mb-5" data-bs-toggle="modal" data-bs-target="#addEventModal">Add Event</button>


        <!-- List of events. -->
        <section class="row g-2">
            <event-block></event-block>
        </section>


        <!-- Modal -->
        <div class="modal fade" id="addEventModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <add-event></add-event>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
    import EventBlock from '../utils/EventCard.vue';
    import AddEvent from '../utils/AddEventModal.vue';

    export default {
        components: {
            EventBlock,
            AddEvent
        }
    }

</script>




<style scoped>

    section {
        margin-bottom: 1rem;
        max-height: 200vh;
        overflow-y: scroll;
        border: 2px solid black;
    }

    .container {
        min-height: 60vh;
    }

</style>