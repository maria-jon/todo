<script setup lang="ts">
import { ref, computed } from 'vue';
import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);
// Toggle for filtering
const showCompletedOnly = ref(true)

// Computed list based on toggle
const filteredTodos = computed(() => {
  return showCompletedOnly.value
    ? todos.value.filter(todo => todo.complete)
    : todos.value
})
</script>

<template>
  <main class="completed">
    <h2>Completed to-dos</h2>
    <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <SingleTodo :todo-text="todo.text" :complete="todo.complete" :id="todo.id" />
    </li>
  </ul>
  </main>
</template>
