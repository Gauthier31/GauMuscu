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

if (window.screen.width >= 500) {
    document.getElementById("body").innerHTML =
        `<div class="noPhone">
            <h1 class="taille">Cette application n'est disponible que sur téléphone désolé ._.</h1>
        </div>`;
} else {
*/
const LIMIT_EXO = 20;
var TableauFiltre = [];
var typeExo = "tousExo";

// Ajoute tous les id dans tableau
for (let i = 0; i < EXO.length; i++) {
    TableauFiltre.push(EXO[i]['id']);
}

document.getElementById('tousExo').classList.add("typeActive");

getPagination();
pagination(1);

getProgramme();
getNutrition();
putStat();

// Affichage masquage des blocs de sections
page("accueil");

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Affiche la liste des exo ///////////////////////////////////////////////
function getListExercice() {
    let ligneExo = document.getElementById("ligneExo");

    for (i = 1; i < EXO.length; i++) {

        ////////////////////////////////// Mets en place les class de style ///////////////////////////////////////
        const tabStyle = EXO[i]['listMuscle'].split("-");

        // catégorie
        let classList = "";
        for (j = 0; j < tabStyle.length - 1; j++) {
            classList += tabStyle[j] + " ";
        }
        classList += tabStyle[j];

        ligneExo.innerHTML +=
            `<div class="ligneExo tousExo none ' ` + classList.toUpperCase() + ` ` + EXO[i]['nom'].toUpperCase() + ` ''" id="ligneExo` + EXO[i][0] + `">
                    <div class="ligne-img-bloc">
                        <img class="ligne-img-left" src="document/exo/` + EXO[i]['nom'] + EXO[i]['formatImg'] + `" 
                            onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                    </div>
        
                    <div>
                        <p class="taille1 fw-9 ligneTitre">` + EXO[i]["nom"] + `</p>
                        <div class="taille3 fw-6 opacity-50">
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
    const tabStyle = EXO[idExo]['listMuscle'].split("-");

    // catégorie
    let classList = "";
    for (j = 0; j < tabStyle.length - 1; j++) {
        classList += tabStyle[j] + " ";
    }

    // 
    ligneExo.innerHTML +=
        `<div class="ligneExo tousExo ' ` + classList.toUpperCase() + ` ` + EXO[idExo]['nom'].toUpperCase()
        + ` ''" id="ligneExo` + EXO[idExo]['id'] + `">
            
                    <div class="ligne-img-bloc">
                        <img class="ligne-img-left" src="document/exo/` + EXO[idExo]['nom'] + `.jpg" 
                            onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                    </div>
        
                    <div>
                        <p class="taille1 fw-9 ligneTitre">` + EXO[idExo]['nom'] + `</p>
                        <div class="taille3 fw-6 opacity-50">
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
        listExo = "";
        for (j = 1; j < PROGRAMME[i].length; j++) {

            listExo +=
                `<div class="progExo">
                    <div class="progExoBloc">
                        <div class="progExoBlocImage">
                            <img class="progExoImage" src="document/exo/` + EXO[j]['nom'] + EXO[j]['formatImg'] + `" 
                                onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                        </div>
                    </div>
                    <div class="progExoTitre">` + EXO[PROGRAMME[i][j]]['nom'] + `</div>
                </div>`;

        }

        prog.innerHTML +=
            `<div class="prog">
                <div class="progTitre">
                    <p class="depasse" onclick="programmes(` + i + `)">` + PROGRAMME[i][0] + ` --></p>
                </div>
                <div class="progExos">
                ` + listExo + `
                </div>
            </div>`;
    }
}

////////////////////////////////// Affiche les cards de Nutrition /////////////////////////////////////////
function getNutrition() {
    let nutri = document.getElementById("cardsNutrition");
    var i;

    for (i = 1; i < NUTRITION.length; i++) {

        nutri.innerHTML +=
            `<div class="col-6 col-lg-4 col-xl-3 taille3 fw-9 tousNutri '` + NUTRITION[i]["titre"].toUpperCase() + `'" id="Nutrition` + NUTRITION[i][0] + `">
                    <div class="card" onClick="nutrition(` + i + `)">

                        <div class="card-img-bloc">
                            <img class="card-img" mx-auto d-block" src="document/nutrition/` + NUTRITION[i]["titre"] + `.jpg"
                                        onerror="this.onerror=null; this.src='document/exo/` + NUTRITION[i]["titre"] + `.gif'">
                        </div>

                        <div class="card-body">
                            <p class="taille4 fw-9 depasse m-2">` + NUTRITION[i]["titre"] + `</p>

                            <p class="cardDescription taille5">` + NUTRITION[i]["description"] + `</p>

                            <!--
                            <div class="div-btnInfoCard">
                                <button type="button" class="btn btn-warning taille6 btnInfoCard" onClick="nutrition(` + i + `)">
                                    En savoir plus
                                </button>
                            </div>
                            -->

                        </div>
                    </div>
                </div > `;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////
function putStat() {
    for (let i = STAT.length; i < EXO.length; i++) {
        STAT.push([i, 0, 0]);
    }
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

    TableauFiltre = [0];

    for (let i = 1; i < EXO.length; i++) {
        if (EXO[i]['nom'].toLowerCase().includes(recherche.toLowerCase())
            && EXO[i]['listMuscle'].includes(typeExo)) {
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

////////////////////////////////////// Collapse /////////////////////////////////////
function progCollapse(obj) {

    const bloc = document.getElementById("prog" + obj.id.substring(7));
    let icon = obj.getElementsByClassName("fa-solid")[0].classList;

    if (obj.value == "up") {
        obj.value = "down";
        icon.remove("fa-chevron-up");
        icon.add("fa-chevron-down");

        bloc.getElementsByClassName("list-group-item")[0].classList.add("list-titre-bloc");

    } else {
        obj.value = "up";
        icon.remove("fa-chevron-down");
        icon.add("fa-chevron-up");

        bloc.getElementsByClassName("list-group-item")[0].classList.remove("list-titre-bloc");
    }
}

function filtreCollapse(obj) {

    let icon = obj.getElementsByClassName("fa-solid")[0].classList;

    if (obj.value == "up") {
        obj.value = "down";
        icon.remove("fa-chevron-up");
        icon.add("fa-chevron-down");

    } else {
        obj.value = "up";
        icon.remove("fa-chevron-down");
        icon.add("fa-chevron-up");
    }
}

////////////////////////////////////// Pagination /////////////////////////////////////
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
        getExercice(TableauFiltre[i]);
    }

    // si fin du tableau  -1 sur la longeur
    i = (i == TableauFiltre.length) ? i - 1 : i;

    document.getElementById("nbExo").innerHTML = "de " + start + " à " + i;

    document.getElementsByClassName("pagi-liActive")[0].classList.remove("pagi-liActive");
    document.getElementById("pagi" + numPage).classList.add("pagi-liActive");
}
