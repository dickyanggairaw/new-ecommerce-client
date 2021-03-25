<template>
  <div class="container">
    <h2>History List</h2>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody v-for="history in histories" :key="history.id">
        <HistoryList :history="history" />
      </tbody>
    </table>
  </div>
</template>

<script>
import HistoryList from '../components/HistoryList'
export default {
  components: {
    HistoryList
  },
  methods: {
    getHistories () {
      this.$store.dispatch('getHistories')
    }
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  },
  created () {
    this.getHistories()
  }
}
</script>

<style>

</style>
