<template>
  <h1>PERSONAL PAGE</h1>
  <a @click.prevent="logout" href="#">logout</a>
</template>

<script>
import router from "../../router";

export default {
  name: "Personal",
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  beforeCreate() {
    this.axios.post('/api/auth/authorise', JSON.stringify(this.form))
        .then(response => {
          if (!response.data.success) {
            router.replace('/auth')
          }
        })
  }
}
</script>

<style scoped>

</style>