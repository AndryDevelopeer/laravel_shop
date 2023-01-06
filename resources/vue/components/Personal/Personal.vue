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
                        aria-controls="v-pills-account" aria-selected="false"><span> Account Details</span>
                </button>
                <button class="nav-link" id="v-pills-orders-tab"
                        data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab"
                        aria-controls="v-pills-orders" aria-selected="false"><span> Orders</span></button>
                <button class="nav-link" id="v-pills-downloads-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-downloads" type="button" role="tab"
                        aria-controls="v-pills-downloads" aria-selected="false"><span> Downloads</span>
                </button>
                <button @click.prevent="logout" class="nav-link"><span> Logout </span></button>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="tab-content " id="v-pills-tabContent">

              <h4 class="title"><span v-if="user?.role_id === 2">Hello Admin</span></h4>
              <div class="tab-pane fade show active" id="v-pills-account" role="tabpanel"
                   aria-labelledby="v-pills-account-tab">
                <div class="tabs-content__single">
                  <div v-for="(field, index) in user" :key="index"><h5><span>{{ index }}: {{ field ?? '-' }}</span></h5></div>
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
import router from "../../router";

export default {
  name: "Personal",
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  beforeCreate() {
    this.axios.get('/api/personal')
        .then(response => {
          const result = response.data
          !result.success ? router.replace('auth') : this.user = result.data;
        })
  }
}
</script>

<style scoped>
.title {
  margin: 20px 0 0 8px;
}
</style>