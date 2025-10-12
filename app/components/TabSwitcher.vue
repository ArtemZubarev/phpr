<template>
  <div
    class="flex flex-wrap lg:flex-nowrap lg:flex-row md:justify-between gap-2 md:gap-4 border-b-[3px] border-white/40 pb-[32px]"
  >
    <button
      v-for="(tab, i) in tabs"
      :key="i"
      @click="$emit('update:modelValue', i)"
      class="button relative px-3 py-2 md:px-6 md:py-3 rounded-lg font-regular transition duration-300 md:w-full max-w-[245px]"
      :class="
        modelValue === i
          ? 'bg-accent-gradient text-background border border-transparent'
          : 'bg-tab-border text-mainFaded hover:text-main hover:bg-foreground/40'
      "
    >
      <span
        :class="modelValue === i ? 'text-background' : 'text-accent-gradient'"
      >
        {{ tab.title }}
      </span>

      <!-- Полоска под кнопкой -->
      <span
        class="absolute hidden md: block left-0 bottom-[-36px] w-full h-[3px] rounded-full transition-all duration-300"
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
