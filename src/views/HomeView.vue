<script setup lang="ts">
import { ref } from 'vue';
import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);

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
    <h2>My to-dos</h2>
    <div class="todo-input">
      <input type="text" v-model="todoName" @keyup.enter="addTodo" />
      <button @click="addTodo">Add to-do</button>
    </div>
    <div class="todo-list">
      <p v-if="showCompletedMessage">Well done!</p>

      <div v-if="todos.length > 0" v-for="(todo, index) in todos" :key="index">
        <SingleTodo :todo-text="todo.text" :complete="todo.complete" :id="todo.id" @task-completed="onTaskCompleted" />
      </div>

      <p v-if="todos.length === 0">Nothing to do! Take a break ☕</p>
    </div>
  </main>
</template>

<style scoped lang="scss">
.todo-list {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
