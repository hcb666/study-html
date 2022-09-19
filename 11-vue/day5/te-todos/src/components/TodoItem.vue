<template>
  <li>
    <input
      type="checkbox"
      :checked="
        $emit('toggle-todo-list-item', {
          id: todo.id,
          finish: $event.target.checked,
        })
      "
    />
  <input
    type="text"
    v-if="editing"
    v-model="value"
    @keyup.esc="editing = false"
    @keyup.enter="$emit('update-todo', { id: todo.id, text: value })
    editing= false"
  />
  <span v-else @dblclick="editing = true; value = todo.text; ">{{todo.text}}</span>
  <i @click="$emit('delete-todo', todo.id)">x</i>
  </li>
</template>

<script>
export default {
    props: {
        todo: Object,
    },
    data: function () {
        return {
            editing: false,
            value: this.todo.text
        }
    }
};
</script>

<style>
</style>