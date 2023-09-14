<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Componentes gráficos
    .row.mb-5
      .col-lg-6
        p Antes de iniciar la elaboración del boceto y el #[em mockup], se debe tener la idea clara de lo que se necesita desarrollar. El informe de diseño proporciona esta información, de manera clara y concisa.
        .cajon.color-primario.color-primario-claro.p-4.mb-4
          p Entonces, es importante conocer las opciones gráficas con las cuales se cuenta para el diseño de la interfaz. Asimismo, considerar el uso, anatomía, comportamiento, tematización y especificaciones de cada uno de los principales componentes de la interfaz gráfica de una aplicación móvil.
      .col-lg-6: img(src="@/assets/curso/cf2/img37.jpg")
    .titulo-sexto.color-acento-contenido.bg-transparent
      h5 Tabla 2.
      span Principales componentes de una interfaz gráfica
    .row.mb-5.justify-content-center
      .col-lg-6
        .tabla-b.color-acento-contenido.mb-5.bg-transparent.table-responsive
          .tabla-b__header
            h5.mb-0
          table
            tr
              th Barras de la aplicación:
              td parte inferior
            tr
              th Barras de la aplicación:
              td parte superior
            tr
              th.fst-italic Banners
              td
            tr
              th Barras navegación inferior
              td
            tr
              th Botones:
              td.fst-italic buttons
            tr
              th Botón de acción flotante:
              td.fst-italic Buttons: floating action button
            tr
              th Tarjetas:
              td.fst-italic Cards
            tr
              th Casillas de verificación:
              td.fst-italic Checkboxes
            tr
              th.fst-italic Chips
              td
            tr
              th Tablas de datos:
              td.fst-italic Data tables
            tr
              th Diálogos:
              td.fst-italic Dialogs
            tr
              th Divisores:
              td.fst-italic Dividers
            tr
              th Listas de imágenes:
              td.fst-italic Image lists
      .col-lg-6
        .tabla-b.color-acento-contenido.mb-5.bg-transparent.table-responsive
          .tabla-b__header
            h5.mb-0
          table
            tr
              th Listas:
              td.fst-italic Lists
            tr
              th Menús
              td
            tr
              th Cajón de navegación:
              td.fst-italic Navigation drawer
            tr
              th Carril de navegación:
              td.fst-italic Navigation rail
            tr
              th Indicadores de progreso:
              td.fst-italic Progress indicators
            tr
              th Botones de opción:
              td.fst-italic Radio buttons
            tr
              th Hojas- abajo:
              td.fst-italic Sheets- bottom
            tr
              th Hojas- lado:
              td.fst-italic Sheets- side
            tr
              th Deslizadores:
              td.fst-italic Sliders
            tr
              th.fst-italic Snackbars
              td
            tr
              th Interruptores:
              td.fst-italic Switches
            tr
              th Pestañas:
              td.fst-italic Tabs
            tr
              th Campos de texto:
              td.fst-italic Text fields
            tr
              th Recolectores de tiempo:
              td.fst-italic Time pickers
      figcaption Nota. Tomada de Introducción al desarrollo de aplicaciones móviles (2020).

    //p.mb-5 Son muchos los elementos que refieren a
      b “Componentes gráficos”
      |, por ello le invitamos a visitar los enlaces que se proponen a continuación para afianzar los contenidos de este punto.
    //.row
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(href="https://material.io/components/banners" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              b Enlace web.
              | Banners - Material Desing https://material.io/components/banners
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(href="https://material.io/components?platform=android" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              b Enlace web.
              | Banners - Material Desing https://material.io/components?platform=android

</template>

<script>
export default {
  name: 'Tema11',
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

<style lang="sass" scoped>
.table-responsive
  overflow-y: hidden
.bg1
  background-color: #D2F3F8 !important;
</style>
