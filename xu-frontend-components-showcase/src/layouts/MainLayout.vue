<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HamburgerButton from '@/components/btns/HamburgerButton.vue'
import UnderlineTextButton from '@/components/btns/UnderlineTextButton.vue'
import { ref } from 'vue'
import ListTile from '@/components/lists/ListTile.vue'
import SubListTile from '@/components/lists/SubListTile.vue'

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
  <div class="main-area">
    <aside :class="isDrawerOpened ? 'min-w-full md:min-w-56' : 'min-w-0'">
      <ListTile to="/" label="首頁" :expandable="true">
        <SubListTile label="連結1" />
        <SubListTile label="連結2" />
        <SubListTile label="連結3" />
        <SubListTile label="連結4" />
      </ListTile>
      <ListTile to="/" label="關於我們" />
      <ListTile to="/" label="頁面展示" />
      <ListTile to="/" label="小型物件" :expandable="true">
        <SubListTile label="Button(按鈕)" />
        <SubListTile label="Text(文字)" />
        <SubListTile label="Card(卡片)" />
      </ListTile>
      <ListTile to="/" label="大型物件" :expandable="true">
        <SubListTile label="Carousel(幻燈片)" />
      </ListTile>
    </aside>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
header {
  @apply flex justify-end items-center;
  @apply md:justify-between;
  @apply py-2 px-4;
  @apply bg-primary-shad;
}

.leading {
  @apply flex flex-row-reverse gap-8 items-center;
  @apply md:flex-row;
}

.logo {
  @apply font-bold tracking-wider bg-clip-text;
  font-size: clamp(0.75rem, 3vw, 1.5rem);
  line-height: clamp(24px, 3vw, 32px);
  background: linear-gradient(90deg, #c0541a, var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav {
  @apply hidden gap-12;
  @apply md:flex;
}

.main-area {
  @apply flex flex-row-reverse flex-1 overflow-y-auto overflow-x-hidden;
  @apply md:flex-row;

  aside {
    @apply duration-500 ease-in-out;
    @apply w-0 overflow-x-hidden overflow-y-auto z-10;
    @apply bg-surface-light shadow-md shadow-secondary-darkest;
    @apply break-keep;

    &::-webkit-scrollbar {
      @apply w-2 bg-secondary-shad;
    }
    &::-webkit-scrollbar-thumb {
      @apply bg-surface-dark rounded-lg;
    }
  }

  .content {
    @apply flex-1 min-w-[50%];
  }
}
</style>
