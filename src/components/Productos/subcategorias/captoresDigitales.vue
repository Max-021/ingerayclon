<template>
  <product-template>
    <template v-slot:productInfo>
      <!-- Caracteristicas -->
      <caracteristicas :datos="producto.caracteristicas" />
      <!-- Especificaciones -->
      <especificaciones :datos="producto.especificaciones" />
      <img
        :src="require('@/assets/images/productos/humanos/mamo/mamo-banner.png')"
        alt="Banner Mamografia"
        width="100%"
        class="bg-white absolute left-0 mt-4"
      />
      <!-- Galeria -->
      <galeria-productos :datos="producto.galeria" class="mt-64" />
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
import GaleriaProductos from "../GaleriaProductos.vue";
import ProductTemplate from "../productTemplate.vue";
import BannerContacto from "../BannerContacto.vue";
import ContactForm from "../../Forms/ContactForm";

export default {
  props: ["slug"],
  mixins: [productMixin],
  components: {
    "product-template": ProductTemplate,
    caracteristicas: Caracteristicas,
    documentos: Documentos,
    especificaciones: Especificaciones,
    "galeria-productos": GaleriaProductos,
    "banner-contacto": BannerContacto,
    "contact-form": ContactForm,
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
</style>