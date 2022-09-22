<template>
  <div id="app">
    <header>
      <div class="topfix">
        <h1>网易云音乐</h1>
        <button>下载APP</button>
      </div>
      <nav>
        <router-link to="/">推荐音乐</router-link>
        <router-link to="/hot">热歌榜</router-link>
        <router-link to="/search">搜索</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  header {
    background-color: #d43c33;
    height: 84rem;
    position: sticky;
    top: 0;
    z-index: 9;
    .topfix {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 15rem 0;
      h1 {
        color: white;
        display: block;
        font-size: 20rem;
      }
      button {
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        width: 100px;
        text-align: center;
        color: #d43c33;
        background-color: #fff;
        border-radius: 37.5%/100%;
        border: none;
      }
    }
    nav {
      display: flex;
      justify-content: space-around;
      background-color: white;
      box-shadow: 0 0 3rem 0 rgb(156, 156, 156);
      a {
        width: 70rem;
        text-align: center;
        color: #2c3e50;
        font-size: 15rem;
        text-decoration: none;
        height: 40rem;
        line-height: 40rem;
        padding: 0 5rem;
        &.router-link-exact-active {
          border-bottom: 2rem solid #dd001b;
          color: #dd001b;
        }
      }
    }
  }
}
</style>
