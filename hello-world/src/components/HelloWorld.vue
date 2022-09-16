<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
    <ul>
      <li v-for="(n,index) in nums" :key="index">{{n}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg", "nums"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  list-style: none;
}
a {
  color: #42b983;
}
</style>
