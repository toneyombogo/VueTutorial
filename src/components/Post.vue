<template>
  <div>
    <button @click="clearPosts()">
      Clear Posts
    </button>
    <button @click="refreshPosts">
      refresh
    </button>
    <table>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Post Id</th>
          <th>Post Title</th>
          <th>Post Body</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="post in posts"
          :key="post.id"
        >
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <button @click="deletePost(post.id )">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    posts: function() {
      return this.$store.getters.posts;
    }
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  methods: {
    deletePost(postId) {
      this.$store.dispatch("deteteData", postId);
    },
    clearPosts() {
      this.$store.dispatch("clearPosts");
    },
    refreshPosts() {
      this.$store.dispatch("fetchData");
    }
  }
};
</script>
<style>
</style>
