<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

const defaultTasks = [
  {
    id: "1",
    text: "Doctors Appointment",
    day: "March 5th at 2:30pm",
    reminder: true,
  },
  {
    id: "2",
    text: "Meeting with boss",
    day: "March 6th at 1:30pm",
    reminder: true,
  },
  {
    id: "3",
    text: "Food shopping",
    day: "March 7th at 2:00pm",
    reminder: false,
  },
];
const tasks = ref(defaultTasks);
const showAddTask = ref(false);

const toggleReminder = (id) => {
  tasks.value = tasks.value.map((task) =>
    task.id === id ? { ...task, reminder: !task.reminder } : task
  );
};

const toggleAddTask = () => {
  showAddTask.value = !showAddTask.value;
};

const addTask = (newTask) => {
  tasks.value = [...tasks.value, newTask];
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};
</script>

<template>
  <div class="container">
    <Header
      @on-click="toggleAddTask"
      :showAddTask="showAddTask"
      title="Task Tracker"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <p>* Double click to toggle reminder</p>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<style>
@import "./assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}

::selection {
  background: transparent;
}
::-moz-selection {
  background: transparent;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
