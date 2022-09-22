<template>
  <div class="home">
    <h3>编辑推荐</h3>
    <ul class="card-list">
      <HomeCard v-for="item in personalizeds" :key="item.id" :item="item" />
    </ul>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h3>最新音乐</h3>
    <ul>
      <SongItem v-for="song in newsongs" :key="song.id" :song="song" />
    </ul>

    <footer>
      <div class="home-footer">
        <span></span><h1>网易云音乐</h1>
        <button>打开APP，发现更多好音乐 &gt;</button>
        <p>网易公司版权所有©1997- 2022 杭州乐读科技有限公司运营</p>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeCard from "@/components/HomeCard.vue";
import SongItem from "@/components/SongItem.vue";


export default {
  // name: 'HomeView',
  components: {
    // HelloWorld
    HomeCard,
    SongItem,
  },
  data: function () {
    return {
      personalizeds: [],
      newsongs: [],
    };
  },
  created() {
    // console.log(this.axios);
    Promise.all([
      this.axios.get("https://apis.netstart.cn/music/personalized", {
        params: { limit: 6 },
      }),
      this.axios.get("https://apis.netstart.cn/music/personalized/newsong"),
    ]).then(([p, n]) => {
      this.personalizeds = p.data.result;
      this.newsongs = n.data.result;
      console.log(this.newsongs);
    });
  },
};
</script>


<style lang="less" scoped>
.home {
  margin-top: 50rem;
  h3 {
    border-left: 2rem solid #d33a31;
    margin: 10rem 0;
    padding-left: 10rem;
    font-size: 14rem;
    line-height: 15rem;
    margin-bottom: 14rem;
  }
  .card-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  footer {
    .home-footer {
      padding: 50rem 0;
      margin-top: 4rem;
      background-image: url("https://s3.music.126.net/mobile-new/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922=");
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 30rem;
        font-weight: 600;
      }
      button {
        width: 300rem;
        height: 38rem;
        border: 1rem solid #d33a31;
        border-radius: 38rem;
        font-size: 16rem;
        color: #d33a31;
        margin: 15rem 37rem 5rem;
        background-color: transparent;
      }
      p {
        color: #888;
        font-size: 12rem;
        line-height: 16rem;
        transform: scale(0.75);
      }
    }
  }
}
</style>
