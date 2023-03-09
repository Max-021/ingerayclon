<template>
  <div class="flex flex-col gap-8">
    <div class="padding-container flex flex-col gap-16">
      <banner-with-bot
        :bannerName="`${this.$imageCDN}/banner-quienes-somos.jpg`"
      >
        <template slot="title">
          <titles
            title="Conocé a nuestra empresa y a los que forman parte"
            subtitle="Nos enfocamos en brindar soluciones"
            :fontSize="31"
          ></titles>
        </template>
        <template slot="stuff" class="relative">
          <p class="text-justify text-xl leading-9 pb-14">
            Desde 1992 INGE RAY SRL se especializa en Equipamiento para
            Diagnóstico por Imágenes y al día de hoy somos la empresa del área
            más compenetrada con las necesidades de nuestros clientes. Desde ese
            lugar brindamos Soluciones Tecnológicas, Técnicas y Comerciales
            adecuadas que permitan ofrecer diagnósticos de calidad. Somos un
            equipo de profesionales diverso, donde cada uno tiene su lugar
            siendo valorado, respetado y capacitado en su área de trabajo para
            dar respuestas concretas a las necesidades de los Servicios para la
            Salud.
          </p>
          <button
            @click="showContactMenu = true"
            class="
              banner-contacto
              flex
              items-center
              gap-2
              absolute
              bottom-8
              right-0
            "
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
        </template>
      </banner-with-bot>
      <!-- Modal -->
      <modal large="sm" @close="showContactMenu = false" v-if="showContactMenu">
        <template #content>
          <simple-contact-form
            @close="showContactMenu = false"
          ></simple-contact-form>
        </template>
        ></modal
      >
      <!-- Bases -->
      <div class="flex flex-col gap-4">
        <titles
          title="Las bases que"
          subtitle="Nos inspiran para crecer"
          :fontSize="31"
        ></titles>
        <mision-vision-valores></mision-vision-valores>
      </div>
    </div>
    <!-- Company`s Staff -->
    <div class="padding-container py-16 bg-white">
      <div class="flex flex-col gap-10" v-if="!showAllTeam">
        <titles
          class="pl-3"
          title="Conocénos"
          subtitle="Somos un gran equipo"
          :fontSize="31"
        ></titles>
        <div class="staff-description-card flex">
          <img
            :src="
              require('@/assets/images/contacto/fotosPersonal/GERENTE_Daniel_Penhos.jpg')
            "
            width="310"
          />
          <div class="flex flex-col gap-3 px-16 py-12">
            <div>
              <h2 class="inge-text-bold text-3xl mb-2">Daniel Penhos</h2>
              <titles :font-size="30" subtitle="Gerente Operativo"></titles>
              <titles title="Área Técnico Comercial" :fontSize="24"></titles>
            </div>
            <p class="text-xl leading-8 text-justify">
              Ingeniero en Electrónica recibido en la Universidad Tecnológica
              Nacional con Especialización en Control de Procesos. Socio
              Fundador de nuestra empresa, se desarrolla en el Área de Diseño y
              Desarrollo Tecnológico, Relaciones Institucionales y Comercio
              Exterior.
            </p>
            <a
              href="https://ar.linkedin.com/in/daniel-penhos-42b87a43"
              target="_blank"
              class="blue"
              >Conozca más sobre nuestro Gerente Operativo</a
            >
          </div>
        </div>
        <div class="staff-description-card flex">
          <img
            :src="
              require('@/assets/images/contacto/fotosPersonal/GERENTE_Matias_Penhos.jpg')
            "
            width="310"
          />
          <div class="flex flex-col gap-3 px-16 py-12">
            <div>
              <h2 class="inge-text-bold text-3xl mb-2">Matías Penhos</h2>
              <titles :font-size="30" subtitle="Gerente Operativo"></titles>
              <titles title="Área Técnico Comercial" :fontSize="24"></titles>
            </div>
            <p class="text-xl leading-8 text-justify">
              Técnico Electromecánico escpecializado en el Área de Relevamiento
              Tecnológico y Soluciones a Medida. Aseror Técnico Comercial.
            </p>
          </div>
        </div>
      </div>
      <!-- Extended team Chiefs & Staff -->
      <div class="flex flex-col gap-12" v-else>
        <titles
          title="El equipo de Inge Ray está compuesto por un"
          subtitle="Grupo Multidiciplinario de Profesionales que disfrutan su trabajo"
          :fontSize="31"
        ></titles>
        <!-- Gerentes -->
        <div class="flex justify-center gap-6">
          <presentation-card
            v-for="(chief, index) in chiefs"
            :person="chief"
            :key="index"
          ></presentation-card>
        </div>
        <!-- Staff -->
        <div class="presentation-cards">
          <presentation-card
            v-for="(person, index) in staff"
            :person="person"
            :key="index + 2"
          >
          </presentation-card>
        </div>
      </div>
    </div>
    <!-- Staff carousel -->
    <div
      class="padding-container bkg-contracts -mt-8 py-16"
      v-if="!showAllTeam"
    >
      <div class="flex flex-col gap-8">
        <titles
          title="El equipo de Inge Ray está compuesto por un"
          subtitle="Grupo Multidiciplinario de Profesionales que disfrutan su trabajo"
          :fontSize="31"
        ></titles>
        <staff-carousel></staff-carousel>
        <button
          class="contact-inge-button self-end"
          @click="showAllTeam = true"
        >
          Ver todo el equipo
        </button>
      </div>
    </div>
    <!-- Extended team (Contracts) -->
    <div class="padding-container bkg-contracts -mt-8" v-if="showAllTeam">
      <div class="presentation-cards py-16">
        <presentation-card
          v-for="(contract, index) in contracts"
          :person="contract"
          :key="index"
        ></presentation-card>
      </div>
    </div>
    <!-- Memorial -->
    <div
      class="padding-container bg-white -mt-8 flex flex-col gap-8 py-16"
      v-if="showAllTeam"
    >
      <titles
        title="Conozca más sobre"
        subtitle="Nuestra Historia"
        :fontSize="31"
      ></titles>
      <p class="text-lg">
        En INGE RAY SRL reconocemos a todos los que formaron parte en estos 30
        años, los recordamos con alegría y les agradecemos por haber caminado
        juntos para hacer posible nuestro presente.
      </p>
      <h3 class="inge-text-bold text-xl gray-text">
        JUAN CARLOS ROMERO, MARTA PENHOS, JOSÉ PENHOS, ENRIQUE DEL BUENO,
        VIRGINIA CORRALES, GABRIELA PENHOS, FERNANDO DANIEL MENOTTI, LUCIO DEL
        BUENO.
      </h3>
    </div>
    <!-- Valores -->
    <div class="bg-white -mt-8 py-16">
      <text-checklist
        title="Conozca más sobre"
        subtitle="Los valores que nos mueven"
        :list="valores"
        :extraPadding="false"
      >
        <template v-slot:button>
          <a
            href="mailto:rrhh@ingeray.com.ar"
            class="contact-inge-button self-end py-2 px-8"
          >
            Sumate al equipo
          </a>
        </template>
      </text-checklist>
    </div>
    <!-- Banner de Quienes Somos -->
    <div class="ajuste-padding">
      <img
      :src="`${this.$imageCDN}/banner_colaboradores.jpg`"
      alt="Banner de Colaboradores"
      class="-mt-8"
      />
    </div>
    <!-- Certificaciones -->
    <div class="padding-container flex flex-col gap-4 -mt-8 py-16 bg-white">
      <titles
        title="Certificaciones ante"
        subtitle="Organismos Oficiales"
        :fontSize="31"
        class="pl-8"
      ></titles>
      <ul class="flex flex-wrap justify-around">
        <li>
          <img
            src="@/assets/images/logos-clientes/ministerio-de-salud.png"
            alt="logo del ministerio de salud de la nación"
            width="250"
          />
        </li>
        <li>
          <img
            src="@/assets/images/logos-clientes/gba.png"
            alt="logo del gobierno de buenos aires"
            width="250"
          />
        </li>
        <li>
          <img
            src="@/assets/images/logos-clientes/gcba.png"
            alt="logo de logo del gobierno de la ciudad de buenos aires"
            width="250"
          />
        </li>
      </ul>
      <img
        src="@/assets/images/logos-clientes/anmat.png"
        alt="logo de anmat"
        width="250"
        class="self-center"
      />
    </div>
  </div>
</template>
<style scoped>
.banner-contacto {
  height: 50px;
  background-color: #e6e6e6;
  padding: 2rem 4rem;
  width: 100%;
}
.staff-description-card {
  background-color: #efefef;
}
.staff-description-card img {
  object-fit: contain;
}
.presentation-cards {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  justify-items: center;
}
.bkg-contracts {
  background-color: #c8c8c8;
}
.gray-text {
  color: #666666;
}
@media screen and (min-width: 1441px) {
  .ajuste-padding {
    padding: 0 22%
  }
  
}
</style>
<script>
import BannerWithBot from "../components/Common/BannerWithBot.vue";
import MisionVisionValores from "../components/QuienesSomos/MisionVisionValores.vue";
import PresentationCard from "../components/QuienesSomos/PresentationCard.vue";
import { chiefs, staff, contracts } from "../assets/js/quienes-somos.json";
import TextList from "../components/Common/TextList.vue";
import { valores } from "@/assets/js/valores.json";
import StaffCarousel from "../components/Carousels/StaffCarousel/StaffCarousel.vue";
import Modal from "../components/Modal/Modal.vue";
import SimpleContactForm from "../components/Forms/SimpleContactForm.vue";

export default {
  components: {
    "banner-with-bot": BannerWithBot,
    "mision-vision-valores": MisionVisionValores,
    "presentation-card": PresentationCard,
    "text-checklist": TextList,
    "staff-carousel": StaffCarousel,
    modal: Modal,
    "simple-contact-form": SimpleContactForm,
  },
  data() {
    return {
      staff: [],
      showContactMenu: false,
      showAllTeam: false,
      chiefs,
      staff,
      contracts,
      valores,
    };
  },
};
</script>