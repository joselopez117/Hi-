<script setup lang="ts">
import axios from 'axios';
import FidgetButton from './FidgetButton.vue';
import { ref } from 'vue';

const firstName = ref('');
const nickName = ref('');
const email = ref('');
const message = ref('');
const returnMessage = ref('Test');

function deliverVistorInfo() {
    if(firstName.value != '' && nickName.value != '' && email.value != '' && message.value != ''){
        const body = {
            'firstName' : firstName.value,
            'nickName' : nickName.value,
            'email' : email.value,
            'message' : message.value,
        }

        const headers = {
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type',
            'x-api-key': 'xBX3CmhSvy1r1vM1EmSzY834dXSgni3o2SgCnISX', 
        };

        return axios
            .post(
                'https://u74t4kighc.execute-api.us-east-2.amazonaws.com/prod', 
                body,
                {headers}
            ) 
            .then(response => {
                console.log(response);
            }).catch(response => {
                console.log(response);
            }).finally(() => {
                firstName.value = '';
                nickName.value = '';
                email.value = '';
                message.value = '';
            });
    }
}

</script>

<template>
    <div class="contact-form">
        <form class="form-data" @submit.prevent>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" v-model="firstName"><br>

            <label for="nickname">Nickname:</label>
            <input type="text" id="lname" name="lname" v-model="nickName"><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="email"><br>

            <!-- TODO: add message box here for users to send a message to me -->
            <label for="message">Message:</label>
            <textarea id="message" name="message" v-model="message" class="msg-area"></textarea><br>
            <input type="submit" value="Submit" @click="deliverVistorInfo">
        </form>
    </div>
    <div class="text-parent">
        <div>Pardon the dust!</div>
        <div>I am working on a contact form. In the mean time here are my socials:</div>
        <br/>
        <a href="https://github.com/joselopez117">Github</a>
        <br/>
        <span>You can also click the picture on the top right!</span>
        <br/>
        <a href="mailto:joselopez177@gmail.com">Email</a>
        <br/>
        <a href="https://www.linkedin.com/in/josemartinlopez/">LinkedIn</a>
        <br/>
        <FidgetButton />
    </div>
    <button @click="button">Test button</button>
    <div>{{ returnMessage }}</div>
</template>

<style scoped lang="scss">
    .text-parent {
        text-align: left;
    }
    .contact-form {
        background-color: gray;
        border-radius: 5%;
        display: flex;
        flex-direction: row;
        width: 33%;
    }
    .form-data {
        width: 33%;
        text-align: left;
        margin-left: 5%;
    }
    .msg-area {
        max-width: 10rem;
        resize: vertical;
    }
</style>
