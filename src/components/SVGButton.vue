<template>
    <a
        class="svg-button"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img :src="src" alt="" class="svg-icon" />
    </a>
</template>
  
<script setup lang="ts">
    defineProps<{
    src: string
    link: string
    }>()
    </script>

    <style scoped>
    .svg-button {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    fill: #FFFFFF;
    }

    .svg-icon {
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease;
    }

    .svg-button:hover .svg-icon {
    transform: scale(1.1);
    }
</style>