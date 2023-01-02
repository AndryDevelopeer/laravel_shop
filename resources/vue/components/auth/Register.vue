<template>
  <!--Start Login Page-->
  <section class="login-page pt-100 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8 col-md-9 wow fadeInUp animated">
          <div class="login-register-form"
               style="background-image: url('../../assets/images/inner-pages/login-bg.png');">
            <div class="top-title text-center ">
              <h2>Регистрация</h2>
              <p>Уже есть аккаунт?
                <router-link to="/auth">Войти</router-link>
              </p>
            </div>
            <form class="common-form">
              <div class="form-group">
                <input v-model="form.name" type="text" class="form-control" placeholder="Имя">
              </div>
              <div class="form-group">
                <input v-model="form.phone" type="tel" class="form-control" placeholder="Phone">
              </div>
              <div class="form-group">
                <input v-model="form.email" type="email" class="form-control" placeholder="Your Email">
              </div>
              <div class="form-group eye">
                <div class="icon icon-1"><i class="flaticon-hidden"></i></div>
                <input v-model="form.pass" type="password" id="password-field" class="form-control"
                       placeholder="Пароль">
                <div class="icon icon-2 "><i class="flaticon-visibility"></i></div>
              </div>
              <div class="form-group eye">
                <div class="icon icon-1"><i class="flaticon-hidden"></i></div>
                <input v-model="form.confirm"
                       type="password" id="password-field-confirm" class="form-control"
                       placeholder="Подтверждение пароля">
                <div class="icon icon-2 "><i class="flaticon-visibility"></i></div>
              </div>
              <div class="checkk ">
                <div class="form-check p-0 m-0">
                  <input v-model="form.remember" type="checkbox" id="remember">
                  <label class="p-0" for="remember"> Соглашаюсь с политикой безопасности </label>
                </div>
              </div>
              <button @click.prevent="sendForm" type="submit" class="btn--primary style2">Регистрация</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        pass: null,
        confirm: null,
        remember: false
      }
    }
  },
  methods: {
    sendForm() {
      this.axios.post('/api/auth/register', JSON.stringify(this.form))
          .then(response => {
            console.log(response);
          })
    }
  }
}
</script>

<style scoped>
.form-control {
  cursor: text;
}
</style>