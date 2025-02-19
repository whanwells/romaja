/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    // https://testing-library.com/docs/vue-testing-library/setup#vitest
    globals: true,
  },
});
