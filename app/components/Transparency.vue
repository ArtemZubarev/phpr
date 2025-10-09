<template>
  <div class="relative">
    <BaseContainer>
      <section class="transparency z-10 pt-[200px]">
        <h2 class="text-title-xl font-semibold mb-16">Transparency</h2>

        <div class="flex justify-between gap-[40px]">
          <!-- Левая часть -->
          <div class="text max-w-[919px]">
            <p class="text-[28px]">
              PHPR’s stability and trust come from full transparency. VBank
              publishes monthly proof-of-reserve reports and commissions
              independent audits. The smart contracts that mint and burn tokens
              are visible on-chain, and clear redemption terms ensure that PHPR
              can always be exchanged for pesos at face value.
            </p>
          </div>

          <!-- Вертикальный разделитель -->
          <div class="w-[4px] bg-[#FFFFFF80]"></div>

          <!-- Правая часть -->
          <div class="flex flex-col gap-[47px]">
            <div
              v-for="item in list"
              :key="item"
              class="item flex gap-[28px]"
              ref="itemsRef"
            >
              <img
                class="w-[36px] h-[36px]"
                src="/assets/images/tick.svg"
                alt=""
              />
              <p class="text-text-md">{{ item }}</p>
            </div>
          </div>
        </div>
      </section>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const list = [
  "Monthly Proof-of-Reserve reports",
  "Independent audits",
  "Clear redemption and usage terms",
];

const itemsRef = ref<HTMLDivElement[]>([]);

onMounted(() => {
  gsap.from(itemsRef.value, {
    y: 40, // смещение снизу
    opacity: 0, // из прозрачности
    duration: 0.8, // длительность анимации
    ease: "power2.out",
    stagger: 0.2, // появление по очереди
    scrollTrigger: {
      trigger: itemsRef.value[0],
      start: "top 85%", // когда первый элемент почти в зоне видимости
      toggleActions: "play none none reverse",
    },
  });
});
</script>
