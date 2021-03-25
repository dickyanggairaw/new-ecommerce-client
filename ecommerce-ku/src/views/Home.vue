<template>
  <div class="home">
    <h2>Selamat datang di Ecommerce Ku</h2>
    <Product />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Product'

export default {
  name: 'Home',
  components: {
    Product
  }
}
</script>
