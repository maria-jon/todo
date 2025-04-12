<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
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

nav {
  display: flex;
  justify-content: space-evenly;
}

a {
  color: #383a3e;
  text-decoration: none;
}

a:hover {
  color: #CF8D53;
}

</style>
