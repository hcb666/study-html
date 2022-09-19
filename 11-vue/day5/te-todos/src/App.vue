<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TodoHeader
      @add-todo="addTodo"
      :isAllCheck="isAllCheck"
      @toggle-all="toggleAll"
    />
    <TodoList
      :todos="currentTodos"
      @toggle-todo-app-list="toggleTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
    <TodoFooter
      :filters="filters"
      :leftTodoosCount="activeTodos.length"
      @change-filters="currentFilter = $event"
      :currentFilter="currentFilter"
      @clear-complated-todos="deleteAllCompletedToodos"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from "./components/TodoList.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    TodoList,
    TodoHeader,
    TodoFooter,
  },
  data: function () {
    return {
      //两个以上在子组件都要用到或者修改 某个状态 ，那么就应该把这个状态放到他们的公共的父级
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      filters: ["All", "Active", "Completed"],
      currentFilter: "All"
    }
  },
  computed: {
    isAllCheck: function () {
      return this.todos.every((o)=>o.finish)
    },
    activeTodos: function () {
      return this.todos.filter((o)=>!o.finish)
    },
    completedTodos: function () {
      return this.todos.filter((o)=>o.finish)
    },
    currentTodos: function () {
      switch (this.currentFilter) {
        case "Active":
          return this.currentTodos
          case "Completed":
            return this.completedTodos
        default:
          return this.todos;
      }
    }
  },
  methods: {
    addTodo: function (text) {
      this.todos = [...this.todos, {
        id: this.todos.length ? Math.max(...this.todos.map((o)=>o.id)) + 1 : 1,
        text,
        finish: false
      }]
    },
    toggleTodo: function ({id, finish}) {
      this.todos = this.todos.map((o)=>(o.id ===id ? {...o, finish} : o))
    },
    toggleAll: function (finish) {
      this.todos = this.todos.map((o)=>({...o,finish}))
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter((o)=>o.id !== id)
    },
    updateTodo: function ({id, text}) {
      this.todos = this.todos.map((o)=>(o.id === id ? {...o, text} : o))
    },
    deleteAllCompletedTodos: function () {
      this.todos = this.activeTodos
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
