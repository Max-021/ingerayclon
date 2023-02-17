import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/main.css'
import titleMixin from './assets/js/titleMixin'
import { init } from 'emailjs-com';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import ImageKit from 'imagekitio-vue'
import Popover from 'vue-js-popover'

Vue.use(Popover)
Vue.use(VueSplide)
Vue.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/ingesystem22"
})

Vue.config.productionTip = true

//* EmailJs Stuff init
init("user_eeVYemHTnHjSJqpAxC8wh")
//* End

Vue.mixin(titleMixin)

Vue.component('nav-bar', require('./components/NavBar.vue').default);
Vue.component('resp-nav-bar', require('./components/ResponsiveNavBar.vue').default);
Vue.component('contact', require('./components/ContactSection/ContactForm.vue').default);
Vue.component('modal', require('./components/Modal/Modal.vue').default);
Vue.component('titles', require('./components/Common/TitleComponent.vue').default);

//Global variables
Vue.prototype.$imageCDN = "https://ik.imagekit.io/ingesystem22"

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
