<template>
  <section class="login-page pt-120 pb-120 wow fadeInUp animated">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8 col-md-9">
          <div class="login-register-form"
               style="background-image: url('../../assets/images/inner-pages/login-bg.png');">
            <div class="top-title text-center ">
              <h2>Войти</h2>
              <p>Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
              </p>
            </div>
            <form class="common-form">
              <div class="form-group">
                <input v-model="form.email" type="text" class="form-control" placeholder="Ваш емайл">
              </div>
              <div class="form-group eye">
                <div class="icon icon-1">
                  <i class="flaticon-hidden"></i>
                </div>
                <input v-model="form.password" type="password" id="password-field" class="form-control"
                       placeholder="Пароль">
                <div class="icon icon-2 "><i class="flaticon-visibility"></i></div>
              </div>
              <div class="checkk ">
                <div class="form-check p-0 m-0">
                  <input v-model="form.remember" type="checkbox" id="remember">
                  <label class="p-0" for="remember"> Запомнить меня</label></div>
                <a href="#0"
                   class="forgot"> Забыли пароль?</a>
              </div>
              <button @click.prevent="sendForm" type="submit" class="btn--primary style2">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../../router";

export default {
  name: "Auth",
  data() {
    return {
      form: {
        email: null,
        password: null,
        remember: false
      }
    }
  },
  methods: {
    sendForm() {
      this.axios.post('/api/auth/login', JSON.stringify(this.form))
          .then(response => {
            if (response.status === 200 && response.data.success) {
              document.cookie = "accessToken=" + response.data.data.accessToken + "; max-age=900; path=/"
              router.replace('/personal')
            }
          })
    }
  },
  beforeMount() {
    this.axios.post('/api/auth/authorise', JSON.stringify(this.form))
        .then(response => {
          if (response.status === 200 && response.data.success) {
            router.replace('/personal')
          }
        })
  }
}
</script>

<style scoped>
.form-control {
  cursor: text;
}
</style>