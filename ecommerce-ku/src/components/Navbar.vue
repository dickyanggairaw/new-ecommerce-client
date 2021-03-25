<template>
  <nav class="navbar navbar-light bg-dark" style="margin-bottom: 20px;">
    <div>
      <a class="navbar-brand text-light" href="#" @click.prevent="home">
        <img src="https://th.bing.com/th/id/OIP.EhAJP4dff2GBwuZzfICiSAHaE7?w=224&h=180&c=7&o=5&dpr=1.25&pid=1.7" width="30" height="30" class="d-inline-block align-top" style="border-radius: 20%;" alt="">
        Ecommerce Ku
      </a>
    </div>
    <div>
      <a href="" @click.prevent="history" v-if="isLoginUser"><i class="fas fa-history" style="height: 30px; width: 30px; color: white;"></i></a>
      <a href="" @click.prevent="wishlist" v-if="isLoginUser"><i class="fas fa-heart" style="height: 30px; width: 30px; color: white;"></i></a>
      <a href="" @click.prevent="cart" v-if="isLoginUser"><i class="fas fa-shopping-cart" style="height: 30px; width: 30px; color: white;"></i></a>
      <button class="btn text-light" type="button" @click="login" v-if="!isLoginUser">Login</button>
      <button class="btn text-light" type="button" @click="register" v-if="!isLoginUser">Register</button>
      <button class="btn text-light" type="button" @click="logout" v-if="isLoginUser">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    home () {
      this.$router.push('/')
    },
    cart () {
      this.$router.push('/carts')
    },
    isLogin () {
      this.$store.dispatch('isLogin')
    },
    logout () {
      this.$store.dispatch('logout')
    },
    wishlist () {
      this.$router.push('/wishlists')
    },
    history () {
      this.$router.push('/histories')
    }
  },
  computed: {
    isLoginUser () {
      return this.$store.state.isLogin
    }
  },
  created () {
    this.isLogin()
  }
}
</script>

<style>

</style>
