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
      <div class="flex flex-col gap-6">
        <titles
          title="Conozca los alcances de estar"
          subtitle="Asistido Tecnológicamente"
          :fontSize="31"
          class="pl-6"
        ></titles>
        <div class="flex gap-8">
          <div class="w-1/2">
            <img
              src="@/assets/images/servicios/asistencia-remota/texto-izquierda.jpg"
              alt="texto"
            />
          </div>
          <div class="w-1/2 flex flex-col">
            <img
              src="@/assets/images/servicios/asistencia-remota/texto-derecha.jpg"
              alt="texto"
            />
            <div
              class="x-ray bg-contain bg-no-repeat bg-center overflow-hidden"
            >
              <div
                class="
                  green-container
                  w-full
                  h-full
                  flex flex-col
                  justify-center
                  items-center
                  gap-2
                "
              >
                <titles
                  title="Visualice la calidad de nuestras"
                  subtitle="Intervenciones"
                  :fontSize="31"
                  id="x-ray-text-button"
                ></titles>
                <button
                  class="contact-inge-button z-10"
                  type="button"
                  @click="showModal = true"
                >
                  Ampliar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal large="lg" @close="showModal = false" v-if="showModal">
        <template #content class="relative">
          <button
            type="button"
            @click="showModal = false"
            style="font-size: 60px"
            class="absolute top-2 right-2 text-xl text-white"
          >
            <span>&times;</span>
          </button>
          <img
            src="@/assets/images/servicios/asistencia-remota/zoom-column.jpg"
            alt="imagen ampliada rayos x columna"
          />
        </template>
      </modal>
    </template>
  </service-template>
</template>

<script>
import { serviceMixin } from "../../assets/js/serviceMixin";
import ServiceTemplate from "./serviceTemplate.vue";

export default {
  props: ["slug"],
  mixins: [serviceMixin],
  components: {
    "service-template": ServiceTemplate,
  },
  data() {
    return {
      servicio: "",
      showModal: false,
      imageUrl: "assets/images/servicios/asistencia-remota",
    };
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
};
</script>

<style>
.x-ray {
  height: 356px;
  background-image: url("~@/assets/images/servicios/asistencia-remota/mini-column.jpg");
}
.green-container {
  position: relative;
  background-color: rgb(12, 127, 126, 0.3);
  transition: all 0.3s ease-in-out;
}
.green-container:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(3px);
}
#x-ray-text-button .title,
#x-ray-text-button .sub-title {
  text-align: center !important;
  color: white !important;
}
</style>