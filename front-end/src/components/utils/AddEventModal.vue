<template>
    <div class="container">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Your Event</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div class="modal-body">
            <Form @submit="onSubmit" :validation-schema="addEventSchema" class="text-center">
                <!-- EVENT TITLE INPUT -->
                <div class="form-group mt-5">
                    <Field name="title" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Title of the event">
                        </form-input>
                    </Field>
                </div>

                <!-- EVENT DATE INPUT -->
                <div class="form-group mt-5">
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

                <!-- EVENT ADDRESS INPUT -->
                <div class="form-group mt-5">
                    <Field name="address" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="url"
                            placeholder="Address of the event">
                        </form-input>
                    </Field>
                </div>


                <!-- EVENT DESCRIPTION INPUT -->
                <div class="form-group mt-5">
                    <Field name="description" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="textarea"
                            :rows="10"
                            placeholder="Description of the event.">
                        </form-input>
                    </Field>
                </div>

                <!-- SUBMIT BUTTON -->
                <button type="submit" class="btn btn-dark mt-5">Add Event</button>
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
                addEventSchema: {
                    title: yup.string().required('What is the title of the event?'),
                    time: yup.string().required('What time and day will the event take place?'),
                    address: yup.string().required('Where is the event taking place?'),
                    description: yup.string().required('What is the event about?')
                }
            }
        },
        methods: {
            onSubmit(values) {
                console.log(values);
            }
        }
    }

</script>