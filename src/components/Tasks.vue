<script setup>
import Task from "./Task.vue";
defineProps({
  tasks: Array,
});
defineEmits(["toggleReminder", "deleteTask"]);
</script>

<template>
  <ul :key="task.id" v-for="task in tasks">
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </ul>
</template>
