<template>
    <nav class="fixed top-0 flex flex-col bkg-light-blue z-20 padding-correction">
        <!-- Menu -->
        <div class="menu flex justify-between z-10">
            <!-- Logo -->
            <router-link to="/" class="flex justify-center items-center w-auto bg-transparent logo-correction" id="logo-container" exact>
                <div class="logo"></div>
            </router-link>
            <!-- Secciones -->
            <ul class="flex secciones inge-shadow-up-lilac w-auto h-12 self-end overflow-hidden">
                <li class="router-cta">
                    <router-link to="/" class="li-content home" exact>Home</router-link>
                </li>
                <li class="cta">
                    <div class="productos li-content" @click="openMenu('productos')">
                        Productos
                    </div>
                </li>
                <li class="cta">
                    <div class="servicios li-content" @click="openMenu('servicios')">
                        Servicios
                    </div>
                </li>
                <li class="router-cta">
                    <router-link to="/clientes" class="li-content" exact>Clientes</router-link>
                </li>
                <li class="router-cta">
                    <router-link to="/contacto" class="li-content" exact>Contacto</router-link>
                </li>
                <SubMenu :show="this.showSubMenu" :option="this.subMenuOption" @closeSubMenu="closeMenu"></SubMenu>
            </ul>
        </div>
        <!-- Info importante -->
        <ImportantInfo></ImportantInfo>
    </nav>
</template>

<style scoped>
/* estilos para corregir desfases */
.padding-correction{
  padding: 0 14rem;
  right:0;
  left: 0;
}
.logo-correction{
    margin: 0 5%;
}
    .menu{
        height: 5rem;
        /* padding-left: 1.4%; */
    }
    .secciones{
        background: linear-gradient(to right, #666666,#999999, #CCCCCC);
        border-top-left-radius: 15px;
    }
    .secciones li{
        height: 100%;
        width: min(170px, 15vw);
        display: flex;
        flex-direction: row;
        font-weight: bold;
        font-size: 1.1rem;
    }
    .secciones .li-content{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .secciones li label:hover{
        cursor: pointer;
    }
    .secciones li a, .cta{
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    .cta{
        width: min(230px, 23vw)!important;
    }
    img{
        height: 20px;
        width: 20px;
        transition: all .5s ease-in-out;    
    }
    .logo{
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 180px;
        height: 100%;
        background-image: url('../assets/images/icons/NavIcons/logo-ingeray1.svg');
    }
    .router-link-exact-active,
    .router-link-active {
        transition: all .5s ease-in-out;
        background-color: var(--lilac);
        color: white;
    }
    li a:hover:not(.router-link-exact-active), 
    .cta:hover:not(.router-link-exact-active){
        background-color: #666666;
        color: white; 
    }
    @media screen and (min-width: 1441px) {
        .padding-correction {
            padding: 0 22%;
        }
    }
    @media screen and (max-width: 1000px) {
        .padding-correction {
            padding: 0 4rem;
        }
    }
    @media screen and (max-width:650px){
        nav{
            display: none;
        }
    }
</style>

<script>
import SubMenu from '@/components/NavBarSubMenu.vue'
import ImportantInfo from '@/components/InfoImportante.vue'
    export default {
        components:{ImportantInfo, SubMenu},
        name:'nav-bar',
        data(){
            return{
                showSubMenu: false,
                subMenuOption: '',
                options:[
                    {
                        sectionName: 'Inicio',
                        sectionUrl: '/',
                    },
                    {
                        sectionName: 'Productos',
                        sectionUrl: '/productos',
                    },
                    {
                        sectionName: 'Servicios',
                        sectionUrl: '/servicios',
                    },
                    {
                        sectionName: 'Clientes',
                        sectionUrl: '/clientes',
                    },
                    {
                        sectionName: 'Contacto',
                        sectionUrl: '/contacto',
                    },
                ]
            }
        },
        methods:{
            getImg(imgName){
                return require('@/assets/images/icons/NavIcons/'+imgName+'.svg')
            },
            openMenu(subMenuName){
                if(!this.showSubMenu){
                    this.showSubMenu = true
                    if(this.subMenuOption !== subMenuName){
                        this.subMenuOption = subMenuName
                    }
                } else{
                    if(this.subMenuOption !== subMenuName){
                        this.subMenuOption = subMenuName
                    } else {
                        this.showSubMenu = false
                    }
                }
            },
            closeMenu(){
                this.showSubMenu = false
            }
        },
    }
</script>