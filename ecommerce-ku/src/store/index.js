import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    carts: []
  },
  mutations: {
    isLogin (state, payload) {
      state.isLogin = payload
    },
    getProduct (state, payload) {
      state.products = payload
    },
    getCart (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
          context.commit('isLogin', true)
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    getProduct (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('getProduct', data)
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    addCart (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          swal('Success add cart product ' + payload.name)
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    getCart (context) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('getCart', data)
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    deleteCart (context, payload) {
      console.log(payload)
      axios({
        url: '/carts/' + payload.ProductId,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          swal('successfuly delete cart ' + payload.Product.name)
          context.dispatch('getCart')
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    updateStock (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: +payload.stock
        }
      })
        .then(() => {
          context.dispatch('getCart')
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    },
    isLogin (context) {
      if (localStorage.access_token) {
        context.commit('isLogin', true)
      }
    },
    logout (context) {
      localStorage.removeItem('access_token')
      context.commit('isLogin', false)
      router.push('/')
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(() => {
          swal('succes Register')
          router.push('/login')
        })
        .catch(err => {
          swal('error ' + err.response.data.errors)
        })
    }
  },
  modules: {
  }
})
