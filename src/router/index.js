import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ServicesRoutes from '../router/servicios.js'
import ProductsRoutes from '../router/productos.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('../views/Servicios.vue'),
    children: ServicesRoutes
  },
  {//Borrar cuando solucione el problema del padding en nuestras marcas en equipamiento
    path: '/servicios/equipamiento',
    name: 'Equipamiento',
    component: () => import('../components/Servicios/equipamiento.vue')
  },
  {//Acá cambiar el import del component una vez hecho
    path: '/productos',
    name: 'Productos',
    // component: () => import('../views/EnConstruccion.vue'),
    component: () => import('../views/Productos.vue'),
  },
  {
    path: '/productos/veterinaria/:categoria',
    name: 'ProductoVeterinaria',
    component: () => import('../views/ProductoVeterinaria.vue')
  },
  {//Acá  sacar el * una vez que se pueda visualizar la sección y cambiar el import del component
    path: '/productos/*',
    name: 'ProductoCategoria',
    component: () => import('../views/EnConstruccion.vue'),
    // component: () => import('../views/ProductoCategoria.vue'),
    // children: ProductsRoutes,
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import('../views/Clientes.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/quienes-somos',
    name: 'QuienesSomos',
    component: () => import('../views/QuienesSomos.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth' });
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  routes,
})

export default router
