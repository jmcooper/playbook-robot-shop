<template>
  <button @click="title = 'Updated Title'">Update Page Title</button>
  <button @click="mutablyUpdateFirstRobotName()">Mutably Update 1st Robot Name</button>
  <button @click="immutablyUpdateFirstRobotName()">Immutably Update 1st Robot Name</button>
  <button @click="immutablyUpdateSecondRobotName()">Immutably Update 2nd Robot Name</button>
  <h1>{{ title }}</h1>
  <div class="all-products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <div class="name">Name: {{ products[index].name }}</div>
      <div class="property" v-for="(property, index2) in Object.keys(product)" :key="index2">
        <span v-if="property !== 'name'">{{ property }}: {{ product[property] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import allProducts from './robots'
const title = ref('Robot List')

const products = shallowRef(allProducts)

function mutablyUpdateFirstRobotName() {
  products.value[0].name = 'Updated name'
}

function immutablyUpdateFirstRobotName() {
  products.value = [{ ...products.value[0], name: 'Updated name' }, ...products.value.slice(1)]
}

function immutablyUpdateSecondRobotName() {
  products.value = [products.value[0], { ...products.value[1], name: 'Updated name' }, ...products.value.slice(2)]
}
</script>

<style scoped>
.scroller {
  height: 820px;
}

.all-products {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 50px;
}

.product {
  display: flex;
  font-size: 18px;
  flex-direction: column;
  border-bottom: 1px solid #aaa;
  margin-bottom: 100px;
  padding: 5px 0 5px 0;
}

.name {
  text-align: left;
  font-weight: bold;
}

.property {
  text-align: left;
}

.product-count {
  font-size: 20px;
  padding: 10px;
}

.render-time {
  font-size: 18px;
  margin-bottom: 10px;
}

button {
  font-size: 22px;
  padding: 10px;
  margin: 10px;
}
</style>