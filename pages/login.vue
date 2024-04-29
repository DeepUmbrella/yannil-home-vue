<script setup lang="ts">
definePageMeta({
  title: 'yannil - 亚尼尔',
  description: '',
  layout: 'public',
});
</script>

<template>
  <div
    class="w-full min-h-[300px] min-w-[500px] h-full flex flex-col gap-4 justify-center items-center"
  >
    <div class="flex"><h1 class="text-5xl text-white">YANNIL</h1></div>
    <YlForm>
      <YlFormFiled label="username" name="username">
        <YlInput />
      </YlFormFiled>
      <YlFormFiled label="password" name="password">
        <YlInput />
      </YlFormFiled>
      <YlFormFiled submitted-btn>
        <YlButton blink>LOG IN</YlButton>
      </YlFormFiled>
    </YlForm>
  </div>
</template>
