<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>To-do</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/completed">Completed to-dos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #e2e2df;
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
  color: #e2e2df;
  background-color: #383a3e;
  padding: 0.5rem;
  transition: all 0.5s ease-out;
}

a:hover {
  background-color: #e7dab1;
  color: #383a3e;
}
</style>
