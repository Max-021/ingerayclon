<template>
  <div class="carousel relative carousel-correction">
    <button class="h-6 w-6 arrow left rounded-full" @click="prev()"></button>
    <div class="inner flex items-center" ref="inner" :style="innerStyles">
      <router-link
        :to="image.url"
        v-for="(image, index) in elements"
        :key="index"
        class="link-img"
        ref="equipment_image"
      >
        <img class="banner-img" :src="getImageUrl(image.imageName)" :alt="image" />
      </router-link>
    </div>
    <button class="h-6 w-6 arrow rounded-full" @click="next()"></button>
  </div>
</template>
<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
}
.inner {
  white-space: nowrap;
  width: fit-content;
  z-index: 2;
  border: 1px solid black;
}

button {
  margin-right: 5px;
  margin-top: 10px;
  position: absolute;
  top: 50%;
  right: 10%;
  z-index: 4;
}
.link-img {
  width: 100vw;
}
.inner {
  transition: transform 1s ease-in-out;
}
.arrow {
  background-image: url("~@/assets/images/icons/arrow.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(3);
}
.left {
  transform: rotate(-180deg) scale(3);
  left: 10%;
}
@media screen and (min-width: 1441px) {
  .carousel-correction {
    padding: 0 22%;
  }
  .link-img {
    width: 100%;
  }
  .banner-img {
    widows: 100%;
  }
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
    }, 20000);
    this.$nextTick(() => {
      window.addEventListener('resize', this.setStep)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setStep)
  },
  methods: {
    getImageUrl(imageName) {
      return `${this.$imageCDN}/${imageName}`;
    },
    setStep() {
      if(window.innerWidth > 1440) {
        this.stepSize = `100%`;
      } else {
        this.stepSize = `100vw`;
      }
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
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.carouselImages.pop();
        this.carouselImages.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.stepSize})
                          translateX(-${this.stepSize})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.stepSize})
                        translateX(-${this.stepSize})`,
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
        transform: `translateX(-${this.stepSize})`,
      };
    },
  },
};
</script>