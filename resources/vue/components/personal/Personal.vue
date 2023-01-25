<template>
  <h1>personal</h1>
  <a href="#" @click.prevent="logOut">Выйти</a>
</template>

<script>

export default {
  name: "Personal",
  methods: {
    logOut() {
      this.$store.dispatch('logout')
    }
  },
  beforeCreate() {

  }
}
</script>

<style scoped>

</style>