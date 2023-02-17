<template>
  <div class="caracteristicas flex flex-col py-4 gap-4 w-full h-auto">
    <titles
      subtitle="Características Generales"
      :fontSize="25"
      :lineHeight="0"
    ></titles>
    <titles :title="datos.titulo" :fontSize="25"></titles>
    <p class="text-justify text-lg two-columns-text">
      {{ datos.content }}
      <img
        v-if="datos.imagen"
        :src="getImgSource(datos.imagen)"
        alt="img-caracteristicas"
      />
    </p>
  </div>
</template>
<script>
export default {
  props: ["datos"],
  data() {
    return {
      mediaTexto: 0,
    };
  },
  methods: {
    getImgSource: function (imgSrc) {
      return require(`@/assets/images/productos/humanos/${imgSrc}`);
    },
  },
};
</script>
<style scoped>
</style>