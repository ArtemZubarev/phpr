<template>
  <div class="py-6 rounded-lg text-main transition-colors">
    <img class="relative z-10" :src="m2" alt="" />
    <h3 class="text-text-md text-background font-semibold mt-4 mb-1">
      {{ title }}
    </h3>
    <p class="text-background font-normal text-text-md">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import m2 from "@/assets/images/m-2.svg";

defineProps<{
  title: string;
  text: string;
}>();
</script>
