<!-- <template>
  <div class="container">
    <h1>Your Cart</h1>
    <EmptyCart v-if="cart.length === 0" />
    <ul class="cart" v-if="cart.length > 0">
      <li class="cart-item" v-for="(product, index) in cart" :key="index">
        <ProductInfo :product="product">
          <BaseButton v-on:click="removeFromCart(product)">Remove</BaseButton>
        </ProductInfo>
      </li>
    </ul>
    <div v-if="cart.length > 0" class="total">Total: {{ toCurrency(cartTotal) }}</div>
  </div>
</template> -->
<script>
import { h, resolveComponent } from 'vue'
import { storeToRefs } from 'pinia'
import EmptyCart from './EmptyCart.vue'
import ProductInfo from '@/catalog/product-info/ProductInfo.vue'
import { useCartStore } from '@/stores/cart'
import { toCurrency } from '@/shared/formatters'

export default {
  render() {
    const cartStore = useCartStore()
    const { cart, cartTotal } = storeToRefs(cartStore)
    const { removeFromCart } = cartStore
    const BaseButton = resolveComponent('BaseButton')

    const emptyCart = h(EmptyCart)
    const cartItems = h('ul', { class: 'cart' },
      cart.value.map((product, index) => h('li', { class: 'cart-item', key: index }, [
        h(ProductInfo, { product }, () => h(BaseButton, { onClick: () => removeFromCart(product) }, () => 'Remove')),
      ])),
    )
    console.log(cartTotal)
    return h('div', { class: 'container' }, [
      h('h1', ['Your Cart']),
      cart.value.length > 0 ? cartItems : emptyCart,
      cart.value.length > 0 ? h('div', { class: 'total' }, [`Total: ${toCurrency(cartTotal.value)}`]) : null,
    ])
  },
}
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