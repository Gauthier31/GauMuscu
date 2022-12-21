console.log(window.screen.width);

/*
setInterval(function () {
    if (window.screen.width >= 500) {
        document.getElementById("body").innerHTML =
            `<div class="noPhone">
                <h1 class="taille">Cette application n'est disponible que sur téléphone désolé ._.</h1>
            </div>`;
    } else {

    }
}, 5000)
*/
if (window.screen.width >= 500) {
    document.getElementById("body").innerHTML =
        `<div class="noPhone">
            <h1 class="taille">Cette application n'est disponible que sur téléphone désolé ._.</h1>
        </div>`;
} else {

    const LIMIT_EXO = 20;
    var TableauFiltre = [];
    var typeExo;

    // Ajoute tous les id dans tableau
    for (let i = 0; i < EXO.length; i++) {
        TableauFiltre.push(EXO[i][0]);
    }

    document.getElementById('tousExo').classList.add("typeActive");

    getPagination();
    pagination(1);

    getProgramme();
    getNutrition();
    getMusique();

    // Affichage masquage des blocs de sections
    page("accueil");

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////// Affiche la liste des exo ///////////////////////////////////////////////
    function getListExercice() {
        let ligneExo = document.getElementById("ligneExo");

        for (i = 1; i < EXO.length; i++) {

            ////////////////////////////////// Mets en place les class de style ///////////////////////////////////////
            const tabStyle = EXO[i][3].split("-");

            // catégorie
            let classList = "";
            for (j = 0; j < tabStyle.length - 1; j++) {
                classList += tabStyle[j] + " ";
            }
            classList += tabStyle[j];

            ligneExo.innerHTML +=
                `<div class="ligneExo tousExo none ' ` + classList.toUpperCase() + ` ` + EXO[i][1].toUpperCase() + ` ''" id="ligneExo` + EXO[i][0] + `">
                    <div class="ligne-img-bloc">
                        <img class="ligne-img-left" src="document/exo/` + EXO[i][1] + `.jpg" 
                            onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                    </div>
        
                    <div>
                        <p class="taille1 fw-6 ligneTitre">` + EXO[i][1] + `</p>
                        <div class="taille3 opacity-50">
                            ` + classList + `
                        </div>
                    </div>
                    
                    <div class="triangle1" onclick="addExo(` + i + `)"></div>
                </div>`
        }
    }

    function getExercice(idExo) {
        let ligneExo = document.getElementById("ligneExo");


        ////////////////////////////////// Mets en place les class de style ///////////////////////////////////////
        const tabStyle = EXO[idExo][3].split("-");

        // catégorie
        let classList = "";
        for (j = 0; j < tabStyle.length - 1; j++) {
            classList += tabStyle[j] + " ";
        }

        // ` + EXO[idExo][1] + `
        ligneExo.innerHTML +=
            `<div class="ligneExo tousExo ' ` + classList.toUpperCase() + ` ` + EXO[idExo][1].toUpperCase()
            + ` ''" id="ligneExo` + EXO[idExo][0] + `">
            
                    <div class="ligne-img-bloc">
                        <img class="ligne-img-left" src="document/exo/defautExo.jpg" 
                            onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                    </div>
        
                    <div>
                        <p class="taille1 fw-6 ligneTitre">` + EXO[idExo][1] + `</p>
                        <div class="taille3 opacity-50">
                            ` + classList + `
                        </div>
                    </div>
                    
                    <div class="triangle1" onclick="addExo(` + idExo + `)"></div>
                </div>`
    }

    ///////////////////////////////// Met en place les programmes /////////////////////////////////////////////
    function getProgramme() {

        let prog = document.getElementById("prog");

        for (i = 1; i < PROGRAMME.length; i++) {
            txt = "";
            for (j = 1; j < PROGRAMME[i].length; j++) {

                txt +=
                    `<li class="list-group-item taille2">` + j + `. ` + EXO[PROGRAMME[i][j]][1]
                    + `</li>`;

            }

            prog.innerHTML +=
                `<div class="col-12 col-lg-4 col-xl-3 tousProg '` + PROGRAMME[i][0].toUpperCase() + `'">
                    <ol class="list-group" id="prog` + i + `">
                    <li class="list-group-item taille list-titre-bloc">
                        <p class="list-titre depasse">` + PROGRAMME[i][0] + `</p>
                        <button class="bloc-i" id="progBtn` + i + `" onClick="progCollapse(` + i + `)"
                        
                        type="button" data-bs-toggle="collapse" data-bs-target="#progList` + i + `"
                        aria-controls="progList` + i + `" aria-expanded="false" aria-label="Toggle progList` + i + `">

                            <i class="fa-solid fa-chevron-down"></i>
                            <i class="fa-solid fa-chevron-up none"></i>
                        </button>
                        <button type="button" class="btn orange btn-prog" onclick="programmes(` + i + `)">C'est parti</button>
                    </li>
                    <div class="list-exo collapse" id="progList` + i + `">` + txt + `</div>   
                    </ol>
                </div>`;
        }
    }

    ////////////////////////////////// Affiche les cards de Nutrition /////////////////////////////////////////
    function getNutrition() {
        let nutri = document.getElementById("cardsNutrition");
        var i;

        for (i = 1; i < NUTRITION.length; i++) {

            nutri.innerHTML +=
                `<div class="col-6 col-lg-4 col-xl-3 taille3 fw-9 tousNutri '` + NUTRITION[i][1].toUpperCase() + `'" id="Nutrition` + NUTRITION[i][0] + `">
                    <div class="card">

                        <img class="card-img-bloc" mx-auto d-block" src="document/nutrition/` + NUTRITION[i][1] + `.jpg"
                                onerror="this.onerror=null; this.src='document/exo/` + NUTRITION[i][1] + `.gif'">

                        <div class="card-body">
                            <p class="taille4 fw-9 depasse m-2">` + NUTRITION[i][1] + `</p>

                            <p class="cardDescription taille5">` + NUTRITION[i][2] + `</p>

                            <div class="div-btnInfoCard">
                                <button type="button" class="btn btn-warning taille6 btnInfoCard" onClick="nutrition(` + i + `)">
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
        typeExo = val;

        document.getElementsByClassName('typeActive')[0].classList.remove("typeActive");

        // On colorie le filtre
        const item = document.getElementById(val);
        item.classList.add("typeActive");
        item.style.transition = "background-color 0.5s";

        filtreExo();
    }

    function filtreExo() {

        let recherche = document.getElementById("inputExo").value;

        TableauFiltre = []

        for (let i = 1; i < EXO.length; i++) {
            if (EXO[i][1].toLowerCase().includes(recherche.toLowerCase())
                && EXO[i][3].includes(typeExo)) {
                TableauFiltre.push(i);
            }
        }
        getPagination();
        pagination(1);
    }

    // Cache tout les programmes
    function filtreProg(val) {

        // On cache toute les cards
        const cache = document.getElementsByClassName('tousProg');
        for (i = 0; i < cache.length; i++) {
            cache[i].classList.add("none");
        }

        filtre2Etape(val, "Prog");
    }

    // Cache tout les plats
    function filtreNutri(val) {

        // On cache toute les cards
        const cache = document.getElementsByClassName('tousNutri');
        for (i = 0; i < cache.length; i++) {
            cache[i].classList.add("none");
        }

        filtre2Etape(val, "Nutri");
    }

    function filtre2Etape(val, obj) {

        val = val.toUpperCase();

        let classTxt;
        const cache = document.getElementsByClassName('tous' + obj);

        for (i = 0; i < cache.length; i++) {

            filtreclass = cache[i].className.split("'");
            classTxt = filtreclass[1];

            if (classTxt.includes(val)) {
                cache[i].classList.remove("none");
            }
        }
    }

    /////////////////////////////////////////////// Filtre les pages //////////////////////////////////////////
    function page(val) {

        if (window.screen.width >= 500) {
            document.getElementById("body").innerHTML =
                `<div class="noPhone">
                    <h1 class="taille">Cette application n'est disponible que sur téléphone désolé ._.</h1>
                </div>`;
            document.getElementById("test").innerHTML += "1";
        }
        document.getElementById("test").innerHTML += "2";

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
        const nav = document.getElementById("nav1");
        nav.classList.remove("show");
    }

    function gestionPage(numPage) {

        const p1 = document.getElementById('page1');
        const p2 = document.getElementById('page2');
        const p3 = document.getElementById('page3');

        switch (numPage) {
            case 1:

                p1.classList.remove("none");
                p2.classList.add("gaucheOutClass");
                setTimeout(function () {
                    masquePage(2);
                }, 1000);

                p3.classList.add("gaucheOutClass");
                setTimeout(function () {
                    masquePage(3);
                }, 1000);
                break;

            case 2:

                p2.classList.add("gaucheInClass");
                p2.classList.remove("none");
                setTimeout(function () {
                    masquePage(1);
                }, 1000);
                break;

            case 3:

                p3.classList.add("gaucheInClass");
                p3.classList.remove("none");
                setTimeout(function () {
                    masquePage(1);
                }, 1000);
                break;
        }

    }

    function masquePage(numPage) {

        const p1 = document.getElementById('page1');
        const p2 = document.getElementById('page2');
        const p3 = document.getElementById('page3');

        switch (numPage) {
            case 1:
                p2.classList.remove("gaucheInClass");
                break;

            case 2:
                p2.classList.add("none");
                p2.classList.remove("gaucheOutClass");
                break;

            case 3:
                p3.classList.add("none");
                p3.classList.remove("gaucheOutClass");
                break;
        }
    }

    function progCollapse(id) {

        const bloc = document.getElementById("prog" + id);
        const btn = document.getElementById("progBtn" + id);

        if (btn.value == "up") {
            btn.getElementsByClassName("fa-chevron-up")[0].classList.add("none");
            btn.getElementsByClassName("fa-chevron-down")[0].classList.remove("none");
            btn.value = "down";

            bloc.getElementsByClassName("list-group-item")[0].classList.add("list-titre-bloc");
        } else {
            btn.getElementsByClassName("fa-chevron-down")[0].classList.add("none");
            btn.getElementsByClassName("fa-chevron-up")[0].classList.remove("none");
            btn.value = "up";

            bloc.getElementsByClassName("list-group-item")[0].classList.remove("list-titre-bloc");
        }


    }

    // NB de page par rapport au tableau
    function getPagination() {

        const pagination = document.getElementById("pagination");

        pagination.innerHTML =
            `<li class="pagi-li" onClick="pagination(1)" id="pagi1">
                    <a class="pagi-a" href=#teteBouchon>1</a>
                </li>`;

        for (let i = 2; (i - 1) * LIMIT_EXO < TableauFiltre.length; i++) {
            pagination.innerHTML +=
                `<li class="pagi-li" onClick="pagination(` + i + `)" id="pagi` + i + `">
                    <a class="pagi-a" href=#teteBouchon>` + i + `</a>
                </li>`;
        }

        document.getElementById('pagi1').classList.add("pagi-liActive");
    }

    // Affiche par rapport a la page
    function pagination(numPage) {
        // On supprime les exos
        document.getElementById("ligneExo").innerHTML = "";

        let end = numPage * LIMIT_EXO;
        let start = end - LIMIT_EXO + 1;
        let i = start;

        // Affiche l'exo compris dans le tableau
        for (i; i < TableauFiltre.length && i < end; i++) {
            console.log(i);
            getExercice(TableauFiltre[i]);
        }

        // si fin du tableau  -1 sur la longeur
        i = (i == TableauFiltre.length) ? i - 1 : i;

        document.getElementById("nbExo").innerHTML = "de " + start + " à " + i;

        document.getElementsByClassName("pagi-liActive")[0].classList.remove("pagi-liActive");
        document.getElementById("pagi" + numPage).classList.add("pagi-liActive");
    }

}
