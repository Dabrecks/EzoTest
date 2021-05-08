<template>
  <div>
      <header>
      <Nav />
      <div class="backgroundText">
          <h1>
              Des appartements
          </h1>
          <br>
          <h1>
              de qualité à
          </h1>
          <br>
          <h1>
              Sainte-Marie 
          </h1>
      </div>
  </header>
  <Edifice />
  </div>
</template>

<script>
import Nav from "./Layout/Nav"
import Edifice from "./Edifice"
export default {
    name:"Hero",
    components: {
    Nav,
    Edifice,
  }
}
</script>

<style>
header {
    background-image: url("../assets/heroBackground.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    height: 100vh;
}
.backgroundText {
    position: absolute;
    left: 125px;
    bottom: -150px;
    z-index: 1;
}
.backgroundText h1 {
    font-family: 'Oxygen', sans-serif;
    background-color: #22597e;
    color: #ffffff;
    font-size: 4rem;
    padding: 0px 10px;

}
</style>