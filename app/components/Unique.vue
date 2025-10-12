<template>
  <div class="relative">
    <BaseContainer>
      <section
        class="unique relative z-10 pt-[60px] md:pt-[130px] pb-[40px] md:pb-[160px]"
      >
        <h2
          class="text-title-sm md:text-title-xl text-center text-white-background font-semibold"
        >
          Why It’s Unique
        </h2>
        <div class="flex justify-center">
          <div
            class="relative mt-[34px] mb-[50px] text-[12px] md:text-text-sm rounded-md px-4 md:px-10 py-3 rounded-xl text-center font-medium transition duration-300 bg-tab-border text-mainFaded hover:text-main hover:bg-foreground/40"
          >
            <span class="text-accent-gradient">
              Unlike stablecoins or speculative tokens, PHPR is:
            </span>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row flex-col justify-between gap-[28px]"
        >
          <div
            v-for="(block, i) in blocks"
            :key="i"
            ref="animatedBlocks"
            class="block bg-[#F3F3F3] rounded-md md:rounded-xl max-[489px] w-full py-[30px] pl-[25px] pr-[12px] md:pl-[43px] md:pr-[24px]"
          >
            <img
              class="mb-[12px] md:mb-[24px] w-[43px] h-[43px]"
              :src="block.image"
              alt=""
            />
            <h3
              class="text-title md:text-title-sm text-background mb-[9px] leading-[120%]"
            >
              {{ block.title }}
            </h3>
            <p class="text-text-md md:text-text-md text-background">
              {{ block.text }}
            </p>
          </div>
        </div>
      </section>
    </BaseContainer>
    <!-- <img
      class="absolute w-full left-0 bottom-0"
      src="/assets/images/benefits-bg.png"
      alt=""
    /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wallet from "/assets/images/wallet.svg";
import shield from "/assets/images/shield.svg";
import pp from "/assets/images/pp.svg";

gsap.registerPlugin(ScrollTrigger);

const animatedBlocks = ref<HTMLDivElement[]>([]);

const blocks = [
  {
    image: wallet,
    title: "Not an investment",
    text: "No yield, no price swings",
  },
  {
    image: shield,
    title: "Not misused",
    text: "Escrow reserves cannot be reinvested or diverted",
  },
  {
    image: pp,
    title: "Built for one purpose",
    text: "Practical, low-cost remittance",
  },
];

onMounted(() => {
  gsap.from(animatedBlocks.value, {
    y: 80,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    stagger: 0.25, // последовательное появление
    scrollTrigger: {
      trigger: animatedBlocks.value[0],
      start: "top 80%", // когда первый блок в зоне видимости
    },
  });
});
</script>
