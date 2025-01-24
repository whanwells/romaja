<template>
  <div class="flex min-h-screen min-w-full items-center justify-center">
    <div class="grow text-center">
      <h1 class="mb-4 text-4xl font-bold text-primary">romaja.me</h1>
      <SourceForm v-model:text="source.text" @submit="onSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SourceForm from "../components/SourceForm.vue";
import { useSourceStore } from "../stores/source";

const router = useRouter();
const source = useSourceStore();

function onSubmit() {
  router.push("/results");
}
</script>
