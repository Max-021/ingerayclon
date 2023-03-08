<template>
  <div class="padding-container flex flex-col gap-16 pb-16">
    <!-- Carousel -->
    <div class="bg-white relative h-fit mt-4 flex inge-shadow-down flex-wrap">
      <div class="carousel h-fit w-full flex">
        <arrowless-carousel
        class="inner-carousel"
        :product_name="this.productInfo.product_dev_name"
        product_type="vet"
        ></arrowless-carousel>
        <div class="py-8 pr-12 flex flex-col gap-8 responive-correction">
          <titles
            :title="this.productInfo.category_name"
            :subtitle="this.productInfo.product_name"
          ></titles>
          <p class="text-justify text-lg">
            {{ this.productInfo.product_carousel_text }}
          </p>
          <button
            class="contact-inge-button inge-shadow-down shadow-animated mt-8"
            @click="showContactMenu = true"
          >
            Quiero que me contacten
          </button>
        </div>
    </div>
      <!-- Boton de Contacto -->
      <button
          @click="showPasos = true"
          class="banner-contacto flex items-center gap-2 mb-10 -mt-2"
      >
        <div class="envelope"></div>
        <div class="text">
          <titles
            title="Contáctenos"
            subtitle="sobre este producto"
            class="banner-contacto-title"
            :fontSize="16"
            :lineHeight="10"
          ></titles>
        </div>
      </button>
      <a
        v-if="this.productInfo.product_shop_url"
        class="
          eshop-circle
          absolute
          -bottom-8
          right-8
          h-16
          w-16
          rounded-full
          bg-cover bg-no-repeat bg-center
        "
        :href="this.productInfo.product_shop_url"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/images/icons/footerIcons/veterinaria/carrito.svg') +
            ')',
        }"
        style="transform: scale(1.5)"
        target="_blank"
      >
      </a>
    </div>
    <!-- Caracteristicas -->
    <div class="flex flex-col gap-4 px-16">
      <div class="titles">
        <titles subtitle="Características"></titles>
        <titles title="Destacables de este equipo" :fontSize="18"></titles>
      </div>
      <div
        class="flex gap-4 justify-around"
        v-if="this.productInfo.products_characteristics_images"
      >
        <img
          :src="
            require(`@/assets/images/productos/veterinaria/caracteristicas/${characteristic}`)
          "
          v-for="(characteristic, index) in this.productInfo
            .products_characteristics_images"
          :key="index"
          width="19%"
        />
      </div>
      <p class="text-justify text-lg two-columns-text">
        {{ this.productInfo.product_description }}
      </p>
    </div>
    <!-- Galeria -->
    <div
      class="flex flex-col gap-4 px-16"
      v-if="this.productInfo.product_galery_images.length !== 0"
    >
      <titles title="Equipos de Sala" subtitle="Galería"></titles>
      <div class="tab-label">Imágenes Clínicas</div>
      <div class="flex justify-around gap-2">
        <picture-zoom-button
          v-for="(picture, index) in this.productInfo.product_galery_images"
          :key="index"
          sectionName="/productos/veterinaria/galeria"
          :imageName="`/${picture.picture_name}`"
          :imageExtension="picture.picture_extension"
          imageWith="300px"
        ></picture-zoom-button>
      </div>
    </div>
    <!-- Menu -->
    <div id="veterinaryFooter">
      <titles
        title="Conozca más"
        subtitle="Productos para Medicina Veterinaria"
      ></titles>
      <div class="grid grid-cols-4 grid-rows-2 gap-y-4 gap-8 mt-4">
        <router-link
          :to="producto.product_url"
          class="servicio-container flex flex-col"
          v-for="(producto, index) in menuProducts"
          :key="index"
        >
          <span class="pl-4 footer-menu-title">
            {{ producto.product_name }}
          </span>
          <img
            class="shadow-lg"
            :src="
              require(`@/assets/images/productos/veterinaria/footer-menu/${producto.product_dev_name}.png`)
            "
          />
        </router-link>
      </div>
    </div>
    <!-- Modal de form de Contacto -->
    <Modal
      :header="false"
      v-if="showContactMenu"
      @close="showContactMenu = false"
      large="sm"
    >
      <!-- Titulo del modal -->
      <template #title> Datos de contacto </template>
      <!-- Body y Footer del modal -->
      <template #content>
        <simple-contact-form
          @close="showContactMenu = false"
        ></simple-contact-form>
      </template>
    </Modal>
    <!-- Modal del formulario de tres pasos -->
    <Modal
      :header="false"
      v-if="showPasos"
      large="xl"
    >
      <!-- Form del modal -->
      <template #content>
        <form-pasos
        @close="showPasos = false"
        ></form-pasos>
      </template>
    </Modal>
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
.banner-contacto {
  height: 50px;
  background-color: #e6e6e6;
  padding: 2rem 4rem;
  width: 100%;
}
@media screen and (max-width: 830px) {
  .carousel {
    flex-direction: column;
  }
  .responive-correction{
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
  .contact-inge-button{
    margin-top: 0;
  }
  .inner-carousel {
    align-self: center;
  }
}
</style>
<script>
import { productMixin } from "../assets/js/productMixin";
import ArrowlessCarouselVue from "../components/Carousels/ArrowlessCarousel/ArrowlessCarousel.vue";
import PictureZoomVue from "../components/Common/PictureZoom.vue";
import Modal from "../components/Modal/Modal.vue";
import SimpleContactForm from "../components/Forms/SimpleContactForm.vue";
import ContactForm from '../components/Forms/ContactForm.vue'

export default {
  mixins: [productMixin],
  components: {
    "arrowless-carousel": ArrowlessCarouselVue,
    "picture-zoom-button": PictureZoomVue,
    "Modal": Modal,
    'simple-contact-form': SimpleContactForm,
    'form-pasos': ContactForm,
  },
  data() {
    return {
      productInfo: "",
      products: [],
      showContactMenu: false,
      showPasos: false,
    };
  },
  created() {
    this.productInfo = this.getVetEquipmentInfo(this.$route.params.categoria);
    this.products = this.getAllProducts();
  },
  computed: {
    menuProducts() {
      return this.products.filter(
        (equipment) => equipment.category_name !== "Accesorios"
      );
    },
  },
  watch: {
    "$route.params.categoria": {
      handler(newValue) {
        this.productInfo = this.getVetEquipmentInfo(
          this.$route.params.categoria
        );
        this.products = this.getAllProducts();
      },
      immediate: true,
    },
  },
};
</script>
<style>
#veterinaryFooter .router-link-exact-active {
  display: none;
}
.footer-menu-title {
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #0076a5;
}
</style>