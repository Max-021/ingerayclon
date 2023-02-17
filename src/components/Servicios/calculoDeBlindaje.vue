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
          title="Conozca más sobre el servicio de"
          subtitle="Nuestros Profesionales"
          class="pl-8"
          :fontSize="31"
        ></titles>
        <div class="flex gap-8">
          <div class="w-1/2">
            <img
              src="@/assets/images/servicios/blindaje/blindaje-izquierda.jpg"
              alt="texto"
            />
          </div>
          <div class="w-1/2">
            <img
              src="@/assets/images/servicios/blindaje/blindaje-derecha.jpg"
              alt="texto"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <titles
            title="Certificaciones ante"
            subtitle="Organismos Oficiales"
            :fontSize="31"
            class="pl-8"
          ></titles>
          <ul class="flex flex-wrap justify-around">
            <li>
              <img
                src="@/assets/images/logos-clientes/ministerio-de-salud.png"
                alt="logo del ministerio de salud de la nación"
                width="250"
              />
            </li>
            <li>
              <img
                src="@/assets/images/logos-clientes/gba.png"
                alt="logo del gobierno de buenos aires"
                width="250"
              />
            </li>
            <li>
              <img
                src="@/assets/images/logos-clientes/gcba.png"
                alt="logo de logo del gobierno de la ciudad de buenos aires"
                width="250"
              />
            </li>
          </ul>
          <img
            src="@/assets/images/logos-clientes/anmat.png"
            alt="logo de anmat"
            width="250"
            class="self-center"
          />
        </div>
      </div>
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
    };
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
};
</script>

<style>
</style>