<template>
    <div class="front-login">

        <h3>Log In</h3>

        <Form class="login-form" @submit="onSubmit" :validation-schema="formSchema">
            <div class="form-group">
                <Field name="email" v-slot="{field, errors, errorMessage}">
                    <input type="email" placeholder="Your email goes here" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>
                </Field>
            </div>


            <div class="form-group">
                <Field name="password" v-slot="{field, errors, errorMessage}">
                    <input type="password" placeholder="Your password goes here" class="form-control input-spot" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>
                </Field>
            </div>


            <button type="submit" class="btn btn-dark login-submit-button">Log In</button>
        </Form>

        <hr>

        <p>Forgot your password? <router-link to="/recoverpassword" class="recover-link">Recover here!</router-link></p>

        <p>Don't yet have an account? <router-link to="/register" class="recover-link">Register here!</router-link></p>

    </div>
</template>



<script>
    import {Field, Form} from 'vee-validate';
    import * as yup from 'yup';

    export default {
        data() {
            return {
                formSchema: {
                    email: yup.string().required('Your email is required.').email('Not a valid email.'),
                    password: yup.string().required('Your password is required.')
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

    .front-login {
        width: 40%;
        padding: 3rem;
    }

    @media screen and (max-width: 850px) {
        .front-login {
            width: 90%;
            padding: 10px;
            text-align: center;
        }
    }

    h3 {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 850px) {
        h3 {
            margin-top: 3rem;
            margin-bottom: 1rem;
        }
    }

    .login-form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    @media screen and (max-width: 850px) {
        .login-form {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
    }

    .input-spot {
        width: 20rem;
        margin: 1rem 0;
    }

    .login-submit-button {
        width: 15rem;
        margin: 1rem 0;
        background-color: rgb(63, 63, 63);
    }

    .login-submit-button:hover {
        background-color: rgb(83, 83, 83);
    }

    .recover-link {
        cursor: pointer;
    }

</style>