   <template>
  <li class="song-item" @click="clickHandler">
    <div class="song-text">
      <h5>{{ song.name }}</h5>
      <p>
        <i v-if="song.song.copyright == 0"></i>
        {{ song.song.artists[0].name }} - {{ song.song.album.name }}
      </p>
    </div>
    <span></span>
  </li>
</template>
   
   <script>
export default {
  props: {
    song: Object,
  },
  methods: {
    clickHandler: function () {
      this.$emit("updata-song", this.song)
    }
  }
};
</script>

 <style lang="less" scoped>
.song-item {
  // margin: 0 auto;
  border-bottom: 1rem solid rgba(0, 0, 0,0.1);
  padding: 8rem 0;
  margin-left: 10rem;
  display: flex;
  justify-content: space-between;
  .song-text {
    h5 {
      width: 320rem;
      font-size: 17rem;
      line-height: 24rem;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
    }
    p {
      width: 320rem;
      color: #888;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      i {
        // width: 20rem;
        // margin: 4rem 0;
        padding-left: 15rem;
        background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=");
        background-repeat: no-repeat;
        background-position: 0rem 3rem;
        background-size: 160rem 90rem;
      }
    }
  }
  span {
    width: 22rem;
    height: 22rem;
    display: inline-block;
    background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=");
    background-size: 167rem 97rem;
    background-position: -24rem 0;
    margin: 10rem;
  }
}
</style>