<template>
  <div class="flex flex-col gap-4 justify-between extended-card">
    <div class="flex flex-col gap-4">
      <img :src="image" alt="" class="self-center" width="290" />
      <div class="flex flex-col">
        <titles :subtitle="title" :fontSize="18"></titles>
        <div class="flex flex-col flex-wrap blue">
          {{ description }}
        </div>
      </div>
    </div>
    <router-link :to="url" class="contact-outline text-center"
      >Ver más</router-link
    >
  </div>
</template>
<style scoped>
.extended-card {
  width: 290px;
}
</style>
<script>
export default {
  props: ["title", "description", "imagePath", "url"],
  data: function () {
    return {
      image: require(`@/assets/images/home/${this.imagePath}`),
    };
  },
  watch: {
    imagePath: function (newVal, oldVal) {
      this.image = require(`@/assets/images/home/${newVal}`);
    },
  },
};
</script>