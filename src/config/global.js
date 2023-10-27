export default {
  global: {
    componenteFormativo: 'Recursos de la red de datos en las organizaciones',
    descripcionCurso:
      'Se explorarán los pilares fundamentales de las redes de datos, desde la verificación de conectividad hasta la comprensión de las topologías y la importancia de un inventario detallado. Así, los profesionales en el área de redes estarán mejor preparados para enfrentar desafíos actuales y futuros que implican la gestión de las redes en un mundo más interconectado y digitalizado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto de red de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recursos de una red',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Dimensionamiento de recursos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Componentes de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición de los componentes de una red de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Implementación de una red de datos local',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de medios de transmisión para redes',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conectividad de la red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Pruebas de conectividad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pruebas de desempeño',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Esquemas de redundancia',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructura de una red de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Topologías de redes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Redes inalámbricas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Pruebas sobre redes inalámbricas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Inventarios de activos de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Sistemas de información de inventarios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de bases de datos para inventarios',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/233108_CF05_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Redes de datos inalámbricas',
      referencia:
        'Ilyas, M. (2017). The handbook of ad hoc wireless networks. CRC Press.',
      tipo: 'Libro',
      link: 'https://acortar.link/zYRbao',
    },
  ],
  glosario: [
    {
      termino: 'ENIAC',
      significado:
        ' Electronic Numerical Integrator and Computer: primer computador programable a gran escala.',
    },
    {
      termino: 'RAM',
      significado: 'memoria de acceso aleatorio.',
    },
    {
      termino: 'VGA',
      significado:
        ' Video Graphics Array, puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'DVI',
      significado:
        ' Digital video interface, puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'HDMI',
      significado:
        ' Hhigh-Definition Multimedia Interface, puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'USB',
      significado:
        'universal serial bus, puerto de conexión serial de los computadores.',
    },
    {
      termino: 'AAA',
      significado: 'listas de control de acceso.',
    },
    {
      termino: 'CPU',
      significado: 'unidad central de procesamiento.',
    },
    {
      termino: 'DIMM',
      significado: 'módulo de memoria dual en línea.',
    },
    {
      termino: 'LCD',
      significado: 'pantalla de cristal líquido.',
    },
    {
      termino: 'CMOS',
      significado:
        'semiconductor complementario de óxido metálico o complementary metal-oxide-semiconductor.',
    },
    {
      termino: 'GNU',
      significado: ' General Public License: licencia pública general de GNU.',
    },
    {
      termino: 'SO',
      significado: 'sistema operativo.',
    },
    {
      termino: 'ITIL',
      significado: ' Information Technology Infrastructure Library.',
    },
    {
      termino: 'ITSM',
      significado: 'gestión de servicios de TI.',
    },
    {
      termino: 'TDS',
      significado: 'hoja de datos técnicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Kurose, J., & Ross, K. (2010). Computer networks: A top-down approach featuring the internet.',
      link: '',
    },
    {
      referencia:
        'Peterson, L. L., & Davie, B. S. (2007). Computer networks: a systems approach. Elsevier.',
      link: '',
    },
    {
      referencia:
        'Eronen, A. (2009). Signal processing methods for audio classification and music content analysis.',
      link: '',
    },
    {
      referencia:
        'Fitzek, F. H., & Katz, M. D. (2013). Mobile clouds: Exploiting distributed resources in wireless, mobile and social networks. John Wiley & Sons.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joaquín Fernando Sánchez',
          cargo: 'Experto temático',
          centro:
            'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Manuel Felipe Echavarría Orozco',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
