<template>
  <div class="container">
    <h2>Wishlist</h2>
    <div class="row">
      <div class="col-3" v-for="wishlist in wishlists" :key="wishlist.id">
        <WishlistCard :wishlist="wishlist" />
      </div>
    </div>
  </div>
</template>

<script>
import WishlistCard from '../components/WishlistCard.vue'
export default {
  components: {
    WishlistCard
  },
  methods: {
    getWishlist () {
      this.$store.dispatch('getWishlist')
    }
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  },
  created () {
    this.getWishlist()
  }
}
</script>

<style>

</style>
