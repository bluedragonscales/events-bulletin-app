<template>
    <div class="container">
        <h2 class="mt-5 text-center">Your settings</h2>


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



        <p class="mt-5 text-center">Update or delete your events</p>

        <table class="table table-striped">
            <tbody>
                <tr>
                    <th>Event Title</th>
                    <th>Event Host</th>
                    <th>Event Date</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-for="(ev, index) in yourEvents" :key="index">
                    <td>{{ev.title}}</td>
                    <td>{{ev.host}}</td>
                    <td>{{ev.time}}</td>

                    <td>
                        <button type="button" class="btn btn-dark btn-sm">Delete</button>
                    </td>

                    <td>
                        <button type="button" class="btn btn-dark btn-sm">Update</button>
                    </td>
                </tr>
            </tbody>
        </table>




        <button class="btn btn-dark btn-sm delete-account mb-4">Delete Account</button>

    </div>
</template>




<script>
    import {Form, Field} from 'vee-validate';
    import * as yup from 'yup';
    import FormInput from '../utils/FormInput.vue';
    import {mapGetters} from 'vuex';

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
                },
                eventData: ''
            }
        },
        methods: {
            onSubmit(values) {
                console.log(values);
            },
            yourEvents() {
                if(this.isAdmin) {
                    this.allEvents;
                    console.log(this.allEvents);
                } else {
                    this.userEvents;
                }
            }
        },
        computed: {
            ...mapGetters({
                isAdmin: 'auth/getAdminStatus',
                allEvents: 'events/getAllEvents',
                userEvents: 'events/getYourEvents'
            })
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

    .table {
        position: relative;
        width: 85%;
        text-align: center;
        left: 9%;
        height: 2rem;
        overflow-y: scroll;
    }

</style>