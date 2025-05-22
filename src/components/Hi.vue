<script setup lang="ts">
import imagePath from '@/assets/StockSnap_1N5RXUYKDW.jpg';
import { ref } from 'vue'
import FidgetButton from './FidgetButton.vue'

defineProps<{ 
  msg: string
 }>()

const hiMsg = ref("Hello hello! I'm Jose Lopez")
const aspirationalRoles = ref("Software Engineer · Machine Learning Enthusiast")
const student = ref("M.S. Computer Science student at UT Austin")
const aboutMe = ref('About Me');
const welcomeMsg = ref("Welcome to my professional showcase! I'm a passionate software developer and graduate student with expertise in crafting innovative solutions across the stack. With experience in frameworks like Vue.js, Knockout.js, and Next.js, coupled with strong back-end skills in C#, Java, and Node.js, I thrive in building seamless, efficient, and user-focused applications.");
const imageCredit = ref("Image credit: Etienne Boulanger");
</script>

<template>
  <div class="page-container">
    <div class="parent-text" :style="{ 'background-image': `url(${imagePath})`}">
      <h1>{{ hiMsg }}</h1>
      <h2>{{ aspirationalRoles }}</h2>
      <h2>{{ student }}</h2>
      <h2>{{ aboutMe }}</h2>
      <div class="parent-text__welcomeMsg">{{ welcomeMsg }}</div>
      
      <FidgetButton />
    </div>
    <a class="image-credit" href="https://stocksnap.io/author/44934">{{ imageCredit }}</a>
  </div>
</template>

<style scoped lang="scss">
.parent-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 1rem;
  color: #F1F1F1;

  h1, h2, .parent-text__welcomeMsg {
    color: #F1F1F1;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .parent-text__welcomeMsg {
    max-width: 700px;
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem;
    box-sizing: border-box;
  }
}

.image-credit {
  display: flex;
  justify-content: right;
}
</style>