<template>
  <div id="app">
    <TodoList>
      <h2>This testing slot Am trying to catch up</h2>
      <button slot="buttonslot">
        Button Named slot
      </button>
    </TodoList>
    <RouterLink to="/about-us">
      About Us
    </RouterLink>
    <RouterLink to="/contact-us">
      Contact Us
    </RouterLink>
    <RouterView />

    <button @click="goToAboutUs">
      GoToAboutUs
    </button>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: "App",
  components: {
    TodoList
  },
  methods: {
    goToAboutUs() {
      this.$router.push("/about-us");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
