<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Lenguaje de programación para desarrollo de 
        span.fst-italic apps
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
      h2 9.1 Lenguajes utilizados para desarrollo 
        span.fst-italic Android
    .row.mb-5.d-felx.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4: img(src="@/assets/curso/cf2/img4.svg").mb-5.mb-md-0
      .col-lg-11.col-md-10.col-sm-9.col-xs-8
        p.mb-0 <i>Android</i> es el sistema operativo más utilizado e implementado en dispositivos móviles; su popularidad está fundamentada en su versatilidad y su rápida adaptación. Cuenta con un entorno de desarrollo integrado llamado <i>Android Studio</i> para el desarrollo de aplicaciones <i>Android</i>. Su primera versión estable fue publicada en diciembre de 2014. <i>Kotlin</i> es su principal lenguaje de desarrollo, pero también se puede utilizar <i>Java</i> y C ++.
    SlyderE(indicadores="derecha").mb-5
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Java
          p <i>Java</i> es el lenguaje de programación más utilizado, cuenta con gran soporte por la extensa comunidad de desarrolladores que utilizan este lenguaje como su principal herramienta. En este momento, se puede usar <i>Java</i> con los programas como <i>Netbeans</i>, Eclipse y uno de los más utilizados en el desarrollo de aplicaciones móviles, <i>Android Studio</i>.
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img5.svg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Lenguaje multiplataforma
          p Java es un lenguaje multiplataforma utilizado en el desarrollo de páginas <i>web</i> y aplicaciones móviles. Sus principales características son:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p Gran variedad de herramientas para crear aplicaciones para 
                span.fst-italic Android.
            li 
              i.fas.fa-check
              p Los desarrollos con 
                span.fst-italic Java 
                |son menos complejos si se utiliza un 
                span.fst-italic IDE 
                |como 
                span.fst-italic Android Studio. 
            li 
              i.fas.fa-check
              p Cuenta con gran cantidad de paquetes y librerías en 
                span.fst-italic GitHub 
                | realizados con Java, listos para implementar.
            li 
              i.fas.fa-check
              |Lenguaje robusto basado en la programación orientada a objetos.
          p.fst-italic Gauchat (2017)
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img6.svg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Kotlin
          p <i>Kotlin</i> es un lenguaje de programación de código abierto, que se basa en el paradigma de la programación funcional y orientada a objetos. Su sintaxis y conceptos están estructurados y basados en lenguajes como C#, <i>Java</i> y <i>Scala</i>; por eso la gran similitud que se presenta con ellos.  Es el resultado de la evolución y mejora de varios lenguajes que se han depurado y mejorado con el tiempo, tomando lo mejor de cada uno de ellos. Cuenta con varias versiones muy utilizadas en el ámbito de los programadores <i>Android</i>, por ejemplo <i>JVM</i> <i>(Kotlin/JVM)</i>, <i>JavaScript</i> <i>(Kotlin/JS)</i> y el código nativo <i>(Kotlin/Native)</i>.
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img7.svg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Administración y actualización de <i>Kotlin</i>
          p Este lenguaje fue creado por <i>Jet Brains</i> y <i>Google</i>, es administrado por <i>Kotlin Foundation</i>, que son los encargados de mantener, administrar y actualizar el lenguaje. <i>Kotlin</i> es el lenguaje oficial para el desarrollo de <i>Android</i>; por esta razón, la documentación y las herramientas de <i>Android</i> están diseñadas para ser compatibles con <i>Kotlin</i>.
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img8.svg', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Sobre estos lenguajes de programación
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p Es posible trabajar con 
                span.fst-italic JVM (Java Virtual Machine), Android 
                |y el navegador.
            li 
              i.fas.fa-check
              p La sintaxis que utiliza 
                span.fst-italic Kotlin 
                |es simple, permite realizar un código más limpio y realiza menos consumo de recursos de código. Se pueden utilizar 
                span.fst-italic Kotlin 
                | y 
                span.fst-italic Java 
                |juntos, en el mismo proyecto.
            li 
              i.fas.fa-check
              p La sintaxis de 
                span.fst-italic Kotlin 
                | es mucho más limpia y puedes resolver un problema escribiendo menos código.
            li 
              i.fas.fa-check
              p
                span.fst-italic Kotlin 
                |fue creado buscando suplir los problemas y falencias encontradas en 
                span.fst-italic Java.
            li 
              i.fas.fa-check
              p Puede utilizarse en cualquier 
                span.fst-italic IDE 
                | de 
                span.fst-italic Java, 
                | de preferencia 
                span.fst-italic Android Studio
                |; tiene mejor compatibilidad con este. Al igual que 
                span.fst-italic Java, 
                |soporta Programación Orientada a Objetos.
        .col-md-8
          figure
            img(src='@/assets/curso/cf2/img9.svg', alt='Texto que describa la imagen')
    p.mb-5.col-6 Para afianzar su comprensión sobre lenguajes de programación Kotlin y conocer mejor sus particularidades, le invitamos a visitar el enlace que se muestra a continuación:
    .col-lg-5.mb-5 
      a.anexo.mb-4.mb-lg-0(href="https://developer.android.com/kotlin/overview?hl=es" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Enlace web. 
            |Descripción general de Kotlin  |  Desarrolladores de Android  https://developer.android.com/kotlin/overview?hl=es
    #t_9_2.titulo-segundo.color-acento-contenido
      h2 9.2 Lenguajes 
        span.fst-italic iOS
    .row.mb-5.d-felx.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4: img(src="@/assets/curso/cf2/img10.svg").mb-5.mb-md-0
      .col-lg-11.col-md-10.col-sm-9.col-xs-8: p.mb-0 
        span.fst-italic iOS 
        | es otro de los sistemas operativos con mucha demanda y reconocimiento en el mercado tecnológico. Su entorno es bastante aceptado entre millones de usuarios y para él se crean y desarrollan múltiples 
        span.fst-italic apps.
    TabsB.color-acento-contenido.mb-5.bg-transparent
      .py-4.py-md-5(titulo="Swift" :icono="require('@/assets/curso/cf2/img11.svg')")
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/cf2/img13.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4.fst-italic Swift
            p 
              span.fst-italic Swift 
              | es el lenguaje utilizado en el desarrollo de software para 
              span.fst-italic iOS. Apple 
              |ha añadido algunas características geniales a este lenguaje, tales como la sintaxis simplificada y la capacidad de localizar con precisión los errores del programador. Algunas de sus características principales son:
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Permite trabajar con valores de retorno múltiples.
              li 
                i.fas.fa-check
                p Manejo de errores nativos usando 
                  span.fst-italic try / catch 
                  |y 
                  span.fst-italic throw.
              li 
                i.fas.fa-check
                | Es posible realizar métodos, extensiones y protocolos facilitando la programación.
              li 
                i.fas.fa-check
                | En sus sintaxis no es necesario escribir los puntos y comas para finalizar la línea.
              li 
                i.fas.fa-check
                | Iteración rápida y concisa con colecciones.
              li 
                i.fas.fa-check
                | Utiliza el paradigma de programación funcional, que se fundamenta en el uso de verdaderas funciones matemáticas.
      .py-4.py-md-5(titulo="Objective-C" :icono="require('@/assets/curso/cf2/img12.svg')")
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/cf2/img14.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4.fst-italic Objective-C
            p Este lenguaje fue desarrollado para trabajar y realizar proyectos iOS. Es compatible con los Sistemas Operativos  
              span.fst-italic OS X 
              |e 
              span.fst-italic iOS 
              |exclusivamente, y brinda la posibilidad de utilizar el paradigma de la programación orientada a objetos. Sus características principales son:
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Se fundamenta en el lenguaje de programación C; hereda su sintaxis primitiva e instrucciones de control del flujo, definición de clases y métodos.
              li 
                i.fas.fa-check
                p Utiliza la tecnología 
                  span.fst-italic Grand Central Dispatch (GCD)
                  |, que permite una mejor estructuración de tareas simultáneas o asíncronas.
              li 
                i.fas.fa-check
                | Tiene soporte para gráficos de objetos y literales a nivel de código.
    #t_9_3.titulo-segundo.color-acento-contenido
      h2 9.3 Lenguajes multiplataforma 
        span.fst-italic (Cross-Platform)
    .row.mb-5.d-felx.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-xs-4: img(src="@/assets/curso/cf2/img15.svg").mb-5.mb-md-0
      .col-lg-11.col-md-10.col-sm-9.col-xs-8: p.mb-0 Los lenguajes multiplataforma se denominan de esta manera por la sencilla razón que son compatibles con varias y distintas plataformas. Esta particularidad aplica no solo para los lenguajes de programación sino, también, para los mismos sistemas operativos, aplicaciones, programas o 
        span.fst-italic softwares.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="JavaScript")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p 
            span.fst-italic JavaScript 
            | cuenta con una larga trayectoria que se remonta a los inicios de la 
            span.fst-italic World Wide Web. 
            | Este es un lenguaje muy utilizado para el desarrollo 
            span.fst-italic front end
            |, permite trabajar fácilmente el diseño y desarrollo de páginas 
            span.fst-italic web 
            | y aplicaciones móviles; se puede lograr y alcanzar una buena e interactiva experiencia de usuario.
            br
            br
            |Se considera como uno de los mejores lenguajes para realizar el desarrollo 
            span.fst-italic Front end 
            | de aplicaciones móviles; también es posible trabajar 
            span.fst-italic Back end 
            | con la ayuda de 
            span.fst-italic frameworks
            |, como 
            span.fst-italic Node JS.
      .row(titulo="¿A quién pertenece?")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p 
            span.fst-italic JavaScript 
            | es propiedad de la fundación 
            span.fst-italic Mozilla
            |; a su alrededor se ha generado gran cantidad de 
            span.fst-italic Frameworks 
            | que lo hacen más asequible y fácil. El desarrollo de estas son algunas de las mejores y más utilizadas herramientas.
      .row(titulo="Características de JavaScript")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Las características más relevantes que podemos mencionar son:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p Tiene la comunidad más grande de desarrolladores que brinda soporte a  
                span.fst-italic JavaScript 
                | y sus 
                span.fst-italic frameworks.
            li 
              i.fas.fa-check
              p Las herramientas de 
                span.fst-italic JavaScript 
                |para desarrollo móvil siguen creciendo y evolucionando, adaptándose a las necesidades del mercado.
            li 
              i.fas.fa-check
              | Cuenta con gran cantidad de herramientas enfocadas en el desarrollo de aplicaciones móviles.

            li 
              i.fas.fa-check
              p 
                span.fst-italic JavaScript 
                | es un lenguaje multiplataforma que corre y se ejecuta en la mayoría de dispositivos móviles.
            li 
              i.fas.fa-check
              | Soporta programación orientada a objetos.
          p.fst-italic (Seydnejad, 2016)
      .row(titulo="Frameworks de JavaScript ")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Estas herramientas están desarrolladas específicamente para el desarrollo y trabajo de aplicaciones móviles, como  
            span.fst-italic Ionic2 
            |y 
            span.fst-italic React Native. 
            | Tiene entornos de desarrollo que facilitan el desarrollar 
            span.fst-italic apps 
            | multiplataforma. Con estos 
            span.fst-italic frameworks
            |  y sus librerías, se pueden generar todo tipo de aplicaciones móviles. Su enfoque principal es el desarrollo híbrido, esto quiere decir que, realizando una sola versión de la aplicación, se podrá implementar y funcionará correctamente en 
            span.fst-italic iOS 
            |o 
            span.fst-italic Android.
      .row(titulo="Frameworks más usados")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Estos son algunos de los <i>frameworks</i> más utilizados en el desarrollo de aplicaciones móviles híbridas: 
          .d-flex
            ul.lista-ul--color.me-5
              li 
                i.fas.fa-check
                span.fst-italic React 
              li 
                i.fas.fa-check
                span.fst-italic Native JS
              li 
                i.fas.fa-check
                span.fst-italic Ionic JS
              li 
                i.fas.fa-check
                span.fst-italic NativeScript
            ul.lista-ul--color
              li 
                i.fas.fa-check
                span.fst-italic React JS
              li 
                i.fas.fa-check
                span.fst-italic Angular JS
              li 
                i.fas.fa-check
                span.fst-italic Ember JS
              li 
                i.fas.fa-check
                span.fst-italic Vue JS
      .row(titulo="TypeScript")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p 
            span.fst-italic TypeScript 
            | es un subconjunto de 
            span.fst-italic JavaScript 
            | que ofrece mayor y mejor soporte para el desarrollo de apps a gran escala. Este lenguaje de programación está sustentado, soportado y mantenido por 
            span.fst-italic Microsoft. TypeScript 
            |fue creado con el fin de permitir la escritura de código para aplicaciones móviles multiplataforma, utilizando 
            span.fst-italic frameworks 
            | como 
            span.fst-italic NativeScript. 
      .row(titulo="Aportes y características")
        .col-md-4: img(src='@/assets/curso/cf2/img16.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p 
            span.fst-italic TypeScript 
            |ayuda a compilar el código depurado y dejar un código simple y limpio para que se ejecute en cualquier dispositivo que soporte 
            span.fst-italic JavaScript
            |. Sus características principales son:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              p Cuenta con soporte para las últimas versiones de 
                span.fst-italic JavaScript.
            li 
              i.fas.fa-check
              p Se integra con el soporte de comandos 
                span.fst-italic NPM
                |, que son los gestores de paquetes para 
                span.fst-italic JavaScript, sobre la Consola de Comandos.
            li 
              i.fas.fa-check
              p Cuenta con soporte en los principales editores de código, como 
                span.fst-italic Sublime Text
                |, 
                span.fst-italic Visual Studio Code, Atom, WebStorm.
    #t_9_4.titulo-segundo.color-acento-contenido
      h2 9.4 Otros lenguajes de programación
    .row.mb-5
      .col-lg-6: p Existen otros lenguajes para crear aplicaciones móviles, como C#, C y C++. Estos lenguajes pertenecen a 
        span.fst-italic Microsoft 
        | tienen un muy alto potencial. También encontramos a 
        span.fst-italic Python 
        | y 
        span.fst-italic Ruby
        |, que permiten el desarrollo de aplicaciones multiplataforma.
      .col-lg-6: img(src="@/assets/curso/cf2/img17.jpg")
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.hover
              img(src='@/assets/curso/cf2/img18.svg', alt='Texto que describa la imagen' style='width:180px ').m-auto
        h2.text-center.text-color C#
        p.text-center.text-color C# es el idioma de 
          span.fst-italic Windows Mobile
          |. Es muy similar a C++ y 
          span.fst-italic Java. Microsoft 
          | ha adoptado algunas de las características de 
          span.fst-italic Java 
          |para simplificar su arquitectura, manteniendo el C++ como diseño. También tiene una gran y activa comunidad de desarrolladores. 
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.hover
              img(src='@/assets/curso/cf2/img19.png', alt='Texto que describa la imagen' style='width:180px ').m-auto
        h2.text-center Python
        p.text-center 
          span.fst-italic Python 
          |es un lenguaje que va tomando cada vez más popularidad; es fácil de aprender y fácil de comprender. Los creadores lograron trabajar en mantener una sintaxis simple y clara. Esto ayuda a los desarrolladores novatos a mantener altos niveles de productividad. Para desarrollar aplicaciones móviles multiplataforma, se utiliza 
          span.fst-italic Kivy. 
          br
          br
          |Todos estos lenguajes de programación de aplicación nativa son compilados, en lugar de interpretados.

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
