import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ButtonsView from '../views/smallObjects/ButtonsView.vue'
import type { DefineComponent } from 'vue'

export const RouteInfos = {
  HOMEVIEW: {
    path: '/',
    name: 'home',
    component: HomeView
  },
  BUTTONSVIEW: {
    path: '/smallObjects/ButtonsView',
    name: 'buttons',
    component: ButtonsView
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [RouteInfos.HOMEVIEW, RouteInfos.BUTTONSVIEW]
})

export default router
