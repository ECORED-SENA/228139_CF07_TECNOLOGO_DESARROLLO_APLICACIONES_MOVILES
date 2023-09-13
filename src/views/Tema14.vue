<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Características de una apropiada interfaz de usuario

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/cf2/img46.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La tecnología actual cuenta, en su gran mayoría, con interfaces de usuario que permiten la comprensión e interacción de su funcionamiento. El diseño de una interfaz busca experiencias que sean intuitivas y funcionales para todos los que realizan una acción en la app o, sencillamente, interactúan con ella. Para ello se deben tener en cuenta algunas características que son claves para tener un resultado óptimo del proyecto.

    //.row.mb-5.justify-content-center.align-content-center
      .col-lg-2
        img.mb-3(src="@/assets/curso/cf2/img46.svg")

      .col-lg-10
        p La tecnología actual cuenta, en su gran mayoría, con interfaces de usuario que permiten la comprensión e interacción de su funcionamiento. El diseño de una interfaz busca experiencias que sean intuitivas y funcionales para todos los que realizan una acción en la app o, sencillamente, interactúan con ella. Para ello se deben tener en cuenta algunas características que son claves para tener un resultado óptimo del proyecto.
    //.row.mb-5.justify-content-between
      .col-lg-6
        img.mb-3(src="@/assets/curso/cf2/img46.svg")
        p La tecnología actual cuenta, en su gran mayoría, con interfaces de usuario que permiten la comprensión e interacción de su funcionamiento. El diseño de una interfaz busca experiencias que sean intuitivas y funcionales para todos los que realizan una acción en la app o, sencillamente, interactúan con ella. Para ello se deben tener en cuenta algunas características que son claves para tener un resultado óptimo del proyecto.
      .col-lg-5
        .titulo-sexto.color-acento-contenido.bg-transparent
          h5.fw-normal
            b Figura 13
            | Interfaz de usuario simple, clara, coherente, familiar, rápida
        figure.mb-3
          img.mb-3(src="@/assets/curso/cf2/img47.jpg" style="width: 331px")
        figcaption Nota. Tomada de interfaz juego Juice Jam (2021).
    TabsA.color-acento-contenido.mb-5.bg-5.bg-transparent
      .tarjeta.color-primario-claro.p-4(titulo="Simplicidad")
        .row.flex.align-items-center
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/cf2/img48.svg', alt='')
          .col-xl-9
            h4 Simplicidad
            p Esta característica permite que el usuario pueda usar de forma fácil, fluida e intuitiva la aplicación. Dicha simplicidad se basa en el diseño minimalista, evitando saturar el entorno de elementos que no se requieran o que sean poco funcionales. Siempre enfocada en que cada elemento cumpla su objetivo y mejore la experiencia del usuario.
      .tarjeta.color-primario-claro.p-4(titulo="Claridad")
        .row.flex.align-items-center
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/cf2/img49.svg', alt='')
          .col-xl-9
            h4 Claridad
            p La claridad se basa en ofrecer los mensajes precisos, en el momento oportuno, mejorando y utilizando un lenguaje justo y conciso, que no se preste para ambigüedades, que permita al usuario una navegabilidad rápida, sin grandes obstáculos, evitando retrasos y, por consiguiente, una insatisfactoria experiencia para el usuario.
      .tarjeta.color-primario-claro.p-4(titulo="Coherencia")
        .row.flex.align-items-center
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/cf2/img50.svg', alt='')
          .col-xl-9
            h4 Coherencia
            p Para mantener la coherencia, se debe trabajar específicamente con patrones que definan los tipos de elementos a utilizar, como las imágenes y sus características, los tipos de las fuentes, el lenguaje y su enfoque, el tono y la fluidez de la comunicación, el uso de los colores institucionales o representativos de la aplicación, la ubicación del menú y el logo y los íconos.
      .tarjeta.color-primario-claro.p-4(titulo="Familiaridad")
        .row.flex.align-items-center
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/cf2/img51.svg', alt='')
          .col-xl-9
            h4 Familiaridad
            p Se deben utilizar elementos comunes, por ejemplo, elementos gráficos universales, los íconos que ya hacen parte del lenguaje simbólico que, en su gran mayoría, los usuarios ya reconocen porque son utilizados en otras aplicaciones y hacen parte de la cotidianidad tecnológica. También es importante trabajar con la ubicación de estos elementos, ya que se puede trabajar bajo una estructura común conocida por los usuarios y utilizada en otras aplicaciones móviles.
      .tarjeta.color-primario-claro.p-4(titulo="Rapidez")
        .row.flex.align-items-center
          .col-xl-3.mb-4
            figure
              img(src='@/assets/curso/cf2/img52.svg', alt='')
          .col-xl-9
            h4 Rapidez
            p La fluidez en el desplazamiento por la aplicación y en la ejecución de acciones se logra cuando se integran las cuatro características: simplicidad, claridad, coherencia y familiaridad. Los usuarios suelen estar apurados, no cuentan con mucho tiempo para la ejecución de las actividades y ese es un valor agregado que les satisface en gran medida; ello se puede identificar en la aceptación o desaprobación de las aplicaciones.

</template>

<script>
export default {
  name: 'Tema14',
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
