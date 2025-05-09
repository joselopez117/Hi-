<script setup lang="ts">
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
  <div class="parent-text">
    <h1>{{ hiMsg }}</h1>
    <h2>{{ aspirationalRoles }}</h2>
    <h2>{{ aboutMe }}</h2>
    <div>{{ welcomeMsg }}</div>
    <h2>{{ projects }}</h2>
    
    <FidgetButton />
  </div>
</template>

<style scoped lang="scss">
  .parent-text {
    text-align: left;
    max-width: 70vw;
  }
</style>
