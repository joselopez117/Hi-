<script setup lang="ts">
import axios from 'axios';
import imagePath from '@/assets/StockSnap_8UPLJEGABH.jpg';
import FidgetButton from './FidgetButton.vue';
import SVGButton from './SVGButton.vue';
import githubSVG from '@/assets/githubSVG.svg';
import linkedInSVG from '@/assets/linkedInSVG.svg';
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
            <h1>Let's chat!</h1>
            <form class="form-data" @submit.prevent>
                <label for="name" class="label">Name:</label>
                <input class ="form-data__name"type="text" id="name" name="name" v-model="name"><br>
                <label for="message" class="label">Message:</label>
                <textarea class="form-data__msg-area" id="message" name="message" v-model="message"></textarea><br>
                <input class="form-data__submit" type="submit" value="Submit" @click="deliverVistorInfo">
            </form>
        </div>
        <div class="text-parent">
            <SVGButton :src="githubSVG" link="https://github.com/joselopez117" />
            <SVGButton :src="linkedInSVG" link="https://www.linkedin.com/in/josemartinlopez/" />
            <br/>
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
        text-align: center;
        padding-left: 5%;
        padding-right: 5%;

        &__name{
            height: 2rem;
            width: 20rem;
            border: 2px solid #000000;
            border-radius: 0.5rem;
        }

        &__name:hover {
            border-color: #D8B737;
        }

        &__msg-area {
            max-width: 50%;
            width: 50%;
            height: 150px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 2px solid #000000;
            border-radius: 4px;
            font-size: 16px;
            resize: none;
        }

        &__msg-area:hover {
            border-color: #D8B737;
        }

        &__submit {
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: #6B7D7A;
            cursor: pointer;
            transition: border-color 0.25s;
        }

        &__submit:hover {
            border-color: #D8B737;
        }
    }
    
    .label {
        padding: 0 2% 0 0;
        margin: auto 0;    
    }

    .image-credit {
        display: flex;
        justify-content: right;
    }
</style>
