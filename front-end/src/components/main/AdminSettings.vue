<template>
    <div class="container">
        <h2 class="mt-5 text-center">Your Admin settings</h2>


        <p class="mt-5 text-center">Update your email and password:</p>

        <!-- UPDATE EMAIL -->
        <Form @submit="onSubmit" :validation-schema="updateProfileSchema" class="text-center update-form">
            <div class="form-group m-1">
                <Field name="email" v-slot="{field, errors, errorMessage}">
                    <form-input
                        :field="field"
                        :errorList="errors" 
                        :errorMsg="errorMessage" 
                        element="input"
                        type="email"
                        placeholder="New email">
                    </form-input>
                </Field>
            </div>


            <div class="form-group m-1">
                <Field name="password" v-slot="{field, errors, errorMessage}">
                    <form-input
                        :field="field"
                        :errorList="errors" 
                        :errorMsg="errorMessage" 
                        element="input"
                        type="password"
                        placeholder="New password">
                    </form-input>
                </Field>
            </div>


            <button type="submit" class="btn btn-dark m-3 adjust">Update</button>
        </Form>



        <p class="mt-5 text-center">All the events!</p>

        <ul class="mt-5 text-center">
            <li>Your event 1</li>
            <li>Your event 2</li>
            <li>Your event 3</li>
        </ul>




        <button class="btn btn-dark btn-sm delete-account mb-4">Delete Account</button>

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
                    email: yup.string(),
                    password: yup.string()
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




<style scoped>

    .update-form {
        margin: 0 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .adjust {
        font-size: 0.9rem;
    }

    .delete-account {
        position: relative;
        left: 80%;
        margin-top: 6rem;
    }

</style>