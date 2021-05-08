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
  </div>
</template>

<script>
import Nav from "./Layout/Nav"
export default {
    name:"Hero",
    components: {
    Nav,
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
    left: 6%;
    bottom: -150px;
    z-index: 1;
}
.backgroundText h1 {
    font-family: 'Oxygen', sans-serif;
    background-color: #022943;
    color: #ffffff;
    font-size: 4rem;
    padding: 0px 10px;
    width: fit-content;

}
</style>