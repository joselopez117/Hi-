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
                <div class="form-data__container">
                    <label for="name" class="label">Name:</label>
                    <input class ="form-data__name"type="text" id="name" name="name" v-model="name"><br>
                </div>
                <div class="form-data__container">
                    <label for="message" class="label">Message:</label>
                    <textarea class="form-data__msg-area" id="message" name="message" v-model="message"></textarea><br>
                </div>
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
  padding: 2rem 1rem;
  border-radius: 1rem;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.form-data {
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem; 
    align-items: stretch;

    &__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    &__name {
        width: 100%;
        max-width: 100%;
        padding: 0.5rem;
        border: 2px solid #000;
        border-radius: 0.5rem;
        font-size: 1rem;
    }

    &__msg-area {
        width: 100%;
        min-height: 150px;
        padding: 0.75rem;
        box-sizing: border-box;
        border: 2px solid #000;
        border-radius: 0.5rem;
        font-size: 1rem;
        resize: vertical;
    }

    &__submit {
        align-self: flex-start;
        margin-top: 1rem;
        background-color: #6B7D7A;
        color: white;
        border: none;
        border-radius: 0.5rem;
        padding: 0.6em 1.2em;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.5s ease;
    }

    &__submit:hover {
        background-color: #D8B737;
        color: black;
    }
}

.label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

@media (max-width: 600px) {
    .form-data {
        padding: 1rem;
    }

    .form-data__msg-area {
        min-height: 120px;
    }

    .form-data__submit {
        width: 100%;
        text-align: center;
    }
}

.image-credit {
    display: flex;
    justify-content: right;
}
</style>
