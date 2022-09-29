 <template>
  <div class="playlist">
    <ul class="card">
      <li
        v-for="song in songlist"
        :key="song?.id"
        :style="{color: song?.id ===songId ? 'red' : ''}"
        @click="$emit('update-song',song)"
      >
        <div class="playlistcard">
          <p>
            {{song?.name}}
            <span>- {{song.song?.artists[0] ? song.song.artists[0].name : song.ar[0].name}}</span>
          </p>
          <svg
            t="1664363657256"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2553"
            width="20"
            height="20"
            fill="gray"
          >
            <path
              d="M850.538343 895.516744c-11.494799 0-22.988574-4.386914-31.763424-13.161764L141.103692 204.669426c-17.548678-17.534352-17.548678-45.992497 0-63.525825 17.548678-17.548678 45.977147-17.548678 63.525825 0l677.671227 677.685553c17.548678 17.534352 17.548678 45.992497 0 63.525825C873.526917 891.128807 862.032118 895.516744 850.538343 895.516744z"
              p-id="2554"
            />
            <path
              d="M172.867116 895.516744c-11.494799 0-22.988574-4.386914-31.763424-13.161764-17.548678-17.534352-17.548678-45.992497 0-63.525825l677.671227-677.685553c17.548678-17.548678 45.977147-17.548678 63.525825 0 17.548678 17.534352 17.548678 45.992497 0 63.525825L204.629517 882.354979C195.85569 891.128807 184.360891 895.516744 172.867116 895.516744z"
              p-id="2555"
            />
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>
 
 <script>
export default {
  props: {
    songlist: [Object, Array],
    songId: [Number, String]
  }
  // computed: {
  //   songersname() {
  //     return this.song?.song?.artists[0]
  //       ? this.song?.song?.artists[0]?.name
  //       : this.song?.ar[0]?.name;
  //   }
  // }
};
</script>
 
<style lang="less" scoped>
.playlist {
  width: 100%;
  height: 60vh;
  position: fixed;
  bottom: 60rem;
  left: 0;
  z-index: 999;
  padding: 15rem;
  .card {
    // background-color: rgb(118, 118, 118);
    max-height: 100%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0 3rem 0 black;
    min-height: calc(60vh - 30rem);
    border-radius: 15rem;
    padding: 15rem;
      overflow-y: auto;

    .playlistcard {
      display: flex;
      justify-content: space-between;
      p {
        padding: 15rem 0;
        font-size: 15rem;
        span {
          color: rgb(172, 172, 172);
          font-size: 10rem;
        }
      }
    }
  }
}
</style>