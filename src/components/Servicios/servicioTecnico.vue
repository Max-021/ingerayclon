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
      <div class="flex flex-col gap-4">
        <div>
          <img
            src="@/assets/images/servicios/servicio-tecnico/personal.jpg"
            alt="foto de personal de la empresa"
            class="float-left mr-4 mb-1"
            width="320px"
          />
          <titles
            title="Mayores prestaciones en"
            subtitle="Pedidos de Servicio Técnico"
            :fontSize="31"
          ></titles>
          <p class="text-justify mt-4 text-xl">
            Además nuestros clientes, desde sus divisiones de Compras,
            Ingeniería Clínica, Bioingeniería y Mantenimiento pueden requerir y
            recibir presupuestos para la realización de
            <router-link
              to="/servicios/mantenimiento"
              class="font-black underline"
              >Abonos de Mantenimiento Preventivo</router-link
            >
            (MP) programado según las especificaciones de los manuales de
            servicio de cada equipo o para
            <router-link
              to="/servicios/mantenimiento"
              class="font-black underline"
              >Mantenimiento Correctivo</router-link
            >
            (MC) en el caso en que uno o varios equipos presenten fallas que
            dificulten o imposibiliten el uso normal del mismo. También
            confeccionamos y enviamos el
            <a href="mailto: ventas@ingeray.com.ar" class="font-black underline"
              >presupuesto acotado</a
            >
            a las necesidades del momento y trabajamos junto con los Médicos,
            Técnicos Radiólogos, Bioingenieros y profesionales del Área de
            Imágenes para lograr que los equipos bajo reparación alcancen los
            mejores estándares de calidad teniendo también en cuenta el uso
            intensivo de algunos servicios en los que el TFS (Tiempo Fuera de
            Servicio) debe estar programado o tener un índice reducido.
          </p>
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