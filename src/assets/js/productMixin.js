import ProductosVeterinarios from '../js/productos_veterinarios.json'
import Productos from '../js/productos.json'
export const productMixin = {
    methods: {
        getVetEquipmentInfo: function (name) {
            return ProductosVeterinarios.productos_veterinarios.find((producto) => producto.product_dev_name === name)
        },
        getProductEquipment: function (name) {
            return Productos.productos.find((producto) => producto.nombreCategoria === name);
        },
        getVetCarouselImages: function (product_name) {
            const product = this.getVetEquipmentInfo(product_name)
            return product.product_carousel_images
        },
        getHumCarouselImages: function (product_name) {
            const product = this.getProductEquipment(product_name)
            return product.productos.map(img => img.productImage)
        },
        getAllProducts() {
            return ProductosVeterinarios.productos_veterinarios
        },
        enviarMensajeWhastapp: function () {
            const from = "54911...";
            var yourMessage = "testeando";

            let message = yourMessage.split(" ").join("%20");

            console.log("https://wa.me/" + from + "?text=%20" + message);
        }
    }
}