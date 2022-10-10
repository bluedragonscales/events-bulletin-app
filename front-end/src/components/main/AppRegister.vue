<template>
    <!-- REGISTRATION COMPONENT -->

    <div class="container text-center">
        <h2 class="mt-5">Register for Eat, Drink, What!</h2>

        <Form @submit="onSubmit" :validation-schema="signInSchema" class="text-center">
            
            <!-- Name registration section. -->
            <div class="d-flex justify-content-around name-reg">
                <!-- FIRST NAME INPUT -->
                <div class="form-group mt-5 ml-5">
                    <Field name="firstname" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Your first name">
                        </form-input>
                    </Field>
                </div>

                <!-- LAST NAME INPUT -->
                <div class="form-group mt-5">
                    <Field name="lastname" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Your last name">
                        </form-input>
                    </Field>
                </div>
            </div>
            

            <!-- Email and birthdate registration section. -->
            <div class="d-flex justify-content-around login-reg">
                <!-- EMAIL INPUT -->
                <div class="form-group mt-5">
                    <Field name="email" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="email"
                            placeholder="Your email">
                        </form-input>
                    </Field>
                </div>

                <!-- BIRTHDATE INPUT -->
                <div class="form-group mt-5">
                    <Field name="password" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="date">
                        </form-input>
                    </Field>
                </div>
                
            </div>


            <!-- Password registration section -->
            <div class="d-flex justify-content-around login-reg">
                <!-- PASSWORD INPUT -->
                <div class="form-group mt-5">
                    <Field name="password" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="password"
                            placeholder="Your password">
                        </form-input>
                    </Field>
                </div>

                <!-- RETYPE PASSWORD INPUT -->
                <div class="form-group mt-5">
                    <Field name="password" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="password"
                            placeholder="Retype your password">
                        </form-input>
                    </Field>
                </div>
            </div>




            <!-- SUBMIT BUTTON -->
            <button type="submit" class="btn btn-dark mt-5 mb-5">Register</button>
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
                    firstname: yup.string().required('Your first name is required.'),
                    lastname: yup.string().required('Your last name is required.'),
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

    .name-reg {
        width: 50%;
    }

    .login-reg {
        width: 50%;
    }

    button {
        width: 20rem;
        padding: 20px;
        font-size: 1.5rem;
    }

</style>