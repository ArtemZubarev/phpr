<template>
  <BaseContainer>
    <section class="mt-[117px]">
      <div class="above relative bg-foreground rounded-xl py-[82px] px-[107px]">
        <img
          class="absolute top-0 right-0 max-w-[605px]"
          src="/assets/images/venom.png"
          alt=""
        />
        <h2 class="title text-white-gradient text-title-xl">Built on Venom</h2>
        <p class="text-text-md text-white mt-[24px] max-w-[780px]">
          Built on Venom (Layer-0), PHPR settles in seconds with tiny fees,
          on-chain mint/burn transparency, and PoS+BFT security - speed, cost,
          and transparency traditional money transfers can’t match.
        </p>
        <img
          class="max-w-[350px] mt-[50px]"
          src="/assets/images/bro.png"
          alt=""
        />
        <div
          class="border-t border-white mt-[66px] pt-[66px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10%]"
        >
          <FeatureCard
            v-for="(feature, i) in features"
            :key="i"
            :title="feature.title"
            :text="feature.text"
          />
        </div>
      </div>
      <div class="below bg-[#fff] mt-[-70px] pt-[140px] px-[107px] rounded-xl">
        <h2 class="title text-background text-title-xl font-semibold">
          What this means for users:
        </h2>
        <div class="relative flex justify-between gap-[10%]">
          <div
            class="line absolute w-full top-[42px] h-[1px] bg-background"
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
</script>
