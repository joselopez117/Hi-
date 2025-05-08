<script setup lang="ts">
import axios from 'axios';
import FidgetButton from './FidgetButton.vue';
import { ref } from 'vue';

interface ResponseObject {
    Name : string,
    // email : string, //TODO: to be added back in at some point
    message : string,
    serverMessage: string,
    id: number, //TODO: id should be generated in backend
}

const name = ref('');
// const email = ref('');
const message = ref('');
const count = ref(0);
let responseBody: ResponseObject = {
    Name: '',
    // email: '',
    message: '',
    serverMessage: '',
    id: 0,//TODO: id should be generated in backend
};

function deliverVistorInfo() {  
    if(name.value != '' && message.value != ''){
        const body = {
            'name' : name.value,
            // 'email' : email.value, //TODO: add this back in at some point
            'message' : message.value,
            'id': count.value //TODO: id should be generated in backend
        }

        return axios
            .post(
                'https://api.joselopez117.com/data/submit', 
                body,
            ) 
            .then(response => {
                responseBody.Name = response.data.Name;
                //responseBody.email = response.data.email; //TODO: add this back in at some point 
                responseBody.message = response.data.Message;
                responseBody.id = response.data.Id;
                responseBody.serverMessage = response.data.ServerMessage;
            }).catch(response => {
                console.log(response);
            }).finally(() => {
                name.value = '';
                // email.value = '';
                message.value = '';//TODO: finally may not be needed
            });
    }
}

</script>

<template>
    <div class="contact-form">
        <form class="form-data" @submit.prevent>
            <label for="name">First name:</label>
            <input type="text" id="name" name="name" v-model="name"><br>
            <!-- TODO: add message box here for users to send a message to me -->
            <label for="message">Message:</label>
            <textarea id="message" name="message" v-model="message" class="msg-area"></textarea><br>
            <input type="submit" value="Submit" @click="deliverVistorInfo">
        </form>
    </div>
    <div>
        {{ responseBody }}
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
