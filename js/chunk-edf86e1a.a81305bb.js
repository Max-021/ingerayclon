(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edf86e1a"],{"5dbe":function(t,a,e){},"79bc":function(t,a,e){"use strict";var s=e("a920"),n=e.n(s);n.a},8976:function(t,a,e){},a920:function(t,a,e){},ab13:function(t,a,e){"use strict";var s=e("8976"),n=e.n(s);n.a},c098:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-container flex flex-col gap-4"},[e("div",{staticClass:"padding-container"},[e("banner-box",{attrs:{bannerName:t.bannerContacto},scopedSlots:t._u([{key:"title",fn:function(){return[e("p",{staticClass:"inge-text-bold"},[t._v("¿Cómo podemos ayudarlo?")]),e("titles",{attrs:{subtitle:"Contáctenos",fontSize:31}}),e("p",{staticClass:"mb-10"},[t._v(" Seleccione entre las siguiente opciones, cuál es su área de interés, para poder brindarle informacion precisa y una mejor atención. ")])]},proxy:!0},{key:"stuff",fn:function(){return[e("div",{staticClass:"staff-buttons"},t._l(t.areas,(function(a,s){return e("button",{key:s,staticClass:"area-button flex flex-col",class:[a.visible?"is-active":""],on:{click:function(e){return t.setTeam(a)}}},[e("titles",{staticClass:"contact-button-title",attrs:{title:a.first_line_name,subtitle:a.second_line_name,active:a.visible}})],1)})),0)]},proxy:!0}])})],1),e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"padding-container"},[t.teamDetailsVisible?e("div",{staticClass:"staff-details flex flex-col gap-4"},[e("titles",{staticClass:"staff-title",attrs:{title:"Nuestro equipo de",subtitle:t.areaName,fontSize:31}}),e("div",{staticClass:"staff-data"},[e("staff-description",{attrs:{equipo:t.equipo}}),e("div",{staticClass:"chat-bot flex items-center"},[e("div",{staticClass:"icon"}),e("div",{staticClass:"text flex flex-col py-4 pl-4 pr-10"},[e("div",{staticClass:"inge-text-bold text-white"},[t._v("Chatea con nosotros")]),e("p",[t._v("Estamos disponibles de Lunes a Viernes de 9 a 17 horas")])])])],1)],1):t._e()])]),e("button",{staticClass:"banner-contacto flex items-center gap-2 mb-4",attrs:{type:"button"},on:{click:function(a){t.showContactMenu=!0}}},[e("div",{staticClass:"envelope"}),e("div",{staticClass:"text"},[e("titles",{staticClass:"banner-contacto-title",attrs:{title:"Tengo una consulta",subtitle:"Quiero que me contacten",fontSize:16,lineHeight:10}})],1)]),t.showContactMenu?e("Modal",{attrs:{header:!1,large:"sm"},on:{close:function(a){t.showContactMenu=!1}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Datos de contacto ")]},proxy:!0},{key:"content",fn:function(){return[e("simple-contact-form",{on:{close:function(a){t.showContactMenu=!1}}})]},proxy:!0}],null,!1,3157642952)}):t._e(),e("div",{staticClass:"mapa-container flex flex-col gap-6"},[e("div",{staticClass:"padding-container"},[e("titles",{staticClass:"mapa-title mb-4",attrs:{title:"Ubicacion de",subtitle:"Nuestra Empresa",fontSize:31}}),e("ik-image",{attrs:{id:"direccion-mapa",path:"/mapa.jpg",alt:"imagen de mapa"}})],1)])],1)},n=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"staff-description flex flex-col gap-4 mb-4"},t._l(t.equipo,(function(a,n){return s("li",{key:n,staticClass:"personal-card flex gap-4"},[s("img",{staticClass:"inge-shadow-down",attrs:{src:e("d0f7")("./"+a.imagen),alt:"Foto de "+a.nombre,width:"110px",height:"300px"}}),s("div",{staticClass:"personal-details flex flex-col gap-2 w-1/2"},[s("div",{staticClass:"person"},[s("titles",{staticClass:"staff-name-title",attrs:{subtitle:a.nombre}}),s("p",[t._v(t._s(a.rol))])],1),s("div",{staticClass:"contact-details"},[t._l(a.mail,(function(a,e){return s("div",{key:e,staticClass:"contact-data-icon"},[s("div",{staticClass:"data-icon mail-icon"}),s("a",{staticClass:"blue",attrs:{href:"mailto: "+a}},[t._v(" "+t._s(a)+" ")])])})),s("div",{staticClass:"contact-data-icon"},[s("div",{staticClass:"data-icon whatsapp-icon"}),s("button",{staticClass:"blue",on:{click:function(e){return t.sendWhatsapp(a.whatsapp)}}},[t._v(" "+t._s(a.whatsapp)+" ")])])],2)])])})),0)},o=[],c=e("f535"),l={props:["equipo"],mixins:[c["a"]]},r=l,d=(e("ab13"),e("2877")),u=Object(d["a"])(r,i,o,!1,null,"b2c46be0",null),f=u.exports,p=e("d1d1"),m=e("f89e"),b=e("4169"),h={components:{"staff-description":f,"banner-box":p["a"],Modal:b["default"],"simple-contact-form":m["a"]},data(){return{areas:[],equipo:[],teamDetailsVisible:!1,activeTeamId:0,areaName:"",showContactMenu:!1,bannerContacto:this.$imageCDN+"/banner_contacto.jpg"}},methods:{setTeam(t){this.areas.forEach(t=>{t.visible=!1}),this.activeTeamId!==t.id?(this.teamDetailsVisible||(this.teamDetailsVisible=!0),this.activeTeamId=t.id,this.showTeamInfo(t)):this.teamDetailsVisible&&(this.teamDetailsVisible=!1,this.activeTeamId=0,this.visible=!1)},showTeamInfo(t){this.activeTeamId=t.id,this.equipo=t.personal,this.areaName=t.second_line_name,t.visible=!0}},mounted(){fetch("/staff.json").then(t=>t.json()).then(t=>{this.areas=t.areas})}},v=h,C=(e("f45d"),Object(d["a"])(v,s,n,!1,null,"2d730854",null));a["default"]=C.exports},d0f7:function(t,a,e){var s={"./GERENTE_Daniel_Penhos.jpg":"0b5f","./GERENTE_Matias_Penhos.jpg":"4cda","./dalina_lopez.jpg":"f17e","./daniel_penhos.jpg":"7601","./gabriel_fandini.jpg":"c70b","./juan_gonzales.jpg":"f05b","./matias_penhos.jpg":"30f0","./nadia_medina.jpg":"c4cc","./pablo_micas.jpg":"5ea8"};function n(t){var a=i(t);return e(a)}function i(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="d0f7"},d1d1:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"inge-shadow-down flex flex-col mt-4"},[e("img",{attrs:{src:t.bannerName,alt:"banner-contactos"}}),e("div",{staticClass:"banner-content flex flex-col gap-6 relative"},[e("div",{attrs:{id:"banner-section-title"}},[t._t("title")],2),e("div",{attrs:{id:"banner-section-stuff"}},[t._t("stuff")],2),e("button",{staticClass:"\n        bot-button\n        rounded-full\n        h-20\n        w-20\n        absolute\n        right-6\n        -bottom-12\n        cursor-pointer\n      ",on:{click:function(a){t.showModal=!0}}})]),t.showModal?e("modal",{attrs:{large:"sm"},on:{close:function(a){t.showModal=!1}},scopedSlots:t._u([{key:"content",fn:function(){return[e("simple-contact-form",{on:{close:function(a){t.showModal=!1}}})]},proxy:!0}],null,!1,4151273575)},[t._v(" >")]):t._e()],1)},n=[],i=e("f89e"),o={name:"banner-box",props:["bannerName"],components:{"simple-contact-form":i["a"]},data(){return{load:!1,showModal:!1}}},c=o,l=(e("79bc"),e("2877")),r=Object(l["a"])(c,s,n,!1,null,null,null);a["a"]=r.exports},f45d:function(t,a,e){"use strict";var s=e("5dbe"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-edf86e1a.a81305bb.js.map