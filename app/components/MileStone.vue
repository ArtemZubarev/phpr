<template>
  <div
    class="milestone text-accent flex justify-center items-center w-[48px] h-[48px] rounded-[50%] top-[-21px] absolute z-10 overflow-hidden"
    :style="{ left: `${progress}%` }"
    :class="active ? 'bg-accent' : 'bg-[#3D3D3D]'"
  >
    <component
      :is="icon"
      :class="active ? 'text-background' : 'text-[#7C7C7C]'"
      class=""
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ progress: number; icon: any; active: boolean }>();
</script>
