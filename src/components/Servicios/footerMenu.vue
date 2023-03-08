<template>
  <div class="padding-container py-10 flex flex-col gap-4" id="servicesFooter">
    <titles
      title="Conozca más sobre nuestro"
      subtitle="Prestaciones y servicios"
      :fontSize="31"
      class="pl-4"
    ></titles>
    <div class="grid grid-cols-4 grid-rows-2 gap-y-4 gap-8 mt-4">
      <router-link
        :to="servicios[index - 1].url"
        class="servicio-container flex flex-col"
        v-for="index in 9"
        :key="index"
      >
        <span class="pl-4 footer-menu-title"> {{ servicios[index - 1].nombreCorto }} </span>
        <img class="shadow-lg" :src="servicios[index - 1].miniBanner" />
      </router-link>
    </div>
  </div>
</template>

<script>
import servicios from "../../assets/js/servicios.json";
export default {
  data() {
    return {
      servicios: [],
      supportIf: true,
    };
  },
  created() {
    this.showSupport();
    this.setServices();
  },
  watch: {
    $route(to, from) {
      this.show = false;
      this.setServices();
    },
  },
  methods: {
    showSupport() {
      if(this.$route.path.split('/')[1] !== 'servicios') {
        this.supportIf = false;
      } else {
        this.supportIf = true;
      } 
    },
    setServices() {
      if(this.$route.path.split('/')[1]==='servicios') {
        let serviceUrl = this.$route.path.split("/")[2];

        let preService = servicios.servicios.find(
          (servicio) => servicio.url === serviceUrl
          );
          let exception = preService.exception;
          
          let listOfServices = servicios.servicios.map((servicio) => {
            return {
              ...servicio,
              miniBanner: require(`@/assets/images/servicios/footer-menu/${servicio.url}.jpg`),
            };
          });
          
          this.servicios = listOfServices.filter(
            (servicio) => servicio.url != exception
            );
      }
        this.servicios = servicios.servicios.map((servicio) => {
          return {
            ...servicio,
            miniBanner: require(`@/assets/images/servicios/footer-menu/${servicio.url}.jpg`)
          }
        })
        console.log(this.servicios)
    },
  },
};
</script>

<style scoped>
#servicesFooter {
  background-color: var(--light-gray);
}
#servicesFooter .router-link-exact-active {
  display: none;
}
.footer-menu-title {
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #0076a5;
}
</style>