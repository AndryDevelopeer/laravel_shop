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
                <input v-model="form.email" type="text"
                       :class="errors.email ? 'error-input' :''"
                       @input="errors.email = null"
                       class="form-control" placeholder="Ваш емайл">
                <span class="error" v-for="(error, index) in errors.email" :key="index">{{ error }}&ensp;</span>
              </div>
              <div class="form-group eye">
                <div class="icon icon-1">
                  <i :class="!passwordVisible ?'flaticon-hidden':'flaticon-visibility'"
                     @click="passwordVisible = !passwordVisible"></i>
                </div>
                <input v-model="form.password"
                       :type="passwordVisible ?'text':'password'"
                       :class="errors.password ? 'error-input' :''"
                       @input="errors.password = null"
                       id="password-field" class="form-control"
                       placeholder="Пароль">
                <span class="error" v-for="(error, index) in errors.password" :key="index">{{ error }}&ensp;</span>
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

<script>
import router from "../../router";

export default {
  name: "Auth",
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      passwordVisible: false,
      errors: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    sendForm() {
      this.axios.post('/api/auth/login', JSON.stringify(this.form))
          .then(response => {
            const result = response?.data
            if (result?.success) {
              document.cookie = "accessToken=" + result.data.accessToken + "; max-age=900; path=/"
              window.localStorage.setItem('refreshToken', result.data.accessToken)
              router.replace('/personal')
            } else {
              this.errors.email = result.errors.email
              this.errors.password = result.errors.password
            }
          })
          .catch((error) => {
            this.errors.email = error.response.data.errors.email
            this.errors.password = error.response.data.errors.password
          })
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