<template>
  <div style="margin-left: 30px">
    <br>
    <h2>Личный кабинет</h2>
    <br>
    <div><a @click.prevent="logout" href="#">Выйти</a></div>
    <br>
    <div>
      <div v-for="(field, index) in user" :key="index">{{ index }}: {{ field ?? '-' }}</div>
    </div>
    <br>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "Personal",
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  beforeCreate() {
    this.axios.get('/api/personal')
        .then(response => {
          const result = response.data
          !result.success ? router.replace('auth') : this.user = result.data;
        })
  }
}
</script>

<style scoped>

</style>