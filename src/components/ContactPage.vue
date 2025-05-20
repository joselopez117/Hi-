<script setup lang="ts">
import axios from 'axios';
import imagePath from '@/assets/StockSnap_8UPLJEGABH.jpg';
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
            })
    }
}
</script>

<template>
    <div class="parent" :style="{ 'background-image': `url(${imagePath})`}">
        <div class="contact-form">
            <form class="form-data" @submit.prevent>
                <label for="name" class="label">Name:</label>
                <input type="text" id="name" name="name" v-model="name"><br>
                <label for="message" class="label">Message:</label>
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
    </div>
    <a class="image-credit" href="https://stocksnap.io/author/freenaturestock">Image credit: Free Nature Stock</a>
</template>

<style scoped lang="scss">
    .parent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height:45rem;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 1rem;
    }
    .text-parent {
        text-align: center;
    }
    .contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 90%;
        width: 100%;
    }
    .form-data {
        width: 100%;
        text-align: left;
        padding-left: 5%;
        padding-right: 5%;
    }
    .label {
        padding: 5%;      
    }
    .msg-area {
        background-color: #1D3A63;
        max-width: 100%;
        resize: vertical;
    }
    .image-credit {
        display: flex;
        justify-content: right;
    }
</style>
