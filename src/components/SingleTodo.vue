<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '@/stores/todos.ts';

const props = defineProps({
  id: { type: Number, required: true },
  todoText: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

const emit = defineEmits(['taskCompleted']);

const todoStore = useTodosStore();

const isDone = ref(props.complete);

function toggleCompletedState() {
  isDone.value = !isDone.value;

  if (isDone.value) {
    emit('taskCompleted');
  }

  todoStore.toggleTodoState(props.id, isDone.value);
}
function deleteSingleTodo() {
  todoStore.deleteTodo(props.id);
}
</script>

<template>
  <div :class="{ completed: isDone }" class="single-todo">
    <span>{{ todoText }}</span>
    <div>
      <button @click="toggleCompletedState">
        <span v-if="isDone">Mark as undone</span>
        <span v-if="!isDone">Mark as done</span>
      </button>
    </div>
    <div>
      <button @click="deleteSingleTodo">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
.single-todo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
