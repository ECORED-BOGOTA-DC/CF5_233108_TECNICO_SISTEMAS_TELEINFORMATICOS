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
        p(data-aos="fade-right") A continuación, se realiza una descripción de los <b style= 'color:#5573C6;'>componentes de la red de datos</b>, como se hace una implementación entre dos equipos o <i>host</i>, esto se hace a través de una simulación. Para finalizar se describen algunos tipos de medios de transmisión. El objetivo es presentar una visión de cómo es el funcionamiento de una red de datos.

    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 2.1 Definición de los componentes de una red de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imágen decorativa')

      .col-lg-8
        .cajon.cajon-amarillo.p-4.mb-3(data-aos="flip-up")
          p.mb-0 Para comprender mejor los requisitos de la conectividad, tenemos que ver más de cerca cómo se conectan los computadores en una red. La conectividad de red se presenta en varios niveles. Estos incluyen el nivel más bajo, donde dos o más computadoras se conectan directamente mediante cables o fibra óptica, y el nivel más alto, donde las redes se extienden a través de múltiples enlaces físicos y nodos, incluyendo conexiones inalámbricas.

        p(data-aos="fade-left") A veces, un nodo es una pieza más especializada de <i>hardware</i> en lugar de un ordenador, pero pasamos por alto esa distinción a efectos de esta discusión. Los enlaces físicos se limitan a veces a un par de nodos (se dice que un enlace es punto a punto), mientras que en otros casos más de dos nodos pueden compartir un único enlace físico (se dice que un enlace es de acceso múltiple). Los enlaces inalámbricos, como los proporcionados por las redes celulares y las redes Wifi, son una clase cada vez más importante de enlaces de acceso múltiple. A menudo, los enlaces de acceso múltiple tienen un tamaño limitado, tanto en lo que respecta a la distancia geográfica que pueden cubrir como al número de nodos que pueden conectar.

    p.mb-5(data-aos="fade-right") Si las redes de computadores se limitaran a situaciones en las que todos los nodos estuvieran conectados directamente entre sí, a través de un medio físico común, las redes estarían muy limitadas en cuanto al número de ordenadores que podrían conectar, o el número de cables que saldrían de la parte trasera de cada nodo se volvería rápidamente inmanejable y muy costoso. Afortunadamente, la conectividad entre dos nodos no implica necesariamente una conexión física directa entre ellos. Considere el ejemplo siguiente de cómo un conjunto de ordenadores puede estar conectado indirectamente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-6
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 10.
          span Componentes de redes de datos
      .col-lg-8      
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Figura que representa los componentes de redes de datos, mostrando un conjunto de nodos, cada uno de los cuales está conectado a uno o más enlaces punto a punto.')

    p.mb-5(data-aos="fade-right") La Figura 10 muestra un conjunto de nodos, cada uno de los cuales está conectado a uno o más enlaces punto a punto. Los nodos que están conectados al menos dos enlaces ejecutan un <i>software</i> que reenvía los datos recibidos en un enlace a otro. Si se organizan de forma sistemática, estos nodos de reenvío forman una red conmutada. Existen numerosos tipos de redes conmutadas, de los cuales los dos más comunes son:

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
        p(data-aos="fade-left") Las <b>redes de conmutación</b> de paquetes suelen utilizar una estrategia denominada de <b style= 'color:#5573C6;'>almacenamiento y reenvío</b>. Como su nombre indica, cada nodo de una red de almacenamiento y reenvío recibe primero un paquete completo a través de algún enlace, lo almacena en su memoria interna y luego lo reenvía completo al siguiente nodo. En cambio, una red de conmutación de circuitos establece primero un circuito dedicado a través de una secuencia de enlaces y luego permite al nodo de origen enviar un flujo de bits a través de este circuito a un nodo de destino. La principal razón para utilizar la conmutación de paquetes en lugar de la conmutación de circuitos en una red informática es la <b style= 'color:#5573C6;'>eficiencia</b>.

        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          p.mb-0 La nube de la Figura 10, distingue entre los nodos del interior que implementan la red (suelen llamarse conmutadores, y su función principal es <b style= 'color:#5573C6;'>almacenar y reenviar paquetes</b>) y los nodos del exterior de la nube que utilizan la red (suelen llamarse <i>hosts</i>, y <b style= 'color:#5573C6;'>dan soporte a los usuarios y ejecutan programas de aplicación</b>). También hay que tener en cuenta que la nube de la Figura 10, es uno de los iconos más importantes de las redes informáticas. En general, utilizamos una nube para denotar cualquier tipo de red, ya sea un único enlace punto a punto, un enlace de acceso múltiple o una red conmutada. 

    p.mb-5(data-aos="fade-right") La Figura 10, muestra una segunda forma de conectar indirectamente un conjunto de ordenadores. En esta situación, un conjunto de redes independientes (nubes) están interconectadas para formar una red interna, o internet para abreviar. Adoptamos la convención de Internet de referirnos a una red genérica de redes como Internet con i minúscula, y a la Internet TCP/IP actualmente operativa como Internet con I mayúscula. Un nodo que está conectado a dos o más redes se denomina comúnmente <b style= 'color:#5573C6;'><i>router</i> o puerta de enlace</b>, y desempeña prácticamente el mismo papel que un conmutador: reenvía mensajes de una red a otra. Hay que tener en cuenta que una Internet puede considerarse como otro tipo de red, lo que significa que una Internet puede construirse a partir de una interconexión de redes internas. Así, podemos construir recursivamente redes de tamaño arbitrario interconectando nubes para formar otras más grandes. Se puede argumentar razonablemente que esta idea de interconectar redes muy diferentes fue la innovación fundamental de Internet y que el exitoso crecimiento de Internet hasta alcanzar un tamaño global y miles de millones de nodos fue el resultado de algunas decisiones de diseño muy acertadas por parte de los primeros arquitectos de Internet.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-right") El hecho de que un conjunto de <i>hosts</i> esté conectado directa o indirectamente entre sí no significa que lograr una conectividad de <i>host</i> a <i>host</i>. El último requisito es que cada nodo debe ser capaz de decir <b>con cuál de los otros nodos de la red quiere comunicarse.</b> Esto se hace asignando una dirección a cada nodo. Una <b style= 'color:#5573C6;'>dirección es una cadena de bytes que identifica a un nodo</b>; es decir, la red puede utilizar la dirección de un nodo para distinguirlo de los demás nodos conectados a la red. Cuando un nodo de origen quiere que la red entregue un mensaje a un determinado nodo de destino, especifica la dirección del nodo de destino. Si los nodos emisores y receptores no están conectados directamente, los conmutadores y enrutadores de la red utilizan esta dirección para decidir cómo reenviar el mensaje hacia el destino. El proceso de determinar sistemáticamente cómo reenviar los mensajes hacia el nodo de destino basándose en su dirección se denomina <b style= 'color:#5573C6;'>enrutamiento</b>. Ver figura 11.

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-6
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 11.
          span Concepto nube
      .col-lg-8      
        figure
          img(src='@/assets/curso/temas/tema2/img6.svg', alt='Figura que representa el concepto de nube, el cual tiene que ver con las conexión de hosts.')

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img7.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4(data-aos="flip-down")
          p.mb-0 En esta introducción al direccionamiento y al encaminamiento se ha supuesto que el nodo origen quiere enviar un mensaje a un solo nodo destino (<b><i>unicast</i></b>). Aunque éste es el escenario más común, también es posible que el nodo fuente quiera difundir un mensaje a todos los nodos de la red. O bien, un nodo fuente puede querer enviar un mensaje a algún subconjunto de los demás nodos pero no a todos, situación que se denomina <b style= 'color:#5573C6;'>multidifusión</b>. Por lo tanto, además de las direcciones específicas de los nodos, otro requisito de una red es que soporte direcciones de <b style= 'color:#5573C6;'>multidifusión y de difusión</b>. 

    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 2.2 Implementación de una red de datos local

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Arquitectura por capas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Antes de intentar organizar nuestras ideas sobre la arquitectura de Internet, busquemos una analogía humana. En realidad, tratamos con sistemas complejos todo el tiempo en nuestra vida cotidiana. Imagínese que alguien le pide que describa, por ejemplo, el sistema de una compañía aérea. ¿Cómo encontraría la estructura para describir este complejo sistema que cuenta con agentes de venta de billetes, revisores de equipaje, personal de puerta de embarque, pilotos, aviones, control de tráfico aéreo y un sistema mundial de encaminamiento de aviones? Una forma de describir este sistema podría ser la serie de acciones que usted realiza (o que otros realizan por usted) cuando vuela en una compañía aérea. Usted compra su billete, factura sus maletas, va a la puerta de embarque y, finalmente, sube al avión. El avión despega y se dirige a su destino. Después de que el avión aterrice, usted desciende en la puerta de embarque y reclama sus maletas. 

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img9.svg', alt='Imágen decorativa')

      .col-lg-10(data-aos="fade-left")
        .tarjeta-azul2.p-4
          p.mb-0.text-white A continuación, se muestran algunas analogías con las redes informáticas: la aerolínea te transporta desde el origen hasta el destino; un paquete se transporta desde el <i>host</i> de origen hasta el <i>host</i> de destino en Internet. Pero esta no es la analogía que buscamos. Buscamos alguna estructura en capas. Si observamos la figura 12, vemos que hay una función de emisión de billetes en cada extremo; también hay una función de equipaje para los pasajeros que ya tienen billete y una función de puerta de embarque para los pasajeros que ya tienen billete y equipaje. Para los pasajeros que han pasado por la puerta (es decir, los que ya tienen billete, han facturado el equipaje y han pasado por la puerta), hay una función de despegue y aterrizaje, y mientras están en vuelo, hay una función de encaminamiento del avión.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 12.
          span Analogía por capas
        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='Figura que representa la analogía por capas, de acuerdo al ejemplo previamente dado.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p(data-aos="fade-up") En la figura 12, se ha dividido la funcionalidad de las aerolíneas en capas, lo que proporciona un marco en el que podemos hablar de los viajes en avión. Cada capa, combinada con las capas inferiores, implementa alguna funcionalidad, algún servicio. A continuación, se puede observar la función que cumple algunas de ellas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-3
        .row.justify-content-center.align-items-center
          .tarjeta.color-primario.p-2.mb-2
            .tarjeta.color-blanca--borde.p-2
              h4.text-center.text-white.mb-2 <i>Ticket (complain)</i>

          .tarjeta.tarjeta-borde-azul2.p-4.mb-2
            p.mb-0.text-center En la capa de emisión de billetes y en las inferiores, se realiza la transferencia de una persona de ventanilla a ventanilla de la aerolínea. 

          .col-4.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/flecha.svg', alt='Imágen decorativa')

          .tarjeta.color-acento-contenido.p-2.mb-2
            .tarjeta.color-blanca--borde2.p-2
              h4.text-center.mb-2 <i>Baggage</i>

          .tarjeta.tarjeta-borde-verde2.p-4.mb-2
            p.mb-0.text-center En la capa de equipaje y en las inferiores, se realiza la transferencia de una persona y sus maletas de un control de equipaje a una reclamación de equipaje. Hay que tener en cuenta que la capa de equipaje solo ofrece este servicio a una persona que ya tiene billete.

          .col-4.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/flecha.svg', alt='Imágen decorativa')

          .tarjeta.color-primario.p-2.mb-2
            .tarjeta.color-blanca--borde.p-2
              h4.text-center.text-white.mb-2 <i>Gate</i>

          .tarjeta.tarjeta-borde-azul2.p-4.mb-2
            p.mb-0.text-center En la capa de puerta de embarque, se realiza la transferencia de salida-puerta a llegada-puerta de una persona y sus maletas. 

          .col-4.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema2/flecha.svg', alt='Imágen decorativa')

          .tarjeta.color-acento-contenido.p-2.mb-2
            .tarjeta.color-blanca--borde2.p-2
              h4.text-center.mb-2 <i>Takeoff/Landing</i>

          .tarjeta.tarjeta-borde-verde2.p-4.mb-2
            p.mb-0.text-center En la capa de despegue/aterrizaje, se realiza la transferencia de pista a pista de las personas y sus maletas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.cajon-amarillo.p-4(data-aos="flip-up")
          p.mb-4 Cada capa proporciona su servicio (1), realizando determinadas acciones dentro de esa capa (por ejemplo, en la capa de la puerta, la carga y descarga de personas de un avión) y (2), utilizando los servicios de la capa directamente inferior (por ejemplo, en la capa de la puerta, utilizando el servicio de transferencia de pasajeros de pista a pista de la capa de despegue/aterrizaje).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Una arquitectura por capas nos permite hablar de una parte específica y bien definida de un sistema grande y complejo. Esta simplificación en sí misma, tiene un valor considerable, ya que proporciona <b style= 'color:#5573C6;'>modularidad</b>, lo que hace que sea mucho más fácil cambiar la implementación del servicio proporcionado por la capa. Mientras la capa proporcione el mismo servicio a la capa superior, y utilice los mismos servicios de la capa inferior, el resto del sistema no cambia cuando se modifica la implementación de una capa. (<b>Tenga en cuenta que cambiar la implementación de un servicio es muy diferente a cambiar el propio servicio</b>). Por ejemplo, si se cambian las funciones de la puerta de embarque (por ejemplo, para que la gente suba y baje por altura), el resto del sistema de la aerolínea no cambiaría, ya que la capa de la puerta de embarque sigue proporcionando la misma función (carga y descarga de personas); simplemente implementa esa función de una manera diferente después del cambio. En el caso de los sistemas grandes y complejos que se actualizan constantemente, la posibilidad de cambiar la implementación de un servicio sin afectar a otros componentes del sistema es otra ventaja importante de la estratificación.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imágen decorativa')

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Capas de protocolo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imágen decorativa')

      .col-lg-5
        .tarjeta-gris1.p-3.px-5(data-aos="fade-left")
          p.mt-lg-4 Pero basta de hablar de las compañías aéreas. Centrémonos ahora en los protocolos de red. Para estructurar el diseño de los protocolos de red, los diseñadores de redes organizan los protocolos -y el <i>hardware</i> y el <i>software</i> de red que los implementan- en capas. Cada protocolo pertenece a una de las capas, al igual que cada función de la arquitectura de la aerolínea de la figura 12 pertenecía a una capa. También nos interesan los servicios que una capa ofrece a la capa superior, el llamado modelo de servicio de una capa. Al igual que en nuestro ejemplo de la aerolínea, cada capa proporciona su servicio:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img13.svg' alt='Imágen decorativa')
          .tarjeta.color-primario--borde
            .p-3
              p.text-center Realizando determinadas acciones dentro de esa capa.

      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img14.svg' alt='Imágen decorativa')
          .tarjeta.color-acento-contenido--borde
            .p-3
              p.text-center Utilizando los servicios de la capa directamente inferior.

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-left") Por ejemplo, los servicios proporcionados por la capa n pueden incluir la entrega fiable de mensajes de un extremo de la red al otro. Esto podría implementarse utilizando un servicio de entrega de mensajes de borde a borde no fiable de la <b style= 'color:#5573C6;'>capa n-1</b>, y añadiendo la funcionalidad de la <b style= 'color:#5573C6;'>capa n</b> para detectar y retransmitir mensajes perdidos.

      p(data-aos="fade-right") La implementación de una capa de protocolo y de red es fundamental para el funcionamiento eficiente y seguro de las comunicaciones en un entorno tecnológico. En este contexto, exploraremos cómo dicha capa puede ser configurada y estructurada para facilitar el flujo de datos y garantizar una conectividad óptima entre dispositivos y redes.

    .row.justify-content-center.align-items-center.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul3")
        .row(titulo="Capa de protocolo")
          p Puede implementarse en <i>software</i>, en <i>hardware</i> o en una combinación de ambos. Los protocolos de la capa de aplicación -como HTTP y SMTP- se implementan casi siempre en <i>software</i> en los sistemas finales; lo mismo ocurre con los protocolos de la capa de transporte. Dado que las capas físicas y de enlace de datos son las responsables de gestionar la comunicación a través de un enlace específico, suelen implementarse en una tarjeta de interfaz de red (por ejemplo, tarjetas de interfaz Ethernet o WiFi) asociada a un enlace determinado. 

        .row(titulo="Capa de red ")
          p Suele ser una implementación mixta de <i>hardware</i> y <i>software</i>. También hay que tener en cuenta que, al igual que las funciones de la arquitectura de la aerolínea en capas se distribuyen entre los distintos aeropuertos y centros de control de vuelo que conforman el sistema, también un protocolo de capa n se distribuye entre los sistemas finales, los conmutadores de paquetes y otros componentes que conforman la red. Es decir, a menudo hay una parte de un protocolo de capa n en cada uno de estos componentes de la red.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img15.svg', alt='Imágen decorativa')

      .col-lg-8
        p(data-aos="fade-left") La estratificación de protocolos tiene ventajas conceptuales y estructurales. La estratificación proporciona una forma estructurada de hablar de los componentes del sistema, mientras que <b style= 'color:#5573C6;'>la modularidad</b> facilita la actualización de los componentes del sistema. Sin embargo, mencionamos que algunos investigadores e ingenieros de redes se oponen vehementemente a la estratificación. Una desventaja potencial de la estratificación es que una capa puede duplicar la funcionalidad de la capa inferior. Por ejemplo, muchas pilas de protocolos proporcionan recuperación de errores tanto por <b style= 'color:#5573C6;'>enlace como de extremo a extremo</b>. Un segundo inconveniente potencial es que la funcionalidad de una capa puede necesitar información (por ejemplo, un valor de marca de tiempo), que solo está presente en otra capa; esto viola el objetivo de la separación de capas.

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 La pila TCP/IP

    p(data-aos="fade-right") En conjunto, los protocolos de las distintas capas se denominan <b style= 'color:#5573C6;'>pila de protocolos</b>. La pila de protocolos de Internet consta de <b style= 'color:#5573C6;'>cinco capas:</b> <b>la física, la de enlace, la de red, la de transporte y la de aplicación</b>, como se muestra en la imagen La pila TCP/IP. Si examina la tabla de contenido, verá que este componente se ha organizado a grandes rasgos utilizando las capas de la pila de protocolos de Internet. Se adoptó un enfoque descendente, cubriendo primero la capa de aplicación y luego procediendo hacia abajo, tal como se evidencia a continuación:

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mt-5
        .bg-fondo3
          .row.justify-content-center.align-items-center
            .col-lg-6
              .tarjeta.tarjeta-borde-verde3.p-3.mb-2(data-aos="fade-left")
                h5.text-center.mb-0 Nivel de Aplicación
                p.text-center.mb-0 HTTP, FTP,POP3, TELNET...

              .tarjeta.tarjeta-borde-amarilla.p-3.mb-2(data-aos="fade-right")
                h5.text-center.mb-0 Nivel de Transporte
                p.text-center.mb-0 Conexión extremo a extremo y fiabilidad de los datos TCP,UDP

              .tarjeta.tarjeta-borde-morada.p-3.mb-2(data-aos="fade-left")
                h5.text-center.mb-0 Nivel de Red
                p.text-center.mb-0 ICMP, IP, ARP, RARP...

              .tarjeta.tarjeta-borde-azul3.p-3.mb-2(data-aos="fade-right")
                h5.text-center.mb-0 Nivel de Enlace
                p.text-center.mb-0 Direccionamiento físico

              .tarjeta.tarjeta-borde-roja.p-3.mb-2(data-aos="fade-left")
                h5.text-center.mb-0 Nivel Físico
                p.text-center.mb-0 Señal y transmisión binaria

    .row.justify-content-center.align-items-center.mb-5
      h4(data-aos="fade-right") Capas de la pila de protocolos de Internet

      p(data-aos="fade-right") Si examina la tabla de contenido, verá que este componente se ha organizado a grandes rasgos utilizando las capas de la pila de protocolos de Internet. Adoptamos un enfoque descendente, cubriendo primero la capa de aplicación y luego procediendo hacia abajo, tal como se evidencia a continuación:

      .row.justify-content-center.align-items-center.my-5
        .tarjeta.tarjeta--blanca.bg-slyderA.p-5
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-5 Capa de aplicación
                p La capa de aplicación aloja aplicaciones y protocolos de red, incluyendo HTTP (solicitudes web), SMTP (mensajes de correo) y FTP (transferencia de archivos). Funciones como traducción de nombres de dominio (DNS) también se realizan en esta capa. Los protocolos de aplicación permiten el intercambio de mensajes entre sistemas finales, distribuyéndose a través de ellos.
              
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img16.svg', alt='Imágen decorativa')

            .row.justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-5 Capa de transporte
                p La capa de transporte en Internet mueve mensajes entre aplicaciones. Existen dos protocolos: TCP y UDP. TCP ofrece conexión, garantizando entrega y control de flujo. Divide mensajes largos en segmentos y controla la congestión. UDP no tiene conexión, sin fiabilidad, control de flujo ni control de congestión.
              
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img17.svg', alt='Imágen decorativa')

            .row.justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-5 Capa de red
                p La capa de red en Internet transporta paquetes conocidos como datagramas entre <i>hosts</i> utilizando el Protocolo IP. El protocolo de transporte (TCP o UDP) pasa segmentos y dirección de destino a la capa de red. Esta última se encarga de entregar los segmentos al destino. La capa de red también incluye protocolos de enrutamiento para determinar rutas entre fuentes y destinos. IP es el principal protocolo que une Internet, y a veces se le denomina capa IP.
              
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img18.svg', alt='Imágen decorativa')

            .row.justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-5 Capa de enlace
                p La capa de enlace pasa el datagrama a la capa de red en el siguiente nodo. Los servicios dependen del protocolo específico utilizado en el enlace, como Ethernet, Wifi o el Protocolo Punto a Punto PPP. Algunos protocolos de enlace ofrecen entrega fiable en un enlace, a diferencia de TCP que lo hace entre sistemas finales. Los datagramas pueden ser manejados por diferentes protocolos de enlace en su ruta.
              
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img19.svg', alt='Imágen decorativa')

            .row.justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                h4.mb-5 Capa física
                p La capa física mueve bits dentro de una trama de nodo a nodo. Los protocolos dependen del enlace y medio de transmisión, como Ethernet con distintos protocolos para cable de cobre, coaxial y fibra óptica. Cada caso implica un desplazamiento de bits diferente en el enlace.
              
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema2/img20.svg', alt='Imágen decorativa')

    .row.bg-titulo3.align-items-center.p-2.mb-3(data-aos="fade-lwft")
      h3.mb-3.mt-2 Configuración de una red de dos computadores

    h5.text-center.mb-5 Los siguientes pasos se desarrollan en el simulador Packet Tracer.

    .row.justify-content-center.align-items-center.mb-3
      .col-3.col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img21.svg', alt='Imágen decorativa')

      .col-lg-9(data-aos="fade-left")
        .tarjeta-gris2.p-4
          p.mb-0 Colocar los equipos a conectar.

    .row.justify-content-center.align-items-center.mb-3
      .col-3.col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img22.svg', alt='Imágen decorativa')

      .col-lg-9(data-aos="fade-left")
        .tarjeta-gris2.px-4.py-2
          p.mb-0 Configurar una dirección IP v4 en cada equipo. Se van a utilizar las siguientes direcciones:
          p.mb-0 PC0: 192.168.1.1
          p.mb-0 PC1: 192.168.2.2

    .row.justify-content-center.align-items-center.mb-3
      .col-3.col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img23.svg', alt='Imágen decorativa')

      .col-lg-9(data-aos="fade-left")
        .tarjeta-gris2.p-4
          p.mb-0 Hacer la conexión a través de un cable cruzado.

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img24.svg', alt='Imágen decorativa')

      .col-lg-9(data-aos="fade-left")
        .tarjeta-gris2.p-4
          p.mb-0 Comprobar la conectividad a través del envió de un mensaje paquete de información.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/nI4Zb8UjXsM" title="CConfiguración de una red de dos computadores" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h5.text-center.mb-5 Revise imágenes de la configuración a continuación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 13.
          span Configuración PC0
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema2/img25.svg', alt='Figura que contine la representación de la configuración PCO.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 14.
          span Configuración PC1
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema2/img26.svg', alt='Figura que contine la representación de la configuración PC1.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 15.
          span Comprobación de conectividad de la red de dos computadores

        figure
          img(src='@/assets/curso/temas/tema2/img27.svg', alt='Figura que contine la representación de la comprobación de conectividad de la red de dos computadores.')

    p.mb-5 El siguiente ejemplo, es una simple configuración de una red de 2 nodos unidos por un cable UTP, en donde se comprueba la conectividad. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/wHcOILgO_2Y" title="Comunicación de marketing digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 2.3 Tipos de medios de transmisión para redes

    .bg-fondo1
      .row.justify-content-center.align-items-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img28.svg', alt='Imágen decorativa')    

        .col-lg-10
          .tarjeta.tarjeta-gris-degrade.p-4(data-aos="fade-up")
            p.text-center Entre los tipos de medios de transmisión para redes, se encuentran los siguientes:

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Ethernet

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.cajon-amarillo.p-4(data-aos="flip-up")
          p.mb-0 En los campus corporativos y universitarios, se suele utilizar una red de <b style= 'color:#5573C6;'>área local</b> (LAN) para conectar un sistema final al <b style= 'color:#5573C6;'><i>router</i> de borde</b>. Aunque hay muchos tipos de tecnologías LAN, Ethernet es, con mucho, la tecnología de acceso más extendida en las redes corporativas y universitarias. Como se muestra en la Figura 16, los usuarios de Ethernet utilizan <b style= 'color:#5573C6;'>cable de cobre de par trenzado</b> para conectarse a un conmutador Ethernet. Con el acceso Ethernet, los usuarios suelen tener un acceso de 100 Mbps, mientras que los servidores pueden tener un acceso de 1 Gbps o incluso de 10 Gbps.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img29.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-6
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 16.
          span Conexión por ethernet
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img30.svg', alt='Figura que representa el proceso de conexión por ethernet, en el cual los usuarios de Ethernet utilizan cable de cobre de par trenzado para conectarse a un conmutador Ethernet.')

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 WiFi

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-3(data-aos="flip-up")
          p.mb-0 Cada vez más personas acceden a Internet de forma inalámbrica, ya sea a través de un ordenador portátil o desde un dispositivo móvil de mano, como un iPhone, o un teléfono de Google. Hoy en día, hay dos tipos comunes de acceso inalámbrico a Internet. En una LAN inalámbrica, los usuarios inalámbricos transmiten/reciben paquetes a/desde un punto de acceso que, a su vez, está conectado a la Internet por cable. Un usuario de una LAN inalámbrica debe estar normalmente a unas decenas de metros del punto de acceso. En las redes de <b style= 'color:#5573C6;'>acceso inalámbrico de área amplia</b>, los paquetes se transmiten a una estación base a través de la misma infraestructura inalámbrica utilizada para la telefonía celular. En este caso, la estación base es gestionada por el proveedor de la red celular y un usuario debe estar normalmente a unas decenas de kilómetros de la estación base.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img31.svg', alt='Imágen decorativa')

    p.mb-5(data-aos="fade-left") El acceso a la LAN inalámbrica basado en la tecnología <b>IEEE 802.11</b>, es decir, el <b>Wifi</b>, está ya prácticamente en todas partes: universidades, oficinas comerciales, cafeterías, aeropuertos, hogares e incluso en los aviones. La mayoría de las universidades han instalado estaciones base <b style= 'color:#5573C6;'>IEEE 802.11</b> en todo el campus, lo que permite a los estudiantes enviar y recibir correo electrónico o navegar por Internet desde cualquier lugar del campus. En muchas ciudades, uno puede situarse en la esquina de una calle y estar al alcance de diez o veinte estaciones base. <b style= 'color:#5573C6;'>Muchos hogares combinan el acceso residencial de banda ancha</b> (es decir, módems de cable o DSL) con la económica tecnología LAN inalámbrica para crear potentes redes domésticas. La figura 17 muestra un esquema de una red doméstica típica. Esta red doméstica se compone de un ordenador portátil itinerante y un PC con cable; una estación base (el punto de acceso sin cables), que se comunica con el PC inalámbrico; un módem por cable, que proporciona acceso de banda ancha a Internet; y un <b style= 'color:#5573C6;'><i>router</i></b>, que interconecta la estación base y el <b>PC fijo con el módem por cable</b>. Esta red permite a los miembros del hogar tener acceso de banda ancha a Internet con un miembro que se desplaza de la cocina al patio trasero y a los dormitorios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="flip-left")
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 17.
          span Conexión por wifi

        figure
          img(src='@/assets/curso/temas/tema2/img32.svg', alt='Figura que representa el proceso de conexión por wifi, el cual muestra un esquema de red doméstica típica, conformado por un ordenador portátil itinerante y un PC con cable.')   

      .col-lg-6
        .cajon.cajon-color-amarillo.p-4(data-aos="flip-up")
          p.mb-0 Muchos hogares combinan el acceso residencial de banda ancha (es decir, módems de cable o DSL) con la económica tecnología LAN inalámbrica para crear potentes redes domésticas.

    .row.bg-titulo3.align-items-center.p-2.mb-3
      h3.mb-3.mt-2 Acceso inalámbrico de área amplia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Cuando se accede a Internet a través de la tecnología LAN inalámbrica, normalmente hay que estar a unas decenas de metros del punto de acceso. Esto es factible para el acceso en casa, en una cafetería y, en general, dentro y alrededor de un edificio. <b style= 'color:#5573C6;'>¿Pero qué pasa si estás en la playa, en un autobús o en tu coche y necesitas acceso a Internet?</b> Para este tipo de acceso de área amplia, los usuarios de Internet en itinerancia utilizan la infraestructura de la telefonía celular, accediendo a estaciones base que se encuentran hasta a decenas de kilómetros de distancia. Las empresas de telecomunicaciones han hecho enormes inversiones en la llamada tercera generación inalámbrica (3G), que proporciona una conexión inalámbrica de área amplia con <b style= 'color:#5573C6;'>conmutación de paquetes</b>. Acceso a Internet a velocidades superiores a 1 Mbps. Hoy en día, millones de usuarios utilizan estas redes para leer y enviar correos electrónicos, navegar por la red y descargar música mientras se desplazan.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img33.svg', alt='Imágen decorativa')

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 WiMAX

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img34.svg', alt='Imágen decorativa')

      .col-lg-5
        .tarjeta-gris3.p-3.px-5(data-aos="fade-left")
          p.mt-lg-3 Como siempre, hay una tecnología potencialmente "asesina" que espera destronar estos estándares. WiMAX, también conocido como <b>IEEE 802.16,</b> es un primo de larga distancia del protocolo <b>Wifi 802.11</b> del que ya hemos hablado. WiMAX funciona independientemente de la red celular y promete velocidades de 5 a 10 Mbps o superiores en distancias de decenas de kilómetros. 



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
