<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estructuras de navegación
    figure.mb-5
      img(src='@/assets/curso/cf1/img61.jpg')(data-aos="zoom-in-up")
    p.mb-5 Los servicios ideales que ha de prestar una aplicación móvil o cualquier sitio web, suponen para el usuario, la posibilidad de derivar de un punto a otro dentro del entorno, incluso fuera de él hacia otros entornos, para acercarse o acceder directamente a información, acciones, servicios, material, entre otras. Royo (2004) clasifica a las estructuras de navegación en tres tipos: lineales, jerárquicas y aleatorias.

    h4 Estructuras lineales
    p.mb-5 Generan una lectura secuencial y son usadas para tareas muy bien definidas, por ejemplo, los tutoriales que muchos programas y apps ejecutan en su primera ejecución, para instruir al usuario sobre su funcionamiento.
    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Estructura lineal #[em Messenger] secuencia lineal para iniciar sesión

    figure.mb-5
      img(src='@/assets/curso/cf1/img62.png')
      figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)

    h4 Estructuras jerárquicas
    p.mb-5 Estas estructuras permiten elegir un número de posiciones antes de pasar al siguiente nivel el cual también presenta diferentes opciones. Antes de continuar se maneja de manera ordenada ofreciendo una organización lógica y secuencial que permite identificar, de manera sencilla, dónde se encuentra la información. Existen varios tipos de secuencias que se adaptan y se utilizan según las necesidades de diseño.
    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Estructura jerárquica
    figure.mb-5
      img(src='@/assets/curso/cf1/img63.svg')
      figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)
    h4 Estructuras aleatorias
    p.mb-5 Estas estructuras son utilizadas especialmente en el diseño de videojuegos o sistemas abiertos de interacción, donde el aprendizaje es complejo y se lucha contra el sistema o contra otros jugadores en red. Por ejemplo, al cargar una imagen o un escenario diferente, en cada actualización de la pantalla.
    .titulo-sexto.color-acento-contenido
      h5 Figura 5.
      span Estructura de una #[em app]
    figure.mb-5
      img(src='@/assets/curso/cf1/img64.svg', alt="Se presenta una estructura jerárquica equilibrada de una app.")
      figcaption Nota. http://appdesignbook.com/es/

</template>

<script>
export default {
  name: 'Tema3',
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
