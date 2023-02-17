<template>
  <div class="flex flex-col gap-8 relative">
    <div class="carousel-container flex items-center">
      <!-- Control button Left -->
      <button
        class="h-6 w-6 mr-8 arrow left rounded-full"
        @click="prev()"
      ></button>
      <!-- Carousel -->
      <div class="carousel px-14">
        <div class="overflow-hidden flex">
          <div class="inner flex pb-4" ref="inner" :style="innerStyles">
            <div
              class="card-container"
              v-for="(person, index) in carouselElements"
              :key="index"
            >
              <img
                :src="
                  require(`@/assets/images/quienes-somos/staff-cards/${person.image}`)
                "
                width="90%"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Control button right -->
      <button class="h-6 w-6 arrow rounded-full" @click="next()"></button>
    </div>
  </div>
</template>
<style scoped >
.card-container {
  width: 270px;
  padding-left: 5px;
  display: flex;
  justify-content: center;
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
}
button {
  margin-right: 0px;
  margin-top: 10px;
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
}
</style>
<script>
import { staff } from "@/assets/js/quienes-somos.json";

export default {
  data() {
    return {
      innerStyles: {},
      stepSize: "",
      transitioning: false,
      carouselElements: staff,
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