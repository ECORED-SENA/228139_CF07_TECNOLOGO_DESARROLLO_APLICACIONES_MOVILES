<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Gestos
    p.mb-5 Los gestos son los tipos de movimientos y pulsaciones que el usuario realiza sobre la pantalla del smartphone para activar las funciones de los diferentes elementos que hacen parte de la interfaz gráfica de usuario. Estos gestos y movimientos permiten la interacción con la aplicación.
    TabsC.color-acento-contenido.mb-5.bg-transparent
      .py-3.py-md-4(titulo="Principales gestos")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Principales gestos
            p Los principales gestos y los más utilizados son tocar, arrastrar, o deslizar, ver, salir, entre otros. Para realizar estos movimientos, se requiere como máximo de dos dedos; para la mayoría de los usuarios, estos gestos son muy comunes y populares.
            .tabla-a.color-acento-botones.mb-5.bg-transparent.table-responsive
              table
                thead
                  tr
                    th.th-o.h4.fw-bold.text-center.col-1 #
                    th.col-5.col-3 Gestos
                    th
                    th Android
                    th iOS
                    th Windows Phone
                tbody
                  tr
                    td.th-o.h4.fw-bold.text-center 1
                    td Tocar
                    td Tocar la superficie con la yema del dedo
                    td(colspan=3).text-center Selecciona la acción primaria

                  tr
                    td.th-o.h4.fw-bold.text-center 2
                    td Arrastrar
                    td Mover son perder el contacto
                    td Archivar borrar o mover elementos
                    td Activar botón de eliminar o mover elementos
                    td Cambiar a otras pestañas
                  tr
                    td.th-o.h4.fw-bold.text-center 3
                    td Deslizar
                    td Deslizar perdiendo el contacto
                    td Cambiar a otras pestañas
                    td Desplazarse por el contenido
                    td Cambiar pestañas
          .col-md-4
            //.titulo-sexto.color-acento-contenido.bg-transparent
              h5.fw-normal
                b Figura 9
                | Tocar, arrastrar, deslizar
            figure
              img(src='@/assets/curso/cf2/img38.png', alt='')
              figcaption Nota. Tomada de Introducción al desarrollo de aplicaciones móviles (2020).
      .py-3.py-md-4(titulo="Asimilación de los gestos")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Asimilación de los gestos
            p Los gestos suelen ser bien asimilados por los usuarios y por esa razón se recomienda aprovecharlos en la manera en que han sido establecidos y seguir utilizándolos por la familiaridad que ya se observa en los usuarios, lo cual puede facilitar la navegación y aceptación de la aplicación.
            .tabla-a.color-acento-botones.mb-5.bg-transparent.table-responsive
              table
                thead
                  tr
                    th.th-o.h4.fw-bold.text-center.col-1 #
                    th.col-5.text-start Gestos
                    th Android
                    th iOS
                    th Windows Phone
                tbody
                  tr
                    td.th-o.h4.fw-bold.text-center 4
                    td Mantener pulsado
                    td Tocar durante un periodo prolongado de tiempo
                    td Entrar al modo de edición de listas, activa íconos ocultos
                    td Mostrar Un tooltip Aumentar el contenido visible bajo el dedo
                    td Mostrar un tooltip, sin seleccionar el elemento
                  tr
                    td.th-o.h4.fw-bold.text-center 5
                    td Doble toque
                    td Tocar rápidamente dos veces
                    td Alternar entre acercar y alejar, seleccionar texto.
                    td(colspan="2").text-center Alternar entre acercar y alejar
                  tr
                    td.th-o.h4.fw-bold.text-center 6
                    td Juntar y separar
                    td Tocar la superficie con dos dedos y juntarlos o separarlos
                    td(colspan="3").text-center Aumentar o reducir el zoom
                  tr
                    td.th-o.h4.fw-bold.text-center 7
                    td Girar
                    td Tocar con dos dedos mientras se gira la muñeca
                    td(colspan="3").text-center Girar una imagen o un mapa
          .col-md-4.d-flex
            .contenedor
              //.titulo-sexto.color-acento-contenido.bg-transparent
                h5.fw-normal
                  b Figura 10
                  | Mantener pulsado, doble toque, juntar y separar, girar
              figure.m-auto
                img(src='@/assets/curso/cf2/img39.png', alt='')
                figcaption Nota. Tomada de Introducción al desarrollo de aplicaciones móviles (2020).

</template>

<script>
export default {
  name: 'Tema12',
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
.th-o
  background-color: $color-acento-contenido
.table-responsive
  overflow-y: hidden
</style>
