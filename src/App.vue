<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="header">
        <img src="/android-chrome-512x512.png" width="512" height="512" alt="checkmark">
        <h1>To-do</h1>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/completed">Completed to-dos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  background-color: #e2e2df;
  padding: 1rem;
}

.header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

img {
  max-height: 1.8rem;
  width: auto;
}

h1 {
  margin: 0;
}

nav {
  background-color: #383a3e;
  display: flex;
  justify-content: space-evenly;
}

a {
  color: #e7dab1;
  background-color: #383a3e;
  padding: 0.5rem;
  transition: all 0.5s ease-out;
}

a:hover {
  background-color: #e7dab1;
  color: #383a3e;
}
</style>
