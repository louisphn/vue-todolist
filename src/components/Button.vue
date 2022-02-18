<script setup>
defineProps({
  text: String,
  color: String,
});

const emits = defineEmits(["on-click"]);
const onClick = () => {
  emits("on-click");
};
</script>

<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>
