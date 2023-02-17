<template>
  <!-- ESTE COMPONENTE ESTÁ DEPRECADO, NO USAR. PROXIMO A BORRAR -->

  <form action="#" @submit.prevent="sendMail">
    <div class="input-group">
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" v-model="mail.nombre" />
    </div>
    <div class="input-group">
      <label for="institutionName">Nombre de la Institución</label>
      <input
        type="text"
        id="institutionName"
        name="institutionName"
        v-model="mail.nombreInstitucion"
      />
    </div>
    <div class="input-group h-24">
      <label for="unitName">Unidad</label>
      <p>
        <small>(Corresponde si la institución tiene mas de un edificio)</small>
      </p>
      <input
        type="text"
        id="unitName"
        name="unitName"
        v-model="mail.nombreUnidad"
      />
    </div>
    <div class="input-group">
      <label for="telefono">Teléfono de contacto</label>
      <input
        type="text"
        id="telefono"
        name="telefono"
        v-model="mail.telefonoContacto"
      />
    </div>
    <div class="input-group">
      <label for="mail">Mail de contacto</label>
      <input type="text" id="mail" name="mail" v-model="mail.mailContacto" />
    </div>
    <div class="input-group">
      <label for="consulta">Consulta</label>
      <textarea
        name="consulta"
        id="consulta"
        cols="30"
        rows="5"
        v-model="mail.consulta"
      ></textarea>
    </div>
    <div class="input-group recaptcha">
      <vue-recaptcha
        sitekey="6Le1uYEaAAAAAGpxz8n1J7jaawzTnbIdSkAvFYAX"
        :loadRecaptchaScript="true"
      ></vue-recaptcha>
    </div>
    <button
      type="submit"
      class="
        flex
        justify-center
        items-center
        h-10
        w-full
        bg-green-400
        font-bold
        text-xl
        border-2
        rounded-3xl
        p-2
      "
    >
      <span id="sendEmail">Enviar consulta</span>
    </button>
  </form>
</template>
<script>
import VueRecaptcha from "vue-recaptcha";
import { contactMixin } from "../../assets/js/contactMixin";

export default {
  mixins: [contactMixin],
  components: { VueRecaptcha },
  data: function () {
    return {
      mail: {
        nombre: "",
        nombreInstitucion: "",
        nombreUnidad: "-",
        telefonoContacto: "",
        mailContacto: "",
        consulta: "",
      },
    };
  },
  methods: {
    sendMail: function () {
      let submitButton = document.getElementById("sendEmail");
      submitButton.innerHTML = "Enviando...";
      this.sendEMail();
    },
  },
};
</script>
<style scoped>
form {
  width: 40%;
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  padding: 10px;
}
.input-group {
  display: flex;
  flex-direction: column;
}
.input-group:not(:last-child) {
  margin-bottom: 2vh;
}
.input-group label {
  font-weight: 500;
  font-size: 1.4rem;
}
.input-group input,
.input-group textarea {
  background-color: rgba(255, 255, 255, 0.3);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid white;
  padding-left: 5px;
  font-size: 1.1rem;
}
.input-group input {
  height: 4vh;
}
.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 1);
}
.recaptcha {
  align-items: center;
}
button {
  position: relative;
  width: 100%;
  border: 2px solid #56ff01;
  overflow: hidden;
}
button span {
  transition: all 0.4s ease-in-out;
  z-index: 1;
}
button:focus {
  outline: none;
}
button::before {
  content: "";
  height: 100%;
  width: 0;
  transition: all 0.4s ease-in-out;
  background-color: #56ff01;
  position: absolute;
  left: 0;
  z-index: 0;
}
button:hover::before {
  width: 100%;
}
@media screen and (max-width: 900px) {
  form {
    width: 50%;
  }
}
@media screen and (max-width: 650px) {
  form {
    width: 70%;
  }
}
@media screen and (max-width: 500px) {
  form {
    width: 100%;
  }
}
</style>