console.log(window.screen.width);

try {
    //screen.lockOrientation("orientation");
    //screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
} catch (err) {
    console.log(err);
}

if (window.screen.width >= 500) {
    document.getElementById("body").innerHTML =
        `<div class="noPhone">
            <h1 class="taille">Cette application n'est disponible que sur téléphone désolé ._.</h1>
        </div>`;
} else {

    const item = document.getElementById('tousExo').classList.add("typeActive");

    getExercice();
    getProgramme();
    getNutrition();
    getMusique()

    // Affichage masquage des blocs de sections
    page("accueil");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////// Affiche la liste des exo ///////////////////////////////////////////////
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
                `<div class="ligneExo tousExo ` + classList + ` '` + BD_Exo[i][1].toLowerCase() + `'" id="ligneExo` + BD_Exo[i][0] + `">
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

    ///////////////////////////////// Met en place les programmes /////////////////////////////////////////////
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

            prog.innerHTML += `<div class="col-12 col-lg-4 col-xl-3 tousProg '` + BD_Programme[i][0].toLowerCase() + `'">
                <ol class="list-group">
                <li class="list-group-item taille list-titre-bloc">
                    <p class="list-titre depasse">` + BD_Programme[i][0] + `</p>
                    <button type="button" class="btn orange btn-prog" onclick="programmes(` + i + `)">C'est parti</button>
                </li>`
                + txt + `   
                </ol></div>`;
        }
    }

    ////////////////////////////////// Affiche les cards de Nutrition /////////////////////////////////////////
    function getNutrition() {
        let nutri = document.getElementById("cardsNutrition");
        var i;

        for (i = 1; i < BD_Nutrition.length; i++) {

            nutri.innerHTML +=
                `<div class="col-6 col-lg-4 col-xl-3 taille3 fw-9 tousNutri '` + BD_Nutrition[i][1].toLowerCase() + `'" id="Nutrition` + BD_Nutrition[i][0] + `">
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

    ///////////////////////////////////////// Mets en place les musiques //////////////////////////////////////
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
        const cache = document.getElementsByClassName('tousExo');
        for (i = 0; i < cache.length; i++) {
            cache[i].classList.add("none");
        }

        // On affiche celle qui correspondent au filtre
        const affiche = document.getElementsByClassName(val);
        for (i = 0; i < affiche.length; i++) {
            affiche[i].classList.remove("none");
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

        gestionPage(1);

        // Masque Les sections
        const masque = document.getElementsByClassName('bloc');
        for (i = 0; i < masque.length; i++) {
            masque[i].classList.add("none");
            masque[i].classList.remove("block");
        }

        // Affiche
        switch (val) {
            case 'programme':
                document.getElementById('teteBouchon').classList.remove("none");
                document.getElementById('tete').classList.remove("none");
                document.getElementById('teteBouchon').classList.add("block");
                document.getElementById('tete').classList.add("block");

                document.getElementById('programmeTitre').classList.remove("none");
                document.getElementById('programme').classList.remove("none");
                document.getElementById('programmeTitre').classList.add("block");
                document.getElementById('programme').classList.add("block");
                break;

            case 'programmeLancer':
                document.getElementById('blocFicheResultat').classList.remove("none");
                document.getElementById('blocFicheResultat').classList.add("block");
                break;

            case 'ajoutExo':
                document.getElementById('liste').classList.remove("none");
                document.getElementById('accueil').classList.remove("none");
                document.getElementById('liste').classList.add("block");
                document.getElementById('accueil').classList.add("block");
                break;

            case 'nutrition':
                document.getElementById('teteBouchon').classList.remove("none");
                document.getElementById('tete').classList.remove("none");
                document.getElementById('teteBouchon').classList.add("block");
                document.getElementById('tete').classList.add("block");

                document.getElementById('nutritionTitre').classList.remove("none");
                document.getElementById('nutrition').classList.remove("none");
                document.getElementById('nutritionTitre').classList.add("block");
                document.getElementById('nutrition').classList.add("block");
                break;

            //par defaut l'accueil
            default:
                document.getElementById('teteBouchon').classList.remove("none");
                document.getElementById('tete').classList.remove("none");
                document.getElementById('teteBouchon').classList.add("block");
                document.getElementById('tete').classList.add("block");

                document.getElementById('liste').classList.remove("none");
                document.getElementById('accueil').classList.remove("none");
                document.getElementById('liste').classList.add("block");
                document.getElementById('accueil').classList.add("block");
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

    function gestionPage(numPage) {

        const p1 = document.getElementsByClassName('page1');
        const p2 = document.getElementsByClassName('page2');

        switch (numPage) {
            case 1:

                p1[0].classList.remove("none");
                p2[0].classList.add("gaucheOutClass");
                setTimeout(masquePage2, 1000);
                break;

            case 2:

                p2[0].classList.add("gaucheInClass");
                p2[0].classList.remove("none");
                setTimeout(masquePage1, 1000);
                break;
        }

    }

    function masquePage1() {
        const p1 = document.getElementsByClassName('page1');
        p1[0].classList.add("none");

        const p2 = document.getElementsByClassName('page2');
        p2[0].classList.remove("gaucheInClass");
    }

    function masquePage2() {
        const p2 = document.getElementsByClassName('page2');
        p2[0].classList.add("none");
        p2[0].classList.remove("gaucheOutClass");
    }

    function filtreExo(val) {

        // On cache toute les cards
        const cache = document.getElementsByClassName('tousExo');
        for (i = 0; i < cache.length; i++) {
            cache[i].classList.remove("none");
        }

        filtre2Etape(val, "Exo");
    }

    function filtreProg(val) {

        // On cache toute les cards
        const cache = document.getElementsByClassName('tousProg');
        for (i = 0; i < cache.length; i++) {
            cache[i].classList.remove("none");
        }

        filtre2Etape(val, "Prog");
        console.log(val);
    }

    function filtreNutri(val) {

        // On cache toute les cards
        const cache = document.getElementsByClassName('tousNutri');
        for (i = 0; i < cache.length; i++) {
            cache[i].classList.remove("none");
        }

        filtre2Etape(val, "Nutri");
    }

    function filtre2Etape(val, obj) {

        val = val.toLowerCase();

        let i;
        let classTxt;
        const cache = document.getElementsByClassName('tous' + obj);

        for (i = 0; i < cache.length; i++) {

            classTxt = cache[i].className;

            if (!classTxt.includes(val)) {
                cache[i].classList.add("none");
            } else {
                console.log(classTxt);
            }
        }
    }

}