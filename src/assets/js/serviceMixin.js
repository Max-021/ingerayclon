import servicios from '../js/servicios.json'
import alquileres from '../js/equipos_de_alquiler.json'

export const serviceMixin = {
    methods: {
        getServiceInfo: function (name) {
            return servicios.servicios.find((servicio) => servicio.url === name)
        },
        getRentInfo: function (product) {
            return alquileres.rental_equipment.find((alquiler) => alquiler.rental_equipment_url === product)
        },
        getRentCarouselImages: function (product_name) {
            const product = this.getRentInfo(product_name)
            return product.rental_equipment_carousel_images
        }
    }
}