<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido(data-aos="fade-up-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-up-right") Las organizaciones se enfrentan a diario a gran variedad de amenazas que ponen en riesgo sus activos de información más preciados y que son necesarios para dar continuidad al negocio, que en algunas ocasiones se vuelve una actividad de tipo “bombero” en la que se busca atender y dar respuesta sin lineamientos o unas instrucciones claras, que permitan establecer planes para atender otros incidentes que surjan en el futuro, aprovechando las vulnerabilidades presentes o alguna otra que sea nueva. El siguiente video presenta la importancia de la gestión de incidentes y la profundización que se tendrá de esta temática a lo largo del componente:
    figure(data-aos="fade-up-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iV2w40PAP3c" title="Tratamiento de los incidentes de seguridad de la información" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Tratamiento de los incidentes de seguridad de la información.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
