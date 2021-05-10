<template>
  <div id="app">
    <Hero />
    <Edifice />
    <Reservation />
    <Services />
    <Carousel />
    <!-- <Test /> -->
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Edifice from './components/Edifice.vue'
import Reservation from './components/Reservation.vue'
import Services from './components/Services.vue'
import Carousel from './components/Carousel.vue'
// import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Edifice,
    Reservation,
    Services,
    Carousel,
    // Test,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
#app {
  font-family: 'Oxygen', sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
}
/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
</style>
