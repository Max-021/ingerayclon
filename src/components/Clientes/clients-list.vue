<template>
  <div class="flex flex-col gap-4 px-16">
    <titles
      title="Clientes que"
      subtitle="Confían en nosotros"
      :fontSize="31"
    ></titles>
    <ul class="clients-gallery">
      <li
        v-for="(client, index) in clientes"
        :key="index"
        class="flex justify-center items-center"
      >
        <img
          :src="require(`@/assets/images/logos-clientes/${client.imagen}`)"
          :alt="client.imagen"
          width="240px"
        />
      </li>
    </ul>
    <!-- <button
      class="contact-inge-button self-end px-8"
    >
      Ver más
    </button> -->
  </div>
</template>
<style scoped>
.clients-gallery {
  display: grid;
  /* gap: 1rem; */
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
</style>
<script>
import clientes from "../../assets/js/clientes.json";

export default {
  data() {
    return {
      clientes: clientes.clientes,
      panel: 1,
    };
  },
};
</script>