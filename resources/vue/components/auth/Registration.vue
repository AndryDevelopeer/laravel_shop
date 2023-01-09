<template>
  <section class="login-page pt-120 pb-120 wow fadeInUp animated">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8 col-md-9">
          <div class="login-register-form">
            <div class="top-title text-center ">
              <h2>Зарегистрироваться</h2>
              <p>Нет аккаунта?
                <router-link to="/auth">Войти</router-link>
              </p>
            </div>
            <form class="common-form">
              <div class="form-group">
                <input v-model="auth.form.email" type="text"
                       :class="auth.errors.email ? 'error-input' :''"
                       @input="auth.errors.email = null"
                       class="form-control" placeholder="Ваш емайл">
                <span class="error" v-for="(error, index) in auth.errors.email" :key="index">{{ error }}&ensp;</span>
              </div>
              <div class="form-group eye">
                <div class="icon icon-1">
                  <i :class="!auth.passwordVisible ?'flaticon-hidden':'flaticon-visibility'"
                     @click="auth.passwordVisible = !auth.passwordVisible"></i>
                </div>
                <input v-model="auth.form.password"
                       :type="auth.passwordVisible ?'text':'password'"
                       :class="auth.errors.password ? 'error-input' :''"
                       @input="auth.errors.password = null"
                       id="password-field" class="form-control"
                       placeholder="Пароль">
                <span class="error" v-for="(error, index) in auth.errors.password" :key="index">{{ error }}&ensp;</span>
              </div>
              <div class="checkk ">
                <div class="form-check p-0 m-0">
                </div>
                <a href="#"
                   class="forgot"> Забыли пароль?</a>
              </div>
              <button @click.prevent="sendForm" type="submit" class="style2">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {mapState} from 'vuex';

export default {
  name: "Auth",
  computed: mapState(['auth']),
  data() {
    return {}
  },
  methods: {
    sendForm(): void {
      this.$store.dispatch('registration')
    }
  }
}
</script>

<style scoped>
.form-control {
  cursor: text;
}
.form-control {
  height: 50px !important;
  cursor: text;
  font-size: 16px !important;
  background-color: #e5e5e5 !important;
}
.style2 {
  border-radius: 5px;
  font-size: 16px !important;
  background-color: #e5e5e5;
  height: 50px;
}
.style2:hover {
  background-color: #cdcdcd;
}
.style2:active {
  background-color: #a8a8a8;
}
.error {
  color: red;
  font-size: 13px;
}
.error-input {
  box-shadow: 0 0 5px red;
}
</style>