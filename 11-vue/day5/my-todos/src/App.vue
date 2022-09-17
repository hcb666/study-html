<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <TodoHeader @add-todo="addTodo" />
    <TodoList :todos="todos" @toggle-todo-app-list="toggleTodo" />
    <TodoFooter />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    TodoFooter,
    TodoList,
    TodoHeader,
  },
  data: function () {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo: function (text) {
      this.todos = [...this.todos, {
        id: this.todos.length ? Math.max(...this.todos.map((o)=> o.id)) + 1 : 1,
        text,
        finish: false, 
      }];
    },
    toggleTodo: function ({id, finish}) {
      this.todos = this.todos.map((o)=>(o.id === id ? {...o, finish} : o))
    }
  },
  watch: {
    todos: function (newTodos) {
      localStorage.setItem("todos", JSON.stringify(newTodos))
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
