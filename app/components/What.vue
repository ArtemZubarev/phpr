<template>
  <BaseContainer>
    <section id="phpr" class="what mt-[60px] md:mt-[85px]">
      <h2 class="text-white-gradient text-title md:text-title-xl font-semibold">
        What is PHPR?
      </h2>
      <p class="text-[18px] mt-[20px] md:text-[28px]">
        PHPR (PHP Remit) is a digital representation of the Philippine Peso,
        <br />
        issued on the Venom Blockchain and traded on Topwallet.
      </p>
      <div class="flex flex-col md:flex-row gap-[20px] mt-[60px]">
        <div
          class="flex-1 flex md:justify-center items-center gap-[10%] bg-foreground px-6 py-2 md:py-6 rounded-md md:rounded-xl text-white md:text-center"
        >
          <span class="text-white-gradient text-title-md md:text-title-xl"
            >1:1</span
          >
          <span class="text-text-sm md:text-text-md text-white"
            >Each PHPR = ₱1</span
          >
        </div>
        <div
          class="flex-1 flex justify-center items-center bg-accent-gradient px-6 py-4 md:px-10 md:py-10 rounded-md md:rounded-xl text-background text-left text-text-sm md:text-text-md leading-[110%] md:leading-[unset]"
        >
          Designed only for remittances and payments - no speculative losses
        </div>
        <div
          class="flex-1 flex justify-center items-center gap-[10%] bg-foreground px-6 py-4 md:px-8 md:py-8 rounded-md md:rounded-xl text-white"
        >
          <img
            class="max-w-[40px] md:max-w-[77px]"
            src="/assets/images/V.svg"
            alt=""
          />
          <p class="text-text-sm md:text-text-md text-white">
            Fully backed by escrowed PHP reserves at VBank
          </p>
        </div>
      </div>
      <p class="mt-[40px] text-text-sm md:text-text-md">
        Think of PHPR as digital peso: secure, transparent, and instantly
        transferable.
      </p>
    </section>
  </BaseContainer>
</template>

<style scoped></style>
