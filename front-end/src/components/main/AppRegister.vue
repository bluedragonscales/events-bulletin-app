<template>
    <!-- REGISTRATION COMPONENT -->

    <div class="container">
        <h2 class="mt-5 text-center">Register for Eat, Drink, What!</h2>


        <Form @submit="onSubmit" :validation-schema="registerSchema" class="text-center">

            <!-- Name registration section. -->
            <!-- <h5 class="mt-5">Your Name</h5> -->
            <!-- <div class="d-flex justify-content-center"> -->
                <!-- FIRST NAME INPUT -->
                <!-- <div class="form-group m-3">
                    <Field name="firstname" v-slot="{field, errors, errorMessage}" :value="'Ky'">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="First">
                        </form-input>
                    </Field>
                </div> -->

                <!-- LAST NAME INPUT -->
                <!-- <div class="form-group m-3">
                    <Field name="lastname" v-slot="{field, errors, errorMessage}" :value="'Kar'">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Last">
                        </form-input>
                    </Field>
                </div> -->
            <!-- </div> -->
            



            <!-- Email and birthdate registration section. -->
            <h5 class="mt-5">Your Email and Birthdate</h5>
            <div class="d-flex justify-content-center">
                <!-- EMAIL INPUT -->
                <div class="form-group m-3">
                    <Field name="email" v-slot="{field, errors, errorMessage}" :value="'dragon@gmail.com'">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="email"
                            placeholder="Email">
                        </form-input>
                    </Field>
                </div>

                <!-- BIRTHDATE INPUT -->
                <div class="form-group m-3 birthday">
                    <Field name="birthdate" v-slot="{field, errors, errorMessage}">
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
            <h5 class="mt-5">Your Password</h5>
            <div class="d-flex justify-content-center">
                <!-- PASSWORD INPUT -->
                <div class="form-group m-3">
                    <Field name="password" v-slot="{field, errors, errorMessage}" :value="'dragonss'">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="password"
                            placeholder="Password">
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
                    firstname: yup.string()
                        .required('Your first name is required.')
                        .max(30, 'No longer than 30 characters.'),
                    lastname: yup.string()
                        .required('Your last name is required.')
                        .max(30, 'No longer than 30 characters.'),
                    email: yup.string()
                        .required('An email is required.')
                        .email('Not a valid email.')
                        .max(30, 'No longer than 30 characters.'),
                    birthdate: yup.date()
                        .required('A birthday is required.')
                        // 567,648,000 seconds in 18 years.
                        .max(new Date(), 'You must be at least 18 years old.'),
                    password: yup.string()
                        .required('A password is required.')
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
                this.$store.dispatch('auth/signUp', values);
            }
        }
    }

</script>



<style scoped>

    .birthday {
        width: 250px;
    }

    button {
        width: 20rem;
        padding: 15px;
        font-size: 1.3rem;
    }

</style>