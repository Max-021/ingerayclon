<template>
  <div class="flex flex-col flex-wrap gap-20">
    <div class="padding-container flex flex-col gap-16">
      <!-- PRESENTACION -->
      <div class="inge-shadow-down presentation pt-4 bg-white">
        <!-- Banner Principal con imagen de la empresa -->
        <img :src="`${this.$imageCDN}/banner-home.jpg`" alt="banner home" />
        <div class="presentation-text">
          <titles
            title="Somos proveedores de Tecnología Médica"
            subtitle="Comprometidos con la salud"
            :fontSize="31"
            :lineHeight="40"
            class="leading-9"
          ></titles>
          <p class="simple-text">
            Inge Ray SRL es una empresa argentina creada en 1992 y desde
            entonces nos comprometimos y dedicamos a brindar Soluciones
            Tecnológicas para la Salud que permitan a nuestros clientes ofrecer
            una medicina de calidad. Nos especializamos en Equipamiento Médico
            para Diagnóstico por Imágenes tanto para Medicina Humana como para
            Medicina Veterinaria. Distribuimos, comercializamos y alquilamos una
            amplia gama de equipos y periféricos de radiología convencional y
            digital, de mamografía y de ultrasonografía de producción nacional e
            internacional.
          </p>
        </div>
        <!-- Boton de Contacto -->
        <button
          @click="showContactMenu = true"
          class="banner-contacto flex items-center gap-2 mb-10 -mt-2"
        >
          <div class="envelope"></div>
          <div class="text">
            <titles
              title="Tengo una consulta"
              subtitle="Quiero que me contacten"
              class="banner-contacto-title"
              :fontSize="16"
              :lineHeight="10"
            ></titles>
          </div>
        </button>
      </div>
      <!-- Carousel "Los mas Buscados" -->
      <polimorfic-carousel
        title="Galería de Productos"
        subtitle="Los más buscados"
        :isExtended="false"
        :elements="productos"
        :showCheckout="false"
      ></polimorfic-carousel>
    </div>
    <banner-carousel :elements="banner1"></banner-carousel>
    <div class="padding-container flex flex-col gap-16">
      <!-- Banner de "Contratos de Alquiler de Equipamiento Medico" -->
      <router-link to="/servicios/alquileres">
        <img
          :src="`${this.$imageCDN}/home-banner-alquileres.jpg`"
          alt="banner-alquileres"
        />
      </router-link>
      <!-- Carousel "Prestaciones y Servicios" -->
      <polimorfic-carousel
        title="Conozca más"
        subtitle="Prestaciones y Servicios"
        :isExtended="true"
        :elements="servicios"
        :showCheckout="false"
      ></polimorfic-carousel>
    </div>
    <banner-carousel :elements="banner2"></banner-carousel>
    <clients :elements="clients" />
    <div
      class="
        padding-container
        flex flex-col
        gap-16
        bkg-light-gray
        py-10
        relative
      "
    >
      <polimorfic-carousel
        title="Nuestra línea para"
        subtitle="Diagnóstico Veterinario"
        :isExtended="false"
        :elements="veterinaria"
        :showCheckout="true"
      ></polimorfic-carousel>
    </div>
    <!-- Modal de form de Contacto -->
    <Modal
      :header="false"
      v-if="showContactMenu"
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
  </div>
</template>

<script>
import PolimorficCarousel from "../components/Carousels/PolimorficCarousel/PolimorficCarousel";
import BannerCarousel from "../components/Carousels/BannerCarousel/NewBannerCarousel.vue";
// import BannerCarousel from "../components/Carousels/BannerCarousel/BannerCarousel.vue";
import ClientsCarousel from "../components/Carousels/ClientsCarousel/ClientsCarousel.vue";
import carousels from "../assets/js/home.json";
import Modal from "../components/Modal/Modal.vue";
import SimpleContactForm from "../components/Forms/SimpleContactForm.vue";

export default {
  components: {
    "polimorfic-carousel": PolimorficCarousel,
    "banner-carousel": BannerCarousel,
    clients: ClientsCarousel,
    Modal,
    "simple-contact-form": SimpleContactForm,
  },
  data: function () {
    return {
      productos: carousels.productos,
      banner1: carousels.banner1,
      servicios: carousels.servicios,
      banner2: carousels.banner2,
      veterinaria: carousels.veterinaria,
      clients: carousels.clientes,
      showContactMenu: false,
    };
  },
  mounted: function () {
    this.fadeInElements = Array.from(
      document.getElementsByClassName("fade-in")
    );
    document.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll: function (evt) {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i];
        var distInView =
          elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
          elem.classList.add("inView");
        } else {
          elem.classList.remove("inView");
        }
      }
    },
  },
};
</script>

<style scoped>
/* Presentacion */
.presentation {
  z-index: 8;
}
.presentation-text {
  padding: 2.5rem 4rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 2rem;
}
.banner-contacto {
  height: 50px;
  background-color: #e6e6e6;
  padding: 2rem 4rem;
  width: 100%;
}
/* Media Queries */
@media screen and (max-width: 1000px) {
  .presentation-text {
    padding: 2.5rem 6rem;
  }
}
@media screen and (max-width: 900px) {
  .presentation-text {
    padding: 1.5rem;
  }
}
@media screen and (max-width: 650px) {
  .presentation {
    padding-top: 0;
  }
  .presentation-text {
    padding: 1rem;
    text-align: justify;
  }
}
</style>
