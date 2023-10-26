<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conectividad de la red

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.svg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Internet puede considerarse una infraestructura que proporciona servicios a las aplicaciones distribuidas que se ejecutan en los sistemas finales. Lo ideal sería que los servicios de Internet pudieran mover todos los datos que quisiéramos entre dos sistemas finales cualquiera, de forma instantánea y sin ninguna pérdida de datos.
          br
          p Pero este es un objetivo muy elevado, que no se puede alcanzar en la realidad. En cambio, las redes informáticas limitan necesariamente el rendimiento (la cantidad de datos por segundo que se pueden transferir) entre los sistemas finales, introducen retrasos entre ellos y pueden llegar a perder paquetes. Por un lado, es lamentable que las leyes físicas de la realidad introduzcan retrasos y pérdidas y limiten el rendimiento. Por otro lado, dado que las redes informáticas tienen estos problemas, hay muchas cuestiones fascinantes en torno a la forma de resolverlos.

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p(data-aos="fade-left") Recordemos que un paquete comienza en un <i>host</i> (el origen), pasa por una serie de <i>routers</i>s y termina su viaje en otro <i>host</i> (el destino). Cuando un paquete viaja de un nodo (<i>host</i> o <i>router</i>) al siguiente nodo (<i>host</i> o <i>router</i>) a lo largo de este camino, el paquete sufre varios tipos de retrasos en cada nodo a lo largo del camino. Los más importantes son el retardo de procesamiento nodal, el <b>retardo de colas, el retardo de transmisión y el retardo de propagación</b>; juntos, estos retardos se acumulan para dar un retardo nodal total. Para comprender en profundidad la conmutación de paquetes y las redes informáticas, debemos entender la naturaleza e importancia de estos retrasos.

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Tipos de retraso

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-right") Exploremos estos retrasos en el contexto de la Figura 18, que encontraremos más adelante. Como parte de su ruta de <b style= 'color:#5573C6;'>extremo a extremo entre el origen y el destino</b>, un paquete se envía desde el nodo ascendente a través del enrutador A al enrutador B. Nuestro objetivo es caracterizar el retardo nodal en el enrutador A. Tenga en cuenta que el enrutador A tiene un enlace de salida que lleva al enrutador B. Este enlace está precedido por una cola (también conocida como buffer). Cuando el paquete llega al <i>router</i> A desde el nodo ascendente, el <i>router</i> A examina la cabecera del paquete para determinar el enlace de salida apropiado para el paquete y luego dirige el paquete a este enlace. En este ejemplo, el enlace de salida para el paquete es el que lleva al enrutador B. 

      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/gif-1.gif', alt='Imagen animada que muestra el proceso de los tipos de retraso.')

    .row.justify-content-center.align-items-center.mb-5
      .cajon.cajon-amarillo.p-4(data-aos="flip-up")
        p.mb-4 Un paquete puede ser transmitido en un enlace únicamente si no hay otro paquete siendo transmitido en ese momento en el mismo enlace y si no hay otros paquetes que lo precedan en la cola de espera. En caso de que el enlace esté ocupado o haya otros paquetes en espera, el nuevo paquete se agregará a la cola. Una vez entendido este proceso de paquetes, examinaremos algunos tipos de retraso.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='Imágen decorativa')

      .col-lg-7
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Retraso de procesamiento")
            p El tiempo necesario para examinar la cabecera del paquete y determinar a dónde dirigirlo es parte del retardo de procesamiento. El retardo de procesamiento también puede incluir otros factores, como el tiempo necesario para comprobar si hay errores a nivel de bits en el paquete que se produjeron al transmitir los bits del paquete desde el nodo ascendente al <i>router</i> A. Los retrasos de procesamiento en los <i>router</i>s de alta velocidad suelen ser del orden de microsegundos o menos. Después de este procesamiento, el <i>router</i> dirige el paquete a la cola que precede al enlace con el <i>router</i> B. 

          .row(numero="2" titulo="Retraso en la cola")
            p En la cola, el paquete experimenta un retardo de cola mientras espera ser transmitido al enlace. La duración del retardo de la cola de un paquete específico dependerá del número de paquetes que lleguen antes y que estén en la cola esperando ser transmitidos por el enlace. Si la cola está vacía y no se está transmitiendo ningún otro paquete, el retardo de cola de nuestro paquete será cero. En cambio, si el tráfico es intenso y hay muchos otros paquetes en espera de ser transmitidos, el retardo de la cola será elevado. Veremos en breve que el número de paquetes que un paquete que llega puede esperar encontrar es una función de la intensidad y la naturaleza del tráfico que llega a la cola. En la práctica, los retrasos en las colas pueden ser del orden de microsegundos a milisegundos.

          .row(numero="3" titulo="Retraso en la transmisión")
            p Suponiendo que los paquetes se transmiten por orden de llegada, como es habitual en las redes de conmutación de paquetes, nuestro paquete sólo puede transmitirse después de que se hayan transmitido todos los paquetes que han llegado antes que él. Denotemos la longitud del paquete por L bits, y la velocidad de transmisión del enlace desde el <i>router</i> A al <i>router</i> B por R bits/s. Por ejemplo, para un enlace Ethernet de 10 Mbps, la velocidad es R = 10 Mbps; para un enlace Ethernet de 100 Mbps, la velocidad es R = 100 Mbps. El retardo de transmisión es L/R. Este es el tiempo necesario para empujar (es decir, transmitir) todos los bits del paquete en el enlace. En la práctica, los retrasos de transmisión suelen ser del orden de microsegundos a milisegundos.

          .row(numero="4" titulo="Retraso de propagación")
            p Una vez que un bit se introduce en el enlace, tiene que propagarse hasta el <i>router</i> B. El tiempo necesario para propagarse desde el principio del enlace hasta el <i>router</i> B es el retardo de propagación. El bit se propaga a la velocidad de propagación del enlace. La velocidad de propagación depende del medio físico del enlace (es decir, fibra óptica, cable de cobre de par trenzado, etc.) y está en el rango de 2 108 m/s. a 3 108 m/s.

    .row.bg-titulo4.align-items-center.p-2.mb-3(data-aos="fade-left")
      h3.mb-3.mt-2 Comparación del retardo de transmisión y propagación

    p.mb-5(data-aos="fade-right") Los recién llegados al campo de las redes informáticas a veces tienen dificultades para entender la diferencia entre el retardo de transmisión y el de propagación. La diferencia es sutil pero importante. <b>El retardo de transmisión</b> es el <b style= 'color:#5573C6;'>tiempo que necesita el <i>router</i> para enviar el paquete</b>; es una función de la longitud del paquete y de la velocidad de transmisión del enlace, pero no tiene nada que ver con la distancia entre los dos <i>routers</i>s. <b>El retardo de propagación</b>, por otro lado, <b style= 'color:#5573C6;'>es el tiempo que tarda un bit en propagarse de un <i>router</i> al siguiente</b>; es una función de la distancia entre los dos <i>routers</i>s, pero no tiene nada que ver con la longitud del paquete o la velocidad de transmisión del enlace.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Una analogía puede aclarar las nociones de retardo de transmisión y propagación. Considere una autopista con un peaje cada 100 kilómetros. Se puede pensar en los segmentos de la autopista entre las cabinas de peaje como enlaces y en las cabinas de peaje como enrutadores. Supongamos que los coches viajan (es decir, se propagan) por la autopista a una velocidad de 100 km/hora (es decir, cuando un coche sale de un peaje, acelera instantáneamente a 100 km/hr y mantiene esa velocidad entre peajes). Supongamos a continuación que 10 coches, que viajan juntos como una caravana, se suceden en un orden fijo. Se puede pensar en cada coche como un bit y en la caravana como un paquete. Supongamos también que cada peaje atiende (es decir, transmite) a un coche a un ritmo de un coche cada 12 segundos, y que es de noche, de modo que los coches de la caravana son los únicos que circulan por la autopista. Por último, supongamos que cuando el primer coche de la caravana llega a un peaje, espera en la entrada hasta que los otros nueve coches hayan llegado y se hayan alineado detrás de él. El tiempo necesario para que el peaje empuje toda la caravana hacia la autopista es de (10 coches) /(5 coches/minuto) = 2 minutos. Este tiempo es análogo al retardo de transmisión en un <i>router</i>. El tiempo necesario para que un coche viaje desde la salida de un peaje hasta el siguiente es de 100 km/(100 km/hora) = 1 hora. Este tiempo es análogo al retardo de propagación. Por lo tanto, el tiempo que transcurre desde que la caravana se almacena frente a un peaje hasta que se almacena frente al siguiente peaje es la suma del retardo de transmisión y el retardo de propagación; en este ejemplo, 62 minutos.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img4.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4(data-aos="flip-down")
          p.mb-0 Analicemos un poco más esta analogía. <b>¿Qué pasaría si el tiempo de servicio de un peaje para una caravana fuera mayor que el tiempo que tarda un coche en desplazarse entre peajes?</b> Por ejemplo, supongamos ahora que los coches viajan a una velocidad de 1.000 km/hr y que el peaje atiende a los coches a razón de un coche por minuto. Entonces, el tiempo de viaje entre dos peajes es de 6 minutos y el tiempo para atender a una caravana es de 10 minutos. En este caso, los primeros coches de la caravana llegarán al segundo peaje antes de que los últimos coches de la caravana abandonen el primer peaje. Esta situación también se da en las redes de conmutación de paquetes: los primeros bits de un paquete pueden llegar a un enrutador mientras muchos de los bits restantes del paquete siguen esperando a ser transmitidos por el enrutador anterior.

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Pérdida de paquetes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-right") Se asume que una cola es capaz de contener un número infinito de paquetes. En realidad, la cola que precede a un enlace tiene una capacidad finita, aunque la capacidad de la cola depende en gran medida del diseño y el coste del <i>router</i>. Dado que la capacidad de la cola es finita, los retrasos de los paquetes no se aproximan realmente al infinito cuando la intensidad del tráfico se acerca a 1. En cambio, un paquete puede llegar y encontrar una cola llena. Al no haber lugar para almacenar dicho paquete, el <i>router</i> lo dejará caer; es decir, el paquete se perderá. Este desbordamiento en una cola puede verse de nuevo en el <b style= 'color:#5573C6;'>#[i applet]</b> de <b style= 'color:#5573C6;'>#[i Java]</b> para una cola cuando la intensidad del tráfico es mayor que 1.

        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          p.mb-0 Desde el punto de vista del sistema final, una pérdida de paquetes se verá como un paquete que se ha transmitido al núcleo de la red pero que nunca sale de la red en el destino. La fracción de paquetes perdidos aumenta a medida que aumenta la intensidad del tráfico. Por lo tanto, el <b style= 'color:#5573C6;'>rendimiento en un nodo suele medirse</b> no sólo en términos de retardo, sino también en términos de <b style= 'color:#5573C6;'>probabilidad de pérdida de paquetes</b>.

      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/gif-2.gif', alt='Imagen animada que muestra el proceso de la pérdida de paquetes.')

    .row.bg-titulo3.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Rendimiento en las redes de computadores

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img5.svg', alt='Imágen decorativa')

      .col-lg-9
        p(data-aos="fade-left") Además del retardo y la pérdida de paquetes, otra medida de rendimiento crítica en las redes de ordenadores es el rendimiento de extremo a extremo. 

        .row.justify-content-center.align-items-center.mb-5
          .col-2.col-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
          
          .col-10.col-lg-11
            p(data-aos="fade-left") Para definir el rendimiento, considere la transferencia de un archivo grande desde el <i>host</i> A al <i>host</i> B, a través de una red informática. Esta transferencia podría ser, por ejemplo, un <b>gran clip de vídeo de un compañero a otro</b> en un sistema de intercambio de archivos P2P.

        p(data-aos="fade-left") El rendimiento instantáneo en cualquier instante de tiempo es la velocidad (en bits/s) a la que el <i>host</i> B recibe el archivo. (Muchas aplicaciones, incluyendo muchos sistemas de intercambio de archivos P2P, muestran el rendimiento instantáneo durante las descargas en la interfaz de usuario - ¡quizás lo hayas observado antes!). Si el archivo consta de F bits y la transferencia tarda T segundos en que el <i>host</i> B reciba todos los F bits, el rendimiento medio de la transferencia del archivo es F/T bits/s. Para algunas aplicaciones, como la telefonía por Internet, es deseable tener un retardo bajo y un rendimiento instantáneo consistente por encima de algún umbral (por ejemplo, más de 24 kbps para algunas aplicaciones de telefonía por Internet y más de 256 kbps para algunas aplicaciones de vídeo en tiempo real). Para otras aplicaciones, incluidas las de transferencia de archivos, el retardo no es crítico, pero es deseable tener el mayor rendimiento posible.

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") Para comprender mejor el importante concepto de rendimiento, veamos algunos ejemplos. La Figura 18 en la parte a muestra dos sistemas finales, <b>un servidor y un cliente</b>, <b style= 'color:#5573C6;'>conectados por dos enlaces de comunicación y un <i>router</i></b>. Consideremos el rendimiento de una transferencia de archivos del servidor al cliente. Sea Rs la velocidad del enlace entre el servidor y el <i>router</i>, y Rc la velocidad del enlace entre el <i>router</i> y el cliente. Supongamos que los únicos bits que se envían en toda la red son los del servidor al cliente. Ahora nos preguntamos, en este escenario ideal, <b style= 'color:#5573C6;'>¿cuál es el rendimiento de servidor a cliente?</b> Para responder a esta pregunta, podemos pensar que los bits son fluidos y los enlaces de comunicación son tuberías. Está claro que el servidor no puede bombear bits a través de su enlace a una velocidad superior a Rs bps; y el <i>router</i> no puede reenviar bits a una velocidad superior a Rc bps. Si Rs < Rc, los bits bombeados por el servidor "fluirán" a través del <i>router</i> y llegarán al cliente a una velocidad de Rs bps, dando un rendimiento de Rs bps. Si, por el contrario, Rc < Rs, el <i>router</i> no podrá reenviar los bits tan rápido como los recibe. En este caso, los bits sólo saldrán del <i>router</i> a una velocidad Rc, dando un rendimiento de extremo a extremo de Rc. (Obsérvese también que, si los bits siguen llegando al <i>router</i> a una velocidad Rs, y siguen saliendo del <i>router</i> a Rc, la acumulación de bits en el <i>router</i> a la espera de ser transmitidos al cliente crecerá y crecerá, una situación muy poco deseable).

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 18.
          span Rendimiento para una prueba de FTP
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Figura que representa el rendimiento para una prueba de FTP, el cual se divide en la parte a y b.')

    p.mb-5(data-aos="fade-right") Así, para esta red simple de dos enlaces, el rendimiento es min {Rc, Rs}, es decir, es la velocidad de transmisión del enlace cuello de botella. Una vez determinado el rendimiento, podemos aproximar el tiempo que se tarda en transferir un archivo grande de F bits del servidor al cliente como F/min {Rs, Rc}. Para un ejemplo concreto, supongamos que se está descargando un archivo MP3 de F = 32 millones de bits, el servidor tiene una velocidad de transmisión de Rs = 2 Mbps, y se tiene un enlace de acceso de Rc = 1 Mbps. El tiempo necesario para transferir el archivo es entonces de 32 segundos. Por supuesto, estas expresiones de rendimiento y tiempo de transferencia son sólo aproximaciones, ya que no tienen en cuenta los problemas a nivel de paquetes y de protocolo.

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imágen decorativa')

      .col-lg-8(data-aos="fade-left")
        .tarjeta-azul2.p-4
          p.mb-0.text-white La Figura 18 en la parte b muestra ahora una red con N enlaces entre el servidor y el cliente, siendo las velocidades de transmisión de los N enlaces R1, R2, ..., RN. Aplicando el mismo análisis que para la red de dos enlaces, encontramos que el rendimiento para una transferencia de archivos del servidor al cliente es min {R1, R2,...,RN}, que es, una vez más, la tasa de transmisión del enlace cuello de botella a lo largo de la ruta entre el servidor y el cliente.

    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 3.1 Pruebas de conectividad

    .bg-fondo1
      .row.justify-content-center.align-items-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img8.svg', alt='Imágen decorativa')    

        .col-lg-10
          .tarjeta.tarjeta-gris-degrade.p-4.py-5(data-aos="fade-up")
            p.mb-0.text-center Para realizar estas pruebas de conectividad se hacen mediciones de un computador conectado a internet. Se utiliza la herramienta ping.

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 ¿Qué es un ping?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='Imágen decorativa')

      .col-lg-5
        .tarjeta-gris4.p-4(data-aos="fade-left")
          p Un ping (<i>Packet Internet o Inter-Network Groper</i>) es un programa básico de Internet que permite a un usuario probar y verificar si una determinada dirección IP de destino existe y puede aceptar peticiones en la administración de redes informáticas. El acrónimo fue inventado para coincidir con el término de los submarinistas para el sonido de un pulso de sonar devuelto. El ping también se utiliza para diagnosticar que un ordenador anfitrión al que el usuario está tratando de llegar está funcionando. Cualquier sistema operativo (OS) con capacidad de red, incluyendo la mayoría del <i>software</i> de administración de red integrado, puede usar ping. Por ejemplo, para encontrar la dirección de punto, como 205.245.172.72, para cualquier nombre de dominio dado, los usuarios de Windows pueden ir a la pantalla del símbolo del sistema (start/run/cmd) e introducir ping xxxxx.yyy, donde xxxxx es el nombre de dominio de segundo nivel, como "whatis", e yyy es el nombre de dominio de primer nivel, como "com".

    .row.justify-content-center.align-items-center.mb-5
      h5.text-center.mb-0 En la figura 19 de muestra el resultado de la prueba ping entre un computador y un servidor de internet.
      h5.text-center En este caso, el servidor tiene la dirección IP 8.8.8.8 que es un servidor DNS de Google.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 19.
          span Prueba de ping
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='Figura que muestra el resultado de la prueba ping entre un computador y un servidor de internet.')

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") Considerando las características de la prueba, los parámetros a considerar son el tiempo de respuesta y la cantidad de paquetes perdidos. En la parte inferior se muestra la estadística de esta prueba. Para los resultados de la figura 19 se enviaron 7 paquetes, se recibieron 7 paquetes y el promedio del tiempo de respuesta fue 16.396 milisegundos.

      p(data-aos="fade-left") Si la conexión no fuera satisfactoria, se vería algo similar a la figura 20. En donde se desconecta el wifi del computador y se hizo el ping al servidor 8.8.8.8.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 20.
          span Prueba de ping fallida
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img11.svg', alt='Figura que representa una prueba de ping fallida.')

    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 3.2 Pruebas de desempeño

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img12.svg')})`}"
        )
        .bloque-texto-g1__texto.p-4(data-aos="flip-down")
          p.mb-0 Las pruebas de desempeño se realizan a través de herramientas de <i>software</i> de escritorio o aplicaciones móviles. Usando el comando ping, se puede realizar la medición del tiempo de respuesta de los paquetes que se envían de un transmisor a un receptor. La premisa es que si el tiempo de respuesta aumenta es porque hay una degradación en el medio de transmisión. Si la conexión es por cable, cabe la posibilidad de que el cable este doblado o roto. Si la conexión es por wifi, puede ser que existan interferencia en el canal inalámbrico. 

    .row.justify-content-center.align-items-center.mb-5
      h5.text-center.mb-0 A continuación, se muestra una gráfica del comportamiento de un enlace inalámbrico.

      h5.text-cente Se conecta un computador a través de wifi y se grafican los tiempos de respuesta. Esto se puede ver en la figura 21.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 21.
          span Medición de los tiempos de respuesta
      .col-lg-11
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img13.svg', alt='Figura que representa una gráfica del comportamiento de un enlace inalámbrico.')

      .col-lg-8
        p Los picos que se presentan son tiempos altos. Dado que el canal es inalámbrico y se está navegando por internet, pudieron ocurrir cuellos de botella que generaron estos tiempos altos.


    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imágen decorativa')

      .col-lg-8(data-aos="fade-left")
        .tarjeta-azul2.p-4
          p.mb-0 
            span.text-white Aunque el ping es una 
            | <b style= 'color:#4ADBD1;'>buena herramienta</b>
            span.text-white , para tener mejor información de 
            | <b style= 'color:#4ADBD1;'>la calidad del enlace</b>
            span.text-white , se puede usar una aplicación web, llamada <i>speed</i> test (Enlace: 
            | <a href="https://www.speedtest.net/es" target="_blank"><b style= 'color:#4ADBD1;'>https://www.speedtest.net/es)</b> </a> 
            span.text-white Esta herramienta mide los tiempos de respuesta y la calidad del ancho de banda. En la figura 22 se muestra el resultado de una medición de rutina.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left")
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 22.
          span Medición de velocidad con una aplicación web
      .col-lg-11
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='Figura que muestra el resultado de una medición de rutina.')

    .row.justify-content-center.align-items-center.mb-5
      p(data-aos="fade-right") En la figura 22, los datos obtenidos por las pruebas muestran, la velocidad de descarga del enlace, la velocidad de subida del enlace y un promedio de los tiempos de respuesta. Para la toma que muestra la figura 22, se infieren que el canal de Internet tiene buenas prestaciones tanto de subida (enviar correos electrónicos o subir archivos a la nube) como de bajada (ver videos o descargar archivos de la nube).

      .cajon.cajon-amarillo.p-4.mb-3(data-aos="flip-up")
        p.mb-0 Las pruebas de velocidad miden la velocidad máxima de tu conexión actual -la rapidez con la que el dispositivo puede cargar y descargar información- accediendo a servidores de prueba cercanos. La prueba imita la actividad en línea en un entorno controlado, descargando archivos de muestra y registrando las velocidades. 

      p(data-aos="fade-left") Estas pruebas son una forma rápida de aislar el rendimiento del proveedor de Internet como variable de su calidad de conexión, y pueden tranquilizarse. Las pruebas de velocidad no le dirán la velocidad absoluta de Internet, pero darán una aproximación. Es una buena práctica realizar varias pruebas porque los resultados pueden variar según la ubicación y la hora del día. Además, las diferentes pruebas destacan diferentes aspectos de la conexión. Los resultados de las pruebas de velocidad deben coincidir con los indicados en el plan del proveedor de Internet.

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Interpreta los resultados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-left") Tanto la velocidad de subida como la de bajada deberían estar aproximadamente cerca de las cifras indicadas en el plan de servicio del proveedor de Internet. Aquí puedes ver que no siempre son iguales. Esto se debe a que la mayoría de las conexiones están diseñadas para descargar más rápido que para cargar. La mayor parte de la actividad en línea, como la carga de páginas web o la transmisión de música, consiste en descargas. La velocidad de subida entra en juego cuando envías archivos grandes por correo electrónico. O si la empresa hace muchas videoconferencias, es importante tener una buena velocidad de subida porque vas a subir muchos vídeos. Si tienes una conexión de un gigabit, tienes que asegurarte de que el hardware no sea un cuello de botella para la velocidad de Internet. Hay algunas piezas de equipo que querrás específicamente para sacar el máximo provecho de su conexión:

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img16.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imágen decorativa')

      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Un cable ethernet")
            p Conectarse directamente al módem siempre va a ser más rápido que una conexión inalámbrica. Cuando dependes de las ondas de radio del Wifi, te pones a merced de materiales como el ladrillo y la piedra, que las bloquearán, y de materiales como la cerámica y el hormigón, que las reflejarán por completo.

          .row(titulo="Una unidad de estado sólido (SSD)")
            p Un disco duro tradicional escribe los datos en un plato físico y los lee con un cabezal móvil, una operación que tarda unos 10-12 ms en completarse. Las unidades de estado sólido, en cambio, pueden acceder a los datos en 0,1 ms o menos porque los almacenan en circuitos eléctricos. Esto afecta a la velocidad a la que tu navegador puede almacenar y acceder a la información de Internet.

          .row(titulo="CPU")
            p En contra de la creencia popular, la velocidad de tu CPU (procesador) sí tiene efecto en la velocidad a la que navegas por Internet. Con velocidades de gigabit, se descargan datos increíblemente rápido, pero eso es sólo una parte de la ecuación. Hay un montón de tareas y ejecución de scripts en la página que deben realizarse antes de que puedas ver e interactuar con el sitio al que estás navegando.

    separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 3.3 Esquemas de redundancia

    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img18.svg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 En el uso común, la "redundancia" no es necesariamente algo bueno. <b>Significa que algo no es necesario</b>. Pero en ingeniería, la redundancia es fundamental: un componente o función redundante <b style= 'color:#5573C6;'>sirve de reserva en caso de que falle algo crucial</b>, de modo que el sistema puede seguir funcionando o restablecerse rápidamente.  La redundancia de red es el principio de <b style= 'color:#5573C6;'>utilizar recursos de red de reserva</b> para minimizar o evitar el tiempo de inactividad en caso de apagón, mal funcionamiento del hardware, error humano, fallo del sistema o ciberataque. Implica la ejecución de instancias alternativas de los servicios centrales de la red y la creación de una infraestructura de red duplicada.

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p(data-aos="fade-left") Básicamente, la redundancia de la red garantiza que haya múltiples caminos para las transmisiones de datos a través de la red. <b style= 'color:#5573C6;'>Si un camino falla o no está disponible, siempre hay un camino alternativo de una entidad de red a otra</b>. Con las redes celulares, la redundancia de la red también significa poder conectarse a varios computadores de redes móviles en el mismo país. Utilizando la tecnología adecuada, esta redundancia permite que sus dispositivos se conecten a la mejor señal dondequiera que se despliegue. Cuanta más redundancia tenga su red, menos riesgo suponen los fallos de red para su organización y sus servicios. Su red no depende de un solo componente o función porque hay otros recursos en espera. Si una pieza se estropea, se sustituye, en lugar de que toda la red se caiga con ella.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="¿Por qué la redundancia de la red es fundamental para las redes de datos?")
            p Para la mayoría de las organizaciones empresariales, una sola hora de inactividad de la red cuesta 300.000 dólares o más. (Un estudio de 2016 descubrió que un solo minuto de tiempo de inactividad no planificado podría costar más de 17.000 dólares). Cada minuto que sus servicios están fuera de línea, está perdiendo miles de dólares, dañando la reputación de su marca y frustrando a sus clientes. En las aplicaciones de empresa a empresa, las interrupciones pueden dañar también los ingresos y la reputación de sus clientes, ya que su tiempo de inactividad se convierte en el de ellos.

            p Por eso la redundancia es un componente esencial del Internet de las cosas. Si tiene un plan de respaldo para cada fallo, puede maximizar la disponibilidad del servicio y reducir el impacto de los problemas relacionados con la red.

          .row(numero="2" titulo="¿De quién es la culpa cuando su dispositivo pierde la conectividad?")
            p Su producto necesita una <b style= 'color:#5573C6;'>conexión a Internet</b> para hacer lo que ha sido diseñado. Independientemente de la causa de un fallo de la red, el usuario final probablemente no va a culpar al operador de telefonía móvil, a un centro de datos de terceros o al fabricante de un componente específico. Le culpará a usted. Porque su producto no está funcionando como se supone que debe hacerlo.

            p Esto también suele ocurrir si su aplicación depende de una <b style= 'color:#5573C6;'>red defectuosa</b> que el cliente proporciona. Compartir una conexión Wifi con los demás dispositivos de tus clientes abre la puerta a mayores riesgos de seguridad en el Internet, que es una de las razones por las que la conectividad celular es tan atractiva para una aplicación como el IoT. El <b>IoT</b> celular también le da más poder para asegurarse de que puede mantener una conexión a Internet fiable. Debe invertir mucho en infraestructura de red o encontrar un proveedor de Infraestructura como <b style= 'color:#5573C6;'>Servicio (IaaS)</b> en el que pueda confiar para ofrecer la conectividad que necesitan sus clientes.

            p Puede (y debe) incorporar redundancia a su aplicación, pero también querrá buscar proveedores de conectividad que diseñen teniendo en cuenta la redundancia de la red.

      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img19.svg', alt='Imágen decorativa')

    .row.bg-titulo1.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Redundancia geográfica

    p.mb-5(data-aos="fade-right") La infraestructura de red tiene que ocupar un espacio físico. Los centros de datos tienen que vivir en algún sitio. Para las empresas que dependen de la infraestructura interna, esto crea algunos desafíos. 

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img20.svg', alt='Imágen decorativa')

      .col-lg-8(data-aos="fade-left")
        .tarjeta-azul2.p-4
          p.mb-0 
            | <b style= 'color:#4ADBD1;'>¿Qué ocurre cuando su centro de datos se queda sin energía? ¿O si hay una catástrofe natural que dañe sus equipos? ¿O si hay una amenaza de ciberseguridad? </b>
            span.text-white Poner todos sus recursos en una ubicación geográfica crea un riesgo significativo de posibles fallos en la red. También puede aumentar la latencia a medida que se despliega más lejos de su centro de datos (las señales de red tienen que viajar más lejos).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Los proveedores de <b style= 'color:#5573C6;'>IaaS</b> y las empresas de nivel empresarial utilizan zonas de disponibilidad para crear <b style= 'color:#5573C6;'>redundancia geográfica</b>. Cada zona de disponibilidad puede contener varios centros de datos, y los recursos de red pueden compartirse entre zonas. Pueden utilizar instancias duplicadas de una zona de disponibilidad para que sirvan de copia de seguridad de otra. Esto garantiza que las catástrofes, los errores, los fallos, los ataques y otros problemas que se produzcan en una sola ubicación geográfica no crearán interrupciones significativas del servicio. 

        .cajon.cajon-amarillo.p-4(data-aos="flip-up")
          p.mb-0 Si un centro de datos o una zona de disponibilidad entera se caen, siempre hay una copia de seguridad en otra ubicación, para que sus usuarios ni siquiera noten la interrupción.
      
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img21.svg', alt='Imágen decorativa')

    .row.bg-titulo3.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Redundancia de operadores de red

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img22.svg', alt='Imágen decorativa')

      .col-lg-5
        .tarjeta-gris4.p-4(data-aos="fade-left")
          p Con una tarjeta SIM tradicional, tu dispositivo sólo puede conectarse a un operador de red específico y a los operadores con los que tiene acuerdos de itinerancia. Cuando estás en el país de tu operador, sólo puedes conectarte a su red. Eso significa que a veces tienes que tolerar una mala señal e interrupciones del servicio. Y cuando estás en itinerancia, siempre vas a tener que pagar <b style= 'color:#5573C6;'>tarifas de <i>roaming</i></b> por los datos que utilices.

          p Además, cuando necesitas desplegar en un país en el que tu operador no tiene acuerdos de itinerancia (o las normas gubernamentales impiden la itinerancia permanente), tienes que conseguir un nuevo contrato con otro operador, <b style= 'color:#5573C6;'>instalar nuevas SIM</b>, utilizar potencialmente nuevos módems y componentes, y crear múltiples SKU para el mismo producto.

    .row.bg-titulo3.align-items-center.p-2.mb-5(data-aos="fade-left")
      h3.mb-3.mt-2 Modelos de redundancia de red

    p.mb-5(data-aos="fade-right") Hay más de una forma de construir una conexión fiable. Y eso significa que hay más de una forma de construir una redundancia de red. He aquí algunas formas en que las organizaciones y los proveedores de IaaS desarrollan sistemas de respaldo para crear rutas de red alternativas y mantener sus servicios en línea.

    .row.justify-content-center.align-items-center.my-5
      .tarjeta.tarjeta--blanca.bg-slyderA.p-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4.mb-5 Activo/Activo
              p La arquitectura <b>activo/activo</b> utiliza dos instancias con la misma funcionalidad y distribuye los datos entre estas instancias, manteniendo constantemente sincronizada la información de estado. Cada vez que una instancia de la red se interrumpe, el sistema la cambia automáticamente a otra instancia de la red.
            
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img23.svg', alt='Imágen decorativa')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4.mb-5 Activo/Pasivo
              p Al igual que una arquitectura Activo/Activo, una arquitectura Activo/Pasivo utiliza dos instancias, una de las cuales puede servir como copia de seguridad. Sin embargo, en una red Activo/Pasivo, las copias son "pasivas". No se ejecutan de forma sincronizada con la red activa, y sólo inician el servicio cuando los recursos de la red primaria fallan. Este modelo utiliza menos recursos para funcionar, pero tiene un gran inconveniente: cuando se necesitan las copias de seguridad, hay que restablecer las conexiones y los dispositivos tienen que volver a un estado anterior.
            
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img24.svg', alt='Imágen decorativa')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4.mb-5 Red de doble anillo
              p En una red en anillo, todos los nodos (servidores, bases de datos, dispositivos, etc.) están unidos en un círculo. Cada nodo se conecta a dos nodos adyacentes. Una transmisión de un nodo a otro tiene que pasar por todos los nodos intermedios. El problema de una red en anillo es que, si un solo nodo falla, rompe el círculo e impide que las transmisiones lleguen a su destino. Los paquetes de datos se encuentran esencialmente en un callejón sin salida cuando llegan al nodo que no está disponible. (Piensa en una cadena de luces de Navidad que deja de funcionar cuando se apaga una bombilla).
            
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img25.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-primario.p-4(data-aos="flip-up")
        p.mb-0 Una red de doble anillo crea un bucle adicional que permite que las transmisiones "den la vuelta" dentro del bucle. Cuando los paquetes de datos viajan por la red y llegan a un nodo no disponible, vuelven a recorrer el anillo en sentido contrario hasta llegar al nodo deseado.



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
