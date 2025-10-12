<template>
  <div id="how-it-works" class="relative">
    <BaseContainer>
      <GlowingTwo class="top-[5%] md:top-[12%]" />
      <div class="relative z-20">
        <h2
          class="text-title-sm md:text-title-xl text-white-background mb-[50px] md:mb-[200px] text-center"
        >
          How It Works
        </h2>

        <div
          class="flex justify-between flex-col items-center md:items-start md:flex-row flex-wrap gap-10"
        >
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="block flex flex-col items-center max-w-[337px] flex-1"
          >
            <img
              class="max-w-[106px] md:max-w-[279px] mx-auto"
              :src="step.image"
              :alt="step.title"
            />

            <!-- Заголовок одинаковой высоты -->
            <p
              class="title relative text-text-lg md:text-title-sm text-white-gradient mt-0 md:mt-6 leading-[96%] font-semibold min-h-[3em] flex items-center justify-center text-center md:text-left"
            >
              {{ step.title }}
            </p>

            <p
              class="text-text md:text-text-md md:mt-2 text-center md:text-left"
            >
              {{ step.text }}
            </p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import ufo from "/assets/images/ufo.png";
import engine from "/assets/images/engine.png";
import box from "/assets/images/box.png";

const steps = [
  {
    image: ufo,
    title: "OFW sends PHPR",
    text: "through a licensed exchange or partner abroad",
  },
  {
    image: engine,
    title: "Family in PH receives PHPR",
    text: "instantly in their VExchange or partner wallet",
  },
  {
    image: box,
    title: "Redeem for PHP",
    text: "at face value through VBank or payout partners",
  },
];
</script>

<style scoped>
@media (min-width: 1024px) {
  .block:not(:last-of-type) .title::after {
    content: "";
    position: absolute;
    width: 159px;
    background-image: url("/assets/images/line.svg");
    height: 3px;
    left: 100%;
  }
}
</style>
