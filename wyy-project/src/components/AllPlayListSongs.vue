<template>
  <li>
    <h6>{{ String(index + 1).padStart(2, "0") }}</h6>
    <div class="songs-title">
      <div class="songs">
        <h5>{{ allsongs.name }}</h5>
        <div class="songers">
          <p v-for="singers in allsongs.ar" :key="singers.id">{{ singers.name }}</p>
        </div>
      </div>
      <i></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    allsongs: Object,
    index: Number,
  },
  data: function () {
    return {
      singers: [],
    };
  },
};
</script>

<style lang="less" scoped>
li {
  h6 {
    padding: 5rem;
  }

  display: flex;
  align-items: center;

  .songs-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5rem;
    border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
padding: 5rem 0;
    .songs {
      h5 {
        font-size: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: normal;
      }

      .songers {
        display: flex;

        p {
          font-size: 12px;
    color: #888;
          &:nth-child(2) {
            margin-left: 5rem;
          }
        }
      }
    }

    i {
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