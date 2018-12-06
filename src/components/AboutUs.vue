<template>
  <h2>
    this is About us Page

    <button>Go Back</button>
  </h2>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
</style>
