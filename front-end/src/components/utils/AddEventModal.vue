<template>
    <div class="container">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Your Event</h1>
            <button type="button" class="btn-close" onclick="javascript:window.location.reload()" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div class="modal-body">
            <Form @submit="onSubmit" :validation-schema="addEventSchema" class="text-center" ref="addEventForm">
                <!-- EVENT TITLE INPUT -->
                <div class="form-group mt-2">
                    <Field name="title" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Event Location">
                        </form-input>
                    </Field>
                </div>


                <!-- EVENT OWNER INPUT -->
                <div class="form-group mt-2">
                    <Field name="host" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Event Host">
                        </form-input>
                    </Field>
                </div>


                <!-- EVENT DATE INPUT -->
                <div class="form-group mt-2">
                    <Field name="time" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="date">
                        </form-input>
                    </Field>
                </div>



                <!-- EVENT DESCRIPTION INPUT -->
                <div class="form-group mt-2">
                    <Field name="description" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="textarea"
                            :rows="10"
                            placeholder="Description and time of event">
                        </form-input>
                    </Field>
                </div>


                <!-- SUBMIT BUTTON -->
                <button type="submit" class="btn btn-dark mt-2" :disabled="loading">Add Event</button>
            </Form>
        </div>
                   
        
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        </div>
    </div>
</template>




<script>
    import {Form, Field} from 'vee-validate';
    import * as yup from 'yup';
    import FormInput from './FormInput.vue';

    export default {
        components: {
            FormInput,
            Form,
            Field
        },
        data() {
            return {
                loading: false,
                addEventSchema: {
                    title: yup.string(),
                    time: yup.string(),
                    description: yup.string().max(500, 'Too long!'),
                    host: yup.string().max(30, 'Too long!')
                }
            }
        },
        methods: {
            onSubmit(values, {resetForm}) {
                this.loading = true;
                this.$store.dispatch('events/addEvent', values).finally(() => {
                    this.loading = false;
                    resetForm();
                });
            }
        }
    }

</script>