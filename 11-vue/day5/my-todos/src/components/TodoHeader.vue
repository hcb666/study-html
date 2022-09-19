<template>
  <div id="TodoHeader" class="header">
    <input type="checkbox" :checked="addCheck" @change="toggleAllTodos" style="margin-top:5px;"/>
    <input type="text" v-model="value" @keyup.enter="addTodo" />
  </div>
</template>
  
  <script>
export default {
  props: {
    todos: Array,
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    addCheck() {
      return this.todos.every((obj) => obj.finish);
    },
  },
  methods: {
    addTodo() {
      //   console.log("TodoHeader", this.value);
      this.value && this.value !== " " && this.$emit("add-todo", this.value);
      this.value = "";
    },
    toggleAllTodos() {
      this.$emit(
        "toggleAll-todos",
        ...this.todos.map((obj) => ({ ...obj, finish: event.target.checked }))
      );
    },
  },
};
</script>
  
  <style>
  input {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
 input:nth-child(2) {
    width: 400px;
    line-height: 30px;
  }
   input:nth-child(1) {
    margin: 10px;
  }
</style>