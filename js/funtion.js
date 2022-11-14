console.log(window.screen.width);

screen.addEventListener("orientationchange", function () {
    console.log("The orientation of the screen is: " + screen.orientation);
});

if (window.screen.width >= 500) {
    document.getElementById("body").innerHTML =
        `<div class="noPhone">
            <h1 class="taille">Cette application n'est disponible que sur téléphone désolé ._.</h1>
        </div>`;
} else {

    const item = document.getElementById('tous').classList.add("typeActive");

    getExercice();
    getProgramme();
    getNutrition();
    getMusique()

    // Affichage masquage des blocs de sections
    page("accueil");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////// Affiche la liste des exo //////////////////////////////////////////////////////
    function getExercice() {
        let ligneExo = document.getElementById("ligneExo");
        var i;

        for (i = 1; i < BD_Exo.length; i++) {

            ////////////////////////////////// Mets en place les class de style ///////////////////////////////////////
            const tabStyle = BD_Exo[i][3].split("-");

            let classList = "";

            for (j = 0; j < tabStyle.length - 1; j++) {
                classList += tabStyle[j] + " ";
            }
            classList += tabStyle[j];

            // alt="` + BD_Exo[i][1] + `"

            ligneExo.innerHTML +=
                `<div class="ligneExo tous ` + classList + `" id="ligneExo` + BD_Exo[i][0] + `">
                    <div class="ligne-img-bloc">
                        <img class="ligne-img-left" src="document/exo/` + BD_Exo[i][1] + `.jpg" 
                            onerror="this.onerror=null; this.src='document/exo/` + BD_Exo[i][1] + `.gif'"/>
                    </div>
        
                    <div class="ligne-txt">
                        <!-- <button class="btnInfoExo">Info</button> -->
                        <div class="triangle2" onclick="addExo(` + i + `)"></div>
        
                        <p class="taille1 fw-600 ligneTitre depasse">` + BD_Exo[i][1] + `</p>
                        <div class="taille3 opacity-50">
                            ` + classList + `
                        </div>
        
                        <div class="taille3 ligneDescription">
                            Imperio conplures aliis et diluere aurem nec 
                            praedoctis reginae stimulis resedit resedit de aliis et diluere aurem nec 
                            praedoctis reginae stimulis resedit resedesedit de aliis et diluere aurem nec 
                            praedoctis reginae stimulis resedit resedit dfen...
                        </div>
                        
                    </div>
                </div>`
        }
    }

    ///////////////////////////////// Met en place les programmes //////////////////////////////////////////////
    function getProgramme() {

        let prog = document.getElementById("prog");

        for (i = 1; i < BD_Programme.length; i++) {
            txt = "";
            for (j = 1; j < BD_Programme[i].length; j++) {

                txt +=
                    `<li class="list-group-item taille2">` + j + `. ` + BD_Exo[BD_Programme[i][j]][1]
                    //+ ` (id = ` + BD_Exo[BD_Programme[i][j]][0] + `)
                    + `</li>`;

            }

            prog.innerHTML += `<div class="col-12 col-lg-4 col-xl-3">
                <ol class="list-group">
                <li class="list-group-item taille list-titre-bloc">
                    <p class="list-titre depasse">` + BD_Programme[i][0] + `</p>
                    <button type="button" class="btn orange btn-prog" onclick="programmes(` + i + `)">C'est parti</button>
                </li>`
                + txt + `   
                </ol></div>`;
        }
    }

    ////////////////////////////////// Affiche les cards de Nutrition //////////////////////////////////////////////////////
    function getNutrition() {
        let nutri = document.getElementById("cardsNutrition");
        var i;

        for (i = 1; i < BD_Nutrition.length; i++) {

            nutri.innerHTML +=
                `<div class="col-6 col-lg-4 col-xl-3 tous taille3 fw-9" id="Nutrition` + BD_Nutrition[i][0] + `">
                    <div class="card">

                        <img class="card-img-bloc" mx-auto d-block" src="document/nutrition/` + BD_Nutrition[i][1] + `.jpg"
                                onerror="this.onerror=null; this.src='document/exo/` + BD_Nutrition[i][1] + `.gif'">

                        <div class="card-body">
                            <p class="taille4 fw-9 depasse m-2">` + BD_Nutrition[i][1] + `</p>

                            <div class="cardDescription taille5">
                            Imperio conplures aliis et diluere aurem nec 
                                        praedoctis reginae stimulis resedit resedit defen...
                            </div>
                            
                            <!-- detail cut -->

                            <div>
                                <button type="button" class="btn btn-warning btnInfoCard">
                                    En savoir plus
                                </button>
                            </div>

                        </div>
                    </div>
                </div > `;
        }
    }

    ///////////////////////////////////////// Mets en place les musiques //////////////////////////////////////////////
    function getMusique() {
        const listMusique = document.getElementById("listMusique");

        for (let i = 0; i < BD_Musique.length; i++) {

            listMusique.innerHTML +=
                `<div class="ligne-list-music" id="musique` + i + `">
                    <div class="ligne-img-bloc-music">
                        <img class="ligne-img-music" src="document/musique/cover/` + BD_Musique[i][0] + `.jpg"/>
                    </div>

                    <div class="musicBlocTxt">
                        <p class="taille4 fw-9 p-null">` + BD_Musique[i][1] + `</p>
                        <p class="taille5 fw-6 p-null">` + BD_Musique[i][0] + `</p>
                    </div>

                    <div class="triangle3" onclick="lancementMusique(` + i + `)"></div>
                </div>`;
        }
    }

    function setMusique() {

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// Filtre les cards //////////////////////////////////////////
    function filtre(val) {
        let i;

        // On cache toute les cards
        const cache = document.getElementsByClassName('tous');
        for (i = 0; i < cache.length; i++) {
            cache[i].style.display = "none";
        }

        // On affiche celle qui correspondent au filtre
        const affiche = document.getElementsByClassName(val);
        for (i = 0; i < affiche.length; i++) {
            affiche[i].style.display = "block";
        }

        const all = document.getElementsByClassName('type');
        for (i = 0; i < all.length; i++) {
            all[i].classList.remove("typeActive");

        }

        // On colorie le filtre
        const item = document.getElementById(val);
        item.classList.add("typeActive");
        item.style.transition = "background-color 0.5s";

    }

    /////////////////////////////////////////////// Filtre les pages //////////////////////////////////////////
    function page(val) {

        closeNavBar();

        // Masque Les sections
        const masque = document.getElementsByClassName('bloc');
        for (i = 0; i < masque.length; i++) {
            masque[i].style.display = "none";
        }

        // Affiche
        switch (val) {
            case 'programme':
                document.getElementById('teteBouchon').style.display = "block";
                document.getElementById('tete').style.display = "block";

                document.getElementById('programmeTitre').style.display = "block";
                document.getElementById('programme').style.display = "block";
                break;

            case 'programmeLancer':
                document.getElementById('blocFicheResultat').style.display = "block";
                break;

            case 'ajoutExo':
                document.getElementById('liste').style.display = "block";
                document.getElementById('accueil').style.display = "block";
                break;

            case 'nutrition':
                document.getElementById('teteBouchon').style.display = "block";
                document.getElementById('tete').style.display = "block";

                document.getElementById('nutritionTitre').style.display = "block";
                document.getElementById('nutrition').style.display = "block";
                break;

            //par defaut l'accueil
            default:
                document.getElementById('teteBouchon').style.display = "block";
                document.getElementById('tete').style.display = "block";

                document.getElementById('liste').style.display = "block";
                document.getElementById('accueil').style.display = "block";
                break;
        }
    }

    ////////////////////////////////////// Insere dans le modal les infos /////////////////////////////////////
    function modalInfo(val) {
        let titre = document.getElementById(val).getElementsByClassName("info")[0];
        let img = document.getElementById(val).getElementsByClassName("info")[1];
        let txt = document.getElementById(val).getElementsByClassName("info")[2];

        let modalTitre = document.getElementById("titre-modal");
        let modalImg = document.getElementById("img-modal");
        let modalTxt = document.getElementById("txt-modal");


        modalTitre.innerHTML = titre.textContent;
        modalTxt.innerHTML = txt.textContent;
        modalImg.src = "document/muscle/" + img.textContent;
    }


    function closeNavBar() {
        // Masques la navbar
        const nav = document.getElementById("navbarColor01");
        nav.classList.remove("show");
    }

}