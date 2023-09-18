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
          .col-xl-8
            h4 Principales gestos
            p Los principales gestos y los más utilizados son tocar, arrastrar, o deslizar, ver, salir, entre otros. Para realizar estos movimientos, se requiere como máximo de dos dedos; para la mayoría de los usuarios, estos gestos son muy comunes y populares.
            .tabla-a.color-acento-botones.mb-5.bg-transparent.table-responsive
              table
                thead
                  tr
                    th.th-o.h4.fw-bold.text-center.col-1 #
                    th.col-3.col-3 Gestos
                    th
                    th Android
                    th iOS
                    th(colspan=2)  Windows Phone
                tbody
                  tr
                    td.th-o.h4.fw-bold.text-center 1
                    td
                      p.text-break.text-sm.mb-0 Tocar
                    td
                      p.text-break.text-sm.mb-0 Tocar la superficie con la yema del dedo
                    td(colspan=3).text-center
                      p.text-break.text-sm.mb-0 Selecciona la acción primaria

                  tr
                    td.th-o.h4.fw-bold.text-center 2
                    td
                      p.text-break.text-sm.mb-0 Arrastrar
                    td
                      p.text-break.text-sm.mb-0 Mover son perder el contacto
                    td
                      p.text-break.text-sm.mb-0 Archivar, borrar o mover elementos
                    td
                      p.text-break.text-sm.mb-0 Activar botón de eliminar o mover elementos
                    td
                    p.text-break.text-sm.mb-0 Cambiar a otras pestañas
                  tr
                    td.th-o.h4.fw-bold.text-center 3
                    td
                      p.text-break.text-sm.mb-0 Deslizar
                    td
                      p.text-break.text-sm.mb-0 Deslizar perdiendo el contacto
                    td
                      p.text-break.text-sm.mb-0 Cambiar a otras pestañas
                    td
                      p.text-break.text-sm.mb-0 Desplazarse por el contenido
                    td
                      p.text-break.text-sm.mb-0 Cambiar pestañas
          .col-xl-4
            //.titulo-sexto.color-acento-contenido.bg-transparent
              h5.fw-normal
                b Figura 9
                | Tocar, arrastrar, deslizar
            figure.d-none.d-xl-block
              img(src='@/assets/curso/cf2/img38.png', alt='Imagen que presenta el tocar, arrastrar y deslizar.')
              figcaption Nota. Tomada de Introducción al desarrollo de aplicaciones móviles (2020).
      .py-3.py-md-4(titulo="Asimilación de los gestos")
        .row
          .col-xl-8
            h4 Asimilación de los gestos
            p Los gestos suelen ser bien asimilados por los usuarios y por esa razón se recomienda aprovecharlos en la manera en que han sido establecidos y seguir utilizándolos por la familiaridad que ya se observa en los usuarios, lo cual puede facilitar la navegación y aceptación de la aplicación.
            .tabla-a.color-acento-botones.mb-5.bg-transparent.table-responsive
              table
                thead
                  tr
                    th.th-o.h4.fw-bold.text-center.col-1 #
                    th.col-3.text-start Gestos
                    th Android
                    th iOS
                    th(colspan=2) Windows Phone
                tbody
                  tr
                    td.th-o.h4.fw-bold.text-center 4
                    td
                      p.text-break.text-sm.mb-0 Mantener pulsado
                    td
                      p.text-break.text-sm.mb-0 Tocar durante un periodo prolongado de tiempo
                    td
                      p.text-break.text-sm.mb-0 Entrar al modo de edición de listas, activa íconos ocultos
                    td
                      p.text-break.text-sm.mb-0 Mostrar un #[em tooltip] Aumentar el contenido visible bajo el dedo
                    td
                      p.text-break.text-sm.mb-0 Mostrar un #[em tooltip], sin seleccionar el elemento
                  tr
                    td.th-o.h4.fw-bold.text-center 5
                    td
                      p.text-break.text-sm.mb-0 Doble toque
                    td
                      p.text-break.text-sm.mb-0 Tocar rápidamente dos veces
                    td
                      p.text-break.text-sm.mb-0 Alternar entre acercar y alejar, seleccionar texto.
                    td(colspan="2").text-center
                      p.text-break.text-sm.mb-0 Alternar entre acercar y alejar
                  tr
                    td.th-o.h4.fw-bold.text-center 6
                    td
                      p.text-break.text-sm.mb-0 Juntar y separar
                    td
                      p.text-break.text-sm.mb-0 Tocar la superficie con dos dedos y juntarlos o separarlos
                    td(colspan="3").text-center
                      p.text-break.text-sm.mb-0 Aumentar o reducir el #[em zoom]
                  tr
                    td.th-o.h4.fw-bold.text-center 7
                    td
                      p.text-break.text-sm.mb-0 Girar
                    td
                      p.text-break.text-sm.mb-0 Tocar con dos dedos mientras se gira la muñeca
                    td(colspan="3").text-center
                      p.text-break.text-sm.mb-0 Girar una imagen o un mapa
          .col-xl-4
            //.contenedor
              //.titulo-sexto.color-acento-contenido.bg-transparent
                h5.fw-normal
                  b Figura 10
                  | Mantener pulsado, doble toque, juntar y separar, girar
            figure.m-auto.d-none.d-xl-block
              img(src='@/assets/curso/cf2/img39.png', alt='Imagen que presenta el mantener pulsado, doble toque, juntar y separar y girar.')
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
