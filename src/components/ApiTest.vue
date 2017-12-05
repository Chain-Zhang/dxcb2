<template>
  <div>
      api test
  </div>
</template>

<script>
export default {
  mounted(){
      this.$axios.get('/api?app_id=123456&method=demo.run')
      .then(response => {
          console.log(response.data)
      })
      .catch(err => {
          console.log(err)
      })
  }
}
</script>

<style scoped>

</style>

