<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 5
      h1 Inventarios de activos de red

    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 <b style="color: #5573C6">¿Qué es una herramienta de gestión y supervisión de redes?</b>
          <br>
          p Las herramientas de gestión y supervisión de redes se definen como plataformas de <i>software</i> locales o basadas en la nube que se conectan con los componentes de la red y otros sistemas de TI para medir, analizar e informar sobre la topología, el rendimiento y el estado de la red. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        .cajon.cajon-amarillo.p-4
          p La red constituye la columna vertebral de la infraestructura de una empresa moderna. Conecta múltiples sitios operativos, dispositivos y sistemas para mantener en funcionamiento las operaciones en línea. Todo, desde su presencia empresarial basada en la web hasta la colaboración virtual y el desarrollo de aplicaciones. Una herramienta de gestión y supervisión de la red visualiza la topología de la red mediante mapas interactivos, supervisa las métricas críticas en tiempo real y genera informes ad hoc y programados para ofrecer una conectividad ininterrumpida. 

        p.mt-3 Existen diversas razones por las cuales las empresas deciden invertir en la gestión y supervisión de su red. Entre estas, destacan la optimización del ancho de banda para un mejor rendimiento de aplicaciones, la mejora de la seguridad, la reducción de costes operativos y la capacidad de escalar sin problemas. A continuación, exploraremos algunas de estas motivaciones en el siguiente recurso informativo.
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img2.svg', alt='imagen decorativa')

    .row.justify-content-center.align-items-center.mt-5
      ImagenInfograficaB.color-acento-botones
        template(v-slot:imagen)
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/img3.png', alt='Texto que describa la imagen')
      
        div(x="20.2%" y="57.8%" tooltip="tooltip de max 35 caracteres" numero="1")
          h5 Optimización del ancho de banda
          p Las empresas pueden supervisar cómo los diferentes dispositivos, usuarios, aplicaciones y hosts utilizan el ancho de banda disponible en la red. Pueden aplicar políticas para optimizar el uso del ancho de banda de cada entidad para reducir la presión general sobre la red. 

        div(x="45.6%" y="32%" tooltip="tooltip de max 35 caracteres" numero="2")
          h5 Mejoras en rendimiento de aplicaciones
          p Dependiendo de su entorno, las empresas pueden determinar qué aplicaciones tienen un buen rendimiento y requieren una infraestructura de red configurada de forma diferente. Pueden alinear la configuración de la red de manera que mejore el rendimiento de las aplicaciones. 

        div(x="61.7%" y="30%" tooltip="tooltip de max 35 caracteres" numero="3")
          h5 Mayor seguridad
          p La gestión y la supervisión de la red pueden revelar anomalías en tiempo real. En algunos casos, estas anomalías indican un comportamiento sospechoso de los usuarios o un <i>software</i> malicioso que ha traspasado el perímetro de la red. 

        div(x="62.6%" y="68.5%" tooltip="tooltip de max 35 caracteres" numero="4")
          h5 Reducción de costes
          p Las empresas pueden vigilar sus inversiones en la red, el rendimiento de las aplicaciones y los resultados empresariales correspondientes para identificar cualquier ineficiencia en el entorno. Al eliminar estas ineficiencias, pueden desbloquear el ahorro de costes. 

        div(x="74.9%" y="56.9%" tooltip="tooltip de max 35 caracteres" numero="5")
          h5 Escalabilidad sin fisuras
          p La gestión de la red correctamente gobernada impulsará la estandarización entre los puntos finales conectados, los usuarios y los componentes de la red. Esta estandarización facilita el escalado de las redes empresariales según las necesidades y el despliegue de las políticas de red sin fragmentación.

    .row.justify-content-center.align-items-center.mt-5
      p En consecuencia, las herramientas de gestión y supervisión de la red son fundamentales para las funciones de TI de las empresas. Observe  las características clave de estas herramientas que ayudan a conseguir las ventajas mencionadas. 

      SlyderF(columnas="col-lg-6 col-xl-4").bg1-tema5
        .tarjeta.color-acento-botones.p-4.w_t_s
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema5/img5.svg' alt='AvatarTop')
          h5.text-center Análisis detallados
          p.text-center Los análisis y los informes de datos son el núcleo de la supervisión de la red. La herramienta que elija debe evaluar el rendimiento de la red en función de métricas clave como la latencia y la velocidad
      
        .tarjeta.color-acento-botones.p-4.w_t_s
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema5/img6.svg' alt='AvatarTop')
          h5.text-center Amplia compatibilidad
          p.text-center La herramienta debe ser compatible con la mayor variedad posible de redes y componentes de infraestructura informática. Esto incluye aplicaciones de <i>software</i> y dispositivos de red basados en hardware (por ejemplo, un cortafuegos físico o un dispositivo de seguridad). 
      
        .tarjeta.color-acento-botones.p-4.w_t_s
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema5/img7.svg' alt='AvatarTop')
          h5.text-center Cuadros de mando racionalizados
          p.text-center Muestran diariamente información de salud y rendimiento de red. Concisos y comprensibles, contrastan con informes detallados y extensos, facilitando una visualización eficiente.
      
        .tarjeta.color-acento-botones.p-4.w_t_s
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema5/img8.svg' alt='AvatarTop')
          h5.text-center Alertas personalizables
          p.text-center La herramienta de gestión y monitorización de la red debe enviar alertas cada vez que se produzca un evento inusual en la red, se supere un umbral o se desconecte un dispositivo. Debe personalizar las alertas para recibir sólo la información que desee. 
      
        .tarjeta.color-acento-botones.p-4.w_t_s
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema5/img9.svg' alt='AvatarTop')
          h5.text-center Múltiples interfaces de usuario
          p.text-center Permite a profesionales de TI supervisar redes en movimiento, incluso remotamente. Adaptado al trabajo remoto e híbrido, facilita gestión de operaciones mediante el uso de dispositivos móviles como teléfonos inteligentes y tabletas.
      

    separador
    #t_5_1.titulo-segundo.color-acento-botones
        h2 5.1 Sistemas de información de inventarios          
    
    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/bg1.png', alt='Imágen decorativa')    

      .col-lg-11
        .tarjeta.tarjeta-gris-degrade.p-3
          p.mb-0 El mercado de los sistemas de gestión de redes se valoró en 6.700 millones de dólares en 2020, y se espera que supere los 12.000 millones de dólares en 2027, según los informes de Statista. Necesita las mejores herramientas de gestión y monitorización de redes para que su empresa obtenga una visión precisa, completa, en tiempo real y procesable de su red. Aquí están algunas de las mejores herramientas que pueden ayudarle a conseguirlo.  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
        .tarjeta.color-primario.p-3.mb-5.bg2-tema5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/icono-pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-small Anexo. Herramientas para información de inventarios.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    separador
    #t_5_2.titulo-segundo.color-acento-botones
        h2 5.2 Tipos de bases de datos para inventarios

    .row.justify-content-center.align-items-center
      p <b style="color: #5573C6">¿Qué es una base de datos de inventario?</b>
      p La base de datos de inventario es un depósito centralizado para todos los datos de inventario de una organización. Una base de datos para el sistema de gestión de inventarios permite equilibrar los costos y los riesgos del inventario con las métricas de rendimiento del inventario deseadas. Algunos de ellos son:

    .row.justify-content-center.align-items-center.bg3-tema5
      .col-12.p-4
        .tarjeta.tarjeta--azul.p-4.tarjeta-azul-moify
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-4
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema5/img10.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p <b style="color: #5573C6">Gestión de la base de datos de inventario</b>

                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check-circle
                    | SKU basados en plantillas con parámetros definidos por usuarios (lote, precio, proveedor, etc.).

                  li 
                    i.fas.fa-check-circle
                    | Carga y procesamiento de datos de inventario por lotes.


                  li 
                    i.fas.fa-check-circle
                    | Detección y fusión automática de datos duplicados.


                  li 
                    i.fas.fa-check-circle
                    | Catalogación de artículos basada en reglas.


                  li 
                    i.fas.fa-check-circle
                    | Actualización automática a medida que aparecen nuevos datos relevantes.


                  li 
                    i.fas.fa-check-circle
                    | Registros de eventos relacionados con el inventario (por ejemplo, nuevo inventario añadido, nuevo pedido realizado).

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-4
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema5/img11.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p <b style="color: #5573C6">Almacenamiento de datos de inventario y navegación</b>

                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check-circle
                    | Almacenamiento centralizado.

                  li 
                    i.fas.fa-check-circle
                    | Información general de las SKU.


                  li 
                    i.fas.fa-check-circle
                    | Niveles de inventario actuales.


                  li 
                    i.fas.fa-check-circle
                    | Pedidos de compra.


                  li 
                    i.fas.fa-check-circle
                    | Pedidos de venta.


                  li 
                    i.fas.fa-check-circle
                    | Inventario reservado para pedidos de clientes.

                  li 
                    i.fas.fa-check-circle
                    | Costes de compra y mantenimiento.

                  li 
                    i.fas.fa-check-circle
                    | Soporte para múltiples tipos de datos (contenido textual y numérico, imágenes, datos de sensores RFID y escáneres de códigos de barras, etc.).


            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-4
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema5/img12.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p <b style="color: #5573C6">Control de inventario</b>

                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check-circle
                    | Control en tiempo real de los niveles de inventario en:

                  li 
                    i.fas.fa-check-circle
                    | Múltiples ubicaciones nacionales y extranjeras (almacenes, centros de distribución, instalaciones de fabricación, puntos de venta, etc.).


                  li 
                    i.fas.fa-check-circle
                    | Varias fases de producción (materias primas, productos en curso, productos acabados).


                  li 
                    i.fas.fa-check-circle
                    | Inventario propio y en consignación (para el comercio minorista, la sanidad, etc.)


                  li 
                    i.fas.fa-check-circle
                    | Alertas sobre el inventario de bajo nivel.


                  li 
                    i.fas.fa-check-circle
                    | Valoración automatizada del inventario basada en los métodos FIFO, LIFO, coste medio ponderado y otros.

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-4
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema5/img13.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p <b style="color: #5573C6">Gestión de pedidos de inventario</b>

                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check-circle
                    | Generación automatizada de pedidos de compra activados por puntos de reordenación, fechas determinadas, etc.

                  li 
                    i.fas.fa-check-circle
                    | Creación de pedidos de venta basada en plantillas.


                  li 
                    i.fas.fa-check-circle
                    | Reserva de inventario automatizada para un pedido de cliente.


                  li 
                    i.fas.fa-check-circle
                    | Registro de los detalles de embalaje y envío.


                  li 
                    i.fas.fa-check-circle
                    | Creación y seguimiento de los pedidos de devolución.


            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-4
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema5/img14.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p <b style="color: #5573C6">Informes de inventario</b>

                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check-circle
                    | Cálculo en tiempo real de las métricas esenciales: niveles totales de inventario por ubicación, inventario disponible/bajo, rotación, días de venta de inventario (DSI), etc.

                  li 
                    i.fas.fa-check-circle
                    | Generación de informes programados y ad hoc sobre los KPI de inventario (por período, región, ubicación de almacenamiento, etc.).


                  li 
                    i.fas.fa-check-circle
                    | Plantillas personalizables para informes de inventario, incluyendo discrepancias de inventario, rotación, informes de pedidos pendientes, etc.


            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-4
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema5/img15.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p <b style="color: #5573C6"></b>

                ul.lista-ul--color.fa-ul2
                  li 
                    i.fas.fa-check-circle
                    | Previsión de la demanda basada en las tendencias en varias categorías de inventario.

                  li 
                    i.fas.fa-check-circle
                    | Cálculo asistido por IA de los puntos de reordenación óptimos para cada artículo.


                  li 
                    i.fas.fa-check-circle
                    | Predicción de las fechas de entrega previstas en función del plazo de entrega especificado por un proveedor, el estado del envío, el calendario de días laborables, etc.


                  li 
                    i.fas.fa-check-circle
                    | Optimización del inventario en varios niveles, basada en el análisis de la disponibilidad de existencias.

       
  </template>

<script>
export default {
  name: 'Tema5',
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
