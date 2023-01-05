<template>
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
                <input v-model="form.name"
                       @change="unsetError('name')"
                       :class="errors.name?'error':''"
                       type="text" class="form-control"
                       placeholder="Имя">
              </div>
              <div class="form-group">
                <input v-model="form.phone"
                       v-mask="'+7 (###) ###-##-##'"
                       :class="errors.phone?'error':''"
                       @input="unsetError('phone')"
                       type="tel" class="form-control"
                       placeholder="Телефон">
              </div>
              <div class="form-group">
                <input v-model="form.email"
                       @change="unsetError('email')"
                       :class="errors.email?'error':''"
                       type="email" class="form-control"
                       placeholder="Емайл">
              </div>
              <div class="form-group">
                <select v-model="form.gender" ref="gender" class="form-control select">
                  <option value="male">Мужчина</option>
                  <option value="female">Женщина</option>
                </select>
              </div>
              <div class="form-group">
                <input v-model="form.age" v-mask="'###'"
                       :class="errors.age?'error':''"
                       type="email" class="form-control"
                       placeholder="Возраст">
              </div>
              <div class="form-group">
                <input v-model="form.address"
                       :class="errors.address?'error':''"
                       type="email" class="form-control"
                       placeholder="Адрес">
              </div>
              <div class="form-group eye">
                <div class="icon icon-1" ref="password-hidden"
                     @click="changeVisibility('password')">
                  <i :class="passwordVisible?'flaticon-visibility':'flaticon-hidden'"></i>
                </div>
                <input v-model="form.password"
                       :class="errors.password?'error':''"
                       :type="passwordVisible ? 'text' : 'password'"
                       @input="unsetError('password')"
                       id="password-field"
                       class="form-control"
                       placeholder="Пароль">
                <div class="icon icon-2 " ref="password-visible"
                     @click="changeVisibility('password')">
                  <i :class="!passwordVisible?'flaticon-visibility':'flaticon-hidden'"></i>
                </div>
              </div>

              <div class="form-group eye">
                <div class="icon icon-1"
                     @click="changeVisibility('confirm')">
                  <i :class="confirmVisible?'flaticon-visibility':'flaticon-hidden'"></i>
                </div>
                <input v-model="form.confirm"
                       :class="errors.confirm?'error':''"
                       :type="confirmVisible ? 'text' : 'password'"
                       @input="unsetError('password')"
                       id="password-field-confirm"
                       class="form-control"
                       placeholder="Подтверждение пароля">
                <div class="icon icon-2"
                     @click="changeVisibility('confirm')">
                  <i :class="!confirmVisible?'flaticon-visibility':'flaticon-hidden'"></i>
                </div>
              </div>

              <div class="checkk">
                <div class="form-check p-0 m-0">
                  <input @change="unsetError('confirmation')" v-model="form.confirmation" type="checkbox" id="confirmation">
                  <label class="p-0" :class="errors.confirmation?'text-error':''" for="confirmation">
                    Соглашаюсь с политикой безопасности
                  </label>
                </div>
              </div>
              <button @click.prevent="sendForm" ref="submit" type="submit" class="style2">Регистрация</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import router from "../../router";

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: '',
        password: '',
        confirm: '',
        confirmation: false
      },
      errors: {
        name: null,
        email: null,
        phone: null,
        password: null,
        confirm: null,
        confirmation: null
      },
      passwordVisible: false,
      confirmVisible: false,
    }
  },
  watch: {
    errors() {
      return Object.values(this.errors)
    }
  },
  methods: {
    changeVisibility(type) {
      switch (type) {
        case 'confirm':
          this.confirmVisible = !this.confirmVisible
          break
        case 'password':
          this.passwordVisible = !this.passwordVisible
          break
      }
    },
    unsetError(field) {
      if (field === 'password' || field === 'confirm') {
        this.errors['password'] = null
        this.errors['confirm'] = null
      } else {
        this.errors[field] = null
      }
    },
    validate(): boolean {
      let success: boolean = true;

      if (!this.form.confirmation) {
        this.errors.confirmation = true
      }

      if (!this.form.name) {
        this.errors.name = 'Имя не заполнено'
      }

      if (!this.form.email) {
        this.errors.email = 'Емайл не заполнен'
      }

      if (this.form.phone.length < 18) {
        this.errors.phone = 'Не верный телефон ' + this.form.phone
      }

      if (this.form.password !== this.form.confirm) {
        this.errors.password = 'Пароли не совпадают'
        this.errors.confirm = 'Пароли не совпадают'
      }

      if (this.form.password.length <= 3 || this.form.password.length > 30) {
        this.errors.password = 'Длинна пароля должна быть от 3 до 30 символов'
      }

      Object.values(this.errors).forEach(el => {
        if (el) success = false;
      })
      return success;
    },
    sendForm() {
      if (!this.validate()) return;

      this.axios.post('/api/auth/register', JSON.stringify(this.form))
          .then(response => {
            if (response.status === 200 && response.data.success) {
              this.$refs.submit.disabled
              this.$refs.submit.innerText = 'Вы успешно зарегистрировались'
              setTimeout(() => {
                router.replace('auth')
              }, 2000)
            }
          })
    }
  },
  mounted() {
    this.$refs.gender.selectedIndex = 0
  }
}
</script>

<style scoped>
.common-form {

}
.select {
  height: 59px;
  padding-left: 30px;
  color: #7a7a7a;
  font-weight: 300;
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
}
.style2:hover {
  background-color: #cdcdcd;
}
.style2:active {
  background-color: #a8a8a8;
}
.error {
  box-shadow: 0 0 5px red;
}
.text-error {
  color: red;
}
.text-error:before {
  border: 1px solid red !important;
}
</style>