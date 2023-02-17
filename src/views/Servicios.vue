<template>
  <div class="">
    <div class="padding-container">
      <router-view />
    </div>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import footerMenuVue from "../components/Servicios/footerMenu.vue";
export default {
  components: { "footer-menu": footerMenuVue },
};
</script>

<style>
</style>