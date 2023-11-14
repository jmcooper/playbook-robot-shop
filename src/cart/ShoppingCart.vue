<template>
  <div class="container">
    <h1>Your Cart</h1>
    <EmptyCart v-if="cart.length === 0" />
    <ul class="cart" v-if="cart.length > 0">
      <li class="cart-item" v-for="(product, index) in cart" :key="index">
        <ProductInfo :product="product">
          <BaseButton @click="removeFromCart(product)">Remove</BaseButton>
        </ProductInfo>
      </li>
    </ul>
    <div v-if="cart.length > 0" class="total">Total: {{ toCurrency(cartTotal) }}</div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import EmptyCart from './EmptyCart.vue'
import ProductInfo from '@/catalog/product-info/ProductInfo.vue'
import { useCartStore } from '@/stores/cart'
import { toCurrency } from '@/shared/formatters'

const cartStore = useCartStore()
const { cart, cartTotal } = storeToRefs(cartStore)
const { removeFromCart } = cartStore

</script>

<style scoped>
.cart {
  margin: 0 100px;
  border-top: 2px solid #999;
}

.cart-item {
  border-bottom: 2px solid #999;
}

.total {
  margin: 25px 175px 0 0;
  align-self: right;
  font-size: 25px;
  text-align: right;
}

.empty-cart {
  margin-top: 20px;
  font-size: 20px;
}
</style>