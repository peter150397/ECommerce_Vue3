import { createRouter, createWebHashHistory } from 'vue-router'
import axios from "axios";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/',
      name: 'customer',
      component: () => import('@/views/customer.vue')
    },
    {
      path: '/customerCheckout/:orderId',
      name: 'CustomerCheckout',
      component: () => import('@/views/customerCheckout.vue')
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
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('@/views/orders.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'coupons',
          component: () => import('@/views/coupons.vue'),
          meta: { requiresAuth: true }
        },
        // 模擬訂單
        // {
        //   path: 'customer',
        //   name: 'customer',
        //   component: () => import('@/views/customer.vue')
        // },
        // {
        //   path: 'customerCheckout/:orderId',
        //   name: 'CustomerCheckout',
        //   component: () => import('@/views/customerCheckout.vue')
        // },
      ]
    },
    {
      path: '/:domain(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${import.meta.env.VITE_APIPATH}api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({ path: '/login' });
      }
    });
  } else {
    next();
  }
})

export default router
