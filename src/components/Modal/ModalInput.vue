<template>
  <div
    :class="[
      'TextInput',
      campo.hasError
        ? 'has-error'
        : campo.value.trim() !== '' && !campo.hasError
        ? 'success'
        : '',
    ]"
  >
    <label :for="campo.name">{{ campo.name }}</label>
    <input
      type="text"
      :name="campo.name"
      v-model="campo.value"
      @change="validarCampo(campo)"
    />
    <ul v-if="campo.hasError" class="help-message">
      <li v-for="(error, index) in campo.errores" :key="index">
        <small>{{ error }}</small>
      </li>
    </ul>
  </div>
</template>
<style scoped>
input {
  border-radius: 5px;
  color: black;
  font-size: 18px;
  border: 2px solid transparent;
  padding: 5px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}
input:focus {
  border-color: #0071fe;
}
.help-message {
  font-size: 14px;
}
.TextInput {
  gap: 0.2rem;
}
.TextInput.has-error input {
  background-color: #fddfe2;
  color: #f23648;
}
.TextInput.has-error input:focus {
  border-color: #f23648;
}
.TextInput.has-error .help-message {
  color: #ff0019;
}
.help-message {
  list-style: disc;
  padding-left: 13px;
  font-size: 19px;
}
.TextInput.success input {
  background-color: #e0eee4;
  color: #21a67a;
}
.TextInput.success input:focus {
  border-color: #21a67a;
}
</style>
<script>
export default {
  props: ["campo"],
  data() {
    return {};
  },
  methods: {
    validarCampo(campo) {
      let errores = [];
      campo.errores = [];
      campo.rules.forEach((regla) => {
        let error = this.verificarRegla(campo, regla);
        if (error !== "") {
          errores.push(error);
        }
      });

      return errores.length !== 0;
    },
    verificarRegla(campo, regla) {
      let error = "";

      switch (regla) {
        case "required":
          if (campo.value.trim() !== "") {
            if (campo.errores.length === 0) {
              campo.hasError = false;
            }
          } else {
            error = `Falta completar el campo ${campo.name}.`;
          }

          break;
        case "emailFormat":
          if (
            campo.value.match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
          ) {
            if (campo.errores.length === 0) {
              campo.hasError = false;
            }
          } else {
            error = "El mail tiene un formato inválido.";
          }

          break;
        case "min3":
          if (campo.value.length >= 3) {
            if (campo.errores.length === 0) {
              campo.hasError = false;
            }
          } else {
            error = `El ${campo.name} tiene que tener al menos 3 caracteres.`;
          }

          break;
        case "numbers":
          if (/^[+]*[0-9]+$/.test(campo.value.trim())) {
            if (campo.errores.length === 0) {
              campo.hasError = false;
            }
          } else {
            error = `El ${campo.name} solo admite números, el símbolo '+' y no debe tener espacios.`;
          }

          break;
        case "min10":
          if (campo.value.length >= 10) {
            if (campo.errores.length === 0) {
              campo.hasError = false;
            }
          } else {
            error = `El ${campo.name} tiene que tener al menos 10 caracteres.`;
          }

          break;
      }
      if (error !== "") {
        this.setError(campo, error);
      }

      return error;
    },
    setError(campo, error) {
      campo.hasError = true;
      campo.errores.push(error);
    },
  },
};
</script>