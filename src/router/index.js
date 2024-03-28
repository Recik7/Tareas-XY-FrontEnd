import { createRouter, createWebHistory } from 'vue-router'
import {useAuthStore} from '../stores/auth'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/Tasks/Index.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/Tasks/Edit.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Tasks/Create.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users/Index.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/Users/Reports.vue')
    }
  ]
})

router.beforeEach( async (to) => {
  const publicPages = ['/login', '/register']
  const authRequerid = !publicPages.includes(to.path)
  const auth =useAuthStore()
    if(authRequerid && !auth.user) {
      auth.returnUrl = to.fullPath
      return '/login'
    }
  
} )

export default router
