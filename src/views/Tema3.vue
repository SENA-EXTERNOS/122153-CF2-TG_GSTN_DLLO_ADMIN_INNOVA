<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proceso administrativo

    p.mb-5 Se llama proceso administrativo a la serie de fases o etapas que permiten llevar a cabo una actividad, con la existencia de diversos criterios acerca de la cantidad de pasos que lo constituyen, aunque para los autores, los elementos o funciones sean las mismas. Para el caso de este componente formativo, se tomarán como referente las siguientes: 
    .row.justify-content-center
      .col-md-10.col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Etapas del proceso administrativo
        figure
            img(src='@/assets/curso/temas/tema3/img-1.svg')


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Principios básicos de áreas funcionales, planeación estratégica, organización, dirección y control

    .row.justify-content-between
      .col-md-6.col-lg-4
        .imagen-titulo--izq.color-acento-botones
          figure
            img(src='@/assets/curso/temas/tema3/img-2.svg')

      .col-md-6.col-lg-8
        p.mb-5 La administración como palabra, viene del latín ad, que indica dirección, tendencia, proximidad, contacto, y minister, subordinación u obediencia y, en su sentido más amplio y completo, significa cumplimiento de una tarea o función bajo la directriz o mando de otro. Sin embargo, en la historia, este concepto sufrió una transformación significativa, que trascendió el hacer por el interpretar los objetivos trazados por una organización y transformarlos en acción a través de la planeación, la organización, la dirección y el control, todo con el objetivo de alcanzar los propósitos de manera adecuada y asertiva. Es allí donde surgen los diferentes caminos que han tomado algunos autores para definir el concepto de administración y su impacto en los escenarios de las organizaciones.

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Planeación

    p.mb-5 La planeación puede tener varias perspectivas, pero, en síntesis, obedece al rumbo hacia el que se dirige algo, bien sea a nivel empresarial o incluso en la vida personal; es el horizonte proyectado y para ilustrar un poco mejor el concepto, podría pensarse en los siguientes cuestionamientos: ¿qué se quiere? ¿Quiénes somos? ¿Para dónde vamos? La planeación es promotora para optimizar recursos, prever situaciones, reducir costos e incrementar la productividad, a partir de la concentración y canalización de esfuerzos por un mismo fin, además de ser un escenario base para una posterior evaluación y retroalimentación del proceso y los logros obtenidos.

    p.mb-5 Basados en la estructura organizacional, existen 3 tipos de planeación:


    .row.justify-content-between
      .col-md-6.col-lg-8  
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-5")
          .row(titulo="Estratégica")
            p Hace referencia a la planeación general, desarrollada por los estamentos directivos de la organización. Usualmente es una planeación, a mediano o largo plazo, de la cual se desprenden los diferentes planes de la empresa.
          .row(titulo="Táctica")
            p Son los planes desarrollados en cumplimiento de la planeación estratégica y obedecen más al hacer, con un componente bajo de operatividad.      
          .row(titulo="Operativa")
            p Se diseña con base en los planes tácticos y se desarrolla por los estamentos operativos de la organización.     

      .col-md-6.col-lg-4
        .imagen-titulo--der.color-secundario.mb-5
          figure
            img(src='@/assets/curso/temas/tema3/img-3.svg')

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Planeación

    p.mb-5 Una de las definiciones de organización es la del autor Sergio Hernández (2011), quien indica que es la “fase del proceso administrativo en la cual se aplican las técnicas administrativas para estructurar una empresa u organización social; se definen las funciones por áreas sustantivas, departamentos y puestos; se establece la autoridad en materia de toma decisiones y la responsabilidad de los miembros que ocupan dichas unidades, y se definen las líneas de comunicación formal que faciliten la comunicación y la cooperación de los equipos de trabajo, a fin de alcanzar los objetivos y la estrategia”. (p.271)
    p.mb-5 La organización permite optimizar tiempo y recursos, así como también el aumento de productividad, simplificando el trabajo y evitando los reprocesos y la duplicidad en responsabilidades o actividades. Las dos etapas fundamentales de la organización son:

    .row.justify-content-center.mb-5 
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-8
          ul.lista-ul--color.nar
            li 
              i.fas.fa-check
              | La división o asignación de trabajo, de tal manera que se clarifiquen responsabilidades y se delimiten actividades para acercarse cada vez más a la máxima eficiencia y eficacia, simplificando trabajos.
            li 
              i.fas.fa-check
              | La coordinación de las actividades, con el propósito de verificar su correcta ejecución.

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Planeación

    p.mb-5 Cuando hablamos de dirección, hablamos de unos elementos asociados al liderazgo, a la motivación, a los equipos de trabajo y a la comunicación en torno a la ejecución de los planes, de acuerdo con la estructura organizacional.
    p.mb-5 Ahondemos en el significado de cada uno de ellos:


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5.fnd-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-4.svg')
          
        h3.text-center Liderazgo  
        p Implica ayudar, desde el rol directivo o líder, a los equipos de trabajo que componen la organización para trabajar con entusiasmo y alcanzar el éxito conjuntamente. El líder debe propiciar ambientes de trabajo favorables para que sus equipos aporten lo mejor de sí mismos y se sientan parte fundamental de la empresa.

      .col-md.tarjeta.color-acento-botones.p-5.fnd-9
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-5.svg')
          
        h3.text-center Contractuales    
        p La buena actitud de los trabajadores o empleados es fundamental para que realicen su trabajo con entusiasmo; por eso es importante que el líder genere ese estímulo permanente de confianza, desde lo individual, para impactar también colectivamente.


      .col-md.tarjeta.color-acento-botones.p-5.fnd-4
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-6.svg')
          
        h3.text-center Comunicación
        p La comunicación es el canal que permite, a la organización, definir entendimiento y mensajes claros; por eso es significativo que exista una comunicación efectiva que invite a los trabajadores a contribuir con el cumplimiento de los objetivos. Claves para esa comunicación asertiva: la empatía, el respeto y la confianza.


    .row.justify-content-center.mb-5
      .col-md-8.col-lg-8
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-botones.p-5.fnd-9
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-7.svg')
              
            h3.text-center Ejecución y supervisión de resultados  
            p El seguimiento y la supervisión permiten orientar acciones preventivas (antes de que suceda) y correctivas (una vez ya sucedido), a la hora del desarrollo de una actividad, para retomar el rumbo y la orientación hacia el cumplimiento de los objetivos propuestos.

          .col-md.tarjeta.color-acento-botones.p-5.fnd-4
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema3/img-8.svg')
              
            h3.text-center Toma de decisiones 
            p Elegir el mejor camino para la organización, resulta ser una de las funciones más importantes que realiza el administrador, analizando entre varias alternativas, con la finalidad de lograr los propósitos establecidos.


    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Control
    p.mb-5 El control consiste en evidenciar y evaluar que lo planeado, organizado y dirigido marche, de acuerdo con los objetivos organizacionales, señalando a partir de este ejercicio de evaluación, las debilidades, los errores, e inclusive las potencialidades; y a partir de las acciones tomadas, el perfeccionamiento del proceso traducido en mayor eficiencia y efectividad. El proceso de control permite tomar decisiones en torno a cuáles son los objetivos por alcanzar como sistema o como área, cómo va el desempeño de los equipos de trabajo con base en sus responsabilidades y las apuestas generales, identificación de riesgos y oportunidades, o hasta el cambio de planteamiento del objetivo. Existen diferentes tipos de controles, como los que se ven a continuación:
    
    ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Preliminar y colectivo: control que se enfoca en la prevención de las desviaciones en la calidad y en la cantidad de recursos utilizados en la organización.   
          ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Concurrente o permanente: consiste en vigilar las operaciones en funcionamiento; cuando el control se aplica de manera permanente, la directiva puede corregir los problemas oportunamente, antes que se vuelvan irremediables y costosos.
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Correctivo o de retroalimentación: este control se realiza una vez que la actividad ha llegado a su fin. La desventaja de este tipo de control es que cuando se recibe la información, el daño ya está hecho. Los informes financieros son un claro ejemplo de este tipo de control.          
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Archivo y conservación de documentos 

    .row.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4.fnd-8.px-5
          .row.justify-content-center
            .col-lg-3
              figure
                img.img-100(src='@/assets/curso/temas/tema3/img-9.svg')
            .col-lg-9
              p Las entidades, en sus actividades diarias, deben hacer uso constante de diferentes documentos y estos son los que soportan y legalizan las funciones que esta realiza; surge entonces la necesidad de conservar dicha información, de manera apropiada, con la finalidad que sirva como medio de prueba y pueda ser suministrada en el momento requerido.

    .row.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4.fnd-8.px-5
          .row.justify-content-center
            .col-lg-3
              figure
                img.img-100(src='@/assets/curso/temas/tema3/img-10.svg')
            .col-lg-9
              p Archivar es el arte a través del cual se gestionan, se resguardan y se sitúan, a disposición de usuarios, los documentos de una organización, sin importar si son públicas o privadas; teniendo en cuenta unos principios y unas metodologías. 

    p.mb-3 La clasificación refleja la estructura orgánica de la empresa, de tal manera que las agrupaciones documentales resultan de las subdivisiones de la organización.

    p.mb-5 Las empresas pueden utilizar diferentes formas para clasificar los documentos numéricos y alfabéticos.
    p.mb-5 <b>Numéricos.</b> Están conformados por:

    .row.m-0.align-items-center.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure.p-5
          img(src='@/assets/curso/temas/tema3/img-11.svg')
      .col-lg-9
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Simples u ordinales")
            p Consiste en la colocación de los documentos de forma consecutiva y de forma progresiva.
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Cronológicos")
            p Consiste en situar un documento detrás del otro de forma secuencial, de acuerdo con la fecha en que se haya tramitado el documento, teniendo en cuenta que primero va el año, luego el mes y, por último, el día.

    .row.m-0.align-items-center.justify-content-center.mb-5
      .col-lg-9
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Onomásticos")
            p Son empleados para series documentales compuestas por expedientes que permanecen durante varios lapsos de tiempo abiertos. Ejemplo: expedientes clínicos.
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Toponímicos o geográficos")
            p Se usan para ordenar la serie alfabética de acuerdo con los lugares. Ejemplo: Bucaramanga, Medellín etc.
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Temáticos")
            p Se ordenan alfabéticamente por contenidos similares. Ejemplo actas, resoluciones.
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Mixtos")
            p Se utilizan dos o más variables para su clasificación y pueden ser:
                        
            ol.lista-ul--color.nar
              li 
                i.fas.fa-check
                | Alfanuméricos: como su nombre lo detalla la serie se ordena con números y letras.Ejemplo: 078-Juan Cruz.
              li 
                i.fas.fa-check
                | Cronológicos: son empleados para series documentales que son numéricas y a la vez cronológicas. Ejemplo: Resolución 010 2022-07-07.

      .col-lg-3.mb-4.mb-lg-0.p-5
        figure
          img(src='@/assets/curso/temas/tema3/img-12.svg')

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Conservación documental
        
    p La protección de los materiales contenidos en archivos y bibliotecas, requiere de la definición de estrategias y técnicas específicas, basadas, tanto en medidas preventivas como correctivas, con el fin de asegurar la integridad de los documentos y la garantía de su funcionalidad. Las medidas de conservación de documentos comprende tanto aquellos impresos, como los digitales; con esta acción de preservación, se pretende prolongar la posibilidad de utilización en buenas condiciones y durante el mayor tiempo posible.


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
