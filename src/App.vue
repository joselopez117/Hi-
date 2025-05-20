<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavBar from './components/NavBar.vue'

const scrollTarget = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    scrollTarget.value?.scrollIntoView({ behavior: 'smooth' })
  }, 100) // short delay ensures content is rendered
})
</script>

<template>
  <NavBar />
  <div ref="scrollTarget">
    <router-view />
  </div>
</template>

<style scoped>
</style>
