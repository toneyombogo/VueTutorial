import axios from "axios";
const state = {
  comment: []
};

const mutations = {
  ADD_COMMENTS(state, newComments) {
    state.comments = newComments;
  }
};

const getters = {
  comments: state => state.comments
};

const actions = {
  fetchComments(store) {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        store.commit("ADD_COMMENTS", response.data);
      });
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
