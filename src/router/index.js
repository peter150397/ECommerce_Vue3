import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '*',
    //   redirect: 'login',
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: () => import('@/components/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('@/views/products.vue'),
          // meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('@/views/orders.vue'),
          // meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'coupons',
          component: () => import('@/views/coupons.vue'),
          // meta: { requiresAuth: true }
        },
        {
          path: 'customer',
          name: 'customer',
          component: () => import('@/views/customer.vue')
        },
        {
          path: 'customerCheckout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('@/views/customerCheckout.vue')
        },
      ]
    },
    { 
      path: '/:domain(.*)*', 
      name: 'NotFound', 
      component: () => import('@/views/NotFound.vue') 
    },
  ]
})

export default router
