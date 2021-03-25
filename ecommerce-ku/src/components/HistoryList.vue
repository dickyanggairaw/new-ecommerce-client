<template>
  <tr>
    <th scope="row">{{ history.name }}</th>
    <td><img :src="history.image_url" alt="" width="150" height="150" srcset=""></td>
    <td>{{ history.price }}</td>
    <td>{{ history.stock }}</td>
    <td>{{ history.createdAt }}</td>
  </tr>
</template>

<script>
export default {
  props: ['history']
}
</script>

<style>

</style>
