(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"a838cd9d","chunk-0206bfa0":"08ff7102","chunk-039c07ee":"9157d02d","chunk-13a6037e":"795db77f","chunk-16215048":"dd2f4567","chunk-18f95272":"92ff8633","chunk-2c06842c":"7dd02792","chunk-2d0c5615":"66262bf8","chunk-2d0e96ec":"0e3944de","chunk-2d208d90":"687062ac","chunk-2d21d0e2":"3396eb7b","chunk-2d22c123":"f6af4ae4","chunk-2e80bb9a":"ef232ae9","chunk-2fdc87ee":"bf1212d0","chunk-30d2f332":"739e77dd","chunk-36769079":"a99a338f","chunk-398c63f0":"87bcb814","chunk-44daca35":"40802002","chunk-4adb6690":"1a0d735a","chunk-5309f94e":"7c7600cc","chunk-53ccb27e":"c2e3d10f","chunk-55d286b8":"3335923a","chunk-681f37d3":"d6188e20","chunk-6928a14a":"7c039623","chunk-69444b4c":"e256e6c7","chunk-6e45141e":"a7b43e30","chunk-863a1ee8":"1d2351db","chunk-923527cc":"3698c4a6","chunk-a48a3e88":"9b6b4a94","chunk-c796899c":"7a3e85cf","chunk-e8a7823a":"9ddf7174","chunk-eaa1fac2":"39a4b7b8","chunk-f2a44bde":"2ad66664",comple:"b4194870",creditos:"addf4ee5",glosario:"46c8ba75",intro:"850da018",referencias:"d6ed96ce",sintesis:"5642efcc",tema1:"1fcdf92e",tema2:"68a75fa0",tema3:"a02de0ee"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-039c07ee":1,"chunk-16215048":1,"chunk-30d2f332":1,"chunk-398c63f0":1,"chunk-44daca35":1,"chunk-4adb6690":1,"chunk-681f37d3":1,"chunk-6928a14a":1,"chunk-6e45141e":1,"chunk-863a1ee8":1,"chunk-923527cc":1,"chunk-a48a3e88":1,"chunk-f2a44bde":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-039c07ee":"c02cabcb","chunk-13a6037e":"31d6cfe0","chunk-16215048":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-30d2f332":"c02cabcb","chunk-36769079":"31d6cfe0","chunk-398c63f0":"cb84b683","chunk-44daca35":"c02cabcb","chunk-4adb6690":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-681f37d3":"c02cabcb","chunk-6928a14a":"836e2e3e","chunk-69444b4c":"31d6cfe0","chunk-6e45141e":"c0e85eea","chunk-863a1ee8":"37b25489","chunk-923527cc":"985220b5","chunk-a48a3e88":"c02cabcb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-eaa1fac2":"31d6cfe0","chunk-f2a44bde":"c02cabcb",comple:"baaca1c1",creditos:"63113a55",glosario:"4bd93da1",intro:"31d6cfe0",referencias:"87831420",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);var o=n("68f3"),i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=n("2b0e"),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);const b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:()=>n.e("intro").then(n.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>n.e("tema1").then(n.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>n.e("tema2").then(n.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>n.e("tema3").then(n.bind(null,"eb46"))},{path:"tema4",name:"tema4",component:()=>n.e("tema3").then(n.bind(null,"3eb5"))},{path:"tema5",name:"tema5",component:()=>n.e("tema3").then(n.bind(null,"5029"))},{path:"tema6",name:"tema6",component:()=>n.e("tema3").then(n.bind(null,"92ea"))}]},{path:"/sintesis",name:"sintesis",component:()=>n.e("sintesis").then(n.bind(null,"15a3"))},{path:"/actividad",name:"actividad",component:()=>n.e("actividad").then(n.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>n.e("glosario").then(n.bind(null,"69a7"))},{path:"/complementario",name:"complementario",component:()=>n.e("comple").then(n.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>n.e("referencias").then(n.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>n.e("sintesis").then(n.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>n.e("creditos").then(n.bind(null,"ef72"))}],scrollBehavior(e,a){if(e.hash){const n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise(e=>{setTimeout(()=>{e(n)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Normatividad, formalización de empresa, documentos e informes contables",descripcionCurso:"Para entender un informe contable, es importante reconocer a la empresa como esa unidad organizada donde se realizan operaciones que son registradas y soportadas con base en una normatividad vigente y que acepta generar informes para sus usuarios, exponiendo las ganancias o pérdidas, lo que permite el acceso a la toma de decisiones financieras a corto, mediano o largo plazo.",imagenBannerPrincipal:n("89c8"),fondoBannerPrincipal:n("6a15"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("765c")},{clases:["banner-principal-decorativo-2"],imagen:n("b9cf")},{clases:["banner-principal-decorativo-3"],imagen:n("b018")},{clases:["banner-principal-decorativo-4"],imagen:n("f7ae")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Aspectos generales de la contabilidad",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:" La contabilidad y su clasificación",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:" La empresa en Colombia",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"La información contable",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Documentos y libros contables",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Documentos contables",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Libros contables",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Títulos valores",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Proceso administrativo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Principios básicos de áreas funcionales, planeación estratégica, organización, dirección y control",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Archivo y conservación de documentos",hash:"t_3_2"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Hechos contables – transacciones de las empresas",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Obligaciones tributarias de las empresas",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Informes contables y estados financieros",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Decreto 2420 de 2015. (Presidencia de la República). Por medio de la cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Diciembre 14 de 2015."},{referencia:"Hernández, S. J. (2011). <em>Introducción a la administración</em> (5.a ed., Vol. 1). McGraw-Hill Interamericana."},{referencia:"Ley 590 de 2000. Por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresa. Julio 10 de 2000. DO. No. 44.078"},{referencia:"Secretaría Senado. (1971).<em> Código de Comercio Decreto 410 de 1971.</em>",link:"http://www.secretariasenado.gov.co/senado/basedoc/decreto_2650_2008.html"},{referencia:"Sistema de Información sobre Comercio Exterior. (s.f.).<em> Comisión de la Comunidad Andina.</em> Decisión 486: Régimen Común sobre Propiedad Industrial. SICE OAS.",link:"http://www.sice.oas.org/trade/junac/decisiones/dec486s6.asp"},{referencia:"Uribe Medina, L. R. (2016). <em>Plan de cuentas para sistemas contables.</em>",link:"https://docplayer.es/33172203-Luis-raul-uribe-medina.html"},{referencia:"Zapata, P. (2018).<em> Contabilidad General.</em> (8ª Ed.). Alfaomega.",link:"https://www.alphaeditorialcloud.com/reader/contabilidad-general?location=22"}],glosario:[{termino:"Comerciante",significado:"persona que ejerce alguna de las actividades que se consideran mercantiles."},{termino:"Costo histórico",significado:"es el valor de la transacción de una operación."},{termino:"Contribuyente",significado:"se refiere a toda persona natural o jurídica llamada para cumplir ciertas obligaciones tributarias, por la realización del hecho generador establecido en la ley para el nacimiento del tributo."},{termino:"Debe",significado:"registra el valor monetario al lado izquierdo."},{termino:"Declarante",significado:"persona natural o jurídica que presenta una declaración tributaria."},{termino:"Empresa",significado:"ente económico dedicado a la compra y venta de bienes, conocidos como mercancías."},{termino:"Estado de resultados",significado:"estado financiero compuesto por las cuentas de ingresos, gastos y costos, los cuales reflejan el resultado del ejercicio."},{termino:"Estado de situación financiera",significado:"estado integrado por los elementos de activo, pasivo y patrimonio."},{termino:"Haber",significado:"corresponde al registro del precio al lado derecho."},{termino:"Hecho generador",significado:"es el evento o suceso, expresamente definido en la ley, por el cual se origina la obligación tributaria."},{termino:"Impuesto",significado:"es el tributo que establece la ley a favor del sujeto activo, y a cargo de los sujetos a quienes se les atribuya la realización del hecho imponible de la obligación tributaria."},{termino:"Normas básicas",significado:"conceptos básicos y reglas que se deben observar al efectuar los registros contables correspondientes a las actividades que desarrollan las personas jurídicas o naturales, y que deben aplicar todas las personas obligadas a llevar contabilidad."},{termino:"Nota débito",significado:"comprobante que emiten las empresas, para cargar a la cuenta de los clientes, valores como intereses por financiación, por sobregiros, el gravamen a movimientos financieros (GMF), venta de chequeras, comisiones, y otros cobros."},{termino:"Partida doble",significado:"es la igualdad de los registros del debe y el haber en el asiento contable, presentando un equilibrio."},{termino:"Patrimonio",significado:"es la diferencia presentada entre activo y pasivo."},{termino:"Políticas contables",significado:"son las bases, reglas y procedimientos aplicables por una empresa, para presentar los estados financieros."},{termino:"Razón comercial",significado:"es el nombre que se asigna a la empresa, para darse a conocer ante el público o mercado."},{termino:"Razón social",significado:"es el nombre de la empresa, que se encuentra registrado en la cámara de comercio y demás entidades de control."},{termino:"Registro Único Tributario (RUT)",significado:"es el documento que se tramita ente la Dirección de Impuestos y Aduanas Nacionales (DIAN), el cual relaciona la clasificación y responsabilidades del contribuyente."},{termino:"Sujeto activo",significado:"es el Estado como acreedor de la prestación pecuniaria que se deriva de la realización del hecho generador del tributo."},{termino:"Sujeto pasivo",significado:"es aquel a quien se le atribuye la realización del hecho impositivo de la obligación tributaria."},{termino:"Tarifa",significado:"es la unidad de medida o porcentaje que se aplica a la base gravable para determinar la cuantía del tributo."}],complementario:[{tema:"La información contable",referencia:"IFRS Foundation. (s.f.). <i>Norma Internacional de Contabilidad 8. Políticas Contables, Cambios en las Estimaciones Contables y Errores.</i>",tipo:"PDF",link:"https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369239-2962"},{tema:"Documentos contables",referencia:"DIAN. (s.f.). <i>Documento soporte de pago en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente.</i>",tipo:"PDF",link:"https://www.dian.gov.co/impuestos/Documents/Documento_soporte_en_adquisiciones_efectuadas.pdf"},{tema:"Documentos contables",referencia:"Resolución 0167 de 2021. (DIAN). Por la cual se implementa y desarrolla en el sistema de facturación electrónica la funcionalidad del documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente, para su transmisión electrónica y se expide el anexo técnico del documento. Diciembre 30 de 2021.",tipo:"PDF",link:"https://www.dian.gov.co/normatividad/Normatividad/Resoluci%C3%B3n%20000167%20de%2030-12-2021.pdf"},{tema:"Archivo y conservación de documentos",referencia:"PROING – SA OFICIAL. (2017). <i>Organización y archivo de documentos – Gestión documental</i> (video). YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=DGRZsfzGE9Y"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;const k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:e=>e(d)}).$mount("#app")},"6a15":function(e,a,n){e.exports=n.p+"img/img-fondo.c44f3144.png"},"765c":function(e,a,n){e.exports=n.p+"img/img-f1.4cd3c319.svg"},"89c8":function(e,a,n){e.exports=n.p+"img/img-intro.3a90fb0c.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.43e61d0f.svg"},a3a0:function(e,a,n){},b018:function(e,a,n){e.exports=n.p+"img/img-f3.af509822.svg"},b9cf:function(e,a,n){e.exports=n.p+"img/img-f2.ef25f027.svg"},f7ae:function(e,a,n){e.exports=n.p+"img/img-f4.9672b496.svg"}});
//# sourceMappingURL=app.433cbdfa.js.map