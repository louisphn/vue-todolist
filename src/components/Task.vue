<script setup>
defineProps({
  task: Object,
});
defineEmits(["toggleReminder", "deleteTask"]);
</script>

<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <font-awesome-icon
        @click="$emit('delete-task', task.id)"
        class="fas"
        icon="xmark"
      />
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<style scope>
.fas {
  color: red;
}
.task {
  background: #343434;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
