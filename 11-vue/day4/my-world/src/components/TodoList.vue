<template>
<TodoItem />
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  props: {
    todo: Object,
  },
};
</script>

<style>
</style>