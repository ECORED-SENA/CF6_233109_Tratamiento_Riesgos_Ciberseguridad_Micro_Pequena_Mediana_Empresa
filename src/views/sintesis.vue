<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Contar con una estrategia de seguridad digital que permita hacer frente a cualquier evento que ponga en riesgo la seguridad de la información y reduzca el riesgo de no continuar con el desarrollo de las actividades propias del negocio, hoy en día, es de gran importancia. Las normas técnicas y guías de implementación permitirán establecer las estrategias, condiciones y procedimientos necesarios para hacer frente a eventos que afecten el normal desarrollo de las actividades de la organización.
    p Es así como se estudió que entre las normas que más se ajusta a las necesidades actuales están la GTC-ISO-IEC 27035:2012, la cual, además de ser una de las más usadas en las grandes organizaciones, ha servido como referente para otros marcos, validando así su aplicabilidad a cualquier industria.
    p.mb-5 El siguiente esquema permite visualizar de manera genérica lo aquí expuesto:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
