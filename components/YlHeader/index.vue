<script setup lang="ts"></script>
<template>
  <div
    class="header pointer-events-none fixed top-0 left-0 right-0 z-[1000] bg-gradient-to-r"
    style="--tw-gradient-stops: rgba(0, 0, 0), rgba(0, 0, 0, 0.98)"
  >
    <div class="flex justify-between p-[32px]">
      <!-- <div
        class="linear-blur"
        style="
          pointer-events: none;
          transform-origin: top;
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 160%;
          z-index: -1;
          background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0)
          );
        "
      >
        <div
          style="
            position: relative;
            z-index: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom,
              rgb(from transparent r g b / alpha) 0%,
              rgb(from transparent r g b / 0%) 100%
            );
          "
        >
          <div
            style="
              position: absolute;
              z-index: 1;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0) 12.5%
              );
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
            "
          ></div>
          <div
            style="
              position: absolute;
              z-index: 2;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 1) 12.5%,
                rgba(0, 0, 0, 0) 25%
              );
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
            "
          ></div>
          <div
            style="
              position: absolute;
              z-index: 2;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 1) 12.5%,
                rgba(0, 0, 0, 1) 25%,
                rgba(0, 0, 0, 0) 37.5%
              );
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
            "
          ></div>
          <div
            style="
              position: absolute;
              z-index: 3;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 12.5%,
                rgba(0, 0, 0, 1) 25%,
                rgba(0, 0, 0, 1) 37.5%,
                rgba(0, 0, 0, 0) 50%
              );
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
            "
          ></div>
          <div
            style="
              position: absolute;
              z-index: 4;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 25%,
                rgba(0, 0, 0, 1) 37.5%,
                rgba(0, 0, 0, 1) 50%,
                rgba(0, 0, 0, 0) 62.5%
              );
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
            "
          ></div>
          <div
            style="
              position: absolute;
              z-index: 5;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 37.5%,
                rgba(0, 0, 0, 1) 50%,
                rgba(0, 0, 0, 1) 62.5%,
                rgba(0, 0, 0, 0) 75%
              );
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
            "
          ></div>
          <div
            style="
              position: absolute;
              z-index: 6;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 50%,
                rgba(0, 0, 0, 1) 62.5%,
                rgba(0, 0, 0, 1) 75%,
                rgba(0, 0, 0, 0) 87.5%
              );
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
            "
          ></div>
          <div
            style="
              position: absolute;
              z-index: 7;
              inset: 0;
              mask: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 62.5%,
                rgba(0, 0, 0, 1) 75%,
                rgba(0, 0, 0, 1) 87.5%,
                rgba(0, 0, 0, 0) 100%
              );
              backdrop-filter: blur(0.5px);
              -webkit-backdrop-filter: blur(0.5px);
            "
          ></div>
        </div>
      </div> -->
      <div
        class="pointer-events-none relative z-[100] flex gap-8 font-medium items-center justify-between w-full"
      >
        <a
          class="pointer-events-auto text-white h-[29px] text-opacity-50 hover:text-opacity-100 font-medium"
          href="/"
        >
          <svg
            width="25"
            height="29"
            viewBox="0 0 25 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1784_519)">
              <path
                d="M12.3891 28.61L0 21.4568L12.3891 14.3037L24.7781 21.4568L12.3891 28.61Z"
                fill="white"
                fill-opacity="0.66"
              ></path>
              <path
                d="M0 7.15157L12.3891 0V28.611L0 21.4578V7.15157Z"
                fill="white"
                fill-opacity="0.65"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1784_519">
                <rect width="25" height="29" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
        <nav
          class="flex items-center w-full justify-end gap-8 text-white text-opacity-60"
        >
          <a
            class="rounded-full bg-white hover:bg-opacity-90 transition-colors text-black px-4 py-2"
            style="pointer-events: auto; opacity: 1"
            href="/dream-machine/creations"
            >Try Now</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<style></style>
