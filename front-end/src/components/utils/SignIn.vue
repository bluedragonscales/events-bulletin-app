<template>
    <!-- SIGN IN COMPONENT -->

    <div>
        <h3 class="text-center">Sign In</h3>

        <Form @submit="onSubmit" :validation-schema="signInSchema" class="text-center">
            <!-- EMAIL INPUT -->
            <div class="form-group mt-3">
                <Field name="email" v-slot="{field, errors, errorMessage}" :value="'dragon@gmail.com'">
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
                <Field name="password" v-slot="{field, errors, errorMessage}" :value="'dragonss'">
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

        <p class="text-center forgot">Forgot your password? <span>Click here!</span></p>
    </div>

</template>




<script>
    import {Form, Field} from 'vee-validate';
    import * as yup from 'yup';
    import FormInput from './FormInput.vue';

    export default {
        data() {
            return {
                signInSchema: {
                    email: yup.string()
                        .required('An email is required to sign in.')
                        .email('Not a valid email.')
                        .max(30, 'No longer than 30 characters.'),
                    password: yup.string()
                        .required('A password is required to sign in.')
                        .min(8, 'Must be 8 or more characters.')
                        .max(30, 'No longer than 30 characters.')
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
                this.$store.dispatch('auth/signIn', values);
            }
        }
    }

</script>



<style scoped>

    .forgot {
        margin-top: 2rem;
        margin-bottom: -2rem;
        cursor: default;
    }

    .forgot span {
        cursor: pointer;
        text-decoration: underline;
    }

    button {
        width: 50%;
        padding: 10px;
        font-size: 1.2rem;
    }

</style>