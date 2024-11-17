<script setup lang="ts">
import FidgetButton from './FidgetButton.vue'
</script>

<template>
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
</style>
