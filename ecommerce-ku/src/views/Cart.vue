<template>
  <div class="container">
    <h2>Cart List</h2>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="cart in carts" :key="cart.id">
        <CartList :cart="cart" />
      </tbody>
    </table>
    <div>
      <p>Total Price : Rp. <span>{{ totalPrice }}</span></p>
    </div>
    <button class="btn btn-success" @click="checkout">CheckOut</button>
  </div>
</template>

<script>
import CartList from '../components/CartList'
export default {
  components: {
    CartList
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    checkout () {
      this.carts.forEach(el => {
        this.$store.dispatch('checkout', el)
      })
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      let total = 0
      const data = this.$store.state.carts
      data.forEach(el => {
        total += el.stock * el.Product.price
      })
      return total
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style>

</style>
