<template>
  <div class="register-form container-fluid d-flex justify-content-center align-items-center mb-3">
    <form class="vm-100">
      <h1 class="mb-3 text-center">Зарегистрироваться</h1>
      <div class="text-center mb-2"> У вас уже есть аккаунт?
        <router-link to="/auth">войти</router-link>
      </div>
      <div class="mb-3">
        <label for="inputEmail1" class="form-label">Емайл</label>
        <input :class="auth.registration.errors.login?'is-invalid':''"
               @input="clearErrors('login')"
               v-model="auth.registration.form.login"
               aria-describedby="emailHelp"
               class="form-control"
               id="inputEmail1"
               type="email">
        <div v-for="(error, inx) in auth.registration.errors.login " :key="inx" class="invalid-feedback">
          {{ error }}
        </div>
      </div>
      <label for="inputPassword1" class="form-label">Пароль</label>
      <div class="input-group mb-3">
        <input :class="auth.registration.errors.password?'is-invalid':''"
               :type="passwordHide ? 'password' : 'text'"
               @input="clearErrors('password')"
               v-model="auth.registration.form.password"
               id="inputPassword1"
               class="form-control">
        <button @click.prevent="passwordHide = !passwordHide"
                class="btn btn-outline-secondary" type="button" id="button-addon2">
          {{ passwordHide ? 'Показать' : 'Скрыть' }}
        </button>
        <div v-for="(error, inx) in auth.registration.errors.password " :key="inx" class="invalid-feedback">
          {{ error }}
        </div>
      </div>
      <label for="inputConfirm1" class="form-label">Подтверждение пароля</label>
      <div class="input-group mb-3">
        <input :class="auth.registration.errors.confirm?'is-invalid':''"
               :type="confirmHide ? 'password' : 'text'"
               @input="clearErrors('confirm')"
               v-model="auth.registration.form.confirm"
               id="inputConfirm1"
               class="form-control">
        <button @click.prevent="confirmHide = !confirmHide"
                class="btn btn-outline-secondary" type="button" id="button-addon3">
          {{ confirmHide ? 'Показать' : 'Скрыть' }}
        </button>
        <div v-for="(error, inx) in auth.registration.errors.confirm " :key="inx" class="invalid-feedback">
          {{ error }}
        </div>
      </div>
      <button @click.prevent="sendForm" type="submit" class="btn btn-primary">Зарегистрироватся</button>
    </form>
  </div>
</template>

<script lang="ts">
import router from "../../router";
import {mapState} from 'vuex';

export default {
  name: "Register",
  computed: mapState(['auth']),
  data() {
    return {
      passwordHide: true,
      confirmHide: true,
    }
  },
  methods: {
    clearErrors(field: string): void {
      this.$store.dispatch('clearErrors', {form: 'registration', field: field})
    },
    sendForm(): void {
      this.$store.dispatch('registration')
    }
  }
}
</script>

<style scoped>
.btn-outline-secondary:focus {
  box-shadow: none;
}
.register-form {
  height: 75vh !important;
  max-width: 360px;
}
</style>