<template>
  <BaseContainer>
    <section
      class="hero relative bg-foreground rounded-lg md:rounded-xl mt-[20px] md:mt-[50px] px-[15px] pt-[40px] md:pt-[260px] pb-[60px] md:pb-[260px]"
    >
      <HeroBg />
      <div class="relative flex flex-col items-center justify-between z-20">
        <span
          ref="textEl"
          class="sign text-[10px] md:text-text-sm rounded-md px-4 md:px-10 md:mx-auto py-2 bg-background font-thin"
        ></span>
        <h1
          class="title text-white-gradient text-center text-title md:text-title-xl leading-[110%] md:leading-[96%] font-semibold mt-[50px]"
        >
          PHPR - Licensed Digital <br />
          Peso for Quick Remittances
        </h1>
        <h2
          class="mt-[28px] text-[18px] text-center md:text-[24px] text-whiteFaded font-light"
        >
          Send, receive, and withdraw Pesos instantly.
        </h2>
        <div class="buttons flex gap-[15px] md:gap-[25px] mt-[32px]">
          <button
            class="bg-accent-gradient text-background px-4 md:px-9 py-2 md:py-4 rounded-sm hover:opacity-90 transition text-menu font-medium"
          >
            Get started
          </button>
          <button
            class="border-accent rounded-sm bg-[#2c2c2c] text-accent px-4 md:px-9 py-2 md:py-4 hover:opacity-90 transition text-menu font-medium"
          >
            White Paper
          </button>
        </div>
      </div>
      <Glowing class="bottom-[2%] md:bottom-[5%]" />
    </section>
  </BaseContainer>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const textEl = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!textEl.value) return;

  gsap.to(textEl.value, {
    duration: 1, // общая длительность набора текста
    text: "The Future of Smart Blockchain Technology",
    ease: "none",
  });
});
</script>
<style scoped>
.sign {
  border: 1px solid rgba(255, 255, 255, 0.55);
  /* background: linear-gradient(
    0deg,
    rgba(35, 35, 35, 0.18) -97.06%,
    rgba(84, 84, 84, 0.18) 56.7%,
    rgba(35, 35, 35, 0.18) 197.06%
  ); */

  background: linear-gradient(263deg, #fff -2.14%, #14daba 106.41%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
