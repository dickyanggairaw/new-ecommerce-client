<template>
  <div class="card mb-3" style="width: 100%;">
    <img :src="product.image_url" class="card-img-top" alt="...">
    <div class="card-body">
      <img src="../assets/heart2.svg" alt="" class="bottom-left-icon" @click.prevent="addWishlist">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp. <span>{{ product.price }}</span></p>
      <p class="card-text">Stock : <span>{{ product.stock }}</span></p>
      <a href="#" v-if="product.stock" @click.prevent="addCart" class="btn btn-primary">Add to Cart</a>
      <a href="#" v-else class="btn btn-primary disabled">Add to Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addCart () {
      this.$store.dispatch('addCart', this.product)
    },
    addWishlist () {
      this.$store.dispatch('addWishlist', this.product)
    }
  }
}
</script>

<style>

</style>
