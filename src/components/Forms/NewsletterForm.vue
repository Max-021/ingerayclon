<template>
  <form ref="formNewsletter" @submit.prevent="enviarFormulario">
    <div class="flex bkg-light-gray">
      <div class="flex flex-col gap-6 p-8 w-1/2">
        <div>
          <titles
            subtitle="Suscríbase a nuestro Newsletter"
            :fontSize="31"
          ></titles>
          <p>
            Lo mantendremos informados sobre todas las novedades y
            actualizaciones de nuestra empresa
          </p>
        </div>
        <div class="flex flex-col">
          <div class="flex gap-2">
            <input v-model="information.answer1" type="checkbox" name="answer1" id="answer1" />
            <label for="answer1">Promociones y ofertas exclusivas.</label>
          </div>
          <div class="flex gap-2">
            <input v-model="information.answer2" type="checkbox" name="answer2" id="answer2" />
            <label for="answer2">Lanzamientos de productos.</label>
          </div>
          <div class="flex gap-2">
            <input v-model="information.answer3" type="checkbox" name="answer3" id="answer3" />
            <label for="answer3">Novedades y actualizaciones</label>
          </div>
        </div>
        <div class="flex gap-2 justify-start items-start">
          <input v-model="information.answer4" type="checkbox" name="answer4" id="answer4" class="w-auto" />
          <label for="answer4"
            >Me gustaria recibir comunicaciones y promociones basadas en mis
            preferencias. Puedo cancelar mi suscripcion en cualquier momento
            escribiendo a
            <a href="mailto:redes@ingeray.com.ar" class="blue"
              >redes@ingeray.com.ar</a
            ></label
          >
        </div>
        <div class="flex gap-4">
          <input v-model="information.nombre" name="nombre" type="text" placeholder="Nombre" class="w-1/4" />
          <input v-model="information.apellido" name="apellido" type="text" placeholder="Apellido" class="w-1/4" />
          <input v-model="information.mail" name="mail" type="email" placeholder="Correo electronico" class="w-2/4" />
        </div>
        <div class="flex justify-between">
          <button id="sub-button" type="submit" class="contact-inge-button px-8">
            Suscribirse
          </button>
          <button type="button" class="close-button" @click="$emit('close')">
            <img
              :src="require('@/assets/images/icons/Cross.svg')"
              alt="close"
              width="40"
            />
          </button>
        </div>
      </div>
      <img
        :src="require('@/assets/images/forms/newsletter/newsletter.png')"
        alt="newsletter"
        class="w-1/2"
      />
    </div>
  </form>
</template>
<script>
import emailjs from 'emailjs-com'

export default {
  data: function () {
    return {
      formHasError: false,
      errorMessage: "",
      information: {
        nombre: '',
        apellido: '',
        mail: '',
        answer1: '',
        answer2:'',
        answer3: '',
        answer4: '',
      }
    };
  },
  methods: {
    enviarFormulario() {
      let estanTodosCompletos = this.estanTodosCompletos(this.information);
      let ningunoTieneError = this.ningunoTieneError(this.information);

      if (estanTodosCompletos && ningunoTieneError) {
        let submitButton = document.getElementById('sub-button');
        submitButton.innerHTML = "Enviando..."
        const paraEnviar = {
          nombre: this.information.nombre,
          apellido: this.information.apellido,
          mail: this.information.mail,
          answer1: this.information.answer1 ? 'Suscripto' : 'No Suscripto',
          answer2: this.information.answer2 ? 'Suscripto' : 'No Suscripto',
          answer3: this.information.answer3 ? 'Suscripto' : 'No Suscripto',
          answer4: this.information.answer4 ? 'Suscripto' : 'No Suscripto',
        }
        emailjs.send('service_mailweb','newsletter_template',paraEnviar,'7L68zCfT1wnoX0EhR')
        .then((result) => {
          //hacer algo para indicar que se mandó
          submitButton.innerHTML = "Enviado!"
          this.resetInner(submitButton);
          this.resetForm();
        })
        .catch((error) => {
          submitButton.innerHTML = "No se pudo enviar"
          this.resetInner(submitButton);
          console.log(error)
        })
      } else {
        this.formHasError = true;
        if (!estanTodosCompletos) {
          this.errorMessage = "Primero completá todos los campos";
        } else {
          this.errorMessage = "Hay campos con errores";
        }
      }
    },
    estanTodosCompletos(datos) {
      const array = [datos.nombre,datos.apellido,datos.mail]
      return array.every((campo) => campo.trim() !== "");
    },
    ningunoTieneError(datos) {
      const array = [datos.nombre,datos.apellido,datos.mail]
      return array.every((campo) => !campo.hasError);
    },
    resetInner: function (boton) {
      setTimeout(() => {
            boton.innerHTML = "Enviar consulta"
          }, 3000);
    },
    resetForm: function () {
      this.information.nombre = '';
      this.information.apellido = '';
      this.information.mail = '';
      this.information.answer1 = '';
      this.information.answer2 = '';
      this.information.answer3 = '';
      this.information.answer4 = '';
    }
  },
  watch: {
    formHasError: function (newVal, oldVal) {
      setTimeout(() => {
        this.formHasError = false;
      }, 4200);
    },
  },
};
</script>
<style scoped>
input[type="text"],
input[type="email"] {
  border: 1px solid gray;
  height: 40px;
  padding-left: 5px;
}

/* Checkbox Styles */
input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1rem;
  min-width: 1rem;
  height: 1rem;
  border: 1px solid gray;
  border-radius: 3px;
  display: grid;
  place-content: center;
  margin-top: 2px;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  -webkit-clip-path: polygon(
    14% 44%,
    0 65%,
    50% 100%,
    100% 16%,
    80% 0%,
    43% 62%
  );
  clip-path: polygon(40% 57%, 100% 5%, 100% 45%, 40% 100%, 0 64%, 0 25%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: #007eb1;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
  color: yellowgreen;
}

input[type="checkbox"]:checked {
  background-color: white;
}

.close-button {
  background-color: #eeefee;
  border-radius: 100%;
}
.close-button img {
  transform: scale(3);
}
</style>