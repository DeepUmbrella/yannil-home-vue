<template>
  <footer class="w-full px-[32px] py-[24px] bg-white">
    <div class="flex text-black justify-between items-center gap-[40px]">
      <span class="font-bold text-yanfooter">Yannil</span>
      <div>
        <ul class="flex flex-col font-bold gap-[8px]">
          <li class="border-b border-gray-300">
            <NuxtLink class="" to="/about">About</NuxtLink>
          </li>
          <li class="border-b border-gray-300">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
          <li class="border-b border-gray-300">
            <NuxtLink to="/privacy">Privacy</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
