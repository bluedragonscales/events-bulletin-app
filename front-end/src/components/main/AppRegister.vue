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
                    <Field name="firstname" v-slot="{field, errors, errorMessage}">
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
                    <Field name="lastname" v-slot="{field, errors, errorMessage}">
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
                    <Field name="email" v-slot="{field, errors, errorMessage}">
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
                    <Field name="password" v-slot="{field, errors, errorMessage}">
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


            <div class="d-flex justify-content-center">
                <!-- TERMS CHECKBOX -->
                <div class="form-group m-5">
                    <!-- <Field name="check" v-slot="{field, errors, errorMessage}" :value="false">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="checkbox">
                        </form-input>
                    </Field> -->
                    <input type="checkbox" id="checked" class="me-2">
                    <label for="check">I have read the Terms of Use</label>
                </div>
            </div>


            <!-- SUBMIT BUTTON -->
            <button type="submit" class="btn btn-dark mt-4 mb-5">Register</button>
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
                    // firstname: yup.string()
                    //     .required('Your first name is required.')
                    //     .max(30, 'No longer than 30 characters.'),
                    // lastname: yup.string()
                    //     .required('Your last name is required.')
                    //     .max(30, 'No longer than 30 characters.'),
                    email: yup.string()
                        .required('An email is required.')
                        .email('Not a valid email.')
                        .max(30, 'No longer than 30 characters.'),
                    birthdate: yup.date()
                        .required('A birthday is required.'),
                        // 567,648,000 seconds in 18 years.
                        // .max(new Date(), 'You must be at least 18 years old.'),
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
                // console.log(values.password);
                // console.log(values.birthdate);
                let birth = values.birthdate.valueAsNumber;
                // let birthMillSec = birth.valueAsNumber;
                console.log(birth);
                // console.log(birthMillSec);
                let terms = document.getElementById('checked');

                if(values.password.includes(' ')){
                    alert("Passwords cannot contain spaces.");
                } else if(!terms.checked) {
                    alert("Please make sure to read the terms of use and check the box.");
                } else if(birth < 567648000) {
                    alert("You must be at least 18 years of age to register.");
                }
                else {
                    this.$store.dispatch('auth/signUp', values);
                }
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