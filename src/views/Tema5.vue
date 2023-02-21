<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Obligaciones tributarias de las empresas 

    .row.justify-content-between
      .col-md-6.col-lg-4
          figure.mb-5
            img(src='@/assets/curso/temas/tema5/img-1.png')

      .col-md-6.col-lg-8
        p.mb-5 Una obligación tributaria es aquella que parte de las necesidades del Estado para que todos contribuyan con el gasto público. El incumplimiento de este tipo de obligaciones acarrea sanciones como multas o suspensión de operaciones.
    
    p.mb-5 Lo invitamos a ver el siguiente video, para aprender sobre los impuestos y su historia.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FlwSYvvbe1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    ul.lista-ul--color.mor
      li 
        i.fas.fa-square
        | 
        h3.text-black Tipos de impuestos
    p.mb-5 En Colombia existen tres tipos de impuestos que, a su vez, se dividen según los recaudadores de impuestos a nivel nacional, departamental o municipal. 

    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10
        .tarjeta.p-3.mb-5.fnd-2
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tipos de impuestos
                  p Para conocer estos impuestos, lo invitamos a leer el documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Tipos de impuesto.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

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
