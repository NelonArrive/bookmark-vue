import { useAuthStore } from '@/store/auth.store'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'auth', component: () => import('../views/AuthView.vue') },
    {
      path: '/home',
      component: () => import('../views/HomeView.vue'),
      children: [
        { path: '', component: () => import('../views/IndexView.vue'), name: 'home' },
        { path: 'category/:alias', component: () => import('../views/CategoryView.vue') },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (!authStore.getToken && to.name !== 'auth') {
    next({ name: 'auth' })
  } else {
    next()
  }
})
