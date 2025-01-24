import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useSourceStore = defineStore("source", () => {
  const text = ref("");
  const entries = computed(() => text.value.split(/\r?\n/));
  return { entries, text };
});
