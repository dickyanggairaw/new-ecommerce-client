<template>
  <div class="container">
    <h1>Register</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" @click.prevent="register" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
