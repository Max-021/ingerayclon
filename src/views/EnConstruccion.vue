<template>
    <div class="padding-container h-48">
        <h2 class="titular mt-20 pt-4">
            SECCIÓN EN CONSTRUCCIÓN
        </h2>
        <p class="descripcion">
            Para más información sobre 
            la amplia variedad de productos que ofrecemos por 
            favor póngase en contacto con un 
            <router-link to="/contacto" class="link-azul" exact>
                Asesor Comercial.
            </router-link>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.link-azul{
    color: #112576;
    text-decoration: underline;
    font-style: italic;
}
.titular {
    color: #1e6595;
    font-size: 130%;
    text-align: center;
}
.descripcion {
    font-size:110%;
}
</style>