<template>
  <div>
    <h1>Users</h1>
    <p>이 유저는 현재 유저 번호가 {{ userId }}입니다.</p>
    <p>파라미터($route.params) : {{ $route.params }}</p>
    <p>쿼리($route.query) : {{ $route.query }}</p>
    <p>그룹($route.query.group) : {{ $route.query.group }}</p>
    <p>카테고리($route.query.category) : {{ $route.query.category }}</p>
    <br /><br />
    <h1>유저를 검색해 주세요</h1>
    <v-text-field
      v-model="searchId"
      label="유저 번호를 입력하세요"
    ></v-text-field>
    <!-- <v-btn @click="$router.push({ path: `users/${searchId}` })">검색</v-btn> -->
    <v-btn
      @click="
        $router.push({
          name: 'user-detail',
          params: { id: searchId },
        })
      "
      >검색</v-btn
    >
    <br /><br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchId: null,
    };
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    console.log("before Enter");
    next();
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteLeave(to, from, next) {
    console.log("before Leave");
  },
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
