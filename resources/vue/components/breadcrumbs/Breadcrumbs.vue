<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="crumb in breadcrumbs" class="breadcrumb-item">
        <router-link v-if="crumb.path" :to="crumb.path">{{ crumb.name }}</router-link>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
import router from "../../router";

export default {
  name: "Breadcrumbs",
  computed: {
    breadcrumbs() {
      return router.currentRoute.value.meta.breadcrumbs
    }
  }
}
</script>

<style scoped>
.breadcrumb-item a{
  text-decoration: none!important;
}
</style>