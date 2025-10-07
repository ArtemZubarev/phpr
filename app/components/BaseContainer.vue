<template>
  <div class="mx-auto w-full px-4" :style="{ maxWidth: maxWidth ?? '1520px' }">
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  /** Максимальная ширина контейнера, например '1200px', '90%' */
  maxWidth: String,
});
</script>

<style scoped>
/* Можно добавить глобальные отступы, если нужно */
</style>
