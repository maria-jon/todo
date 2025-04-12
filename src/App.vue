<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Att göra</h1>
      <nav>
        <RouterLink to="/">Hem</RouterLink>
        <RouterLink to="/about">Om</RouterLink>
        <RouterLink to="/completed">Avklarade uppgifter</RouterLink>
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
  display: flex;
  justify-content: space-evenly;
}
</style>
