<template>
  <div style="margin-left: 30px">
    <section class="my-account-page pt-120 pb-120">
      <div class="container">
        <div class="row wow fadeInUp animated">
          <div class="col-xl-3 col-lg-4">
            <div class="d-flex align-items-start">
              <div class="nav my-account-page__menu flex-column nav-pills me-3" id="v-pills-tab"
                   role="tablist" aria-orientation="vertical">
                <button class="nav-link selected" id="v-pills-account-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-account" type="button" role="tab"
                        aria-controls="v-pills-account" aria-selected="false">
                  <span> Личные данные</span>
                </button>
                <button class="nav-link" id="v-pills-orders-tab"
                        data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab"
                        aria-controls="v-pills-orders" aria-selected="false">
                  <span> История заказов</span></button>
                <button class="nav-link" id="v-pills-downloads-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-downloads" type="button" role="tab"
                        aria-controls="v-pills-downloads" aria-selected="false">
                  <span> Избранное</span>
                </button>
                <a v-if="personal.user?.role_id === adminRoleId" href="/admin"
                   class="nav-link"><span> Панель администратора </span></a>
                <button @click.prevent="logout" class="nav-link"><span> Выйти </span></button>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="tab-content " id="v-pills-tabContent">

              <h4 class="title"><span v-if="personal.user?.role_id === adminRoleId">Hello Admin</span></h4>
              <div class="tab-pane fade show active" id="v-pills-account" role="tabpanel"
                   aria-labelledby="v-pills-account-tab">
                <div class="tabs-content__single">
                  <div v-for="(field, index) in personal.user" :key="index">
                    <h5><span>{{ index }}: {{ field ?? '-' }}</span></h5>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="v-pills-orders" role="tabpanel"
                   aria-labelledby="v-pills-orders-tab">
                <div class="tabs-content__single">
                  <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                    <span>Password and account details</span></h5>
                </div>
              </div>

              <div class="tab-pane fade" id="v-pills-downloads" role="tabpanel"
                   aria-labelledby="v-pills-downloads-tab">
                <div class="tabs-content__single">
                  <h5>From your account dashboard you can view your <span>Recent Orders, manage your
                                            shipping</span> and <span>billing addresses,</span> and edit your
                    <span>Password and account details</span></h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Personal",
  computed: mapState(['personal']),
  data() {
    return {
      adminRoleId: 1
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  beforeCreate() {
    this.$store.dispatch('getUserData')
  }
}
</script>

<style scoped>
.title {
  margin: 15px 0 0 8px;
}
</style>