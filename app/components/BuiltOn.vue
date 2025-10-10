<template>
  <BaseContainer>
    <section class="relative mt-[57px] md:mt-[117px] z-20 overflow-hidden">
      <div
        class="above relative bg-foreground rounded-md md:rounded-xl pt-[32px] md:pt-[82px] pb-[52px] md:pb-[152px] px-[25px] md:px-[107px] z-30"
      >
        <!-- <img
          class="absolute top-0 right-0 max-w-[605px]"
          src="/assets/images/venom.png"
          alt=""
        /> -->
        <img
          ref="grid"
          class="absolute top-0 right-0 md:max-w-[630px] z-1"
          src="/assets/images/grid.png"
          alt=""
        />
        <img
          class="absolute top-0 right-0 max-w-[205px] md:max-w-[505px] z-2"
          src="/assets/images/venom-plus.png"
          alt=""
        />

        <h2
          class="title relative z-10 text-white-gradient text-title-sm md:text-title-xl"
        >
          Built on Venom
        </h2>
        <p
          class="relative z-10 text-text-sm md:text-text-md text-white mt-[24px] max-w-[780px]"
        >
          Built on Venom (Layer-0), PHPR settles in seconds with tiny fees,
          on-chain mint/burn transparency, and PoS+BFT security - speed, cost,
          and transparency traditional money transfers can’t match.
        </p>
        <img
          class="max-w-[220px] md:max-w-[350px] mt-[50px]"
          src="/assets/images/bro.png"
          alt=""
        />
        <div
          class="border-t border-white mt-[36px] md:mt-[66px] pt-[26px] md:pt-[66px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0] md:gap-[10%]"
        >
          <FeatureCard
            v-for="(feature, i) in features"
            :key="i"
            :title="feature.title"
            :text="feature.text"
          />
        </div>
      </div>
      <div
        ref="below"
        class="below bg-[#fff] mt-[-70px] pt-[110px] md:pt-[140px] pb-[50px] px-[25px] md:px-[107px] rounded-md md:rounded-xl"
      >
        <h2
          class="title text-background text-title-sm md:text-title-xl font-semibold leading-[106%]"
        >
          What this means for users:
        </h2>
        <div
          class="relative flex flex-col md:flex-row justify-between md:gap-[10%] mt-[10px] md:mt-[30px]"
        >
          <div
            class="line hidden md:block absolute w-full top-[42px] h-[1px] bg-background"
          ></div>
          <MeaningCard
            v-for="(meaning, i) in meanings"
            :key="i"
            :title="meaning.title"
            :text="meaning.text"
          />
        </div>
      </div>
    </section>
  </BaseContainer>
</template>

<script setup lang="ts">
import FeatureCard from "@/components/FeatureCard.vue";
import MeaningCard from "@/components/MeaningCard.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Layer-0 scale",
    text: "Parallel processing (sharding) for high throughput and fast finality.",
  },
  {
    title: "Low fees ",
    text: "Transfers cost a tiny fraction of a peso; perfect for frequent, small payments.",
  },
  {
    title: "Transparent by design ",
    text: "On-chain events for mint, burn, and circulation; public supply tracking.",
  },
  {
    title: "Operational safeguards ",
    text: "Ability to pause in emergencies and freeze illicit addresses when legally required.",
  },
  {
    title: "Remittance-ready UX ",
    text: "Works with common wallets; listed on VExchange for easy access and liquidity.",
  },
];
const meanings = [
  { title: "Faster transfers", text: "seconds, not days" },
  { title: "Lower costs", text: "keep more of every remittance" },
  {
    title: "Clear trust signals",
    text: "every token action is visible on-chain",
  },
];

const below = ref<HTMLElement | null>(null);
const grid = ref<HTMLImageElement | null>(null);

onMounted(() => {
  gsap.from(below.value, {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: below.value,
      start: "top 80%", // когда верх блока достигает 80% высоты экрана
      toggleActions: "play none none reverse",
    },
  });

  gsap.fromTo(
    grid.value,
    { y: 120 },
    {
      y: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: grid.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5, // плавная инерция
      },
      delay: 0.1,
    }
  );
});
</script>
