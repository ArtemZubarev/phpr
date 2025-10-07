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
          <a :href="item.href">{{ item.name }}</a>
          <img
            v-if="index < menuItems.length - 1"
            src="/assets/images/arrow.svg"
            class="mx-2 w-[16px] h-[16px] mt-[1px]"
            alt=""
          />
        </template>
      </nav>

      <!-- Кнопка справа -->
      <button
        class="bg-accent text-background px-7 py-3 rounded-md hover:opacity-90 transition text-menu font-medium"
      >
        Get Started
      </button>
    </header>
  </BaseContainer>
</template>

<script setup lang="ts">
const menuItems = [
  { name: "Home", href: "/" },
  { name: "PHPR", href: "#phpr" },
  { name: "Why PHPR", href: "#why-phpr" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Technology & Security", href: "#technology-security" },
  { name: "WP", href: "#wp" },
];
</script>
