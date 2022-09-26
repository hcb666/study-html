<template>
  <li>
    <h5>
        {{hotcomment.user.nickname}}
    </h5>
    <p>{{hotcomment.content}}</p>
  </li>
</template>

<script>
export default {
props: {
    hotcomment:Object
}
}
</script>

<style lang="less" scoped>

</style>