<template>
  <div id="TodoFooter">
    <!-- 待处理 需要已完成的数量 -->
    <span>{{length}} item</span>

    <button href="javascript:;" @click="$emit('ActiveTodo' , 1)">All</button>
    <button href="javascript:;" @click="$emit('ActiveTodo' , 2)">Active</button>
    <button href="javascript:;" ton @click="$emit('ActiveTodo' , 3)">Completed</button>
    <button href="javascript:;" @click="$emit('RemoveTodo')" :class="length >0 ? 'active1' :'hied' ">deleteCompleted</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    length: Number
  }
};
</script>

<style>
button{
  border: 1px solid black;
  border-radius: 3px;
  text-decoration: none;
  margin: 0 5px;
  font-size: 14px;
  color: black;
}
li {
  list-style: none;
}
.active1 {
  opacity: 1;
}
.hied {
  opacity: 0;
}
#TodoFooter {
  padding: 10px;
}
</style>