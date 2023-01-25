<template>
  <div class="auth-form container-fluid d-flex justify-content-center align-items-center mb-3">
    <form>
      <h1 class="mb-3 text-center">Войти</h1>
      <div class="text-center mb-2"> У вас нет аккаунта?
        <router-link to="/register">зарегистрироваться</router-link>
      </div>
      <div class="mb-3">
        <label for="inputEmail1" class="form-label">Емайл</label>
        <input :class="auth.authentication.errors.login?'is-invalid':''"
               @input="clearErrors('login')"
               v-model="auth.authentication.form.login"
               aria-describedby="emailHelp"
               class="form-control"
               id="inputEmail1"
               type="email">
        <div v-for="(error, inx) in auth.authentication.errors.login " :key="inx" class="invalid-feedback">
          {{ error }}
        </div>
      </div>
      <label for="inputPassword1" class="form-label">Пароль</label>
      <div class="input-group mb-3">
        <input :class="auth.authentication.errors.password?'is-invalid':''"
               :type="passwordHide ? 'password' : 'text'"
               @input="clearErrors('password')"
               v-model="auth.authentication.form.password"
               id="inputPassword1"
               class="form-control">
        <button @click.prevent="passwordHide = !passwordHide"
                class="btn btn-outline-secondary" type="button" id="button-addon2">
          {{ passwordHide ? 'Показать' : 'Скрыть' }}
        </button>
        <div v-for="(error, inx) in auth.authentication.errors.password " :key="inx" class="invalid-feedback">
          {{ error }}
        </div>
      </div>
      <button @click.prevent="sendForm" type="submit" class="btn btn-primary">Войти</button>
    </form>
  </div>
</template>

<script lang="ts">
import {mapState} from 'vuex';

export default {
  name: "Auth",
  computed: mapState(['auth']),
  data() {
    return {
      passwordHide: true
    }
  },
  methods: {
    sendForm(): void {
      this.$store.dispatch('login')
    },
    clearErrors(field: string): void {
      if (this.auth['authentication'].errors[field]) this.$store.dispatch('clearErrors', {
        form: 'authentication',
        field: field
      })
    }
  }
}
</script>

<style scoped>
.btn-outline-secondary:focus {
  box-shadow: none;
}
.auth-form {
  height: 75vh!important;
  max-width: 360px;
}
</style>