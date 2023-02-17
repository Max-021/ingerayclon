<template>
  <service-template
    :bannerName="servicio.banner"
    :description="servicio.descripcion"
  >
    <template v-slot:serviceTitle>
      <titles
        :title="servicio.titulo"
        :subtitle="servicio.subtitulo"
        :fontSize="31"
      ></titles>
    </template>
    <template v-slot:serviceInfo>
      <div class="flex flex-col">
        <titles
          title="Radiologia Convencional e Intervencionista"
          subtitle="Galería de Productos en Alquiler"
          :fontSize="31"
        ></titles>
        <div class="flex mt-6">
          <div>
            <div
              class="opcion-imagen opcion-activa font-bold"
              style="font-family: 'IngeTextBold', Arial, Helvetica, sans-serif"
            >
              Radiología Convencional
            </div>
            <div class="image-container flex justify-around gap-4 px-2 py-4">
              <mask-redirect-button
                :buttonText="redirectButtonText"
                :tabBackgroundImage="imagen_equipo_de_sala"
                :imageWidth="imageWidth"
                url="alquileres/equipos-de-sala"
              ></mask-redirect-button>
              <mask-redirect-button
                :buttonText="redirectButtonText"
                :tabBackgroundImage="imagen_equipo_movil"
                :imageWidth="imageWidth"
                url="alquileres/equipos-moviles"
              >
              </mask-redirect-button>
            </div>
          </div>
          <div>
            <div class="opcion-imagen">Radiología Intervencionista</div>
            <div class="image-container gap-4 px-2 py-4">
              <mask-redirect-button
                :buttonText="redirectButtonText"
                :tabBackgroundImage="imagen_arco_c"
                :imageWidth="imageWidth"
                url="alquileres/arcos-c"
              ></mask-redirect-button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </service-template>
</template>

<script>
import { serviceMixin } from "../../../assets/js/serviceMixin";
import ServiceTemplate from "../serviceTemplate.vue";
import MaskRedirectButtonVue from "../../Common/MaskRedirectButton.vue";
import seccionEcoVue from "../seccionEco.vue";

export default {
  props: ["slug"],
  mixins: [serviceMixin],
  components: {
    "service-template": ServiceTemplate,
    "mask-redirect-button": MaskRedirectButtonVue,
    imageWidth: "250px",
    "eco-seal": seccionEcoVue,
  },
  data() {
    return {
      servicio: "",
      redirectButtonText: "Ver Equipos",
      redirectBasePath: "alquileres",
    };
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
  computed: {
    imagen_equipo_de_sala() {
      return require(`@/assets/images/servicios/alquiler/equipos-sala.jpg`);
    },
    imagen_equipo_movil() {
      return require(`@/assets/images/servicios/alquiler/equipos-moviles.jpg`);
    },
    imagen_arco_c() {
      return require(`@/assets/images/servicios/alquiler/arcos-c.jpg`);
    },
  },
};
</script>

<style scoped>
.opcion-imagen {
  border-bottom: 2px solid gray;
  padding: 0 1rem;
  font-size: 15px;
}
.opcion-activa {
  color: var(--dark-bluish-green);
  border-bottom: 3px solid var(--dark-bluish-green);
}
.image-container img {
  width: 250px;
}
</style>