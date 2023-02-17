<template>
  <div class="">
    <div :class="cambiarFondo()">
      <router-view />
    </div>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import footerMenuVue from "../components/Servicios/footerMenu.vue";
export default {
  components: { "footer-menu": footerMenuVue },
  data: function() {
    return {
      fondoRosa: false,
    }
  },
  methods: {
    esMamo: function() {
      var urlActual = window.location.href;
      urlActual = urlActual.split('/');
      urlActual = urlActual[urlActual.length - 1];
      if(urlActual === 'mamografos' || urlActual === 'captores-digitales') {
        this.fondoRosa = true;
      } else {
        this.fondoRosa = false;
      }
    },
      cambiarFondo: function() {
        if(this.fondoRosa) {
          return 'fondo-mamo padding-container'
        }
        return 'padding-container'
      }
  },
  updated: function() {
    this.esMamo();
  },
  created: function() {
    this.esMamo();
  }
};
</script>

<style>
.fondo-mamo{
  background-color: #F6ECED;
}
</style>


<!-- Lo dejo comentado al archivo anterior para tener una referencia -->
<!--<template>
{{//TODO: Ver que hago con este action}}
  <div class="row" @open-form="alert('asd')">
    {{//Info del producto}}
    <div class="producto flex px-4 gap-4 h-auto">
      <div class="producto-imagen">
        <ImageCarousel :elementos="equipos.productos"></ImageCarousel>
      </div>
      <div class="producto-descripcion flex flex-col gap-4">
        {{//Path}}
        <CustomPath :slavons="this.path"></CustomPath>
        {{//Titulos}}
        <div class="titulos">
          <titles
            :title="equipos.nombreCategoria"
            :subtitle="equipos.nombreCompleto"
            :fontSize="25"
          ></titles>
        </div>
        {{//Descripcion}}
        <div class="descripcion my-4 simple-text gray">
          {{ equipos.descripcion }}
        </div>
        <button
          class="contact-inge-button inge-shadow-down shadow-animated"
          @click="enviarMensajeWhastapp"
        >
          Quiero que me contacten
        </button>
      </div>
    </div>
    {{//Banner de contacto}}
    <div class="banner-contacto bkg-light-gray w-full flex z-10 px-16 py-4">
      <button class="flex w-auto gap-2 items-center" @click="showModal = true">
        <div class="envelope"></div>
        <div class="flex flex-col text-left">
          <titles
            title="Contáctenos"
            subtitle="sobre este producto"
            :fontSize="25"
          ></titles>
        </div>
      </button>
    </div>
    <div class="info-adicional bkg-light-gray px-12 py-4">
      {{//Caracteristicas}}
      <Caracteristicas />
      {{//Especificaciones}}
      <Especificaciones />
      {{//Galeria de Imagenes}}
      <Galeria :producto="equipos.nombreCompleto" />
      {{//Documentos}}
      <Documentos />
    </div>
    {{/* Formulario de contacto */}}
    <modal :header="false" v-if="showModal">
      <template #content>
        <contact-form
          @closeModal="showModal = false"
          :producto="equipos.nombreCompleto"
        ></contact-form>
      </template>
    </modal>
  </div>
</template>
<style scoped>
.row {
  background: white;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
}
.producto {
  width: 100vw;
}
.producto-imagen {
  height: 100%;
  width: 60%;
}
.producto-descripcion {
  width: 40%;
  height: 100%;
}
.simple-text {
  font-size: 22px;
}
.contact-inge-button {
  width: max(14rem, 15vw);
}
.banner-contacto {
  box-shadow: 0px 5px 4px 1px rgba(0, 0, 0, 0.25);
}
.info-adicional {
  width: 100vw;
}

@media screen and (min-width: 1400px) {
  .producto-imagen {
    height: 100%;
    width: 45%;
  }
  .producto-descripcion {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
@media screen and (max-width: 900px) {
  .producto {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    gap: 0;
    padding: 0;
  }
  .producto-descripcion,
  .producto-imagen {
    width: 100%;
    height: auto;
  }
  .producto-descripcion {
    padding: 0 2rem;
    gap: 0.5rem;
  }
  .producto-imagen {
    width: 100%;
    padding: 0 0.2rem;
  }
  .contact {
    width: max(30%, 30vh);
    align-self: center;
  }
  .banner-contacto {
    padding: 1rem 3rem;
  }
  .info-adicional {
    padding: 1rem 2rem 0;
  }
}
@media screen and (max-width: 650px) {
  .contact-outline {
    align-self: center;
  }
}
</style>
<script>
import Productos from "../assets/js/productos.json";
import ContactForm from "@/components/Forms/ContactForm.vue";
import ImageCarousel from "@/components/Carousels/Carousel/ImagesCarousel.vue";
import Galeria from "@/components/Productos/GaleriaProductos.vue";
import Especificaciones from "@/components/Productos/Especificaciones.vue";
import Documentos from "@/components/Productos/Documentos.vue";
import Caracteristicas from "@/components/Productos/Caracteristicas.vue";
import CustomPath from "@/components/CustomPath.vue";

import EventBus from "@/assets/js/eventBus.js";

export default {
  data() {
    return {
      showModal: false,
      productos: Productos.productos,
    };
  },
  components: {
    ContactForm,
    ImageCarousel,
    Galeria,
    Especificaciones,
    Documentos,
    Caracteristicas,
    CustomPath,
  },
  methods: {
    enviarMensajeWhastapp: function () {
      const to = "54911...";
      var yourMessage = "testeando";

      let message = yourMessage.split(" ").join("%20");

      window.open("https://wa.me/" + to + "?text=%20" + message);
    },
    dameElEquipo: function () {
      return this.productos.find(
        (prod) => prod.nombreCategoria === this.$route.params.categoria
      );
    },
    dameUnSlavon: function (name, url) {
      return {
        sectionName: name,
        sectionUrl: url,
      };
    },
  },
  mounted() {
    EventBus.$on("open-form", () => {
      this.showModal = true;
    });
    // fetch("/productos.json")
    //     .then(r => json())
    //     .then(json => this.productos = json.productos)
  },
  beforeDestroy() {
    EventBus.$off("open-form");
  },
  computed: {
    equipos: function () {
      return this.dameElEquipo();
    },
    path: function () {
      let equipo = this.dameElEquipo();

      let raiz = this.dameUnSlavon("Inicio", "/");
      let nodo1 = this.dameUnSlavon("Productos", "/productos");
      var newPath = new Array(raiz, nodo1);

      let nodo2 = this.dameUnSlavon(
        equipo.nombreCategoriaGeneral,
        "/productos"
      );

      newPath.push(nodo2);

      return newPath;
    },
  },
};
</script> -->