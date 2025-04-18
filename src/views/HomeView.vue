<script setup lang="ts">
import { ref, computed } from 'vue';
import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);

const filter = ref<'all' | 'active' | 'done'>('all')

const filteredTodos = computed(() => {
  if (filter.value === 'done') {
    return todos.value.filter(todo => todo.complete)
  } else if (filter.value === 'active') {
    return todos.value.filter(todo => !todo.complete)
  } else {
    return todos.value
  }
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
        <label>
          <input type="radio" value="all" v-model="filter" />
          All
        </label>
        <label>
          <input type="radio" value="active" v-model="filter" />
          Active
        </label>
        <label>
          <input type="radio" value="done" v-model="filter" />
          Done
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
