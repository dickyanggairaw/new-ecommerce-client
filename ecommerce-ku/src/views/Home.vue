<template>
  <div class="home">
    <h1 v-if="!isLogin">Home Ini loh</h1>
    <Product v-if="isLogin" />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Product'

export default {
  name: 'Home',
  components: {
    Product
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>
