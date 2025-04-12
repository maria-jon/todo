import { ref, onMounted } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

interface ITodo {
  id: number;
  text: string;
  complete: boolean;
}

const DEBUGGING = import.meta.env.DEV;
const nextId = ref(0);

// Creates store for "todos"
export const useTodosStore = defineStore('todos', () => {
  const todos = ref<ITodo[]>([]);

  // Fetches saved todos from localStorage and saves them in todos-variable
  function getTodosFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos === null) {
      if (DEBUGGING) {
        console.warn('No to-dos saved in localStorage.');
      }
      return;
    }

    // Converts from text to object
    todos.value = JSON.parse(savedTodos);

    // Finds the highest id to be able to increase number
    nextId.value = Math.max(...todos.value.map(todo => todo.id));

    if (DEBUGGING) {
      console.log('Saved in localStorage');
      console.table(todos.value);
    }
  }

  // Converts object to text and saves in localStorage
  function saveTodosToLocalStorage() {
    const stringified = JSON.stringify(todos.value);
    localStorage.setItem('todos', stringified);

    if (DEBUGGING) {
      console.log('Save following to-dos in localStorage');
      console.table(todos.value);
    }
  }

  function addNewTodo(text: string, complete: boolean): void {
    // Increase id for next to-do
    nextId.value += 1;

    todos.value.push({ text, complete, id: nextId.value });

    saveTodosToLocalStorage();
  }

  function toggleTodoState(id: number, isComplete: boolean): void {
    const item = todos.value.find(todo => todo.id === id);
    if (item) {
      item.complete = isComplete;
      saveTodosToLocalStorage();
    }
  }

  function deleteTodo(id: number): void {
    const index = todos.value.findIndex(todo => todo.id === id);
    if (index >= 0) {
      todos.value.splice(index, 1)
      saveTodosToLocalStorage();
    }
  }

  // Fetch to-dos when running app
  onMounted(() => {
    getTodosFromLocalStorage();
  });

  return { todos, addNewTodo, toggleTodoState, deleteTodo };
});

// Applies changes made during development
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot));
}
