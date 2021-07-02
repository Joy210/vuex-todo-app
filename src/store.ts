import Vue from "vue";
import Vuex from "vuex";
// import TodoModel from "./models/TodoModel";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   todos: Array<TodoModel>(),
  // },
  // mutations: {
  //   addTodo(state, todoModel: TodoModel) {
  //     state.todos.push(todoModel);
  //   },
  // },
  // actions: {
  //   addToDo(context, todoModel: TodoModel) {
  //     return new Promise<void>((resolve, reject) => {
  //       context.commit("addToDo", todoModel);
  //       resolve();
  //     });
  //   },
  // },

  state: {
    todos: [
      {
        name: "Todo item 1",
        isCompleted: false,
      },
      {
        name: "Todo item 2",
        isCompleted: false,
      },
      {
        name: "Todo item 3",
        isCompleted: true,
      },
      {
        name: "Todo item 4",
        isCompleted: false,
      },
      {
        name: "Todo item 5",
        isCompleted: true,
      },
    ],
  },

  getters: {
    completedTodos(state) {
      return state.todos.filter((item) => item.isCompleted == true).length;
    },

    pendingTodos(state) {
      return state.todos.filter((item) => item.isCompleted == false).length;
    },
  },

  mutations: {
    NEW_TODO(state, payload) {
      state.todos.push({
        name: payload,
        isCompleted: false,
      });
    },

    DELETE_TODO(state, payload) {
      const todoIndex = state.todos.indexOf(payload);
      state.todos.splice(todoIndex, 1);
    },

    TODO_STATUS(state, payload) {
      payload.isCompleted = !payload.isCompleted;
    },
  },

  actions: {
    addTodo({ commit }, payload) {
      commit("NEW_TODO", payload);
    },

    deleteTodo({ commit }, payload) {
      commit("DELETE_TODO", payload);
    },

    todoStatus({ commit }, payload) {
      commit("TODO_STATUS", payload);
    },
  },
});
