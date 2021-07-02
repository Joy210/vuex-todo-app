<template>
  <div class="">
    <div class="d-flex justify-content-between align-items-center w-md-50 p-2">
      <h5 class="text-left pointer w-100 mb-0" @click="todoStatus(todo)">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            :id="`customCheck_${index}`"
            v-model="todo.isCompleted"
          />
          <label
            :class="`custom-control-label  ${todo.isCompleted && 'completed'}`"
            :for="`customCheck_${index}`"
            >{{ index }}. {{ todo.name }}</label
          >
        </div>
      </h5>
      <button class="btn btn-danger btn-sm ml-3" @click="deleteTodo(todo)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["todo", "index"],

  methods: {
    ...mapActions({
      deleteTodo: "deleteTodo",
      todoStatus: "todoStatus",
    }),

    // deleteTodo() {
    //   this.$store.dispatch("deleteTodo", this.todo);
    // },

    // todoStatus() {
    //   this.$store.dispatch("todoStatus", this.todo);
    // },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

.pointer {
  cursor: pointer;
}
</style>
