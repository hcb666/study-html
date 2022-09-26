<template>
  <div class="playpage">
    <section>
      <PlayDisc v-if="showDisc" @click.native="showDisc = false" :song="song" />
      <PlayLyric v-else @click.native="showDisc = true" :song="song" :currentTime="currentTime"/>
    </section>
    <header>
      <div> <h1>{{ song?.name }}</h1></div>
 <div><h3>{{ song?.song?.artists[0].name }}</h3></div>    
      <span @click="$parent.showPlayPage = false">X</span>
    </header>
    <footer>
      <input
        type="range"
        name=""
        id=""
        min="0"
        :max="duration"
        :value="tmpCurrentTime"
        @input="draging = true"
        @change="
          draging = false;
          $emit('update-time', $event.target.value);
        "
      />
      <br />
      <div class="footerbutton">
        <button>模式</button>
        <i class="fa fa-backward"></i>
        <button>▶</button>
        <i class="fa fa-forward"></i>
        <i class="fa fa-heart"></i>
      </div>
    </footer>
  </div>
</template>

<script>
import PlayDisc from "@/components/PlayDisc.vue";
import PlayLyric from "@/components/PlayLyric.vue";
export default {
  components: {
    PlayDisc,
    PlayLyric,
  },
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },
  data: function () {
    return {
      showDisc: true,
      draging: false,
      tmpCurrentTime: this.currentTime,
    };
  },

  watch: {
    currentTime: function (n) {
      if (!this.draging) {
        this.tmpCurrentTime = n;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.playpage {
  width: 100%;
  height: 70vh;
  background: rgba(29, 29, 31, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    // width: 100%;
    height: 30rem;
    font-size: 20rem;
    text-align: center;
    margin: 0 auto;
    // div{
    //   width: 100%;
    //   // height: 20rem;
    // }
//    
    
  }
  section {
    // flex-grow: 1;
    width: 100%;
  }
  footer {
    input[type="range"] {
      width: 100%;
      appearance: none;
      border-radius: 12rem;
      background: linear-gradient(90deg, #6e6d6d 0%, #292f3a 100%);
      box-shadow: 0 0 8rem 0 rgb(91, 90, 90);
    }
    input[type="range"]::-ms-fill-lower {
      appearance: none;
      background: rgb(212, 36, 36);
    }
    input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 6rem;
      height: 6rem;
      border-radius: 6rem;
      background: #f22929;
      box-shadow: 0 0 6rem 0 rgb(245, 196, 196);
    }

    .footerbutton {
      width: 100%;
      display: flex;
      // justify-content: center;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>