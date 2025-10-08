<template>
  <section ref="section" class="relative min-h-[300vh] bg-[#171717] text-white">
    <!-- sticky контейнер -->
    <div
      ref="sticky"
      class="sticky top-0 h-screen flex flex-col justify-center items-center"
    >
      <h2 class="text-title-xl font-bold mb-12">How it works</h2>

      <!-- Прогресс бар -->
      <div
        class="w-full max-w-[800px] h-3 bg-[#2a2a2a] rounded-full overflow-hidden"
      >
        <div
          class="h-full bg-accent transition-all duration-300 ease-linear"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>

      <!-- Шаги -->
      <div
        class="flex justify-between text-sm text-mainFaded mt-6 w-full max-w-[800px]"
      >
        <span v-for="i in 5" :key="i" class="text-center w-[20%]">
          Step {{ i }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const section = ref<HTMLElement | null>(null);
const progress = ref(0);

const handleScroll = () => {
  if (!section.value) return;

  const rect = section.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // высчитываем, какая часть секции проскроллена
  const totalScroll = rect.height - windowHeight;
  const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

  progress.value = (scrolled / totalScroll) * 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.text-title-xl {
  font-size: 48px;
  line-height: 1.1;
}

.bg-accent {
  background: linear-gradient(90deg, #ff5b2e 0%, #ffc107 100%);
}
</style>
