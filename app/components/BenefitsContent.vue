<template>
  <div class="mt-10 min-h-[200px] rounded-xl transition-all">
    <p
      class="text-background text-title-sm md:text-title-xl font-semibold leading-[113%]"
    >
      {{ activeTab.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeTab: { title: string; text: string };
}>();
</script>
