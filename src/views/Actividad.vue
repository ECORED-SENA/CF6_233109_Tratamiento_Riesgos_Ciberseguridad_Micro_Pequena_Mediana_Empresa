<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Arrastrar_Soltar.svg", alt="Actividad didáctica Gestión de incidentes de seguridad de la información, de tipo arrastrar y soltar coincidencias")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Gestión de incidentes de seguridad de la información.
        p.mb-4 Comprender la implementación de un plan de gestión de incidentes de seguridad en una organización a través del reconocimiento de sus fases.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar coincidencias
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
