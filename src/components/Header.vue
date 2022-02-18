<script setup>
import Button from "./Button.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  showAddTask: Boolean,
});
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @on-click="$emit('on-click')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
