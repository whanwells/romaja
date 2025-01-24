<template>
  <div class="flex min-h-screen min-w-full items-center justify-center">
    <div class="grow text-center">
      <h1 class="text-5xl font-bold">Romaja Me!</h1>
      <p class="my-4">
        Enter or paste the 한글 (han-geul)<br />
        you'd like to romanize below to get started.
      </p>
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
