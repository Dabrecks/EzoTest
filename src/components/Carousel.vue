<template>
    <div>
        <b-container fluid class="containerCarousel p-0">
        <b-row class="rowCarousel">
            <hooper :itemsToShow="1.30" :centerMode="false" class="carousel">
                <slide>
                    <img src="../assets/carousel1.png" alt="carousel1">
                </slide>
                <slide>
                    <img src="../assets/carousel2.png" alt="carousel2">
                </slide>
                <slide>
                    <img src="../assets/carousel3.png" alt="carousel3">
                </slide>
                <slide>
                    <img src="../assets/carousel4.png" alt="carousel4">
                </slide>
            </hooper>
        </b-row><!--rowCarousel-->
    </b-container>
    <b-container class="containerTextCarousel">
        <b-row class="backgroundTextCarousel">
            <b-col>
            <h1>
                Découvrez les possibilités
            </h1>
            <h1>
                qui s’offrent à vous
            </h1>

            </b-col>
        </b-row><!--titreCarousel-->
        <b-row class="sousTitreCarousel">
            <h3 class="textBleu mb-4">
                Un secteur de choix
            </h3>
            <h4 class="sousTitre mb-5">
                Au centre-ville de Sainte-Marie
            </h4>
        </b-row><!--sousTitreCarousel-->
        <b-row class="texteCarousel">
            <b-col>
                <p>
                    Situé à l’angle de la rue Notre-Dame Sud et Baronet, 
                    l’édifice offre à ses résidents un emplacement de choix. 
                    Le Baronet est au centre de la belle ville de Sainte-Marie, 
                    près des services et commerces, au grand bonheur de ses locataires. 
                    Vous y êtes dans un environnement paisible empreint de quiétude et 
                    tranquillité. D’un côté, les résidents ont droit à une vue 
                    magnifique sur la rivière Chaudière. De l’autre, l’édifice est 
                    bordé par une piste cyclable et par des arbres matures.
                    <br>
                    <br>
                    S’établir au Baronet, c’est vivre au cœur de Sainte-Marie, dans un 
                    environnement des plus enchanteurs, tout en étant à proximité 
                    de l’action citadine. Le meilleur des deux mondes!
                </p>
                <button>
                    Voir les plans
                </button>
            </b-col>
            <b-col class="listeSecteurCol">
                <b-row class="listeSecteur">
                    <b-col cols="1">
                        <p class="listeSecteurChiffre">
                            1 
                        </p>
                    </b-col>
                    <b-col cols-11>
                        <p class="listeSecteurText">Un lieu où il fait bon vivre</p>
                    </b-col>
                </b-row>
                <b-row class="listeSecteur">
                    <b-col cols="1">
                        <p class="listeSecteurChiffre">
                            2 
                        </p>
                    </b-col>
                    <b-col cols-11>
                        <p class="listeSecteurText">Au futur centre-ville vert de Sainte-Marie aménagé en continuité avec le merveilleux Parc Taschereau</p>
                    </b-col>
                </b-row>
                <b-row class="listeSecteur">
                    <b-col cols="1">
                        <p class="listeSecteurChiffre">
                            3 
                        </p>
                    </b-col>
                    <b-col cols-11>
                        <p class="listeSecteurText">Bordé par la piste cyclable et par des arbres matures</p>
                    </b-col>
                </b-row>
                <b-row class="listeSecteur">
                    <b-col cols="1">
                        <p class="listeSecteurChiffre">
                            4 
                        </p>
                    </b-col>
                    <b-col cols-11>
                        <p class="listeSecteurText">À quelques minutes de nombreux commerces et services</p>
                    </b-col>
                </b-row>
                <b-row class="listeSecteur">
                    <b-col cols="1">
                        <p class="listeSecteurChiffre">
                            5 
                        </p>
                    </b-col>
                    <b-col cols-11>
                        <p class="listeSecteurText">À proximité de parcs et écoles primaires</p>
                    </b-col>
                </b-row>
            </b-col>
        </b-row><!--texteCarousel-->
    </b-container>
    </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name: "Carousel",
    components: {
    Hooper,
    Slide
  }
}
</script>

<style>
/************************CAROUSEL************************/
.containerCarousel {
    padding: 0% 6%;
}
.rowCarousel {
    height: 100%;
    margin-bottom: 6%;
    padding: 0% 6%;
}
.carousel{
    height: fit-content;
}
img {
    height: 475px;
    padding-left: 0;
}
.hooper-slide.is-current {
  transform: scale(1.2);
}
/************************TITRE************************/
.containerTextCarousel {
    padding: 0% 6%;
}
.backgroundTextCarousel {
    margin-bottom:100px;

}
.backgroundTextCarousel h1 {
    font-family: 'Oxygen', sans-serif;
    background-color: #022943;
    color: #ffffff;
    font-size: 4rem;
    padding: 0px 10px;
    width: fit-content;
}
.texteCarousel p{
    margin-bottom: 59px;
}
/************************BTN************************/
.texteCarousel button {
    background-color: #009AD9;
    color: #ffffff;
    border: none;
    height: 64px;
    width: 360px;
    cursor: pointer;
}
/************************LISTE************************/
.listeSecteurChiffre {
    height: 30px;
    width: 30px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #009AD9;
    color: #ffffff;
    font-weight: bold;
    
    margin-bottom: 30px !important;
}
.listeSecteurText {
    color: #022943;
    font-size: 1.1rem;
    margin-bottom: 30px !important;
}
</style>