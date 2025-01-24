<template>
  <form @submit.prevent="onSubmit">
    <textarea
      ref="textarea"
      v-model.trim="text"
      class="textarea textarea-bordered min-h-64 w-full max-w-lg text-base placeholder:text-gray-500"
      :class="{ 'textarea-error': error }"
      placeholder='Enter or paste Korean text (한글) here and click "Convert"'
    ></textarea>
    <div class="mt-4">
      <button class="btn btn-neutral mr-4 w-24" @click.prevent="onClearClick">
        Clear
      </button>
      <button class="btn btn-primary w-24">Convert</button>
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

function onClearClick() {
  text.value = "";
  textarea.value?.focus();
}
</script>
