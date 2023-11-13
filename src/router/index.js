import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '@/catalog/ProductCatalog.vue'
import ShoppingCart from '@/cart/ShoppingCart.vue'
import ProductSearch from '@/search/ProductSearch.vue'
import ManyBindings from '@/many-bindings/ManyBindings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catalog',
      name: 'Catalog',
      component: ProductCatalog,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
    {
      path: '/search',
      name: 'Search',
      component: ProductSearch,
    },
    {
      path: '/many-bindings',
      name: 'Many Bindings',
      component: ManyBindings,
    },
    {
      path: '/',
      redirect: '/catalog',
    },
  ],
})

export default router
