import { computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'


export default function useSearch(searchTerm) {
  const productStore = useProductStore()

  productStore.getProducts()

  const results = computed(() => {
    let searchResults
    if (!searchTerm.value) searchResults = productStore.products
    else {
      const lowerTerm = searchTerm.value.toLowerCase()
      searchResults = productStore.products.filter(
        (product) => product.name.toLowerCase().includes(lowerTerm),
      )
    }
    return [...searchResults]
  })

  onMounted(() => console.log('Mounted: useSearch'))

  return { searchResults: results }
}
