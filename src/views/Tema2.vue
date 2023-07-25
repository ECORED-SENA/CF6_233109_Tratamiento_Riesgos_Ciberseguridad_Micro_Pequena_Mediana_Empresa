<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 2
      h1 Gestión de incidentes de seguridad digital
    .row.justify-content-center
      .col-lg-5.col-md-6.col-sm-7.col-8.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema2/imagen1.png' alt="")
      .col-lg-7.col-md-12(data-aos="fade-down-left")
        p.fondo-7.p-4 Actualmente, la gestión de incidentes se establece en las organizaciones como una capacidad para hacer frente a los diferentes requerimientos e incidentes que se presentan cada día, desarrollando actividades enmarcadas en buenas prácticas buscando regresar las operaciones de la organización a su estado normal en un tiempo mínimo.
        p Esta tendencia de apropiar los procedimientos para la gestión de incidentes busca que las organizaciones cuenten cada día con estrategias para afrontar de una manera muy rápida y casi que sistemática a su estado normal de operaciones, reduciendo el tiempo fuera de línea o reduciendo pérdida de activos de información.
    .row.justify-content-center.my-5
      .col-lg-7.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        p Antes de dar paso a las temáticas asociadas, es importante tener clara la definición del término incidente y es que de acuerdo a la Norma ISO-IEC 27035:2012. Un incidente de seguridad de la información se define como:
        .bloque-texto-c.fondo-29.p-4
          i.fas.fa-quote-right
          h2.mb-2 “Evento o serie de eventos de seguridad de la información no deseados o inesperados, que tienen probabilidad significativa comprometer las operaciones del negocio y amenazas la seguridad informática”
          span  (ICONTEC, 2012)
      .col-lg-5.col-md-6.col-sm-7.col-8(data-aos="fade-down-left")
        img(src='@/assets/curso/tema2/imagen2.png' alt="")
    p.mb-5(data-aos="fade-down-right") Con este concepto claro, vamos ahora a revisar algunos aspectos importantes para la adopción de un modelo de gestión de incidentes:
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 2.1 Normatividad relacionada
    p.mb-5(data-aos="fade-down-right") Como todo procedimiento tecnológico que está regulado, la gestión de incidentes se fundamenta en estándares para la atención y remediación de los incidentes que se pueden presentar en una organización; es así como se encuentran los siguientes referentes interesantes:
    .row.justify-content-center
      .col-lg-10.col-md-12
        .row.justify-content-between
          .col-lg-6.col-md-12.mb-4.mb-lg-0.fondo-30.separar.redondearpuntas.p-4(data-aos="fade-down-right")
            .row.justify-content-between.align-items-center
              .col-lg-3.col-3.mb-4.mb-lg-0
                img(src='@/assets/curso/tema2/figura1.svg' alt="")
              .col-lg-9.col-9
                p.text-center.text-bold GTC-ISO-IEC 27035:2012 - Gestión de incidentes de seguridad de la información
          .col-lg-6.col-md-12.fondo-30.separar.redondearpuntas.p-4(data-aos="fade-down-left")
            .row.justify-content-between.align-items-center
              .col-lg-3.col-3.mb-4.mb-lg-0
                img(src='@/assets/curso/tema2/figura1.svg' alt="")
              .col-lg-9.col-9
                p.text-center.text-bold NIST SP 800-61 Rev. 2- Guía de manejo de incidentes de seguridad informática

    p.my-5(data-aos="fade-down-right") A continuación, se explica cada uno de estos:

    .btn-h3.mb-4
      span.h3 GTC-ISO-IEC 27035:2012 - Gestión de incidentes de seguridad de la información

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6.col-sm-7.col-8.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema2/imagen3.png' alt="")
      .col-lg-7.col-md-12(data-aos="fade-down-left")
        p Esta norma técnica es una de las principales que existe actualmente y sirve como base para el establecimiento de otras normas y marcos de trabajo para la gestión de incidentes de seguridad informática. Proporciona los lineamientos necesarios para la adopción en una organización y prepararse para atender cualquier tipo de incidente.
        p Además, se vincula con las estrategias de seguridad de las organizaciones para la implementación de controles y procedimientos que posibiliten la continuidad del negocio reduciendo el impacto por alguna amenaza materializada. Sugiere cinco fases establecidas para la gestión de los incidentes de seguridad, como se enumeran a continuación:

    .row.justify-content-center.fondo-31
      .col-11.mostrar-lg(data-aos="fade-down-right")
        ImagenInfografica.color-acento-botones.my-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/figura2.svg' alt="")

          .tarjeta.fondo-gris.p-3(x="70%" y="5%" numero="+")
            p.fuente14px.text-bold Planificación y recuperación
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Establece la política para la gestión de incidentes de seguridad.
              li
                i.fas.fa-check-circle
                span Establece políticas para la gestión de riesgos y seguridad de la información.
              li
                i.fas.fa-check-circle
                span Define esquema de gestión de incidentes de seguridad de la información.
              li
                i.fas.fa-check-circle
                span Establece el ISIRT (Equipo de respuesta a incidentes de seguridad de la información):

              ul.ps-4.lista-ul              
                li
                  i.far.fa-dot-circle
                  span Establecimiento del esquema de soportes
                li
                  i.far.fa-dot-circle
                  span Instrucción y formación para la toma de conciencia relacionada con la gestión de incidentes de seguridad de la información.
                li
                  i.far.fa-dot-circle
                  span Pruebas del esquema de gestión de incidentes de seguridad de la información.

          .tarjeta.fondo-gris.p-3(x="98%" y="32%" numero="+")
            p.fuente14px.text-bold Detección y reporte
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Detecta y reporta los eventos de seguridad de la información

          .tarjeta.fondo-gris.p-3(x="90%" y="86%" numero="+")
            p.fuente14px.text-bold Evaluación y decisiones
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Evaluación de los eventos de seguridad de la información, para la determinación si corresponde a un incidente de seguridad de la información.

          .tarjeta.fondo-gris.p-3(x="10%" y="84%" numero="+")
            p.fuente14px.text-bold Respuestas
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Respuestas a los incidentes presentados, incluyendo análisis forense
              li
                i.fas.fa-check-circle
                span Recuperación del incidente de seguridad de la información.

          .tarjeta.fondo-gris.p-3(x="2%" y="32%" numero="+")
            p.fuente14px.text-bold Lecciones aprendidas
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Análisis forense complementario.
              li
                i.fas.fa-check-circle
                span Identificación de lecciones aprendidas.
              li
                i.fas.fa-check-circle
                span Identificación y establecimiento de las mejoras a la seguridad.
              li
                i.fas.fa-check-circle
                span Identificación y establecimiento de las mejoras a la evaluación de riesgos de la seguridad de la información.
              li
                i.fas.fa-check-circle
                span Identificación y establecimiento de mejoras al esquema de gestión de incidentes de seguridad de la información.

      .col-md-9.col-11.mostrar-movil
        .row.mb-4.justify-content-center.p-4(data-aos="fade-down-right")
          .col-10.p-3.mostrar-movil
            .row.justify-content-center
              .col-md-10.col-sm-10.col-11
                img(src='@/assets/curso/tema2/figura2-1.svg' alt="")

        ImagenInfografica.color-acento-botones(data-aos="fade-down-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/figura2-2.svg')
          .tarjeta.fondo-gris.p-3(x="92%" y="33%" numero="+")
            p.fuente14px.text-bold Planificación y recuperación
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Establece la política para la gestión de incidentes de seguridad.
              li
                i.fas.fa-check-circle
                span Establece políticas para la gestión de riesgos y seguridad de la información.
              li
                i.fas.fa-check-circle
                span Define esquema de gestión de incidentes de seguridad de la información.
              li
                i.fas.fa-check-circle
                span Establece el ISIRT (Equipo de respuesta a incidentes de seguridad de la información):
              li
                i.fas.fa-check-circle
                span Establecimiento del esquema de soportes
              li
                i.fas.fa-check-circle
                span Instrucción y formación para la toma de conciencia relacionada con la gestión de incidentes de seguridad de la información.
              li
                i.fas.fa-check-circle
                span Pruebas del esquema de gestión de incidentes de seguridad de la información.
        ImagenInfografica.color-acento-botones(data-aos="fade-down-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/figura2-3.svg')
          .tarjeta.fondo-gris.p-3(x="92%" y="53%" numero="+")
            p.fuente14px.text-bold Lecciones aprendidas
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Análisis forense complementario.
              li
                i.fas.fa-check-circle
                span Identificación de lecciones aprendidas.
              li
                i.fas.fa-check-circle
                span Identificación y establecimiento de las mejoras a la seguridad.
              li
                i.fas.fa-check-circle
                span Identificación y establecimiento de las mejoras a la evaluación de riesgos de la seguridad de la información.
              li
                i.fas.fa-check-circle
                span Identificación y establecimiento de mejoras al esquema de gestión de incidentes de seguridad de la información.
        ImagenInfografica.color-acento-botones(data-aos="fade-down-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/figura2-4.svg')
          .tarjeta.fondo-gris.p-3(x="92%" y="48%" numero="+")
            p.fuente14px.text-bold Detección y reporte
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Detecta y reporta los eventos de seguridad de la información
        ImagenInfografica.color-acento-botones(data-aos="fade-down-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/figura2-5.svg')
          .tarjeta.fondo-gris.p-3(x="92%" y="50%" numero="+")
            p.fuente14px.text-bold Evaluación y decisiones
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Evaluación de los eventos de seguridad de la información, para la determinación si corresponde a un incidente de seguridad de la información.
        ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down-right")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/figura2-6.svg')
          .tarjeta.fondo-gris.p-3(x="92%" y="48%" numero="+")
            p.fuente14px.text-bold Respuestas
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Respuestas a los incidentes presentados, incluyendo análisis forense
              li
                i.fas.fa-check-circle
                span Recuperación del incidente de seguridad de la información.
    .row.justify-content-center.my-5.align-items-center
      .col-lg-10.col-md-12
        .row.justify-content-center.align-items-center.fondo-33.p-4
          .col-lg-1.col-sm-2.col-4.mb-4.mb-lg-0(data-aos="fade-down-right")
            img(src='@/assets/curso/tema2/figura4.svg')
          .col-lg-11.col-sm-10.col-12(data-aos="fade-down-left")
            p.mb-0 Esta norma es de las más adoptadas por las organizaciones, ya que su modelo permite su fácil adopción y alineación con sistemas de gestión como los SGSI.

    .btn-h3.mb-4
      span.h3 NIST SP 800-61 Rev. 2- Guía de manejo de incidentes de seguridad informática

    .row.my-5.justify-content-center
      .col-11
        .row.align-items-center.justify-content-center
          .col-lg-4.col-md-6.col-sm-8.col-10.sobre(data-aos="fade-down-right")
            img(src='@/assets/curso/tema2/figura3.svg')
          .col-lg-8.col-md-12(data-aos="fade-down-left")
            .div.fondo-32.correr-izq.px-5.padding-y
              p El Instituto Nacional de Normas y Tecnología NIST nos hace entrega de la guía de incidentes para seguridad informática, la cual dicta los lineamientos para la gestión de la seguridad de la información de acuerdo a su correspondiente análisis y metodología de evaluación.
              p Esta guía en su metodología también propone unas fases para la atención de incidentes de seguridad, como se puede apreciar en su esquema de ciclo de vida:
    h3.mb-5 Ciclo de vida de la atención de incidentes según NIST SP 800-61 Rev. 2
    img.mb-4.mostrar-lg(src='@/assets/curso/tema2/figura5.svg')
    .row.justify-content-center.mostrar-movil(data-aos="fade-down-right")
      .col-md-8.col-sm-9.col-10
        img.p-4(src='@/assets/curso/tema2/figura6.svg')
        img(src='@/assets/curso/tema2/figura7.svg')
        img.p-4(src='@/assets/curso/tema2/figura8.svg')

    .tarjeta.tarjeta--azul.fondo-34.my-5(data-aos="fade-down-right")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Preparación
              p Busca reducir el número de incidentes de seguridad de la información, a partir de la selección e implementación de controles de seguridad seleccionados a partir de un análisis de riesgos previo, además, es necesario el establecimiento de contactos y los planes de comunicación con terceros con el fin de establecer medios de comunicación.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen4.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Detección y análisis
              p En esta fase se identifican las brechas a la seguridad de la información e iniciar el alertamiento a los responsables del proceso de acuerdo a la ruta de atención establecidas y los patrones que represente el incidente.
              p Esta fase considera tres pasos para la gestión de riesgos de terceros, como son:
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Investigar indicadores de incidentes pasados e indicios de posibles incidentes futuros.
                li
                  i.fas.fa-check-circle
                  span Implementar un sistema de seguimiento de problemas para registrar toda la información pertinente sobre cada incidente.
                li
                  i.fas.fa-check-circle
                  span Priorizar los incidentes en función de su impacto funcional, el impacto de la información y la capacidad de recuperación.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen5.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center
            .col-lg-8.mb-4.mb-lg-0
              h4 Contención, erradicación y recuperación
              p A partir del establecimiento de la gravedad del incidente, la organización puede mitigar su impacto conteniéndolo y recuperándose de él. En esta fase, se vuelve a la detección y el análisis, por ejemplo, para ver si hay hosts adicionales infectados por #[em malware] mientras se erradica el incidente.
              p La contención varía de acuerdo al tipo de incidente y para establecer una acción de respuesta se evalúan diferentes criterios, incluida la necesidad de preservación de evidencia para cualquier procedimiento legal posterior, el daño potencial, la disponibilidad del servicio o los recursos disponibles. La guía indica algunas formas de identificar hosts atacantes como la validación de las direcciones IP, usar bases de datos de incidentes y monitorear los canales de comunicación del atacante. El monitoreo de riesgos cibernéticos de terceros puede ayudar con estos esfuerzos.
              p Finalmente, en la erradicación se busca eliminar el <em>malware</em>, desactivar las cuentas comprometidas y mitigar vulnerabilidades, y en la recuperación se intenta restaurar los sistemas. Las plataformas de gestión de riesgos de terceros ayudan a la corrección a fin de evitar futuras exposiciones de seguridad.
            .col-lg-3.d-none.d-lg-flex
              figure
                img(src='@/assets/curso/tema2/figura9.svg', alt="", style="max-width: 292px").m-auto

          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Actividad posterior al incidente
              p Una vez que el incidente sea controlado y gestionado, la organización genera los reportes que presentan la causa, el costo del incidente y las acciones que se deben de realizar para prevenir futuros incidentes. Los datos como el tiempo dedicado a manejar incidentes y las evaluaciones objetivas y subjetivas de incidentes se pueden utilizar para identificar debilidades de seguridad sistémica.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen6.png', alt="", style="max-width: 505px").m-auto

    .row.justify-content-center.mb-5
      .col-lg-10.col-md-11.col-sm-12.fondo-35.p-4
        .row.justify-content-center.align-items-center
          .col-lg-1.col-md-2.col-sm-3.col-4.mb-4.mb-lg-0(data-aos="fade-down-right")
            img(src='@/assets/curso/tema2/figura10.svg', alt="")
          .col-lg-11.col-md-12(data-aos="fade-down-left")
            p.mb-0 Esta guía para la gestión de incidentes también ha cobrado fuerza entre las organizaciones, por su fácil aplicabilidad y por la aplicabilidad incluso de terceros de la organización.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido.pb-5(data-aos="fade-down-left")
      h2 2.2 Aplicación

    .row.fondo-20.align-items-center
      .col-lg-4.col-md-6.col-sm-7.col-8.pe-0.pb-0.mt-4.mostrar-lg(data-aos="fade-down-left")
        img.subir(src='@/assets/curso/tema2/imagen7.png', alt="")
      .col-lg-8.col-md-12.mb-lg-2.mb-lg-4.p-lg-5.p-3(data-aos="fade-down-right")
        p.mt-0.mt-lg-3.mt-xl-0 Desde el punto de vista metodológico y para las organizaciones colombianas, el MinTIC, ha generado una guía para la adopción de estos planes en las organizaciones tanto públicas principalmente pero no excluye las entidades privadas. Esta guía se denomina “Guía para la Gestión y Clasificación de Incidentes de Seguridad de la Información” y establece los lineamientos para su adopción de acuerdo como se presenta a continuación.

    .btn-h3.mt-5.mb-4
      span.h3 Procesos de la gestión de incidentes de seguridad de la información

    .tarjeta.tarjeta--azul.fondo-36.mb-5(data-aos="fade-down-right")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Prevención
              p La entidad debe prepararse antes de la materialización de una amenaza; el equipo de <i>Csirt</i> Gobierno establece recomendaciones referentes a la configuración de últimas actualizaciones en sistemas operativos, servicios y aplicaciones. Es necesario que se cuente con campañas de concienciación y sensibilización hacia los funcionarios en materia de ciberseguridad.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen8.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center.pt-4
            .col-lg-6.mb-4.mb-lg-0
              h4 Protección y detección
              p El equipo de especialistas de <i>Csirt</i> Gobierno dispone de aptitudes como investigación, servicios proactivos, así como reactivos frente a eventos e incidentes presentados en portales <i>web</i> y servicios de las entidades gubernamentales. Las anormalidades observadas en el monitoreo constante, se informan a las organizaciones afectadas. Adicional, se debe contar con herramientas como es el caso del SIEM, que permitan correlacionar eventos asociados a amenazas.
              p En esta fase se remiten análisis de la amenaza, directorios en donde se establece persistencia de la misma e indicadores de compromiso que deben ser incluidos en los dispositivos perimetrales con el fin de proteger la infraestructura tecnológica de la entidad.

            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen9.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Respuesta y comunicación
              p En esta etapa se recomienda a la entidad dependiendo de la criticidad del evento y de sus consecuencias, aislar equipos, detener servicios y deshabilitar cuentas de usuarios, entre otros; alterno, se realiza un análisis más profundo de la amenaza para indicar ubicaciones en la infraestructura tecnológica donde puede existir una copia del #[em malware] o de artefactos asociados a este. La evidencia se conserva para entender el comportamiento de la campaña.
              p Es sumamente importante el establecimiento constante y desde un primer instante con la entidad, desde la evidencia del incidente hasta la mitigación y seguimiento; remitiendo procedimientos de respuesta a incidentes y de seguridad de la información; adicional a esto, se actúa de manera colaborativa reportando cuando sea pertinente al Grupo de Respuesta a Emergencias Cibernéticas de Colombia (COLCERT).
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen10.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Recuperación y aprendizaje
              p Mediante recomendaciones emitidas por <i>Csirt</i> Gobierno, es necesario concienciar a la entidad y a sus funcionarios acerca de los vectores de infección y propagación de la amenaza, adoptando mecanismos necesarios para restablecer la infraestructura o servicio afectado antes de la materialización de la amenaza.
              p Las lecciones aprendidas siempre se deben tomar en cuenta en el plan de mejoramiento de la entidad, una vez se identifican las brechas de seguridad y vulnerabilidades en el entorno tecnológico; también, se realiza un seguimiento periódico establecido en las políticas de la entidad para observar los factores que aún se deben mejorar.

            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen11.png', alt="", style="max-width: 505px").m-auto



    .cajon-b.otrocolor.p-3.mb-5(data-aos="fade-down-right")
      p La guía brinda así mismo, las indicaciones para su adopción en la organización, definiendo los recursos humanos, económicos y de procedimiento, necesarios para su implementación y operación, en donde se ha involucrado el <i>Csirt</i> Gobierno, como entidad que acompaña dicho proceso a las entidades gubernamentales.

    .row.justify-content-center.my-4(data-aos="fade-down-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src='@/assets/curso/tema1/figura13.svg', style="max-width: 80px", alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Gestión y Clasificación de Incidentes de Seguridad
                  p.text-small Se sugiere consultar este documento base desde el sitio oficial del MinTIC para conocer los detalles y guía de implementación. Este recurso se encuentra también en el material complementario.
                .col-md-auto
                  a.boton.color-acento-botones(:href="('https://gobiernodigital.mintic.gov.co/seguridadyprivacidad/704/articles-237908_maestro_mspi.pdf')" target="_blank")
                    span Ir al sitio <i>web</i>
                    i.fas.fa-external-link-alt


    Separador

    #t_2_3.titulo-segundo.color-acento-contenido.pb-5(data-aos="fade-down-left")
      h2 2.3 Características

    p.mb-5(data-aos="fade-down-right") La gestión de incidentes desde lo establecido por la guía del MinTIC, se aborda desde cada una de sus fases, estableciendo las características y condiciones para su adopción y desarrollo de las actividades enmarcadas en el plan. En este orden de ideas, se recorrerá cada una de las fases sugeridas, para reconocer sus características, funciones y actividades:

    .row.justify-content-between
      .col-lg-3.col-md-6.fondo-37.p-1.separar1.mb-4(data-aos="fade-down-right")
        .row.align-items-center.p-3
          .col-auto
            img(src='@/assets/curso/tema2/figura11.svg', alt="", style="max-width: 85px")
          .col
            h5.mb-0 Preparación

      .col-lg-3.col-md-6.fondo-37.p-1.separar1.mb-4(data-aos="fade-down-right")
        .row.align-items-center.p-3
          .col-auto
            img(src='@/assets/curso/tema2/figura12.svg', alt="", style="max-width: 85px")
          .col
            h5.mb-0 Detección, evaluación y análisis

      .col-lg-3.col-md-6.fondo-37.p-1.separar1.mb-4(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center.p-3
          .col-auto
            img(src='@/assets/curso/tema2/figura13.svg', alt="", style="max-width: 85px")
          .col
            h5.mb-0 Contención, erradicación y recuperación

      .col-lg-3.col-md-6.col-sm-12.fondo-37.p-1.separar1.mb-4(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center.p-3
          .col-auto
            img(src='@/assets/curso/tema2/figura14.svg', alt="", style="max-width: 85px")
          .col
            h5.mb-0 Actividades post-incidentes

    p.my-4(data-aos="fade-down-right") Veamos una explicación de cada una:

    .btn-h3.mb-4.mt-4
      span.h3 Preparación

    p(data-aos="fade-down-right") Esta fase conlleva a que las entidades establezcan el plan para afrontar un incidente de seguridad. Esto involucra fortalecer las capacidades de detección, evaluación, contención y/o recuperación. Esta fase debe estar directamente apoyada por las áreas responsables de tecnología, dado que deben de reconocer las capacidades actuales y las necesarias para realizar una adecuada gestión.

    p.mb-5(data-aos="fade-down-right") Dentro de las actividades que deben adelantar para la preparación, se recomiendan:

    .row.justify-content-center
      .col-lg-10.col-md-12
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Gestión de parches de seguridad")
            .col-md-9.mb-4.mb-md-0
              p Se debe considerar contar con un plan para la aplicación de parches en sus sistemas operativos, aplicaciones, servicios, entre otros.

            .col-md-3
              figure
                img(src='@/assets/curso/tema2/imagen12.png')

          .row(numero="2" titulo="Aseguramiento de plataforma")
            .col-md-9.mb-4.mb-md-0
              p Las organizaciones deben de realizar ejercicios de endurecimiento de las plataformas de servicios, tomando como referencia marcos de buenas prácticas.

            .col-md-3
              figure
                img(src='@/assets/curso/tema2/imagen13.png')


          .row(numero="3" titulo="Seguridad en redes")
            .col-md-9.mb-4.mb-md-0
              p Mantener un control y monitoreo permanente de los elementos que conforman las redes de datos, aplicar actualizaciones a dispositivos, realizar segmentación de redes y considerar la implementación de sistemas, que permitan la identificación de patrones anormales en el tráfico. Aquí hay que considerar la implementación de IDS, IPS, <em>Firewalls</em>, Waf, entre otros.

            .col-md-3
              figure
                img(src='@/assets/curso/tema2/imagen14.png')

          .row(numero="4" titulo="Prevención de código malicioso")
            .col-md-9.mb-4.mb-md-0
              p Todos los dispositivos de la red deberán contar con sistemas antivirus, <em>antimalware</em> y mantener sus bases de datos al día.

            .col-md-3
              figure
                img(src='@/assets/curso/tema2/imagen12.png')

          .row(numero="5" titulo="Sensibilización y entrenamiento de usuarios")
            .col-md-9.mb-4.mb-md-0
              p Mantener capacitados a todo el personal de la organización sobre buenas prácticas de seguridad, políticas y procedimientos establecidos desde la organización, así como los lineamientos de orden superior y que se deban aplicar por su naturaleza.

            .col-md-3
              figure
                img(src='@/assets/curso/tema2/imagen16.png')

    .btn-h3.mb-4.mt-4
      span.h3 Detección, evaluación y análisis

    p.mb-5(data-aos="fade-down-right") Esta fase requiere que la organización fortalezca las capacidades para detectar, evaluar y analizar cualquier comportamiento por fuera de lo común; para ello, se recomienda:

    .tarjeta.tarjeta--azul.fondo-36.my-5(data-aos="fade-down-right")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Detección
              p Revisar los indicadores o eventos que conlleven a sospechar que algún elemento no está funcionando o respondiendo como se espera, puede apoyarse en: alertas de sistemas de seguridad, reportes de caída de servidores, reportes de usuarios, reportes de antivirus, #[em logs] de servidores, de aplicaciones, de herramientas de seguridad como los SIEM, entre otros.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen17.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center.pt-4
            .col-lg-5.col-md-11.mb-4.mb-md-0
              h4 Análisis
              p Aquí se busca que se desarrollen actividades que permitan determinar si un comportamiento no es el adecuado; para lo cual, se requiere fortalecer el conocimiento en:
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Conocimiento sobre comportamientos sobre la red y los sistemas.
                li
                  i.fas.fa-check-circle
                  span Conocimiento sobre comportamiento de infraestructura.
                li
                  i.fas.fa-check-circle
                  span Conocimiento sobre análisis de <em>logs</em>.
                li
                  i.fas.fa-check-circle
                  span Dominar la correlación de eventos.
                li
                  i.fas.fa-check-circle
                  span Mantener relojes sincronizados.
                li
                  i.fas.fa-check-circle
                  span Establecer matrices de diagnóstico.
            .col-lg-5.col-md-6.col-sm-7.col-8
              figure
                img(src='@/assets/curso/tema2/imagen18.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Evaluación
              p Esta actividad requiere tener en cuenta los niveles de impacto a partir del análisis de riesgos realizado sobre los activos de información, teniendo presente que la severidad se puede clasificar de la siguiente manera:
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  p #[b Alto impacto]: cuando un incidente afecta los activos de información de manera catastrófica, afectando el desarrollo de los objetivos de la organización.
                li
                  i.fas.fa-check-circle
                  p #[b Medio impacto]: el incidente afecta activos de información de manera moderada, y su impacto es medio.
                li
                  i.fas.fa-check-circle
                  p #[b Bajo impacto]: cuando el incidente afecta activos de información con bajo impacto o insignificante o no afecta el desarrollo de los objetivos de la organización.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen19.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Clasificación de incidentes de seguridad de la información
              p En esta fase se requiere de capacidades para clasificar un incidente, teniendo como referente clasificaciones establecidas previamente por cada una de las organizaciones y las cuales dependerán de la infraestructura, riesgo y criticidad de cada activo en particular.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen20.png', alt="", style="max-width: 505px").m-auto

          .row.justify-content-center.pt-4
            .col-lg-6.mb-4.mb-lg-0
              h4 Priorización de los incidentes y tiempos de respuesta
              p Se requiere de contar con una escala de prioridad, definida previamente que permita clasificar los incidentes, estas escalas pueden ser: prioridad, criticidad de impacto, impacto actual e impacto futuro.
              p Una vez se hayan establecido las variables y las escalas, se puede obtener la prioridad, con la ayuda de la siguiente fórmula:
              p.text-bold Nivel Prioridad = (Impacto actual * 2,5) + (Impacto futuro * 2,5) + (Criticidad del Sistema * 5)
              p Obteniendo como resultado la tabla para la determinación de la prioridad de atención:

            .col-lg-5
              .titulo-sexto.color-acento-contenido.mt-5
                h5 Tabla 1.
                span Determinación de la prioridad de atención
              .tabla-a.color-acento-contenido
                table.text-center
                  caption Tomado de MINTIC (2021).
                  thead
                    tr
                      th.col-ancho Nivel prioridad del incidente
                      th Valor
                  tbody.fondo-blanco
                    tr
                      td Inferior
                      td 00.00 – 02.49
                    tr
                      td Bajo
                      td 02.50 – 03.74
                    tr
                      td Medio
                      td 03.75 – 04.99
                    tr
                      td Alto
                      td 05.00 – 07.49
                    tr
                      td Superior
                      td 07.50 – 10.00


          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Tiempo de respuesta
              p Se establece el tiempo de atención máximo en los cuales se debe de brindar atención a los incidentes dependiendo del nivel de prioridad, de acuerdo a la siguiente tabla; aunque cada organización puede definir los tiempos de acuerdo a sus capacidades y mejor lo considere pertinente.

            .col-lg-5
              .titulo-sexto.color-acento-contenido.mt-5
                h5 Tabla 2.
                span Atención a los incidentes dependiendo del nivel de prioridad
              .tabla-a.color-acento-contenido.mb-5
                table.text-center
                  caption Tomado de MINTIC (2021).
                  thead
                    tr
                      th.col-ancho Nivel prioridad
                      th Tiempo de respuesta
                  tbody.fondo-blanco
                    tr
                      td Inferior
                      td 3 horas
                    tr
                      td Bajo
                      td 1 horas
                    tr
                      td Medio
                      td 30 minutos
                    tr
                      td Alto
                      td 15 minutos
                    tr
                      td Superior
                      td 5 minutos

          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h4 Declaración y notificación de incidentes
              p Indica que se debe de contar con la ruta para el reconocimiento y reporte de un incidente de seguridad de la información junto con el responsable de su gestión.

            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/imagen21.png', alt="", style="max-width: 505px").m-auto


    p(data-aos="fade-down-right") A continuación, se presenta un ejemplo de una escala de prioridad en la actividad de priorización de los incidentes y tiempos de respuesta:

    .row.justify-content-center
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
          h5 Tabla 3.
          span Ejemplo de niveles de criticidad de impacto
        .tabla-a.color-acento-contenido.mb-5
          table.text-center
            caption Tomado de MINTIC (2021).
            thead
              tr
                th.col-ancho Nivel prioridad del incidente
                th Valor
                th Definición
            tbody.fondo-blanco
              tr
                td Inferior
                td 0.1
                td Sistemas no críticos, como estaciones de trabajo de usuarios con funciones no críticas.
              tr
                td Bajo
                td 0.25
                td Sistemas que apoyan a una sola dependencia o proceso de una entidad.
              tr
                td Medio
                td 0.5
                td Sistemas que apoyan más de una dependencia o proceso de la entidad.
              tr
                td Alto
                td 0.75
                td Sistemas pertenecientes al área de Tecnología y estaciones de trabajo de usuarios con funciones críticas.
              tr
                td Superior
                td 1.00
                td Sistemas Críticos

    p(data-aos="fade-down-right") Ahora bien, de acuerdo con el impacto futuro, este dependerá del daño que pueda causar si no es contenido y se representa a continuación:

    .row.justify-content-center
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
          h5 Tabla 4.
          span  Ejemplo de niveles de impacto actual y futuro
        .tabla-a.color-acento-contenido.mb-5
          table.text-center
            caption Tomado de MINTIC (2021).
            thead
              tr
                th.col-ancho Nivel prioridad del incidente
                th Valor
                th Definición
            tbody.fondo-blanco
              tr
                td Inferior
                td 0.10
                td Impacto leve en uno de los componentes de cualquier sistema de información o estación de trabajo.
              tr
                td Bajo
                td 0.25
                td Impacto moderado en uno de los componentes de cualquier sistema de información o estación de trabajo.
              tr
                td Medio
                td 0.5
                td Impacto alto en uno de los componentes de cualquier sistema de información o estación de trabajo.
              tr
                td Alto
                td 0.75
                td Impacto moderado en uno o más componentes de más de un sistema de información.
              tr
                td Superior
                td 1.00
                td Impacto alto en uno o más componentes de más de un sistema de información.

    .btn-h3.mb-4.mt-4
      span.h3 Contención, erradicación y recuperación

    p.my-4(data-aos="fade-down-right") Esta fase es de gran importancia, ya que incorpora la estrategia propuesta para tomar decisiones en caso de presentarse un incidente y evitar que este se propague o tenga una mayor afectación. Consta de los siguientes componentes:

    .row.justify-content-center
      .col-sm-10.col-12
        .row.justify-content-between
          .col-lg-5.fondo-38.separar.py-4.mb-4
            .row.justify-content-center
              .col-8
                img(src='@/assets/curso/tema2/figura15.svg', alt="")
            h4.text-center Contención
            p.text-center Con la cual se busca detectar y contener el incidente a partir de la estrategia identificada y del mapa de ruta establecido; por ejemplo: apagar sistema, deshabilitar red, apagar servicios.
          .col-lg-5.fondo-38.separar.py-4.mb-4
            .row.justify-content-center
              .col-8
                img(src='@/assets/curso/tema2/figura16.svg', alt="")
            h4.text-center Erradicación y recuperación
            p.text-center Busca restaurar el servicio, posterior a la identificación y contención, borrando los rastros del incidente.

    .btn-h3.mb-4.mt-4
      span.h3 Actividades post-incidentes

    .row.my-5.justify-content-center
      .col-10
        .row.align-items-center.justify-content-center
          .col-lg-4.col-md-6.col-sm-8.col-10.sobre(data-aos="fade-down-right")
            img(src='@/assets/curso/tema2/figura17.svg', alt="")
          .col-lg-8.col-md-12(data-aos="fade-down-left")
            .div.fondo-39.correr-izq.px-5.padding4-y
              p Esta fase se desarrolla posterior a la recuperación tras un incidente y busca consolidar los informes que con los detalles más precisos que informen la situación presentada. Entre ellas se encuentran las lecciones aprendidas, las cuales hacen parte del plan de mejoramiento continuo, buscando conocer en detalle lo sucedido, sus vectores de ataque, soluciones dadas y plan de erradicación y recuperación para ocasiones futuras.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 2.4 Documentación

    p.mb-4 Lo invitamos a ver el siguiente video para conocer la documentación y reporte de procesos.

    figure.mb-5(data-aos="fade-up-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/63ke83Pc-yw" title="Documentación y reporte de procesos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Documentación y reporte de procesos.

    .row.justify-content-center
      .col-lg-9.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        p La gestión de incidentes, como parte primordial de las estrategias de seguridad de la información en las organizaciones, se fundamenta en la información recolectada, la cual es fundamental para la toma de decisiones, informes, lecciones aprendidas e incluso para el mejoramiento continuo del plan de gestión.
        p En este orden de ideas, se debe mantener un registro detallado de los incidentes de seguridad que son identificados, para poder dar tratamiento y una gestión adecuada. Se empieza estableciendo los mecanismos de captura de estos incidentes, para lo cual puede ser útil documentos de captura, o formularios que recolectan la información relevante, la norma GTC-ISO-IEC 27035:2012 en su anexo D, presenta algunos modelos de formularios que pueden ser adaptados a nuestras necesidades. Algunos de ellos son:

      .col-lg-3.d-none.d-lg-flex(data-aos="fade-down-left")
        figure
          img(src="@/assets/curso/tema2/figura18.svg", alt="alt")

    .row.justify-content-center.fondo-40.py-4.mb-5
      .col-lg-10.col-11.mostrar-lg
        img.mb-4(src='@/assets/curso/tema2/figura19.svg', alt="La imagen presenta el proceso de documentación tanto para los instrumentos de registro de información, como para los instrumentos de captura de información: Información básica, detalles de la persona que reporta, descripción del evento y por último detalle del evento.")
      .col-auto.mostrar-lg
        a.anexo.mb-4(:href="obtenerLink('/downloads/procesos_documentacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg", alt="")
          .anexo__texto
            p Anexo. Procesos de documentación

      .col-10.mostrar-movil.my-5
        .row.justify-content-center
          .col-lg-8.col-10
            img.mb-4(src='@/assets/curso/tema2/figura20.svg', alt="")
          .col-auto.fondo-41.p-3.mb-3
            h4.mb-0.text-center Instrumentos de captura de información
          .col-auto.fondo-42.p-3.redondearpuntas.mb-4
            p.mb-0 Tomando como referencia la información que se requiere almacenar, la norma GTC-ISO-IEC 27035:2012 en su anexo D, nos presenta algunos modelos de formularios para la captura de datos relacionados con incidentes. Estos formatos pueden distribuirse como impresos o realizar implementaciones electrónicas para su distribución.
          .col-auto.fondo-43.p-3.mb-3
            h4.mb-0.text-center Instrumentos de registro de información
          .col-auto.fondo-44.p-3.redondearpuntas.mb-4
            p.mb-0 Estos instrumentos deben de almacenar la información relevante al incidente, en pocas palabras que permita identificar el cómo, cuándo, qué, cómo y por qué ocurrió un incidente. A continuación, se propone la siguiente información básica como mínima para registrar y almacenar almacenarse por cada incidente identificado en la organización.
          .col-auto.fondo-43.p-3.mb-3
            h4.mb-0.text-center Información básica
          .col-auto.fondo-44.p-3.redondearpuntas.mb-4
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Fecha del evento.
              li
                i.fas.fa-check-circle
                span Número del evento.
              li
                i.fas.fa-check-circle
                span Evento relacionado y/o número de incidentes, si aplica.
          .col-8.fondo-43.p-3.mb-3
            h4.mb-0.text-center Detalles de la persona que reporta
          .col-auto.fondo-44.p-3.redondearpuntas.mb-4
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Nombre.
              li
                i.fas.fa-check-circle
                span Información de contacto
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Dirección.
                li
                  i.fas.fa-check-circle
                  span Organización.
                li
                  i.fas.fa-check-circle
                  span Departamento.
                li
                  i.fas.fa-check-circle
                  span Teléfono.
                li
                  i.fas.fa-check-circle
                  span Correo electrónico

          .col-8.fondo-43.p-3.mb-3
            h4.mb-0.text-center Descripción del evento
          .col-auto.fondo-44.p-3.redondearpuntas.mb-4
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Qué ocurrió.
              li
                i.fas.fa-check-circle
                span Cómo ocurrió.
              li
                i.fas.fa-check-circle
                span Por qué ocurrió.
              li
                i.fas.fa-check-circle
                span Consideraciones sobre componentes/activos afectados.
              li
                i.fas.fa-check-circle
                span Impactos adversos para el negocio.
              li
                i.fas.fa-check-circle
                span Cualquier vulnerabilidad identificada.
          .col-auto.fondo-43.p-3.mb-3
            h4.mb-0 Detalle del evento
          .col-auto.fondo-44.p-3.redondearpuntas.mb-4
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Fecha y hora en la que ocurrió el evento.
              li
                i.fas.fa-check-circle
                span Fecha y hora en la que se descubrió el evento.
              li
                i.fas.fa-check-circle
                span Fecha y hora en la que se reportó el evento.

    p.mb-4 En la norma anteriormente citada, se pueden encontrar múltiples modelos de formularios, los cuales pueden ser adaptados a las necesidades de la organización. Por otra parte, a continuación, se puede observar un modelo de formulario básico para la captura de información de un incidente. Esta información, dado que almacenará datos personales, estará obligada a contar con los procesos necesarios para la protección adecuada de datos y garantizar así su privacidad.


    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
          h5 Figura 4.
          span Modelo de formato básico para la captura de información de un incidente

        figure
          img(src="@/assets/curso/tema2/formulario.svg", alt="Esta imagen presenta el Formulario GTC-ISO-IEC 27035:2012, una herramienta para la gestión de incidentes de seguridad de la información. El formulario proporciona una estructura organizada para registrar y gestionar los incidentes de seguridad de manera efectiva. Se incluyen campos relevantes para recopilar información detallada sobre los incidentes, como la descripción del incidente, el impacto en la organización, los activos afectados y las acciones tomadas para mitigar el incidente. Además, se incluyen secciones para identificar las causas raíz y las lecciones aprendidas, lo que permite mejorar las medidas de seguridad y prevenir futuros incidentes similares.")


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
