(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a43d3136"],{"06b9":function(e,n,a){"use strict";var t=a("8e4c"),i=a.n(t);i.a},"2f85":function(e){e.exports=JSON.parse('{"clientes":[{"nombre":"occhiuzzi","imagen":"occhiuzzi.png"},{"nombre":"munic. escobar","imagen":"munic-escobar.png"},{"nombre":"cidi group","imagen":"cidi.png"},{"nombre":"swiss medical","imagen":"swiss-medical.png"},{"nombre":"sanatorio güemes","imagen":"sanatorio-guemes.png"},{"nombre":"munic. merlo","imagen":"munic-merlo.png"},{"nombre":"munic. exaltacion de la cruz","imagen":"munic-exaltacion-de-la-cruz.png"},{"nombre":"corte suprema","imagen":"corte-suprema.png"},{"nombre":"munic. san isidro","imagen":"munic-san-isidro.png"},{"nombre":"clinica de rehabilitacion de lobos","imagen":"clinica-lobos.png"},{"nombre":"munic. san miguel y salud ocupacional integral","imagen":"munic-san-miguel-soi.png"},{"nombre":"cirugia jf","imagen":"cirujia-jf.png"},{"nombre":"gobierno de la ciudad","imagen":"gcba.png"},{"nombre":"centro medico talar","imagen":"centro-medico-talar.png"},{"nombre":"ministerio de salud","imagen":"ministerio-de-salud.png"},{"nombre":"gobierno de la provicia de buenos aires","imagen":"gba.png"},{"nombre":"municipio de malvinas argentinas","imagen":"munic-malvinas.png"},{"nombre":"servicio penitenciario federal","imagen":"servicio-penitenciario.png"}]}')},7246:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("div",{staticClass:"padding-container"},[a("div",{staticClass:"contact-container flex flex-col gap-12 pb-12"},[a("banner-box",{attrs:{bannerName:e.bannerCliente},scopedSlots:e._u([{key:"title",fn:function(){return[a("titles",{attrs:{title:"Conózcanos a través de",subtitle:"Quienes nos eligen",fontSize:31}})]},proxy:!0},{key:"stuff",fn:function(){return[a("p",{staticClass:"simple-text mt-8 text-justify"},[e._v(" Como proveedores de productos y servicios de Tecnología Médica, una de nuestras prioridades es la satisfacción de nuestros clientes, el trato con todos los usuarios y la calidad en nuestro desempeño profesional. Conocemos los valores de cada cliente y por eso ayudamos a cimentar y hacer crecer una relación que nos enriquece como humanos desde el trato personalizado que permite alcanzar soluciones técnicas y comerciales eficaces y sistematizadas. Damos las gracias a los clientes que nos eligieron y nos eligen desde hace 30 años. ")])]},proxy:!0}])}),a("clients",{on:{openText:function(n){e.showText=!e.showText}}})],1)]),e.showText?a("div",{staticClass:"bg-white"},[a("text-checklist",{attrs:{title:"Conozca más sobre",subtitle:"Los valores que nos mueven",list:e.valores,extraPadding:!0},scopedSlots:e._u([{key:"button",fn:function(){return[a("router-link",{staticClass:"contact-inge-button self-end py-2 px-8",attrs:{to:"/quienes-somos"}},[e._v("Quiénes Somos")])]},proxy:!0}],null,!1,3233376645)})],1):e._e()])},i=[],s=a("d1d1"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col gap-4 px-16"},[t("titles",{attrs:{title:"Clientes que",subtitle:"Confían en nosotros",fontSize:31}}),t("ul",{staticClass:"clients-gallery"},e._l(e.clientes,(function(e,n){return t("li",{key:n,staticClass:"flex justify-center items-center"},[t("img",{attrs:{src:a("c795")("./"+e.imagen),alt:e.imagen,width:"240px"}})])})),0),t("button",{staticClass:"contact-inge-button self-end px-8",on:{click:function(n){return e.$emit("openText")}}},[e._v(" Ver más ")])],1)},c=[],r=a("2f85"),l={data(){return{clientes:r.clientes,panel:1}}},u=l,d=(a("eccd"),a("2877")),m=Object(d["a"])(u,o,c,!1,null,"04ff7d45",null),p=m.exports,g=a("81b2"),f=a("a4fa"),b={components:{"banner-box":s["a"],clients:p,"text-checklist":f["a"]},data(){return{bannerCliente:this.$imageCDN+"/banner_clientes.jpg",showText:!1,valores:g["a"]}}},x=b,v=(a("06b9"),Object(d["a"])(x,t,i,!1,null,null,null));n["default"]=v.exports},"79bc":function(e,n,a){"use strict";var t=a("a920"),i=a.n(t);i.a},"81b2":function(e){e.exports=JSON.parse('{"a":[{"text":"Somos la empresa del área más compenetrada con las  necesidades de los clientes, somos capaces de dar lugar tanto aquellas de  largo plazo como las cotidianas, actuando de manera rápida para dar soluciones y propuestas técnicas y comerciales."},{"text":"Cuidamos el medio ambiente centrándonos en generar una cantidad insignificante de material no utilizable por año, aplicando tecnología de punta para la recuperación de instalaciones y equipamiento."},{"text":"Aplicamos conocimiento e instrumental para el control de calidad de las instalaciones de nuestros clientes asegurando que sus servicios cumplan con las normas internacionales en lo que respecta al cuidado del paciente y operadores de equipamiento."},{"text":"Damos servicio a equipos de múltiples marcas y modelos dando solución alternativa al mantenimiento del valor, calidad y prestaciones de  las instalaciones."},{"text":"Colaboramos con las divisiones de Bioingeniería e Ingeniería Clínica tanto para la programación de tareas como para el estudio de la mejor solución a cada desafío técnico."}]}')},"8e4c":function(e,n,a){},a4fa:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"padding-container"},[t("div",{staticClass:"flex flex-col gap-4 py-6",class:[e.extraPadding?"px-16":""]},[t("titles",{attrs:{title:e.title,subtitle:e.subtitle,fontSize:31}}),t("ul",{staticClass:"flex flex-col gap-12 pt-4"},[e._l(e.list,(function(n,i){return t("li",{key:i,staticClass:"flex items-start gap-6"},[t("img",{staticClass:"w-10",attrs:{src:a("e7d6"),alt:"check-icon"}}),t("p",{staticClass:"simple-text text-justify"},[e._v(e._s(n.text))])])})),e._t("button")],2)],1)])},i=[],s={props:["title","subtitle","list","extraPadding"],data(){return{}}},o=s,c=a("2877"),r=Object(c["a"])(o,t,i,!1,null,null,null);n["a"]=r.exports},a920:function(e,n,a){},c795:function(e,n,a){var t={"./anmat.png":"44f4","./centro-medico-talar.png":"b77c","./cidi.png":"e8d3","./cirujia-jf.png":"5123","./clinica-lobos.png":"fb6f","./corte-suprema.png":"6024","./gba.png":"9c5a","./gcba.png":"53bd","./ministerio-de-salud.png":"5605","./munic-escobar.png":"b02b","./munic-exaltacion-de-la-cruz.png":"d14b","./munic-malvinas.png":"09d5","./munic-merlo.png":"0eb0","./munic-san-isidro.png":"68e5","./munic-san-miguel-soi.png":"42cc","./occhiuzzi.png":"98e8","./sanatorio-guemes.png":"8ae3","./servicio-penitenciario.png":"e412","./swiss-medical.png":"4eeb"};function i(e){var n=s(e);return a(n)}function s(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=s,e.exports=i,i.id="c795"},d1d1:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"inge-shadow-down flex flex-col mt-4"},[a("img",{attrs:{src:e.bannerName,alt:"banner-contactos"}}),a("div",{staticClass:"banner-content flex flex-col gap-6 relative"},[a("div",{attrs:{id:"banner-section-title"}},[e._t("title")],2),a("div",{attrs:{id:"banner-section-stuff"}},[e._t("stuff")],2),a("button",{staticClass:"\n        bot-button\n        rounded-full\n        h-20\n        w-20\n        absolute\n        right-6\n        -bottom-12\n        cursor-pointer\n      ",on:{click:function(n){e.showModal=!0}}})]),e.showModal?a("modal",{attrs:{large:"sm"},on:{close:function(n){e.showModal=!1}},scopedSlots:e._u([{key:"content",fn:function(){return[a("simple-contact-form",{on:{close:function(n){e.showModal=!1}}})]},proxy:!0}],null,!1,4151273575)},[e._v(" >")]):e._e()],1)},i=[],s=a("f89e"),o={name:"banner-box",props:["bannerName"],components:{"simple-contact-form":s["a"]},data(){return{load:!1,showModal:!1}}},c=o,r=(a("79bc"),a("2877")),l=Object(r["a"])(c,t,i,!1,null,null,null);n["a"]=l.exports},e147:function(e,n,a){},eccd:function(e,n,a){"use strict";var t=a("e147"),i=a.n(t);i.a}}]);
//# sourceMappingURL=chunk-a43d3136.2f2a1938.js.map