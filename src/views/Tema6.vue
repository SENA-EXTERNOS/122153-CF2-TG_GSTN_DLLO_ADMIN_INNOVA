<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Informes contables y estados financieros      

    .row.justify-content-between
      .col-md-6.col-lg-4

          figure.mb-5
            img(src='@/assets/curso/temas/tema6/img-1-.svg')

      .col-md-6.col-lg-8
        p.mb-3 Un estado financiero es una declaración de lo que se cree que es cierto, expresado en términos de una unidad monetaria; por ejemplo, en pesos. Cuando los administradores preparan estados financieros, están describiendo, en términos financieros, ciertos atributos de las empresas que están representando, de una manera razonable.
        p.mb-5 El tiempo es un factor importante al preparar y entender los estados financieros de una empresa. Los estados podrían cubrir un periodo tan corto como una semana, o tan largo como un año.
    
    p.mb-5 En las NIIF, dependiendo de las características e información que ofrecen los reportes financieros, se clasifican en:

    .row.justify-content-center 
      .col-lg-12
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul fnd-5")
          .row(titulo="De propósito general")
            p Son estados financieros cuya elaboración y presentación es obligatoria al menos una vez al año; los usuarios de estos informes son un público indeterminado y su propósito es el de dar a conocer información financiera sobre el ente económico. El conjunto completo está conformado por:
            ul.lista-ul--color.nar
              li 
                i.fas.fa-check
                | Estado de situación financiera.
              li 
                i.fas.fa-check
                | Estado de resultados.
              li 
                i.fas.fa-check
                | Estado de cambios en el patrimonio.
              li 
                i.fas.fa-check
                | Estado de flujo de efectivo.
              li 
                i.fas.fa-check
                | Estados financieros consolidados.
              li 
                i.fas.fa-check
                | Notas a los estados financieros, que hacen parte integral de los mismos.

          .row(titulo="Estados financieros intermedios")
            p Están conformados por aquellos estados financieros que se preparan y presentan, aplicando principalmente las NIC 1 y 7, para satisfacer necesidades de información de períodos intermedios (entre enero y diciembre); entre ellos se encuentran: 
            ul.lista-ul--color.nar
              li 
                i.fas.fa-check
                | Estado de situación condensado.
              li 
                i.fas.fa-check
                | Estado de situación de resultados condensado. 
              li 
                i.fas.fa-check
                | Estado de cambios en el patrimonio condensado.
              li 
                i.fas.fa-check
                | Estado de flujo de efectivos condensado.
              li 
                i.fas.fa-check
                | Notas explicativas seleccionadas. 


          .row(titulo="De propósito general")
            p Corresponde a aquellos estados financieros elaborados por cada inversionista, sea este un controlador o matriz, un inversionista en una organización asociada o un partícipe en una compañía controlada conjuntamente, donde los inversionistas han contabilizado su inversión por el costo histórico y no por los cambios patrimoniales que la sociedad receptora ha experimentado.

          .row(titulo="De propósito general")
            p Son aquellos que se elaboran y se presentan en un grupo empresarial, como si fuera una sola entidad. Los estados financieros consolidados que se deben preparar, elaborar y presentar, son: 
            ul.lista-ul--color.nar  
              li 
                i.fas.fa-check
                | Estado de situación financiera consolidado.
              li 
                i.fas.fa-check
                | Estado de resultados consolidado.
              li 
                i.fas.fa-check
                | Estados de cambios en el patrimonio consolidado.
              li 
                i.fas.fa-check
                | Estado de flujo de efectivo consolidado.
              li 
                i.fas.fa-check
                | Notas a los estados financieros consolidados.



    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Herramientas TIC en procesos contables

    p.mb-5 Gracias a la evolución tecnológica, tenemos acceso a múltiples herramientas que sirven para que la labor contable se manifieste completa y fidedigna; esto facilita que las organizaciones cuenten con información oportuna e inmediata, sea cual sea el momento en el que se requiera. 
    .row.justify-content-center.mb-5 
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-8
          p En la actualidad, las empresas apoyan el registro de sus operaciones contables en sistemas contables que, en muchos casos, son actualizados en línea, siendo algo muy conveniente para que cualquier usuario de la información contable, pueda acceder a ella sin importar el lugar donde se encuentre.
    p.mb-5 Conozca sobre el software contable como herramienta de gestión y organización del registro de los hechos económicos de la empresa.      

    SlyderB.mb-5.fls(:datos="datosSlyder")      

    p.mb-5 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: '¿Qué es un <em>software</em> contable?',
        texto:
          'Un <em>software</em> de contabilidad es un programa o aplicación informática que trata los datos contables de una empresa, mediante métodos sistemáticos (economipedia). En Colombia existen varios, pero el más reconocido es SIIGO. <br><br>Este <em>software</em> contable permite que la información sea registrada de manera inmediata y tiene un alto nivel de confiabilidad en el riesgo de pérdida de información; muchos usuarios comentan aspectos positivos del mismo, indicando la simplicidad y facilidad de gestionar las tareas contables.',
        imagen: require('@/assets/curso/temas/tema6/img-2-.svg'),
      },
      {
        titulo: '¿Cómo se ingresa información al <em>software?</em>',
        texto:
          'Cada <em>software</em> maneja su propia plataforma o interfaz y, aunque pueden semejarse una de la otra, es necesario contar con una capacitación completa por parte del prestador del servicio, a los colaboradores que harán uso de este. <br><br> Para que el ingreso de la información se registre de manera adecuada, se debe tener presente:<br><br><ul class="lista-ul--color nar"><li><i class="fas fa-check"></i>Una correcta clasificación de los hechos contables.</li><li><i class="fas fa-check"></i>Una revisión de las cuentas que integran el sistema contable.</li><li><i class="fas fa-check"></i>Cómo es su organización y su estructura.</li>',
        imagen: require('@/assets/curso/temas/tema6/img-3-.svg'),
      },
      {
        titulo: '¿Cómo se realiza la generación de reportes?',
        texto:
          'Posterior a que la organización haya registrado las diferentes transacciones o hechos económicos en los libros, de acuerdo con el periodo contable, se procede a la generación de reportes.<br><br>Estos reportes son el resultado final de los hechos económicos de la organización, aquellos que sirven para determinar la utilidad o pérdida de la misma y, al mismo tiempo, tomar decisiones de mejora o de oportunidad.<br><br>Los reportes permiten conocer el estado real de la organización y son imprescindibles para la toma de decisiones (estado de situación financiera, estado de resultados, estado de pérdidas y ganancias, entre otros).',
        imagen: require('@/assets/curso/temas/tema6/img-4-.svg'),
      },
    ],
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
