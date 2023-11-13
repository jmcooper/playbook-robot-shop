<template>
  <div class="container">
    <img class="logo" src="./logo.png" alt="Logo" />
    <router-link to="/catalog" routerLinkActive="active">Catalog</router-link>
    <router-link to="/search" routerLinkActive="active">Search</router-link>
    <div><router-link to="/cart" routerLinkActive="active">Cart</router-link></div>
    <div class="right">
      <SignIn class="menu" @click="signedIn = !signedIn" v-if="!signedIn" />
      <MyAccount class="menu" @click="signedIn = !signedIn" v-if="signedIn" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SignIn from './SignIn.vue'
import MyAccount from './MyAccount.vue'
const signedIn = ref(false)
</script>

<style scoped>
.container {
  display: flex;
  font-size: 24px;
  margin: -3px -8px 0 -8px;
  padding: 0 8px 5px 8px;
  border-bottom: 2px solid #818285;
  align-items: center;
}

.container * {
  margin-right: 25px;
}

.logo {
  height: 65px;
}

.right {
  margin-left: auto;
}

.menu {
  cursor: pointer;
}
</style>