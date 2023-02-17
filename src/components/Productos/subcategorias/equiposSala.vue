<template>
  <product-template>
    <template v-slot:productInfo>
      <!-- Caracteristicas -->
      <caracteristicas :datos="producto.caracteristicas" />
      <!-- Especificaciones -->
      <especificaciones :datos="producto.especificaciones" />
      <!-- Galeria de imagenes para hacer Zoom -->
      <zoom-gallery
        :producto="producto"
        :title="producto.nombreCompleto"
        sectionName="radioConvencional"
      ></zoom-gallery>
      <!-- Datos tecnicos y tecnologicos -->
      <titles
        :fontSize="25"
        subtitle="Datos Técnicos y Técnologicos"
        :lineHeight="20"
      ></titles>
      <titles
        :fontSize="20"
        title="Equipamiento Analógico para Salas de Radiología Convencional"
      ></titles>
      <img
        :src="producto.datosTecnicos.tabla"
        :alt="producto.datosTecnicos.titulo"
        class="mt-4 mb-8"
      />
      <!-- Generadores y Consolas -->
      <titles
        :fontSize="25"
        subtitle="Generadores & Consolas"
        :lineHeight="20"
      ></titles>
      <titles
        :fontSize="20"
        title="Variedad de opciones para Equipamiento de alta Frecuencia"
      ></titles>
      <div class="generadores-images mt-4">
        <img
          v-for="(img, index) in producto.generadoresConsolas.imagenes"
          :key="index"
          :src="require(`@/assets/images/productos/humanos/${img.imagen}`)"
        />
      </div>
      <!-- Documentos -->
      <documentos :brochures="producto.brochures" />
    </template>
    <!-- Formulario de contacto -->
    <modal :header="false" v-if="showModal">
      <template #content>
        <contact-form
          @closeModal="showModal = false"
          :producto="producto.nombreCompleto"
        ></contact-form>
      </template>
    </modal>
  </product-template>
</template>
<script>
import { productMixin } from "../../../assets/js/productMixin";
import Caracteristicas from "../Caracteristicas.vue";
import Documentos from "../Documentos.vue";
import Especificaciones from "../Especificaciones.vue";
import ProductTemplate from "../productTemplate.vue";
import BannerContacto from "../BannerContacto.vue";
import ContactForm from "../../Forms/ContactForm";
import ZoomGalleryVue from "../../Common/ZoomGallery.vue";

export default {
  props: ["slug"],
  mixins: [productMixin],
  components: {
    "product-template": ProductTemplate,
    caracteristicas: Caracteristicas,
    documentos: Documentos,
    especificaciones: Especificaciones,
    "banner-contacto": BannerContacto,
    "contact-form": ContactForm,
    "zoom-gallery": ZoomGalleryVue,
  },
  data() {
    return {
      producto: "",
      showModal: false,
    };
  },
  beforeMount() {
    this.producto = this.getProductEquipment(this.slug);
  },
};
</script>
<style scoped>
.generadores-images {
  display: grid;
  row-gap: 2rem;
  column-gap: 5px;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
}
.generadores-images img {
  max-height: 270px;
}
</style>