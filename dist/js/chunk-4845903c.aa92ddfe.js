(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4845903c"],{1359:function(t,a,e){"use strict";var n=e("a81e"),r=e.n(n);r.a},3343:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"padding-container flex flex-col gap-16 pb-16"},[n("div",{staticClass:"carousel relative h-fit w-full mt-4 flex inge-shadow-down"},[n("arrowless-carousel",{attrs:{product_name:this.productInfo.product_dev_name,product_type:"vet"}}),n("div",{staticClass:"py-8 pr-12 flex flex-col gap-8"},[n("titles",{attrs:{title:this.productInfo.category_name,subtitle:this.productInfo.product_name}}),n("p",{staticClass:"text-justify text-lg"},[t._v(" "+t._s(this.productInfo.product_carousel_text)+" ")]),n("button",{staticClass:"contact-inge-button inge-shadow-down shadow-animated mt-8"},[t._v(" Quiero que me contacten ")])],1),this.productInfo.product_shop_url?n("a",{staticClass:"\n        eshop-circle\n        absolute\n        -bottom-8\n        right-8\n        h-16\n        w-16\n        rounded-full\n        bg-cover bg-no-repeat bg-center\n      ",staticStyle:{transform:"scale(1.5)"},style:{backgroundImage:"url("+e("12fb")+")"},attrs:{href:this.productInfo.product_shop_url,target:"_blank"}}):t._e()],1),n("div",{staticClass:"flex flex-col gap-4 px-16"},[n("div",{staticClass:"titles"},[n("titles",{attrs:{subtitle:"Características"}}),n("titles",{attrs:{title:"Destacables de este equipo",fontSize:18}})],1),this.productInfo.products_characteristics_images?n("div",{staticClass:"flex gap-4 justify-around"},t._l(this.productInfo.products_characteristics_images,(function(t,a){return n("img",{key:a,attrs:{src:e("fca2")("./"+t),width:"19%"}})})),0):t._e(),n("p",{staticClass:"text-justify text-lg two-columns-text"},[t._v(" "+t._s(this.productInfo.product_description)+" ")])]),0!==this.productInfo.product_galery_images.length?n("div",{staticClass:"flex flex-col gap-4 px-16"},[n("titles",{attrs:{title:"Equipos de Sala",subtitle:"Galería"}}),n("div",{staticClass:"tab-label"},[t._v("Imágenes Clínicas")]),n("div",{staticClass:"flex justify-around gap-2"},t._l(this.productInfo.product_galery_images,(function(t,a){return n("picture-zoom-button",{key:a,attrs:{sectionName:"/productos/veterinaria/galeria",imageName:"/"+t.picture_name,imageExtension:t.picture_extension,imageWith:"300px"}})})),1)],1):t._e(),n("div",{attrs:{id:"veterinaryFooter"}},[n("titles",{attrs:{title:"Conozca más",subtitle:"Productos para Medicina Veterinaria"}}),n("div",{staticClass:"grid grid-cols-4 grid-rows-2 gap-y-4 gap-8 mt-4"},t._l(t.menuProducts,(function(a,r){return n("router-link",{key:r,staticClass:"servicio-container flex flex-col",attrs:{to:a.product_url}},[n("span",{staticClass:"pl-4 footer-menu-title"},[t._v(" "+t._s(a.product_name)+" ")]),n("img",{staticClass:"shadow-lg",attrs:{src:e("af17")("./"+a.product_dev_name+".png")}})])})),1)],1)])},r=[],s=e("1477"),c=e("da17"),i=e("d093"),o={mixins:[s["a"]],components:{"arrowless-carousel":c["a"],"picture-zoom-button":i["a"]},data(){return{productInfo:"",products:[]}},created(){this.productInfo=this.getVetEquipmentInfo(this.$route.params.categoria),this.products=this.getAllProducts()},computed:{menuProducts(){return this.products.filter(t=>"Accesorios"!==t.category_name)}},watch:{"$route.params.categoria":{handler(t){this.productInfo=this.getVetEquipmentInfo(this.$route.params.categoria),this.products=this.getAllProducts()},immediate:!0}}},u=o,p=(e("1359"),e("cda2"),e("2877")),l=Object(p["a"])(u,n,r,!1,null,"1650b197",null);a["default"]=l.exports},"581b":function(t,a,e){"use strict";var n=e("d5cf"),r=e.n(n);r.a},"586f":function(t,a,e){},a81e:function(t,a,e){},af17:function(t,a,e){var n={"./dcu30.png":"3a32","./inge-v6.png":"8fa0","./inge-v9.png":"e330","./kx5200.png":"65fb","./kx5600.png":"3c9f","./msu3.png":"f706","./palm-x6-plus.png":"e2aa","./rku10.png":"ae4e","./smart-scan.png":"a23f"};function r(t){var a=s(t);return e(a)}function s(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="af17"},cda2:function(t,a,e){"use strict";var n=e("586f"),r=e.n(n);r.a},d093:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"picture-zoom-button-container"},[n("div",{staticClass:"tab-content"},[n("img",{attrs:{src:e("216e")("./images"+t.sectionName+t.imageName+t.imageExtension),width:t.imageWith}}),n("div",{staticClass:"mask w-full h-full flex justify-center items-center"},[n("button",{staticClass:"contact-inge-button",attrs:{type:"button"},on:{click:function(a){t.showModal=!0}}},[t._v(" Ampliar ")])])]),t.showModal?n("modal",{attrs:{large:"md"},on:{close:function(a){t.showModal=!1}},scopedSlots:t._u([{key:"content",fn:function(){return[n("button",{staticClass:"absolute top-2 right-2 text-xl text-white",staticStyle:{"font-size":"60px"},attrs:{type:"button"},on:{click:function(a){t.showModal=!1}}},[n("span",[t._v("×")])]),n("img",{attrs:{src:e("216e")("./images"+t.sectionName+t.imageName+"-zoom"+t.imageExtension),alt:"imagen ampliada de rayos x"}})]},proxy:!0}],null,!1,1255761983)}):t._e()],1)},r=[],s={props:{sectionName:{type:String},imageName:{type:String},imageExtension:{type:String},imageWith:{type:String}},name:"picture-zoom-button",data:function(){return{showModal:!1,resourcesPath:"@/assets/images"}}},c=s,i=(e("581b"),e("2877")),o=Object(i["a"])(c,n,r,!1,null,"5acb7b44",null);a["a"]=o.exports},d5cf:function(t,a,e){},fca2:function(t,a,e){var n={"./dcu30-char-1.png":"3cdd","./dcu30-char-2.png":"e1e8","./dcu30-char-3.png":"f52c","./dcu30-char-4.png":"bba0","./dcu30-char-5.png":"89d6","./inge-v6-char-1.png":"c630","./inge-v6-char-2.png":"9203","./inge-v6-char-3.png":"5119","./inge-v6-char-4.png":"be2e","./inge-v6-char-5.png":"010a","./inge-v9-char-1.png":"514e","./inge-v9-char-2.png":"8fd1","./inge-v9-char-3.png":"6ca2","./inge-v9-char-4.png":"abc4","./inge-v9-char-5.png":"07ed","./kx5200-char-1.png":"cec5","./kx5200-char-2.png":"36e4","./kx5200-char-3.png":"4ea0","./kx5200-char-4.png":"2e96","./kx5200-char-5.png":"f392","./kx5600-char-1.png":"25cc","./kx5600-char-2.png":"6088","./kx5600-char-3.png":"bf6d","./kx5600-char-4.png":"5503","./kx5600-char-5.png":"76ad","./msu3-char-1.png":"e47c","./msu3-char-2.png":"033f","./msu3-char-3.png":"9400","./msu3-char-4.png":"9a81","./msu3-char-5.png":"87ab","./rku10-char-1.png":"4381","./rku10-char-2.png":"0836","./rku10-char-3.png":"dac3","./rku10-char-4.png":"611d","./rku10-char-5.png":"239a","./smart-scan-char-1.png":"84c8","./smart-scan-char-2.png":"ea3c","./smart-scan-char-3.png":"84d8","./smart-scan-char-4.png":"7a9a","./smart-scan-char-5.png":"2f40"};function r(t){var a=s(t);return e(a)}function s(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="fca2"}}]);
//# sourceMappingURL=chunk-4845903c.aa92ddfe.js.map