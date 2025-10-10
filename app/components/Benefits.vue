<template>
  <div class="relative">
    <BaseContainer>
      <section
        class="relative z-10 benefits bg-[#f3f3f3] rounded-md md:rounded-xl py-[40px] md:py-[70px] px-[25px] md:px-[100px]"
      >
        <h2
          class="text-title-sm md:text-title-xl text-background font-semibold leading-[120%] md:leading-[unset]"
        >
          Who Benefits?
        </h2>
        <BenefitsSwitcher :tabs="tabs" v-model="activeIndex" />
        <BenefitsContent :activeTab="tabs[activeIndex]" />
      </section>
    </BaseContainer>
    <!-- <img
      class="absolute w-full left-0 bottom-0"
      src="/assets/images/benefits-bg.png"
      alt=""
    /> -->
  </div>
</template>

<script setup lang="ts">
import BenefitsSwitcher from "@/components/BenefitsSwitcher.vue";
// import TabsContent from "@/components/TabContent.vue";

const tabs = [
  {
    title: "OFWs",
    text: "Send money home faster and cheaper",
  },
  {
    title: "Families in PH",
    text: "Receive and redeem instantly at full value",
  },
  {
    title: "Banks & Partners",
    text: "Lower remittance friction, engage new depositors",
  },
  {
    title: "Regulators",
    text: "Fully auditable, low-risk, escrow-backed model",
  },
];

const activeIndex = ref(0);
</script>
