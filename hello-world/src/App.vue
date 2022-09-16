<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :nums="[11,22,33,44,55]"/>

    <MyWorld :msg="Math.random()"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyWorld from './components/MyWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,MyWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
