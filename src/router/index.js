import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catalog',
      name: 'Catalog',
      component: () => import('@/catalog/ProductCatalog.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/cart/ShoppingCart.vue'),
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/search/ProductSearch.vue'),
    },
    {
      path: '/many-bindings',
      name: 'Many Bindings',
      component: () => import('@/many-bindings/ManyBindings.vue'),
    },
    {
      path: '/',
      redirect: '/catalog',
    },
  ],
})

export default router
