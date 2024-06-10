<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps<{
  label: string
  expandable?: {
    type: boolean
    default: false
  }
}>()
const emits = defineEmits<{ (event: 'click'): void }>()
</script>
<template>
  <li>
    <component
      :is="$attrs['to'] ? RouterLink : 'button'"
      :to="$attrs['to']"
      @click="emits('click')"
    >
      <span>{{ props.label }}</span>
    </component>
  </li>
</template>
<style scoped lang="scss">
a,
button {
  @apply px-4 py-2 w-full flex;
  @apply font-bold text-lg  tracking-widest break-keep;
  @apply duration-500 hover:bg-secondary-light;
}

span {
  @apply flex-1 text-start;
}
</style>
