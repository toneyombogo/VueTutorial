import Vuex from "vuex";
import axios from "axios";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    ADD_POSTS(state, newPosts) {
      state.posts = newPosts;
    },

    DELETE_POST(state, postId) {
      state.posts = state.posts.filter(post => post.id !== postId);
    },
    CLEAR_POSTS(state) {
      state.posts = [];
    }
  },
  getters: {
    posts: state => state.posts
  },
  actions: {
    fetchData(store) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          store.commit("ADD_POSTS", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deteteData(store, postId) {
      store.commit("DELETE_POST", postId);
    },
    clearPosts(store) {
      store.commit("CLEAR_POSTS");
    }
  }
});
