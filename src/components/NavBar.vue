<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios';

const profileUrl = 'https://github.com/joselopez117';
const username = 'joselopez117';  // Replace with your GitHub username
const avatarUrl = ref<string | null>(null);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    avatarUrl.value = response.data.avatar_url; // Extract avatar URL
  } catch (err) {
    error.value = 'Error fetching GitHub profile picture.';
  }
});
</script>

<template>
    <!-- TODO: Add translations to all the countries I've traveled to. -->
    <nav>
        <!-- TODO: If we have more divs here, make a class for this div -->
        <div>
            <RouterLink to="/" active-class="home-page">Joselopez117</RouterLink>
            <ul>
                <li>
                    <router-link to="/" active-class="active-link">Hi!</router-link>
                </li>
                <li>
                    <router-link to="/contact" active-class="active-link">Contact</router-link>
                </li>
                <li>
                    <a :href="profileUrl" target="_blank" v-if="avatarUrl">
                        <img :src="avatarUrl" alt="GitHub Avatar" class="avatar" />
                    </a>
                </li>
                <!-- TODO: More to come... -->
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    width: 100%;    
}

div {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: space-between;
}

nav ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.active-link {
  font-weight: bold;
  color: #D8B737;
}
</style>
