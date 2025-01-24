<template>
  <div class="flex items-center justify-center p-4">
    <ul>
      <EntryListItem
        v-for="(line, index) in lines"
        :key="index + line"
        :source="line"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import EntryListItem from "../components/EntryListItem.vue";
import { useSourceStore } from "../stores/source";

const router = useRouter();
const source = useSourceStore();
const lines = computed(() => source.text.split(/\r?\n/));

if (!source.text.length) {
  // If nothing was entered, odds are good someone came to this route manually.
  // Send them back to the homepage.
  router.replace("/");
}
</script>
