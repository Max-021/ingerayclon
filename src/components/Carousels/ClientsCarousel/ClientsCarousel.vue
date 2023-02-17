<template>
  <div class="padding-container flex flex-col -mt-8 -mb-16">
    <titles
      title="Clientes que"
      subtitle="Confian en Nosotros"
      :fontSize="31"
      class="px-16"
    ></titles>
    <div class="relative flex carousel">
      <div class="inner flex justify-evenly px-16" ref="inner" :style="innerStyles">
        <router-link
          class="client-icon w-fit"
          to="clientes"
          v-for="(image, index) in elements"
          :key="index"
          ref="equipment_image"
        >
          <img :src="getImageUrl(image.imagePath)" :alt="image.imagePath" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
}
.inner {
  width: fit-content;
  transition: transform 0.7s ease-in-out;
  height: 125px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.client-icon {
  width: 250px;
}
.client-icon img {
  aspect-ratio: 4/2;
  object-fit: contain;
}
</style>
<script>
export default {
  props: ["elements"],
  data() {
    return {
      innerStyles: {},
      stepSize: "",
      transitioning: false,
      carouselImages: this.elements,
      imagesPath: "",
    };
  },
  mounted() {
    this.setStep();
    setInterval(() => {
      this.next();
    }, 3000);
  },
  methods: {
    getImageUrl(imageName) {
      return require(`@/assets/images/home/${imageName}`);
    },
    setStep() {
      this.stepSize = `${this.$refs.equipment_image[0].$el.offsetWidth}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.carouselImages.shift();
        this.carouselImages.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.stepSize})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
      };
    },
  },
};
</script>