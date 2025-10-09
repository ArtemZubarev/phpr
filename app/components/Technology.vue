<template>
  <section ref="section" class="relative">
    <!-- Блок с прогрессбаром и слайдами -->
    <div ref="block" class="w-full text-white py-10 px-6">
      <BaseContainer>
        <div
          class="inner relative min-h-[600px] z-10 bg-foreground rounded-xl py-[82px] px-[107px]"
        >
          <h2 class="text-title-xl font-semibold mb-16">
            Technology & Security
          </h2>

          <!-- Прогрессбар -->
          <div
            class="relative h-[6px] w-full bg-[#3D3D3D] rounded-full mb-6 progress-bar"
          >
            <div
              class="h-full bg-accent"
              :style="{ width: progress + '%' }"
            ></div>

            <MileStone
              v-for="milestone in milestones"
              :key="milestone.point"
              :progress="milestone.point"
              :icon="milestone.icon"
              :active="progress >= milestone.point"
            />
          </div>

          <!-- Слайды -->
          <div class="">
            <div
              v-for="(slide, i) in slides"
              :key="i"
              :class="{ block: step === i + 1, hidden: step !== i }"
              class="transition-opacity duration-300 text-lg mb-2"
            >
              <p class="mt-[82px] text-title-sm font-semibold">
                {{ slide.title }}
              </p>
              <p
                class="mt-[23px] text-text-lg max-w-[820px] font-thin leading-[96%]"
              >
                {{ slide.text }}
              </p>
            </div>
          </div>
        </div>
      </BaseContainer>
      <img
        class="absolute w-full left-0 bottom-[100px]"
        src="/assets/images/benefits-bg.png"
        alt=""
      />
      <img
        class="absolute w-full h-[200px] left-0 bottom-[-80px]"
        src="/assets/images/technology-bg.png"
        alt=""
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import vu from "/assets/images/vu.svg";
import IconV from "./icons/IconV.vue";
import Qr from "./icons/Qr.vue";
import IconW from "./icons/IconW.vue";
import IconShield from "./icons/IconShield.vue";

gsap.registerPlugin(ScrollTrigger);

const block = ref<HTMLElement | null>(null);

const progress = ref(0);
const step = ref(0);
const milestones = [
  { point: 16.5, icon: IconV },
  { point: 42.5, icon: Qr },
  { point: 70.5, icon: IconW },
  { point: 100, icon: IconShield },
];
const slides = [
  {
    title: "Venom Blockchain:",
    text: "A fast, scalable, permissioned ledger with a hybrid PoS/BFT consensus that processes transactions in parallel.",
  },
  {
    title: "Smart Contracts:",
    text: "Govern the minting and redemption of PHPR, making supply changes transparent on-chain.",
  },
  {
    title: "1:1 Escrow Reserves:",
    text: "Funds are held in PHP at VBank and verified monthly; reserve reports are published openly.",
  },
  {
    title: "AML & KYC:",
    text: "Users are onboarded through regulated partners; anti‑fraud and anti‑money‑laundering safeguards protect the ecosystem.",
  },
];
const STEPS = slides.length;

onMounted(() => {
  if (!block.value) return;

  gsap.to(
    {},
    {
      scrollTrigger: {
        trigger: block.value,
        start: "center center",
        end: `+=${window.innerHeight * 2}`,
        scrub: 0.2,
        pin: true,
        onUpdate: (self) => {
          progress.value = self.progress * 100;

          // Найдем текущий шаг по milestones
          let currentStep = 0;
          for (let i = 0; i < milestones.length; i++) {
            if (progress.value >= milestones[i]!.point) {
              currentStep = i;
            } else {
              break;
            }
          }
          step.value = currentStep;
        },
      },
    }
  );
});
</script>

<style scoped>
.progress-bar::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 46px;
  background-color: #2addc0; /* цвет черточки */
  left: 0px; /* позиция по горизонтали */
  top: -20px;
  border-radius: 1px;
  z-index: 8;
}
</style>
