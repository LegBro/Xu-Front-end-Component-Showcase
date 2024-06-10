<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{ label: string }>()
const emits = defineEmits<{ (event: 'click'): void }>()
</script>
<template>
  <component
    :is="$attrs['to'] ? RouterLink : 'button'"
    :to="$attrs['to']"
    @click="emits('click')"
    >{{ props.label }}</component
  >
</template>
<style scoped lang="scss">
a,
button {
  @apply py-1 px-2;
  @apply border-b-2 hover:bg-secondary-shad hover:border-b-0 hover:rounded-md;
  @apply text-sm font-bold tracking-wide text-secondary-dark hover:text-secondary-darkest;
  @apply duration-75;
}
</style>
