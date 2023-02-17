<template>
  <div
    class="important-info flex justify-between items-center w-full pl-4"
    id="importantInfo"
  >
    <!-- INFO DE UBICACION -->
    <div class="flex items-center ubicacion text-sm md:text-base">
      <router-link to="/contacto" class="icon nav-icon"></router-link>
      <div class="direccion flex flex-col">
        <span id="direccion-esp">Campillo 2585 | C1427DCC | CABA | Argentina</span>
        <!-- <span id="direccion-gen">Buenos Aires | Argentina</span> -->
      </div>
    </div>
    <!-- INFO DE CONTACTO -->
    <div class="flex items-center gap-4 whatsapp">
      <div
        class="
        flex
        gap-14
        pr-4
        text-xs
        w-full
        md:text-sm
        items-center
        text-center
        responsive-text
        "
      >
        <div class="flex gap-2 position-correction">
          <router-link to="/contacto" class="icon whatsapp-icon"></router-link>
          <button type="button" @click="sendWhatsapp('59767596')">
            Diagnóstico por Imágenes
          </button>
        </div>
        <button class="position-correction" type="button" @click="sendWhatsapp('41926163')">
          Atención Comercial
        </button>
        <button class="position-correction" type="button" @click="sendWhatsapp('55044427')">
          División Veterinaria
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.important-info {
  background-color: var(--dark-blue);
  color: white;
  height: 4rem;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  padding: 0 14rem;
}
.position-correction {
  /* width: min(170px, 15vw); */
}
.important-info > div > img {
  transition: all 0.5s ease-in-out;
}
.ubicacion {
  transition: all 0.3s ease-in-out;
}
#direccion-esp {
  /* letter-spacing: 1px; */
  font-size: 90%;
}
#direccion-gen {
  font-size: 18px;
  letter-spacing: 3.8px;
}
.whatsapp {
  transition: all 0.3s ease-in-out;
}
.icon {
  width: 60px;
  height: 60px;
  z-index: 9;
}
.nav-icon {
  background-image: url("../assets/images/icons/NavIcons/inge_map.svg");
}
.whatsapp-icon {
  background-image: url("../assets/images/icons/NavIcons/inge_whatsapp.svg");
}
.span-max {
  width: 300px;
}
.span-min {
  width: 150px;
}
.popover_wrapper {
  position: relative;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popover_content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -5rem;
  right: 0;
  padding: 1rem;
  background-color: var(--dark-blue);
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  width: 200%;
  max-width: 300px;
}
.popover_wrapper:hover .popover_content {
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transform: translateY(9rem);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
.popover_content .popover_content_left {
  left: 0;
}
.popover_content .popover_content_right {
  right: 0;
}

@media screen and (max-width: 1000px) {
  .responsive-text{
    font-size: 65%;
    padding-right: 12px;
  }
  #direccion-esp {
    /* font-size: 0.8rem; */
    font-size: 65%;
    letter-spacing: 0.1rem;
  }
  #direccion-gen {
    font-size: 1rem;
    letter-spacing: 0.2rem;
  }
  .span-max {
    width: 250px !important;
  }
  .span-min {
    width: 150px !important;
  }
  .ubicacion {
    width: 40%;
  }
  .whatsapp {
    /* width: 60%; */
  }
  .icon {
    height: 45px;
    width: 45px;
  }
}
@media screen and (max-width: 800px) {
  #direccion-esp {
    /* font-size: 0.7rem; */
    letter-spacing: 0.11rem;
  }
  #direccion-gen {
    font-size: 0.9rem;
    letter-spacing: 0.2rem;
  }
    .icon {
    height: 30px;
    width: 30px;
  }
}
@media screen and (max-width: 751px) {
  #direccion-esp {
    font-size: 50%;
  }
  #direccion-gen {
    font-size: 90%;
  }
}
@media screen and (max-width: 700px) {
  #direccion-esp {
    font-size: 50%;
  }
  #direccion-gen {
    font-size: 80%;
    letter-spacing: 0.18rem;
  }
}
</style>
<script>
import { contactMixin } from "@/assets/js/contactMixin.js";
export default {
  mixins: [contactMixin],
  data() {
    return {};
  },
};
</script>