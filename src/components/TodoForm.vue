<template>
  <div>
    <!-- :class="[
        'toast alert  w-50 mx-auto',
        !newItem == null ? 'alert-success' : 'alert-danger',
      ]" -->
    <div class="toast alert alert-info w-50 mx-auto shadow-lg" v-if="message">
      {{ message || "Default Toaster Message" }}
    </div>

    <form action="" class="">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="newItem"
          placeholder="Enter a value..."
        />
        <div class="input-group-append" id="button-addon4">
          <button
            class="btn btn-primary"
            type="button"
            @click.prevent="addNewTodo"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      message: "",
    };
  },

  methods: {
    addNewTodo() {
      const todoMatched = this.$store.state.todos.find(
        (todo) => todo.name == this.newItem
      );

      if (this.newItem == "") {
        this.alertMsg("Please enter a value!");
      } else if (todoMatched) {
        this.alertMsg("Todo already exists!");
      } else {
        this.$store.dispatch("addTodo", this.newItem);
        this.alertMsg("Todo added successfully!");
      }

      this.newItem = "";
    },

    alertMsg(msg) {
      this.message = msg;

      setTimeout(() => {
        this.message = "";
      }, 3000);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: slideFromBottom 1s;
}

@keyframes slideFromBottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}
</style>
