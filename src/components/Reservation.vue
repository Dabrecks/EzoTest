<template>
    <b-container fluid class="sectionReservation">  
        <b-row class="rowReservation">
            <b-col class="backgroundTextReservation">
                <h1>
                    Réservez votre unité 
                </h1>
                <h1>
                    dès maintenant
                </h1>
            </b-col>
        </b-row><!--backgroundTextReservation-->
        <b-row class="centreReservation">
            <b-col class="centreGaucheReservation">
                <h3 class="textBleu mb-4">
                    Un édifice moderne
                    <br>et accessible
                </h3>
                <h4 class="sousTitre mb-5">
                    64 logements à louer en Beauce
                </h4>
            </b-col><!--centreGaucheReservation-->
            <b-col class="centreDroiteReservation">
                <p class="textCourant">
                    L’édifice du Baronet vous offre 64 logements modernes de qualité 
                    supérieure, répartis sur quatre étages. Ses résidents y trouvent 
                    assurément confort et satisfaction, puisqu’il offre six modèles de 
                    logements 3 ½ ou 4 ½. De plus, certaines unités sont adaptées aux 
                    personnes à mobilité réduite, un atout rare dans la région.
                </p>
            </b-col><!--centreDroiteReservation-->
        </b-row><!--centreReservation-->
        <b-row class="basReservation">
            <b-col  cols="6" offset="6">
                <p class="textCourant" id="encadreText">
                    <span class="textCourantGras">
                        Phase 1 disponible dès l’été 2021
                    </span>
                    <br>
                    <br>
                    Les appartements seront livrés en 2 phases :<br/> 
                    la première phase de 64 logements à l’été 2021 et la seconde 
                    de 32 logements à l’été 2023. Réservez votre unité 
                    dès maintenant!
                </p>
            </b-col>
        </b-row><!--basReservation-->
    </b-container><!--sectionReservation-->
</template>

<script>
export default {
  name: "Reservation"
};
</script>

<style>
.sectionReservation {
    padding: 5% 6% !important;
    margin: 150px 0px 0px 0px;
     background-image: linear-gradient(#F1F1F2, #ffffff);
}
.rowReservation {
    margin-bottom: 75px;
}
.backgroundTextReservation h1 {
    font-family: 'Oxygen', sans-serif;
    background-color: #022943;
    color: #ffffff;
    font-size: 4rem;
    padding: 0px 10px;
    width: fit-content;
}
#encadreText {
    padding: 30px 40px;
    background-color: #F1F1F2;
}
.sectionBleu {
    height: 50vh;
    background-color: blue;
}
</style>