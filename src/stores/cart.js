import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur ? cur.price : 0, 0))

  function addToCart(product) {
    cart.value.push(product)
  }

  function removeFromCart(product) {
    const itemIndex = cart.value.findIndex(p => p.id === product.id)
    cart.value.splice(itemIndex, 1)
  }

  return { cart, cartTotal, addToCart, removeFromCart }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}