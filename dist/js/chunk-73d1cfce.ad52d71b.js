(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73d1cfce"],{"00b5":function(a,o,e){},"120c":function(a,o,e){"use strict";var r=e("00b5"),n=e.n(r);n.a},"1d71":function(a,o,e){"use strict";var r=function(){var a=this,o=a.$createElement,r=a._self._c||o;return r("div",{staticClass:"flex flex-col gap-12 pb-16"},[r("div",{staticClass:"carousel h-fit w-full mt-4 flex inge-shadow-down"},[r("arrowless-carousel",{attrs:{product_name:a.product.nombreCategoria,product_type:"human"}}),r("div",{staticClass:"py-8 pr-12 flex flex-col gap-8"},[r("titles",{attrs:{title:a.product.nombreCategoriaGeneral,subtitle:a.product.nombreCompleto}}),r("p",{staticClass:"text-justify text-lg"},[a._v(" "+a._s(a.product.descripcion)+" ")]),a.product.ecoSeal?r("img",{attrs:{src:e("33d9"),alt:""}}):a._e(),r("button",{staticClass:"contact-inge-button inge-shadow-down shadow-animated mt-8"},[a._v(" Quiero que me contacten ")])],1)],1),r("div",{staticClass:"px-16"},[a._t("productInfo")],2)])},n=[],t=e("1477"),i=e("da17"),l={props:["bannerName","description"],mixins:[t["a"]],components:{"arrowless-carousel":i["a"]},computed:{productBanner(){const a=this.$route.path.split("/")[2];return`${this.$imageCDN}/banner-product-${a}.jpg`}},data(){return{product:""}},created(){const a=this.$route.path.split("/")[2];this.product=this.getProductEquipment(a)}},s=l,c=(e("f21c"),e("2877")),p=Object(c["a"])(s,r,n,!1,null,null,null);o["a"]=p.exports},"2d0e":function(a,o,e){"use strict";var r=function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("div",{staticClass:"form-container"},[e("div",{staticClass:"body h-full px-12 py-8"},[e("form",{ref:"pasosForm",staticClass:"h-full w-full relative",attrs:{action:"#"}},[e("button",{staticClass:"close-button h-5 w-5 absolute right-0",attrs:{type:"button"},on:{click:function(o){return a.$emit("close")}}},[e("span",[a._v("×")])]),e("div",{staticClass:"help-box flex flex-col mb-10",class:{incomplete:!a.form.dudaPrincipal.complete}},[e("p",[a._v("Seleccione una opción*")]),e("b",[a._v("¿Cómo podemos ayudarlo?")]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.form.dudaPrincipal.val,expression:"form.dudaPrincipal.val"}],attrs:{name:"consulta",id:"consulta"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(a){return a.selected})).map((function(a){var o="_value"in a?a._value:a.value;return o}));a.$set(a.form.dudaPrincipal,"val",o.target.multiple?e:e[0])},function(o){return a.marcaloComoCompletado(a.form.dudaPrincipal)}]}},[e("option",{attrs:{value:"-"}},[a._v("Seleccione una opción . . .")]),e("option",{attrs:{value:"1"}},[a._v(" Deseo información sobre este equipamiento. ")]),e("option",{attrs:{value:"2"}},[a._v(" Necesito un presupuesto detallado del equipamiento ")]),e("option",{attrs:{value:"3"}},[a._v(" Busco asesoramiento sobre estos equipamientos ")]),e("option",{attrs:{value:"4"}},[a._v("Tengo equipos que requieren reparación")])])]),e("div",{staticClass:"data-box"},[e("div",{staticClass:"title-box flex flex-col relative"},[e("div",{staticClass:"flex"},[e("titles",{attrs:{title:"Contáctenos sobre",subtitle:a.producto,fontSize:31}})],1),e("small",{staticClass:"w-full"},[a._v("* Complete los 3 pasos del formulario para brindarle una mejor atención")])]),e("div",{staticClass:"steps flex gap-8 py-8"},a._l(this.steps,(function(o,r){return e("div",{key:r},[e("div",{staticClass:"step inge-text-bold flex items-center gap-2",class:{disabled:!o.active}},[e("div",{staticClass:"number flex justify-center items-center text-white"},[a._v(" "+a._s(o.number)+" ")]),a._v(" "+a._s(o.title)+" ")])])})),0),1===this.currentStep?e("div",{staticClass:"fields"},[e("div",{staticClass:"field",class:{incomplete:!a.form.nombrePersona.complete}},[e("label",{attrs:{for:"nombre"}},[a._v("Nombre *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.nombrePersona.val,expression:"form.nombrePersona.val"}],staticClass:"input-text flex-grow",attrs:{type:"text",name:"nombre",required:""},domProps:{value:a.form.nombrePersona.val},on:{change:function(o){return a.marcaloComoCompletado(a.form.nombrePersona)},input:function(o){o.target.composing||a.$set(a.form.nombrePersona,"val",o.target.value)}}})]),e("div",{staticClass:"field",class:{incomplete:!a.form.apellidoPersona.complete}},[e("label",{attrs:{for:"apellido"}},[a._v("Apellido *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.apellidoPersona.val,expression:"form.apellidoPersona.val"}],staticClass:"input-text flex-grow",attrs:{type:"text",name:"apellido",required:""},domProps:{value:a.form.apellidoPersona.val},on:{change:function(o){return a.marcaloComoCompletado(a.form.apellidoPersona)},input:function(o){o.target.composing||a.$set(a.form.apellidoPersona,"val",o.target.value)}}})]),e("div",{staticClass:"field",class:{incomplete:!a.form.emailPersona.complete}},[e("label",{attrs:{for:"email"}},[a._v("Dirección de correo eléctronico *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.emailPersona.val,expression:"form.emailPersona.val"}],staticClass:"input-text flex-grow",attrs:{type:"email",name:"email",required:""},domProps:{value:a.form.emailPersona.val},on:{change:function(o){return a.marcaloComoCompletado(a.form.emailPersona)},input:function(o){o.target.composing||a.$set(a.form.emailPersona,"val",o.target.value)}}})]),e("div",{staticClass:"field",class:{incomplete:!a.form.telefono.complete}},[e("label",{attrs:{for:"telefono"}},[a._v("Teléfono Comercial *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.telefono.val,expression:"form.telefono.val"}],staticClass:"input-text flex-grow",attrs:{type:"text",name:"telefono",required:""},domProps:{value:a.form.telefono.val},on:{change:function(o){return a.marcaloComoCompletado(a.form.telefono)},input:function(o){o.target.composing||a.$set(a.form.telefono,"val",o.target.value)}}})])]):2===this.currentStep?e("div",{staticClass:"fields"},[e("div",{staticClass:"field",class:{incomplete:!this.form.nombreEmpresa.complete}},[e("label",{attrs:{for:"empresa"}},[a._v("Empresa/Organismo *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.nombreEmpresa.val,expression:"form.nombreEmpresa.val"}],staticClass:"input-text",attrs:{type:"text",name:"empresa",required:""},domProps:{value:a.form.nombreEmpresa.val},on:{input:function(o){o.target.composing||a.$set(a.form.nombreEmpresa,"val",o.target.value)}}})]),e("div",{staticClass:"field"},[e("label",{attrs:{for:"institucion"}},[a._v("Institución/Unidad")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.nombreInstitucion.val,expression:"form.nombreInstitucion.val"}],staticClass:"input-text",attrs:{type:"text",name:"institucion"},domProps:{value:a.form.nombreInstitucion.val},on:{input:function(o){o.target.composing||a.$set(a.form.nombreInstitucion,"val",o.target.value)}}})]),e("div",{staticClass:"field"},[e("label",{attrs:{for:"area"}},[a._v("Área")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.area.val,expression:"form.area.val"}],staticClass:"input-text",attrs:{type:"text",name:"area"},domProps:{value:a.form.area.val},on:{input:function(o){o.target.composing||a.$set(a.form.area,"val",o.target.value)}}})]),e("div",{staticClass:"field"},[e("label",{attrs:{for:"cargo"}},[a._v("Cargo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.cargo.val,expression:"form.cargo.val"}],staticClass:"input-text",attrs:{type:"text",name:"cargo"},domProps:{value:a.form.cargo.val},on:{input:function(o){o.target.composing||a.$set(a.form.cargo,"val",o.target.value)}}})])]):e("div",{staticClass:"third-part flex flex-col"},[e("div",{staticClass:"selects"},[e("div",{staticClass:"field",class:{incomplete:!a.form.informacionAtencion.complete}},[e("label",{attrs:{for:"atencion"}},[a._v("Información para su Atención *")]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.form.informacionAtencion.val,expression:"form.informacionAtencion.val"}],attrs:{name:"atencion",id:"atencion"},on:{change:[function(o){var e=Array.prototype.filter.call(o.target.options,(function(a){return a.selected})).map((function(a){var o="_value"in a?a._value:a.value;return o}));a.$set(a.form.informacionAtencion,"val",o.target.multiple?e:e[0])},function(o){return a.marcaloComoCompletado(a.form.informacionAtencion)}]}},[e("option",{attrs:{value:"-"}},[a._v("Seleccione una opcion . . .")]),e("option",{attrs:{value:"Ser contactado por ventas"}},[a._v(" Ser contactado por ventas ")]),e("option",{attrs:{value:"Cotización"}},[a._v("Cotización")]),e("option",{attrs:{value:"Solo información"}},[a._v("Solo información")])])]),e("div",{staticClass:"field"},[e("label",{attrs:{for:"tiempoEntrega"}},[a._v("Tiempo estimado de compra")]),e("select",{directives:[{name:"model",rawName:"v-model",value:a.form.tiempoCompra.val,expression:"form.tiempoCompra.val"}],attrs:{name:"tiempoEntrega",id:"tiempoEntrega"},on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(a){return a.selected})).map((function(a){var o="_value"in a?a._value:a.value;return o}));a.$set(a.form.tiempoCompra,"val",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"-"}},[a._v("Seleccione una opcion . . .")]),e("option",{attrs:{value:"Urgente"}},[a._v("Urgente")]),e("option",{attrs:{value:"0 a 3 meses"}},[a._v("0 a 3 meses")]),e("option",{attrs:{value:"3 a 6 meses"}},[a._v("3 a 6 meses")]),e("option",{attrs:{value:"Más de 12 meses"}},[a._v("Más de 12 meses")])])])]),e("div",{staticClass:"text-area flex flex-col relative w-full p-2"},[e("label",{staticClass:"text-area-label",attrs:{for:"comentarios"}},[a._v("Especifique el motivo de su consulta para que podamos ofrecerte un mejor servicio")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.form.comentarios.val,expression:"form.comentarios.val"}],attrs:{name:"comentarios",id:"",cols:"30",rows:"5",required:""},domProps:{value:a.form.comentarios.val},on:{input:function(o){o.target.composing||a.$set(a.form.comentarios,"val",o.target.value)}}})])])]),e("div",{staticClass:"form-footer flex justify-between w-full h-12 mt-4",style:1===this.currentStep?"justify-content: flex-end":"justify-content: space-between"},[e("button",{directives:[{name:"show",rawName:"v-show",value:this.currentStep>1,expression:"this.currentStep > 1"}],staticClass:"previous",on:{click:a.previousStep}},[a._v(" Anterior ")]),this.currentStep<3?e("button",{staticClass:"next",on:{click:a.nextStep}},[a._v(" Siguiente ")]):e("button",{staticClass:"next",attrs:{id:"send-btn"},on:{click:a.enviarFormulario}},[a._v("Enviar")])])])])])},n=[],t=e("5e45"),i=e("0f91"),l=e.n(i),s={mixins:[t["a"]],props:["producto"],data:function(){return{currentStep:1,steps:[{number:1,title:"Datos del Contacto",active:!0},{number:2,title:"Detalle de la Consulta",active:!1},{number:3,title:"Información y Comentarios",active:!1}],form:{dudaPrincipal:{val:"-",complete:!0},nombrePersona:{val:"",complete:!0},apellidoPersona:{val:"",complete:!0},emailPersona:{val:"",complete:!0},telefono:{val:"",complete:!0},nombreEmpresa:{val:"",complete:!0},nombreInstitucion:{val:"",complete:!0},area:{val:"",complete:!0},cargo:{val:"",complete:!0},informacionAtencion:{val:"-",complete:!0},tiempoCompra:{val:"-",complete:!0},comentarios:{val:"",complete:!0}}}},methods:{nextStep(a){this.disableAllSteps();let o=this.form,e="",r=[o.nombrePersona,o.apellidoPersona,o.emailPersona,o.telefono],n=[o.nombreEmpresa];switch(this.unsetComplete(r),this.currentStep){case 1:this.unsetComplete(r),e=this.validateFields(r);break;case 2:this.unsetComplete(n),e=this.validateFields(n);default:break}a.preventDefault(),e&&(this.setActiveStep(this.currentStep+1),this.currentStep+=1)},previousStep(a){this.disableAllSteps(),this.currentStep=this.max(1,this.currentStep-1),this.setActiveStep(this.currentStep),a.preventDefault()},enviarFormulario(a){let o=this.form,e=document.getElementById("send-btn");e.innerHTML="Enviando...";let r=[o.dudaPrincipal,o.informacionAtencion];if(this.fieldsNotEmpty(r)){let a=this.generarDatosParaEnviar();console.log("Se envia nomasss"),l.a.send("servicio_pasos","pasos_template",a,"pGxKgw8iNLllj7wgL").then(a=>{e.innerHTML="Enviado!",this.resetInner(e),console.log(a)}).catch(a=>{console.log(a),e.innerHTML="No se pudo enviar.",this.resetInner(e)})}else this.setComplete(r),console.log("No se manda nada");a.preventDefault()},max(a,o){return a>o?a:o},min(a,o){return a<o?a:o},disableAllSteps(){this.steps.forEach(a=>a.active=!1)},setActiveStep(a){this.steps[a-1].active=!0},marcaloComoCompletado(a){a.complete=!0},resetInner:function(a){setTimeout(()=>{a.innerHTML="Enviar"},3e3)},generarDatosParaEnviar:function(){return{consulta:this.form.dudaPrincipal.val,nombre:this.form.nombrePersona.val,apellido:this.form.apellidoPersona.val,email:this.form.emailPersona.val,telefono:this.form.telefono.val,empresa:this.form.nombreEmpresa.val,institucion:this.form.nombreInstitucion.val,area:this.form.area.val,cargo:this.form.cargo.val,atencion:this.form.informacionAtencion.val,tiempoEntrega:this.form.tiempoCompra.val,comentarios:this.form.comentarios.val}}}},c=s,p=(e("c13a"),e("2877")),d=Object(p["a"])(c,r,n,!1,null,"67c17b1c",null);o["a"]=d.exports},"352f":function(a,o,e){"use strict";var r=e("43b6"),n=e.n(r);o["default"]=n.a},"43b6":function(a,o){},5807:function(a,o,e){"use strict";var r=function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("div",{staticClass:"caracteristicas flex flex-col py-4 gap-4 w-full h-auto"},[e("titles",{attrs:{subtitle:"Características Generales",fontSize:25,lineHeight:0}}),e("titles",{attrs:{title:a.datos.titulo,fontSize:25}}),e("p",{staticClass:"text-justify text-lg two-columns-text"},[a._v(" "+a._s(a.datos.content)+" "),a.datos.imagen?e("img",{attrs:{src:a.getImgSource(a.datos.imagen),alt:"img-caracteristicas"}}):a._e()])],1)},n=[],t={props:["datos"],data(){return{mediaTexto:0}},methods:{getImgSource:function(a){return e("edce")("./"+a)}}},i=t,l=e("2877"),s=Object(l["a"])(i,r,n,!1,null,"b5faa49a",null);o["a"]=s.exports},"86a7":function(a,o,e){},"955f":function(a,o,e){},b993:function(a,o,e){"use strict";var r=e("c3b2"),n=e("352f"),t=e("2877"),i=Object(t["a"])(n["default"],r["a"],r["b"],!1,null,null,null);o["default"]=i.exports},c13a:function(a,o,e){"use strict";var r=e("86a7"),n=e.n(r);n.a},c3b2:function(a,o,e){"use strict";e.d(o,"a",(function(){return r})),e.d(o,"b",(function(){return n}));var r=function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("div")},n=[]},c8dfe:function(a,o,e){"use strict";var r=function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("div",{staticClass:"especificaciones flex flex-col gap-4 py-4"},[e("div",{staticClass:"titulos"},[e("titles",{attrs:{title:"Ficha Técnica",subtitle:"Especificaciones",fontSize:25}})],1),e("div",{staticClass:"flex flex-col gap-4"},a._l(a.datos,(function(a,o){return e("img",{key:o,attrs:{src:a.tabla,alt:"Ficha técnica"}})})),0)])},n=[],t={props:["datos"]},i=t,l=e("2877"),s=Object(l["a"])(i,r,n,!1,null,"3116fa4b",null);o["a"]=s.exports},e85c:function(a,o,e){"use strict";var r=function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("div",{staticClass:"documentos flex flex-col gap-4 py-4"},[e("div",{staticClass:"titulos"},[e("titles",{attrs:{title:"Brochure",subtitle:"Documentos",fontSize:25}})],1),e("div",{staticClass:"links flex flex-wrap justify-between items-end gap-4"},[e("div",{staticClass:"brochures flex flex-col gap-4"},a._l(a.brochures,(function(o){return e("div",{staticClass:"flex items-center gap-3"},["#"===o.link?e("div",[e("div",{staticClass:"icono-brochure"}),e("button",{directives:[{name:"popover",rawName:"v-popover:infoBrochure.right",arg:"infoBrochure",modifiers:{right:!0}}]},[a._v(a._s(o.nombreLink))]),e("popover",{attrs:{name:"infoBrochure"}},[a._v(" Para recibir más información y folleteria por favor contáctese a ventas@ingeray.com.ar ")])],1):e("div",[e("div",{staticClass:"icono-brochure"}),e("a",{attrs:{href:o.link}},[a._v(a._s(o.nombreLink))])])])})),0),e("router-link",{staticClass:"contact-outline",attrs:{to:"/productos"}},[a._v("Ver todos los productos")])],1)])},n=[],t={props:["brochures"],methods:{getPdfUrl:function(a){return"@/assets/documentos/"+a}}},i=t,l=(e("120c"),e("2877")),s=Object(l["a"])(i,r,n,!1,null,"4da47fce",null);o["a"]=s.exports},edce:function(a,o,e){var r={"./carousel/carrousel-arco-digi-1.png":"4523","./carousel/carrousel-arco-digi-2.png":"e915","./carousel/carrousel-arco-digi-3.png":"c401","./carousel/carrousel-arco-digi-4.png":"89e3","./carousel/carrousel-arco-digi-5.png":"90f8","./carousel/carrousel-captores-1.jpg":"a7c8","./carousel/carrousel-captores-2.jpg":"f827","./carousel/carrousel-captores-3.jpg":"a538","./carousel/carrousel-captores-4.jpg":"5c0e","./carousel/carrousel-flatpanel-1.png":"d3ff","./carousel/carrousel-flatpanel-10.png":"f4f6","./carousel/carrousel-flatpanel-11.png":"3363","./carousel/carrousel-flatpanel-12.png":"3032","./carousel/carrousel-flatpanel-13.png":"bcf6","./carousel/carrousel-flatpanel-14.png":"af63","./carousel/carrousel-flatpanel-15.png":"9271","./carousel/carrousel-flatpanel-16.png":"5ddd","./carousel/carrousel-flatpanel-17.png":"0bec","./carousel/carrousel-flatpanel-18.png":"353b","./carousel/carrousel-flatpanel-2.png":"46b1","./carousel/carrousel-flatpanel-3.png":"a9a6","./carousel/carrousel-flatpanel-4.png":"bad5","./carousel/carrousel-flatpanel-5.png":"4ea4","./carousel/carrousel-flatpanel-6.png":"de4f","./carousel/carrousel-flatpanel-7.png":"1d7e","./carousel/carrousel-flatpanel-8.png":"6b94","./carousel/carrousel-flatpanel-9.png":"5d47","./carousel/carrousel-intervensionista-1.png":"b0c0","./carousel/carrousel-intervensionista-10.png":"394f","./carousel/carrousel-intervensionista-11.png":"6802","./carousel/carrousel-intervensionista-12.png":"ac29","./carousel/carrousel-intervensionista-2.png":"a758","./carousel/carrousel-intervensionista-3.png":"4215","./carousel/carrousel-intervensionista-4.png":"b3ef","./carousel/carrousel-intervensionista-5.png":"7015","./carousel/carrousel-intervensionista-6.png":"4bad","./carousel/carrousel-intervensionista-7.png":"6c7b","./carousel/carrousel-intervensionista-8.png":"1ef0","./carousel/carrousel-intervensionista-9.png":"b194","./carousel/carrousel-mamo-1.jpg":"1150","./carousel/carrousel-mamo-10.png":"4ee4","./carousel/carrousel-mamo-2.jpg":"cefa","./carousel/carrousel-mamo-3.jpg":"6440","./carousel/carrousel-mamo-4.jpg":"8783","./carousel/carrousel-mamo-5.jpg":"77f6","./carousel/carrousel-mamo-6.jpg":"eaec","./carousel/carrousel-mamo-7.jpg":"897e","./carousel/carrousel-mamo-8.png":"1f2f","./carousel/carrousel-mamo-9.png":"7de6","./carousel/carrousel-mov-digi-1.png":"9902","./carousel/carrousel-mov-digi-2.png":"e6d9","./carousel/carrousel-mov-digi-3.png":"0e5e","./carousel/carrousel-mov-digi-4.png":"4ae9","./carousel/carrousel-mov-digi-5.png":"0691","./carousel/carrousel-mov-digi-6.png":"8737","./carousel/carrousel-mov-digi-7.png":"3bba","./carousel/carrousel-mov-digi-8.png":"9cc4","./carousel/carrousel-pacs-1.png":"b2bd","./carousel/carrousel-pacs-2.png":"e4df","./carousel/carrousel-pacs-3.png":"202c","./carousel/carrousel-pacs-4.png":"bbb6","./carousel/carrousel-pacs-5.png":"d831","./carousel/carrousel-rad-con-arco-1.png":"1be6","./carousel/carrousel-rad-con-arco-2.png":"d542","./carousel/carrousel-rad-con-arco-3.png":"b135","./carousel/carrousel-rad-con-arco-4.png":"db6c","./carousel/carrousel-rad-con-arco-5.png":"2c9a","./carousel/carrousel-rad-con-arco-zen-1.png":"5ca9","./carousel/carrousel-rad-con-arco-zen-2.png":"1008","./carousel/carrousel-rad-con-arco-zen-3.png":"656e","./carousel/carrousel-rad-conv-1.png":"5662","./carousel/carrousel-rad-conv-10.png":"3f16","./carousel/carrousel-rad-conv-11.png":"83d4","./carousel/carrousel-rad-conv-12.png":"ecfb","./carousel/carrousel-rad-conv-2.png":"143e","./carousel/carrousel-rad-conv-3.png":"0926","./carousel/carrousel-rad-conv-4.png":"d927","./carousel/carrousel-rad-conv-5.png":"6399","./carousel/carrousel-rad-conv-6.png":"5c45","./carousel/carrousel-rad-conv-7.png":"f7c1","./carousel/carrousel-rad-conv-8.png":"4a4e","./carousel/carrousel-rad-conv-9.png":"b8db","./carousel/carrousel-rad-conv-mov-1.png":"6270","./carousel/carrousel-rad-conv-mov-10.png":"3f82","./carousel/carrousel-rad-conv-mov-11.png":"de0c","./carousel/carrousel-rad-conv-mov-12.png":"d366","./carousel/carrousel-rad-conv-mov-2.png":"2a7d","./carousel/carrousel-rad-conv-mov-3.png":"5382","./carousel/carrousel-rad-conv-mov-4.png":"1dbd","./carousel/carrousel-rad-conv-mov-5.png":"3a5e","./carousel/carrousel-rad-conv-mov-6.png":"2962","./carousel/carrousel-rad-conv-mov-7.png":"4d86","./carousel/carrousel-rad-conv-mov-8.png":"be37","./carousel/carrousel-rad-conv-mov-9.png":"3d4d","./carousel/carrousel-rad-digi-sala-1.png":"5d23","./carousel/carrousel-rad-digi-sala-10.png":"a7a1","./carousel/carrousel-rad-digi-sala-2.png":"b4aa","./carousel/carrousel-rad-digi-sala-3.png":"adf2","./carousel/carrousel-rad-digi-sala-4.png":"7cfa","./carousel/carrousel-rad-digi-sala-5.png":"16e9","./carousel/carrousel-rad-digi-sala-6.png":"baa6","./carousel/carrousel-rad-digi-sala-7.png":"d8a7","./carousel/carrousel-rad-digi-sala-8.png":"90a5","./carousel/carrousel-rad-digi-sala-9.png":"99cd","./carousel/carrousel-video-1.png":"26bc","./carousel/carrousel-video-10.png":"149f","./carousel/carrousel-video-11.png":"f612","./carousel/carrousel-video-12.png":"8bf8","./carousel/carrousel-video-13.png":"12d7","./carousel/carrousel-video-2.png":"97a9","./carousel/carrousel-video-3.png":"f541","./carousel/carrousel-video-4.png":"13e7","./carousel/carrousel-video-5.png":"f097","./carousel/carrousel-video-6.png":"f990","./carousel/carrousel-video-7.png":"10e0","./carousel/carrousel-video-8.png":"1b1e","./carousel/carrousel-video-9.png":"23ed","./digitalizacion/caracteristicas-flatpanel.png":"939d","./digitalizacion/caracteristicas-video.png":"5b03","./digitalizacion/galeria-pacs-clinicas-1.png":"0f14","./digitalizacion/galeria-pacs-clinicas-2.png":"a25e","./digitalizacion/galeria-pacs-clinicas-3.png":"7041","./digitalizacion/galeria-pacs-grafico.png":"1e2a","./digitalizacion/galeria-video-1.png":"5398","./digitalizacion/galeria-video-2.png":"d652","./digitalizacion/galeria-video-3.png":"b965","./digitalizacion/galeria-video-4.png":"6739","./digitalizacion/galeria-video-5.png":"909f","./mamo/caracteristicas-captores.jpg":"645f","./mamo/caracteristicas-mamo.jpg":"2e18","./mamo/galeria-captores-1.png":"df1d","./mamo/galeria-captores-10.png":"8e68","./mamo/galeria-captores-11.png":"ff9a","./mamo/galeria-captores-12.png":"ede9","./mamo/galeria-captores-2.png":"722e","./mamo/galeria-captores-3.png":"5dd4","./mamo/galeria-captores-4.png":"7202","./mamo/galeria-captores-5.png":"9f54","./mamo/galeria-captores-6.png":"28b4","./mamo/galeria-captores-7.png":"4331","./mamo/galeria-captores-8.png":"0f12","./mamo/galeria-captores-9.png":"95c2","./mamo/mamo-banner.png":"bc55","./radioConvencional/RX-Arcos-1-zoom.png":"dec7","./radioConvencional/RX-Arcos-1.png":"e9d9","./radioConvencional/RX-Arcos-2-zoom.png":"35fc","./radioConvencional/RX-Arcos-2.png":"4240","./radioConvencional/RX-Arcos-3-zoom.png":"633b","./radioConvencional/RX-Arcos-3.png":"903e","./radioConvencional/RX-Arcos-4-zoom.png":"3d68","./radioConvencional/RX-Arcos-4.png":"1bb4","./radioConvencional/RX-Arcos-5-zoom.png":"cdc3","./radioConvencional/RX-Arcos-5.png":"e6f7","./radioConvencional/RX-Arcos-6-zoom.png":"44ad","./radioConvencional/RX-Arcos-6.png":"00fc","./radioConvencional/RX-Arcos-7-zoom.png":"561a","./radioConvencional/RX-Arcos-7.png":"634e","./radioConvencional/RX-Arcos-8-zoom.png":"76b1","./radioConvencional/RX-Arcos-8.png":"f228","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-1-zoom.png":"3953","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-1.png":"efbb","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-2-zoom.png":"fbb2","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-2.png":"298d","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-3-zoom.png":"277f","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-3.png":"8af3","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-4-zoom.png":"c3a0","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-4.png":"7742","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-5-zoom.png":"7ad1","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-5.png":"7c9c","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-6-zoom.png":"6cfd","./radioConvencional/RX-RAD-CONVENCIONAL-Moviles-6.png":"77c6","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-1-zoom.png":"25b5","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-1.png":"040a","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-10-zoom.png":"bb32","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-10.png":"8f46","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-11-zoom.png":"0e4e","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-11.png":"ca51","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-12-zoom.png":"6fb5","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-12.png":"c757","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-2-zoom.png":"6e2d","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-2.png":"5d2b","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-3-zoom.png":"610e","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-3.png":"4ee8","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-4-zoom.png":"34cd","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-4.png":"fa3a","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-5-zoom.png":"d523","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-5.png":"eff8","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-6-zoom.png":"6d19","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-6.png":"8d93","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-7-zoom.png":"f97f","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-7.png":"9aab","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-8-zoom.png":"b613","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-8.png":"ae4f","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-9-zoom.png":"7321","./radioConvencional/RX-RAD-CONVENCIONAL-Salas-9.png":"ed6e","./radioConvencional/caracteristicas-rad-conv-arco.png":"0f6c","./radioConvencional/caracteristicas-rad-conv-moviles.png":"59b0","./radioConvencional/rad-conv-Sala-Analogico-HF-1.png":"9f23","./radioConvencional/rad-conv-Sala-Analogico-HF-2.png":"ae94","./radioConvencional/rad-conv-Sala-Analogico-HF-3.png":"89dc","./radioConvencional/rad-conv-Sala-Analogico-HF-4.png":"e957","./radioConvencional/rad-conv-Sala-Analogico-HF-5.png":"3b7b","./radioConvencional/rad-conv-Sala-Analogico-HF-6.png":"ec11","./radioConvencional/rad-conv-Sala-Control-XD-1.png":"1c0c","./radioConvencional/rad-conv-Sala-Control-XD-2.png":"0b5b","./radioConvencional/rad-conv-Sala-Standard-1.png":"4273","./radioConvencional/rad-conv-Sala-Standard-2.png":"42c4","./radioConvencional/rad-conv-Sala-Standard-3.png":"e3b4","./radioConvencional/rad-conv-Sala-Standard-4.png":"dc77","./radioConvencional/rad-conv-consola-1.png":"4daa","./radioConvencional/rad-conv-consola-2.png":"1f5f","./radioConvencional/rad-conv-consola-3.png":"240b","./radioConvencional/rad-conv-consola-4.png":"4522","./radioConvencional/rad-conv-gen-1.png":"ce44","./radioConvencional/rad-conv-gen-2.png":"9c7b","./radioConvencional/rad-conv-gen-3.png":"d8d4","./radioConvencional/rad-conv-gen-4.png":"29fb","./radioDigital/RX-RAD-DIGI-Moviles-1-zoom.png":"fc49","./radioDigital/RX-RAD-DIGI-Moviles-1.png":"25da","./radioDigital/RX-RAD-DIGI-Moviles-2-zoom.png":"2417","./radioDigital/RX-RAD-DIGI-Moviles-2.png":"1560","./radioDigital/RX-RAD-DIGI-Moviles-3-zoom.png":"c4f8","./radioDigital/RX-RAD-DIGI-Moviles-3.png":"084e","./radioDigital/RX-RAD-DIGI-Moviles-4-zoom.png":"e0969","./radioDigital/RX-RAD-DIGI-Moviles-4.png":"c679","./radioDigital/RX-RAD-DIGI-Moviles-5-zoom.png":"d12a","./radioDigital/RX-RAD-DIGI-Moviles-5.png":"08cc","./radioDigital/RX-RAD-DIGI-Sala-1-zoom.png":"9e48","./radioDigital/RX-RAD-DIGI-Sala-1.png":"ab3f","./radioDigital/RX-RAD-DIGI-Sala-10-zoom.png":"305e","./radioDigital/RX-RAD-DIGI-Sala-10.png":"0ccc","./radioDigital/RX-RAD-DIGI-Sala-11-zoom.png":"b5f9","./radioDigital/RX-RAD-DIGI-Sala-11.png":"5005","./radioDigital/RX-RAD-DIGI-Sala-12-zoom.png":"f1b3","./radioDigital/RX-RAD-DIGI-Sala-12.png":"e6fb","./radioDigital/RX-RAD-DIGI-Sala-2-zoom.png":"c6fd","./radioDigital/RX-RAD-DIGI-Sala-2.png":"dc3f","./radioDigital/RX-RAD-DIGI-Sala-3-zoom.png":"f0a1","./radioDigital/RX-RAD-DIGI-Sala-3.png":"bdac","./radioDigital/RX-RAD-DIGI-Sala-4-zoom.png":"2271","./radioDigital/RX-RAD-DIGI-Sala-4.png":"38ec","./radioDigital/RX-RAD-DIGI-Sala-5-zoom.png":"bb59","./radioDigital/RX-RAD-DIGI-Sala-5.png":"a9fb","./radioDigital/RX-RAD-DIGI-Sala-6-zoom.png":"7157","./radioDigital/RX-RAD-DIGI-Sala-6.png":"61e2","./radioDigital/RX-RAD-DIGI-Sala-7-zoom.png":"2bfb","./radioDigital/RX-RAD-DIGI-Sala-7.png":"42db","./radioDigital/RX-RAD-DIGI-Sala-8-zoom.png":"8f8d","./radioDigital/RX-RAD-DIGI-Sala-8.png":"9ab9","./radioDigital/RX-RAD-DIGI-Sala-9-zoom.png":"6dc5","./radioDigital/RX-RAD-DIGI-Sala-9.png":"2d34","./radioDigital/caracteristicas-arco-digi.png":"e4d7","./radioDigital/caracteristicas-moviles-digi-1.png":"c06c","./radioDigital/caracteristicas-moviles-digi-2.png":"e1f6","./radioDigital/rad-dig-sala-config-1.png":"f80b","./radioDigital/rad-dig-sala-config-2.png":"f0bd","./radioDigital/rad-dig-sala-config-3.png":"8296","./radioInterven/RX-Arcos-1-zoom.png":"a170","./radioInterven/RX-Arcos-1.png":"a5f0","./radioInterven/RX-Arcos-2-zoom.png":"481b","./radioInterven/RX-Arcos-2.png":"7e11","./radioInterven/RX-Arcos-3-zoom.png":"c69e","./radioInterven/RX-Arcos-3.png":"31c3","./radioInterven/RX-Arcos-4-zoom.png":"c8df","./radioInterven/RX-Arcos-4.png":"7411","./radioInterven/RX-Arcos-5-zoom.png":"c9c5","./radioInterven/RX-Arcos-5.png":"f1e7","./radioInterven/RX-Arcos-6-zoom.png":"7588","./radioInterven/RX-Arcos-6.png":"83e5","./radioInterven/RX-Arcos-7-zoom.png":"6997","./radioInterven/RX-Arcos-7.png":"af91","./radioInterven/RX-Arcos-8-zoom.png":"f71d","./radioInterven/RX-Arcos-8.png":"2fde","./radioInterven/caracteristicas-intervensionista.png":"1dc0"};function n(a){var o=t(a);return e(o)}function t(a){if(!e.o(r,a)){var o=new Error("Cannot find module '"+a+"'");throw o.code="MODULE_NOT_FOUND",o}return r[a]}n.keys=function(){return Object.keys(r)},n.resolve=t,a.exports=n,n.id="edce"},f21c:function(a,o,e){"use strict";var r=e("955f"),n=e.n(r);n.a}}]);
//# sourceMappingURL=chunk-73d1cfce.ad52d71b.js.map