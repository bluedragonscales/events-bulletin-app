<template>

    <div class="register-front text-center">
        <h2>Register</h2>

        <Form class="login-form" @submit="onSubmit" :validation-schema="formSchema">

            <div class="form-group form-inputs">
                <Field name="firstname" v-slot="{field, errors, errorMessage}">
                    <input type="text" placeholder="First name" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>
                </Field>

                <Field name="lastname" v-slot="{field, errors, errorMessage}">
                    <input type="text" placeholder="Last name" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>
                </Field>
            </div>



            <div class="form-group form-inputs">
                <Field name="email" v-slot="{field, errors, errorMessage}">
                    <input type="email" placeholder="Email" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>
                </Field>

                <Field name="birthdate" v-slot="{field, errors, errorMessage}">
                    <input type="date" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>
                </Field>
            </div>



            <div class="form-group form-inputs">
                <Field name="password" v-slot="{field, errors, errorMessage}">
                    <input type="password" placeholder="Password" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>

                </Field>

                <Field name="repassword" v-slot="{field, errors, errorMessage}">
                    <input type="password" placeholder="Retype your password" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>

                </Field>
            </div>


            <button type="submit" class="btn btn-dark register-button">Register</button>
        </Form>

        <hr>

        <p class="already-have">Already have an account? <router-link to="/">Log in here!</router-link></p>

    </div>
</template>



<script>
    import {Field, Form} from 'vee-validate';
    import * as yup from 'yup';

    export default {
        data() {
            return {
                formSchema: {
                    firstname: yup.string().required('A first name is required.'),
                    lastname: yup.string().required('A last name is required.'),
                    email: yup.string().required('An email is required.').email('Not a valid email.'),
                    birthdate: yup.string().required('A date of birth is required.'),
                    password: yup.string().required('A password is required.'),
                    repassword: yup.string().required('Please retype the password.')
                }
            }
        },
        components: {
            Field,
            Form
        },
        methods: {
            onSubmit(values, {resetForm}) {
                console.log(values);
                resetForm();
            }
        }
    }

</script>



<style scoped>

    .register-front {
        margin: 4rem 0;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 700px) {
        h2 {
            margin-top: 2rem;
        }
    }

    .login-form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .input-spot {
        width: 20rem;
        margin: 1rem;
    }

    .register-button {
        width: 15rem;
        margin: 1rem;
        background-color: rgb(63, 63, 63);
    }

    .register-button:hover {
        background-color: rgb(83, 83, 83);
    }

    @media screen and (max-width: 700px) {
        .register-button {
            margin: 2rem;
        }
    }

    .form-inputs {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    @media screen and (max-width: 700px) {
        .form-inputs {
            display: flex;
            flex-direction: column;
        }
    }

    .already-have {
        margin: 3rem 15rem;
    }

</style>