<template>
  <BaseContainer>
    <section class="why pt-[230px] pb-[200px]">
      <h2 class="text-title-xl text-white-gradient mb-10">Why PHPR?</h2>

      <!-- Компонент переключения -->
      <TabsSwitcher v-model="activeIndex" :tabs="tabs" />

      <!-- Контент активного таба -->
      <TabsContent :activeTab="tabs[activeIndex]" />
    </section>
  </BaseContainer>
</template>

<script setup lang="ts">
import TabsSwitcher from "@/components/TabSwitcher.vue";
import TabsContent from "@/components/TabContent.vue";

const tabs = [
  {
    title: "Always ₱1",
    text: "PHPR - Licensed Digital Peso for Quick Remittances",
  },
  {
    title: "Fast & Low-Cost",
    text: "Designed for Online Filipino Workers and their families.",
  },
  {
    title: "Fully Backed",
    text: "Escrowed reserves in PHP at regulated banks ensure every token is supported.",
  },

  {
    title: "Transparent",
    text: "Monthly reserve reports, auditable on-chain.",
  },
  {
    title: "Accessible",
    text: "Easy to send and receive, even without a bank account.",
  },
  {
    title: "No Speculation",
    text: "Purely utilitarian, no “moon” hype, no yield risks.",
  },
];

const activeIndex = ref(0);
</script>
