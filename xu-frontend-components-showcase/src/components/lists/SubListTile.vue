<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  label: string
}

const props = defineProps<Props>()

const emits = defineEmits<{ (event: 'click'): void }>()
</script>
<template>
  <div class="subtile">
    <component
      :is="$attrs['to'] ? RouterLink : 'button'"
      :to="$attrs['to']"
      @click="emits('click')"
    >
      <span>{{ props.label }}</span>
    </component>
  </div>
</template>
<style scoped lang="scss">
a,
button {
  @apply pl-10 py-2 w-full text-start flex;
  @apply tracking-wide;
  @apply bg-surface hover:bg-surface-dark duration-500;
}
</style>
