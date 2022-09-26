 <template>
  <li class="hotsong-card">
    <!-- <h1>{{ numberIndex }}</h1> -->
    <h6>{{ String(index + 1).padStart(2, "0") }}</h6>
    <div class="right-card">
      <div class="hotsong-card-text">
        <h5>{{ hotsong.name }}</h5>
        <p>
          <i v-if="hotsong.copyright == 0"></i>
          {{ hotsong.ar[0].name }} - {{ hotsong.al.name }}
        </p>
      </div>
      <span></span>
    </div>
  </li>
</template>
 
 <script>
export default {
  props: {
    hotsong: Object,
    index: Number,
  },
  // computed: {
  //   numberIndex() {
  //     return String(this.index).length == 1
  //       ? "0" + String(this.index + 1)
  //       : String(this.index + 1);
  //   },
  // },
};
</script>
 
<style lang="less" scoped>
.hotsong-card {
  padding: 8rem 0;
  display: flex;
  justify-content: space-around;
  h6 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30px;
    font-size: 17px;
    color: #999;
    margin-left: -10px;
    border: none;
  }
  &:nth-child(1) h6 {
    color: #df3436;
  }
  &:nth-child(2) h6 {
    color: #df3436;
  }
  &:nth-child(3) h6 {
    color: #df3436;
  }
  .right-card {
    display: flex;
    align-items: center;
    border-bottom: 1rem solid rgba(0, 0,0,0.1);
    .hotsong-card-text {
      //   margin-left: 10rem;
      width: 280rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      h5 {
        font-size: 17rem;
        line-height: 24rem;
        color: #333;
      }
      p {
        color: #888;
        line-height: 20rem;
        padding-bottom: 5rem;
        i {
          width: 20rem;
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
}
</style>