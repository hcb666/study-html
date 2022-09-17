<template>
  <li>
    <input type="checkbox" :checked="todo.finish" @change="$emit('toggle-todo-list-item',{
        id: todo.id,
        finish: $event.target.checked,
    })">
    <span>{{todo.text}}</span>
    <i>x</i>
  </li>
</template>

<script>
export default {
props: {
    todo: Object
}
}
</script>

<style>

</style>