import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About Me',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/personal-projects',
      name: 'Personal Projects',
      component: () => import('../views/PersonalProjects.vue')
    },
    {
      path: '/contributions',
      name: 'Contributions',
      component: () => import('../views/Contributions.vue')
    }
  ]
})

export default router
