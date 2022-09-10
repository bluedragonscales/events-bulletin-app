<template>

    <div class="recover-front text-center">
        <h2>Recover Your Password</h2>

        <Form class="login-form" @submit="onSubmit" :validation-schema="formSchema">
            <div class="form-group">
                <Field name="email" v-slot="{field, errors, errorMessage}">
                    <input type="email" placeholder="Your email goes here" class="form-control input-spot text-center" v-bind="field" :class="{'is-invalid': errors.length !== 0}">
                    <p class="alert alert-danger" role="alert" v-if="errors.length !== 0">{{errorMessage}}</p>
                </Field>
            </div>

            <button type="submit" class="btn btn-dark recover-button">Recover</button>
        </Form>

        <hr>

        <p class="recover-instruct">Enter your email and click "Recover". If your email has already been registered you will receive a link to recover your lost password.</p>
    </div>

</template>



<script>
    import {Field, Form} from 'vee-validate';
    import * as yup from 'yup';

    export default {
        data() {
            return {
                formSchema: {
                    email: yup.string().required('Your email is required.').email('Not a valid email.')
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

    .recover-front {
        margin: 5rem;
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

    .recover-button {
        width: 15rem;
        margin: 1rem;
        background-color: rgb(63, 63, 63);
    }

    .recover-button:hover {
        background-color: rgb(83, 83, 83);
    }

    @media screen and (max-width: 700px) {
        .recover-button {
            margin: 2rem;
        }
    }

    .recover-instruct {
        margin: 3rem 15rem;
    }

</style>