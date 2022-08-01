<template>
  <div>
    <h1>Users2</h1>
    <p>유저를 검색해 주세요.</p>
  </div>
</template>

<script>
export default {
  created() {
    // new Router 속성
    console.log("router", this.$router);
    // 현재 주소와 관련 된 내용
    console.log("route", this.$route);
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
};
</script>
