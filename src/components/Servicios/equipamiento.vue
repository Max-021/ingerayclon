<template>
  <div class="">
    <div class="padding-container">
      <div class="contact-container flex flex-col gap-12 pb-12">
        <banner-box :bannerName="bannerTodosLosProductos">
          <template v-slot:title>
            <titles
            title="Gran Variedad de"
            subtitle="Equipamiento Radiológico Nuevo o Puesto en Valor"
            :fontSize="31"
            ></titles>
          </template>
          <template v-slot:stuff>
            <p class="text-justify text-xl">
              Inge Ray ofrece equipamiento, instalaciones, partes, accesorios y soluciones  a la medida de las necesidades reales de cada cliente tanto en la esfera de instituciones públicas como privadas y desde centros de Diagnóstico por Imágenes y Empresas de Medicina Prepaga hasta Secretarías y Ministerios de Salud. Nuestro compromiso con el medioambiente y la sustentabilidad hace que nos enfoquemos de manera prioritaria en optimizar los recursos existentes basándonos en normas internacionales de recuperación y uso consciente de materiales mediante el protocolo de Análisis del Ciclo de Vida (Normas IRAM-ISO 14040 a 14049), teniendo por otra parte muy en cuenta  que las inversiones en tecnologías para el diagnóstico médico son pensadas a mediano y largo plazo cuando un cliente decide comenzar, actualizar o ampliar su operación. Estaremos allí para asesorar en las Áreas: Ingeniería, Comercial, Regulaciones y el enfoque Financiero.
            </p>
          </template>
        </banner-box>
      </div>
    </div>
    <!-- más buscados-->
    <div class="pb-16 pt-2 padding-container ">
      <titles
        class="px-16 pb-8"
        title="Galería de Productos"
        subtitle="Los más buscados"
        :fontSize="31"
          ></titles>
      <div class="px-16 flex flex-wrap justify-between items-around gap-3">
        <mas-buscados 
        v-for="(producto, index) in masBuscados"
        sectionName="/productos/buscados/"
        :imageName="producto.image"
        :prodUrl = "producto.url"
        imageExtension=".png"
        imageWith="245px"
        ></mas-buscados>
      </div>
    </div>
    <!-- nuestras marcas nacionales e internacionales -->
    <div class="py-10 padding-container bg-white">
        <titles
        class="px-16"
        title="Nuestras Marcas"
        subtitle="Nacionales e Internacionales"
        :fontSize="31"
          ></titles>
          <p class="px-16 mt-4 text-justify texto-subtitulo">
            Además de la marca propia, tanto en Argentina como en países de la región proveemos soluciones, repuestos y servicios  en equipamiento de marcas locales e internacionales:
          </p>
          <p class="px-16 mt-4 text-justify font-bold texto-marcas">
            AGFA, ARIES, BIPLETT, BROWINER, CARESTREAM, CGR, CHISON, CLAYMOUNT, DEL BUENO, DIGINET, DIGIRAD, DINAN, DRGEM, DRTECH, ECORAY, EDAN, FILIPPO, FISHER, GBA, GENERAL ELECTRIC, GENERAL MEDICAL MERATE, GENERAY, HITACHI, HOLOGIC, IAE, IASA ELECTRONICA, ICRO, INSTRUMED, INSTRUMENTARIUM, INVELEC, IONORAY, JPI, KAILONG, KAIXIN, MAURIZZI, MEDITECH, MEMORAD Q, MINDRAY, MyF, ODEL, OEC, PHILIPS, PIMAX, PLANMECA, POSKOM, RAIX, REMS, SEDECAL, SHIMADZU, SIEMENS, SONOWIN, THALES, TAMATHE, THOMSON, TOSHIBA, VAREX, VARIAN, VIEWORKS, VILA, VIOLA, YUESHEN.
          </p>
    </div>
    <!-- Eco responsabilidad -->
    <div class="py-16 padding-container">
      <div class="px-16">
        <eco-seal></eco-seal>
      </div>
    </div>
      <footer-menu></footer-menu>
  </div>
</template>

<script>
import { serviceMixin } from "../../assets/js/serviceMixin";
import buscados from '../../assets/js/mas_buscados.json';
import PicZoomWithText from "../Common/PicZoomWithText.vue";
import seccionEco from "./seccionEco.vue";
import BannerWithBot from "../Common/BannerWithBot.vue";
import footerMenu from "./footerMenu.vue";

export default {
  props: ["slug"],
  mixins: [serviceMixin],
  components: {
    "eco-seal": seccionEco,
    "mas-buscados": PicZoomWithText,
    'banner-box': BannerWithBot,
    'footer-menu': footerMenu
  },
  data() {
    return {
      servicio: "",
      masBuscados: buscados.buscados,
      bannerTodosLosProductos: require(`@/assets/images/productos/Banner Equipamiento.jpg`),
    };
  },
  beforeMount() {
    this.servicio = this.getServiceInfo(this.slug);
  },
};
</script>

<style scoped>
.fondo-completo {
  width: 100vw;
  height: 100px;
  position: absolute;
}
</style>