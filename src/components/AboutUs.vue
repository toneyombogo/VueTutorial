<template>
  <div>
    <h2>{{ bindtest }} </h2>
    <button>Go Back</button>
  </div> 
</template>
<script>
export default {
  data() {
    return {
      bindtest: "this is My Binding stest when Manu is not around"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
</style>
