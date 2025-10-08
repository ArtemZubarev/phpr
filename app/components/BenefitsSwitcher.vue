<template>
  <div
    class="flex mt-10 justify-between gap-4 border-b-[3px] border-[#E0E0E0] pb-[32px]"
  >
    <button
      v-for="(tab, i) in tabs"
      :key="i"
      @click="$emit('update:modelValue', i)"
      class="button relative px-6 py-3 rounded-lg font-medium transition duration-300 w-full max-w-[245px]"
      :class="
        modelValue === i
          ? 'bg-accent text-background border border-transparent'
          : 'bg-[#E0E0E0] text-mainFaded hover:text-main hover:opacity-70'
      "
    >
      <span :class="modelValue === i ? 'text-background' : 'text-[#878787]'">
        {{ tab.title }}
      </span>

      <!-- Полоска под кнопкой -->
      <span
        class="absolute left-0 bottom-[-36px] w-full h-[3px] rounded-full transition-all duration-300 bg-[#E0E0E0]"
        :class="modelValue === i ? 'bg-accent' : 'bg-transparent'"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tabs: { title: string; text: string }[];
  modelValue: number;
}>();

defineEmits(["update:modelValue"]);
</script>
