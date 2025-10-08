<template>
  <div class="mt-10 min-h-[300px] rounded-xl transition-all">
    <p class="text-white-gradient text-title-xl leading-[113%]">
      {{ activeTab.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeTab: { title: string; text: string };
}>();
</script>
