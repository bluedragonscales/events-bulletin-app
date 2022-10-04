<template>
    <!-- SIGN IN COMPONENT -->

    <div>
        <h3 class="text-center">Sign In</h3>

        <Form @submit="onSubmit" :validation-schema="signInSchema" class="text-center">
            <!-- EMAIL INPUT -->
            <div class="form-group mt-5">
                <Field name="email" v-slot="{field, errors, errorMessage}">
                    <form-input
                        :field="field"
                        :errorList="errors" 
                        :errorMsg="errorMessage" 
                        element="input"
                        type="email"
                        placeholder="Your email goes here">
                    </form-input>
                </Field>
            </div>

            <!-- PASSWORD INPUT -->
            <div class="form-group mt-5">
                <Field name="password" v-slot="{field, errors, errorMessage}">
                    <form-input
                        :field="field"
                        :errorList="errors" 
                        :errorMsg="errorMessage" 
                        element="input"
                        type="password"
                        placeholder="Your password goes here">
                    </form-input>
                </Field>
            </div>

            <!-- SUBMIT BUTTON -->
            <button type="submit" class="btn btn-dark mt-5">Sign In</button>
        </Form>
    </div>

</template>




<script>
    import {Form, Field} from 'vee-validate';
    import * as yup from 'yup';
    import FormInput from '../utils/FormInput.vue';

    export default {
        data() {
            return {
                signInSchema: {
                    email: yup.string().required('An email is required to sign in.'),
                    password: yup.string().required('A password is required to sign in.')
                }
            }
        },
        components: {
            FormInput,
            Form,
            Field
        },
        methods: {
            onSubmit(values) {
                console.log(values);
            }
        }
    }

</script>



<style scoped>

    button {
        width: 50%;
        padding: 10px;
        font-size: 1.2rem;
    }

</style>