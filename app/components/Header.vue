<template>
  <BaseContainer>
    <header
      class="header px-10 py-5 bg-foreground/70 text-white rounded-lg border-white-10 flex items-center justify-between backdrop-blur-[30px]"
    >
      <!-- Лого слева -->
      <div class="flex-shrink-0">
        <img
          src="/assets/images/logo-header.svg"
          alt="Logo"
          class="w-[125px] mt-[-5px]"
        />
      </div>

      <!-- Меню по центру -->
      <nav class="flex items-center text-whiteFaded font-medium gap-6">
        <template v-for="(item, index) in menuItems" :key="index">
          <a ref="menuRefs" :href="item.href">{{ item.name }}</a>
          <img
            v-if="index < menuItems.length - 1"
            src="/assets/images/arrow.svg"
            class="mx-2 w-[16px] h-[16px] mt-[1px]"
            alt=""
            ref="menuRefs"
          />
        </template>
      </nav>

      <!-- Кнопка справа -->
      <button
        ref="btnRef"
        class="bg-accent text-background px-7 py-3 rounded-md text-menu font-medium transition-transform transition-opacity duration-300 ease-out hover:opacity-90 hover:scale-[1.12]"
      >
        Get Started
      </button>
    </header>
  </BaseContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";

const menuRefs = ref<HTMLElement[]>([]);
const btnRef = ref<HTMLElement | null>(null);

const menuItems = [
  { name: "Home", href: "/" },
  { name: "PHPR", href: "#phpr" },
  { name: "Why PHPR", href: "#why-phpr" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Technology & Security", href: "#technology-security" },
  { name: "WP", href: "#wp" },
];

onMounted(async () => {
  await nextTick(); // ждём рендер

  btnRef.value?.addEventListener("mouseenter", () => {
    gsap.to(btnRef.value, { scale: 1.09, duration: 0.3, ease: "power1.out" });
  });

  btnRef.value?.addEventListener("mouseleave", () => {
    gsap.to(btnRef.value, { scale: 1, duration: 0.3, ease: "power1.out" });
  });

  // Анимация меню
  gsap.from(menuRefs.value, {
    x: -50,
    opacity: 0,
    duration: 0.2,
    ease: "power2.out",
    stagger: 0.06,
    onComplete: () => {
      // После меню анимируем кнопку
      if (btnRef.value) {
        gsap.fromTo(
          btnRef.value,
          { scale: 0.5, opacity: 0.5 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }
        );
      }
    },
  });
});
</script>
