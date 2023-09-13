<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Interfaz
    p Una interfaz permite la intercomunicación entre un sistema informático implementado en algún dispositivo electrónico y su usuario. Este término proviene del inglés <i>interface</i>, que traduce #[b “superficie de contacto”].
    p.mb-5 La finalidad es entregar una herramienta que permita, de manera sencilla, visualizar, introducir y editar información generando un mecanismo de interacción de uso.

    .row.mb-5(data-aos="fade-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/cf1/img2.svg' alt='' style='width: 111px').m-auto
          .tarjeta.color-1-claro.w-100
            .p-4.text-center
              h3 Interfaces de usuario
              p Comunicación entre el usuario y un sistema informático implementado en un aparato electrónico: #[strong Por ejemplo la pantalla en los #[em Smartphone]].
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/cf1/img3.svg' alt='' style='width: 82px')
          .tarjeta.color-1-claro.w-100
            .p-4.text-center
              h3 Interfaces físicas
              p Permite la conexión física de dos o más dispositivos. #[strong Por ejemplo, los puertos USB de las computadoras].
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/cf1/img4.svg' alt='' style='width: 111px')
          .tarjeta.color-1-claro.w-100
            .p-4.text-center
              h3 Interfaces lógicas
              p Permite realizar comunicaciones entre dos o más programas por medio de <i>software</i> que maneja protocolos de interacciones lógicas. #[strong Por ejemplo, una <i>API</i>].
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Interfaz de usuario
    p La interfaz de usuario o el <i>FrontEnd</i> de las aplicaciones móviles, programas y páginas web, sirve de mediador con el usuario de los computadores, <i>Smartphones</i> o todo aquel dispositivo electrónico que cuente con un <i>software</i>. Su función es ofrecer un entorno visual compuesto por gráficos, imágenes, iconos, y animaciones que contribuyen en la integración, visualización y comprensión de la información que brinda la aplicación y generando las herramientas necesarias   para realizar las acciones de interacción.
    p.mb-5 La interfaz de usuario (UI) también se define como el conjunto de elementos gráficos que permite la interacción funcionando como controles y canales, por medio de los cuales los usuarios se comunican con el dispositivo electrónico. En el diseño de aplicaciones móviles es importante establecer una interfaz de usuario que permita la transferencia de información entre el usuario y la aplicación de manera fluida y sencilla, logrando una buena navegabilidad e interacción.
    h4 Categorías
    p.mb-5 Es posible encontrar varias categorías de interfaces de usuarios; estas se clasifican según la interacción que permite con el usuario y lo que se busca es facilitar la interacción entre la máquina y el receptor. Las personas suelen estar familiarizadas con las interfaces gráficas, pero existen otras formas de interacción que serán mostradas a continuación.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz gráfica")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/cf1/img5.jpg', alt='Texto que describa la imagen' style='width: 122px').m-auto
          .col-xl-8
            h4 Interfaz gráfica
            p Permite visualizar la información en una pantalla. La mayoría de programas poseen una interfaz visual, que genera la interacción entre el usuario y el <i>software</i>, permitiendo así la visualización, introducción y manipulación de datos.
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz de voz (VUI)")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/cf1/img6.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz de voz (VUI)
            p Son programas desarrollados para identificar e interpretar el habla humana. Los ejemplos más claros que se encuentran en el mercado, actualmente, son Siri y Cortana que, utilizando inteligencia artificial, logran comprender órdenes y dar respuesta clara a las preguntas y consultas de los usuarios.
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz de texto")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/cf1/img7.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz de texto
            p Es una interfaz simple que, por medio de una pantalla o línea de comando, permite visualizar y entregar la información. Su uso, en la mayoría de los casos, se lleva a cabo en entornos de programación de bajo nivel o configuración y operación de sistemas operativos.
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz natural")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/cf1/img8.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz natural
            p Se utiliza para capturar e interpretar los movimientos del cuerpo humano convirtiéndolos en acciones que se interpretan como órdenes. Es muy popular en los videojuegos que permiten este tipo de interacción por medio de la interfaz kinética. También se está implantando en entornos de realidad virtual y realidad aumentada.
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz Cerebro-Ordenador")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/cf1/img9.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz Cerebro-Ordenador
            p Es una tecnología relativamente nueva. Se están realizando muchas investigaciones al respecto especialmente en el ámbito médico, donde se utiliza con pacientes con prótesis biónicas y por medio de la captura de ondas cerebrales pueden dar instrucciones sencillas a un <i>software</i> conectado al <i>hardware</i>.
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Historia de las interfaces
    .row.justify-content-between.mb-5
      .col-lg-6
        p El inicio de las interfaces gráficas se da en el mismo momento que los computadores personales se ofrecieron de manera comercial, en la década de los años 70; antes de esto solo se utilizaba interfaz de texto que hacía el proceso de comunicación más tedioso, por su complejidad. Gracias al trabajo de IBM, Microsoft y Apple, en poco tiempo se lograron concebir unas herramientas gráficas que facilitaron la interacción con sus sistemas operativos y el <i>software</i> que se utilizaba en ese momento, utilizando la metáfora del escritorio de oficina como símil del entorno gráfico.
        p Los primeros productos de Apple y Microsoft e IBM contribuyeron en gran medida con las bases de diseño e interacción que aún son utilizadas, proponiendo al usuario un lenguaje claro y un entorno interactivo, basado en señales, íconos, hipervínculos y también en otras dinámicas que son propias y que representan las acciones del sistema informático.
        p Se lograron, entonces, entornos de trabajo mucho más familiares y comprensibles para la gran mayoría de usuarios, pasando de tener una pantalla en negro y con una línea de texto de comando, a un entorno totalmente gráfico e interactivo agradable que invita a la interacción.
      .col-lg-5: img(src="@/assets/curso/cf1/img10.jpg")(data-aos="flip-left")

    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-gradient.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              figure.ps-5
                img(src="@/assets/curso/cf1/img11.svg" style="width:50px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.ps-5
                  h3.mb-1 Historia de las interfaces
                  p.text-small Para tener mayor información sobre la historia y evolución de las interfaces de usuario, se le recomienda visitar el enlace siguiente:
                .col-sm-auto.pe-5
                  a.boton.color-acento-botones(:href="('https://www.sutori.com/story/historia-de-las-interfaces--NTbnEdSjkFagkT7KH42RZYF2')" target="_blank")
                    span Ver enlace
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.bg-gradient
  background:linear-gradient(180deg, rgba(77,208,225,1) 0%, rgba(3,155,229,1) 100%) !important
</style>
