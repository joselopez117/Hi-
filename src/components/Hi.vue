<script setup lang="ts">
import imagePath from '@/assets/StockSnap_1N5RXUYKDW.jpg';
import { ref } from 'vue'
import FidgetButton from './FidgetButton.vue'

defineProps<{ 
  msg: string
 }>()

const hiMsg = ref("Hello hello! I'm Jose Lopez")
const aspirationalRoles = ref("Software Engineer • Machine learning enthusiast")
const aboutMe = ref('About Me');
const welcomeMsg = ref("Welcome to my (in progress) professional showcase! I'm a passionate software developer with expertise in crafting innovative solutions across the stack. With experience in frameworks like Vue.js, Knockout.js, and Next.js, coupled with strong back-end skills in C#, Java, and Node.js, I thrive in building seamless, efficient, and user-focused applications.");
const projects = ref('Projects');
</script>

<template>
  <div class="parent-text" :style="{ 'background-image': `url(${imagePath})`}">
    <h1>{{ hiMsg }}</h1>
    <h2>{{ aspirationalRoles }}</h2>
    <h2>{{ aboutMe }}</h2>
    <div class="parent-text__welcomeMsg">{{ welcomeMsg }}</div>
    <h2>{{ projects }}</h2>
    
    <FidgetButton />
  </div>
  <a class="image-credit" href="https://stocksnap.io/author/44934">Image credit: Etienne Boulanger</a>
</template>

<style scoped lang="scss">
  .parent-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 45rem;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 1rem;
  }

  .parent-text__welcomeMsg {
    max-width: 33%;
  }

  .image-credit {
    display: flex;
    justify-content: right;
  }
</style>