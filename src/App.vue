<template>
  <div class="text-center">
    <FormLabel for="hangeul">Korean Text</FormLabel>
    <TextArea id="hangeul" autofocus :value="source" @input="onSourceInput" />
  </div>
  <div class="text-center">
    <FormLabel for="results">Results</FormLabel>
    <TextArea id="results" readonly :value="result" :tabindex="-1" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import FormLabel from "./components/FormLabel.vue";
import TextArea from "./components/TextArea.vue";
import romanize from "./romanize";

const source = ref("");
const result = computed(() => romanize(source.value));

function onSourceInput(value: string) {
  source.value = value;
}
</script>
