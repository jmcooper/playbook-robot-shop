<template>
  <div class="container">
    <div class="search">
      <input placeholder="Enter Search Term" @input="searchTerm = $event.target.value" />
      <div class="filters">
        <div class="filters-text">Filters:</div>
        <Component @click="filter('Heads')" :is="getButtonForCategory('Heads')">Heads</Component>
        <Component @click="filter('Arms')" :is="getButtonForCategory('Arms')">Arms</Component>
        <Component @click="filter('Torsos')" :is="getButtonForCategory('Torsos')">Torsos</Component>
        <Component @click="filter('Bases')" :is="getButtonForCategory('Bases')">Bases</Component>
        <BaseButton @click="clearFilters()">Clear Filters</BaseButton>
      </div>
    </div>
    <div>
      <ul class="products">
        <li class="product-item" v-for="(product, index) in pagedResults" :key="index">
          <ProductInfo :product="product" @partCategorySelected="filter">
            <CtaButton @click="addToCart(product)">Buy</CtaButton>
          </ProductInfo>
        </li>
      </ul>
    </div>
    <div class="paging">
      <button @click="prevPage()" class="button-link">Previous Page</button>
      <span>Showing {{ currentStartIndex }} to {{ currentEndIndex }} of {{ resultCount }} results</span>
      <button @click="nextPage()" class="button-link">Next Page</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductInfo from '@/catalog/product-info/ProductInfo.vue'
import { useCartStore } from '@/stores/cart'
import BaseButton from '@/shared/BaseButton.vue'
import CtaButton from '@/shared/CtaButton.vue'
import useSearch from './useSearch'
import useFilters from './useFilters'
import usePagination from './usePagination'

const cartStore = useCartStore()
const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm)

const {
  filters,
  applyFilters,
  clearFilters,
  filteredResults,
} = useFilters(searchResults)

const {
  nextPage,
  prevPage,
  currentStartIndex,
  currentEndIndex,
  pagedResults,
  setPage,
} = usePagination(filteredResults)

function getButtonForCategory(category) {
  return isFilteringForCategory(category)
    ? CtaButton
    : BaseButton
}

function isFilteringForCategory(category) {
  return filters.value.some(f => f['category'] === category)
}

function filter(category) {
  setPage(1)
  const filtersObj = { category }
  applyFilters(filtersObj)
}

const resultCount = computed(() => filteredResults.value.length)

function addToCart(product) {
  cartStore.cart.push({ ...product })
}

</script>

<style scoped>
.container {
  margin: 20px 100px;
}

.search {
  display: flex;
  justify-content: space-between;
}

input {
  font-size: 22px;
  padding: 8px;
  width: 700px;
  box-sizing: border-box;
}


.button-link {
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: underline;
  cursor: pointer;
  color: #1e87ba;
}

.filters {
  justify-self: end;
  margin-top: 10px;
  display: flex;
  font-size: 18px;
  align-items: center;
}

.filters-text {
  font-size: 25px;
  color: #777;
}

.filters button {
  font-size: 18px;
  width: 150px;
}

.filters>* {
  margin-right: 10px;
}

img {
  width: 100px;
  margin-right: 20px;
}

.products {
  border-top: 2px solid #999;
}

.product-item {
  border-bottom: 2px solid #999;
}

.product-item>>>.product img {
  width: 105px;
}

.paging,
.paging button {
  font-size: 25px;
}

.paging>* {
  margin-left: 50px;
}
</style>
