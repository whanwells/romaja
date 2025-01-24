import { defineStore } from "pinia";
import { ref } from "vue";

export const useSourceStore = defineStore("source", () => {
  const text = ref("");
  return { text };
});
