<template>
  <footer>
    <p>left {{ leftTodosCount }} item</p>
    <ul>
      <li
        v-for="f in filters"
        :key="f"
        :class="{ active: f === currentFilter }"
        @click="$emit('clear-complated-todos')"
      >
        clear
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: {
    filters: Array,
    leftTodoosCount: Number,
    currentFilter: String,
  },
};
</script>

<style>
</style>