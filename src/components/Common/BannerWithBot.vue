<template>
  <div class="inge-shadow-down flex flex-col mt-4">
    <img :src="bannerName" alt="banner-contactos" />
    <div class="banner-content flex flex-col gap-6 relative">
      <div id="banner-section-title">
        <slot name="title"></slot>
      </div>
      <div id="banner-section-stuff">
        <slot name="stuff"></slot>
      </div>
      <button
        class="
          bot-button
          rounded-full
          h-20
          w-20
          absolute
          right-6
          -bottom-12
          cursor-pointer
        "
        @click="showModal = true"
      ></button>
    </div>
    <modal large="sm" @close="showModal = false" v-if="showModal">
      <template #content>
        <simple-contact-form @close="showModal = false"></simple-contact-form>
      </template>
      ></modal
    >
  </div>
</template>

<script>
import SimpleContactForm from "../Forms/SimpleContactForm.vue";
export default {
  name: "banner-box",
  props: ["bannerName"],
  components: {
    "simple-contact-form": SimpleContactForm,
  },
  data() {
    return {
      load: false,
      showModal: false,
    };
  },
};
</script>

<style>
.banner {
  background-image: var(--image-url);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: calc((864 / 2872) * 100%);
}
.banner-content {
  padding: 2rem 4rem 4rem;
  background-color: white;
}
.bot-button {
  background-image: url("~@/assets/images/icons/bot.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.1);
}

@media screen and (max-width: 900px) {
  .banner-content {
    padding: 2rem 3rem;
  }
}
@media screen and (max-width: 650px) {
  .banner-content {
    padding: 1rem;
  }
}
@media screen and (max-width: 414px) {
}
</style>