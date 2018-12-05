<template>
  <tr>
    <td>{{ todo.name|upperCaseFilter }}</td>
    <td>{{ todo.description }}</td>
    <td>{{ todo.date }}</td>
    <td>
      <button @click="deleteTodo()">
        Delete
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  filters: {
    upperCaseFilter(value) {
      return value.toUpperCase();
    }
  },
  props: {
    todo: {
      type: Object,
      default: null
    },
    order: {
      type: String,
      default: null
    }
  },
  methods: {
    deleteTodo() {
      alert("Todo Delete" + this.order);
    }
  }
};
</script>

<style>
</style>
