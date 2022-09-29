<template>
  <div class="playpage">
    <div class="playpage-img" :style=" song&&{backgroundImage:'url(' + showIm + ')'}"></div>
    <div class="mask"></div>
    <header>
      <svg @click="$parent.showPlayPage = false" t="1664280909703" class="icon" viewBox="0 0 1026 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2686" fill="aliceblue">
        <path
          d="M857.088 224.256q28.672-28.672 69.12-28.672t69.12 28.672q29.696 28.672 29.696 68.608t-29.696 68.608l-382.976 380.928q-12.288 14.336-30.72 19.968t-38.912 4.608-40.448-8.704-34.304-22.016l-376.832-374.784q-29.696-28.672-29.696-68.608t29.696-68.608q14.336-14.336 32.256-21.504t36.864-7.168 37.376 7.168 32.768 21.504l313.344 309.248z"
          p-id="2687" />
      </svg>
      <div class="song-name">
        <h1>{{ song?.name }}</h1>
      </div>
      <div class="songers-name">
        <p v-for="songers in song.song?.artists" :key="songers.id">{{ songers.name }}/</p>
      </div>
    </header>

    <section>
      <PlayDisc v-if="showDisc" @click.native="showDisc = false" :song="song" />
      <PlayLyric v-else @click.native="showDisc = true" :song="song" :currentTime="currentTime" />
    </section>

    <footer>
      <div class="good">
        <p>{{ currentTime| formatSeconds }} </P>
        <div class="jindu">
          <div class="mask" :style="{ width: `${(currentTime / duration).toFixed(2) * 100}%` }"></div>
        </div>
        <div class="radio" :style="{ left: `${(currentTime / duration).toFixed(2) * 100}%` }"></div>

        <input type="range" min="0" :max="duration" :value="tmpcurrentTime" @input="draging=true"
          @change="draging=false;$emit('update-time',$event.target.value)" />
        <p> {{duration| formatSeconds }}</p>
      </div>
      <div class="footerbutton">
        <button @click="$emit('change-model')">{{model}}</button>
        <svg t="1664285611146" @click="$emit('change-song', 'prev')" fill="aliceblue" class="icon"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4999">
          <path
            d="M803.584 134.592c-18.176-10.048-39.936-10.112-58.112 0L192 443.008l0-282.88c0-17.664-14.336-32-32-32S128 142.464 128 160.128l0 344.896C127.744 507.2 127.104 509.248 127.104 511.488S127.744 515.84 128 518.016l0 346.112c0 17.664 14.336 32 32 32s32-14.336 32-32L192 579.968l553.408 308.352C754.56 893.44 764.48 896 774.528 896s19.968-2.56 29.056-7.616c18.176-10.112 28.992-28.224 28.992-48.576L832.576 183.104C832.576 162.88 821.76 144.768 803.584 134.592zM768.192 829.248 198.016 511.488 771.328 192 768.192 829.248z"
            p-id="5000" />
        </svg>
        <svg v-if="!playing" @click.stop="$emit('song-play')" fill="aliceblue" class="big-icon" t="1664286005966"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5979">
          <path
            d="M512 96C282.624 96 96 282.624 96 512s186.624 416 416 416 416-186.624 416-416S741.376 96 512 96z m0 768C317.92 864 160 706.08 160 512S317.92 160 512 160s352 157.92 352 352-157.92 352-352 352z"
            p-id="5980" />
          <path
            d="M466.816 324.96a32 32 0 0 0-50.816 25.888v339.776a32 32 0 0 0 50.816 25.856l233.6-169.888a32 32 0 0 0 0-51.776l-233.6-169.856z"
            p-id="5981" />
        </svg>
        <svg t="1664285302690" fill="aliceblue" v-else @click.stop="$emit('song-pause')" class="big-icon"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4439">
          <path
            d="M512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-64c212.064 0 384-171.936 384-384S724.064 128 512 128 128 299.936 128 512s171.936 384 384 384z m-128-543.936a31.968 31.968 0 1 1 64 0v319.872a31.968 31.968 0 1 1-64 0v-319.872z m192 0a31.968 31.968 0 1 1 64 0v319.872a31.968 31.968 0 1 1-64 0v-319.872z"
            p-id="4440" />
        </svg>
        <svg t="1664285064986" @click="$emit('change-song', 'next')" fill="aliceblue" class="icon"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3318">
          <path
            d="M832 160.128c0-17.664-14.336-32-32-32S768 142.464 768 160.128l0 282.88L214.592 134.592c-18.176-10.112-39.936-10.048-58.112 0C138.24 144.768 127.424 162.88 127.424 183.168l0 656.64c0 20.224 10.816 38.464 29.056 48.576C165.568 893.44 175.488 896 185.472 896s19.968-2.56 29.056-7.616L768 579.968l0 284.096c0 17.664 14.336 32 32 32s32-14.336 32-32L832 160.128zM191.808 829.248 188.672 192l573.312 319.488L191.808 829.248z"
            p-id="3319" />
        </svg>
        <svg t="1664284963545" @click.stop="$emit('toggle-showPlayList')" fill="aliceblue" class="icon"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2551">
          <path
            d="M832 832a32 32 0 0 1 3.744 63.776L832 896H192a32 32 0 0 1-3.744-63.776L192 832h640z m0-304a32 32 0 0 1 3.744 63.776L832 592H192a32 32 0 0 1-3.744-63.776L192 528h640zM224.256 128.544a64 64 0 0 1 26.816 5.888L256 136.96l127.488 72.832a64 64 0 0 1 4.832 108.096l-4.8 3.04L256 393.824a64 64 0 0 1-95.52-50.016l-0.224-5.568V192.544a64 64 0 0 1 64-64z m0 64v145.696l127.488-72.864-127.488-72.832zM832 224a32 32 0 0 1 3.744 63.776L832 288H496a32 32 0 0 1-3.744-63.776L496 224H832z"
            p-id="2552" />
        </svg>
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
    PlayLyric
  },
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: [],
    model: String,
    tmpcurrentTime: Number
  },
  data: function () {
    return {
      showDisc: true,
      draging: false,
      tmpCurrentTime: this.currentTime
    };
  },
  computed: {
    showIm() {
      return this.song.al ? this.song.al.picUrl : this.song.picUrl;
    }
  },
  watch: {
    currentTime: function (n) {
      if (!this.draging) {
        this.tmpCurrentTime = n;
      }
    }
  },
  filters: {
    //创建函数名formatSeconds
    formatSeconds(value) {
      let result = parseInt(value);
      let m =
        Math.floor((result / 60) % 60) < 10
          ? "0" + Math.floor((result / 60) % 60)
          : Math.floor((result / 60) % 60);
      let s =
        Math.floor(result % 60) < 10
          ? "0" + Math.floor(result % 60)
          : Math.floor(result % 60);
      let res = "";
      if (m !== "00") res += `${m}.`;

      res += `${s}`;

      return res;
    }
  }
};
</script>

<style lang="less" scoped>
.playpage {
  width: 100%;
  height: 100vh;
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .playpage-img {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.5);
    filter: blur(30rem);
  }

  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
  }

  .big-icon {
    width: 40rem;
    height: 40rem;
  }

  .icon {
    width: 24rem;
    height: 24rem;
    fill: aliceblue;
  }

  header {
    .song-name {
      display: flex;
      font-size: 20rem;
      justify-content: center;
    }

    .songers-name {
      display: flex;
      justify-content: center;
    }
  }

  section {
    // flex-grow: 1;
    width: 100%;
  }

  footer {

    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;

    .good {
      margin-bottom: 20rem;
      position: relative;
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .jindu {
        width: 300rem;
        height: 100%;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: -1;

        .mask {
          width: 0%;
          height: 100%;
          background-color: lightblue;
        }
      }

      .radio {
        width: 5rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        border-radius: 50%;
        width: 8rem;
        height: 8rem;
        background-color: rgb(105, 105, 105);
      }

      p {
        width: 30rem;
        margin: 0 2rem;
      }

      input {
        width: 320rem;
        position: absolute;
        top: -4rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        opacity: 0;
        display: block;
      }
    }

    .footerbutton {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 30rem;

      button {
        width: 40rem;
        background-color: transparent;
        border: none;
        color: white;
      }

      svg {
        width: 40rem;
        &:nth-child(3) {
          width: 60rem;
          height: 60rem;
        }
      }
    }
  }
}
</style>