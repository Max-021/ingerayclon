<template>
  <div class="flex flex-col gap-16 pb-16">
    <!-- Carousel -->
    <div class="carousel h-fit w-full mt-4 flex inge-shadow-down">
      <arrowless-carousel
        :product_name="this.productInfo.rental_equipment_dev"
        product_type="services"
      ></arrowless-carousel>
      <div class="py-8 pr-12 flex flex-col gap-8">
        <titles
          :title="this.productInfo.rental_equipment_category"
          :subtitle="this.productInfo.rental_equipment_name"
          :fontSize="31"
        ></titles>
        <p class="text-justify text-xl">
          {{ this.productInfo.rental_equipment_carousel_description }}
        </p>
        <button
          class="contact-inge-button inge-shadow-down shadow-animated mt-8"
        >
          Quiero que me contacten
        </button>
      </div>
    </div>
    <!-- Caracteristicas -->
    <div class="flex flex-col gap-4 px-16">
      <div class="titles">
        <titles :fontSize="31" subtitle="Características"></titles>
        <titles :fontSize="25" title="Destacables de este servicio"></titles>
      </div>
      <p class="text-justify text-xl leading-8 two-columns-text">
        {{ this.productInfo.rental_equipment_description }}
      </p>
    </div>
    <!-- Especificaciones -->
    <div class="flex flex-col gap-4">
      <div class="titles pl-16">
        <titles :fontSize="31" subtitle="Especificaciones"></titles>
        <titles :fontSize="25" title="Ficha Técnica"></titles>
      </div>
      <img
        v-for="(ficha, index) in this.productInfo
          .rental_equipment_technique_details"
        :key="index"
        :src="
          require(`@/assets/images/servicios/alquiler/fichas-tecnicas/${ficha}`)
        "
      />
    </div>
    <!-- Galeria -->
    <div
      class="flex flex-col gap-4 px-16"
      v-if="this.productInfo.rental_equipment_galery_images.length !== 0"
    >
      <titles
        :fontSize="31"
        title="Equipos de Sala"
        subtitle="Galería"
      ></titles>
      <div class="tab-label text-xl">Imágenes Clínicas</div>
      <div class="flex justify-around gap-2">
        <picture-zoom-button
          v-for="(picture, index) in this.productInfo
            .rental_equipment_galery_images"
          :key="index"
          sectionName="/servicios/alquiler/galeria"
          :imageName="`/${picture.basic_image}`"
          :imageExtension="picture.extension"
          imageWith="300px"
        ></picture-zoom-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tab-label {
  color: var(--gray);
  position: relative;
  height: fit-content;
  border-bottom: 3px solid #0076a5;
  padding-left: 1rem;
}
.contact-inge-button {
  width: fit-content !important;
  padding: 0.7rem 1rem;
}
.carousel {
  background-color: white !important;
}
</style>
<script>
import { serviceMixin } from "../../../assets/js/serviceMixin";
import ArrowlessCarouselVue from "../../Carousels/ArrowlessCarousel/ArrowlessCarousel.vue";
import PictureZoomVue from "../../Common/PictureZoom.vue";

export default {
  mixins: [serviceMixin],
  components: {
    "picture-zoom-button": PictureZoomVue,
    "arrowless-carousel": ArrowlessCarouselVue,
  },
  data: function () {
    return {
      productInfo: "",
    };
  },
  created() {
    const product = this.$route.params.product;
    this.productInfo = this.getRentInfo(product);
  },
};
</script>