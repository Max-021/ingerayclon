<template>
  <form
    class="w-full bg-white px-8 flex flex-col gap-4 pb-8"
    @submit.prevent="prepareEmail"
  >
    <img
      src="@/assets/images/logo-inge-contacto.svg"
      alt="logo de ingeray"
      class="self-end"
      width="150px"
    />
    <div class="contact-fields">
      <titles
        title="Déjenos su"
        subtitle="Consulta"
        :fontSize="31"
        class="pl-2"
      >
      </titles>
      <small class="pl-2"
        >* Complete los 4 campos del formulario para brindarle una mejor
        atención</small
      >
      <div class="flex flex-col gap-2 mt-4">
        <div class="input-group">
          <label for="nombre">Nombre *</label>
          <input
            type="text"
            id="nombre"
            v-model="formData.personName.val"
            :class="{ incomplete: !formData.personName.complete }"
            @keypress.enter.prevent="prepareEmail"
            @change="markAsCompleted(formData.personName)"
          />
        </div>
        <div class="input-group">
          <label for="nombreInstitucion">Nombre de la Institución</label>
          <input
            type="text"
            id="nombreInstitucion"
            v-model="formData.orgName.val"
            @keypress.enter.prevent="prepareEmail"
          />
        </div>
        <div class="input-group">
          <label for="unidad">Unidad / Servicio</label>
          <input
            type="text"
            id="unidad"
            v-model="formData.unitName.val"
            @keypress.enter.prevent="prepareEmail"
          />
        </div>
        <div class="input-group">
          <label for="mail"> Mail de Contacto *</label>
          <input
            type="email"
            id="mail"
            v-model="formData.email.val"
            :class="{ incomplete: !formData.email.complete }"
            @keypress.enter.prevent="prepareEmail"
            @change="markAsCompleted(formData.email)"
          />
        </div>
        <div class="input-group">
          <label for="telefono">Teléfono de contacto *</label>
          <input
            type="text"
            id="telefono"
            v-model="formData.phoneNumber.val"
            :class="{ incomplete: !formData.phoneNumber.complete }"
            placeholder="Ej: 1122223333"
            @keypress.enter.prevent="prepareEmail"
            @change="markAsCompleted(formData.phoneNumber)"
          />
        </div>
        <div class="input-group">
          <label for="consulta"
            >Escriba aquí su consulta, le responderemos a la brevedad *</label
          >
          <textarea
            id="consulta"
            rows="5"
            v-model="formData.question.val"
            :class="{ incomplete: !formData.question.complete }"
            @keypress.enter.prevent="prepareEmail"
            @change="markAsCompleted(formData.question)"
          >
          </textarea>
        </div>
      </div>
    </div>
    <div class="contact-footer relative">
      <button class="contact-inge-button py-2 px-6" id="sendEmail">
        Enviar Consulta
      </button>
      <button
        type="button"
        @click="$emit('close')"
        class="
          close-button
          bg-center
          h-10
          w-10
          absolute
          top-1
          -right-4
          text-xl
          rounded-full
        "
      ></button>
    </div>
  </form>
</template>
<script>
import { contactMixin } from "../../assets/js/contactMixin";
import { validationMixins } from "../../assets/js/validationMixin";

export default {
  mixins: [contactMixin, validationMixins],
  data() {
    return {
      showModal: false,
      formData: {
        personName: {
          val: "",
          complete: true,
        },
        orgName: {
          val: "",
          complete: true,
        },
        unitName: {
          val: "",
          complete: true,
        },
        email: {
          val: "",
          complete: true,
        },
        phoneNumber: {
          val: "",
          complete: true,
        },
        question: {
          value: "",
          complete: true,
        },
      },
    };
  },
  methods: {
    prepareEmail() {
      const fields = [
        this.formData.personName,
        this.formData.email,
        this.formData.phoneNumber,
        this.formData.question,
      ];
      this.unsetComplete(fields);
      this.validateFields(fields);
      this.sendMail();
    },
    markAsCompleted(field) {
      field.complete = true;
    },
    sendMail: function () {
      let submitButton = document.getElementById("sendEmail");
      submitButton.innerHTML = "Enviando...";
      this.sendEMail();
    },
  },
};
</script>
<style scoped>
.bg-white {
  background-color: #e3e4e3 !important;
}
.input-group {
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid black;
}
.input-group label {
  position: absolute;
  left: 0.5rem;
  font-size: 13px;
  z-index: 4;
}
.input-group input {
  height: 50px;
  padding-top: 10px;
}
.input-group textarea {
  padding-top: 15px;
}
.input-group input,
textarea {
  padding-left: 0.5rem;
  font-size: 18px;
}
.close-button {
  background-image: url("~@/assets/images/icons/Cross.svg");
  background-size: 280%;
  background-color: #f2f2f2;
}
/* Validation Styles */
.incomplete {
  border: 1px solid red;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
input:focus,
textarea:focus {
  outline: none;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>