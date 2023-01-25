<template>
  <header-component class="shadow-sm p-3 mb-4 bg-body rounded"></header-component>
  <main class="d-flex justify-content-center">
    <div class="w-75">
      <breadcrumbs/>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>

import HeaderComponent from "./header/HeaderComponent";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";

export default {
  name: "App",
  props: {user: Object},
  components: {Breadcrumbs, HeaderComponent},
  mounted() {
    console.log(this.user);
  }
}
</script>

<style>
body {
  background-color: #f6f6f6;
  height: auto;
}

</style>