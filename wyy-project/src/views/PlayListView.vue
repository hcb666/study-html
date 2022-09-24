<template>
  <div>
    <h3>{{ playlist.id }}</h3>
    <h3>{{ playlist.name }}</h3>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      playlist: [],
    };
  },
  methods: {
    getPlayList: function (id) {
      this.axios
        .get("https://apis.netstart.cn/music/playlist/detail", {
          params: { id },
        })
        .then((res) => {
          this.playlist = res.data.playlist;
        });
    },
  },
  created: function () {
    this.getPlayList(this.$router.query.id);
  },
  beforeRouteUpdata(to, from, next) {
    this.getPlayList(to.query.id);
    next();
  },
};
</script>

<style lang="less" scoped>
</style>