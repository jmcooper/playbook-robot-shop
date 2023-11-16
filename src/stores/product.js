import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, readonly } from 'vue'

export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const productsLoading = ref(false)

  async function getProducts() {
    const response = await fetch('/api/products')
    const returnedProducts = await response.json()

    products.value = readonly(returnedProducts)

    return returnedProducts
  }

  async function getInventory(productId) {
    const response = await fetch(`/api/inventory/${productId}`)

    const inventory = await response.json()
    return inventory.inventoryCount
  }

  return { products, getProducts, productsLoading, getInventory }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}