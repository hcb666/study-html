<template>
  <div id="app">
    <TodoHeader @add-todo="addTodo" :todos="todos" @toggleAll-todos="toggleAllTodos"></TodoHeader>
    <TodoList
      :todos="todos"
      :showNumber="showNumber"
      @AppTodo="toggleTodo"
      @AppDeleteTodo="deleteTodo"
      @AppUpdateTodo="updateTodo"
    ></TodoList>
    <TodoFooter :todos="todos" :length="length" @ActiveTodo="activeTodo" @RemoveTodo="removeTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
// import TodoItem from './components/TodoItem.vue'
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      showNumber: 1,
      length: 0
    };
  },
  created() {
    // console.log(
    //   this.todos.map(obj => ({ ...obj })).filter(o => o.finish === true).length
    // );
    this.length = this.todos
      .map(obj => ({ ...obj }))
      .filter(o => o.finish === true).length;
  },
  methods: {
    addTodo(text) {
      // console.log("App");
      this.todos = [
        ...this.todos,
        {
          id: this.todos.length
            ? Math.max(...this.todos.map(obj => obj.id)) + 1
            : 1,
          text,
          finish: false
        }
      ];
    },
    toggleTodo({ id, finish }) {
      // console.log(this.$emit);
      // console.log("toggleTodo");
      this.todos = this.todos.map(obj =>
        obj.id === id ? { ...obj, finish } : obj
      );
    },
    toggleAllTodos(event) {
      // console.log(event);
      this.todos = this.todos.map(obj => ({
        ...obj,
        finish: event.finish
      }));
    },
    deleteTodo(event) {
      // console.log(event.id, "2222", this.todos.id !== event.id);
      this.todos = this.todos.filter(obj => obj.id !== event.id);
    },
    activeTodo(number) {
      this.showNumber = number;
      // console.log(number, "App");
    },
    removeTodo() {
      // console.log("removeTodo");
      this.todos = this.todos
        .map(obj => ({ ...obj }))
        .filter(obj => obj.finish == false);
      // console.log(this.todos);
    },
    updateTodo({ text, id }) {
      // console.log(text, id);
      this.todos = this.todos
        .map(obj => ({ ...obj }))
        .filter(obj => (obj.id === id ? (obj.text = text) : obj.text));
      // console.log(this.todos);
    }
  },
  watch: {
    todos(newTodos) {
      console.log("跟组件发生改变");
      localStorage.setItem("todos", JSON.stringify(newTodos));
      this.length = this.todos
        .map(obj => ({ ...obj }))
        .filter(o => o.finish === true).length;
    },
    showNumber() {
      console.log("showNumber改变了");
    }
  }
};
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 5px 0 black;
}
ul li{
  margin-left: -40px;
  border-bottom: 1px solid black;
}
</style>
