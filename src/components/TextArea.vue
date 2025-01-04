<template>
  <textarea
    v-model="model"
    class="h-full w-full rounded border border-gray-300 p-4"
  />
</template>

<script setup lang="ts">
const model = defineModel<string>();
</script>
