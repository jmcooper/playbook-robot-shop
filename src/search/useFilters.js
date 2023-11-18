import { ref, computed, onMounted } from 'vue'

function filterResults(results, filters) {
  return results.value.filter((product) => filters.value.every(
    (filter) => {
      const filterField = Object.keys(filter)[0]
      const filterValue = filter[filterField]
      return product[filterField] === filterValue
    },
  ))
}

export default function useFilters(searchResults) {
  const filters = ref([])

  const applyFilters = (filter) => filters.value.push(filter)
  const clearFilters = () => { filters.value = [] }

  const filteredResults = computed(() => filterResults(searchResults, filters))

  return {
    filters,
    applyFilters,
    clearFilters,
    filteredResults,
  }
}
