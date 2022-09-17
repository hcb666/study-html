<template>
  <ul>

    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" @toggle-todo-list-item="$emit('toggle-todo-app-list', $event)" />
  </ul>
</template>

<script>
// import TodoList from '@/components/TodoList.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
    components: {
        TodoItem,
    },
    props: {
        todos: Array
    }
};
</script>

<style>
</style>