<template>
  <div class="card mb-3" style="width: 100%;">
    <img :src="wishlist.Product.image_url" class="card-img-top" alt="...">
    <div class="card-body">
      <img src="../assets/heart.svg" alt="" class="bottom-left-icon" @click.prevent="deleteWishlist">
      <h5 class="card-title">{{ wishlist.Product.name }}</h5>
      <p class="card-text">Rp. <span>{{ wishlist.Product.price }}</span></p>
      <p class="card-text">Stock : <span>{{ wishlist.Product.stock }}</span></p>
      <a href="#" v-if="wishlist.Product.stock" @click.prevent="addCart" class="btn btn-primary">Add to Cart</a>
      <a href="#" v-else class="btn btn-primary disabled">Add to Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['wishlist'],
  methods: {
    addCart () {
      this.$store.dispatch('addCart', this.wishlist.Product)
    },
    deleteWishlist () {
      this.$store.dispatch('deleteWishlist', this.wishlist)
    }
  }
}
</script>

<style>

</style>
