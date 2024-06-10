<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{ (event: 'click'): void }>()

const isClicked = ref<boolean>(false)

const click = () => {
  isClicked.value = !isClicked.value
  emits('click')
}
</script>
<template>
  <button class="hamburger" :class="isClicked ? 'clicked' : ''" @click="click">
    <li v-for="n in 3" :key="n" :class="isClicked ? 'clicked' : ''" />
  </button>
</template>
<style scoped lang="scss">
.hamburger {
  @apply w-12 h-10 py-0.5 px-2;
  @apply flex flex-col justify-evenly items-stretch;
  @apply rounded-lg border-2;
  transition-duration: 0.5s;

  &.clicked {
    @apply border-secondary-dark;
  }
  &:not(.clicked) {
    @apply border-primary-darkest;
  }

  li {
    @apply h-1;
    @apply bg-primary-darkest;
    transition: 0.25s ease-out;
    &[class='clicked'] {
      @apply bg-secondary-dark;
      &:nth-child(1) {
        transform: rotate(40deg) translate(3px, -2px);
        transform-origin: top left;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-40deg) translate(3px, 2px);
        transform-origin: bottom left;
      }
    }
  }
}
</style>
