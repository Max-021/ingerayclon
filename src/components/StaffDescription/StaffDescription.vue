<template>
  <ul class="staff-description flex flex-col gap-4 mb-4">
    <li
      v-for="(persona, index) in equipo"
      :key="index"
      class="personal-card flex gap-4"
    >
      <img
        :src="
          require(`@/assets/images/contacto/fotosPersonal/${persona.imagen}`)
        "
        :alt="`Foto de ${persona.nombre}`"
        width="110px"
        height="300px"
        class="inge-shadow-down"
      />
      <div class="personal-details flex flex-col gap-2 w-1/2">
        <div class="person">
          <titles :subtitle="persona.nombre" class="staff-name-title"></titles>
          <p>{{ persona.rol }}</p>
        </div>
        <div class="contact-details">
          <div
            class="contact-data-icon"
            v-for="(mail, index2) in persona.mail"
            :key="index2"
          >
            <div class="data-icon mail-icon"></div>
            <a class="blue" :href="'mailto: ' + mail"> {{ mail }} </a>
          </div>
          <div class="contact-data-icon">
            <div class="data-icon whatsapp-icon"></div>
            <button class="blue" @click="sendWhatsapp(persona.whatsapp)">
              {{ persona.whatsapp }}
            </button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { contactMixin } from "../../assets/js/contactMixin";
export default {
  props: ["equipo"],
  mixins: [contactMixin],
};
</script>
<style scoped>
.personal-details {
  width: 75%;
}
.contact-data-icon {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.data-icon {
  height: 35px;
  width: 35px;
  background-size: 400%;
  background-position: center center;
  background-repeat: no-repeat;
}
.mail-icon {
  background-image: url("~@/assets/images/contacto/mail.svg");
}
.whatsapp-icon {
  background-image: url("~@/assets/images/contacto/whatsapp.svg");
}
.staff-description {
  width: 50%;
}
@media screen and (max-width: 1440px) {
  .staff-name-title {
    font-size: 25px !important;
    color: black !important;
  }
}
@media screen and (max-width: 900px) {
  .staff-description {
    width: 100%;
  }
  .personal-details {
    width: 100%;
  }
  .personal-card {
    width: 100%;
  }
}
@media screen and (max-width: 414px) {
  .personal-details {
    width: 100%;
  }
  .personal-card {
    width: 100%;
  }
}
</style>