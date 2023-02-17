<template>
  <form @submit.prevent="enviarFormulario">
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
            <input type="checkbox" name="answer1" id="answer1" />
            <label for="answer1">Promociones y ofertas exclusivas.</label>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" name="answer2" id="answer2" />
            <label for="answer2">Lanzamientos de productos.</label>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" name="answer3" id="answer3" />
            <label for="answer3">Novedades y actualizaciones</label>
          </div>
        </div>
        <div class="flex gap-2 justify-start items-start">
          <input type="checkbox" name="answer4" id="answer4" class="w-auto" />
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
          <input type="text" placeholder="Nombre" class="w-1/4" />
          <input type="text" placeholder="Apellido" class="w-1/4" />
          <input type="email" placeholder="Correo electronico" class="w-2/4" />
        </div>
        <div class="flex justify-between">
          <button type="submit" class="contact-inge-button px-8">
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
export default {
  data: function () {
    return {
      formHasError: false,
      errorMessage: "",
    };
  },
  methods: {
    enviarFormulario() {
      let estanTodosCompletos = this.estanTodosCompletos(this.information);
      let ningunoTieneError = this.ningunoTieneError(this.information);

      if (estanTodosCompletos && ningunoTieneError) {
      } else {
        this.formHasError = true;
        if (!estanTodosCompletos) {
          this.errorMessage = "Primero completá todos los campos";
        } else {
          this.errorMessage = "Hay campos con errores";
        }
      }
    },
    estanTodosCompletos(array) {
      return array.every((campo) => campo.value.trim() !== "");
    },
    ningunoTieneError(array) {
      return array.every((campo) => !campo.hasError);
    },
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