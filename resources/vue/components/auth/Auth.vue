<template>
  <section class="login-page pt-120 pb-120 wow fadeInUp animated">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-8 col-md-9">
          <div class="login-register-form"
               style="background-image: url('../../assets/images/inner-pages/login-bg.png');">
            <div class="top-title text-center ">
              <h2>Войти</h2>
              <p>Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></p>
            </div>
            <form class="common-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Ваш телефон">
              </div>
              <div class="form-group eye">
                <div class="icon icon-1">
                  <i class="flaticon-hidden"></i>
                </div>
                <input type="password" id="password-field" class="form-control" placeholder="Пароль">
                <div class="icon icon-2 "><i class="flaticon-visibility"></i></div>
              </div>
              <div class="checkk ">
                <div class="form-check p-0 m-0">
                  <input type="checkbox" id="remember">
                  <label class="p-0" for="remember"> Запомнить меня</label></div>
                <a href="#0"
                   class="forgot"> Забыли пароль?</a>
              </div>
              <button type="submit" class="btn--primary style2">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Auth"
}
</script>

<style scoped>
.form-control {
  cursor: text;
}
</style>