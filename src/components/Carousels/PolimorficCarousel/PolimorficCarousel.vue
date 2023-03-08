<template>
  <div class="flex flex-col gap-8 relative">
    <titles
      :title="title"
      :subtitle="subtitle"
      :fontSize="31"
      class="px-16"
    ></titles>
    <div class="carousel-container flex justify-center">
      <!-- Control button Left -->
      <button
        class="h-6 w-6 mr-8 arrow left rounded-full self-center"
        @click="prev()"
      ></button>
      <!-- Carousel -->
      <div class="carousel px-14">
        <div class="overflow-hidden flex wrap-correction" id="inner-wrapper">
          <div :class="isExtended ? 'inner flex pb-4 big-card' : 'inner flex pb-4 small-card'" ref="inner" :style="innerStyles">
            <div
              class="card-container"
              v-for="(image, index) in elements"
              :key="index"
            >
              <mask-redirect-button
                buttonText="Ver producto"
                imageWidth="290"
                :url="image.url"
                :alternateImageName="`home/${image.imagePath}`"
                v-if="!isExtended"
              ></mask-redirect-button>
              <extended-card
                :title="image.title"
                :description="image.description"
                :imagePath="image.imagePath"
                :url="image.url"
                v-else
              >
              </extended-card>
            </div>
          </div>
        </div>
      </div>
      <!-- Control button right -->
      <button class="h-6 w-6 arrow rounded-full self-center" @click="next()"></button>
    </div>
    <a
      href="https://ingeraysrl.mercadoshops.com.ar/"
      class="absolute right-12 -bottom-6 rounded-full"
      v-if="showCheckout"
    >
      <img
        class="inge-shadow-down rounded-full"
        :src="require('@/assets/images/icons/checkout.png')"
        alt="carrito-de-compras"
        width="70"
      />
    </a>
  </div>
</template>
<style scoped >
.card-container {
  width: 250px;
  padding-left: 25px;
  display: flex;
}
.big-card {
  height: 425px;
}
.small-card {
  height: 225px;
}
.wrap-correction {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.carousel-container {
  width: 100%;
  position: relative;
}
.carousel {
  width: 100vw;
  overflow: hidden;
}
.inner {
  width: fit-content;
  transition: transform 0.2s;
  gap: 17px;
}
button {
  margin-right: 0px;
}
.arrow {
  background-image: url("~@/assets/images/icons/arrow.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: scale(4);
}
.left {
  transform: rotate(-180deg) scale(4);
}
</style>
<script>
import MaskRedirectButtonVue from "../../Common/MaskRedirectButton.vue";
import ExtendedCard from "../../Home/ExtendedCard.vue";

export default {
  props: ["isExtended", "title", "subtitle", "elements", "showCheckout"],
  components: {
    "mask-redirect-button": MaskRedirectButtonVue,
    "extended-card": ExtendedCard,
  },
  data() {
    return {
      innerStyles: {},
      stepSize: "",
      transitioning: false,
      carouselElements: this.elements,
    };
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    setStep() {
      this.stepSize = `${275 + 16}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.carouselElements.shift();
        this.carouselElements.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.carouselElements.pop();
        this.carouselElements.unshift(card);
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
    getImage(imagePath) {
      return require(`@/assets/images/home/${imagePath}.jpg`);
    },
  },
};
</script>