<template>
  <div class="playdisc">
    <!-- <img  :src= alt=""> -->
    <div class="imgs">
      <img
        :src="
          song ? `${showIm}?imageView=1&type=webp&thumbnail=200x0` : ''
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
  },
    computed: {
    showIm() {
      return this.song.al ? this.song.al.picUrl : this.song.picUrl;
    }
  },
};
</script>

<style lang="less" scoped>
@keyframes discrotate {
  to {
    transform: rotate(360deg);
  }
}
.playdisc {
  border: 5rem solid rgba(246, 243, 243, 0.3);
  width: 250rem;
  height: 250rem;
  margin: 30rem auto;
  border-radius: 50%;
  background-color: rgba(21, 20, 20, 0.97);
  animation: discrotate 15s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgs {
    width: 150rem;
    height: 150rem;
    border-radius: 50%;
    background-color: #fff;
    img {
      border-radius: 50%;
    }
  }
}
</style>