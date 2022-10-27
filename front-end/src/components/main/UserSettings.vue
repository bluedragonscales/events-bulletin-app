<template>
    <div class="container">
        <h2 class="mt-5 text-center">Your settings</h2>

        
        <!-- UPDATE EMAIL -->
        <Form @submit="onSubmit" :validation-schema="updateProfileSchema" class="text-center d-flex">
            <div class="form-group mt-3">
                <Field name="email" v-slot="{field, errors, errorMessage}">
                    <form-input
                        :field="field"
                        :errorList="errors" 
                        :errorMsg="errorMessage" 
                        element="input"
                        type="email"
                        placeholder="Your updated email">
                    </form-input>
                </Field>
            </div>

            <button type="submit" class="btn btn-dark mt-3">Update</button>
        </Form>



        <!-- UPDATE PASSWORD -->
        <Form @submit="onSubmit" :validation-schema="updateProfileSchema" class="text-center d-flex">
            <div class="form-group mt-3">
                <Field name="password" v-slot="{field, errors, errorMessage}">
                    <form-input
                        :field="field"
                        :errorList="errors" 
                        :errorMsg="errorMessage" 
                        element="input"
                        type="password"
                        placeholder="Your updated password">
                    </form-input>
                </Field>
            </div>

            <button type="submit" class="btn btn-dark mt-3">Update</button>
        </Form>


        <ul class="mt-5">
            <li>Your event 1</li>
            <li>Your event 2</li>
            <li>Your event 3</li>
        </ul>

        <p>Add new event</p>
        <p>Delete your event</p>
    </div>
</template>




<script>
    import {Form, Field} from 'vee-validate';
    import * as yup from 'yup';
    import FormInput from '../utils/FormInput.vue';

    export default {
        components: {
            Form,
            Field,
            FormInput
        },
        data() {
            return {
                updateProfileSchema: {
                    email: yup.string().required('What is your updated email?'),
                    password: yup.string().required('What is your updated password?')
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