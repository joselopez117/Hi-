<script setup lang="ts">
import axios from 'axios';
import FidgetButton from './FidgetButton.vue';
import { ref } from 'vue';

const name = ref('');
const message = ref('');
const count = ref(0);
const responseReturned = ref('');

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
                'https://api.joselopez117.com/data/contact', 
                body,
            ) 
            .then(response => {
                if(response){
                    responseReturned.value = "Message sent!" 
                }
            }).catch(response => {
                // console.log(response);
            })
    }
}
</script>

<template>
    <div class="contact-form">
        <form class="form-data" @submit.prevent>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="name"><br>
            <label for="message">Message:</label>
            <textarea id="message" name="message" v-model="message" class="msg-area"></textarea><br>
            <input type="submit" value="Submit" @click="deliverVistorInfo">
        </form>
    </div>
    <div class="text-parent">
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
