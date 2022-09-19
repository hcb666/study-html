<template>
  <li>
    <input
      type="checkbox"
      :checked="todo.finish"
      @change="$emit('ListTodo' , {id:todo.id , finish:$event.target.checked})"
    />
    <span
      :class="todo.finish ? 'active' : ''"
      :contenteditable="bool"
      @dblclick="contenteditable"
      @keyup="contenteditableUpdate($event , todo.id)"
    >{{todo.text}}</span>
    <i @click="$emit('ListDeleteTodo',{...todo})">X</i>
  </li>
</template>
  
  <script>
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      bool: false
    };
  },
  methods: {
    contenteditable() {
      this.bool = true;
      // console.log(
      //   "contenteditable",
      //   this.$el.innerText,
      //   event.target.innerText
      // );
    },
    contenteditableUpdate($event, id) {
      this.$emit("ListUpdateTodo", { text: $event.target.innerText, id: id });
    }
  }
};
</script>
  
<style >
.active{
  color: rgb(138, 138, 138);
  text-decoration: line-through;
}
i {
  margin-left: 30px;
}
</style>