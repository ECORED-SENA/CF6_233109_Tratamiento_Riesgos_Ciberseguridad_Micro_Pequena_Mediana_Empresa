<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero
        span 1
      h1 Evaluación de la seguridad digital
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A medida que las organizaciones van implementando soluciones y estrategias articuladas para la gestión de la ciberseguridad en las organizaciones, se hace necesario que esta sea evaluada para determinar si está siendo efectiva y si no se están aprovechando otras vulnerabilidades, que no han sido identificadas o se estén generando nuevas brechas a la seguridad de la información.
    .row.justify-content-center
      .col-lg-8.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        p Las normas como la familia ISO 27000 y <em>frameworks</em> técnicos como NIST han incorporado dentro de su metodología las fases que llevan a que las estrategias sean evaluadas de tal manera que permita identificar debilidades y a partir de estas establecer nuevos focos de la estrategia de seguridad, teniendo como premisa, que este ejercicio debe ser permanente y continuo, debido a que las amenazas crecen de manera permanente y cada vez son más complejas.
        p A continuación, se reconocen algunas técnicas que permiten realizar una evaluación de la seguridad digital en las organizaciones y que son el insumo fundamental para determinar la efectividad y eficiencia de la estrategia propuesta:
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-down-left")
        figure
          img(src="@/assets/curso/tema1/imagen2.png", alt="alt")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.1 Gestión de vulnerabilidades
    .row.justify-content-center
      .col-lg-2.col-md-4.col-sm-5.col-6.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura1.svg')
      .col-lg-10.col-md-12(data-aos="fade-down-left")
        p Este ejercicio de gestionar las vulnerabilidades, que pueden ser aprovechadas para convertirse en una amenaza para una organización, es un trabajo complejo dependiendo el tamaño de la organización y de la cantidad de sus activos de información (es decir cada uno de los recursos de información útil para la organización, así como los que indirectamente son necesarios para que ese dato o información pueda funcionar) tal como se observa la caracterización de dichos tipos de activos de información en la siguiente figura:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade")
      h5 Figura 1.
      span Activos de información

    .fondo-1.p-5

      .d-none.d-lg-block
        .row.justify-content-center(data-aos="fade-down-right")
          .col-xxl-10(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura2.svg', style="max-width: 820px", alt="Activos de información. La imagen nos presenta los diferentes tipos de activos de información: equipo auxiliar, infraestructura locativa, tecnología, servicios, personas, aplicaciones y datos").m-auto

      .d-lg-none
        figure
          img(src='@/assets/curso/tema1/figura2b.svg', style="max-width: 330px", alt="Activos de información. La imagen nos presenta los diferentes tipos de activos de información: equipo auxiliar, infraestructura locativa, tecnología, servicios, personas, aplicaciones y datos").m-auto


    .row.my-5
      .col-11
        .row.align-items-center.justify-content-center
          .col-lg-4.col-md-6.col-sm-8.col-10.sobre(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura3.svg' alt="")
          .col-lg-8.col-md-12(data-aos="fade-down-left")
            p.fondo-5.correr-izq.p-5.padding-y Los ejercicios para la gestión de vulnerabilidades pueden variar de acuerdo al tipo de organización y el enfoque que se le quiera dar a la gestión; pues es muy distinto realizar una gestión de vulnerabilidades en una institución financiera o crítica frente a una pequeña o mediana empresa.

    p.my-5(data-aos="fade-down-left") El procedimiento para su desarrollo ha sido basado en siete etapas principales que abordan esta gestión, entre las que se encuentran:
    .row.justify-content-center.mb-4
      .col-lg-8.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        LineaTiempoD.cambiocolor
          .row.justify-content-center(numero="1" titulo="Planeación")
            .col-xl-10.mb-4.mb-md-0
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Definición de activos.
                li
                  i.fas.fa-check-circle
                  span Planeación de la evaluación.
              p Etapa en donde se define el alcance del procedimiento de gestión de vulnerabilidades y se identifica cuál será el campo de evaluación o cuáles activos serán objetos de la revisión.

            .col-xl-2.col-lg-4.col-md-4.col-sm-5.col-6
              figure
                img(src='@/assets/curso/tema1/icono1.svg' alt="")


          .row.justify-content-center(numero="2" titulo="Descubrimiento")
            .col-xl-10.mb-4.mb-md-0
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Recopilación de información.
                li
                  i.fas.fa-check-circle
                  span Mapeo de elementos.

              p Aquí se realiza la recolección de información sobre las aplicaciones, sistemas o información y de las vulnerabilidades que se encuentran presentes, a partir de ejercicios de escaneos que permita validar sus debilidades; como resultado de esta etapa, se debe de generar un mapeo de los elementos involucrados.
            .col-xl-2.col-lg-4.col-md-4.col-sm-5.col-6
              figure
                img(src='@/assets/curso/tema1/icono2.svg' alt="")

          .row.justify-content-center(numero="3" titulo="Análisis y evaluación del riesgo")
            .col-xl-10.mb-4.mb-md-0
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Identificación de brechas.
                li
                  i.fas.fa-check-circle
                  span Determinar impacto.

              p En esta etapa se establecen las brechas a la seguridad, identificando el impacto de estas sobre cada uno de los activos de información y cómo puede afectar la organización; en este ejercicio se deben de identificar y priorizar aquellas vulnerabilidades que se consideren críticas.

            .col-xl-2.col-lg-4.col-md-4.col-sm-5.col-6
              figure
                img(src='@/assets/curso/tema1/icono3.svg' alt="")

          .row.justify-content-center(numero="4" titulo="Definición de planes de acción")
            .col-xl-10.mb-4.mb-md-0
              ul.lista-ul.mt-3
                li
                  i.fas.fa-check-circle
                  span Diseño plan de mitigación.
                li
                  i.fas.fa-check-circle
                  span Determina controles.

              p Esta etapa debe consolidar el plan para la adopción de acciones correctivas para el control de las vulnerabilidades; estas acciones se pueden tipificar en:

              p #[strong Controles correctivos:] controles aplicados directamente sobre sistemas o aplicaciones vulnerables.

              p #[strong Controles compensatorios:] controles aplicados indirectamente sobre los sistemas vulnerables.

            .col-xl-2.col-lg-4.col-md-4.col-sm-5.col-6
              figure
                img(src='@/assets/curso/tema1/icono4.svg' alt="")

      .col-lg-4.d-none.d-lg-flex(data-aos="fade-down-left")
        figure
          img(src="@/assets/curso/tema1/imagen3.png", alt="alt")

    .row.justify-content-center
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-down-left")
        figure
          img(src="@/assets/curso/tema1/figura7.svg", alt="alt")

      .col-lg-8.col-md-12.mb-4.mb-lg-0.order-lg-last.order-first(data-aos="fade-down-right")
        LineaTiempoD.cambiocolor
          .row.justify-content-center(numero="5" titulo="Ejecución de plan de acción")
            .col-xl-10.mb-4.mb-md-0
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Implementa controles y acciones.

              p En esta etapa se deben de desplegar e implementar las acciones propuestas en el plan de acción, bajo los tiempos y condiciones establecidas.

            .col-xl-2.col-lg-4.col-md-4.col-sm-5.col-6
              figure
                img(src='@/assets/curso/tema1/icono5.svg' alt="")


          .row.justify-content-center(numero="6" titulo="Verificación de la efectividad")
            .col-xl-10.mb-4.mb-md-0
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Verifica planes y acciones.

              p Consiste en realizar la evaluación de las acciones aplicadas para determinar su validez y asertividad en la reducción a las brechas de seguridad; en algunas ocasiones, se requerirá de evaluar nuevamente o aplicar otras técnicas con el fin de garantizar su efectividad.
            .col-xl-2.col-lg-4.col-md-4.col-sm-5.col-6
              figure
                img(src='@/assets/curso/tema1/icono6.svg' alt="")

          .row.justify-content-center(numero="7" titulo="Lecciones aprendidas")
            .col-xl-10.mb-4.mb-md-0
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Revaluar y mejorar el proceso de gestión de vulnerabilidades.

              p En esta última etapa, busca que el trabajo realizado sea material de insumo para la mejora del mismo proceso, a partir de los casos acertados como de los que no fueron.

            .col-xl-2.col-lg-4.col-md-4.col-sm-5.col-6
              figure
                img(src='@/assets/curso/tema1/icono7.svg' alt="")

    p.my-5(data-aos="fade-down-left") A partir de estas etapas anteriormente descritas, han surgido diferentes alternativas para este ejercicio, como se puede apreciar en la siguiente figura:
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade")
      h5 Figura 2.
      span Metodologías para la gestión de vulnerabilidades
    .row.align-items-strecth.justify-content-center
      .col-lg-4.col-md-7.col-sm-8.col-12.mb-4.mb-lg-0(data-aos="fade-down-left")
        .px-2.h-100
          .row.align-items-center.justify-content-between.fondo-8.py-3
            .col-3
              img(src='@/assets/curso/tema1/figura5.svg' alt="")
            .col-9
              h5.mb-0 NIST
              p.mb-0 Guía para realizar evaluaciones de riesgos SP 800-30.
      .col-lg-4.col-md-7.col-sm-8.col-12.mb-4.mb-lg-0(data-aos="fade-down-left")
        .px-2.h-100
          .row.align-items-center.justify-content-between.fondo-8.py-3
            .col-3
              img(src='@/assets/curso/tema1/figura5.svg' alt="")
            .col-9
              h5.mb-0 OWASP
              p.mb-0 Proyectos de seguridad de aplicaciones <i>web</i> abiertas.
      .col-lg-4.col-md-7.col-sm-8.col-12.mb-4.mb-lg-0(data-aos="fade-down-left")
        .px-2.h-100
          .row.align-items-center.justify-content-between.fondo-8.py-3
            .col-3
              img(src='@/assets/curso/tema1/figura5.svg' alt="")
            .col-9
              h5.mb-0 ISSAF
              p.mb-0 Evaluación de la seguridad de los sistemas de información.

    .row.align-items-strecth.justify-content-center.my-4
      .col-lg-4.col-md-7.col-sm-8.col-12.mb-4.mb-lg-0(data-aos="fade-down-left")
        .px-2.h-100
          .row.align-items-stretch.justify-content-between.fondo-8.py-2
            .col-3
              img(src='@/assets/curso/tema1/figura5.svg' alt="")
            .col-9
              h5.mb-0 OSSTMM
              p.mb-0 Manual de metodología de prueba de seguridad de código abierto.
      .col-lg-4.col-md-7.col-sm-8.col-12.mb-4.mb-lg-0(data-aos="fade-down-left")
        .px-2.h-100
          .row.align-items-stretch.justify-content-between.fondo-8.py-2
            .col-3
              img(src='@/assets/curso/tema1/figura5.svg' alt="")
            .col-9
              h5.mb-0 PTES
              p Estándar de ejecución de pruebas de penetración.
      .col-lg-4.col-md-7.col-sm-8.col-12.mb-4.mb-lg-0(data-aos="fade-down-left")
        .px-2.h-100
          .row.align-items-stretch.justify-content-between.fondo-8.py-2
            .col-3
              img(src='@/assets/curso/tema1/figura5.svg' alt="")
            .col-9
              h5.mb-0 WASC-TC
              p.mb-0 Clasificación de amenazas del consorcio de seguridad de aplicaciones <i>web</i>.
    p.mb-4(data-aos="fade-down-left") De las cuales se profundizará en algunas de ellas:

    .btn-h3.mb-4
      span.h3 NIST

    .row.justify-content-center
      .col-lg-4.col-md-6.col-sm-7.col-8.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura6.png' alt="")
      .col-lg-8.col-md-12(data-aos="fade-down-left")
        p Este marco de trabajo para la mejora de la seguridad cibernética en infraestructuras críticas, el cual fue generado por el Gobierno de los Estados Unidos a mediados del año 2014, brinda a las organizaciones la metodología para la reducción de riesgos cibernéticos a partir de una adecuada gestión de riesgos.
        p Este marco de trabajo, propone la gestión desde una serie de funciones, las cuales se desarrollan de manera simultánea y continua como son: #[b Identificar, Proteger, Detectar, Responder y Recuperar]. Estas funciones del marco de trabajo, conlleva a desarrollar una serie de actividades basadas en categorías, encaminadas a reducir los riesgos que se pueden presentar y afectar la información de una organización.

        p A continuación, se puede observar un resumen de estas categorías y actividades que se desarrollan para la adecuada gestión de vulnerabilidades:


    TabsB.color-primario.my-5
      .py-4.py-md-5(titulo="Identificar (ID)" :icono="require('@/assets/curso/tema1/figura8.svg')")
        .row.justify-content-center.align-items-start
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-secundario
              table.text-center
                caption Funciones del <i>framework</i> NIST - Identificar
                thead
                  tr
                    th FUNCIÓN IDENTIFICADOR ÚNICO
                    th FUNCIONES
                    th CATEGORÍA IDENTIFICADOR ÚNICO
                    th CATEGORÍAS
                tbody.fondo-blanco
                  tr
                    <td rowspan="6">ID</td>
                    <td rowspan="6">IDENTIFICAR</td>
                    td ID.AM
                    td Gestión de activos
                  tr
                    td ID.BE
                    td Ambiente de negocios
                  tr
                    td ID.GV
                    td Gobernanza
                  tr
                    td ID.RA
                    td Evaluación de riesgos
                  tr
                    td ID.RM
                    td Estrategia de gestión de riesgos
                  tr
                    td ID.SC
                    td Gestión del riesgo de la cadena de suministro

      .py-4.py-md-5(titulo="Proteger (PR)" :icono="require('@/assets/curso/tema1/figura9.svg')")
        .row.justify-content-center.align-items-start
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-secundario
              table.text-center
                caption Funciones del <i>framework</i> NIST - Proteger
                thead
                  tr
                    th FUNCIÓN IDENTIFICADOR ÚNICO
                    th FUNCIONES
                    th CATEGORÍA IDENTIFICADOR ÚNICO
                    th CATEGORÍAS
                tbody.fondo-blanco
                  tr
                    <td rowspan="6">PR</td>
                    <td rowspan="6">PROTEGER</td>
                    td PR.AC
                    td Gestión de identidad, autenticación y control de acceso
                  tr
                    td PR.AT
                    td Conciencia y capacitación
                  tr
                    td PR.DS
                    td Seguridad de datos
                  tr
                    td PR.IP
                    td Procesos y procedimientos de protección de la información
                  tr
                    td PR.MA
                    td Mantenimiento
                  tr
                    td PR.PT
                    td Tecnología de protección

      .py-4.py-md-5(titulo="Detectar (DE)" :icono="require('@/assets/curso/tema1/figura10.svg')")
        .row.justify-content-center.align-items-start
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-secundario
              table.text-center
                caption Funciones del <i>framework</i> NIST - Detectar
                thead
                  tr
                    th FUNCIÓN IDENTIFICADOR ÚNICO
                    th FUNCIONES
                    th CATEGORÍA IDENTIFICADOR ÚNICO
                    th CATEGORÍAS
                tbody.fondo-blanco
                  tr
                    <td rowspan="3">DE</td>
                    <td rowspan="3">DETECTAR</td>
                    td DE.AE
                    td Anomalías y eventos
                  tr
                    td DE.CM
                    td Monitoreo continuo de seguridad
                  tr
                    td DE.DP
                    td Procesos de detección

      .py-4.py-md-5(titulo="Responder (RS)" :icono="require('@/assets/curso/tema1/figura11.svg')")
        .row.justify-content-center.align-items-start
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-secundario
              table.text-center
                caption Funciones del <i>framework</i> NIST - Responder
                thead
                  tr
                    th FUNCIÓN IDENTIFICADOR ÚNICO
                    th FUNCIONES
                    th CATEGORÍA IDENTIFICADOR ÚNICO
                    th CATEGORÍAS
                tbody.fondo-blanco
                  tr
                    <td rowspan="5">RS</td>
                    <td rowspan="5">RESPONDER</td>
                    td Planificación de respuesta
                    td Planificación de respuesta
                  tr
                    td Comunicaciones
                    td Comunicaciones
                  tr
                    td Análisis
                    td Análisis
                  tr
                    td Mitigación
                    td Mitigación
                  tr
                    td Mejoras
                    td Mejoras

      .py-4.py-md-5(titulo="Recuperar (RC)" :icono="require('@/assets/curso/tema1/figura12.svg')")
        .row.justify-content-center.align-items-start
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-secundario
              table.text-center
                caption Funciones del <i>framework</i> NIST - Recuperar
                thead
                  tr
                    th FUNCIÓN IDENTIFICADOR ÚNICO
                    th FUNCIONES
                    th CATEGORÍA IDENTIFICADOR ÚNICO
                    th CATEGORÍAS
                tbody.fondo-blanco
                  tr
                    <td rowspan="3">RC</td>
                    <td rowspan="3">RECUPERAR</td>
                    td RC.RP
                    td Planificación de la recuperación
                  tr
                    td RC.IM
                    td MEJORAS
                  tr
                    td RC.CO
                    td Comunicaciones

    .row.justify-content-center.mb-5(data-aos="fade-down-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src='@/assets/curso/tema1/figura13.svg', style="max-width: 80px", alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 NIST
                  p.text-small Aunque este ha sido propuesto para infraestructuras críticas, se puede aplicar a cualquier tipo de organización, lo que lo hace un método muy llamativo para entidades del gobierno. Consulte la versión completa del documento desde su sitio oficial. Este recurso también está en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.nist.gov/cyberframework/framework')" target="_blank")
                    span Ir al sitio <i>web</i>
                    i.fas.fa-external-link-alt

    .btn-h3.mb-4
      span.h3 OWASP

    .row.justify-content-center.mb-5
      .col-lg-7.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")

        p Es una organización sin fines lucrativos, la cual busca ayudar a visibilizar las vulnerabilidades en aplicaciones para su mejoramiento de la seguridad a partir de una adecuada gestión del riesgo, siendo este un pilar fundamental para el desarrollo y aplicación de su metodología.

        p <i>OWASP</i> provee de un <em>framework</em> abierto el cual permite implementar auditorías en aplicaciones principalmente de tipo <i>web</i>, basados esencialmente en pruebas de caja blanca y caja negra. A partir de su ejercicio identifica las vulnerabilidades más representativas y presentes en la actualidad en su <i>OWASP</i> top 10. En su último reporte, el <i>OWASP</i> Top 10 2021 se puede apreciar la siguiente clasificación frente al informe previo del año 2017:

      .col-lg-5.col-md-6.col-sm-7.col-8(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/figura14.svg' alt="")

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade")
      h5 Figura 3.
      span <i>OWASP</i> Top 10 2021

    .row.justify-content-center.mb-5.fondo-11.p-2.p-sm-3.p-lg-4
      .col-lg-10.col-md-12.px-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura15.svg' alt="La imagen presenta el informe OWASP Top 10 2021, comparado con el 2017.")
      .col-lg-10.col-md-12.fondo-12.py-2(data-aos="fade-down-left")
        p.text-small.mb-0 Nota. Tomado de <i>OWASP</i> (2021)

    p.mb-5(data-aos="fade-down-right") Con base en este reporte, se analiza el comportamiento de las vulnerabilidades identificadas, así:

    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")

        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Pérdida del control de acceso (<em>Broken Access Control</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p El control de acceso permite cumplir una política de permisos y roles. Estas restricciones implican que los usuarios no puedan actuar fuera de los permisos y, además, llevar un control de quien accede a cada recurso. La vulnerabilidad #[em Broken Access Control] permite que un usuario sin privilegios pueda acceder a un recurso al que no tendría que acceder.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Un ciberdelincuente podría actuar en el sistema con permisos de usuario o administrador.
                li
                  i.fas.fa-check-circle
                  span Acceso a registros, directorios o archivos confidenciales para su posterior posible divulgación.
          .row(titulo="Fallos criptográficos (<em>Cryptographic Failures</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p Hay ciertos datos que deben estar cifrados, como credenciales de acceso, datos bancarios, información confidencial de la empresa, etc., ya que aparte de que la ley lo exija, el que un ciberdelincuente se pueda hacer con ellos puede ser catastrófico para la empresa. En resumen, para que estos sean vistos únicamente por las personas autorizadas de la empresa hay que aplicarles un cifrado con algoritmos y protocolos estándares y robustos.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Exposición de datos sensibles a un ciberdelincuente (datos personales, críticos o estratégicos para la empresa; credenciales…).
          .row(titulo="Inyección (<em>Injection</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p Esto sucede cuando un ciberdelincuente puede enviar datos dañinos a un intérprete. Como novedad este año, el <em>Cross-site Scripting</em> forma parte de esta categoría. Para ello, hay que tener API seguras y controles de verificación a la hora de introducir los datos.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Exposición y posible modificación de datos sensibles por parte de un ciberdelincuente.
                li
                  i.fas.fa-check-circle
                  span Bajo ciertas circunstancias podría permitir al ciberdelincuente tomar el control del servidor.
          .row(titulo="Diseño inseguro (<em>Insecure Desing</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p A la hora de desarrollar una aplicación <i>web</i> es primordial incluir la seguridad de la aplicación desde la fase del diseño, ya que este año se ha incluido esta nueva categoría debido a la gran cantidad de aplicaciones que no la cumplen. Muchas aplicaciones cuentan con defectos en el diseño de las mismas.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Exposición y posible modificación de datos por un ciberdelincuente.
                li
                  i.fas.fa-check-circle
                  span Acceso al servidor/aplicación por parte de un ciberdelincuente con permisos de administrador o usuario.
          .row(titulo="Configuración de seguridad defectuosa (<em>Security Misconfiguration</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p En nuestro entorno de la aplicación <i>web</i>, los ciberdelincuentes intentarán acceder mediante cuentas por defecto, versiones obsoletas con vulnerabilidades sin actualizar, directorios desprotegidos, etc. Por ello, tiene que estar todo bien configurado y evitar usar credenciales por defecto, como puede ser en el caso de nuestro servidor, aplicaciones o dispositivos.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Acceso no autorizado al sistema por parte del ciberdelincuente
          .row(titulo="Componentes vulnerables y obsoletos (<em>Vulnerable and Outdated Components</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p Un ciberdelincuente podrá comprometer un sistema mediante vulnerabilidades ya conocidas en componentes comunes, como por ejemplo la versión del sistema operativo o aplicaciones instaladas en el servidor, entre otras.
              p ¿Qué impacto puede tener esto en mi empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Algunas de estas vulnerabilidades pueden tener un impacto pequeño, pero las mayores brechas de seguridad se han producido mediante la explotación de este tipo de vulnerabilidades.
          .row(titulo="Fallos de identificación y autenticación (<em>Identification and Authentication Failures</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p Esto sucede cuando en las interfaces de acceso no se controla el número de intentos de autenticación, hay una baja complejidad de las contraseñas o no se implanta un sistema multifactor “2FA”. Esto podría permitir a un ciberdelincuente realizar ataques de fuerza bruta o diccionario para ingresar en él o cuando tu aplicación permite utilizar contraseñas débiles.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Los ciberdelincuentes tendrán acceso a cuentas administrativas o de empleados en la aplicación.
          .row(titulo="Fallos en el <em>software</em> y en la integridad de los datos (<em>Software and Data Integrity Failures</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p Muchas aplicaciones se actualizan de manera automática. Cuando estas actualizaciones no son verificadas los ciberdelincuentes podrían modificarlas cargando sus propias actualizaciones y distribuyéndolas.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Inclusión de código no deseado por un ciberdelincuente en mi aplicación.
          .row(titulo="Fallos en el registro y la supervisión de la seguridad (<em>Security Logging and Monitoring Failures</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p La falta de registros sobre eventos, los denominados #[em logs], en la aplicación o en el sistema, como inicios de sesión (tanto válidos como fallidos). Por ejemplo: que estos registros no se almacenen remotamente impide que se puedan detectar las infracciones.
              p ¿Qué impacto puede tener esto en mi empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Desconocimiento sobre inicios de sesión no autorizados.
                li
                  i.fas.fa-check-circle
                  span Desconocimiento sobre los actos de un ciberdelincuente en nuestro sistema.
          .row(titulo="Falsificación de Solicitud del Lado del Servidor (<em>Server-side Request Forgery o SSRF</em>)")(data-aos="fade-down-right")
            .col-md-11.mb-4.mb-md-0
              p Cuando nuestra aplicación <i>web</i> obtiene un recurso externo y este no valida la URL un ciberdelincuente podría modificarla con fines malintencionados y realizar peticiones no autorizadas.
              p ¿Qué impacto puede tener esto en una empresa?
              ul.lista-ul
                li
                  i.fas.fa-check-circle
                  span Robo de datos sensibles de la empresa.
                li
                  i.fas.fa-check-circle
                  span Acceso a sistemas internos de la empresa


    .row.justify-content-center.my-5(data-aos="fade-down-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src='@/assets/curso/tema1/figura13.svg', style="max-width: 80px", alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 OWASP
                  p.text-small Dado lo anterior, <i>OWASP</i>, se ha vuelto una metodología práctica para la identificación de vulnerabilidades en las aplicaciones <i>web</i> más utilizadas por los equipos de desarrollo en los últimos años. Se sugiere explorar y hacer uso de esta metodología, consultando su documento oficial. Este recurso también está en el material complementario.
                .col-md-auto
                  a.boton.color-acento-botones(:href="('https://owasp.org/www-project-web-security-testing-guide/stable/')" target="_blank")
                    span Ir al sitio <i>web</i>
                    i.fas.fa-external-link-alt


    .btn-h3.mb-4
      span.h3 ISSAF

    p.mb-5 Es un marco de trabajo para el testeo e identificación de vulnerabilidades de seguridad estructurado en tres fases. Esta metodología está enfocada en realizar análisis de seguridad a partir de los resultados obtenidos, a continuación, se observa un esquema general de sus fases y su respectiva conceptualización:


    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2.text-white 1
          .row.justify-content-center.align-items-center
            .col-lg-8
              h5 Planeación y preparación
              p Establece los pasos iniciales para el desarrollo de la auditoría y ejercicios de testeo.
              p Entre las actividades relacionadas se encuentran: identificación de interesados, reuniones de apertura, definición de enfoque y metodología, cronograma de tiempo.
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/issaf-1.svg', alt='')


      .col-lg-10.mb-5
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2.text-white 2
          h5 Evaluación
          p.mb-4 En esta fase, se desarrollan las validaciones de acuerdo a las siguientes 9 capas:

          figure.d-none.d-md-block
            img(src='@/assets/curso/tema1/figura17_desktop.svg',style="max-width: 757px", alt="Fase de evaluación: En esta fase, se desarrollan las validaciones de acuerdo a las siguientes 9 capas: 1. Recolección de información,2. Mapeo de la red de trabajo, 3. Identificación de vulnerabilidades, 4. Penetración,5. Obtención de acceso y escalamiento de privilegios,6. Enumeración, 7. Compromiso de usuarios y sitios remotos, 8. Mantener el acceso y 9. Cubrir rastros.").m-auto

          figure.d-md-none
            img(src='@/assets/curso/tema1/figura17_movil.svg',style="max-width: 230px", alt="Fase de evaluación: En esta fase, se desarrollan las validaciones de acuerdo a las siguientes 9 capas: 1. Recolección de información,2. Mapeo de la red de trabajo, 3. Identificación de vulnerabilidades, 4. Penetración,5. Obtención de acceso y escalamiento de privilegios,6. Enumeración, 7. Compromiso de usuarios y sitios remotos, 8. Mantener el acceso y 9. Cubrir rastros.").m-auto


      .col-lg-10.mb-5
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2.text-white 3
          .row.justify-content-center.align-items-center
            .col-lg-8
              h5 Reportes, limpieza y destrucción de objetos
              p Fase donde se analizan las pruebas, consolidan resultados y se presenta los reportes a los interesados.
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/figura18.svg', alt='')


    .row.justify-content-center.my-4(data-aos="fade-down-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src='@/assets/curso/tema1/figura13.svg', style="max-width: 80px", alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 ISSAF
                  p.text-small Este proyecto lleva varios años sin mantenimiento, pero se puede consultar el texto completo de la metodología en el enlace. Este recurso también puede ser consultado en el material complementario.
                .col-md-auto
                  a.boton.color-acento-botones(:href="('http://cuchillac.net/archivos/pre_seguridad_pymes/2_hakeo_etico/lects/metodologia_oissg.pdf')" target="_blank" type="application/pdf")
                    span Ir al sitio <i>web</i>
                    i.fas.fa-external-link-alt


    .btn-h3.mb-4
      span.h3 OSSTMM

    p.mb-5 Esta metodología para pruebas de seguridad también es muy utilizada y, debido a su aplicación tan extensa, se ha convertido en un estándar de facto para el desarrollo de auditorías de seguridad, ya que proporciona un marco de trabajo que describe las actividades a desarrollar, las cuales están comprendidas como se presentan a continuación:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade")
      h5 Tabla 1.
      span Secciones y revisiones de la metodología OSSTMM 2.1
    .row.justify-content-center.mb-4
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .tabla-a.color-acento-contenido.mb-4
          table.text-center
            caption
              p.fuente14px.mb-0 Nota. Adaptado de ISECOM (2021)
            thead
              tr
                th
                  h6 SECCIÓN
                th
                  h6 REVISIÓN
            tbody.fondo-blanco
              tr
                <td rowspan="3"><h6>Sección A -Seguridad de la Información</h6></td>
                td.text-left Revisión de la Inteligencia Competitiva
              tr
                td.text-left Revisión de Privacidad
              tr
                td.text-left Recolección de Documentos
              tr
                <td rowspan="3"><h6>Sección B - Seguridad de los Procesos</h6></td>
                td.text-left Testeo de Solicitud
              tr
                td.text-left Testeo de Sugerencia Dirigida
              tr
                td.text-left Testeo de las Personas Confiables
              tr
                <td rowspan="16"><h6>Sección C - Seguridad en las tecnologías de Internet</h6></td>
                td.text-left Identificación de los Servicios del Sistema de Logística y Controles
              tr
                td.text-left Exploración de Red
              tr
                td.text-left Identificación de los Servicios del Sistema
              tr
                td.text-left Búsqueda de Información Competitiva
              tr
                td.text-left Revisión de Privacidad
              tr
                td.text-left Obtención de Documentos
              tr
                td.text-left Búsqueda y Verificación de Vulnerabilidades
              tr
                td.text-left Testeo de Aplicaciones de Internet
              tr
                td.text-left Enrutamiento
              tr
                td.text-left Testeo de Sistemas Confiados
              tr
                td.text-left Testeo de Control de Acceso
              tr
                td.text-left Testeo de Sistema de Detección de Intrusos
              tr
                td.text-left Testeo de Medidas de Contingencia
              tr
                td.text-left Descifrado de Contraseñas
              tr
                td.text-left Testeo de Denegación de Servicios
              tr
                td.text-left Evaluación de Políticas de Seguridad
              tr
                <td rowspan="4"><h6>Sección D - Seguridad en las Comunicaciones</h6></td>
                td.text-left Testeo de PBX
              tr
                td.text-left Testeo del Correo de Voz
              tr
                td.text-left Revisión del FAX
              tr
                td.text-left Testeo del Modem


    .row.justify-content-center.my-4(data-aos="fade-down-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src='@/assets/curso/tema1/figura13.svg', style="max-width: 80px", alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 OSSTMM
                  p.text-small Si se desea profundizar detalles de esta metodología, se puede consultar su sitio oficial; el cual también se encuentra ubicado en el material complementario.
                .col-md-auto
                  a.boton.color-acento-botones(:href="('https://www.isecom.org')" target="_blank")
                    span Ir al sitio <i>web</i>
                    i.fas.fa-external-link-alt


    .btn-h3.mb-4
      span.h3 PTES

    p.mb-5 Se consolida como estándar para pruebas de penetración y <em>testing</em>, que puede ser aplicado en cualquier organización. Entre sus objetivos se encuentra el de disponer de un marco de trabajo para la realización de auditorías técnicas de seguridad en sistemas de información. Se desarrolla en las siguientes siete fases:

    .d-none.d-lg-block
      figure.mb-4
        img(src='@/assets/curso/tema1/figura19.svg', alt="Fases de la metodología PTES: Entre sus objetivos se encuentra el de disponer de un marco de trabajo para la realización de auditorías técnicas de seguridad en sistemas de información. Se desarrolla en las siguientes siete fases: información previa, recopilación de la información, modelado de amenazas, análisis de vulnerabilidades, explotación, post-explotación y reporting.")

    .d-lg-none
      figure.mb-4.p-4
        img(src='@/assets/curso/tema1/figura19b.svg', style="max-width:331px",  alt="Fases de la metodología PTES: Entre sus objetivos se encuentra el de disponer de un marco de trabajo para la realización de auditorías técnicas de seguridad en sistemas de información. Se desarrolla en las siguientes siete fases: información previa, recopilación de la información, modelado de amenazas, análisis de vulnerabilidades, explotación, post-explotación y reporting.").m-auto

    .row.justify-content-center.my-5(data-aos="fade-down-right")
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src='@/assets/curso/tema1/figura13.svg', style="max-width: 80px", alt="")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 PTES
                  p.text-small Su consulta para conocer más a detalle esta metodología puede ser a través de su sitio oficial, el cual también se encuentra en el material complementario.
                .col-md-auto
                  a.boton.color-acento-botones(:href="('http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines')" target="_blank")
                    span Ir al sitio <i>web</i>
                    i.fas.fa-external-link-alt


    p(data-aos="fade-down-right") Las metodologías anteriormente descritas permitirán realizar un análisis de vulnerabilidades, establecer planes de acciones y un proceso importante, que es adoptar planes de mejoramiento al interior, dado que el proceso de gestión de vulnerabilidades debe ser un proceso continuo.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.2 Tipos de pruebas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-3.col-sm-4.col-5.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura27.svg')
      .col-lg-10.col-md-9.col-sm-12(data-aos="fade-down-left")
        p Cuando se está desarrollando el proceso de evaluación de la seguridad, se debe de garantizar que los resultados presentados estén respaldados en ejercicios de verificación y comprobación que permitan establecer si una condición se está cumpliendo o no; para este caso estamos hablando de controles, técnicas, tácticas para el aseguramiento de la información y en este ejercicio pueden surgir diferentes alternativas para verificar este tipo de cumplimientos, entre las que se pueden apreciar:

    SlyderF(data-aos="fade-down-right").mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura28.svg')
          .col-8
            h5 Pruebas unitarias
        p.text-small Este tipo de pruebas se enfocan en testear fragmentos de código o aplicaciones para evaluar la lógica bajo la cual se ha programado y si desarrolla adecuadamente las tareas bajo ciertas condiciones.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura29.svg')
          .col-8
            h5 Prueba de integración
        p.text-small Estas pruebas, buscan verificar el desarrollo de una actividad que involucra más de un componente, por ejemplo, la lógica de una aplicación <i>web</i> y la de un motor de base de datos.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura30.svg')
          .col-8
            h5  Pruebas de extremo a extremo
        p.text-small Estas buscan verificar el traslado de información y cómo viajan entre un punto de origen y uno de destino, este tipo de pruebas son comunes cuando se prueban API’s o plataformas de envío de mensajes.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura31.svg')
          .col-8
            h5  Prueba de aceptación
        p.text-small Este tipo de pruebas, busca validar si una solución cumple con lo requerido o solicitado por un cliente.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura32.svg')
          .col-8
            h5  Pruebas de caja blanca
        p.text-small Este tipo de pruebas validan el comportamiento de la lógica de la solución, para realizar este tipo de pruebas, se asume que conoce los detalles de su arquitectura, métodos, funciones, entre otros.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura33.svg')
          .col-8
            h5 Pruebas de caja negra
        p.text-small Este tipo de pruebas son de funcionalidad y comportamiento de un sistema, por lo general desconociendo la estructura de la solución.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura34.svg')
          .col-8
            h5  Pruebas de caja gris
        p.text-small Propone una validación, combinando las pruebas de caja blanca y caja negra, permitiendo abordar aspectos más complejos e integrales en las soluciones.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura35.svg')
          .col-8
            h5  Prueba manual
        p.text-small Son pruebas que se especifican manualmente y sin automatización, para la evaluación de los resultados obtenidos.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura36.svg')
          .col-8
            h5 Prueba estática
        p.text-small Son aquellas que se realizan sin código real, para determinar si hay defectos en el rendimiento de la solución.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura37.svg')
          .col-8
            h5 Pruebas dinámicas
        p.text-small Este tipo de pruebas se ejecuta con código real para validar su funcionamiento.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura38.svg')
          .col-8
            h5 Pruebas visuales o de interfaz de usuario
        p.text-small Son las pruebas que se realizan a interfaces de usuario para la revisión del comportamiento y la integridad de la información.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura39.svg')
          .col-8
            h5 Pruebas de humo
        p.text-small Tipo de prueba que se realiza a un conjunto pequeño de controles para verificar su funcionalidad.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura40.svg')
          .col-8
            h5 Pruebas de regresión
        p.text-small Permite validar si una funcionalidad o característica se rompe o no está funcionando como se propuso.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura41.svg')
          .col-8
            h5 Pruebas de carga
        p.text-small Este tipo de pruebas buscan verificar el comportamiento de una solución de acuerdo a diferentes momentos de demanda del servicio.

      .tarjeta.sinredondeo.ajustesize.fondo-19.p-4.m-auto
        .row.justify-content-center.mb-3.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/figura42.svg')
          .col-8
            h5 Pruebas de inserción
        p.text-small Este tipo de pruebas permite verificar la integridad de la seguridad de la información dentro de la solución.


    .row.fondo-20.align-items-center
      .col-lg-8.col-md-12.mb-lg-2.mb-lg-4.p-lg-5.p-3(data-aos="fade-down-right")
        p.mt-0.mt-lg-3.mt-xl-0 Existen varios tipos de pruebas que se pueden realizar a las aplicaciones o soluciones con las que cuenta la organización que permite verificar si realmente están realizando las operaciones según lo solicitado y lo establecido en el programa.
        p Su aplicación dependerá del alcance de la evaluación a realizar, así como también dependerá si las soluciones son construidas <i>in-house</i> o son adquiridas a un tercero, en cualquiera de los casos, debería de validarse la información para garantizar su integridad.
      .col-lg-4.col-md-6.col-sm-7.col-8.pe-0.pb-0.my-5.mostrar-lg(data-aos="fade-down-left")
        img.subir(src='@/assets/curso/tema1/imagen4.png')
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.3 <em>Hacking</em> ético

    p.mb-4 Para conocer los fundamentos de #[em hacking] ético y seguridad informática, lo invitamos a ver el siguiente video.

    figure.mb-5(data-aos="fade-up-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8q3cb4QwJSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-5.d-none.d-lg-flex(data-aos="fade-down-right")
        figure
          img(src="@/assets/curso/tema1/imagen5.png", alt="alt").class
          figcaption

      .col-lg-7.col-md-12(data-aos="fade-down-left")
        p El <i>hacking</i> ético o también denominado sombrero blanco, es un conjunto de técnicas que se aplican para el descubrimiento de vulnerabilidades dentro de un entorno o un conjunto de aplicaciones.
        p Esta técnica se desarrolla de manera consentida y aprobada por las organizaciones y los responsables de realizar las validaciones correspondientes, con lo cual buscan identificar las debilidades, anormalidades y falencias en su seguridad.
        p Los expertos que realizan este tipo de validaciones hacen uso de técnicas especializadas que se denominan <em>Test</em> de Penetración o <em>Pentesting</em>, y su objetivo es burlar los controles de seguridad y en caso de conseguir una identificación positiva, este deberá reportarlo a la organización. Este tipo de estrategia no debería de causar daño, dado que es concebido y tiene fines de exploración.

    p.mb-4 Ahora, lo invitamos a ver el video sobre las metodologías del #[em hacking].

    figure.my-5(data-aos="fade-up-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/r3S8tscj-bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.my-5(data-aos="fade-down-right") Este ejercicio se desarrolla básicamente en las siguientes 5 fases:

    .row.justify-content-center.my-4
      .col-lg-9
        PasosA.color-primario(tipo="n")
          .row.align-items-center
            .col-auto
              figure.px-2
                img(src='@/assets/curso/tema1/figura43.svg', style="max-width:85px", alt="")
            .col
              h4 Fase 1 - Reconocimiento
              p Preparación del escenario, hace uso de diferentes técnicas para el descubrimiento de pistas que le permitan alcanzar su objetivo.
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  span Ingeniería social.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Dumpster diving</i>.
                li.mb-0
                  i.lista-ul__vineta
                  span #[em Footprinters].


          .row.align-items-center
            .col
              h4 Fase 2 - Escaneo
              p A partir de la información recolectada, inicia con el escaneo con la ayuda de herramientas para la búsqueda de vulnerabilidades.
              .d-flex
                ul.lista-ul
                  li.mb-0
                    i.lista-ul__vineta
                    span Escáner de puertos.
                  li.mb-0
                    i.lista-ul__vineta
                    span Escáner de vulnerabilidades.
            .col-auto
              figure.px-2
                img(src='@/assets/curso/tema1/figura44.svg', style="max-width:85px", alt="")


          .row.align-items-center
            .col-auto
              figure.px-2
                img(src='@/assets/curso/tema1/figura45.svg', style="max-width:85px", alt="")
            .col
              h4 Fase 3 - Obtener acceso
              p Fase en la cual explota las vulnerabilidades encontradas.
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  span Inyección de código.
                li.mb-0
                  i.lista-ul__vineta
                  span Basado en <i>web</i>.
                li.mb-0
                  i.lista-ul__vineta
                  span Basado en red.
                li.mb-0
                  i.lista-ul__vineta
                  span Ingeniería social.
                li.mb-0
                  i.lista-ul__vineta
                  span Ataque de contraseñas.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Network spoofung</i>.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Network sniffers</i>.


          .row.align-items-center
            .col
              h4 Fase 4 - Mantener acceso
              p Fase en donde mantiene el sistema vulnerable.
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Back Doors</i>.
                li.mb-0
                  i.lista-ul__vineta
                  span Troyanos.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Rootkit</i>.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Keyloggers</i>.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Botnets</i>.
            .col-auto
              figure.px-2
                img(src='@/assets/curso/tema1/figura46.svg', style="max-width:85px", alt="")

          .row.align-items-center
            .col-auto
              figure.px-2
                img(src='@/assets/curso/tema1/figura47.svg', style="max-width:85px", alt="")
            .col
              h4 Fase 5 - Cubrir huella
              p Fase en la cual cubre todas las pistas de las acciones realizadas durante el ejercicio.
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  span Troyanos.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Rootkit</i>.
                li.mb-0
                  i.lista-ul__vineta
                  span Esteganografía.
                li.mb-0
                  i.lista-ul__vineta
                  span <i>Tuneling</i>.



    p.mb-5(data-aos="fade-down-right") Ahora bien, dependiendo de su alcance, se puede determinar el tipo de #[em hacker] requerido, tal como se evidencia en el siguiente video e infografía.

    figure(data-aos="fade-up-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Puk3JZ5R_Ic" title="Tipos Hackers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Tipos #[em Hackers].


    figure.my-5.d-none.d-lg-block
      img(src='@/assets/curso/tema1/figura48.svg', alt="Tipos de hacker: WhistleBlower, Black Hat, Grey Hat, White Hat, Red Hat, Green Hat, Purple Hat, Blue Hat")

    figure.my-5.d-lg-none
      img(src='@/assets/curso/tema1/figura48b.png', style="max-width: 270px", alt="Tipos de hacker: WhistleBlower, Black Hat, Grey Hat, White Hat, Red Hat, Green Hat, Purple Hat, Blue Hat").m-auto


    p.my-5(data-aos="fade-down-right") Estos ejercicios son muy comunes cuando las organizaciones quieren identificar vulnerabilidades presentes en sus sistemas, y requieren que una persona externa desarrolle esta actividad, pero siempre mediando algún acuerdo de confidencialidad y naturalmente una autorización de por medio.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.4  Equipos de seguridad <em>Red Team & Blue Team</em>
    .row.justify-content-center.my-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-down-right")
        p Los equipos de seguridad <em>Red Team & Blue Team</em> se consolidan como estrategias para organizaciones más complejas y de mayor tamaño y como su nombre lo indica, está conformado por equipos de personas quienes, desde cada uno de sus grupos, realizan acciones para la identificación de vulnerabilidades.
        p Este concepto proviene de elementos relacionados con entrenamiento militar, los cuales fueron adoptados por la disciplina de la ciberseguridad y que incorporaron para establecer estrategias de auditoría desde dos frentes distintos. Veamos:
      .col-lg-4(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/figura58.svg', alt="")


    .btn-h3.mb-4
      span.h3 Comparación entre el <em>Red Team</em> y el <em>Blue Team</em>

    .row.justify-content-between.my-5(data-aos="fade-down-right")
      .col-lg-6.col-md-12.mb-4.mb-lg-0.fondo-25.redondearpuntas.pt-0.separar(data-aos="fade-down-right")
        .row.justify-content-center.mt-0
          .col-4.pt-0.subir1
            img.mt-0(src='@/assets/curso/tema1/figura59.svg', alt="")
          .col-8.pt-4
            h5 <em>Red Team</em>
            p Busca burlar la seguridad de la organización, y simular ataques para la identificación de vulnerabilidades, haciendo uso de técnicas de <em>pentesting</em>, herramientas especializadas e incluso de técnicas de recolección de información convencionales, todo esto realizándose desde el exterior de la organización; lo anterior teniendo en cuenta:

        .row.justify-content-center
          .col-md-6.col-sm-12.mb-4.mb-lg-0.ps-4(data-aos="fade-down-right")
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Seguridad ofensiva.
              li
                i.fas.fa-check-circle
                span <em>Hackeo</em> ético.
              li
                i.fas.fa-check-circle
                span Explotación de vulnerabilidades.
              li
                i.fas.fa-check-circle
                span Pruebas de penetración.
              li
                i.fas.fa-check-circle
                span Pruebas de caja negra.
              li
                i.fas.fa-check-circle
                span Ingeniería social.
              li
                i.fas.fa-check-circle
                span Escaneo de aplicaciones <i>web</i>.

          .col-md-6.col-sm-7.col-8(data-aos="fade-down-left")
            img(src='@/assets/curso/tema1/figura60.svg', alt="")

      .col-lg-6.col-md-12.fondo-26.redondearpuntas.separar.pt-0(data-aos="fade-down-left")
        .row.justify-content-center.mt-0
          .col-4.pt-0.subir1
            img.mt-0(src='@/assets/curso/tema1/figura61.svg', alt="")
          .col-8.pt-4
            h5 <em>Blue Team</em>
            p Hacen frente a los ataques y defienden a la organización de los posibles riesgos de seguridad de la información, convirtiéndose en una primera línea frente a la atención a cualquier incidente de seguridad; teniendo en cuenta:
        .row.justify-content-center.mt-4
          .col-md-6.col-sm-12.mb-4.mb-lg-0.ps-4(data-aos="fade-down-right")
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Seguridad defensiva.
              li
                i.fas.fa-check-circle
                span Protección de infraestructura.
              li
                i.fas.fa-check-circle
                span Control de daños.
              li
                i.fas.fa-check-circle
                span Respuesta al incidente.
              li
                i.fas.fa-check-circle
                span Seguridad operacional.
              li
                i.fas.fa-check-circle
                span Caza de amenazas.
              li
                i.fas.fa-check-circle
                span Forense digital.

          .col-md-6.col-sm-7.col-8(data-aos="fade-down-left")
            img(src='@/assets/curso/tema1/figura62.svg', alt="")


    p.my-5(data-aos="fade-down-right") Entre algunas actividades que desarrollan los equipos se encuentran:

    AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.px-4(titulo="<em>Red Team</em>")
        .col-md-7.mb-4.mb-md-0.px-5
          p Entre sus actividades se encuentran:
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Pruebas de penetración en las que un miembro del equipo rojo intenta acceder al sistema utilizando una variedad de técnicas del mundo real.
            li
              i.fas.fa-check-circle
              span Tácticas de ingeniería social, que tienen como objetivo manipular a los empleados u otros miembros de la red para que compartan, divulguen o creen credenciales de red.
            li
              i.fas.fa-check-circle
              span Interceptar la comunicación para mapear la red u obtener más información sobre el entorno para eludir las técnicas de seguridad más comunes.
            li
              i.fas.fa-check-circle
              span Clonación de tarjetas de acceso de un administrador para obtener acceso a áreas sin restricciones.

        .col-md-5
          figure
            img(src='@/assets/curso/tema1/imagen6.png', alt="")

      .row.px-4(titulo="<em>Blue Team</em>")
        .col-md-7.mb-4.mb-md-0.px-5
          p El trabajo desarrollado por este equipo azul está enfocado en la prevención, detección y remediación.  Incorporan las siguientes capacidades:
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Comprensión completa de la estrategia de seguridad de la organización.
            li
              i.fas.fa-check-circle
              span Habilidades de análisis para identificar con precisión las amenazas más peligrosas y priorizar las respuestas en consecuencia.
            li
              i.fas.fa-check-circle
              p Técnicas de endurecimiento para reducir la superficie de ataque, particularmente en lo que se refiere al sistema de nombres de dominio (DNS) para prevenir ataques de #[em phishing] y otras técnicas de violación basadas en la #[em web].
            li
              i.fas.fa-check-circle
              span Gran conocimiento de las herramientas y sistemas de detección de seguridad existentes de la empresa y sus mecanismos de alerta.

        .col-md-5
          figure
            img(src='@/assets/curso/tema1/imagen7.png', alt="")

    p.my-5(data-aos="fade-down-right") Sumado a lo anterior, contar con estos equipos en las organizaciones puede fortalecer a la empresa a través de estos beneficios:

    SlyderF(data-aos="fade-down-right").my-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.ajustesize1.fondo-27.p-4.m-auto
        .row.mb-3.justify-content-center
          .col-lg-7.col-md-6.col-sm-7.col-7
            img(src='@/assets/curso/tema1/figura63.svg', alt="")
        p.text-white.text-bold Identificación de configuraciones erróneas y brechas a la seguridad.

      .tarjeta.ajustesize1.fondo-27.p-4.m-auto
        .row.mb-3.justify-content-center
          .col-lg-7.col-md-6.col-sm-7.col-7
            img(src='@/assets/curso/tema1/figura64.svg', alt="")
        p.text-white.text-bold Fortalecimiento de la seguridad de la red para detectar ataques dirigidos y mejorar el tiempo de ruptura.

      .tarjeta.ajustesize1.fondo-27.p-4.m-auto
        .row.mb-3.justify-content-center
          .col-lg-7.col-md-6.col-sm-7.col-7
            img(src='@/assets/curso/tema1/figura65.svg', alt="")
        p.text-white.text-bold Aumentar la competencia sana entre el personal de seguridad y fomentar la cooperación entre los equipos de TI y seguridad.

      .tarjeta.ajustesize1.fondo-27.p-4.m-auto
        .row.mb-3.justify-content-center
          .col-lg-7.col-md-6.col-sm-7.col-7
            img(src='@/assets/curso/tema1/figura66.svg', alt="")
        p.text-white.text-bold Aumentar la conciencia entre el personal sobre el riesgo de vulnerabilidades humanas que pueden comprometer la seguridad de la organización.

      .tarjeta.ajustesize1.fondo-27.p-4.m-auto
        .row.mb-3.justify-content-center
          .col-lg-7.col-md-6.col-sm-7.col-7
            img(src='@/assets/curso/tema1/figura67.svg', alt="")
        p.text-white.text-bold Desarrollar las habilidades y la madurez de las capacidades de seguridad de la organización dentro de un entorno de capacitación seguro y de bajo riesgo.


    .row.justify-content-center.fondo-28.align-items-center.px-5
      .col-lg-3.col-md-4.col-sm-5.col-6.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura68.svg', alt="")
      .col-lg-9.col-md-12(data-aos="fade-down-left")
        p Estas son algunas de las estrategias para la evaluación de la seguridad de la información en las organizaciones. Su elección dependerá del tipo, complejidad, tamaño y alcance de la evaluación que se quiera realizar.

</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
  data: () => ({
    modal1: false,
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

<style lang="sass">
.pasos-a .pasos-a__item .pasos-a__circle .h2
  color: white !important
.img-infografica
  .img-infografica__content
    .img-infografica__card
      width: 610px
      @media (max-width: 768px)
        width: auto
.img-edit-infografia
  .img-infografica__content
      .img-infografica__item
        .img-infografica__item__dot
          &::before
            background-color: #00000030
          &::after
            background-color: #00000020
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 4rem
</style>
