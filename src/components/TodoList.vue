<template>
  <div>
    <div class="form-control">
      <label for="name">
        Name
      </label>
      <input
        id="name"
        v-model="newTodo.name"
        type="text"
        name=""
      >
    </div>
    <div class="form-control">
      <label for="name">
        Description
      </label>
      <input
        id="descrition"
        v-model="newTodo.description"
        type="text"
        name=""
      >
    </div>

    <div class="form-control">
      <label for="height">
        Height
      </label>
      <input
        id="name"
        v-model="rectangle.height"
        type="text"
        name=""
      >
    </div>
    <div class="form-control">
      <label for="name">
        width
      </label>
      <input
        id="descrition"
        v-model="rectangle.width"
        type="text"
        name=""
      >
      {{ area }}
    </div>
    {{ errormessage }}
    <button @click="addToDo">
      Add
    </button>
    <div>
      <button>Button</button>
    </div>
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
        >
          <td slot="deletebutton"> 
            <button @click="deleteTodo(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <slot />
  </div>
</template>
<script>
import Todo from "./Todo";
export default {
  components: {
    Todo
  },
  filters: {
    OrderByNameAsc(todoItemList) {
      return todoItemList.sort(function(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
  },
  data() {
    return {
      errormessage: "",
      rectangle: {
        height: 0,
        width: 0
      },
      newTodo: {},
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
          name: "Attend School Meeeting",
          description: "Tonneys wedding Sda Umaja",
          date: new Date()
        }
      ]
    };
  },
  computed: {
    area() {
      return this.rectangle.height * this.rectangle.width;
    }
  },
  watch: {
    "rectangle.height": function(newValue) {
      if (newValue > 10) {
        this.errormessage = "Invalid Value";
      } else {
        this.errormessage = "";
      }
    }
  },
  methods: {
    addToDo() {
      this.newTodo.date = new Date();
      this.todoList.push(this.newTodo);
      this.newTodo = {};
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    }
  }
};
</script>
<style>
</style>
