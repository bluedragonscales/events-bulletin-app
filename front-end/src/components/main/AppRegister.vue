<template>
    <!-- REGISTRATION COMPONENT -->

    <div class="container">
        <h2 class="mt-5 text-center">Register for Eat, Drink, What!</h2>

        <Form @submit="onSubmit" :validation-schema="registerSchema" class="text-center">
            
            <!-- Name registration section. -->
            <div class="d-flex justify-content-center name-reg mt-3">
                <!-- FIRST NAME INPUT -->
                <div class="form-group m-3">
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
                <div class="form-group m-3">
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
            <div class="d-flex justify-content-center login-reg mt-3">
                <!-- EMAIL INPUT -->
                <div class="form-group m-3">
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
                <div class="form-group m-3">
                    <Field name="birthdate" v-slot="{field, errors, errorMessage}" class="birth">
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
            <div class="d-flex justify-content-center login-reg mt-3">
                <!-- PASSWORD INPUT -->
                <div class="form-group m-3">
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
                <div class="form-group m-3">
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
                registerSchema: {
                    firstname: yup.string().required('Your first name is required.'),
                    lastname: yup.string().required('Your last name is required.'),
                    email: yup.string().required('An email is required.'),
                    birthdate: yup.date().required('A birthday is required.'),
                    password: yup.string().required('A password is required.')
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

    .birth {
        padding: 10px;
        font-size: 1.2rem;
        width: 204px;
    }

    button {
        width: 20rem;
        padding: 15px;
        font-size: 1.3rem;
    }

</style>