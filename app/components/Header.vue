<template>
  <BaseContainer>
    <header
      class="header px-6 lg:px-10 py-4 bg-foreground/70 text-white rounded-md md:rounded-lg border-white-10 flex items-center justify-between backdrop-blur-[30px] relative"
    >
      <!-- Лого -->
      <div class="flex-shrink-0">
        <img
          src="/assets/images/logo-header.svg"
          alt="Logo"
          class="w-[90px] lg:w-[125px] mt-[-5px]"
        />
      </div>

      <!-- Десктопное меню -->
      <nav
        class="hidden lg:flex items-center text-whiteFaded font-medium gap-6 transition-all"
      >
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

      <!-- Мобильное меню (иконка) -->
      <button
        class="lg:hidden flex flex-col gap-[5px] focus:outline-none"
        @click="toggleMenu"
      >
        <span
          class="block w-6 h-[2px] bg-white transition-all duration-300"
          :class="{ 'rotate-45 translate-y-[7px]': isOpen }"
        ></span>
        <span
          class="block w-6 h-[2px] bg-white transition-all duration-300"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span
          class="block w-6 h-[2px] bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-[7px]': isOpen }"
        ></span>
      </button>

      <!-- Кнопка справа -->
      <button
        ref="btnRef"
        class="hidden lg:block bg-accent text-background px-7 py-3 rounded-md text-menu-sm font-medium transition-transform transition-opacity duration-300 ease-out hover:opacity-90 hover:scale-[1.12]"
      >
        Get Started
      </button>

      <!-- Выпадающее мобильное меню -->
      <transition name="slide-fade">
        <nav
          v-if="isOpen"
          class="absolute top-full mt-[10px] rounded-t-md left-0 w-full bg-foreground/95 backdrop-blur-xl rounded-b-lg flex flex-col items-center py-6 text-whiteFaded font-medium gap-4 z-50"
        >
          <template v-for="(item, index) in menuItems" :key="index">
            <a :href="item.href" class="text-menu-sm" @click="closeMenu">{{
              item.name
            }}</a>
          </template>
          <button
            class="bg-accent text-background px-6 py-2 rounded-md text-menu font-medium hover:opacity-90 transition"
            @click="closeMenu"
          >
            Get Started
          </button>
        </nav>
      </transition>
    </header>
  </BaseContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";

const isOpen = ref(false);
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

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function closeMenu() {
  isOpen.value = false;
}

onMounted(async () => {
  await nextTick();

  // Hover через GSAP
  btnRef.value?.addEventListener("mouseenter", () => {
    gsap.to(btnRef.value, { scale: 1.09, duration: 0.3, ease: "power1.out" });
  });
  btnRef.value?.addEventListener("mouseleave", () => {
    gsap.to(btnRef.value, { scale: 1, duration: 0.3, ease: "power1.out" });
  });

  // Анимация появления меню
  gsap.from(menuRefs.value, {
    x: -50,
    opacity: 0,
    duration: 0.2,
    ease: "power2.out",
    stagger: 0.06,
    onComplete: () => {
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

<style scoped>
/* Плавное появление мобильного меню */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
