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
        <titles
          title="Mejoramos la calidad de"
          subtitle="Atención de sus Pacientes"
          :fontSize="31"
        ></titles>
        <p class="text-justify text-xl" style="columns: 250px 2">
          Signos, colores y formas que se vinculan simbólicamente con ideas de
          alegría, paz, belleza y diversión serán entonces de inspiración para
          nuestros profesionales que colaborarán con una puesta en valor
          integral de ambientes y equipos. Esta propuesta alcanza a proyectos
          arquitectónicos en curso ó que requieran un desarrollo integral y
          desde cero. De manera que los equipos rodantes existentes que
          funcionen en salas de Pediatría intervenidos por nuestros
          profesionales del Diseño hacen de la entrada diaria de un Técnico
          Radiólogo con el aparato a la sala o habitación de internación, se
          transforme en un evento divertido, amigable y hasta esperado. Muchos
          equipos de sala nuevos o puestos en valor por nuestro equipo
          interdisciplinario demuestran hoy en día que la elección de un diseño
          cuidado ha dado los resultados esperados en lo que hace a nuestro
          aporte a la calidad de atención al paciente.
        </p>
        <div class="flex flex-wrap justify-around gap-5 mt-4">
          <div v-for="(ambientacion, index) in ambientaciones" :key="index">
            <picture-zoom-button
              sectionName="/servicios/ambientacion"
              :imageName="`/${ambientacion.nombre}`"
              imageExtension=".jpg"
              imageWith="315px"
            ></picture-zoom-button>
          </div>
        </div>
      </div>
    </template>
  </service-template>
</template>

<script>
import { serviceMixin } from "../../assets/js/serviceMixin";
import ServiceTemplate from "./serviceTemplate.vue";
import PictureZoomVue from "../Common/PictureZoom.vue";

export default {
  props: ["slug"],
  mixins: [serviceMixin],
  components: {
    "service-template": ServiceTemplate,
    "picture-zoom-button": PictureZoomVue,
  },
  data() {
    return {
      servicio: "",
      imagePicked: "",
      showModal: false,
      ambientaciones: [
        {
          nombre: "ambientacion1",
        },
        {
          nombre: "ambientacion2",
        },
        {
          nombre: "ambientacion3",
        },
      ],
    };
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
};
</script>