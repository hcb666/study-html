<template>
  <div class="search">
    <input
      type="text"
      placeholder="搜索"
      v-model="value"
      @focus="searchRes = null"
    /><i
      v-show="value"
      @click="
        value = '';
        searchRes = null;
      "
      >X</i
    >
    <div v-show="!suggests.length">
      <ul class="hots">
        <h3>hots</h3>
        <li
          v-for="(o, i) in hots"
          :key="i"
          @click="
            value = o.first;
            getSearchResult(o.first);
          "
        >
          {{ o.first }}
        </li>
      </ul>
    </div>

    <ul class="suggests" v-if="suggests.length && !searchRes">
      <h3>suggest</h3>
      <li
        v-for="(o, i) in suggests"
        :key="i"
        @click="
          getSearchResult(o.keyword);
          value = o.keyword;
        "
      >
        {{ o.keyword }}
      </li>
    </ul>

    <ul class="search-search" v-if="searchRes">
      <h3>search</h3>
      <li v-for="(o, i) in searchRes?.songs" :key="i">{{ o.name }}</li>
    </ul>
  </div>
</template>

<script>
import { getSearchHots } from "@/apis";
var _ = require("lodash");
export default {
  data: function () {
    return {
      value: "",
      hots: [],
      suggests: [],
      searchRes: null,
    };
  },
  created() {
    getSearchHots().then((res) => {
      this.hots = res.data.result.hots;
    });
    this.debouncedGetSearchSuggests = _.debounce(this.getSearchSuggests, 800);
  },
  methods: {
    getSearchSuggests: function (keywords) {
      this.axios
        .get("https://apis.netstart.cn/music/search/suggest", {
          params: { keywords, type: "mobile" },
        })
        .then((res) => {
          //如果修改的过程很快 从有值 快速删除到空
          //过程中如果出现一个Ajax很慢 比删完还慢
          //删除完成后 Ajax才有结果
          this.value
            ? (this.suggests = res.data.result.allMatch)
            : (this.suggests = []);
        });
    },
    getSearchResult: function (keywords) {
      this.axios
        .get("https://apis.netstart.cn/music/search/search", {
          params: { keywords, limit: 10, offset: 0 },
        })
        .then((res) => {
          this.searchRes = res.data.result;
          // console.log(this.searchRes, res.data.result);
        });
    },
  },
  watch: {
    value: function (n) {
      if (n) {
        //如果存在就发送ajax
        // getSearchSuggests(n).then((res) => {});
        this.debouncedGetSearchSuggests(n);
      } else {
        this.suggests = [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  margin-top: 50rem;
  input {
    width: 295rem;
    margin: 0 auto;
    height: 30rem;
  }
  .hots {
    display: flex;
    flex-wrap: wrap;
    li {
      border: 1px solid black;
      padding: 10rem;
      line-height: 24rem;
      border-radius: 24rem;
      margin: 8rem;
    }
  }
}
</style>