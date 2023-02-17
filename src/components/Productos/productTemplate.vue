<template>
  <div class="flex flex-col gap-12 pb-16">
    <div class="carousel h-fit w-full mt-4 flex inge-shadow-down">
      <arrowless-carousel
        :product_name="product.nombreCategoria"
        product_type="human"
      ></arrowless-carousel>
      <div class="py-8 pr-12 flex flex-col gap-8">
        <titles
          :title="product.nombreCategoriaGeneral"
          :subtitle="product.nombreCompleto"
        ></titles>
        <p class="text-justify text-lg">
          {{ product.descripcion }}
        </p>
        <img
          v-if="product.ecoSeal"
          :src="require('@/assets/images/sello-eco.png')"
          alt=""
        />
        <button
          class="contact-inge-button inge-shadow-down shadow-animated mt-8"
        >
          Quiero que me contacten
        </button>
      </div>
    </div>
    <div class="px-16">
      <slot name="productInfo"></slot>
    </div>
  </div>
</template>
  
  <script>
import { productMixin } from "../../assets/js/productMixin";
import ArrowlessCarousel from "../Carousels/ArrowlessCarousel/ArrowlessCarousel";

export default {
  props: ["bannerName", "description"],
  mixins: [productMixin],
  components: { "arrowless-carousel": ArrowlessCarousel },
  computed: {
    productBanner() {
      const productName = this.$route.path.split("/")[2];
      return `${this.$imageCDN}/banner-product-${productName}.jpg`;
    },
  },
  data() {
    return {
      product: "",
    };
  },
  created() {
    const productName = this.$route.path.split("/")[2];
    this.product = this.getProductEquipment(productName);
  },
};
</script>
  
<style>
.carousel {
  background-color: white !important;
}

.contact-inge-button {
  width: fit-content !important;
  padding: 0.7rem 1rem;
}
</style>