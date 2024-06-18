<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
interface Props {
  label: string
  expandable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  expandable: false
})
const emits = defineEmits<{ (event: 'click'): void }>()

const isExpand = ref<boolean>(false)

const pageActions = {
  listTileOnClick: () => {
    if (props.expandable) {
      isExpand.value = !isExpand.value
    }
    emits('click')
  }
}
</script>
<template>
  <li>
    <component
      :is="$attrs['to'] ? RouterLink : 'button'"
      :to="$attrs['to']"
      :class="{ 'bg-secondary-light': isExpand }"
      @click="pageActions.listTileOnClick()"
    >
      <span>{{ props.label }}</span>
    </component>
    <div
      class="expandable-container"
      :class="{
        expanded: isExpand,
        unexpanded: !isExpand
      }"
    >
      <div class="expandable">
        <slot></slot>
      </div>
    </div>
  </li>
</template>
<style scoped lang="scss">
li {
  @apply flex flex-col;
}
a,
button {
  @apply px-4 py-2 w-full flex;
  @apply font-bold text-lg tracking-widest;
  @apply duration-500 hover:bg-secondary-light;
}

span {
  @apply flex-1 text-start;
}

.expandable-container {
  @apply grid duration-500;
  &.expanded {
    grid-template-rows: 1fr;
  }
  &.unexpanded {
    grid-template-rows: 0fr;
  }
}
.expandable {
  @apply overflow-hidden;
}
</style>
