<script setup lang="ts">
import { ref, computed } from 'vue';
import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);
// const picked = ref('all');

// Toggle for filtering
const showCompletedOnly = ref(false)

// Computed list based on toggle
const filteredTodos = computed(() => {
  return showCompletedOnly.value
    ? todos.value.filter(todo => todo.complete)
    : todos.value
})

function addTodo() {
  todoStore.addNewTodo(todoName.value, false);
}

function onTaskCompleted() {
  showCompletedMessage.value = true;
  setTimeout(clearMessage, 3000);
}

function clearMessage() {
  showCompletedMessage.value = false;
}
</script>

<template>
  <main>
    <div class="todo-input">
      <h2>Add new to-do</h2>
      <input type="text" v-model="todoName" @keyup.enter="addTodo" />
      <button @click="addTodo">Add to-do</button>
    </div>
    <div class="todo-message">
      <p v-if="showCompletedMessage">Well done completing that!</p>
    </div>
    <div class="todo-list">
      <h2>My to-do-list</h2>
      <div class="filter">
        <!--
        <input type="radio" id="all" value="all" v-model="picked" />
        <label for="all">All</label>
        <input type="radio" id="undone" value="undone" v-model="picked" />
        <label for="undone">Undone</label>
        <input type="radio" id="done" value="done" v-model="picked" />
        <label for="done">Done</label>
        -->
        <label>
          <input type="checkbox" v-model="showCompletedOnly" />
          Show completed only
        </label>
      </div>

      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <SingleTodo :todo-text="todo.text" :complete="todo.complete" :id="todo.id" @task-completed="onTaskCompleted" />
        </li>
      </ul>

      <p v-if="todos.length === 0">Nothing to do! Take a break ☕</p>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
}

.todo-input > button {
  margin-left: 1rem;
}

.todo-message {
  min-height: 3.5rem;
}
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
