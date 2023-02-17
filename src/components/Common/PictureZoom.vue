<template>
  <div class="picture-zoom-button-container">
    <div class="tab-content">
      <img
        :src="
          require(`@/assets/images${sectionName}${imageName}${imageExtension}`)
        "
        :width="imageWith"
      />
      <div class="mask w-full h-full flex justify-center items-center">
        <button
          class="contact-inge-button"
          type="button"
          @click="showModal = true"
        >
          Ampliar
        </button>
      </div>
    </div>
    <modal large="md" @close="showModal = false" v-if="showModal">
      <template #content class="relative">
        <button
          type="button"
          @click="showModal = false"
          style="font-size: 60px"
          class="absolute top-2 right-2 text-xl text-white"
        >
          <span>&times;</span>
        </button>
        <img
          :src="
            require(`@/assets/images${sectionName}${imageName}-zoom${imageExtension}`)
          "
          alt="imagen ampliada de rayos x"
        />
      </template>
    </modal>
  </div>
</template>
  <script>
export default {
  props: {
    sectionName: {
      type: String,
    },
    imageName: {
      type: String,
    },
    imageExtension: {
      type: String,
    },
    imageWith: {
      type: String,
    },
  },
  name: "picture-zoom-button",
  data: function () {
    return {
      showModal: false,
      resourcesPath: "@/assets/images",
    };
  },
};
</script>
<style scoped>
.tab-content {
  width: 100%;
  height: fit-content;
  position: relative;
  overflow: hidden;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(12, 127, 126, 0.3);
  top: 0;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
}
.mask:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(3px);
}
.picture-zoom-button-container:hover .mask {
  transform: translateX(0);
}
.contact-inge-button {
  z-index: 3;
  background-color: var(--bluish-green);
}
</style>