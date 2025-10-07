<template>
  <BaseContainer>
    <section
      class="hero bg-foreground rounded-xl mt-[50px] pt-[260px] pb-[260px]"
    >
      <div class="flex flex-col items-center justify-between">
        <span class="sign rounded-md px-10 py-2 bg-background font-thin"
          >The Future of Smart Blockchain Technology</span
        >
        <h1
          class="title text-white-gradient text-center text-title-xl leading-[96%] font-semibold mt-[50px]"
        >
          PHPR - Licensed Digital <br />
          Peso for Quick Remittances
        </h1>
        <h2 class="mt-[28px] text-[24px] text-whiteFaded font-light">
          Send, receive, and withdraw Pesos instantly.
        </h2>
        <div class="buttons flex gap-[25px] mt-[32px]">
          <button
            class="bg-accent-gradient text-background px-9 py-4 rounded-sm hover:opacity-90 transition text-menu font-medium"
          >
            Get started
          </button>
          <button
            class="border-accent rounded-sm bg-[#2c2c2c] text-accent px-9 py-4 hover:opacity-90 transition text-menu font-medium"
          >
            White Paper
          </button>
        </div>
      </div>
    </section>
  </BaseContainer>
</template>
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
