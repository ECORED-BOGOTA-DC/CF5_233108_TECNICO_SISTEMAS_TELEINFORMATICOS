<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Concepto de red de datos

    .bg-fondo1
      .row.justify-content-center.align-items-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imágen decorativa')    

        .col-lg-10
          .tarjeta.tarjeta-gris-degrade.p-5(data-aos="fade-up")
            p.mb-0.text-center Internet se puede definir como una infraestructura que proporciona servicios a las aplicaciones. Entre las que se encuentran: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 1.
          span Aplicaciones en la red datos

        figure
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='Figura que menciona las aplicaciones en la red de datos de internet, las cuales se mencionan debajo de esta imagen.')

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p(data-aos="fade-left") Las aplicaciones son distribuidas, cuando implican múltiples sistemas finales que intercambian datos entre sí. Es importante destacar que las aplicaciones de Internet se ejecutan en los sistemas finales, no en los conmutadores de paquetes del núcleo de la red. Aunque los conmutadores de paquetes facilitan el intercambio de datos entre los sistemas finales, no se ocupan de la aplicación que es la fuente o el sumidero de datos.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imágen decorativa')

      .col-lg-8
        .cajon.cajon-amarillo.p-4.mb-3(data-aos="flip-up")
          p.mb-0 Exploremos un poco más lo que entendemos por una infraestructura que proporciona servicios a las aplicaciones. Para ello, suponga que tiene una nueva y emocionante idea para una aplicación distribuida en Internet, que puede beneficiar enormemente a la humanidad o que simplemente le puede hacer rico y famoso.

        p(data-aos="fade-left") ¿Cómo podría transformar esta idea en una aplicación real de Internet? Dado que las aplicaciones se ejecutan en los sistemas finales, tendrá que escribir piezas de <i>software</i> que se ejecuten en los sistemas finales. Por ejemplo, podrías escribir tus piezas de <i>software</i> en Java, C o Python. Ahora, como estás desarrollando una aplicación de Internet distribuida, las piezas de <i>software</i> que se ejecutan en los diferentes sistemas finales tendrán que enviarse datos entre sí. Y aquí llegamos a una cuestión central, que nos lleva a la forma alternativa de describir <b>Internet como una plataforma para aplicaciones.</b> <b style= 'color:#5573C6;'>¿Cómo puede una pieza de aplicación que se ejecuta en un sistema final instruir a Internet para que entregue datos a otra pieza de <i>software</i> que se ejecuta en otro sistema final?</b>

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Los sistemas finales conectados a Internet proporcionan una interfaz de programación de aplicaciones (API) que especifica cómo una pieza de <i>software</i> que se ejecuta en un sistema final pide a la infraestructura de Internet que <b>entregue datos a una pieza de <i>software</i> de destino</b> específica que se ejecuta en otro sistema final. La API de Internet es un conjunto de reglas que la pieza de <i>software</i> emisora debe seguir para que Internet pueda entregar los datos a la pieza de <i>software</i> de destino.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Supongamos que Alicia quiere enviar una carta a Pedro utilizando el servicio postal. Alicia, por supuesto, no puede simplemente escribir la carta (los datos) y dejarla caer por la ventana. En su lugar, el servicio postal requiere que Alicia ponga la carta en un sobre; escriba el nombre completo, la dirección y el código postal de Pedro en el centro del sobre; selle el sobre; ponga un sello en la esquina superior derecha del sobre; y finalmente, deje caer el <b>sobre en un buzón oficial</b> del servicio postal. Así, el servicio postal tiene su propia <b style= 'color:#5573C6;'>"API del servicio postal"</b>, o conjunto de reglas, que Alicia debe seguir para que el servicio postal entregue su carta a Pedro. De manera similar, Internet tiene una API que el <i>software</i> que envía datos debe seguir para que Internet entregue los datos al <i>software</i> que los recibirá.

        p(data-aos="fade-right") El servicio postal, por supuesto, ofrece más de un servicio a sus clientes. Ofrece entrega urgente, confirmación de recepción, uso ordinario y muchos más servicios. De manera similar, <b>Internet proporciona múltiples servicios a sus aplicaciones.</b> Cuando desarrolle una aplicación de Internet, también deberá elegir uno de los servicios de Internet para su aplicación.

        p(data-aos="fade-right") Esta descripción de Internet -una infraestructura para proporcionar servicios a las aplicaciones distribuidas- es importante. Cada vez más, los avances en los componentes básicos de Internet están impulsados por las necesidades de las nuevas aplicaciones. Así que es importante tener en cuenta que Internet es una infraestructura en la que se inventan y despliegan constantemente nuevas aplicaciones.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img5.svg', alt='Imágen decorativa')

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 1.1 Recursos de una red

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img6.svg', alt='Imágen decorativa')

      .col-lg-8
        p(data-aos="fade-left") <b>Una analogía humana.</b> Probablemente sea más fácil entender la noción de un protocolo de red informática considerando primero algunas analogías humanas, ya que los humanos ejecutamos protocolos todo el tiempo. Piensa en lo que haces cuando quieres preguntarle a alguien la hora del día. En la <b>Figura 2</b>, se muestra un intercambio típico. El protocolo humano (o los buenos modales, por lo menos) dicta que primero se ofrece un saludo (el primer "Hola" de la figura 2) para iniciar la comunicación con otra persona. La respuesta típica a un "Hola" es un mensaje de respuesta <b style= 'color:#5573C6;'>"Hola"</b>. Implícitamente, se toma la respuesta de un "Hola" cordial como una indicación de que se puede continuar y preguntar la hora del día. Una respuesta diferente al "Hola" inicial (como "¡No me molestes!" o "No hablo español", o alguna respuesta impresentable) podría indicar una falta de voluntad o incapacidad para comunicarse. En este caso, el protocolo humano sería no preguntar la hora.

        p(data-aos="fade-left") A veces no se obtiene ninguna respuesta a una pregunta, en cuyo caso se suele renunciar a preguntar la hora a esa persona. Hay que tener en cuenta que en <b>nuestro protocolo humano</b> hay mensajes específicos que enviamos y acciones específicas que realizamos en respuesta a los mensajes de respuesta recibidos u otros eventos <b style= 'color:#5573C6;'>(como la falta de respuesta en un tiempo determinado)</b>. Está claro que los mensajes transmitidos y recibidos, y las acciones que se llevan a cabo cuando se envían o reciben estos mensajes o se producen otros eventos, desempeñan un papel central en un protocolo humano. 

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-up")
      p.mb-0 Si las personas ejecutan protocolos diferentes (por ejemplo, si una persona tiene modales, pero la otra no, o si una entiende el concepto de tiempo y la otra no) los protocolos no inter operan y no se puede realizar ningún trabajo útil. Lo mismo ocurre en las redes: se necesitan dos (o más) entidades comunicantes que ejecuten el mismo protocolo para realizar una tarea.


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 2.
          span Concepto de protocolo

        figure
          img(src='@/assets/curso/temas/tema1/img7.svg', alt='Figura que muestra un intercambio típico, en este caso del protocolo humano (buenos modales), indicando un saludo (Hola), si posee tiempo la otra persona, solicitudes de conexión y su respectiva respuesta.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-right") Consideremos una segunda analogía humana.
        p(data-aos="fade-right") Supongamos que estás en una clase universitaria <b style= 'color:#5573C6;'>(una clase de redes informáticas</b>, por ejemplo). El profesor le habla de los prototipos y usted está confundido. El profesor se detiene para preguntar: <b>"¿Hay alguna pregunta?"</b>. (un mensaje que se transmite a todos los alumnos que no están durmiendo y que ellos reciben). <b style= 'color:#5573C6;'>Tú levantas la mano</b> (transmitiendo un mensaje implícito al profesor). Tu profesor te reconoce con <b style= 'color:#5573C6;'>una sonrisa</b>, diciendo <b style= 'color:#5573C6;'>"Sí..."</b> (un mensaje transmitido que te anima a hacer tu pregunta -a los profesores les encanta que les hagan preguntas-), y entonces haces tu pregunta (es decir, transmites tu mensaje a tu profesor). Tu profesor escucha tu pregunta (recibe tu mensaje de pregunta) y responde (te transmite una respuesta). Una vez más, vemos que la transmisión y la recepción de mensajes, así como un conjunto de acciones convencionales que se llevan a cabo cuando se envían y reciben estos mensajes, son el núcleo de este protocolo de preguntas y respuestas.

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imágen decorativa')

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Protocolos de red

    p.mb-5(data-aos="fade-right") Un protocolo de red es similar a un protocolo humano, salvo que las entidades que intercambian mensajes y realizan acciones son componentes de <b style= 'color:#5573C6;'><i>hardware</i> o <i>software</i></b> de algún dispositivo (por ejemplo, computador, teléfono móvil, <i>router</i> u otro dispositivo con capacidad de red). Toda actividad en Internet que implique a dos o más entidades remotas en comunicación se rige por un protocolo. A continuación, se invita ver el siguiente ejemplo:

    .bg-fondo2
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-md-6.col-lg-4.mb-3(data-aos="fade-right")
              .tarjeta.tarjeta--gris.p-4.height-tarjeta
                .row.justify-content-center.align-items-center
                  .col-6.mb-3
                    figure
                      img(src='@/assets/curso/temas/tema1/img9.svg', alt='Imágen decorativa')
                  
                  h4.text-center Protocolo implementado por <i>hardware</i>

                  p.text-center En las tarjetas de interfaz de red de dos ordenadores conectados físicamente controlan el flujo de bits en el "cable" entre las dos tarjetas de interfaz de red.

            .col-md-6.col-lg-4.mb-3(data-aos="fade-up")
              .tarjeta.tarjeta--gris.p-4.height-tarjeta
                .row.justify-content-center.align-items-center
                  .col-6.mb-3
                    figure
                      img(src='@/assets/curso/temas/tema1/img10.svg', alt='Imágen decorativa')
                  
                  h4.text-center Protocolo control de la congestión

                  p.text-center En los sistemas finales controlan la velocidad a la que se transmiten los paquetes entre el emisor y el receptor.            

            .col-md-6.col-lg-4.mb-3(data-aos="fade-left")
              .tarjeta.tarjeta--gris.p-4.height-tarjeta
                .row.justify-content-center.align-items-center
                  .col-6.mb-3
                    figure
                      img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imágen decorativa')
                  
                  h4.text-center Protocolo en los <i>routers</i>

                  p.text-center Determinan la ruta de un paquete desde el origen hasta el destino. Los protocolos funcionan en todas partes en Internet.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3(data-aos="flip-left")
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 3.
          span Interacción entre sistemas finales

        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='Figura que ejemplifica la interacción entre sistemas finales, lo cual es lo sucedido cuando se hace una petición a un servidor web.')

      .col-lg-7
        p(data-aos="fade-left") Como ejemplo de un protocolo de red informática con el que probablemente esté familiarizado, considere lo que ocurre cuando hace una petición a un servidor web, es decir, cuando escribe la URL de una página web en su navegador web. El escenario se ilustra en la mitad derecha de la Figura 3. En primer lugar, su computador enviará un mensaje de solicitud de conexión al servidor web y esperará una respuesta.

        p(data-aos="fade-left") El servidor web recibirá el mensaje de solicitud de conexión y devolverá un mensaje de respuesta de conexión. Sabiendo que ya se puede solicitar el documento web, el ordenador envía el <b style= 'color:#5573C6;'>nombre de la página web</b> que quiere obtener de ese servidor web en un mensaje GET. Finalmente, el servidor web devuelve la página web (archivo) a su ordenador.

        .row.justify-content-center.align-items-center.mb-3
          .col-2.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
          
          .col-10.col-lg-11
            p(data-aos="fade-right") Teniendo en cuenta los ejemplos humanos y de redes anteriores, el intercambio de mensajes y las acciones realizadas cuando se envían y reciben estos mensajes son los elementos clave que definen un protocolo: 
        
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-up")
          p.mb-0 Un protocolo define el formato y el orden de los mensajes que se intercambian entre dos o más entidades comunicantes, así como las acciones que se llevan a cabo cuando se transmite o se recibe un mensaje u otro evento.

        p(data-aos="fade-left") Internet, y las redes informáticas en general, hacen un amplio uso de los protocolos. Se utilizan distintos protocolos para realizar diferentes tareas de comunicación. A medida que vaya leyendo este componente, aprenderá que algunos protocolos son simples y sencillos, mientras que otros son complejos e intelectualmente profundos. Dominar el campo de las redes informáticas equivale a comprender <b>el qué, el por qué y el cómo</b> de los protocolos de red.

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 El borde de la red

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Anteriormente, hemos presentado una visión general de alto nivel de Internet y de los protocolos de trabajo en red. Ahora vamos a profundizar un poco más en <b style= 'color:#5573C6;'>los componentes de una red informática (y de Internet, en particular)</b>. En esta parte comenzaremos por el extremo de la red y veremos los componentes con los que estamos más familiarizados, es decir, los computadores, teléfonos móviles y otros dispositivos que utilizamos a diario.

        .row.justify-content-center.align-items-center(data-aos="flip-down")
          .col-6.col-lg-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='Imágen decorativa')

          .col-lg-9
            .tarjeta-azul2.p-4
              b.text-white Para reflexionar
              p.mb-0.text-white Se debe recordar que, en la jerga de las redes informáticas, los computadores y otros dispositivos conectados a Internet se denominan a menudo sistemas finales, porque se sitúan en el borde de Internet.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img14.svg', alt='Imágen decorativa')

    p.mb-5(data-aos="fade-right") Los sistemas finales de Internet incluyen computadores de mesa (por ejemplo, PC de mesa, Mac y equipos Linux), servidores (por ejemplo, servidores web y de correo electrónico) y computadores móviles (por ejemplo, computadores portátiles y teléfonos con conexiones inalámbricas a la red). Además, cada vez hay más dispositivos alternativos que se conectan a Internet como sistemas finales. En la siguiente figura se puede observar un ejemplo:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 4.
          span Sistemas finales de la red

        figure
          img(src='@/assets/curso/temas/tema1/img15.png', alt='Figura que representa los sistemas finales de la red, los cuales están compuestos por:<br>Host-Sistema Final:<br> Se divide en dos categorías: clientes y servidores.<br> Para ejecutar programas de aplicaciones de navegación web, servidor web y servidor de correo.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") En el contexto del <i>software</i> de red, hay otra definición de cliente y servidor. <b style= 'color:#5573C6;'>Un programa cliente</b> es un programa que se ejecuta en un sistema final que solicita y recibe un servicio de un <b style= 'color:#5573C6;'>programa servidor</b> que se ejecuta en otro sistema final. La Web, el correo electrónico, la transferencia de archivos, el acceso remoto, los grupos de noticias y muchas otras aplicaciones populares adoptan el <b>modelo cliente-servidor.</b> Dado que un programa cliente suele ejecutarse en un ordenador y el programa servidor en otro, las aplicaciones de Internet cliente-servidor son, por definición, <b>aplicaciones distribuidas.</b> El programa cliente y el programa servidor interactúan enviándose mensajes a través de Internet. En este nivel de abstracción, los <i>routers</i>, enlaces y otros elementos de Internet sirven colectivamente como <b>una caja negra</b> que transfiere mensajes entre los componentes distribuidos y comunicados de una aplicación de Internet.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imágen decorativa')

      .col-lg-5
        .tarjeta-gris1.p-3.px-5(data-aos="fade-left")
          p Hoy en día, no todas las aplicaciones de Internet consisten en programas cliente puros que interactúan con programas servidor puros. Cada vez más, muchas aplicaciones son aplicaciones <b style= 'color:#5573C6;'>peer-to-peer (P2P)</b>, en las que los sistemas finales interactúan y ejecutan programas que realizan funciones tanto de cliente como de servidor. Por ejemplo, en las aplicaciones de intercambio de archivos P2P <b>(como BitTorrent y eMule)</b>, el programa del sistema final del usuario actúa como cliente cuando solicita un archivo a otro par; y el programa actúa como servidor cuando envía un archivo a otro par. En la telefonía por Internet, las dos partes que se comunican interactúan como pares: la sesión de comunicación es simétrica, y ambas partes envían y reciben datos.

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Redes de acceso

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p(data-aos="fade-left") Una vez consideradas las aplicaciones y los sistemas finales en el "borde de la red", vamos a considerar las redes de acceso, es decir, los enlaces físicos que conectan un sistema final con el primer <i>router</i> (también conocido como <b>"<i>router</i> de borde"</b>) en una ruta desde el sistema final a cualquier otro sistema final distante. La figura 5 muestra varios tipos de enlaces de acceso desde el sistema final hasta el <i>router</i> de borde; los enlaces de acceso están resaltados con líneas gruesas y sombreadas.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img18.svg', alt='Imágen decorativa')
      
      .col-lg-8
        p(data-aos="fade-left") Muchas de las tecnologías de acceso emplean, en distintos grados, partes de la infraestructura tradicional de telefonía local por cable. La infraestructura de telefonía local alámbrica es proporcionada por un proveedor de telefonía local, al que nos referiremos simplemente como la telco local. Entre los ejemplos de telecos locales se encuentran <b style= 'color:#5573C6;'>Verizon</b> en Estados Unidos y <b style= 'color:#5573C6;'>France Telecom</b> en Francia. Cada residencia (hogar y apartamento) tiene un enlace directo de par trenzado con un conmutador de telefonía cercano, que se encuentra en un edificio llamado oficina central (CO) en la jerga de la telefonía. (Más adelante hablaremos del cable de cobre de par trenzado). Una empresa de telecomunicaciones local suele tener cientos de OC y conecta a cada uno de sus clientes con la OC más cercana.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-6
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 5.
          span Red de acceso

      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/img19.svg', alt='Figura que representa una red de acceso, la cual está a nivel nacional, internacional, local o regional, con una red doméstica o empresarial.')

    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 1.2 Dimensionamiento de recursos

    .bg-fondo1
      .row.justify-content-center.align-items-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img20.png', alt='Imágen decorativa')    

        .col-lg-10
          .tarjeta.tarjeta-gris-degrade.p-4(data-aos="fade-up")
            p.text-center <b>A continuación, se describe el dimensionamiento de recursos.</b>

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Llamada telefónica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.cajon-amarillo.p-4.mb-3(data-aos="flip-up")
          p.mb-0 En los años 90, casi todos los usuarios residenciales accedían a Internet a través de líneas telefónicas analógicas ordinarias utilizando un módem de acceso telefónico. Hoy en día, muchos usuarios de países subdesarrollados y de zonas rurales de países desarrollados (donde no se dispone de acceso de banda ancha) siguen accediendo a Internet por vía telefónica. De hecho, se calcula que el 10 % de los usuarios residenciales de Estados Unidos utilizaban la conexión telefónica en 2008.

        p(data-aos="fade-right") El término <B>"<i>dial-up</i>"</B> se emplea porque el <i>software</i> del usuario realmente marca el número de teléfono de un ISP y realiza una conexión telefónica tradicional con el ISP (por ejemplo, con AOL). Como se muestra en la Figura 6, el <b style= 'color:#5573C6;'>PC está conectado a un módem de marcación</b>, que a su vez está conectado a la <b style= 'color:#5573C6;'>línea telefónica analógica de la casa</b>. Esta línea telefónica analógica está formada por un cable de cobre de par trenzado y es la misma línea telefónica que se utiliza para hacer llamadas normales. El módem doméstico convierte la salida digital del PC en un formato analógico adecuado para su transmisión por la línea telefónica analógica. En el otro extremo de la conexión, un módem en el ISP convierte la señal analógica de nuevo en formato digital para su entrada en el <i>router</i> del ISP.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img21.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5 
      h4.text-center.mb-3 El acceso telefónico a Internet tiene dos grandes inconvenientes:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-up-right")
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img22.svg', alt='Imágen decorativa')
          
        p Es insoportablemente lento, con una velocidad máxima de 56 kbps. A 56 kbps, se tarda aproximadamente, ocho minutos en descargar una canción MP3 de tres minutos y varios días en descargar una película de 1 Gbyte. 

      .col-md.tarjeta.color-primario.p-5(data-aos="fade-up-left")
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img23.svg', alt='Imágen decorativa')
          
        p.text-white El acceso por módem telefónico utiliza la línea telefónica ordinaria del usuario, lo que significa que mientras un miembro de la familia está navegando por la web utilizando el módem telefónico, otros miembros de la familia no pueden hacer ni recibir llamadas telefónicas convencionales a través de esa misma línea.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 6.
          span Acceso por cable telefónico.

        figure
          img(src='@/assets/curso/temas/tema1/img24.svg', alt='Figura que representa el acceso por cable telefónico, donde se puede apreciar que el PC está conectado a un módem de marcación, que a su vez está conectado a la línea telefónica analógica de la casa.')

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 DSL

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p(data-aos="fade-left") Hoy en día, existen dos tipos de acceso residencial de banda ancha más extendidos, la línea de suscribirse digital (<b style= 'color:#5573C6;'>DSL</b>) y el <b style= 'color:#5573C6;'>cable</b>. En la mayoría de los países desarrollados, más del 50 % de los hogares tienen acceso a la banda ancha, con Corea del Sur, Islandia, Países Bajos, Dinamarca y Suiza a la cabeza con más del 74 % de penetración en los hogares en 2008. En Estados Unidos, la DSL y el cable tienen aproximadamente la misma cuota de mercado de acceso a la banda ancha. Fuera de Estados Unidos y Canadá, la DSL domina, especialmente en Europa, donde más del 90 % de las conexiones de banda ancha son DSL en muchos países.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img25.svg', alt='Imágen decorativa')

      .col-lg-7
        p(data-aos="fade-left") Una residencia suele obtener el acceso a Internet por DSL de la misma compañía que le proporciona el acceso telefónico local por cable (es decir, la teleco local). Por lo tanto, cuando se utiliza la DSL, la empresa de telecomunicaciones de un cliente es también su ISP. Como se muestra en la figura 7 el <b style= 'color:#5573C6;'>módem DSL</b> de cada cliente utiliza la línea telefónica existente (cable de cobre de par trenzado) para intercambiar datos con un multiplexor de acceso a la línea de abonado digital (<b style= 'color:#5573C6;'>DSLAM</b>), normalmente situado en la centralita de la empresa de telecomunicaciones. La línea telefónica transporta simultáneamente datos y señales telefónicas, que se codifican en frecuencias diferentes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-12.col-md-9
                figure
                  img(src='@/assets/curso/temas/tema1/img26.svg', alt='Imágen decorativa').img26-tm1
                
              .col-9.col-lg-10.col-md-7
                .tarjeta.tarjeta-azul3.p-4
                  h5.text-white Un canal de bajada
                  p.text-white De alta velocidad, en la banda de 50 kHz a 1 MHz.

          .col-lg-4.mb-4(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-12.col-md-9
                figure
                  img(src='@/assets/curso/temas/tema1/img27.svg', alt='Imágen decorativa').img27-tm1
                
              .col-9.col-lg-10.col-md-7
                .tarjeta.tarjeta-verde1.p-4
                  h5 Un canal de subida 
                  p De velocidad media, en la banda de 4 kHz a 50 kHz.

          .col-lg-4.mb-4(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-11.col-lg-12.col-md-8
                figure
                  img(src='@/assets/curso/temas/tema1/img28.svg', alt='Imágen decorativa').img28-tm1
                
              .col-9.col-lg-10.col-md-7
                .tarjeta.tarjeta-azul4.p-3
                  h5.text-white Un canal telefónico 
                  p.text-white Bidireccional ordinario, en la banda de 0 a 4 kHz.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 7.
          span Conexión de DSL

        figure
          img(src='@/assets/curso/temas/tema1/img29.svg', alt='Figura que representa la conexión de DSL, donde se aprecia que el módem DSL de cada cliente utiliza la línea telefónica existente para intercambiar datos con un multiplexor de acceso a la línea de abonado digital.')

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img30.svg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Mediante este método, el único enlace DSL se presenta como tres enlaces independientes, de modo que una llamada telefónica y una conexión a Internet pueden compartir el enlace DSL al mismo tiempo. En el lado del cliente, para las señales que llegan al hogar, un divisor separa las señales de datos y de teléfono y reenvía la señal de datos al módem DSL. En el lado de la empresa de telecomunicaciones, en la central, el DSLAM separa las señales de datos y de teléfono y envía los datos a Internet. Cientos o incluso miles de hogares se conectan a un único DSLAM.  DSL presenta dos importantes ventajas frente al acceso a Internet por marcación. Veamos el siguiente recurso.

    .row.justify-content-center.align-items-center.mb-5
      h4.text-center.mb-0 Ventajas acceso a internet por marcación
      p.text-center DSL tiene dos grandes ventajas sobre el acceso a Internet por marcación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Transmitir y recibir datos")
            p Incluyen velocidades de transmisión más altas, generalmente entre 1 y 2 Mbps para la bajada y entre 128 kbps y 1 Mbps para la subida, lo que lo hace un acceso asimétrico.

          .row(titulo="Usuarios")
            p El DSL permite a los usuarios hablar por teléfono y acceder a Internet simultáneamente con una conexión permanente "siempre activa" al DSLAM del ISP y a Internet, sin necesidad de marcar un número de teléfono del ISP como en el acceso telefónico.
      
      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img31.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5(data-aos="fade-right") La velocidad real de transmisión en sentido descendente y ascendente disponible para la residencia es una función de la distancia entre el hogar y la OC, el calibre de la línea de par trenzado y el grado de interferencia eléctrica. Los ingenieros han diseñado expresamente la DSL para distancias cortas entre el hogar y la OC, lo que permite velocidades de transmisión sustancialmente mayores que el acceso telefónico. Para aumentar la velocidad de datos, la DSL se basa en algoritmos avanzados de procesamiento de señales y corrección de errores, lo que puede provocar retrasos elevados en los paquetes. Sin embargo, si el domicilio no está situado a menos de 8 o 10 kilómetros de la OC, la tecnología de procesamiento de señales DSL deja de ser eficaz y el domicilio debe recurrir a una forma alternativa de acceso a Internet.

      .cajon.color-acento-contenido.p-4(data-aos="flip-up")
        p.mb-0 También hay una variedad de tecnologías DSL de mayor velocidad que gozan de penetración en un puñado de países. Por ejemplo, la DSL de muy alta velocidad (VDSL), con mayor penetración hoy en día en Corea del Sur y Japón, ofrece unas impresionantes tasas de 12 a 55 Mbps de bajada y de 1.6 a 20 Mbps de subida. 

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Cable

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img32.svg', alt='Imágen decorativa')

      .col-lg-8
        .cajon.cajon-amarillo.p-4.mb-3(data-aos="flip-up")
          p.mb-0 Muchas residencias en Norteamérica y en otros lugares reciben cientos de canales de televisión por redes de cable coaxial. (Más adelante hablaremos del cable coaxial). En un sistema tradicional de televisión por cable, una cabecera emite canales de televisión a través de una red de distribución de cable coaxial y amplificadores a las residencias.

        p(data-aos="fade-left") Mientras que el <b>DSL y el <i>dial-up</i></b> utilizan la infraestructura de telefonía local de la empresa de telecomunicaciones, el acceso a Internet por cable utiliza la infraestructura de televisión por cable de la compañía. Una residencia obtiene el acceso a Internet por cable de la misma compañía que le proporciona la televisión por cable. Como se ilustra en la figura 8, <b style= 'color:#5573C6;'>la fibra óptica conecta la cabecera del cable con los empalmes del barrio</b>, desde los que se utiliza el cable coaxial tradicional para llegar a las casas y apartamentos individuales. Cada unión de barrio suele dar soporte a entre 500 y 5.000 hogares. Dado que en este sistema se emplean tanto la fibra como el cable coaxial, suele denominarse fibra híbrida coaxial (HFC). 

    p.mb-5(data-aos="fade-right") El acceso a Internet por cable requiere módems especiales, llamados <b style= 'color:#5573C6;'>cable-módem</b>. Al igual que el módem DSL, el módem por cable suele ser un <b>dispositivo externo y se conecta al PC doméstico</b> a través de un puerto Ethernet. Los cable módems dividen la red <b>HFC en dos canales</b>, <b style= 'color:#5573C6;'>uno de bajada y otro de subida</b>. Al igual que con la DSL, el acceso suele ser asimétrico, ya que el canal de bajada suele tener asignada una velocidad de transmisión superior a la del canal de subida. Una característica importante del acceso a Internet por cable es que se trata de un medio de difusión compartido. En concreto, <b>cada paquete enviado por la cabecera viaja en sentido descendente por todos los enlaces hasta cada hogar</b>; y cada paquete enviado por un hogar viaja por el canal ascendente hasta la cabecera. Por esta razón, si varios usuarios están descargando simultáneamente un archivo de vídeo en el canal de bajada, la velocidad real a la que cada usuario recibe su archivo de vídeo será significativamente menor que la velocidad de bajada agregada del cable. Por otro lado, si sólo hay unos pocos usuarios activos y todos navegan por la web, entonces cada uno de los usuarios puede recibir realmente las páginas web a la velocidad total de bajada del cable, porque los usuarios raramente solicitarán una página web exactamente al mismo tiempo. Como el canal de subida también se comparte, se necesita <b style= 'color:#5573C6;'>un protocolo de acceso múltiple distribuido</b> para coordinar las transmisiones y evitar colisiones.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-7
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 8.
          span Conexiones por cables.
      
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img33.svg', alt='Diagrama<br>Descripción generada automáticamente')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img34.svg', alt='Imágen decorativa')

      .col-lg-5
        .tarjeta-gris1.p-3.px-5(data-aos="fade-left")
          p Los defensores de la DSL se apresuran a señalar que la DSL es una conexión punto a punto entre el hogar y el ISP y, por lo tanto, toda la capacidad de transmisión del enlace DSL entre el hogar y el ISP es dedicada y no compartida. Los defensores del cable, sin embargo, sostienen que una red HFC de dimensiones razonables proporciona mayores velocidades de transmisión que la DSL. La batalla entre la DSL y la HFC por el acceso residencial de alta velocidad es encarnizada, sobre todo en Norteamérica. En las zonas rurales, donde no están disponibles ni la DSL ni la HFC, se puede utilizar un enlace por satélite para conectar una respuesta a Internet a velocidades superiores a 1 Mbps; StarBand y HughesNet son dos de estos proveedores de acceso por satélite.

    .row.bg-titulo2.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Fibra hasta el hogar (FTTH)

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p(data-aos="fade-left") La fibra óptica puede ofrecer velocidades de transmisión mucho mayores que el cable de cobre de par trenzado o el cable coaxial. Algunas empresas de telecomunicaciones locales (en muchos países), que han instalado recientemente fibra óptica desde sus centrales hasta los hogares, ofrecen ahora acceso a Internet de alta velocidad, así como servicios tradicionales de teléfono y televisión a través de las fibras ópticas. En Estados Unidos, Verizon ha sido especialmente agresiva con la FTTH con su servicio FIOS. En Colombia, empresas como ETB, Movistar, tiene la capacidad de instalar fibra óptica como tecnología de acceso.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-3(data-aos="flip-up")
          p.mb-0 Hay varias tecnologías que compiten para la distribución óptica desde la central hasta los hogares. La red de distribución óptica más sencilla es la denominada fibra directa, en la que hay una fibra que sale de la OC para cada hogar. Esta distribución puede proporcionar un gran ancho de banda, ya que cada cliente tiene su propia fibra dedicada hasta la oficina central. Lo más habitual es que cada fibra que sale de la oficina central sea compartida por muchos hogares; no es hasta que la fibra se acerca relativamente a los hogares cuando se divide en fibras individuales específicas para cada cliente.

        p(data-aos="fade-left") Existen dos arquitecturas de red de distribución óptica que compiten entre sí y que realizan esta división: las redes ópticas activas (AON) y las redes ópticas pasivas (PON). La AON es esencialmente, Ethernet conmutada. Aquí hablaremos brevemente de las PON, que se utilizan en el servicio FIOS de Verizon. La figura 7 muestra la FTTH utilizando la arquitectura de distribución PON. Cada hogar tiene un terminador de red óptica (ONT), que está conectado por fibra óptica dedicada a un divisor de barrio. 

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img35.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .cajon.cajon-amarillo.p-4(data-aos="flip-up")
        p.mb-0 El divisor combina un número de hogares (normalmente menos de 100) en una única fibra óptica compartida, que se conecta a un terminador de línea óptica (OLT) en la centralita de la empresa de telecomunicaciones. El OLT, que realiza la conversión entre las señales ópticas y eléctricas, se conecta a Internet a través de un <i>router</i> de la empresa de telecomunicaciones. En el hogar, los usuarios conectan un <i>router</i> doméstico (normalmente un <i>router</i> inalámbrico) a la ONT y acceden a Internet a través de este <i>router</i> doméstico. En la arquitectura PON, todos los paquetes enviados desde la OLT al divisor se replican en el divisor (de forma similar a una cabecera de cable).

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-7
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 9.
          span Conexión de FTTH.
      
        figure
          img(src='@/assets/curso/temas/tema1/img36.svg', alt='Figura que representa la conexión de FTTH, la cual contiene fibra óptica y divisores ópticos, una oficina central y por supuesto conexión a internet, entre otros aspectos.')

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p(data-aos="fade-right") La FTTH puede proporcionar potencialmente velocidades de acceso a Internet del orden de los gigabits por segundo. Sin embargo, la mayoría de los ISP de FTTH ofrecen diferentes tarifas, y las más altas cuestan naturalmente más dinero. La mayoría de los clientes de FTTH disfrutan hoy de tarifas de descarga de entre 10 y 20 Mbps y de subida de entre 2 y 10 Mbps. Además del acceso a Internet, las fibras ópticas transportan servicios de televisión y telefonía tradicional.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
