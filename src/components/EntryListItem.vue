<template>
  <li class="mb-4 w-full max-w-lg">
    <p class="text-gray-500">{{ source }}</p>
    <p>{{ result }}</p>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { romanize } from "../romanize";

const props = defineProps<{
  source: string;
}>();

const result = computed(() => romanize(props.source));
</script>
