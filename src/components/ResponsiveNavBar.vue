<template>
    <ul class="hidden w-full justify-evenly fixed bottom-0">
        <li v-for="(option, index) in options" class="w-full" :key="index">
            <router-link :to="option.sectionUrl" class="text-black flex flex-col h-full justify-center items-center text-center" exact>
                {{option.sectionName}}
            </router-link>
        </li>
    </ul>
</template>
<script>    
export default {
    data(){
        return{
            options:[
                {
                    sectionName: 'Inicio',
                    sectionUrl: '/'
                },
                {
                    sectionName: 'Productos',
                    sectionUrl: '/productos'
                },
                {
                    sectionName: 'Servicios',
                    sectionUrl: '/servicios'
                },
                {
                    sectionName: 'Clientes',
                    sectionUrl: '/clientes'
                },
                {
                    sectionName: 'Contacto',
                    sectionUrl: '/contacto'
                },
            ]
        }
    },
    methods:{
        toggle(){
            this.isActive = !this.isActive
        },
        getImg(imgName){
            return require('@/assets/images/icons/NavIcons/'+imgName+'.svg')
        }
    }
}
</script>
<style scoped>
    .hidden{
        display:none
    }
    @media screen and (max-width:650px) {
        .hidden{
            display: flex;
            z-index: 999;
        }
        .router-link-exact-active,
        .router-link-active {
            background-color: #395669;
            color: white;
        }

        .router-link-exact-active img,
        .router-link-active img{
            filter: brightness(0) invert(1);
        }

        a{
            transition: all .5s ease-in-out;
        }

        ul{
            width: 100%;
            height: 5vh;
            box-shadow: 0px -5px 10px 2px rgba(0,0,0,.5);
            background: linear-gradient(to right, #666666,#999999, #CCCCCC);
            z-index: 9;
        }
                           
        li{
            border-right: 1px solid rgba(0,0,0,.3);
        }
    }
</style>