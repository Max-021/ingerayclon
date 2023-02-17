<template>
  <div class="mask-redirect-button-container">
    <div class="tab-label pl-4" v-if="tabName">{{ tabName }}</div>
    <div class="tab-content inge-shadow-down">
      <img
        v-if="alternateImageName === null"
        :src="tabBackgroundImage"
        :width="imageWidth"
      />
      <img v-else :src="require(`@/assets/images/${alternateImageName}`)" />
      <div class="mask w-full h-full flex justify-center items-center">
        <router-link :to="url" class="contact-inge-button" type="button">
          {{ buttonText }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabName: {
      type: String,
    },
    tabBackgroundImage: {
      type: String,
      default: "https://picsum.photos/300/300",
    },
    alternateImageName: {
      type: String,
      default: null,
    },
    buttonText: {
      type: String,
    },
    url: {
      type: String,
      default: "/",
    },
    imageWidth: {
      type: String,
    },
  },
  name: "mask-redirect-button",
  data: function () {
    return {};
  },
  methods: {
    getImage(imagePath) {
      return require(`@/assets/images/${imagePath}`);
    },
  },
};
</script>
<style scoped>
.tab-label {
  color: var(--gray);
  height: 2rem;
  border-bottom: 1px solid var(--gray);
}
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
.mask-redirect-button-container:hover .tab-label {
  color: var(--bluish-green);
  font-size: 17px;
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
  border-bottom: 3px solid var(--bluish-green);
}
.mask-redirect-button-container:hover .mask {
  transform: translateX(0);
}
.contact-inge-button {
  z-index: 3;
  background-color: var(--bluish-green);
}
</style>