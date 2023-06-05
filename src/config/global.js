export default {
  global: {
    componenteFormativo:
      'Tratamiento de los incidentes de seguridad de la información',
    descripcionCurso:
      'La gestión de incidentes de seguridad de la información se consolida como estrategias para atender en un mínimo tiempo cualquier evento que ponga en riesgo la seguridad de la misma, a partir de la aplicación de métodos y técnicas para identificar, evaluar, atender y recuperar, garantizando así la continuidad del negocio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
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
        titulo: 'Evaluación de la seguridad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Gestión de vulnerabilidades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de pruebas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Hacking</em> ético',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Equipos de seguridad <em>RedTeam & BlueTeam</em>',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de incidentes de seguridad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normatividad relacionada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aplicación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Características ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Documentación',
            hash: 't_2_4',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/pdf.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
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
      tema: '1. Evaluación de la seguridad digital',
      referencia:
        'Chifla-Villón, M., Puma-Aucapiña, L. & Villacís-Real, K. (2020). Elaboración de un instrumento de auditoría que evalúa la seguridad lógica aplicable en servidores en Instituciones Públicas de Educación Superior de la Zona 5 del Ecuador. Revista CIENCIA UNEMI, 13(34), 127–143. ',
      tipo: 'Artículo',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=fap&AN=146126581&lang=es&site=ehost-live',
    },
    {
      tema: '1.1. Gestión de vulnerabilidades',
      referencia: 'Nist. (2022). <em>Framework Documents</em>.',
      tipo: 'Sitio <em>web</em>',
      link: 'https://www.nist.gov/cyberframework/framework',
    },
    {
      tema: '1.1. Gestión de vulnerabilidades',
      referencia: 'OWASP. (2022). <em>WSTG – Stable</em>.',
      tipo: 'Sitio <em>web</em>',
      link: 'https://owasp.org/www-project-web-security-testing-guide/stable/ ',
    },
    {
      tema: '1.1. Gestión de vulnerabilidades',
      referencia:
        'OISGG. (2006). <em>Penetration Testing Framework</em> (PTF).',
      tipo: 'Libro',
      link:
        'http://cuchillac.net/archivos/pre_seguridad_pymes/2_hakeo_etico/lects/metodologia_oissg.pdf',
    },
    {
      tema: '1.1. Gestión de vulnerabilidades',
      referencia:
        '<em>Pentest-standard.org/em>. (s.f.). <em>PTES Technical Guidelines</em>.',
      tipo: 'Sitio <em>web</em>',
      link:
        'http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines ',
    },
    {
      tema: '1.1. Gestión de vulnerabilidades',
      referencia: 'ISECOM. (2021). OSSTMM.',
      tipo: 'Sitio <em>web</em>',
      link: 'https://www.isecom.org/research.html#content5-9d',
    },
    {
      tema: '1.3 Hacking ético',
      referencia:
        'Rodríguez Llerena, A. E. (2020). Herramientas fundamentales para el <em>hacking</em> ético. Revista Cubana de Informatica Medica, 12(1), 116-131.',
      tipo: 'Artículo',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=fap&AN=144392670&lang=es&site=ehost-live',
    },
    {
      tema: '2. Gestión de incidentes de seguridad digital',
      referencia:
        'ICONTEC. (2012). Gtc-iso-iec 27035:2012 tecnología de la información. Técnicas de seguridad. Gestión de incidentes de seguridad de la información.',
      tipo: 'Norma técnica',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=311',
    },
    {
      tema: '2.1. Normatividad relacionada',
      referencia:
        'MinTIC. (2021). Guía para la Gestión y Clasificación de Incidentes de Seguridad de la Información.',
      tipo: 'Guía',
      link:
        'https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-237908_maestro_mspi.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Contención',
      significado:
        'proceso mediante el cual se busca evitar que un incidente se propague o genere una mayor afectación.',
    },
    {
      termino: 'Detección',
      significado:
        'fase en la cual se identifican eventos que posiblemente pueden afectar la seguridad de la información',
    },
    {
      termino: 'Incidente',
      significado:
        '“evento o serie de eventos de seguridad de la información no deseados o inesperados, que tienen probabilidad significativa comprometer las operaciones del negocio y amenazas la seguridad informática” (ICONTEC, 2012)',
    },
    {
      termino: 'ISIRT',
      significado:
        'equipo de respuesta a incidentes de seguridad de la información.',
    },
    {
      termino: 'Recuperación',
      significado:
        'proceso que busca restablecer los servicios o activos a su estado normal.',
    },
  ],
  referencias: [
    {
      referencia: 'ISECOM. (2021). OSSTMM.',
      link: 'https://www.isecom.org/research.html#content5-9d',
    },
    {
      referencia:
        'MinTIC. (2021). Guía para la Gestión y Clasificación de Incidentes de Seguridad de la Información. ',
      link:
        'https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-237908_maestro_mspi.pdf',
    },
    {
      referencia:
        'OISGG. (2006). <em>Penetration Testing Framework</em> (PTF). ',
      link:
        'http://cuchillac.net/archivos/pre_seguridad_pymes/2_hakeo_etico/lects/metodologia_oissg.pdf',
    },
    {
      referencia: 'OWASP. (2021). Welcome to the OWASP Top 10 – 2021.',
      link: 'https://owasp.org/Top10/',
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
          nombre: 'Rafael Neftalí Lizcano Reyes ',
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
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto Temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polánco Muñoz ',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
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
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Mary Jeans Palacio Camacho ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
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
}
