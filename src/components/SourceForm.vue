<template>
  <form @submit.prevent="onSubmit">
    <textarea
      ref="textarea"
      v-model.trim="text"
      :autofocus="true"
      class="textarea textarea-bordered min-h-64 w-full max-w-lg"
      :class="{ 'textarea-error': error }"
    ></textarea>
    <div class="pt-4">
      <button class="btn btn-primary">Let's Go!</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

const emit = defineEmits<{
  submit: [];
}>();

const text = defineModel<string>("text", {
  required: true,
});

const error = ref(false);
const textarea = useTemplateRef("textarea");

function onSubmit() {
  if (!text.value.length) {
    error.value = true;
    textarea.value?.focus();
  } else {
    error.value = false;
    emit("submit");
  }
}
</script>
