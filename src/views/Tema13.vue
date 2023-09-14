<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Estructura de navegación
    .row.mb-5
      .col-lg-6
        p La estructura de navegación define el paso a paso que se debe seguir para cumplir o realizar una actividad. Consiste en determinar la manera en que el usuario explorará los contenidos a través de las pantallas, íconos hipervínculos y demás elementos gráficos que permiten la interacción con la aplicación. Debe ser intuitiva y predecible.
      .col-lg-6: img(src="@/assets/curso/cf2/img40.jpg")
    .titulo-sexto.color-acento-contenido.bg-transparent
      h5 Figura 4.
      span Estructura de navegación para inicio de sesión
    figure.mb-5
      img.mb-3(src="@/assets/curso/cf2/img41.svg", alt="Se presenta la estructura de navegación desde el inicio de sesión de la app hasta ingresar.")
      figcaption (Raffino, 2020)
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Navegación con pantallas deslizantes")
        .col-md-4
          figure
            img(src='@/assets/curso/cf2/img42.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p Puede ser por medio del gesto “deslizar” o bien pulsando sobre la pestaña. Subnivel de navegación con pestañas deslizantes. Subnivel de navegación con pantallas que no deslizan, por lo tanto, dependen de un elemento pulsable.
      .row(titulo="La estructura o mapa de navegación ")
        .col-md-4
          figure
            img(src='@/assets/curso/cf2/img43.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p Define los caminos que debe tomar el usuario. Estas posibles rutas deben estar definidas y muy claras en el diseño, deben presentar el esquema de la interfaz indicando los principales conceptos incluidos en el espacio de la información y las interrelaciones que existen entre ellos.
      .row(titulo="Recorridos rápidos, accesos fáciles")
        .col-md-4
          figure
            img(src='@/assets/curso/cf2/img44.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p Es una representación completa de la aplicación que sirve para orientar al usuario en el recorrido, facilitando el acceso directo al lugar que le interese. El mapa de navegación se puede representar de forma textual, también en forma gráfica o con una combinación de ambas.
      .row(titulo="Comprensión modular de la app")
        .col-md-4
          figure
            img(src='@/assets/curso/cf2/img45.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          p Para ofrecer una visión global, es muy útil mostrar un mapa de todo el contenido, poder verlo en una sola pantalla y que esté accesible, pero es complejo lograr este cometido; por esa razón, es importante dividir el mapa por actividades, para representarlo por módulos o en pequeños procesos que permitan comprender, de manera particular, cada uno de los componentes de la aplicación.
          p (Cuello y Vittone, 2013)

</template>

<script>
export default {
  name: 'Tema13',
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
