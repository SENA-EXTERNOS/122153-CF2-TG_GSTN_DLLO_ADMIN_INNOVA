<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.bl-izq
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/portada/img-intro-.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        span.text-black.bb1 Apreciado aprendiz, bienvenido a este componente formativo,
        | donde aprenderá a interpretar las políticas financieras y contables, así como también a procesar los documentos generados por las actividades financieras; estudiará cómo se originan las operaciones en el sistema de información contable, todo esto basado en las políticas y la normativa de la organización.
        br
        br
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    br 
    br

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zkB2ShH5QNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
