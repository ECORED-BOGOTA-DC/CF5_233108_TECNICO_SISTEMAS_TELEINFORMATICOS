<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Antes de adentrarse en el diseño de una red computacional, es fundamental establecer una clara comprensión de su naturaleza. En tiempos pasados, el término "red" se refería simplemente a un conjunto de líneas en serie que conectaban terminales poco inteligentes a computadoras centrales. Otros ejemplos destacados, incluían la red telefónica de voz y la red de televisión por cable, diseñadas para transmitir señales de vídeo. Estas redes tienen en común su especialización en el manejo de un tipo específico de datos (tales como pulsaciones, voz o vídeo) y su conexión a dispositivos diseñados con un propósito particular, como terminales, receptores manuales y televisores.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/123456789" title="Comunicación de marketing digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





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
