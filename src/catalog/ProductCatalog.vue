<template>
  <div>
    <h2 v-if="productStore.productsLoading">Product data is loading...</h2>
    <ul class="products">
      <li class="product-item" v-for="(product, index) in productStore.products" :key="index" @click="activeId = product.id">
        <ProductInfo :product="product" :activeId="activeId">
          <CtaButton @click="cartStore.addToCart(product)">Buy</CtaButton>
        </ProductInfo>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductInfo from './product-info/ProductInfo.vue'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/product'

const cartStore = useCartStore()
const productStore = useProductStore()
const activeId = ref(null)

productStore.getProducts()

</script>

<style scoped>
.products {
  margin: 0 100px;
}

.product-item {
  border-bottom: 2px solid #999;
}
</style>