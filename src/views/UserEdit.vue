<template>
  <div>
    <h1>USER EDIT</h1>
    {{ searchId }}
  </div>
</template>
<script>
export default {
  computed: {
    searchId() {
      return this.$route.params.id;
    },
  },
};
</script>
