<template>
  <div class="py-3 md:py-6 rounded-lg text-main transition-colors">
    <h3 class="text-text-md text-accent font-semibold mb-4">{{ title }}</h3>
    <p class="text-mainFaded text-text-sm md:text-text-md">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>();
</script>
