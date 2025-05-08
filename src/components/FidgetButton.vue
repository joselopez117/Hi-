<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0);
</script>

<template>
  <div class="card">
        <button type="button" @click="count++" class="figet-button">Fidget Button count: {{ count }}</button>
        <div v-if="count >= 50 && count < 100">Nice</div>
        <div v-if="count >= 100 && count < 200">Good job!</div>
        <div v-if="count >= 200">I appreciate the clicks, remember to spend your time wisely!</div>
        <!-- TODO: maybe add a large number that would take a while to get too... -->
  </div>
</template>

<style scoped lang="scss">
.figet-button {
  touch-action: manipulation 
}
</style>
