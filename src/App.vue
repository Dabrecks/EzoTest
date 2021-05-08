<template>
  <div id="app">
    <Hero />
  <Edifice />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Edifice from './components/Edifice.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Edifice,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
</style>
