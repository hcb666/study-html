<template>
  <ul id="TodoList">
    <TodoItem
      v-for="(todo , index) in todos"
      :key="index"
      :todo="todo"
      @ListTodo="$emit('AppTodo' , $event)"
      @ListDeleteTodo="$emit('AppDeleteTodo' , $event)"
      @ListUpdateTodo="$emit('AppUpdateTodo' , $event)"
      v-show="showActive(todo.finish)"
    ></TodoItem>
  </ul>
</template>
  
  <script>
// @固定代表 src目录 这样既不需要关心组件的目录关系
import TodoItem from "@/components/TodoItem.vue";
export default {
  components: {
    TodoItem
  },
  props: {
    todos: Array,
    showNumber: Number
  },
  methods: {
    showActive(bool) {
      // console.log(bool);
      if (this.showNumber === 1) {
        return true;
      } else if (this.showNumber === 2) {
        // console.log(!bool);
        return !bool;
      } else if (this.showNumber === 3) {
        // console.log(bool);
        return bool;
      }
    },
  }
};
</script>
  
  <style>

</style>