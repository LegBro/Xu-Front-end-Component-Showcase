<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HamburgerButton from '@/components/btns/HamburgerButton.vue'
import UnderlineTextButton from '@/components/btns/UnderlineTextButton.vue'
import { ref } from 'vue'
import ListTile from '@/components/lists/ListTile.vue'

const isDrawerOpened = ref<boolean>(false)

const clickHamburger = () => {
  isDrawerOpened.value = !isDrawerOpened.value
}
</script>
<template>
  <header>
    <div class="leading">
      <KeepAlive>
        <HamburgerButton @click="clickHamburger" />
      </KeepAlive>
      <RouterLink to="/" class="logo"> Xu Componontes </RouterLink>
    </div>
    <nav>
      <li><UnderlineTextButton label="NavBtn1" /></li>
      <li><UnderlineTextButton label="NavBtn2" /></li>
    </nav>
  </header>
  <div class="drawer-cover">
    <aside :class="isDrawerOpened ? 'min-w-56' : 'min-w-0'">
      <ListTile to="/" label="首頁" />
    </aside>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
header {
  @apply flex justify-between items-center;
  @apply py-2 px-4;
  @apply bg-primary-shad;
}

.leading {
  @apply flex gap-8 items-center;
}

.logo {
  @apply text-2xl font-bold tracking-wider bg-clip-text;
  background: linear-gradient(90deg, #c0541a, var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav {
  @apply flex gap-12;
}

.drawer-cover {
  @apply flex h-full;

  aside {
    @apply duration-500 ease-in-out;
    @apply w-0 overflow-x-hidden overflow-y-auto;
    @apply bg-surface-light shadow-md shadow-secondary-darkest;

    &::-webkit-scrollbar {
      @apply w-2 bg-secondary-shad;
    }
    &::-webkit-scrollbar-thumb {
      @apply bg-surface-dark rounded-lg;
    }
  }

  .content {
    @apply flex-1;
  }
}
</style>
