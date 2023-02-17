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
        <div class="flex gap-4">
          <img
            src="@/assets/images/servicios/mantenimiento/personal.jpg"
            alt="foto de personal de la empresa"
            width="295px"
          />
          <div class="flex flex-col gap-4">
            <titles
              title="Características del"
              subtitle="Mantenimiento Preventivo"
              :fontSize="31"
            ></titles>
            <p class="text-justify text-xl">
              Consiste en visitas programadas para llevar a cabo las tareas
              periódicas listadas en los manuales y recomendaciones del
              fabricante de cada unidad o el requerimiento de los responsables
              del Área Técnica del cliente. Todo cargo relativo a las tareas del
              MP está incluído en el programa de control de calibración,
              limpieza, seguridad electromecánica y generación de informes y
              planillas de servicio para el contralor de Ingeniería Clínica.
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <titles
            subtitle="Mantenimiento Correctivo"
            :fontSize="31"
            :lineHeight="20"
          ></titles>
          <titles
            title="con Préstamo de Partes y Equipos"
            :fontSize="31"
          ></titles>
          <p class="text-justify mt-4 text-xl">
            Incluye servicio ilimitado de pedidos de Servicio Técnico (ST). En
            los casos en que el equipamiento bajo Abono presente fallas en su
            funcionamiento, el pedido del cliente se procesa en el mismo día,
            dando respuesta inmediata para programar y comenzar con las tareas
            de revisión , diagnóstico y reparación de las fallas. Los Abonos de
            Mantenimiento incluyen repuestos equivalentes a valores pactados de
            antemano con cada cliente, pudiendo representar un verdadero seguro
            técnico. En el caso de contratar la modalidad de mayor valor, se
            provee de equipos y partes de reemplazo durante el transcurso de la
            reparación de forma de minimizar el tiempo fuera de servicio del
            servicio o equipo.
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