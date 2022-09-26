<template>
  <div class="playbar"  >
    <img
      :class="{ playing: playing }"
      :src="song ? `${song.picUrl}?imageView=1&type=webp&thumbnail=50x0` : ''"
      alt=""
    />
    <div class="geming">
 <h3>{{ song?.name }}</h3>
    <p>{{ (currentTime/60).toFixed(2) }} / {{(duration/60).toFixed(2) }}</p>
    </div>
   
   <div class="playbutton">
<i class="fa fa-play"  v-if="!playing" @click.stop="$emit('song-play')"></i>
<i class="fa fa-pause"  v-else @click.stop="$emit('song-pause')"></i>
   </div>
    <!-- <button v-if="!playing" @click.stop="$emit('song-play')"></button> -->
    <!-- <button v-else @click.stop="$emit('song-pause')"></button> -->
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },
};
</script>

<style lang="less" scoped>
@keyframes rotate {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gmgundong{
  to{
    transform: translateX(360deg);
  }
}
.playbar {
  width: 100%;
  height: 60rem;
background: rgba(29,29,31,0.72);
backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;

  img {
    border-radius: 50%;
    animation: rotate 8s linear infinite;
    animation-play-state: paused;
    &.playing {
      animation-play-state: running;
    }
  }
  .geming{
    margin-left: -30rem;
    // width: 160rem;
    // background-color: #fff;
    // height: 1;
    color: aliceblue;
    text-align: center;
    h3{
      font-size: 16rem;
      font-weight:500;
      animation: gmgundong 5s infinite linear;

    }
  }

  .playbutton{
    background-color: rgba(238, 233, 233, 0);
    border-radius: 40rem;
    width: 40rem;
    height: 40rem;
    border: 1rem solid rgb(196, 194, 194);
      text-align: center;
      
      line-height: 40rem;

    i{
      font-size: 20rem;
      // margin-left: 15rem;
      color: rgb(199, 203, 206);
    }
  }
}
</style>