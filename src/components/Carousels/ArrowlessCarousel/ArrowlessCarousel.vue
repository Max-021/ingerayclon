<template>
  <div class="carousel-container flex flex-col gap-4">
    <div class="carousel relative">
      <div class="inner flex items-center" ref="inner" :style="innerStyles">
        <img
          ref="equipment_image"
          v-bind:src="getImgUrl(imgActual)"
          :alt="carouselImages[imgActual]"
        />
      </div>
    </div>
    <div class="flex gap-4 justify-center mb-4" id="carousel-dots">
      <div
        class="circle rounded-full h-5 w-5 bg-gray-400 carousel-btn"
        :class="[index === imgActual ? 'green-dot' : 'gray-dot']"
        v-for="(card, index) in carouselImages"
        :key="index"
        @click="mostrarImg(index)"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.carousel-container {
  width: fit-content;
}
.carousel {
  width: 500px;
  overflow: hidden;
}
.inner {
  white-space: nowrap;
  width: fit-content;
  z-index: 2;
}
.control-buttons {
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  top: 50%;
  width: 100%;
  z-index: 10;
}
#carousel-dots {
  max-width: 500px;
  flex-wrap: wrap;
}
button {
  margin-right: 5px;
  margin-top: 10px;
}
.gray-dot {
  background-color: #cacaca;
}
.green-dot {
  background-color: #669193;
}
.inner {
  transition: transform 0.2s;
}
.arrow {
  /* background-image: url("~@/assets/images/icons/arrow.svg"); */
  background-image: url("~@/assets/images/icons/arrow.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(3);
}
.left {
  transform: rotate(-180deg) scale(3);
}
.carousel-btn:hover {
  cursor: pointer;
}
</style>
<script>
import { serviceMixin } from "../../../assets/js/serviceMixin";
import { productMixin } from "../../../assets/js/productMixin";

export default {
  name: "arrowles-carousel",
  props: ["product_name", "product_type"],
  mixins: [serviceMixin, productMixin],
  data() {
    return {
      cards: [8, 1, 2, 3, 4, 5, 6, 7],
      innerStyles: {},
      stepSize: "",
      stepNumber: "",
      transitioning: false,
      carouselImages: [],
      imagesPath: "",
      imgActual: 0,
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  watch: {
    product_name: {
      handler(newValue) {
        this.setCarouselImages();
      },
    },
  },
  methods: {
    setStep() {
      this.stepSize = `${this.$refs.inner.parentNode.scrollWidth}px`;
      this.stepNumber = 1;
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
        this.stepNumber === this.carouselImages.length
          ? (this.stepNumber = 1)
          : this.stepNumber++;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight(1);
      this.afterTransition(() => {
        const card = this.carouselImages.pop();
        this.carouselImages.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
        this.stepNumber === 1
          ? (this.stepNumber = this.carouselImages.length)
          : this.stepNumber--;
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
    setCarouselImages() {
      switch (this.product_type.toString()) {
        case "services":
          this.imagesPath = "servicios/alquiler/carousel";
          this.carouselImages = this.getRentCarouselImages(this.product_name);
          break;
        case "human":
          this.imagesPath = "productos/humanos/carousel";
          this.carouselImages = this.getHumCarouselImages(this.product_name);
          break;
        default:
          this.imagesPath = "productos/veterinaria/carousel";
          this.carouselImages = this.getVetCarouselImages(this.product_name);
          break;
      }
    },
    mostrarImg(indice) {
      this.imgActual = indice;
    },
    getImgUrl(indice) {
      console.log(`@/assets/images/${this.imagesPath}/${this.carouselImages[indice]}`)
      return require(`@/assets/images/${this.imagesPath}/${this.carouselImages[indice]}`);
    }
  },
  created() {
    this.setCarouselImages();
    console.log(this.carouselImages)
  },
};
</script>