<template>
  <div class="container">
    <TodoItem
      class="border mb-2"
      v-for="(todo, index) in todos"
      :key="todo.name"
      :todo="todo"
      :index="index + 1"
    />
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import { mapState } from "vuex";

export default {
  components: { TodoItem },

  computed: {
    ...mapState({
      todos: "todos",
    }),
  },
};
</script>

<style scoped></style>
