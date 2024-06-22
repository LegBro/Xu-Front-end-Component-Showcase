<script setup lang="ts"></script>
<template>
  <main>
    <div class="title-block">
      <h1>Buttons ( 按 鈕 )</h1>
      <p class="subtitle">按鈕們，是互動體驗之旅的起點！</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      <slot></slot>
    </div>
  </main>
</template>
<style scoped lang="scss">
main {
  @apply px-6 pt-6;
  @apply flex flex-col;
}
.title-block {
  @apply mb-6;
  h1 {
    @apply tracking-widest italic pt-6 pl-6 font-bold;
    font-size: clamp(1.5rem, 4vw, 3.5rem);
  }
  .subtitle {
    @apply tracking-widest italic pr-6 pt-6 text-end;
    font-size: clamp(0.875rem, 1.8vw, 1.35rem);
  }
}
</style>
