<script setup lang="ts">
defineProps({
  todoText: { type: String, required: true },
  complete: { type: Boolean, default: false },
});
</script>

<template>
  <div :class="{ completed: complete }">{{ todoText }}</div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
