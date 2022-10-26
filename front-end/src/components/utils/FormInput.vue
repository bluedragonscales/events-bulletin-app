<template>
    <!-- FORM INPUT COMPONENT -->

    <!-- A generic input box to use instead of making input boxes multiple times. -->
    <div v-if="element === 'input'">
        <!-- The input box. -->
        <input 
            class="mt-2" 
            :type="type" 
            v-bind="field" 
            :placeholder="placeholder" 
            :class="{'is-invalid': errorList.length !== 0}">

        <!-- The error message. -->
        <div v-if="errorList.length !== 0">
            <p class="alert alert-danger">{{errorMsg}}</p>
        </div>
    </div>

</template>



<script>

    export default {
        props: ['field', 'errorList', 'errorMsg', 'element', 'type', 'placeholder']
    }

</script>




<style scoped>

    input {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
        color: black;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        width: 100%;
    }

    input:focus {
        border: 2px solid black;
    }

</style>