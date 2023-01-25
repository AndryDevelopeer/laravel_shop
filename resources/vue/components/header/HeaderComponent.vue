<template>
  <div>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Главная</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="catalog">Каталог</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="favorites">Избранное</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="user" class="nav-link" to="personal">Личный кабинет</router-link>
        <router-link v-else class="nav-link" to="auth">Войти</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "HeaderComponent",
  computed: mapState(['user']),
}
</script>

<style scoped>
.router-link-active {
  color: #fff;
  background-color: #0d6efd;
  border-radius: 0.25rem;
}
</style>