<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Lenguaje de programación para desarrollo de #[em apps]
    .row.mb-5.justify-content-center(data-aos="fade-up")
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/cf2/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para elegir el mejor lenguaje de programación, es importante tener claro qué tipo de aplicación se desea desarrollar y, de esa manera, seleccionar la mejor herramienta, que supla las necesidades y brinde ventajas, según los requerimientos.
              br
              br
              |Cada lenguaje cuenta con unas características y funciones especiales que brindan ventajas según el tipo del proyecto por desarrollar.
    #t_9_1.titulo-segundo.color-acento-contenido
      h2 9.1 Lenguajes utilizados para desarrollo Android
    .row.mb-5.d-felx.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4: img(src="@/assets/curso/cf2/img4.svg").mb-5.mb-md-0
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-0 Android es el sistema operativo más utilizado e implementado en dispositivos móviles; su popularidad está fundamentada en su versatilidad y su rápida adaptación. Cuenta con un entorno de desarrollo integrado llamado Android Studio para el desarrollo de aplicaciones Android. Su primera versión estable fue publicada en diciembre de 2014. Kotlin es su principal lenguaje de desarrollo, pero también se puede utilizar Java y C ++.
    SlyderE(indicadores="derecha").mb-5
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Java
          p Java es el lenguaje de programación más utilizado, cuenta con gran soporte por la extensa comunidad de desarrolladores que utilizan este lenguaje como su principal herramienta. En este momento, se puede usar Java con los programas como Netbeans, Eclipse y uno de los más utilizados en el desarrollo de aplicaciones móviles, Android Studio.
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img5.svg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Lenguaje multiplataforma
          p Java es un lenguaje multiplataforma utilizado en el desarrollo de páginas web y aplicaciones móviles. Sus principales características son:
          ul.lista-ul--color
            li
              i.fas.fa-check
              span Gran variedad de herramientas para crear aplicaciones para Android.
            li
              i.fas.fa-check
              span Los desarrollos con Java son menos complejos si se utiliza un IDE como Android Studio.
            li
              i.fas.fa-check
              span Cuenta con gran cantidad de paquetes y librerías en GitHub realizados con Java, listos para implementar.
            li
              i.fas.fa-check
              span Lenguaje robusto basado en la programación orientada a objetos.

          p Gauchat (2017)

        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img6.svg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Kotlin
          p Kotlin es un lenguaje de programación de código abierto, que se basa en el paradigma de la programación funcional y orientada a objetos. Su sintaxis y conceptos están estructurados y basados en lenguajes como C#, Java y Scala; por eso la gran similitud que se presenta con ellos.  Es el resultado de la evolución y mejora de varios lenguajes que se han depurado y mejorado con el tiempo, tomando lo mejor de cada uno de ellos. Cuenta con varias versiones muy utilizadas en el ámbito de los programadores Android, por ejemplo JVM (Kotlin/JVM), JavaScript (Kotlin/JS) y el código nativo (Kotlin/Native).
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img7.svg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Administración y actualización de Kotlin
          p Este lenguaje fue creado por Jet Brains y Google, es administrado por Kotlin Foundation, que son los encargados de mantener, administrar y actualizar el lenguaje. Kotlin es el lenguaje oficial para el desarrollo de Android; por esta razón, la documentación y las herramientas de Android están diseñadas para ser compatibles con Kotlin.
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img8.svg', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Sobre estos lenguajes de programación
          ul.lista-ul--color
            li
              i.fas.fa-check
              span Es posible trabajar con JVM (Java Virtual Machine), Android y el navegador.
            li
              i.fas.fa-check
              span La sintaxis que utiliza Kotlin es simple, permite realizar un código más limpio y realiza menos consumo de recursos de código. Se pueden utilizar Kotlin y Java juntos, en el mismo proyecto.
            li
              i.fas.fa-check
              span La sintaxis de Kotlin es mucho más limpia y puedes resolver un problema escribiendo menos código.
            li
              i.fas.fa-check
              span Kotlin fue creado buscando suplir los problemas y falencias encontradas en Java.
            li
              i.fas.fa-check
              span Puede utilizarse en cualquier IDE de Java, de preferencia Android Studio; tiene mejor compatibilidad con este. Al igual que Java, soporta Programación Orientada a Objetos.
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img9.svg', alt='')

    p.mb-4 Para afianzar su comprensión sobre lenguajes de programación Kotlin y conocer mejor sus particularidades, le invitamos a visitar el enlace que se muestra a continuación:
    .row.mb-5
      .col-lg-8
        a.anexo.mb-4.mb-lg-0(href="https://developer.android.com/kotlin/overview?hl=es" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web.] Descripción general de Kotlin  |  Desarrolladores de Android.

    #t_9_2.titulo-segundo.color-acento-contenido
      h2 9.2 Lenguajes iOS

    .row.mb-5.d-flex.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4: img(src="@/assets/curso/cf2/img10.svg").mb-5.mb-md-0
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-0 iOS es otro de los sistemas operativos con mucha demanda y reconocimiento en el mercado tecnológico. Su entorno es bastante aceptado entre millones de usuarios y para él se crean y desarrollan múltiples #[em apps].
    TabsB.color-acento-contenido.mb-5.bg-transparent
      .py-4.py-md-5(titulo="Swift" :icono="require('@/assets/curso/cf2/img11.svg')")
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/cf2/img13.jpg', alt='')
          .col-md-7.mb-4.mb-md-0
            h4 Swift
            p Swift es el lenguaje utilizado en el desarrollo de software para iOS. Apple ha añadido algunas características geniales a este lenguaje, tales como la sintaxis simplificada y la capacidad de localizar con precisión los errores del programador. Algunas de sus características principales son:
            ul.lista-ul--color
              li
                i.fas.fa-check
                span Permite trabajar con valores de retorno múltiples.
              li
                i.fas.fa-check
                span Manejo de errores nativos usando #[code.etiqueta try ... catch] y #[code.etiqueta throw].
              li
                i.fas.fa-check
                span Es posible realizar métodos, extensiones y protocolos facilitando la programación.
              li
                i.fas.fa-check
                span En sus sintaxis no es necesario escribir los puntos y comas para finalizar la línea.
              li
                i.fas.fa-check
                span Iteración rápida y concisa con colecciones.
              li
                i.fas.fa-check
                span Utiliza el paradigma de programación funcional, que se fundamenta en el uso de verdaderas funciones matemáticas.

      .py-4.py-md-5(titulo="Objective-C" :icono="require('@/assets/curso/cf2/img12.svg')")
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/cf2/img14.jpg', alt='')
          .col-md-7.mb-4.mb-md-0
            h4.fst-italic Objective-C
            p Este lenguaje fue desarrollado para trabajar y realizar proyectos iOS. Es compatible con los Sistemas Operativos OS X e iOS exclusivamente, y brinda la posibilidad de utilizar el paradigma de la programación orientada a objetos. Sus características principales son:
            ul.lista-ul--color
              li
                i.fas.fa-check
                span Se fundamenta en el lenguaje de programación C; hereda su sintaxis primitiva e instrucciones de control del flujo, definición de clases y métodos.
              li
                i.fas.fa-check
                span Utiliza la tecnología #[em Grand Central Dispatch (GCD)], que permite una mejor estructuración de tareas simultáneas o asíncronas.
              li
                i.fas.fa-check
                span Tiene soporte para gráficos de objetos y literales a nivel de código.

    #t_9_3.titulo-segundo.color-acento-contenido
      h2 9.3 Lenguajes multiplataforma #[em (Cross-Platform)]
    .row.mb-5.d-flex.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4: img(src="@/assets/curso/cf2/img15.svg").mb-5.mb-md-0
      .col-lg-11.col-md-10.col-sm-9.col-xs-8: p.mb-0 Los lenguajes multiplataforma se denominan de esta manera por la sencilla razón que son compatibles con varias y distintas plataformas. Esta particularidad aplica no solo para los lenguajes de programación sino, también, para los mismos sistemas operativos, aplicaciones, programas o #[em software].
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="JavaScript")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p JavaScript cuenta con una larga trayectoria que se remonta a los inicios de la #[em World Wide Web]. Este es un lenguaje muy utilizado para el desarrollo #[em front end], permite trabajar fácilmente el diseño y desarrollo de páginas web y aplicaciones móviles; se puede lograr y alcanzar una buena e interactiva experiencia de usuario.
          p Se considera como uno de los mejores lenguajes para realizar el desarrollo #[em front end] de aplicaciones móviles; también es posible trabajar #[em back end] con la ayuda de #[em frameworks], como Node JS.
      .row(titulo="¿A quién pertenece?")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p JavaScript es propiedad de la fundación Mozilla; a su alrededor se ha generado gran cantidad de #[em frameworks] que lo hacen más asequible y fácil. El desarrollo de estas son algunas de las mejores y más utilizadas herramientas.
      .row(titulo="Características de JavaScript")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p Las características más relevantes que podemos mencionar son:
          ul.lista-ul--color
            li
              i.fas.fa-check
              span Tiene la comunidad más grande de desarrolladores que brinda soporte a JavaScript y sus #[em frameworks].
            li
              i.fas.fa-check
              span Las herramientas de  JavaScript para desarrollo móvil siguen creciendo y evolucionando, adaptándose a las necesidades del mercado.
            li
              i.fas.fa-check
              span Cuenta con gran cantidad de herramientas enfocadas en el desarrollo de aplicaciones móviles.

            li
              i.fas.fa-check
              span JavaScript es un lenguaje multiplataforma que corre y se ejecuta en la mayoría de dispositivos móviles.
            li
              i.fas.fa-check
              span Soporta programación orientada a objetos.

          p.mb-4 (Seydnejad, 2016)

      .row(titulo="<em>Frameworks</em> de JavaScript ")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p Estas herramientas están desarrolladas específicamente para el desarrollo y trabajo de aplicaciones móviles, como Ionic2 y React Native. Tiene entornos de desarrollo que facilitan el desarrollar #[em apps] multiplataforma. Con estos #[em frameworks] y sus librerías, se pueden generar todo tipo de aplicaciones móviles. Su enfoque principal es el desarrollo híbrido, esto quiere decir que, realizando una sola versión de la aplicación, se podrá implementar y funcionará correctamente en iOS o Android.

      .row(titulo="<em>Frameworks</em> más usados")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p Estos son algunos de los <i>frameworks</i> más utilizados en el desarrollo de aplicaciones móviles híbridas:
          .d-flex
            ul.lista-ul--color.me-5
              li
                i.fas.fa-check
                span React
              li
                i.fas.fa-check
                span Native JS
              li
                i.fas.fa-check
                span Ionic JS
              li
                i.fas.fa-check
                span NativeScript

            ul.lista-ul--color
              li
                i.fas.fa-check
                span React JS
              li
                i.fas.fa-check
                span Angular JS
              li
                i.fas.fa-check
                span Ember JS
              li
                i.fas.fa-check
                span Vue JS

      .row(titulo="TypeScript")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p TypeScript es un subconjunto de JavaScript que ofrece mayor y mejor soporte para el desarrollo de apps a gran escala. Este lenguaje de programación está sustentado, soportado y mantenido por Microsoft. TypeScript fue creado con el fin de permitir la escritura de código para aplicaciones móviles multiplataforma, utilizando #[em frameworks] como NativeScript.

      .row(titulo="Aportes y características")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p TypeScript ayuda a compilar el código depurado y dejar un código simple y limpio para que se ejecute en cualquier dispositivo que soporte JavaScript. Sus características principales son:
          ul.lista-ul--color
            li
              i.fas.fa-check
              span Cuenta con soporte para las últimas versiones de JavaScript.
            li
              i.fas.fa-check
              span Se integra con el soporte de comandos NPM, que son los gestores de paquetes para JavaScript, sobre la consola de comandos.
            li
              i.fas.fa-check
              span Cuenta con soporte en los principales editores de código, como Sublime Text, Visual Studio Code y WebStorm.
    #t_9_4.titulo-segundo.color-acento-contenido
      h2 9.4 Otros lenguajes de programación
    .row.mb-5
      .col-lg-6: p Existen otros lenguajes para crear aplicaciones móviles, como C#, C y C++. Estos lenguajes pertenecen a Microsoft tienen un muy alto potencial. También encontramos a Python y Ruby, que permiten el desarrollo de aplicaciones multiplataforma.
      .col-lg-6: img(src="@/assets/curso/cf2/img17.jpg")
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.hover
              img(src='@/assets/curso/cf2/img18.svg', alt='' style='width:180px ').m-auto
        h3.text-center.text-color C#
        p.text-center.text-color Es el idioma de Windows Mobile, es muy similar a C++ y Java. Microsoft ha adoptado algunas de las características de Java para simplificar su arquitectura, manteniendo el C++ como diseño. También tiene una gran y activa comunidad de desarrolladores.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.hover
              img(src='@/assets/curso/cf2/img19.png', alt='' style='width:180px ').m-auto
        h3.text-center Python
        p.text-center Es un lenguaje que va tomando cada vez más popularidad; es fácil de aprender y fácil de comprender. Los creadores lograron trabajar en mantener una sintaxis simple y clara. Esto ayuda a los desarrolladores novatos a mantener altos niveles de productividad. Para desarrollar aplicaciones móviles multiplataforma, se utiliza Kivy.

    p Todos estos lenguajes de programación de aplicación nativa son compilados, en lugar de interpretados.

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Java',
        texto:
          'Java es el lenguaje de programación más utilizado, cuenta con gran soporte por la extensa comunidad de desarrolladores que utilizan este lenguaje como su principal herramienta. En este momento, se puede usar Java con los programas como Netbeans, Eclipse y uno de los más utilizados en el desarrollo de aplicaciones móviles, Android Studio.',
        imagen: require('@/assets/curso/cf2/img5.svg'),
      },
      {
        titulo: 'Lenguaje multiplataforma',
        texto:
          'Java es un lenguaje multiplataforma utilizado en el desarrollo de páginas web y aplicaciones móviles. Sus principales características son:',
        imagen: require('@/assets/curso/cf2/img6.svg'),
      },
      {
        titulo: 'Kotlin',
        texto:
          'Kotlin es un lenguaje de programación de código abierto, que se basa en el paradigma de la programación funcional y orientada a objetos. Su sintaxis y conceptos están estructurados y basados en lenguajes como C#, Java y Scala; por eso la gran similitud que se presenta con ellos.  Es el resultado de la evolución y mejora de varios lenguajes que se han depurado y mejorado con el tiempo, tomando lo mejor de cada uno de ellos. Cuenta con varias versiones muy utilizadas en el ámbito de los programadores Android, por ejemplo JVM (Kotlin/JVM), JavaScript (Kotlin/JS) y el código nativo (Kotlin/Native).',
        imagen: require('@/assets/curso/cf2/img7.svg'),
      },
      {
        titulo: 'Administración y actualización de Kotlin',
        texto:
          'Este lenguaje fue creado por Jet Brains y Google, es administrado por Kotlin Foundation, que son los encargados de mantener, administrar y actualizar el lenguaje. Kotlin es el lenguaje oficial para el desarrollo de Android; por esta razón, la documentación y las herramientas de Android están diseñadas para ser compatibles con Kotlin.',
        imagen: require('@/assets/curso/cf2/img8.svg'),
      },
      {
        titulo: 'Sobre estos lenguajes de programación',
        texto: '.',
        imagen: require('@/assets/curso/cf2/img9.svg'),
      },
    ],
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

.text-color ,span
  color: $color-sistema-texto !important
</style>
