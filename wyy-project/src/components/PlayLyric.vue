<template>
  <div>
    <div class="box">
      <ul ref="item">
        <li ref="lis" v-for="t in playlyric" :key="t.time">{{ t?.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
    currentTime: Number,
  },
  data() {
    return {
      playlyric: [],
    };
  },

  created() {
    if (this.song) {
      this.axios
        .get("https://apis.netstart.cn/music/lyric", {
          params: { id: this.song?.id },
        })
        .then((res) => {
          // this.playlyric = res.data.playlyric;
          // console.log(res.data.lrc.lyric.split("\n"));
          var arr = res.data.lrc.lyric.split("\n");
          var parsed = arr
            .filter((o) => o)
            .map((o) => {
              var { groups } = o.match(
                /\[(?<mm>\d{2}):(?<ss>\d{2}\.\d{2,3})\](?<text>.*)/
              );
              return {
                time: groups.mm * 60 + groups.ss * 1,
                text: groups.text.trim(),
              };
            });
          this.playlyric = parsed;
        });
    }
  },

  methods: {
    findCurrentLyric(parsed, currentTime) {
      var copy = [...parsed].reverse();
      var index = copy.findIndex((o) => o.time < currentTime);

      return {
        index: copy.length - 1 - index,
        text: copy[index].text,
      };
    },
  },

  watch: {
    currentTime(n) {
      var o = this.findCurrentLyric(this.playlyric, n);
      // console.log(n, this.$refs.lis);
      this.$refs.lis.forEach((element, index) => {
        if (index === o.index) {
          element.style.color = " rgb(145, 232, 247)";
           element.style.transform = " scale(1.5)";
        } else {
          element.style.color = "";
        }
      });
      this.$refs.item.style.transform = `translateY(${o.index * -21 + 150}px)`;
    },
    song(newSong) {
      if (newSong) {
        this.axios
          .get("https://apis.netstart.cn/music/lyric", {
            params: { id: newSong?.id },
          })
          .then((res) => {
            // this.playlyric = res.data.playlyric;
            // console.log(res.data.lrc.lyric.split("\n"));
            var arr = res.data.lrc.lyric.split("\n");
            var parsed = arr
              .filter((o) => o)
              .map((o) => {
                var { groups } = o.match(
                  /\[(?<mm>\d{2}):(?<ss>\d{2}\.\d{2,3})\](?<text>.*)/
                );
                return {
                  time: groups.mm * 60 + groups.ss * 1,
                  text: groups.text.trim(),
                };
              });
            this.playlyric = parsed;
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 300rem;
  text-align: center;
  font-size: 12rem;
  // background-color: lightblue;
  overflow: hidden;
  ul {
    margin: 0;
    // transform: scale(2);
    // color: rgb(145, 232, 247);
    // transform: translateY(150px);
  }
}
</style>