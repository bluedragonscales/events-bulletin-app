<template>
    <!-- CONTACT COMPONENT -->

    <div class="container">
        <h2 class="mt-5 text-center">Contact Eat, Drink, What!</h2>

        <p class="text-center">Use this form to contact us for questions or problems.</p>

        <Form :validation-schema="contactSchema" class="text-center" action="mailto:events@eatdrinkwhat.com" method="post" enctype="text/plain">
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
                            placeholder="Your email">
                        </form-input>
                    </Field>
                </div>

                <!-- NAME INPUT -->
                <div class="form-group m-3">
                    <Field name="name" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Your name">
                        </form-input>
                    </Field>
                </div>
            </div>


            <div class="d-flex justify-content-center">
                <!-- MESSAGE TOPIC INPUT -->
                <div class="form-group m-3">
                    <Field name="title" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="input"
                            type="text"
                            placeholder="Message topic">
                        </form-input>
                    </Field>
                </div>
            </div>


            <div class="d-flex justify-content-center">
                <div class="form-group mt-2 message-box">
                    <!-- MESSAGE INPUT -->
                    <Field name="message" v-slot="{field, errors, errorMessage}">
                        <form-input
                            :field="field"
                            :errorList="errors" 
                            :errorMsg="errorMessage" 
                            element="textarea"
                            :rows="10"
                            placeholder="What can we help you with?">
                        </form-input>
                    </Field>
                </div>
            </div>
        

            <!-- SUBMIT BUTTON -->
            <button type="submit" class="btn btn-dark mt-5 mb-5">Submit Message</button>
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
                contactSchema: {
                    email: yup.string()
                        .required('Your email is required.')
                        .email('Not a valid email.')
                        .max(50, 'No longer than 50 characters.'),
                    name: yup.string()
                        .max(50, 'Too long!')
                        .required('How do we address you?'),
                    title: yup.string()
                        .required('What is the topic?')
                        .max(100, 'Too long!'),
                    message: yup.string()
                        .required('Please describe what we can help with.')
                        .min(10, 'More detail please!')
                        .max(400, 'Too long!')
                }
            }
        },
        components: {
            FormInput,
            Form,
            Field
        }
    }

</script>



<style scoped>

    .message-box {
        width: 40rem;
    }

    button {
        width: 10rem;
        padding: 15px;
    }

</style>