<template>
  <div>
    <h1>UserDetail</h1>
    유저번호: {{ searchId }}
    <v-btn @click="edit">수정</v-btn>
  </div>
</template>
<script>
export default {
  computed: {
    searchId() {
      return this.$route.params.id;
    },
  },
  methods: {
    edit() {
      // this.$router.push({ name: "user-edit" });
      // users/ 앞에 안붙여도됨
      this.$router.push({ path: `${this.searchId}/edit` });
    },
  },
};
</script>
