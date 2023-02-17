<template>
  <div class="especificaciones flex flex-col gap-4 py-4">
    <div class="titulos">
      <titles
        title="Ficha Técnica"
        subtitle="Especificaciones"
        :fontSize="25"
      ></titles>
    </div>
    <div class="flex flex-col gap-4">
      <img
        v-for="(image, index) in datos"
        :src="image.tabla"
        :key="index"
        alt="Ficha técnica"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["datos"],
};
</script>
<style scoped>
</style>