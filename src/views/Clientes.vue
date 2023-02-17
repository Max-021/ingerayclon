<template>
  <div>
    <div class="padding-container">
      <div class="contact-container flex flex-col gap-12 pb-12">
        <banner-box :bannerName="bannerCliente">
          <template v-slot:title>
            <titles
              title="Conózcanos a través de"
              subtitle="Quienes nos eligen"
              :fontSize="31"
            ></titles>
          </template>
          <template v-slot:stuff>
            <p class="simple-text mt-8 text-justify">
              Como proveedores de productos y servicios de Tecnología Médica,
              una de nuestras prioridades es la satisfacción de nuestros
              clientes, el trato con todos los usuarios y la calidad en nuestro
              desempeño profesional. Conocemos los valores de cada cliente y por
              eso ayudamos a cimentar y hacer crecer una relación que nos
              enriquece como humanos desde el trato personalizado que permite
              alcanzar soluciones técnicas y comerciales eficaces y
              sistematizadas. Damos las gracias a los clientes que nos eligieron
              y nos eligen desde hace 30 años.
            </p>
          </template>
        </banner-box>
        <clients @openText="showText = !showText"></clients>
      </div>
    </div>
    <div class="bg-white" v-if="showText">
      <text-checklist
        title="Conozca más sobre"
        subtitle="Los valores que nos mueven"
        :list="valores"
        :extraPadding="true"
      >
        <template v-slot:button>
          <router-link
            class="contact-inge-button self-end py-2 px-8"
            to="/quienes-somos"
            >Quiénes Somos</router-link
          ></template
        >
      </text-checklist>
    </div>
  </div>
</template>

<script>
import BannerWithBotVue from "../components/Common/BannerWithBot.vue";
import clientsListVue from "../components/Clientes/clients-list.vue";
import { valores } from "@/assets/js/valores.json";
import TextList from "../components/Common/TextList.vue";

export default {
  components: {
    "banner-box": BannerWithBotVue,
    clients: clientsListVue,
    "text-checklist": TextList,
  },
  data() {
    return {
      bannerCliente: `${this.$imageCDN}/banner_clientes.jpg`,
      showText: false,
      valores,
    };
  },
};
</script>

<style>
.simple-text {
  font-size: 23px !important;
}
</style>