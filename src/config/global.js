export default {
  global: {
    componenteFormativo: 'Diseño de la interfaz gráfica de la aplicación móvil',
    descripcionCurso:
      'El estudio consciente de este componente formativo posibilitará al aprendiz identificar los principales lenguajes de programación para el desarrollo de aplicaciones móviles híbridas y generar análisis de los componentes gráficos más importantes y populares que componen una interfaz gráfica basada en el usuario. Podrá ampliar conocimientos y nociones básicas para realizar una apropiada interfaz.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    //imagenesDecorativasBanner: [
    //  {
    //    clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //    imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //  },
    //  {
    //    clases: ['banner-principal-decorativo-2'],
    //    imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //  },
    //],
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
        titulo: 'Interfaz',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Interfaz de usuario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Historia de las interfaces',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de interfaces para aplicaciones móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Interfaz de usuario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Historia de las interfaces',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Historia de las interfaces',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Historia de las interfaces',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Historia de las interfaces',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Usabilidad y funcionalidad de las aplicaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diseño centrado en el usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fases del diseño de las aplicaciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Principios del diseño centrado en usuarios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas para el diseño centrado en usuarios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Ventajas del DCU',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis jerárquico de tareas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Secuencia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Perceptiva',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'La hipermedia',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estructuras de navegación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Dispositivos y visualización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Prototipo de aplicaciones móviles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Lenguaje de programación para desarrollo de apps',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Lenguajes utilizados para desarrollo Android',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Lenguajes iOS',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Lenguajes multiplataforma (Cross-Platform)',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Otros lenguajes de programación',
            hash: 't_9_4',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Navegación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Componentes gráficos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Gestos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Estructura de navegación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'Características de una apropiada interfaz de usuario',
        desarrolloContenidos: true,
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
        download: 'downloads/228139_CF07_DU.zip',
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
      tema: '4.2 Principios del diseño centrado en usuarios',
      referencia:
        'Campus Party. (2012). <em>CPQuito2 - Principios de diseño de experiencia de usuario para Mobile</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vVZ2F89MiyI',
    },
    {
      tema: '4.2 Principios del diseño centrado en usuarios',
      referencia:
        'Jose Rafael Rojas B. (2021). <em>Diseño y Desarrollo de Aplicaciones Móviles 01 - Introducción</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/2STnjpA8XQc',
    },
    {
      tema: '8. Prototipo de aplicaciones móviles',
      referencia:
        'Rivera, K. (2020, 24 junio). <em>Fastest way to design a Mobile App : Using Balsamiq Mockups</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RKr9u4S0W7g',
    },
    {
      tema: '8. Prototipo de aplicaciones móviles',
      referencia:
        'yReyALD. (2020, 22 octubre). <em>BALSAMIQ MOCKUPS / Instalación y maquetación de una aplicación móvil - FÁCIL (música GOT de fondo)</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=idX3aFx67Vc ',
    },
    {
      tema: '8. Prototipo de aplicaciones móviles',
      referencia:
        'Programando Ideas. (2020, 17 junio). MOOC 3 - Apps para dispositivos móviles 2020 | Planificación del desarrollo de apps [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/1qhScXdYGdM',
    },
    {
      tema: '11. Componentes gráficos',
      referencia: '<em>Material Design. (s. f.). Components.</em>',
      tipo: 'Página web',
      link: 'https://material.io/components?platform=android ',
    },
    {
      tema: '11. Componentes gráficos',
      referencia: '<em>Material Design. (s. f.). Banners.</em>',
      tipo: 'Página Web',
      link: 'https://m2.material.io/components/banners#anatomy',
    },
  ],
  glosario: [
    {
      termino: 'Benchmarking',
      significado:
        'Se trata del proceso de creación, recopilación, comparación y de análisis de indicadores, que posibilite hacer medición del avance de los procesos y de las funciones de mayor importancia, dentro de una organización. Tales indicadores son conocidos como <i>“benchmarks”</i> y suelen servir como un estándar de éxito de las compañías.',
    },
    {
      termino: 'Estándar ISO 13407',
      significado:
        '<i>Human-centred design processes for interactive systems</i> [ISO99] constituye un marco que sirve de guía para conseguir el desarrollo de sistemas interactivos usables incorporando el DCU durante el ciclo de vida del desarrollo.',
    },
    {
      termino: 'Hipermedia',
      significado:
        'La hipermedia ayuda a hacer la designación del conjunto de métodos o de procedimientos del proceso de escritura, diseño o composición de contenidos que conforman soportes. Estos pueden ser: imágenes, videos, textos, audios, mapas y otros soportes emergentes, de información; así, lo que se obtiene como resultado, también, da la probabilidad de nuevas interacciones para los usuarios.',
    },
    {
      termino: 'Ley de Fitts',
      significado:
        'Hace referencia a la rapidez y precisión con que ocurre el movimiento de los músculos en los humanos, cuando se está apuntando a un objetivo físico. Esta ley de <i>fitts</i> es utilizada para, por ejemplo, modelar el acto de apuntar con la mano o los dedos y, en el contexto de los ordenadores, para apuntar o dirigir mientras se hace uso de un <i>mouse</i>.',
    },
    {
      termino: 'Navegabilidad',
      significado:
        'Es la facilidad con la que un usuario puede desplazarse por todas las páginas o ventanas que componen un sitio web o una App. Para lograr este objetivo, el sitio web o la aplicación debe proporcionar un conjunto de recursos y estrategias de navegación diseñados para conseguir un resultado óptimo en la localización de la información y en la orientación para el usuario.',
    },
    {
      termino: 'Pixel',
      significado:
        'Es la abreviatura de <i>Picture Element</i> y puede definirse como la unidad más pequeña de color que componen una imagen digital, ya sea una fotografía, vídeo o un fotograma.',
    },
    {
      termino: '<em>Skeumorfismo</em>',
      significado:
        'Su definición estricta es objeto evolucionado/derivado que mantiene detalles del diseño del objeto original con el objetivo de hacerlo más familiar. Viene de las palabras en griego <i>skeuos</i> (herramienta o contenedor) y <i>morphe (shape)</i>.',
    },
    {
      termino: 'Antipatrón',
      significado:
        'Un antipatrón de diseño es un patrón de diseño que, invariablemente, conduce a una mala solución para un problema.',
    },
    {
      termino: 'Hipertexto',
      significado:
        'Es un sistema de organización y presentación de datos que se basa en la vinculación de fragmentos textuales o gráficos a otros fragmentos, lo cual permite al usuario acceder a la información no necesariamente de forma secuencial sino desde cualquiera de los distintos ítems relacionados.',
    },
    {
      termino: 'Mapas de navegación',
      significado:
        'Son esquemas de organización de la información de una aplicación móvil, los cuales muestran las bases principales de la aplicación misma, expresan las relaciones de jerarquía y secuencia, permiten elaborar escenarios de comportamientos de los usuarios; son representados de forma textual, gráfica o ambas combinadas.',
    },
    {
      termino: '<em>Mockup</em>',
      significado:
        'En la fabricación y el diseño, el <em>mockup</em> es una maqueta a escala o de tamaño completo de un diseño o dispositivo, que se utiliza para la enseñanza, demostración, evaluación de diseño, promoción y otros fines.',
    },
    {
      termino: 'Multiplataforma',
      significado:
        'Indica la capacidad o características con las que cuentan algunas aplicaciones móviles o software de escritorio; permiten la interoperabilidad y ejecución sobre diferentes sistemas operativos o plataformas. Algunos lenguajes de programación que facilitan la creación de aplicaciones multiplataforma son Java, C++, JavaScript.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gothelf, J., Seiden, J., & López Manzano, J. (2014). Lean UX. Logroño: UNIR Editorial.',
    },
    {
      referencia:
        'Jacobson, I., Booch G., Rumbaugh, J.(2007). El lenguaje unificado de modelado: manual de referencia. Madrid: Pearson Educación',
    },
    {
      referencia:
        'Kendall, K., Kendall, J., & Kendall, J. (2011). Análisis y diseño de sistemas. México, DF: Pearson Educación.',
    },
    {
      referencia:
        'Klein, L. (2014). Experiencia de usuario para lean startups. Logroño: UNIR Editorial.',
    },
    {
      referencia:
        'Krug, S. (2015). No me hagas pensar, "actualización". Madrid: Anaya Multimedia.',
    },
    {
      referencia:
        'Pohl, K. & Rupp, C. (2011). Requirements engineering fundamentals. Santa Barbara, CA: Rocky Nook.',
    },
    {
      referencia:
        'Pressman, R., Campos Olguín, V., & Enríquez Brito, J. (2010). Ingeniería del software. México: McGraw-Hill.',
    },
    {
      referencia:
        'Sommerville I. (2011).  Ingeniería del software. México: Addison-Wesley',
    },
    {
      referencia:
        'Fernández Casado, Pablo E, 2019. Usabilidad web, teoría y uso. Bogotá, Madrid: Ediciones de la U, Ra-Ma Editorial.',
    },
    {
      referencia:
        'Luján Castillo, José Dimas, 2017. HTML5, CSS y Javascript. Crea tu web y apps con el estándar de desarrollo. Bogotá: Alfaomega Colombiana RC Libros.',
    },
    {
      referencia:
        'Recio García, Juan Antonio, 2018. HTML5, CSS3 y JQuery Curso práctico. Bogotá: Ediciones de la U.',
    },
    {
      referencia:
        'Cuello, J. y Vittone, J. (2013). Diseñando apps para móviles.',
      link: '',
    },
    {
      referencia:
        'Desarrollador Android. (2015). Action Bar (Barra de Acciones). ',
      link:
        'https://desarrollador-android.com/diseno/pautas-2/action-bar-barra-de-acciones/',
    },
    {
      referencia:
        'Duckett, J. (2014). JavaScript  &  jQuery. Interactive front-end Web development. John Wiley & Sons.',
      link: '',
    },
    {
      referencia:
        'Fernández, P. (2019). Usabilidad web, teoría y uso. RA-MA Editorial.',
      link: '',
    },
    {
      referencia:
        'Gauchat, D. (2017). El gran libro de HTML5, CSC3 y JavaScript. Marcombo.',
      link: '',
    },
    {
      referencia:
        'Gualtetiero, T. y Salvaggio, A. (2019). JavaScript: Guía completa. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Kendall, K. y Kendall, J. (2011). Análisis y diseño de sistemas. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Klein, L. (2014). Experiencia de usuario para lean startups. UNIR Editorial.',
      link: '',
    },
    {
      referencia:
        'Krug, S. (2015). No me hagas pensar. Actualización. Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Luján, J. (2017). HTML5, CSS y Javascript. Crea tu web y apps con el estándar de desarrollo. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Norman, D. (2013). The design of everyday things. Basic Books.',
      link: '',
    },
    {
      referencia:
        'Pohl, K. y Rupp, C. (2011). Requirements engineering fundamentals. Rocky Nook.',
      link: '',
    },
    {
      referencia:
        'Pressman, R., Campos, V. y Enríquez, J. (2010). Ingeniería del software. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Raffino, M. (2020). Interfaz - Qué es, concepto, tipos, características y ejemplos. Concepto.de. ',
      link: 'https://concepto.de/interfaz/',
    },
    {
      referencia:
        'Recio, J. (2018). HTML5, CSS3 y JQuery Curso práctico. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Seydnejad, S. (2016). Modular Programming with JavaScript. Packt Publishing.',
      link: '',
    },
    {
      referencia:
        'Sommerville I. (2011).  Ingeniería del software. Addison-Wesley',
      link: '',
    },
    {
      referencia:
        'Whitten, J., Bentley, L., Randolph, G., Rico, M. y Orozco, M. (2008). Análisis de sistemas. McGraw - Hill Interamericana.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta temática',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de gestión industrial - Regional Bogotá',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de gestión industrial - Regional Bogotá',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para la industria y la comunicación gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la industria y la comunicación gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
