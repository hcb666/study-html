<template>
  <header>
    <input type="checkbox" name="" id="" />
    <input type="text" v-model="value" @keyup.enter="addTodo" />
  </header>
</template>

<script>
export default {
    data: function () {
        return {
            value: "",
        }
    },
    methods: {
        addTodo:function () {
            this.value && this.$emit("add-todo", this.value)
            this.value = ""
        }
    }
};
</script>

<style>
</style>