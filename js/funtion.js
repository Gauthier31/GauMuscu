// Attacher un gestionnaire d'événement à l'événement resize
window.addEventListener("resize", obtenirTailleEcran);
// Appeler la fonction une fois au chargement initial de la page
obtenirTailleEcran();

const LIMIT_EXO = 20;
var TableauFiltre = [];
var typeExo = "tousExo";

// Ajoute tous les id dans tableau
EXOS.forEach(exo => {
    TableauFiltre.push(exo['id']);
});

document.getElementById('tousExo').classList.add("typeActive");

getPagination();
pagination(1);

getProgramme();
getNutrition();

// Affichage masquage des blocs de sections
page("accueil");

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Affiche la liste des exo ///////////////////////////////////////////////
function getExercice(idExo) {
    let ligneExo = document.getElementById("ligneExo");


    ////////////////////////////////// Mets en place les class de style ///////////////////////////////////////
    let exoAdd = EXOS.filter(EXOS => EXOS['id'] === idExo)[0]
    const tabStyle = exoAdd['listMuscle'].split("-");

    // catégorie
    let classList = "";
    for (j = 0; j < tabStyle.length - 2; j++) {
        classList += tabStyle[j] + ", ";
    }
    classList += tabStyle[j];

    // 
    ligneExo.innerHTML +=
        `<div class="ligneExo tousExo '` + classList.toUpperCase() + ` ` + exoAdd['nom'].toUpperCase()
        + `''" id="ligneExo` + exoAdd['id'] + `">
            
                    <div class="ligne-img-bloc">
                        <img class="ligne-img-left" src="document/exo/` + exoAdd['nom'] + `.jpg" 
                            onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                    </div>
        
                    <div>
                        <p class="taille1 fw-9 ligneTitre">` + exoAdd['nom'] + `</p>
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

    for (i = 1; i < PROGRAMMES.length; i++) {
        listExo = "";

        for (j = 1; j < PROGRAMMES[i].length; j++) {

            let exoAdd = EXOS.filter((EXOS) => EXOS['id'] === PROGRAMMES[i][j])[0]
            listExo +=
                `<div class="progExo">
                    <div class="progExoBloc">
                        <div class="progExoBlocImage">
                            <img class="progExoImage" src="document/exo/` + exoAdd['nom'] + exoAdd['formatImg'] + `" 
                                onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                        </div>
                    </div>
                    <div class="progExoTitre">` + exoAdd['nom'] + `</div>
                </div>`;
        }

        prog.innerHTML +=
            `<div class="prog tousProg '` + PROGRAMMES[i][0].toUpperCase() + `'">
                <div class="progTitre">
                    <p class="depasse" onclick="programmes(` + i + `)">` + PROGRAMMES[i][0] + `</p>
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

    for (i = 1; i < NUTRITIONS.length; i++) {

        nutri.innerHTML +=
            `<div class="col-6 col-lg-4 col-xl-3 taille3 fw-9 tousNutri '` + NUTRITIONS[i]["titre"].toUpperCase() + `'" id="Nutrition` + NUTRITIONS[i][0] + `">
                    <div class="card" onClick="nutrition(` + i + `)">

                        <div class="card-img-bloc">
                            <img class="card-img" mx-auto d-block" src="document/nutrition/` + NUTRITIONS[i]["titre"] + `.jpg"
                                        onerror="this.onerror=null; this.src='document/exo/` + NUTRITIONS[i]["titre"] + `.gif'">
                        </div>

                        <div class="card-body">
                            <p class="taille4 fw-9 depasse m-2">` + NUTRITIONS[i]["titre"] + `</p>

                            <p class="cardDescription taille5">` + NUTRITIONS[i]["description"] + `</p>
                        </div>
                    </div>
                </div > `;
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

    for (let i = 1; i < EXOS.length; i++) {
        if (EXOS[i]['nom'].toLowerCase().includes(recherche.toLowerCase())
            && EXOS[i]['listMuscle'].includes(typeExo)) {
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

////////////////////////////////////// Observeur /////////////////////////////////////
// Fonction pour récupérer la taille de l'écran
function obtenirTailleEcran() {

    console.log(window.screen.width, window.screen.height)

    // Si format est Horizontal
    if (window.screen.width > window.screen.height) {
        document.getElementById("pageErr").style.display = "block";

        // Si format est Vertical
    } else {
        document.getElementById("pageErr").style.display = "none";
    }
}