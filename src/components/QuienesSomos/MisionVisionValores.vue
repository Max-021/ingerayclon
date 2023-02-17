<template>
  <div class="flex flex-col gap-8">
    <div class="flex gap-4 justify-around" v-if="!isExpandedViewOpen">
      <div
        class="mvv-card flex flex-col gap-4 justify-between"
        v-for="(section, index) in mvv"
        :key="index"
      >
        <div class="flex flex-col gap-4">
          <img
            :src="getImage(section.frontPage)"
            :alt="`Icono de ${section.name}`"
            width="300"
            class="inge-shadow-down"
          />
          <p class="text-center px-3">
            {{ section.shortDescription }}
          </p>
        </div>
        <button
          class="contact-inge-button self-end"
          @click="setActive(section)"
        >
          Ver más
        </button>
      </div>
    </div>
    <div class="flex gap-4" v-else>
      <p class="w-1/2 text-justify text-xl leading-8">
        {{ activeSection.longDescription }}
      </p>
      <div class="flex flex-col gap-2 w-1/2">
        <img
          :src="getImage(activeSection.backPage)"
          :alt="`Imagen de ${activeSection.name}`"
        />
        <div class="flex gap-2">
          <button
            @click="setActive(naSection)"
            v-for="(naSection, index) in nonActiveSections"
            :key="index"
          >
            <img
              :src="getImage(naSection.frontPage)"
              width="250"
              class="inge-shadow-down"
            />
          </button>
        </div>
      </div>
    </div>
    <button
      class="contact-inge-button self-end"
      v-if="isExpandedViewOpen"
      @click="isExpandedViewOpen = false"
    >
      Volver
    </button>
  </div>
</template>
<style scoped>
.mvv-card {
  width: 300px;
}
.contact-inge-button {
  border: None !important;
  padding: 0.5rem 2rem;
}
</style>
<script>
import { mvv } from "@/assets/js/misionVisionValores.json";
export default {
  data() {
    return {
      mvv,
      isExpandedViewOpen: false,
      activeSection: "",
      nonActiveSections: [],
    };
  },
  methods: {
    getImage(nombre) {
      return require(`@/assets/images/quienes-somos/${nombre}`);
    },
    setActive(section) {
      const activeSec = this.mvv.find((sec) => sec.name === section.name);
      this.mvv.forEach((element) => {
        element.isActive = false;
      });
      activeSec.isActive = true;
      this.activeSection = activeSec;
      this.nonActiveSections = this.mvv.filter(
        (sec) => sec.name !== activeSec.name
      );
      this.isExpandedViewOpen = true;
    },
  },
};
</script>