<template>
  
<b-navbar class="navbar">
    <b-navbar-brand class="logoNav">
      <!-- <img left class="imgLogo" src="../assets/logo.png" /> -->
      <img left class="imgLogo" src="https://lebaronet.com/wp-content/uploads/2020/08/logo-baronet-web.svg" />
    </b-navbar-brand><!--logoNav -->
    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
    <b-navbar-nav class="ml-auto">
      <b-navbar-nav >
        <b-nav-item class="linkNav" href="#">Accueil</b-nav-item>
        <b-nav-item href="#">L'édifice</b-nav-item>
        <b-nav-item href="#">Le secteur</b-nav-item>
        <b-nav-item href="#">Les Plans</b-nav-item>
        <b-nav-item href="#">Nous joindre</b-nav-item>
        <b-nav-item id="liBorder" href="#">Réserver mon unité</b-nav-item>
      </b-navbar-nav>
    </b-navbar-nav>
  </b-navbar><!--navbar--> 
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;
  margin: 0% 6%;
  height: 100px;
  font-family: 'Oxygen', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: transparent;
}
.logoNav {
  height: 100%;
  padding: 0;
}
.imgLogo {
  height: 100%;
}
.nav-item.nav-item.nav-item a {
  color: #ffffff;
  margin: 0px 5px;
}
#liBorder {
  border: 1px solid #ffffff;
  padding: 0px 16px;
  margin-left: 16px;
}
</style>
