<template>
  <footer>
    <!-- Medios de pago -->
    <div class="medios-de-pago flex flex-col text-center">
      <span class="my-4"> Conocé nuestros medios de pago </span>
      <div class="flex flex-wrap justify-center items-center gap-1">
        <div
          class="medio-de-pago"
          v-for="(pago, index) in mediosDePago"
          :key="index"
        >
          <img :src="pago.img" alt="" />
        </div>
      </div>
    </div>
    <!-- Divisiones -->
    <div
      class="divisiones h-16 flex justify-start items-center gap-10 text-white"
      :class="backgroundColor"
    >
      <span class="active w-3/6 md:w-auto"
        ><button
          @click="mostrar = 'humanos'"
          :class="{ active: mostrar === 'humanos' }"
        >
          Diagnóstico por Imágenes
        </button></span
      >
      <span class="w-3/6 md:w-auto"
        ><button
          @click="mostrar = 'animales'"
          :class="{ active: mostrar === 'animales' }"
        >
          División veterinaria
        </button></span
      >
    </div>
    <!-- Redes sociales -->
    <div
      class="redes-sociales flex justify-between items-center text-white"
      :class="backgroundColorSocial"
    >
      <div class="redes flex flex-col">
        <span>Seguinos en Redes Sociales</span>
        <div class="iconos flex justify-between" v-if="mostrar === 'humanos'">
          <Icon
            name="facebook"
            link="https://www.facebook.com/IngeRayEquipamientoMedico"
            division="hum"
          ></Icon>
          <Icon
            name="instagram"
            link="https://www.instagram.com/p/CMK8U71DnXq/"
            division="hum"
          ></Icon>
          <Icon
            name="youtube"
            link="https://www.youtube.com/channel/UCCP1syiaiGb3GE65LyxnDAA"
            division="hum"
          ></Icon>
        </div>
        <div class="iconos-vet flex justify-between" v-else>
          <Icon
            name="facebook"
            link="https://www.facebook.com/IngeRayVET"
            division="vet"
          ></Icon>
          <Icon
            name="instagram"
            link="https://www.instagram.com/inge_ray_vet/"
            division="vet"
          ></Icon>
          <Icon
            name="youtube"
            link="https://www.youtube.com/channel/UCmPvf69gHGonIM2fglmhBig"
            division="vet"
          ></Icon>
          <Icon
            name="shop"
            link="https://ingeraysrl.mercadoshops.com.ar/"
            division="vet"
          ></Icon>
        </div>
      </div>
      <div class="newsletter flex flex-col items-center">
        <button
          class="contact-inge-button shadow-animated"
          :class="[
            mostrar === 'humanos'
              ? 'inge-shadow-down-lilac'
              : 'inge-shadow-down-blue',
          ]"
          @click="showNewsLetterForm = true"
        >
          Suscribase a nuestro Newsletter
        </button>
      </div>
      <div class="pais-region flex flex-col items-start gap-4">
        <span>Pais - Idioma</span>
        <span>Argentina > Español</span>
      </div>
      <!-- Modal Newsletter Form -->
      <Modal
        :header="false"
        v-if="showNewsLetterForm"
        @close="showNewsLetterForm = false"
        large="xl"
      >
        <template #content>
          <NewsletterForm @close="showNewsLetterForm = false"></NewsletterForm>
        </template>
      </Modal>
    </div>
    <!-- Contacto -->
    <div
      class="contacto flex justify-between flex-wrap text-white"
      :class="backgroundColor"
    >
      <div class="col1 text-justify">
        <strong>Contacto</strong>
        <p>
          ¿Necesitás más información? Completá el formulario y nos comunicaremos
          contigo lo más pronto posible.
        </p>
      </div>
      <div class="col2 flex justify-end items-center">
        <button class="contact-inge-button" @click="showContactMenu = true">
          Quiero que me contacten
        </button>
      </div>
      <div class="col3 w-full">
        <div class="sub-col1 flex text-xl">
          <div class="separator">
            <router-link to="/quienes-somos">Quiénes Somos</router-link>
          </div>
          <div class="separator">
            <button type="button" @click="showAvisoLegalModal = true">
              Aviso Legal
            </button>
          </div>
          <div class="separator">
            <button type="button" @click="showPDPrivacidad = true">
              Políticas de Privacidad
            </button>
          </div>
          <div class="separator">
            <router-link to="/contacto">Contacto</router-link>
          </div>
        </div>
        <div class="sub-col2 flex justify-between pt-4 text-md">
          <p>© Inge Ray S.R.L., 2021. Todos los derechos reservados.</p>
          <div class="flex flex-col text-center">
            <strong>Desarrollo Web</strong>
            <a href="https://achani2497.github.io/portfolio/" target="_blank"
              >Alejandro Chañi &</a
            >
            <p>Maximiliano Frega</p>
          </div>
        </div>
        <!-- Logo de Nadia -->
        <a
          href="mailto:tudiseniadorenlinea@gmail.com"
          class="flex flex-col items-center mt-8"
        >
          <img
            :src="require('@/assets/images/logo-diseno-grafico.png')"
            alt="logo diseñador grafico"
            width="200"
          />
        </a>
      </div>
      <!-- Modal de Aviso Legal -->
      <Modal
        :header="true"
        v-if="showAvisoLegalModal"
        @close="showAvisoLegalModal = false"
        large="xl"
      >
        <template #title> <div class="title blue">Aviso Legal</div> </template>
        <template #content>
          <div class="legal-container overflow-y-scroll">
            <div class="simple-text p-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              tempore sequi doloribus nesciunt ipsum at culpa. Iure asperiores
              possimus voluptatibus, debitis, aspernatur doloremque quia sit
              dolorem cum explicabo architecto provident incidunt consequuntur
              similique tenetur ea impedit, eligendi quasi iusto aliquam. Eaque
              ducimus ut similique reprehenderit modi iure fugit inventore velit
              officia! Molestias, impedit.
            </div>
          </div>
        </template>
      </Modal>
      <!-- Modal de Politicas de Privacidad -->
      <Modal
        :header="true"
        v-if="showPDPrivacidad"
        @close="showPDPrivacidad = false"
        large="xl"
      >
        <template #title>
          <div class="title blue">Políticas de Privacidad</div>
        </template>
        <template #content>
          <div class="legal-container overflow-y-scroll">
            <div class="simple-text p-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              tempore sequi doloribus nesciunt ipsum at culpa. Iure asperiores
              possimus voluptatibus, debitis, aspernatur doloremque quia sit
              dolorem cum explicabo architecto provident incidunt consequuntur
              similique tenetur ea impedit, eligendi quasi iusto aliquam. Eaque
              ducimus ut similique reprehenderit modi iure fugit inventore velit
              officia! Molestias, impedit.
            </div>
          </div>
        </template>
      </Modal>
      <!-- Modal de Formulario de Contacto -->
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
    </div>
  </footer>
</template>
<style scoped>
/* MEDIOS DE PAGO */
.medios-de-pago {
  padding: 0.5rem 1.5rem;
  background-color: var(--light-gray);
}
.medio-de-pago > img {
  width: 80px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
}
/* DIVISIONES */
.divisiones {
  padding: 0 6rem;
}
.active {
  font-weight: bolder;
  text-decoration: underline;
  outline: none;
}
.active:active {
  background: none;
}
/* REDES SOCIALES */
.redes-sociales {
  padding: 0 6rem;
  height: 150px;
}
.redes {
  width: 210px;
}
.iconos,
.iconos-vet {
  padding: 5px 10px 0 0px;
}
.big-icon {
  width: 100px !important;
  height: 100px !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.newsletter {
  width: 60%;
}
.pais-region {
  width: 210px;
}

/* CONTACTO */
.contacto {
  padding: 3rem 6rem;
  height: fit-content;
}
.col1 {
  width: 31%;
}
.col2 button {
  height: fit-content;
}
.separator:not(:first-child) {
  padding-left: 7px;
}
.separator {
  padding-right: 7px;
}
.separator a {
  display: flex;
  align-items: center;
  height: 100%;
}
.separator:not(:last-child) {
  border-right: 1px solid white;
}
@media screen and (max-width: 900px) {
  .prods-services,
  .divisiones,
  .redes-sociales,
  .contacto {
    padding: 2rem;
  }
  .divisiones {
    gap: 0;
    justify-content: space-around;
  }
  .redes-sociales {
    gap: 1rem;
  }
  .newsletter {
    width: 40%;
  }
  .contacto {
    /* height: 230px; */
    height: fit-content;
  }
  .col1,
  .col2 {
    width: 45%;
  }
  .col2 {
    padding: 0 1rem;
  }
  .col3 {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }
  .sub-col1 {
    justify-content: center;
  }
  .separator {
    font-size: 18px;
    padding: 0 13px;
  }
  .sub-col2 {
    flex-direction: column;
    text-align: center;
  }
  .contact {
    width: 100%;
  }
}

@media screen and (max-width: 650px) {
  .presentation-text {
    padding: 1rem 3rem 4rem 3rem;
  }
  .prods-services {
    padding: 2rem 3rem;
  }
  .medio-de-pago > img {
    width: 3.7rem;
    height: 50px;
  }
  .divisiones {
    padding: 0 1rem;
    text-align: center;
  }
  .redes {
    text-align: center;
  }
  .redes-sociales {
    height: auto;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
  .redes,
  .newsletter,
  .pais-region {
    width: 100%;
  }
  .iconos {
    justify-content: center;
    gap: 1.5rem;
  }
  .pais-region {
    gap: 0;
    align-items: center;
  }
  .contacto {
    height: auto;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
  .col1 {
    width: 100%;
  }
  .col2 {
    width: 100%;
    padding: 0;
    justify-content: center;
  }
  .col3 {
    text-align: center;
  }
  .sub-col1 {
    display: flex;
    justify-content: center;
    font-size: 15px;
  }
  .separador {
    padding: 0 2px;
  }
  .sub-col1 a {
    padding: 0 5px;
  }
  .sub-col2 {
    row-gap: 1rem;
  }
}
</style>
<script>
import NewsletterForm from "@/components/Forms/NewsletterForm.vue";
import Modal from "../Modal/Modal.vue";
import Icon from "./SocialNetworkIcon.vue";
import SimpleContactForm from "../Forms/SimpleContactForm.vue";

export default {
  components: {
    NewsletterForm,
    Modal,
    Icon,
    "simple-contact-form": SimpleContactForm,
  },
  data: function () {
    return {
      mostrar: "humanos",
      mediosDePago: [
        {
          nombre: "visa",
          img: require("@/assets/images/medios-de-pago/visa.svg"),
        },
        {
          nombre: "mastercard",
          img: require("@/assets/images/medios-de-pago/mastercard.svg"),
        },
        {
          nombre: "american-express",
          img: require("@/assets/images/medios-de-pago/american-express.svg"),
        },
        {
          nombre: "cabal",
          img: require("@/assets/images/medios-de-pago/cabal.svg"),
        },
        {
          nombre: "visa-debito",
          img: require("@/assets/images/medios-de-pago/visa-debito.svg"),
        },
        {
          nombre: "maestro",
          img: require("@/assets/images/medios-de-pago/maestro.svg"),
        },
        {
          nombre: "cabal-debito",
          img: require("@/assets/images/medios-de-pago/cabal-debito.svg"),
        },
        {
          nombre: "eCheck",
          img: require("@/assets/images/medios-de-pago/eCheck.svg"),
        },
        {
          nombre: "mercado-pago",
          img: require("@/assets/images/medios-de-pago/mercado-pago.svg"),
        },
      ],
      showNewsLetterForm: false,
      showAvisoLegalModal: false,
      showPDPrivacidad: false,
      showContactMenu: false,
    };
  },
  methods: {
    seMuestraParaHumanos() {
      return this.mostrar === "humanos";
    },
  },
  computed: {
    backgroundColor() {
      return this.seMuestraParaHumanos() ? "bkg-dark-blue" : "bkg-light-blue";
    },
    backgroundColorSocial() {
      return this.seMuestraParaHumanos() ? "bkg-light-blue" : "bkg-blue";
    },
  },
};
</script>
