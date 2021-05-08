<template>
  <b-container fluid id="sectionEdifice">
      <b-row class="rowEdifice">
          <b-col class="textEdifice">
              <b-row>
                    <h3 class="textBleu mb-4">La qualité de vie sans <br>compromis !</h3>
                    <h4 class="sousTitre mb-5">Appartements à louer à Sainte-Marie</h4>
                    <p class="textCourant">
                        <span class="textCourantGras">64 unités | Livraison de la Phase 1 juillet 2021</span>
                        <br>
                        Bienvenue aux condos locatifs : un nouvel immeuble locatif 
                        situé au cœur de Sainte-Marie, en Beauce, comportant 64 appartements 
                        à louer. Que vous soyez seul, un jeune couple, une famille ou 
                        nouvellement retraité, vous serez comblés par la vaste sélection 
                        de logements 3 ½ et 4 ½ situés dans un environnement des plus enchanteurs.
                        <br> 
                        <br> 
                        Si le nom du Baronet vous semble familier, ce n’est pas un hasard. 
                        Les appartements empruntent leur nom à l’ancienne usine, bien connue des Beaucerons. 
                        Vous l’aurez deviné, le nouvel édifice siège sur la rue Baronet, 
                        face à la rivière Chaudière, au milieu du futur centre-ville vert de Sainte-Marie.
                        <br> 
                        <br> 
                        Vous offrir une qualité de vie sans compromis, telle est la promesse du Baronet. 
                        <br>
                        <br>
                        <span class="textCourantGras">3 ½ / 4 ½ / certaines unités adapté aux personnes à mobilité réduite.</span>
                    </p>
              </b-row>
              <b-row class="sectionBtnEdifice mt-5">
                  <b-col class="btnEdifice">
                      <button>
                          Voir les plans
                      </button>
                      <button>
                          Réserver mon unité
                      </button>
                  </b-col>
              </b-row>
              

          </b-col><!--textEdifice-->
          <b-col class="imgEdifice">
              <img src="../assets/edifice.png" alt="edifice">
          </b-col><!--imgEdifice-->
      </b-row><!--rowEdifice-->
  </b-container>
</template>

<script>
export default {
  name: "Edifice"
};
</script>

<style>
#sectionEdifice {
    padding: 0% 6%;
    margin: 150px 0px 150px 0px;
    font-family: 'Oxygen', sans-serif;
}
/* .rowEdifice {
    height: 120vh;
} */
/***********************TEXTE***********************/
.textEdifice {
    padding-right: 20px !important;
    margin-top: 80px !important;
}
.textBleu {
    font-weight: bold;
    color: #009AD9;
    font-size: 2rem;
}
.sousTitre {
    color: #022943;
    font-size: 1.6rem;
}
.textCourant {
    color: #022943;
    font-size: 1.1rem;
}
.textCourantGras {
    font-weight: bold;
}
/***********************BTN***********************/  
.sectionBtnEdifice {
    margin-top: 30px;
}
.btnEdifice {
    display: flex;
    justify-content: space-between;
}
.btnEdifice button {
    background-color: #009AD9;
    color: #ffffff;
    border: none;
    height: 60px;
    width: 250px;
    cursor: pointer;
}
/***********************IMAGE***********************/  
.imgEdifice {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.imgEdifice img {
    height: 650px;
    box-shadow: 50px -50px #F1F1F2;
    
}  
</style>