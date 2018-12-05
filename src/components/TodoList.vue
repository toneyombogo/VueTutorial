<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Date</th>
        <th />
      </tr>
    </thead>
 
    <tbody>
      <tr
        is="Todo"
        v-for="(todoItem,index) in todoList"
        :key="index"
        :order="index"
        :todo="todoItem"
      />
    </tbody>
  </table>
</template>
<script>
import Todo from "./Todo";
export default {
  components: {
    Todo
  },
  data() {
    return {
      todoList: [
        {
          name: "Attend Wedding",
          description: "Tonneys wedding Sda Umaja",
          date: new Date()
        },
        {
          name: "Attend Bash",
          description: "Tonneys wedding Sda Umaja",
          date: new Date()
        },
        {
          name: "Attend Schol Meeeting",
          description: "Tonneys wedding Sda Umaja",
          date: new Date()
        }
      ]
    };
  }
};
</script>
<style>
</style>
