<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
       
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Documentos y libros contables

    .row.justify-content-between
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema2/img-1.svg')

      .col-md-6.col-lg-8
        p.mb-5 Toda organización, para su funcionamiento, requiere soportar el registro de transacciones, con la finalidad que le sirva como medio de prueba y soporte de las actividades propias que su organización ejecuta en la cotidianidad.
        p.mb-5 Los documentos contables soportan hechos económicos propios de la organización y, al ser registrados, afectan la contabilidad de la empresa; los documentos no contables soportan transacciones de la empresa pero, al no registrarse contablemente, no afectan la contabilidad.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Documentos contables 

    p.mb-3 Facilitan que, de manera cronológica y organizada, se proporcione una información de los movimientos de la empresa. 
    .row.justify-content-center.mb-5
      .col-md-9.col-lg-10
        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.text-regular Teniendo en cuenta los requisitos legales que sean aplicables, según el tipo de acto que se trate, los hechos económicos deben documentarse mediante soportes de orígenes internos o externos, debidamente fechados y autorizados por quienes intervengan en ellos o los elaboren.

            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                p.text-black.mb-0 Anexo 6 del DUR 2420 de 2015 Normas sobre el sistema Documental, Título Tres, Artículo 6, 14 de diciembre de 2015. 
    
    //- p.mb-3 La planeación puede tener varias perspectivas pero, en síntesis, obedece al rumbo hacia el que se dirige algo, bien sea a nivel empresarial o incluso, en la vida personal; es el horizonte proyectado y, para ilustrar un poco mejor el concepto, podría pensarse en los siguientes cuestionamientos:<span class='lila text-black'> ¿qué se quiere? ¿Quiénes somos? ¿Para dónde vamos?</span> La planeación impulsa para optimizar recursos, prever situaciones, reducir costos e incrementar la productividad, a partir de la concentración y canalización de esfuerzos por un mismo fin, además de ser un escenario base para una posterior evaluación y retroalimentación del proceso y de los logros obtenidos.
    p.mb-5 Para profundizar la normativa vigente, lo invitamos a revisar:
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-6
        a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/publicaciones-ctcp/compilaciones-normativas/anexo-6-del-dur-2420-de-2015-normas-sobre-sistema-/compilacion-anexo-6-a-diciembre-31-de-2020-normas" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> El anexo 6 del Decreto único reglamentario 2420.

      .col-md-6.col-lg-6
        a.anexo.mb-4.mb-lg-0(href="https://www.ctcp.gov.co/CMSPages/GetFile.aspx?guid=ccb355bb-d8f6-48d2-8d9d-d44e924a8aed" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> El concepto emitido por la junta central de contadores 2021-0409.

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Documentos internos y externos

    p.mb-3 Los documentos internos son propios de manejo y uso de la organización; les permite llevar un control interno y son usados de manera frecuente, mientras que los documentos externos, son utilizados por la organización o por terceros.
    p.mb-5 A continuación, conozca los más comunes.

    h2.mb-5.text-center Documentos Contables



    .row.justify-content-center.mb-5
      .col-md-5.col-lg-5
        h3.mb-5.text-center Internos
        p.mb-5.text-center Son propios de manejo y uso de la organización y le permiten llevar un control interno; son utilizados de manera frecuente.
      .col-md-7.col-lg-7

        ImagenInfografica.color-primario.nar.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-2-.svg')


          .tarjeta.color-secundario--borde.fnd-3.p-3(x="14.1%" y="21.5%" numero="+")
            .h5.mb-2 Comprobantes contables<br>(de ingreso o egreso)
            p Respaldan las entradas y salidas de dinero de la organización, deben diligenciarse de manera adecuada evitando tachones o enmendaduras y se les anexa el documento con el que se soporta la entrada o la salida. Ejemplo: factura, consignación.
 
          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="39.5%" y="78%" numero="+")
            .h5.mb-2 Comprobantes de nómina
            p Son los que respaldan el pago mensual de los empleados; se incluyen los días trabajados, horas extras, recargos y todos los descuentos que acontezcan por pagos de seguridad social, pensión y demás descuentos autorizados.
          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="64.5%" y="22%" numero="+")
            .h5.mb-2 Tarjetas de inventarios (Kardex)
            p Actualmente, muchas empresas lo realizan de manera digital; estos documentos sirven para llevar, de forma organizada, el control de existencias de mercancías y es diligenciado por el encargado de esta dependencia; debe ser actualizado diariamente. 

          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="87.4%" y="76%" numero="+")
            .h5.mb-2 Recibos de manejo interno
            p Son los que la empresa utiliza para salidas o entradas pequeñas de dinero, como la caja menor.


    .row.justify-content-center.mb-5
      .col-md-5.col-lg-5
        h3.mb-5.text-center Externos
        p.mb-5.text-center Son propios de manejo y uso de la organización y le permiten llevar un control interno; son utilizados de manera frecuente.
      .col-md-7.col-lg-7

        ImagenInfografica.color-primario.nar.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-3-.svg')


          .tarjeta.color-secundario--borde.fnd-3.p-3(x="7.5%" y="13%" numero="+")
            .h5.mb-2 Factura cambiaria 
            p La factura cambiaria es un título valor y en ella se registra la compra y la venta de mercancías.
          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="35.3%" y="13%" numero="+")
            .h5.mb-2 Equivalente de factura
            p Es el documento usado para acreditar la compra de un bien o servicio; lo debe generar el comprador cuando hace transacciones con un proveedor que no está obligado a expedir factura de venta.
 
          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="62.5%" y="13%" numero="+")
            .h5.mb-2 Extractos bancarios 
            p Documentos expedidos por el banco, en donde se registra el resumen de las transacciones realizadas en la cuenta o cuentas de la empresa; el banco la remite en físico o en digital
          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="90%" y="13%" numero="+")
            .h5.mb-2 Notas contables
            p Cuando una organización ejecuta algún ajuste o corrección, realiza una nota contable que puede ser de débito (a favor de la empresa) o de crédito (a favor de un cliente o acreedor).
          .tarjeta.color-secundario--borde.fnd-3.p-3(x="20.4%" y="87%" numero="+")
            .h5.mb-2 Factura electrónica
            p Tiene la misma validez que la factura de papel; soporta las transacciones de la organización.
          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="48.5%" y="87%" numero="+")
            .h5.mb-2 Consignaciones
            p Son documentos expedidos por los bancos; soportan para la empresa transacciones de salida o entrada de dinero a sus propias cuentas.
          .tarjeta.color-secundario--borde.fnd-3.p-3.p-3(x="77%" y="87%" numero="+")
            .h5.mb-2 Declaraciones fiscales
            p Hace referencia a las declaraciones que debe presentar la empresa ante la Dirección de Impuestos y Aduanas Nacionales, DIAN, de acuerdo con las obligaciones fiscales de la empresa. 
    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Documentos extra contables y títulos valores

    p.mb-3 Los documentos extracontables, generan una ganancia o utilidad de manera previa a la transacción comercial. No causan registro en la contabilidad y son meramente informativos. 

    p.mb-5 Algunos documentos no contables son:

    .row.mb-5
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.color-acento-contenido.p-4.h-100
          figure.mb-5
            img.img-100(src='@/assets/curso/temas/tema2/img-4.svg')

          h3.text-center Cotización:
          p.text-center Documento usado por las organizaciones para dar información de sus productos y servicios, las características ofrecidas y aquellas que se consideren necesarias de suministrar al cliente.    
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.color-acento-contenido.p-4.h-100
          figure.mb-5
            img.img-100(src='@/assets/curso/temas/tema2/img-4.svg')

          h3.text-center Pedido:
          p.text-center Este documento se usa para poder registrar los encargos de bienes o servicios.
      .col-lg-4.mb-4
        .tarjeta.tarjeta-avatar-slide.color-acento-contenido.p-4.h-100
          figure.mb-5
            img.img-100(src='@/assets/curso/temas/tema2/img-4.svg')

          h3.text-center Remisión: 
          p.text-center Documento soporte de la entrega de mercancías, en el que se indican las cantidades que han salido de forma física del inventario y han sido entregadas al cliente, pero no han sido facturadas.     

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Diligenciamiento
    p.mb-5 Todo soporte o documento contable debe contener unos parámetros mínimos para su diligenciamiento, entre los que se debe tener presente los siguientes:     

    .row.justify-content-center
      .col-md-10.col-lg-8

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-5 Nombre/razón social del comprador y del vendedor.
            br
            br
            
            p
              ul.lista-ul--color.nar.mt-5
                li 
                  i.fas.fa-check
                  | Identificación o Nit.
                li 
                  i.fas.fa-check
                  | Fecha de expedición.
                li 
                  i.fas.fa-check
                  | Fecha de vencimiento.
                li 
                  i.fas.fa-check
                  | Tipo de documento y consecutivo.
                li 
                  i.fas.fa-check
                  | Descripción detallada del tipo de transacción.
                li 
                  i.fas.fa-check
                  | Valor en letras y números.



    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Libros contables 

    .row.justify-content-between
      .col-md-6.col-lg-4

          figure
            img(src='@/assets/curso/temas/tema2/img-6.png')

      .col-md-6.col-lg-8
        p.mb-5 Según el Código de Comercio: “Todo comerciante conformará su contabilidad, libros, registros contables, inventarios y estados financieros en general, a las disposiciones de este Código y demás normas sobre la materia” (Código de Comercio, Art. 48).
        p.mb-5 Los libros de comercio para los efectos legales, se entenderán como los que determine la ley como obligatorios y los auxiliares necesarios para el completo entendimiento de aquellos (Código de Comercio, Art 49).



    .row.justify-content-center.mb-5
      .col-md-9.col-lg-10
        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h2.text-regular Los libros podrán ser de hojas removibles o formarse por series continuas de tarjetas, siempre que unas y otras estén numeradas, puedan conservarse archivadas en orden y aparezcan autenticadas conforme con Ia reglamentación del gobierno. Los libros podrán llevarse en archivos electrónicos, que garanticen, de forma ordenada, Ia inalterabilidad, Ia integridad y seguridad de Ia información, así como su conservación. El registro de los libros electrónicos se adelantará, de acuerdo con Ia reglamentación que expida el Gobierno Nacional. 


            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h3.mb-0 (Código de Comercio, Art 56)


    p.mb-5 Para dar cumplimiento, las empresas deben registrar ante cámaras de comercio, por disposición del artículo 175 del Decreto Ley 019 de 2012:
    .row.justify-content-center.mb-5

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.f-w
          img.mb-5.img-100(src='@/assets/curso/temas/tema2/img-7.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.fnd-2.full-w
            br
            .p-4.px-5
              p.text-black.text-center Libro de actas de asamblea y junta de socios. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.mb-5.img-100(src='@/assets/curso/temas/tema2/img-7.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.fnd-2
            br
            .p-4.px-5
              p.text-black.text-center Libro de registro de accionistas para sociedades por acciones.  
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.mb-5.img-100(src='@/assets/curso/temas/tema2/img-7.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.fnd-2
            br
            .p-4.px-5
              p.text-black.text-center Libro de registro de socios para sociedades de responsabilidad limitada y asimiladas.               

    ul.lista-ul--color.mor.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Formatos y comprobantes
    p.mb-5 Los libros de contabilidad deben seguir los principios básicos de contabilidad, lo que indica que deben ser diligenciados como fiel copia de las transacciones económicas, que sirvan como medio de prueba y, en caso de ser solicitados por las autoridades competentes, estén disponibles; en caso de no llevarse a efecto el debido proceso, se somete a sanciones fiscales.

    .row.justify-content-center 
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-8

          p “El comerciante deberá dejar copia fiel de la correspondencia que dirija, en relación con los negocios, por cualquier medio que asegure la exactitud y duración de la copia. Asimismo, conservará la correspondencia que reciba en relación con sus actividades comerciales, con anotación de la fecha de contestación o de no haberse dado respuesta”. (Artículo 54 Código de Comercio) 

    .row.justify-content-center 
      .col-lg-8
        .cajon.color-primario.p-4.mb-4.fnd-1
          p “El comerciante conservará archivados y ordenados los comprobantes de los asientos de sus libros de contabilidad, de manera que en cualquier momento se facilite verificar su exactitud”.  (Artículo 55 Código de Comercio).

    p.mb-5 En conformidad con lo establecido por el Artículo 29 de La ley 2195 de 2022, se consideran prohibiciones las siguientes:   

    .row.justify-content-center
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-10.mb-4.mb-md-0
              p Alterar en los asientos, el orden o la fecha de las operaciones a que estos se refieren.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
          .row
            .col-md-2
              figure.mb-3
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
            .col-md-10.mb-4.mb-md-0
              p.text-left Dejar espacios que faciliten intercalaciones o adiciones en el texto de los asientos, o a continuación de los mismos.

          .row
            .col-md-10.mb-4.mb-md-0
              p Hacer interlineaciones, raspaduras o correcciones en los asientos. Cualquier error u omisión se salvará con un nuevo asiento en la fecha en que se advirtiere.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
          .row
            .col-md-2
              figure.mb-3
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
            .col-md-10.mb-4.mb-md-0
              p.text-left Borrar o tachar en todo, o en parte, los asientos.

          .row
            .col-md-10.mb-4.mb-md-0
              p Arrancar hojas, alterar el orden de las mismas, mutilar los libros, o alterar los archivos electrónicos.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
          .row
            .col-md-2
              figure.mb-3
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')          
            .col-md-10.mb-4.mb-md-0
              p.text-left Crear cuentas en los libros contables, que no enumeren los comprobantes y soportes correspondientes.

          .row
            .col-md-10.mb-4.mb-md-0
              p No asentar en los libros contables, las operaciones efectuadas.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
          .row
            .col-md-2
              figure.mb-3
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')          
            .col-md-10.mb-4.mb-md-0
              p.text-left Llevar doble contabilidad, es decir, llevar dos o más libros iguales, en los que se registren, de forma diferente, las mismas operaciones, o cuando se tengan distintos comprobantes sobre los mismos actos.

          .row
            .col-md-10.mb-3.mb-md-0
              p Registrar en los libros contables, operaciones de manera inadecuada, gastos inexistentes, o pasivos sin la identificación correcta.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
          .row
            .col-md-2
              figure.mb-3
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
            .col-md-10.mb-4.mb-md-0
              p.text-left Utilizar documentos falsos que sirvan de soporte a la contabilidad.

          .row
            .col-md-10.mb-4.mb-md-0
              p Abstenerse de revelar partidas en los estados financieros, sin la debida correspondencia con las cuentas asentadas en los libros de contabilidad.
            .col-md-2
              figure
                img.img-50(src='@/assets/curso/temas/tema2/img-7-.svg')
          

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Títulos valores

    p.mb-5 Estos documentos poseen un valor intrínseco que representa un derecho para quien lo porta y en el que se ha establecido un plazo para su ejecución o cambio. 

    .row.justify-content-center.mb-5
      .col-md-8.col-lg-9
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.gr-1
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 El Código del Comercio en el Artículo 622 expresa que: 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.nar
                  li 
                    i.fas.fa-check
                    | Son negociables.
                  li 
                    i.fas.fa-check
                    | Presentan autonomía para quien lo porta.
                  li 
                    i.fas.fa-check
                    | Se presume de su autenticidad.
                  li 
                    i.fas.fa-check
                    | Podrá ser endosable.
                  li 
                    i.fas.fa-check
                    | El portador puede ejercer el derecho contenido allí.
                  li 
                    i.fas.fa-check
                    | Lugar de cumplimiento.
                  li 
                    i.fas.fa-check
                    | La firma de quien lo crea.

    p.mb-5 De acuerdo con la normativa vigente, toda empresa puede optar por emitir cualquiera de los títulos que ella contempla y, por lo tanto, se han clasificado de la siguiente manera:

    .row.m-0.align-items-center.justify-content-between.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img-8.svg')
      .col-lg-9
        TabsA.color-acento-contenido.grs
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Títulos <br>nominativos")

            p Se exige la inscripción de un tenedor, quien es el gozante de los derechos que este contempla, y la única persona que se reconocerá como tenedor legítimo.
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Títulos<br> a la orden")

            p Estos son expedidos a la orden de una persona específica o, en caso de transmitirse el documento, a favor de quien aparezca designado en este último registro.
          .tarjeta.color-acento-botones.fnd-1.p-4(titulo="Títulos<br> al portador")

            p En este tipo de título, a diferencia de los anteriores, la persona o entidad que lo porte es quien goza de los derechos que representa; la simple exhibición del título legitimará al portador y su tradición se producirá por la sola entrega.          

    p.mb-5 De acuerdo con la normativa vigente, toda empresa puede optar por emitir cualquiera de los títulos que ella contempla y, por lo tanto, se han clasificado de la siguiente manera:   

    .row.justify-content-center.mb-5
      .col-md-8.col-lg-9
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.gr-1.c-v
          .row.m-0.align-items-center.justify-content-between
            .col-lg-6.mb-4.mb-lg-0
              h2.mb-0 Los títulos más empleados en las organizaciones son:
            .col-lg-6
              .bloque-texto-a__texto.p-4
                ul.lista-ul--color.nar
                  li 
                    i.fas.fa-check
                    | Letra de cambio
                  li 
                    i.fas.fa-check
                    | Pagaré
                  li 
                    i.fas.fa-check
                    | Cheque
                  li 
                    i.fas.fa-check
                    | Factura cambiaria
                  li 
                    i.fas.fa-check
                    | Bonos
                  li 
                    i.fas.fa-check
                    | Acciones

</template>

<script>
export default {
  name: 'Tema2',
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
