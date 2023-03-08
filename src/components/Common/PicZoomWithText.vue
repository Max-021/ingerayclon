<template>
    <div class="picture-zoom-button-container">
      <div class="tab-content">
        <img
          :src="
            require(`@/assets/images${sectionName}${imageName}${imageExtension}`)
          "
          :width="imageWith"
        />
        <div class="mask w-full h-full flex justify-center items-center">
          <router-link
            :to="`/${prodUrl}`"
            class="contact-inge-button"
            type="button"
            href="#"
          >
            Ver Equipos
          </router-link>
        </div>
      </div>
    </div>
  </template>
    <script>
  export default {
    props: {
      prodUrl: {
        type: String,
      },
      sectionName: {
        type: String,
      },
      imageName: {
        type: String,
      },
      imageExtension: {
        type: String,
      },
      imageWith: {
        type: String,
      },
    },
    name: "picture-zoom-button",
    data: function () {
      return {
        showModal: false,
        resourcesPath: "@/assets/images",
      };
    },
  };
  </script>
  <style scoped>
  .tab-content {
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;
    box-shadow: 6px 7px 38px -7px rgba(0,0,0,0.45);
-webkit-box-shadow: 6px 7px 38px -7px rgba(0,0,0,0.45);
-moz-box-shadow: 6px 7px 38px -7px rgba(0,0,0,0.45);
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(12, 127, 126, 0.3);
    top: 0;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
  }
  .mask:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(3px);
  }
  .picture-zoom-button-container:hover .mask {
    transform: translateX(0);
  }
  .contact-inge-button {
    z-index: 3;
    background-color: var(--bluish-green);
  }
  </style>