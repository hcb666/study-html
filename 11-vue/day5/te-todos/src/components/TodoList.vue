<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @toggle-todo-list-item="$emit('toggle-todo-app-list', $event)"
      @delete-todo="$emit('delete-todo', $event)"
      @update-todo="$emit('update-todo', $event)"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  cpmponents: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
};
</script>

<style>
</style>