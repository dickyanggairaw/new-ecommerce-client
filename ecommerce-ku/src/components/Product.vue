<template>
  <div class="container">
    <h2>Product List</h2>
    <div class="row">
      <div class="col-3" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProduct')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style>

</style>
