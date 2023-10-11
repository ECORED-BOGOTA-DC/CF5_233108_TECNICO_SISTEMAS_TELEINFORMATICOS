<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 4
      h1 Estructura de una red de datos

    .bg-fondo1
      .row.justify-content-center.align-items-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='Imágen decorativa')    

        .col-lg-10
          .tarjeta.tarjeta-gris-degrade.p-4(data-aos="fade-up")
            p.mb-0.text-center La topología de red suele ser una descripción esquemática de la disposición de una red, <b style= 'color:#5573C6;'>incluyendo sus nodos y líneas de conexión.</b>
            p.mb-0.text-center Hay dos formas de definir la geometría de la red: la topología física y la topología lógica o de señales. 

    .tarjeta--container.row.my-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imágen decorativa')

        h4.text-center.text-white Topología física

        p Describe la ubicación e instalación de los distintos componentes de la red, como los dispositivos y los cables.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='Imágen decorativa')

        h4.text-center.text-white Topología lógica
          
        p.text-white Explica el flujo de información (datos) y la transmisión de la red, aparte del diseño físico. Las distancias entre los nodos, las interconexiones físicas, las velocidades de transmisión y/o los tipos de señales pueden diferir entre dos redes.

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa').img3-tm1
      
      .col-10.col-lg-11
        p <b>Ejemplo de FTTH:</b> los nodos de FTTH tienen uno o más enlaces físicos con otros dispositivos de la red y el dibujo de los enlaces, el diseño de la red, entre estos nodos en un mapa da la topología física de la red. La topología lógica se diseña trazando y dibujando cómo se transmiten los datos a través de la red; velocidades de línea, longitudes de onda, señalización, etc.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imágen decorativa')

      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="La topología física")
            p Viene determinada por los dispositivos activos de la red y los medios de comunicación, como el tipo de cable, el nivel de control o la tolerancia a los fallos deseada y los costos relacionados con su infraestructura pasiva y activa.

          .row(numero="2" titulo="La topología lógica")
            p Es la forma en que las señales actúan sobre el medio de la red, o la forma en que los datos pasan por la red de un dispositivo a otro sin tener en cuenta la interconexión física de los dispositivos. La topología lógica de una red no es necesariamente la misma que su topología física. Por ejemplo, la Ethernet de par trenzado original que utilizaba concentradores repetidos era una topología lógica de bus con una disposición física de topología de estrella. También Token Ring es una topología lógica de anillo, pero está cableada como topología física de estrella desde la unidad de acceso al medio.

    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 La clasificación lógica de las topologías de red suele seguir las mismas clasificaciones que las físicas de las topologías de red, pero describe el camino que siguen los datos entre los nodos que se utilizan, en contraposición a las conexiones físicas reales entre los nodos. Las topologías lógicas suelen estar determinadas por los protocolos de red, en lugar de estarlo por la disposición física de los cables, hilos y dispositivos de red o por el flujo de las señales eléctricas u ópticas, aunque en muchos casos los caminos que las señales toman entre los nodos pueden coincidir estrechamente con el flujo lógico de los datos, de ahí la convención de utilizar los términos topología lógica y topología de señales indistintamente.

      .col-lg-10
        .cajon.cajon-amarillo.p-4
          p.mb-0 Las topologías lógicas pueden reconfigurarse dinámicamente mediante equipos especiales, como los routers y los conmutadores.

      separador
      #t_4_1.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
         h2 4.1 Topologías de redes


      p.mb-5 Existen varias topologías de redes que definen cómo se estructuran y organizan las conexiones entre los dispositivos. Cada topología tiene sus ventajas y desafíos, y la elección adecuada depende de las necesidades específicas de una organización. En este recurso interactivo, exploraremos las siguientes topologías de redes:

    .row.justify-content-center.align-items-center.bg3-tema5
      .col-12.p-4
        .tarjeta.tarjeta--azul.p-4.tarjeta-azul-moify
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema4/img5.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 <b style= 'color:#5573C6;'>Punto a punto</b>

                p La topología más básica y comúnmente utilizada en los sistemas POTS (Plain Old Telephone Systems) es un enlace permanente entre dos puntos finales. Su topología conmutada punto a punto es el modelo básico de los sistemas de telefonía convencionales. La red punto a punto está diseñada para ofrecer comunicaciones directas y dedicadas entre los dos puntos finales.

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema4/img6.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 <b style= 'color:#5573C6;'>BUS</b>

                p Las redes de bus utilizan un único cable troncal para conectar todos los dispositivos, lo que resulta económico, pero puede ser un punto de fallo. Los dispositivos envían mensajes de difusión que solo el destinatario procesa. La gestión de la red puede ser costosa. Si el cable se rompe o no está terminado en ambos extremos, la transferencia de datos se detiene y toda la red se cae.

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema4/img7.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 <b style= 'color:#5573C6;'>Estrella</b>

                p En la topología en estrella, cada dispositivo se conecta a un hub central. Todo el tráfico pasa por el concentrador, facilitando el diseño e incorporación de nodos. Sin embargo, el concentrador es un punto de fallo, aunque suele tener redundancia. Eronen, A. (2009).

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema4/img8.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 <b style= 'color:#5573C6;'>Anillo</b>

                p La topología de red en anillo es circular, donde los datos viajan en una dirección y cada dispositivo actúa como repetidor para mantener la señal fuerte. Cada nodo incorpora un receptor para la señal entrante y un transmisor para enviar datos al siguiente dispositivo. Los datos pasan por todos los dispositivos hasta llegar al destino. Cada nodo es esencial para la conexión y transmisión de datos en el anillo.

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema4/img9.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 <b style= 'color:#5573C6;'>Malla</b>

                p La topología de red en malla puede ser completa o parcial. En la malla completa, cada estación está conectada directamente con todas las demás; en la malla parcial, algunas estaciones se conectan solo con nodos específicos. Una red totalmente conectada implica que cada nodo está conectado con todos los demás, eliminando la necesidad de conmutación o difusión. Sin embargo, esta topología es poco práctica para redes grandes debido al aumento cuadrático de conexiones según la fórmula C= n(n-1)/2.

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema4/img10.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 <b style= 'color:#5573C6;'>Árbol</b>

                p La topología de árbol combina las características de bus y estrella. Tiene un nodo central conectado a varios nodos del nivel inferior mediante enlaces punto a punto. Estos nodos inferiores también están interconectados. La red puede tener múltiples niveles, pero es susceptible a fallos cuando las conexiones superiores fallan. Cada nodo tiene un número fijo de nodos conectados en el siguiente nivel, llamado "factor de ramificación" del árbol.

    separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 4.2 Redes inalámbricas

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img11.svg', alt='Imágen decorativa')

      .col-lg-8
        p Hay muchos tipos de <b style= 'color:#5573C6;'>tecnologías inalámbricas integradas</b> en los dispositivos móviles que podrían utilizarse para construir la nube móvil. La atención se centra en las tecnologías de comunicaciones celulares y de corto alcance. Las tecnologías de comunicaciones móviles e inalámbricas han evolucionado siguiendo diferentes vías de desarrollo, a veces denominadas la vía móvil o celular y la vía inalámbrica, respectivamente. En primer lugar, hablaremos de la trayectoria de la evolución celular, presentando las principales tecnologías representativas de las generaciones de comunicaciones móviles. A continuación, se presentan las tecnologías de redes de área local inalámbricas (WLAN) o Wifi, es decir, diferentes versiones de IEEE802.11 y <i>Bluetooth</i>. 

        p La figura 23, muestra las velocidades de datos soportadas en función del alcance de las comunicaciones para las diferentes tecnologías de comunicaciones móviles e inalámbricas. Se muestran tecnologías 2G como GSM CSD, GPRS, tecnologías 3G como UMTS/HSDPA y tecnologías 4G como WiMAX, LTE, HSPA+ y LTE advanced (LTE-A). Ambas tecnologías, la celular y la de comunicación de corto alcance, pueden utilizarse para construir una nube móvil. Estas <b style= 'color:#5573C6;'>tecnologías trabajan en bandas de frecuencias diferentes</b> y pueden considerarse ortogonales en su uso de frecuencias. Al final de este componente también se examinan las tecnologías futuras en las que la conexión con la superposición y la conexión con los pares cooperativos se encuentran en la misma banda. LTE advanced (LTE- A) es un sistema celular que soporta la comunicación de dispositivo a dispositivo proporcionando los recursos necesarios para la comunicación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 23.
          span Diferentes tecnologías inalámbricas
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema4/img12.svg', alt='Imágen decorativa')

    .row.bg-titulo3.align-items-center.p-2.mb-5
      h3.mb-3.mt-2 Sistemas de comunicaciones celulares

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img13.svg', alt='Imágen decorativa')

      .col-lg-8
        p La tecnología celular ha experimentado un largo y exitoso camino de evolución a lo largo de diferentes generaciones (de 1G a 4G), con el objetivo de proporcionar a los usuarios móviles un soporte de velocidad de datos cada vez mayor. Tras la primera generación (1G), de sistemas de comunicaciones móviles, que utilizaban esquemas de transmisión analógicos y no tenían intención de soportar conexiones de datos, la era digital comenzó con la segunda generación (2G). La tecnología dominante en la 2G era el GSM (Global System for Mobile Communications). Originalmente, GSM significaba Groupe Special Mobile, ya que era una iniciativa europea. GSM alcanzó una penetración mundial, mientras que las tecnologías competidoras, como IS-95, cdmaOne o cdma2000, se limitaron sólo a algunos países. GSM utilizaba un ancho de banda de 200kHz y la velocidad que soportaban las primeras conexiones de datos era de 9,6kbps.

    .row.bg-titulo2.align-items-center.p-2.mb-5
      h3.mb-3.mt-2 Tecnologías de corto alcance

    .row.justify-content-center.align-items-center.mb-5
      p Después de las tecnologías celulares, presentamos aquí los conceptos básicos de <i>Bluetooth</i> y Wifi (IEEE802.11). Aunque hay un gran número de otras tecnologías de corto alcance, aquí nos centramos en estas dos tecnologías que se encuentran ampliamente en la mayoría de los dispositivos móviles hoy en día. 

      p Aunque <i>Bluetooth</i> sigue siendo la tecnología de comunicación de corto alcance más utilizada en los dispositivos móviles actuales, como teléfonos fijos y <i>smartphones</i>, IEEE 802.11 está ganando terreno en los dispositivos móviles más avanzados, como los <i>smartphones</i>. A continuación, examinaremos la definición de cada una de ellas:

    TabsB.color-primario
      .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/curso/temas/tema4/img14.svg')")
        .row.justify-content-center.align-items-center       
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img15.svg', alt='Imágen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Es una tecnología de radio que opera en la banda de 2,4 GHz. Se suele denominar tecnología de <b style= 'color:#5573C6;'>comunicación de corto alcance</b>, ya que el rango de comunicación es relativamente pequeño en comparación con los sistemas celulares. El alcance de la comunicación viene determinado por la clase de potencia del módulo <b style= 'color:#5573C6;'><i>Bluetooth</i></b>. Existen tres clases diferentes de <i>Bluetooth</i>: <b>clase 1, clase 2 y clase 3.</b> Los dispositivos de clase 1 pueden tener un alcance de comunicación de hasta 100 metros, mientras que los de clase 2 y 3 están limitados a 10 metros o menos de un metro, respectivamente. La mayoría de los dispositivos móviles son de clase 2, mientras que los puntos de acceso <i>Bluetooth</i> son de clase 1. Los sistemas <i>Bluetooth</i> se componen de una parte de radio/banda base y una pila de <i>software.</i>

      .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/curso/temas/tema4/img16.svg')")
        .row.justify-content-center.align-items-center       
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema4/img17.svg', alt='Imágen decorativa')

          .col-md-7.mb-4.mb-md-0
            p Es un conjunto de estándares para redes inalámbricas de corto alcance (WLAN). Se basa en un protocolo de acceso al medio y diferentes implementaciones de la capa física. Inicialmente, contaba con tres formas de realización: <b style= 'color:#5573C6;'>dispersión de secuencia directa (DS), salto de frecuencia (FH) e infrarrojo difuso (IR)</b>. La tecnología DS prevaleció por su simplicidad, ofreciendo velocidades de datos de 1 o 2Mbps en la banda de 2.4GHz. Luego, se introdujo 802.11b con velocidades de hasta 11Mbps. Se pueden utilizar tres canales ortogonales para evitar interferencias con los vecinos. Cuando la banda de 2.4GHz se saturó, llegó IEEE 802.11a en la banda de 5GHz, con hasta 12 canales y 54Mbps. Además, 802.11a utiliza OFDM para mayor eficiencia espectral. Se introdujo 802.11g para usar OFDM también en la banda de 2.4GHz, aprovechando sus ventajas sobre DS.

    separador
    #t_4_3.titulo-segundo.color-acento-botones(data-aos='fade-up-right')
       h2 4.3 Pruebas sobre redes inalámbricas
       
    p.mb-5 Para realizar las pruebas sobre redes inalámbricas se utiliza <b style= 'color:#5573C6;'><i>wireShark</i></b>, que es una aplicación para hacer el monitoreo de paquetes. La prueba consiste en realizar la captura de paquetes TCP cuando se está conectado a internet. La clave es revisar la interfaz de <b>wifi</b>. En la figura 24 se muestra la interfaz de <i>wireShark</i>, en donde se realiza la medición sobre WIFI: en0.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 24.
          span Interfaz WireShark
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema4/img18.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      h4.text-center Medición sobre WIFI

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/123456789" title="Comunicación de marketing digital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img19.svg', alt='Imágen decorativa')

      .col-lg-8
        .tarjeta-azul2.p-4
          p.mb-0 
            span.text-white En la figura 25 se muestra los resultados de la captura de paquetes en una red inalámbrica. El comportamiento es una gráfica que varía, ya que navegar por internet es un proceso aleatorio. En esta prueba se comprueba que la interfaz de Wifi está activa, está recibiendo y transmitiendo paquetes. Las pruebas realizadas con el comando 
            | <b style= 'color:#4ADBD1;'>ping </b>
            span.text-white que se efectuaron anteriormente también se pueden realizar sobre la conexión de la red inalámbrica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones.mb-5
          h5 Figura 25.
          span Prueba sobre Wifi TCP
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema4/img20.svg', alt='Imágen decorativa')



        
  </template>

<script>
export default {
  name: 'Tema4',
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
