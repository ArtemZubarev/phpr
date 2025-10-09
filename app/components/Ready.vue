<template>
  <BaseContainer>
    <section
      class="ready relative rounded-xl bg-ready-gradient py-[98px] pl-[104px] mt-[143px] overflow-hidden"
    >
      <h2
        class="relative text-title-sm text-background max-w-[700px] font-semibold leading-[120%] z-10"
      >
        Ready to experience seamless remittances and digital payments?
      </h2>
      <ul
        class="relative list text-background mt-[60px] max-w-[700px] pl-[42px] z-10"
      >
        <li class="item text-[28px] mb-[20px]">
          <b>Download the VExchange Wallet </b>to start sending and receiving
          PHPR today.
        </li>
        <li class="item text-[28px] mb-[20px]">
          Explore our <b>White Paper</b> to learn more about the technology and
          compliance behind PHPR.
        </li>
        <li class="item text-[28px]">
          Check our <b>Reserve Reports</b> for monthly proof‑of‑reserve data.
        </li>
      </ul>
      <img
        class="absolute right-0 bottom-0 w-[45%]"
        src="/assets/images/phone.png"
        alt=""
      />
    </section>
  </BaseContainer>
</template>

<style scoped>
.list {
}
.item {
  position: relative;
}
.item::before {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  background-image: url("/assets/images/ellipse.svg");
  left: -35px;
  top: 14px;
}
</style>
