<template>
  <div class="product" :class="{ selected }">
    <div class="product-details">
      <img :src="product.imageUrl" :alt="product.name" />
      <div class="product-info">
        <div class="name">{{ product.name }}</div>
        <div class="description">{{ product.description }}</div>
        <div class="category" @click="partCategoryClicked(product.category)">Part Category: {{ product.category }}</div>
      </div>
    </div>
    <div class="price">
      <div :class="{ 'strikethrough': product.discount > 0 }">
        {{ toCurrency(product.price) }}
      </div>
      <div v-if="product.discount > 0" class="discount">
        {{ toCurrency(product.price * (1 - product.discount)) }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { toCurrency } from '@/shared/formatters'

defineProps({
  product: { required: true },
  selected: { type: Boolean, required: false },
})

const emit = defineEmits(['partCategorySelected'])

const partCategoryClicked = (category) => {
  emit('partCategorySelected', category)
}

</script>

<style scoped>
.product {
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
}

.product.selected {
  background-color: #eee;
}

.product .product-details {
  display: flex;
  align-items: center;
}

.product img {
  width: 125px;
}

.product .product-info {
  margin-left: 25px;
  text-align: left;
}

.product .name {
  font-size: 22px;
  font-weight: bold;
}

.product .name span {
  font-size: 18px;
  font-weight: normal;
}

.product .description {
  margin-top: 3px;
  font-size: 18px;
}

.product .category {
  margin-top: 20px;
  color: #777;
  cursor: pointer;
}

.product .price {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  justify-content: space-around;
  align-items: center;
  min-width: 190px;
  color: #555;
  border-left: 2px solid #aaa;
  margin-left: 50px;
}

.discount {
  margin-top: -10px;
  color: #d25ca1;
}

.strikethrough {
  text-decoration: line-through;
  font-size: 18px;
}
</style>