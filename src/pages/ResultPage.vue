<template>
  <div class="flex items-center justify-center p-8">
    <ul>
      <EntryItem
        v-for="(entry, index) in source.entries"
        :key="index + entry"
        :source="entry"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import EntryItem from "../components/EntryListItem.vue";
import { useSourceStore } from "../stores/source";

const router = useRouter();
const source = useSourceStore();

if (!source.text.length) {
  // If nothing was entered, odds are good someone came to this route manually.
  // Send them back to the homepage.
  router.replace("/");
}
</script>
