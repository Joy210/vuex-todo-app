<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <h1 class="my-5">Todo list</h1>

    <div class="box bg-light p-4 border mb-4">
      <div class="container">
        <div
          class="
            d-flex
            justify-content-md-between
            flex-column flex-md-row
            align-items-center
          "
        >
          <div class="d-flex mb-3 mb-md-0">
            <p class="bg-primary text-white py-2 px-3 rounded mb-0 mr-3">
              Compeleted
              <span class="badge badge-light ml-2">{{ completedTodos }}</span>
            </p>
            <p class="bg-danger text-white py-2 px-3 rounded mb-0">
              Pending
              <span class="badge badge-light ml-2">{{ pendingTodos }}</span>
            </p>
          </div>

          <TodoForm />
        </div>
      </div>
    </div>

    <TodosList />
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
import TodosList from "./components/TodosList.vue";
import TodoForm from "./components/TodoForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TodosList,
    TodoForm,
  },

  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>
