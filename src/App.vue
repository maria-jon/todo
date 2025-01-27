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

<style scoped></style>
