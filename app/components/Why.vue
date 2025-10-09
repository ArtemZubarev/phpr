<template>
  <div class="relative">
    <BaseContainer>
      <section class="relative why pt-[230px] pb-[150px] z-10">
        <h2 class="text-title-xl text-white-gradient mb-10">Why PHPR?</h2>

        <!-- Компонент переключения -->
        <TabsSwitcher v-model="activeIndex" :tabs="tabs" />

        <!-- Контент активного таба -->
        <TabsContent :activeTab="tabs[activeIndex]" />
      </section>
    </BaseContainer>

    <img
      ref="img1"
      class="absolute right-0 bottom-[-150px] w-[402px]"
      src="/assets/images/1.png"
      alt=""
    />
    <img
      ref="img2"
      class="absolute left-0 top-0 w-[252px]"
      src="/assets/images/2.png"
      alt=""
    />
    <img
      ref="img3"
      class="absolute right-[20%] top-[-80px] w-[252px]"
      src="/assets/images/3.png"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TabsSwitcher from "@/components/TabSwitcher.vue";
import TabsContent from "@/components/TabContent.vue";

gsap.registerPlugin(ScrollTrigger);

const img1 = ref<HTMLImageElement | null>(null);
const img2 = ref<HTMLImageElement | null>(null);
const img3 = ref<HTMLImageElement | null>(null);

const tabs = [
  {
    title: "Always ₱1",
    text: "PHPR - Licensed Digital Peso for Quick Remittances",
  },
  {
    title: "Fast & Low-Cost",
    text: "Designed for Online Filipino Workers and their families.",
  },
  {
    title: "Fully Backed",
    text: "Escrowed reserves in PHP at regulated banks ensure every token is supported.",
  },

  {
    title: "Transparent",
    text: "Monthly reserve reports, auditable on-chain.",
  },
  {
    title: "Accessible",
    text: "Easy to send and receive, even without a bank account.",
  },
  {
    title: "No Speculation",
    text: "Purely utilitarian, no “moon” hype, no yield risks.",
  },
];

const activeIndex = ref(0);

onMounted(() => {
  const layers = [
    { el: img1.value, y: -120, delay: 0.1 },
    { el: img2.value, y: 200, delay: 0.2 },
    { el: img3.value, y: 50, delay: 0.05 },
  ];

  layers.forEach(({ el, y, delay }) => {
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 0 },
      {
        y,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5, // плавная инерция
        },
        delay,
      }
    );
  });
});
</script>
