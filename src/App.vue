<template>
  <div id="app">
    <nav-bar></nav-bar>
    <resp-nav-bar></resp-nav-bar>
    <router-view />
    <FooterContent></FooterContent>
  </div>
</template>

<style>
:root {
  --light-lilac: #d2ddeb;
  --lilac: #9fb3e3;
  --dark-lilac: #7a9ac7;
  --bluish-green: #0c7f7e;
  --dark-bluish-green: #1e6595;
  --blue: #112576;
  --dark-blue: #0a1f42;
  --eshop-color: #092146;
  --gray: #677a8b;
  --dark-gray: #4f4f4f;
  --light-gray: #e1e1e1;
  --shadow: hsl(0 0% 50% / 0.4);
  --shadow-lilac: hsl(215 42% 50% / 0.7);
  --shadow-blue: hsl(228 73% 5% / 0.6);
}
#app {
  background-size: cover;
  height: fit-content;
  padding-top: 8rem;
  background-color: var(--light-lilac);
}
/* Fuentes */
.inge-text {
  font-family: "IngeText", Arial, Helvetica, sans-serif;
}
.inge-text-bold {
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
}
.two-columns-text {
  column-count: 2;
}
/* Colores de texto */
.blue {
  color: var(--dark-bluish-green);
}
.light-blue {
  color: var(--lilac);
}
.gray {
  color: var(--gray);
}
/* Colores de fondos */
.bkg-light-blue {
  background-color: var(--dark-lilac);
}
.bkg-blue {
  background-color: var(--blue);
}
.bkg-dark-blue {
  background-color: var(--dark-blue);
}
.bkg-light-gray {
  background-color: var(--light-gray);
}
/* Boton */
.contact-inge-button {
  background-color: var(--bluish-green);
  color: white;
  height: auto;
  width: auto;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  border: 2px solid gray;
}
.inge-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 25px;
  text-align: center;
  padding: 10px;
  height: 4vh;
  width: 70%;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
}
.inge-button::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  z-index: -1;
  background-color: rgba(57, 86, 105, 0.7);
  transition: all 0.4s ease-in-out;
}
.inge-button:hover {
  color: white;
}
.inge-button:hover::before {
  transform: translateX(0);
}
.contact-outline {
  border: 2px solid var(--bluish-green);
  color: var(--bluish-green);
  height: auto;
  width: auto;
  min-width: 130px;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  align-self: flex-end;
}
.envelope {
  height: 40px;
  width: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 350%;
  background-image: url("~@/assets/images/icons/envelope.svg");
}
/* Sombra */
.shadow-animated {
  transition: all 0.3s ease-in-out;
}
.shadow-animated:hover {
  box-shadow: none;
}
.inge-shadow-down {
  box-shadow: 2px 4px 4px var(--shadow);
  box-shadow: 3px 6px 6px var(--shadow);
  box-shadow: 4px 8px 8px var(--shadow);
}
.inge-shadow-down-lilac {
  box-shadow: 2px 4px 4px var(--shadow-lilac);
  box-shadow: 3px 6px 6px var(--shadow-lilac);
  box-shadow: 4px 8px 8px var(--shadow-lilac);
}
.inge-shadow-down-blue {
  box-shadow: 2px 4px 4px var(--shadow-blue);
  box-shadow: 3px 6px 6px var(--shadow-blue);
  box-shadow: 4px 8px 8px var(--shadow-blue);
}
.inge-shadow-up {
  box-shadow: -2px -4px 4px var(--shadow);
  box-shadow: -3px -6px 6px var(--shadow);
  box-shadow: -4px -8px 8px var(--shadow);
}
.inge-shadow-up-lilac {
  box-shadow: -1px -1px 1px var(--shadow-lilac);
  box-shadow: -3px -4px 4px var(--shadow-lilac);
  box-shadow: -5px -6px 6px var(--shadow-lilac);
}
/* Containers */
.padding-container {
  width: 100%;
  padding: 0 14rem;
}
@media screen and (min-width: 1441px) {
  .padding-container {
    padding: 0 22%;
  }
}
@media screen and (max-width: 1200px) {
  .padding-container {
    padding: 0 4rem;
  }
}
@media screen and (max-width: 650px) {
  #app {
    padding-top: 0;
    padding-bottom: 5vh;
  }
  .padding-container {
    padding: 0 1rem;
  }
}
</style>
<script>
import FooterContent from "@/components/Footer/Footer.vue";
export default {
  components: { FooterContent },
};
</script>