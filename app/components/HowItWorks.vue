<template>
  <BaseContainer>
    <h2 class="text-title-xl text-white-background mb-[200px]">How It Works</h2>

    <div class="flex justify-between flex-wrap gap-10">
      <div
        v-for="(step, i) in steps"
        :key="i"
        class="block flex flex-col items-center max-w-[337px] flex-1"
      >
        <img
          class="max-w-[279px] mx-auto"
          :src="step.image"
          :alt="step.title"
        />

        <!-- Заголовок одинаковой высоты -->
        <p
          class="title relative text-title-sm text-white-gradient mt-6 leading-[96%] font-semibold min-h-[3em] flex items-center justify-center"
        >
          {{ step.title }}
        </p>

        <p class="text-text-md mt-2">{{ step.text }}</p>
      </div>
    </div>
  </BaseContainer>
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
.block:not(:last-of-type) .title::after {
  content: "";
  position: absolute;
  width: 159px;
  background-image: url("/assets/images/line.svg");
  height: 3px;
  left: 100%;
}
</style>
