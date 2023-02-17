<template>
  <div class="carousel-container">
    <splide :options="options">
      <splide-slide
        v-for="(elemento, index) in elementos"
        :key="index"
        class="carousel-splide"
      >
        <div class="carousel-card inge-shadow-down">
          <div class="carousel-image"></div>
          <div class="carousel-text">
            <titles
              :title="elemento.titulo"
              :subtitle="elemento.subtitulo"
              :fontSize="25"
            ></titles>
            <p class="carousel-description mt-4">{{ elemento.descripcion }}</p>
          </div>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>
<style scoped>
.carousel-container {
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ffffff;
  padding: 0 14rem;
}
.carousel-splide {
  overflow: visible;
  height: auto;
  padding: 3rem 3rem 0 3rem;
}
.splide__track {
  height: 200px !important;
}
.carousel-card {
  width: 100%;
  height: 400px;
  background: #ffffff;
  display: flex;
  gap: 1rem;
  margin: 0.2rem 0 1rem 0;
}
.carousel-image {
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://picsum.photos/200/300");
}
.carousel-text {
  width: 40%;
  padding: 1rem;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  font-size: 27px;
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 1000px) {
  .carousel-container {
    width: 100%;
    margin: 0;
  }
  .carousel-card {
    display: flex;
    flex-direction: column;
    height: 500px;
  }
  .carousel-image,
  .carousel-text {
    width: 100%;
    border-radius: 0;
  }
  .carousel-image {
    height: 230px;
    max-height: 300px;
  }
  .carousel-text {
    margin-top: -1rem;
  }
}
@media screen and (max-width: 650px) {
  .carousel-splide {
    padding: 1rem 1rem 0 1rem;
    display: flex;
    justify-content: center;
  }
  .carousel-container {
    width: 100%;
    margin-bottom: 3rem;
    max-height: 700px;
  }
  .carousel-card {
    width: 70vw;
    margin: 0;
  }
  .carousel-text {
    padding: 0.5rem;
    height: 65%;
    overflow-y: scroll;
  }
  .carousel-image {
    height: 35%;
  }
}
</style>
<script>
export default {
  props: ["elementos"],
  data: function () {
    return {
      fadeInElements: [],
      options: {
        rewind: true,
        width: "100%",
        gap: "1rem",
      },
    };
  },
};
</script>