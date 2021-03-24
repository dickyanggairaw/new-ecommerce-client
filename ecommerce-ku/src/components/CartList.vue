<template>
  <tr>
    <th scope="row">{{ cart.Product.name }}</th>
    <td><img :src="cart.Product.image_url" alt="" width="150" height="150" srcset=""></td>
    <td>{{ cart.Product.price }}</td>
    <td>
      <input type="number" id="quantity" name="quantity" min="1" v-model="stock" :max="cart.Product.stock"><br><br>
    </td>
    <td>{{ totalPrice }}</td>
    <td>
      <button class="btn btn-danger" @click.prevent="deleteCart">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['cart'],
  data () {
    return {
      stock: this.cart.stock
    }
  },
  methods: {
    deleteCart () {
      console.log('bisa')
      this.$store.dispatch('deleteCart', this.cart)
    }
  },
  computed: {
    totalPrice () {
      return this.cart.stock * this.cart.Product.price
    }
  },
  watch: {
    stock () {
      this.$store.dispatch('updateStock', {
        stock: this.stock,
        id: this.cart.id
      })
    }
  }
}
</script>

<style>

</style>
