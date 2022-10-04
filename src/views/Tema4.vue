<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Hechos contables – transacciones de las empresas

    .row.justify-content-between
      .col-md-6.col-lg-4
        .imagen-titulo--izq.color-acento-botones.mb-3
          figure
            img(src='@/assets/curso/temas/tema4/img-1.svg')

      .col-md-6.col-lg-8
        p.mb-5 Son ocasionados por el giro ordinario de las actividades que la empresa realiza, como compra y venta de bienes o servicios. Estos hechos económicos deben desarrollarse en concordancia con las cualidades de información financiera y se les denominan transacciones, donde la veracidad de la información debe ser evidente.
        p.mb-5 Estos hechos contables o transacciones, permiten clasificar y determinar la representación, y posterior definición del registro contable, para que esta clasificación se realice de manera oportuna; la entidad debe diseñar, con anterioridad, un manual de políticas contables y ajustarlo basado en la normativa vigente; para este caso, la NIC 8.

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black De la cuenta

    p.mb-5 Para organizar y registrar los hechos económicos de una organización, es necesario y apropiado emplear cuentas contables, las cuales deben utilizarse de manera apropiada, porque un mal uso de ellas ocasiona una contabilidad alejada de la realidad de la organización. Es necesario que la persona encomendada para esta actividad, posea bases sólidas y conocimientos claros sobre este tema. 

    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10
        .tarjeta.p-3.mb-5.fnd-2
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Qué es una cuenta
                  p.text-small Para conocer qué es una cuenta, sus elementos, estructura, clases y dinámica, lo invitamos a ver el documento    
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/QUE ES UNA CUENTA.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Ecuación contable 
    p Ecuación contable se refiere a la igualdad que nos muestra que, el valor de los recursos llamados activos de una empresa o compañía, es igual al valor de los recursos propios llamados patrimonio, más el valor de los recursos obtenidos del tercero, conocidos como pasivos. Gráficamente, la ecuación se construye así:

    .row.justify-content-center
      .col-md-6.col-lg-8
        figure
          img(src='@/assets/curso/temas/tema4/img-3.svg')

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black La partida doble

    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.gr-1
          .row.m-0.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.img-150(src='@/assets/curso/temas/tema4/img-4.svg')
            .col-lg-9
              .bloque-texto-a__texto.p-4
                P.mb-3 Consiste en que por cada movimiento contable, deben estar presentes, como mínimo, dos cuentas. Esto significa que, en cada asiento contable, la suma de los débitos debe ser igual a la suma de los créditos.

    p.mb-5 A continuación, se presenta una serie de términos importantes a tener en cuenta en los hechos contables.

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Reconocimiento")
        .row
          .col-md-6.mb-4.mb-md-0
              figure
                img.img-400(src='@/assets/curso/temas/tema4/img-5-.svg')
                     
          .col-md-6.mb-4.mb-md-0
           
            p Se comprende como reconocimiento contable, a todo movimiento económico de la empresa sea este, ingreso o egreso, entrada o salida, que puede ser medible con fiabilidad y su flujo sea probable. Estos se verán reflejados, de manera posterior, en los estados financieros, una vez cumplan con el concepto de sus elementos. 
        
      .py-3.py-md-4(titulo="Baja de cuentas")
        .row
          .col-md-6.mb-4.mb-md-0
              figure
                img.img-400(src='@/assets/curso/temas/tema4/img-6-.svg')

          .col-md-6
            p Bajar o retirar, hace referencia a la eliminación total o parcial de alguno de los registros, por situaciones como pérdida de derechos adquiridos (venta de un activo), o pago de una deuda con proveedor (eliminación del pasivo).
        
      .py-3.py-md-4(titulo="Medición")
        .row
          .col-md-6.mb-4.mb-md-0
              figure
                img.img-400(src='@/assets/curso/temas/tema4/img-7-.svg')        
          .col-md-6.mb-4.mb-md-0
            p Hace referencia al proceso mediante el cual se le asigna un valor monetario a la transacción económica; este proceso se lleva a cabo en dos momentos diferentes, en el reconocimiento inicial y en la medición posterior.
        


      .py-3.py-md-4(titulo="Política contable")
        .row
          .col-md-6.mb-4.mb-md-0
              figure
                img.img-400(src='@/assets/curso/temas/tema4/img-8-.svg')           
          .col-md-6
            p Se refiere a las reglas o parámetros con los que se elaboran los estatutos financieros, para que cuando alguien los lea, identifique cuál fue la base para elaborar los estados financieros; las políticas, lo que hacen es contextualizar cómo y bajo qué metodología, se prepararon los estados financieros.   





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
