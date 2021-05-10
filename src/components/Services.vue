<template>
 <b-container fluid class="containerService">
     <b-row class="rowService">
         <b-col class="gaucheService">
             <h4 class="texteBlanc mb-5">
                    <span class="blancBold">
                        Des services et commodités à votre portée :
                    </span>
                    <br>
                    <br>
                    Espaces de vie pratiques et réfléchis, inclusions et commodités 
                    recherchées, le tout construit avec des matériaux de qualité : 
                    c’est ce que vous offre le Baronet.
                </h4>
                <button>
                    Découvrir le secteur
                </button>
         </b-col>
         <b-col class="droiteService">
             <ul>
                    <li>Stationnement intérieur et extérieur disponibles</li>
                    <li>Lockers intérieurs disponibles</li>
                    <li>Piscine extérieure chauffée, disponible en Phase 2</li>
                    <li>Ascenseur</li>
                    <li>Gym et salle communautaire</li>
                    <li>Climatisation indépendante</li>
                    <li>Insonorisation supérieure</li>
                    <li>Sans oublier, la vue imprenable sur la rivière Chaudière</li>
                </ul>
         </b-col>
     </b-row>
 </b-container>
</template>

<script>
export default {
    name: "Test"
}
</script>

<style>
.containerService {
    margin: 5% 0%;
}
.rowService {
    height: 50vh;
    background-color: #009AD9;
    margin-right: 5% !important;
    padding: 5% 0% 5% 5%;
}
.droiteService {
    background-color: #ffffff;
    padding-left: 25px !important;
}
.texteBlanc {
    color: #ffffff;
}
.blancBold {
    font-weight: bold;
}
button {
    background-color: #022943;
    color: #ffffff;
    border: none;
    height: 64px;
    width: 360px;
    cursor: pointer;
}
.listeService {
    background-color: #ffffff;
    padding: 25px 0px 25px 25px;
}
ul {
    padding: 50px 10px;
    margin-bottom: 0 !important;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
}
li {
    color: #022943;
    margin-bottom: 1.5rem;
}
</style>