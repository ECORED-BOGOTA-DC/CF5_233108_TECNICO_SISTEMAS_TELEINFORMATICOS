<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Componentes de red

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Una red debe brindar <b style= 'color:#5573C6;'>conectividad entre un conjunto de computadoras</b>. En ocasiones, es suficiente construir una red limitada que conecte únicamente unas pocas máquinas seleccionadas. De hecho, por razones de privacidad y seguridad, muchas redes privadas (corporativas) tienen el objetivo explícito de limitar el conjunto de máquinas conectadas. Por el contrario, otras redes (de las que Internet es el principal ejemplo), están diseñadas para crecer de manera que les permita el potencial de conectar todos los ordenadores del mundo. Se dice que un sistema diseñado para soportar el crecimiento hasta un tamaño arbitrariamente grande es escalable.

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p A continuación, se realiza una descripción de los <b style= 'color:#5573C6;'>componentes de la red de datos</b>, como se hace una implementación entre dos equipos o host, esto se hace a través de una simulación. Para finalizar se describen algunos tipos de medios de transmisión. El objetivo es presentar una visión de cómo es el funcionamiento de una red de datos.

    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 2.1 Definición de los componentes de una red de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imágen decorativa')

      .col-lg-8
        .cajon.cajon-amarillo.p-4.mb-3
          p.mb-0 Para comprender mejor los requisitos de la conectividad, tenemos que ver más de cerca cómo se conectan los computadores en una red. La conectividad de red se presenta en varios niveles. Estos incluyen el nivel más bajo, donde dos o más computadoras se conectan directamente mediante cables o fibra óptica, y el nivel más alto, donde las redes se extienden a través de múltiples enlaces físicos y nodos, incluyendo conexiones inalámbricas.

        p A veces, un nodo es una pieza más especializada de hardware en lugar de un ordenador, pero pasamos por alto esa distinción a efectos de esta discusión. Los enlaces físicos se limitan a veces a un par de nodos (se dice que un enlace es punto a punto), mientras que en otros casos más de dos nodos pueden compartir un único enlace físico (se dice que un enlace es de acceso múltiple). Los enlaces inalámbricos, como los proporcionados por las redes celulares y las redes Wifi, son una clase cada vez más importante de enlaces de acceso múltiple. A menudo, los enlaces de acceso múltiple tienen un tamaño limitado, tanto en lo que respecta a la distancia geográfica que pueden cubrir como al número de nodos que pueden conectar.

    p.mb-5 Si las redes de computadores se limitaran a situaciones en las que todos los nodos estuvieran conectados directamente entre sí, a través de un medio físico común, las redes estarían muy limitadas en cuanto al número de ordenadores que podrían conectar, o el número de cables que saldrían de la parte trasera de cada nodo se volvería rápidamente inmanejable y muy costoso. Afortunadamente, la conectividad entre dos nodos no implica necesariamente una conexión física directa entre ellos. Considere el ejemplo siguiente de cómo un conjunto de ordenadores puede estar conectado indirectamente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 10.
          span Componentes de redes de datos
      .col-lg-8      
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imágen decorativa')

    p.mb-5 La figura 10 muestra un conjunto de nodos, cada uno de los cuales está conectado a uno o más enlaces punto a punto. Los nodos que están conectados al menos dos enlaces ejecutan un software que reenvía los datos recibidos en un enlace a otro. Si se organizan de forma sistemática, estos nodos de reenvío forman una red conmutada. Existen numerosos tipos de redes conmutadas, de los cuales los dos más comunes son:

    .row.justify-content-center.align-items-center
      .col-lg-10.mb-3
        .tarjeta.color-primario.p-2.mb-2
          .tarjeta.color-blanca--borde.p-2
            h4.text-center.text-white.mb-2 Conmutación de circuitos

        .row.justify-content-center.align-items-center
          .col-lg-4.mb-2
            .tarjeta.tarjeta-borde-azul.p-3.px-4
              p.mb-0.text-center Es relevante en ciertos escenarios, especialmente en redes ópticas de alta capacidad.

          .col-lg-4.mb-2
            .tarjeta.tarjeta-borde-azul.p-3.px-4
              p.mb-0.text-center.mt-2 Es la más empleada en el sistema telefónico.

          .col-lg-4.mb-2
            .tarjeta.tarjeta-borde-azul.p-3.px-4
              p.mb-0.text-center Se establece un camino dedicado y exclusivo para la comunicación entre dos nodos en la red.

    .row.justify-content-center.align-items-center.mb-3
      .col-4.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema2/flecha.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-3
        .tarjeta.color-acento-contenido.p-2.mb-2
          .tarjeta.color-blanca--borde2.p-2
            h4.text-center.mb-2 Conmutación de paquetes

        .row.justify-content-center.align-items-center
          .col-lg-4.mb-2
            .tarjeta.tarjeta-borde-verde.p-3.px-4
              p.mb-0.text-center Estos bloques de datos corresponden a alguna pieza de datos de la aplicación, como un archivo, un trozo de correo electrónico o una imagen.

          .col-lg-4.mb-2
            .tarjeta.tarjeta-borde-verde.p-3.px-4
              p.mb-0.text-center.mt-4 Es utilizada en  las redes informáticas. 

          .col-lg-4.mb-2
            .tarjeta.tarjeta-borde-verde.p-3.px-4
              p.mb-0.text-center.mt-2 Los nodos de una red de este tipo envían bloques discretos de datos entre sí.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imágen decorativa')

      .col-lg-8
        p Las <b>redes de conmutación</b> de paquetes suelen utilizar una estrategia denominada de <b style= 'color:#5573C6;'>almacenamiento y reenvío</b>. Como su nombre indica, cada nodo de una red de almacenamiento y reenvío recibe primero un paquete completo a través de algún enlace, lo almacena en su memoria interna y luego lo reenvía completo al siguiente nodo. En cambio, una red de conmutación de circuitos establece primero un circuito dedicado a través de una secuencia de enlaces y luego permite al nodo de origen enviar un flujo de bits a través de este circuito a un nodo de destino. La principal razón para utilizar la conmutación de paquetes en lugar de la conmutación de circuitos en una red informática es la <b style= 'color:#5573C6;'>eficiencia</b>.

        .cajon.color-acento-contenido.p-4
          p.mb-0 La nube de la Figura 10, distingue entre los nodos del interior que implementan la red (suelen llamarse conmutadores, y su función principal es <b style= 'color:#5573C6;'>almacenar y reenviar paquetes</b>) y los nodos del exterior de la nube que utilizan la red (suelen llamarse hosts, y <b style= 'color:#5573C6;'>dan soporte a los usuarios y ejecutan programas de aplicación</b>). También hay que tener en cuenta que la nube de la figura 10, es uno de los iconos más importantes de las redes informáticas. En general, utilizamos una nube para denotar cualquier tipo de red, ya sea un único enlace punto a punto, un enlace de acceso múltiple o una red conmutada. 

    p.mb-5 La figura 10, muestra una segunda forma de conectar indirectamente un conjunto de ordenadores. En esta situación, un conjunto de redes independientes (nubes) están interconectadas para formar una red interna, o internet para abreviar. Adoptamos la convención de Internet de referirnos a una red genérica de redes como Internet con i minúscula, y a la Internet TCP/IP actualmente operativa como Internet con I mayúscula. Un nodo que está conectado a dos o más redes se denomina comúnmente <b style= 'color:#5573C6;'>router o puerta de enlace</b>, y desempeña prácticamente el mismo papel que un conmutador: reenvía mensajes de una red a otra. Hay que tener en cuenta que una Internet puede considerarse como otro tipo de red, lo que significa que una Internet puede construirse a partir de una interconexión de redes internas. Así, podemos construir recursivamente redes de tamaño arbitrario interconectando nubes para formar otras más grandes. Se puede argumentar razonablemente que esta idea de interconectar redes muy diferentes fue la innovación fundamental de Internet y que el exitoso crecimiento de Internet hasta alcanzar un tamaño global y miles de millones de nodos fue el resultado de algunas decisiones de diseño muy acertadas por parte de los primeros arquitectos de Internet.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p El hecho de que un conjunto de hosts esté conectado directa o indirectamente entre sí no significa que lograr una conectividad de host a host. El último requisito es que cada nodo debe ser capaz de decir <b>con cuál de los otros nodos de la red quiere comunicarse.</b> Esto se hace asignando una dirección a cada nodo. Una <b style= 'color:#5573C6;'>dirección es una cadena de bytes que identifica a un nodo</b>; es decir, la red puede utilizar la dirección de un nodo para distinguirlo de los demás nodos conectados a la red. Cuando un nodo de origen quiere que la red entregue un mensaje a un determinado nodo de destino, especifica la dirección del nodo de destino. Si los nodos emisores y receptores no están conectados directamente, los conmutadores y enrutadores de la red utilizan esta dirección para decidir cómo reenviar el mensaje hacia el destino. El proceso de determinar sistemáticamente cómo reenviar los mensajes hacia el nodo de destino basándose en su dirección se denomina <b style= 'color:#5573C6;'>enrutamiento</b>. Ver figura 11.

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imágen decorativa')






























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
