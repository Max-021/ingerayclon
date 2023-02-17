<template>
  <product-template>
    <template v-slot:productInfo>
      <!-- Caracteristicas -->
      <caracteristicas :datos="producto.caracteristicas" />
      <!-- Especificaciones -->
      <especificaciones :datos="producto.especificaciones" />
      <!-- Configuracion de Sala -->
      <div class="pt-8 pb-4">
        <titles
          subtitle="Configuración de Sala"
          :lineHeight="20"
          :fontSize="25"
        ></titles>
        <titles
          :title="producto.configuracionDeSala.titulo"
          :fontSize="20"
        ></titles>
        <div class="images mt-4">
          <img
            :src="require(`@/assets/images/productos/humanos/${img.imagen}`)"
            v-for="(img, index) in producto.configuracionDeSala.imagenes"
            :key="index"
          />
        </div>
      </div>
      <!-- Galeria de imagenes para hacer Zoom -->
      <zoom-gallery
        :producto="producto"
        :title="producto.nombreCompleto"
        sectionName="radioDigital"
      ></zoom-gallery>
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
      producto: this.getProductEquipment(this.slug),
      showModal: false,
    };
  },
};
</script>
<style scoped>
.images {
  display: grid;
  gap: 0.5rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>