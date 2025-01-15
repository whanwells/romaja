<template>
  <textarea
    class="h-full w-full rounded border border-gray-300 p-4"
    :value="value"
    @input="onInput"
  />
</template>

<script setup lang="ts">
// We can't use `defineModel` since typing using a Korean keyboard may cause
// the following issue:
// https://github.com/vuejs/vue/issues/9777#issuecomment-478831263
defineProps<{
  value: string;
}>();

const emit = defineEmits<{
  input: [value: string];
}>();

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  emit("input", target.value);
}
</script>
