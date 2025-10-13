<template>
  <BaseContainer>
    <section
      class="ready relative rounded-xl bg-ready-gradient py-[48px] md:py-[98px] pl-[25px] md:pl-[104px] mt-[60px] md:mt-[143px] overflow-hidden"
    >
      <h2
        class="relative text-text-lg md:text-title-sm text-background max-w-[700px] pr-[25px] md:pr-[unset] font-semibold leading-[120%] z-10"
      >
        Ready to experience seamless remittances and digital payments?
      </h2>
      <ul
        class="relative list text-background mt-[20px] md:mt-[60px] max-w-[700px] pl-[25px] mb-[260px] sm:mb-0 md:pl-[42px] pr-[25px] z-10"
      >
        <li class="item text-[18px] md:text-[28px] mb-[20px]">
          <b>Download the Topwallet </b>to start sending and receiving PHPR
          today.
        </li>
        <li class="item text-[18px] md:text-[28px] mb-[20px]">
          Explore our <b>White Paper</b> to learn more about the technology and
          compliance behind PHPR.
        </li>
        <li class="item text-[18px] md:text-[28px]">
          Check our <b>Reserve Reports</b> for monthly proof‑of‑reserve data.
        </li>
      </ul>
      <img
        class="absolute md:block right-0 bottom-0 w-[320px] sm:w-[45%]"
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
.list:before {
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  background-image: url("/assets/images/line-v.svg");
  background-repeat: no-repeat;
  background-size: cover;
  left: 5px;
  top: 20px;
}
.item::before {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  background-image: url("/assets/images/ellipse.svg");
  left: -25px;
  top: 7px;
}

@media (min-width: 768px) {
  .list:before {
    left: 22.5px;
  }
  .item::before {
    top: 14px;
  }
}
@media (min-width: 1024px) {
  .item::before {
    left: -35px;
  }
  .list:before {
    left: 12.5px;
  }
}
</style>
