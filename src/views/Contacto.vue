<template>
  <div class="contact-container flex flex-col gap-4">
    <!-- Banner & Buttons Container -->
    <div class="padding-container">
      <banner-box :bannerName="bannerContacto">
        <template v-slot:title>
          <p class="inge-text-bold">¿Cómo podemos ayudarlo?</p>
          <titles subtitle="Contáctenos" :fontSize="31"></titles>
          <p class="mb-10">
            Seleccione entre las siguiente opciones, cuál es su área de interés,
            para poder brindarle informacion precisa y una mejor atención.
          </p>
        </template>
        <template v-slot:stuff>
          <div class="staff-buttons">
            <button
              class="area-button flex flex-col"
              :class="[area.visible ? 'is-active' : '']"
              v-for="(area, index) in areas"
              :key="index"
              @click="setTeam(area)"
            >
              <titles
                :title="area.first_line_name"
                :subtitle="area.second_line_name"
                :active="area.visible"
                class="contact-button-title"
              ></titles>
            </button>
          </div>
        </template>
      </banner-box>
    </div>

    <!-- Staff description -->
    <transition name="fade">
      <div class="padding-container">
        <div
          class="staff-details flex flex-col gap-4"
          v-if="teamDetailsVisible"
        >
          <titles
            title="Nuestro equipo de"
            :subtitle="areaName"
            class="staff-title"
            :fontSize="31"
          ></titles>
          <div class="staff-data">
            <staff-description :equipo="equipo"></staff-description>
            <!-- Bot -->
            <div class="chat-bot flex items-center">
              <div class="icon"></div>
              <div class="text flex flex-col py-4 pl-4 pr-10">
                <div class="inge-text-bold text-white">Chatea con nosotros</div>
                <p>Estamos disponibles de Lunes a Viernes de 9 a 17 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Banner Contacto -->
    <button
      class="banner-contacto flex items-center gap-2 mb-4"
      type="button"
      @click="showContactMenu = true"
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
    <!-- Form de Contacto -->
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

    <!-- Mapa container -->
    <div class="mapa-container flex flex-col gap-6">
      <div class="padding-container">
        <titles
          class="mapa-title mb-4"
          title="Ubicacion de"
          subtitle="Nuestra Empresa"
          :fontSize="31"
        ></titles>
        <ik-image path="/mapa.jpg" alt="imagen de mapa"></ik-image>
      </div>
    </div>
  </div>
</template>
<script>
import StaffDescription from "../components/StaffDescription/StaffDescription.vue";
import BannerWithBotVue from "../components/Common/BannerWithBot.vue";
import SimpleContactForm from "../components/Forms/SimpleContactForm.vue";
import Modal from "../components/Modal/Modal.vue";

export default {
  components: {
    "staff-description": StaffDescription,
    "banner-box": BannerWithBotVue,
    Modal,
    "simple-contact-form": SimpleContactForm,
  },
  data() {
    return {
      areas: [],
      equipo: [],
      teamDetailsVisible: false,
      activeTeamId: 0,
      areaName: "",
      showContactMenu: false,
      bannerContacto: `${this.$imageCDN}/banner_contacto.jpg`,
    };
  },
  methods: {
    setTeam(team) {
      this.areas.forEach((a) => {
        a.visible = false;
      });
      if (this.activeTeamId !== team.id) {
        if (!this.teamDetailsVisible) {
          this.teamDetailsVisible = true;
        }
        this.activeTeamId = team.id;
        this.showTeamInfo(team);
      } else {
        if (this.teamDetailsVisible) {
          this.teamDetailsVisible = false;
          this.activeTeamId = 0;
          this.visible = false;
        }
      }
    },
    showTeamInfo(team) {
      this.activeTeamId = team.id;
      this.equipo = team.personal;
      this.areaName = team.second_line_name;
      team.visible = true;
    },
  },
  mounted() {
    fetch("/staff.json") //El archivo tiene que estar en la carpeta public
      .then((r) => r.json())
      .then((json) => {
        this.areas = json.areas;
      });
  },
};
</script>
<style scoped>
.contact-container {
  background-color: transparent;
  align-items: center;
}
/* Buttons */
.staff-buttons {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  column-gap: 4rem;
  row-gap: 1.5rem;
}
.staff-data {
  display: flex;
  gap: 1rem;
}
.area-button {
  border: 1px solid rgb(199, 199, 199);
  transition: all 0s !important;
  height: 100px;
  padding-left: 20%;
  justify-content: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.contact-button-title {
  font-size: 25px !important;
}
.is-active {
  background-color: #b6cde2;
}
/* ChatBot */
.chat-bot {
  width: 50%;
  height: 150px;
  background: #9bbdd9;
}
.icon {
  background-image: url("~@/assets/images/contacto/chat.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: inherit;
  background-size: 140%;
  width: 200px;
}
.inge-text-bold {
  font-size: 22px !important;
}
/* Banner contacto */
.banner-contacto {
  height: 50px;
  background-color: #f2f2f2;
  padding: 2rem 14rem;
  width: 100%;
}
/* Mapa */
.mapa-container {
  background-color: var(--light-gray);
  width: 100%;
  padding: 2rem 0;
}
.mapa-title {
  padding: 0 4rem;
}
@media screen and (max-width: 1440px) {
  .contact-button-title {
    font-size: 22px !important;
  }
  .banner-contacto-title {
    font-size: 20px !important;
  }
  .staff-title {
    font-size: 25px !important;
  }
}
@media screen and (max-width: 900px) {
  .staff-buttons {
    column-gap: 1.5rem;
  }
  .staff-data {
    flex-direction: column;
  }
  .area-button {
    padding: 1rem;
  }
  .chat-bot {
    width: 100%;
  }
  .chat-bot .icon {
    max-width: 150px;
  }
  .banner-contacto {
    padding: 2rem 4rem;
  }
  .mapa-title {
    padding: 0;
  }
}
@media screen and (max-width: 650px) {
  .contact-container {
    width: 100%;
  }
  .staff-details {
    padding: 1rem 0;
  }
  .staff-buttons {
    display: flex;
    flex-direction: column;
  }
  .area-button {
    padding-left: 1rem;
  }
  .banner-contacto {
    padding: 2rem;
    width: 100vw;
  }
  .mapa-container {
    width: 100vw;
    padding: 2rem 0;
  }
}
@media screen and (max-width: 414px) {
  .banner-contacto {
    padding: 2rem 1rem;
  }
}
</style>
