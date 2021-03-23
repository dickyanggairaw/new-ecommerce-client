<template>
  <div class="card" style="width: 100%;">
    <img :src="product.image_url" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp. <span>{{ product.price }}</span></p>
      <p class="card-text">Stock : <span>{{ product.stock }}</span></p>
      <a href="#" @click.prevent="addCart" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addCart () {
      this.$store.dispatch('addCart', this.product)
    }
  }
}
</script>

<style>

</style>
