<template>
    <a :class="['icon', name+'-icon-'+division]" :href="link" target="_blank" ref="noopener noreferrer"></a>
</template>
<style scoped>
.icon{
    width: 50px!important;
    height: 50px!important;
    transform: scale(1.3);
}
/* HUMANOS */
    .facebook-icon-hum{
        background-image: url('../../assets/images/icons/footerIcons/humanos/facebook.svg');
    }
    .instagram-icon-hum{
        background-image: url('../../assets/images/icons/footerIcons/humanos/instagram.svg');
    }
    .youtube-icon-hum{
        background-image: url('../../assets/images/icons/footerIcons/humanos/youtube.svg');
    }
    .ingeray-icon-hum{
        background-image: url('../../assets/images/icons/footerIcons/humanos/ingeray.svg');
    }
/* VETERINARIA */
    .facebook-icon-vet{
        background-image: url('../../assets/images/icons/footerIcons/veterinaria/facebook.svg');
    }
    .instagram-icon-vet{
        background-image: url('../../assets/images/icons/footerIcons/veterinaria/instagram.svg');
    }
    .youtube-icon-vet{
        background-image: url('../../assets/images/icons/footerIcons/veterinaria/youtube.svg');
    }
    .ingeray-icon-vet{
        background-image: url('../../assets/images/icons/footerIcons/veterinaria/ingeray.svg');
    }
    .shop-icon-vet{
        background-image: url('../../assets/images/icons/footerIcons/veterinaria/carrito.svg');
    }
</style>
<script>
export default {
    props:['name', 'link', 'division']
}
</script>