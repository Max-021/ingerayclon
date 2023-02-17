<template>
  <div class="flex flex-col gap-4 pt-8 mb-8">
    <titles :title="title" subtitle="Galería" :fontSize="25"></titles>
    <div
      class="opcion-imagen opcion-activa"
      style="font-family: 'IngeTextBold', Arial, Helvetica, sans-serif"
    >
      Imágenes Clinicas
    </div>
    <div class="flex flex-wrap gap-4 justify-around">
      <picture-zoom-button
        :sectionName="`/productos/humanos/${sectionName}/`"
        :imageName="img.baseImg"
        imageExtension=".png"
        imageWith="240px"
        v-for="(img, index) in producto.zoomGallery.slice(0, imagesToShow)"
        :key="index"
      >
      </picture-zoom-button>
    </div>
    <button
      class="contact-outline self-end px-6"
      @click="showAllImages = !showAllImages"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
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
</style>
<script>
import PictureZoomVue from "./PictureZoom.vue";

export default {
  props: ["producto", "title", "sectionName"],
  components: {
    "picture-zoom-button": PictureZoomVue,
  },
  data() {
    return {
      showAllImages: false,
    };
  },
  computed: {
    imagesToShow() {
      return this.showAllImages ? this.producto.zoomGallery.length : 3;
    },
    buttonText() {
      return this.showAllImages ? "Ver Menos" : "Ver Más";
    },
  },
};
</script>