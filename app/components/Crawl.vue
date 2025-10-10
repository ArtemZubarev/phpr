<template>
  <div
    class="relative overflow-hidden w-full py-2 crawl-container my-[30px] md:my-[90px] z-10"
  >
    <!-- Бегущая строка -->
    <div class="flex animate-marquee gap-20">
      <span
        class="text-text-lg md:text-title-lg text-white-gradient font-semibold whitespace-nowrap"
      >
        {{ text }}
      </span>
      <span
        class="text-text-lg md:text-title-lg text-white-gradient font-semibold whitespace-nowrap"
      >
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 10s linear infinite;
}

/* Градиенты по бокам через псевдоэлементы */
.crawl-container::before,
.crawl-container::after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 14rem; /* ширина затенения */
  pointer-events: none;
  z-index: 10;
}

@media (min-width: 1024px) {
  .crawl-container::before {
    left: 0;
    background: linear-gradient(to right, #171717, transparent);
  }

  .crawl-container::after {
    right: 0;
    background: linear-gradient(to left, #171717, transparent);
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
}
</style>
