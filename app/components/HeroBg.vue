<template>
  <div class="absolute inset-0 w-full h-full lg:block">
    <!-- Левая сторона -->
    <div
      ref="leftSide"
      class="absolute left-0 top-10 md:top-0 h-full w-[50%] flex flex-col justify-center"
    >
      <img
        src="/assets/images/left-back.svg"
        alt=""
        class="absolute max-w-[70%] md:max-w-[unset] left-[9%] top-[61px]"
      />
      <img
        src="/assets/images/left-front.svg"
        alt=""
        class="absolute max-w-[70%] md:max-w-[unset] left-[17%] top-[86px] md:top-[146px]"
      />
      <img
        src="/assets/images/left-logo.svg"
        alt=""
        class="absolute max-w-[50%] md:max-w-[unset] left-[30%] top-[100px] md:top-[220px]"
      />
    </div>

    <!-- Правая сторона -->
    <div
      ref="rightSide"
      class="absolute right-0 top-10 md:top-0 h-full w-[50%] flex flex-col justify-center"
    >
      <img
        src="/assets/images/right-back.svg"
        alt=""
        class="absolute max-w-[70%] md:max-w-[unset] right-[9%] top-[61px]"
      />
      <img
        src="/assets/images/right-front.svg"
        alt=""
        class="absolute max-w-[70%] md:max-w-[unset] right-[17%] top-[86px] md:top-[146px]"
      />
      <img
        src="/assets/images/right-logo.svg"
        alt=""
        class="absolute max-w-[50%] md:max-w-[unset] right-[26%] top-[100px] md:top-[220px]"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const leftSide = ref(null);
const rightSide = ref(null);

onMounted(() => {
  // Анимация левой стороны
  gsap.from(leftSide.value.querySelectorAll("img"), {
    x: -200, // выезжает слева
    y: -100, // сверху
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
  });

  // Анимация правой стороны
  gsap.from(rightSide.value.querySelectorAll("img"), {
    x: 200, // выезжает справа
    y: -100, // сверху
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.2, // лёгкое смещение во времени
  });
});
</script>
