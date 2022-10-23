const item = document.getElementById('tous').classList.add("typeActive");

// Affichage masquage des blocs de sections
page("accueil");


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Affiche la liste des exo //////////////////////////////////////////////////////

let ligneExo = document.getElementById("ligneExo");
var i;

for (i = 1; i < BD_Exo.length; i++) {

    ////////////////////////////////// Mets en place les class de style ///////////////////////////////////////
    const tabStyle = BD_Exo[i][3].split("-");

    let classList = "";

    for (j = 0; j < tabStyle.length - 1; j++) {
        classList += tabStyle[j] + ", ";
    }
    classList += tabStyle[j];

    ligneExo.innerHTML +=
        `<div class="ligneExo tous ` + classList + `" id="ligneExo` + BD_Exo[i][0] + `">
            <div class="ligne-img-bloc">
                <img class="ligne-img-left" src="document/exo/` + BD_Exo[i][1] + `.jpg" alt="` + BD_Exo[i][1] + `"/>
            </div>

            <div class="ligne-txt">
                <button class="btnInfoExo">Info</button>

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

////////////////////////////////// Affiche les cards de Nutrition //////////////////////////////////////////////////////

let nutri = document.getElementById("cardsNutrition");
var i;

for (i = 1; i < BD_Nutrition.length; i++) {

    nutri.innerHTML +=
        `<div class="col-6 col-lg-4 col-xl-3 tous taille3 fw-9" id="Nutrition` + BD_Nutrition[i][0] + `">
                    <div class="card">

                        <img class="card-img-bloc" mx-auto d-block" src="document/nutrition/` + BD_Nutrition[i][1] + `.jpg"
                            alt="` + BD_Nutrition[i][1] + `">

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

///////////////////////////////// Met en place les programes //////////////////////////////////////////////

let prog = document.getElementById("prog");

for (i = 0; i < BD_Programme.length; i++) {
    txt = "";
    for (j = 1; j < BD_Programme[i].length; j++) {

        txt +=
            `<li class="list-group-item taille2">` + j + `. ` + BD_Exo[BD_Programme[i][j]][1]
            //+ ` (id = ` + BD_Exo[BD_Programme[i][j]][0] + `)
            + `</li>`;

    }

    prog.innerHTML += `<div class="col-12 col-lg-4 col-xl-3">
            <ol class="list-group">
            <li class="list-group-item taille depasse">` + BD_Programme[i][0] + `
                <button type="button" class="btn orange btn-prog" onclick="programmes(` + i + `)">C'est parti</button>
            </li>`
        + txt + `   
            </ol></div>`;
}

///////////////////////////////////////// Mets en place les musiques //////////////////////////////////////////////

const listMusique = document.getElementById("listMusique");

for (let i = 0; i < BD_Musique.length; i++) {
    listMusique.innerHTML +=
        `<u>` + BD_Musique[i] + `</u>
        <audio controls src="document/musique/` + BD_Musique[i] + `">
            <a href="document/musique/` + BD_Musique[i] + `">
                Télécharger
            </a>
        </audio>
        <br/><br/>`;
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

    // Masques la navbar
    const nav = document.getElementById("navbarColor01");
    nav.classList.remove("show");

    // Masque Les sections
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }

    // Affiche
    document.getElementById('teteBouchon').style.display = "block";
    document.getElementById('tete').style.display = "block";

    if (val == "accueil") {
        document.getElementById('liste').style.display = "block";
        document.getElementById('accueil').style.display = "block";

    } else if (val == "programme") {
        document.getElementById('programmeTitre').style.display = "block";
        document.getElementById('programme').style.display = "block";

    } else if (val == "nutrition") {
        document.getElementById('nutritionTitre').style.display = "block";
        document.getElementById('nutrition').style.display = "block";
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








// Declaration variable
var exo;            // num exo 
var numExo = 1;     // enieme exo
var rep = 1;        // num rep 
var total = 0;      // temps en sec
var boucle;         // boucle 
var programme;      // num du prog choisi 

var btnExo = "";
var progresseBar = "";

var serieNext = 0; //Numérode la série suivant en fonction de l'exo

// Liste des exo
// @numProg numéro du programme
function programmes(numProg) {
    // Masque
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }

    exo = BD_Programme[numProg][1];
    btnExo = "";
    progresseBar = "";

    // btn lancement du programme
    const affiche = document.getElementById('btnProg');
    affiche.style.display = "block";
    affiche.innerHTML =
        `<button class="btn btn-dark position-absolute top-50 start-50 translate-middle btn-module" data-bs-toggle="modal" 
        href="#exo` + BD_Programme[numProg][1] + `"  onclick="ficheAffiche()">
            Lancez le programme
        </button>`;

    ficheInitialisation(numProg);


    const body = document.getElementById('body');
    // Affiche  modal 1 par 1
    for (i = 1; i < BD_Programme[numProg].length; i++) {

        // On prépare tab stat
        //txt = BD_Stat[i][0] + "_stat";
        let tab = "";
        let exoTab;
        let serieTab

        for (j = 1; j < BD_Stat[i].length; j += 2) {

            exoTab = BD_Programme[numProg][i];
            serieTab = (j + 1) / 2;

            tab +=
                `<div class="lineTab" id="exo` + exoTab + `rep` + serieTab + `">
                    <div class="caseTab_4 fw-9">` + serieTab + `</div>
                    <div class="caseTab_4"><input id="exo` + exoTab + `rep` + serieTab + `-Repetition" type="number" value="` + BD_Stat[exoTab][j] + `"/></div>
                    <div class="caseTab_4"><input id="exo` + exoTab + `rep` + serieTab + `-Poids" type="number" value="` + BD_Stat[exoTab][j + 1] + `"/></div>
                    <div class="caseTab_4"><button class="btn-module4" id="exo` + exoTab + `rep` + serieTab + `-Avis" 
                        onclick="avis(` + exoTab + `, ` + serieTab + `)" value="=">
                        <i class="fa-solid fa-equals"></i></button>
                    </div>
                </div> `;
        }

        // On prépare la progresse bar

        // Pour chaque exo = btn
        btnExo = "";
        for (j = 1; j < BD_Programme[numProg].length; j++) {

            btnExo +=
                `<button type = "button"
                    onclick = "exoSuivant(` + BD_Programme[numProg][j] + `)"
                    class="roundExo roundClass` + BD_Programme[numProg][j] + ` btn btn-sm"
                    style = "left: ` + (100 * (j - 1) / (BD_Programme[numProg].length - 2)) + `% ! important"
                    data - bs - toggle="tooltip"
                    data - bs - placement="bottom"
                    data - bs - title="` + BD_Exo[BD_Programme[numProg][i]][1] + `" >

                        ` + j + ` 
                </button> `;
        }

        // + (100 * (i - 1) / (BD_Programme[numProg].length - 2)) +
        progresseBar =
            `<div class="modal-header" >
                <div class="position-relative m-4 progBar">
                    <div class="progress" style="height: 5px;">
                        <div id="progBar" class="progress-bar bg-warning" role="progressbar" aria-label="Progress"
                            style="width: 100%;">
                        </div>
                    </div>
                    ` + btnExo + `
                </div>
            </div> `;

        body.innerHTML +=
            `<div class="modal fade" id = "exo` + BD_Programme[numProg][i] + `" tabindex = "-1" aria - labelledby="exampleExo` + BD_Programme[numProg][i] + `" aria - modal="true" role = "dialog" >

                <div class="modal-dialog modal-dialog-centered modalExo">
                    <div class="modal-content modalExoIn">

                        ` + progresseBar + `

                        <div class="modal-header">
                            <p class="modal-title taille fw-9 depasse" id="titre-modal">` + BD_Exo[BD_Programme[numProg][i]][1] + `</p>
                            <button type="button" id="btnClose` + BD_Programme[numProg][i] + `" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body taille2 detail2">
                            <div class="card-img-bloc2">
                                <img class="imgExo mx-auto d-block" src="document/exo/` + BD_Exo[BD_Programme[numProg][i]][1] + `.jpg" alt="` + BD_Exo[BD_Programme[numProg][i]][1] + `" />
                            </div>
                            <hr class="hr-orange" />

                            <div class="tableStat" id="` + BD_Exo[BD_Programme[numProg][i]][0] + `_statModule">
                                <div class="lineTabHead">
                                    <div class="caseTab_4 fw-9">Serie</div>
                                    <div class="caseTab_4 fw-9">Rep</div>
                                    <div class="caseTab_4 fw-9">Kilos</div>
                                    <div class="caseTab_4 fw-9"></div>
                                </div>
                                ` + tab + `
                            </div>




                            <button onclick="addSerie(` + BD_Exo[BD_Programme[numProg][i]][0] + `)" class="btn btn-module3"> <i class="fa-solid fa-plus"></i> </button>

                            <div class="collapse" id="collapseExample">
                                <div class="taille4 p-4">
                                    Imperio conplures aliis et diluere aurem nec
                                    praedoctis reginae stimulis resedit resedit defensi
                                    Caesarem Caesarem essent hinc cursim hinc et diluere
                                    obiecta quid nec inde per subinde ad cuius nec
                                    quaesitum permissi stimulis periere diluere iudex
                                    cuius essent inde imaginarius.
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-dark btn-module2" onclick="stop()" id="btn-MA` + BD_Programme[numProg][i] + `" value="Marche">Marche</button>
                            
                            <div class="temps">
                                <p id="temps` + BD_Programme[numProg][i] + `" class="taille fw-9">00:00,00</p>
                                <p id="temps` + BD_Programme[numProg][i] + `.1" class="temps1">00:00,00</p>
                                <p id="temps` + BD_Programme[numProg][i] + `.2" class="temps1">00:00,00</p>
                            </div>

                            <button class="btn btn-warning btn-module2" onclick="suivant(` + BD_Programme[numProg][i + 1] + `)">Suivant</button>

                            <button id="btnNextExo` + BD_Programme[numProg][i] + `"
                                class="btn btn-dark btn-module" onclick="suivant2(` + BD_Programme[numProg][i] + `)"
                                data-bs-target="#exo` + BD_Programme[numProg][i] + `" data-bs-toggle="modal"
                                style="display: none">
                                Exercice suivant
                            </button>
                        </div>
                    </div>
                </div>
            </div > `;
    }


    // Colore la première ligne
    exo = BD_Programme[numProg][1];
    rep = 1;
    console.log("exo" + exo + "rep" + rep);
    document.getElementById("exo" + exo + "rep" + rep).classList.add("ligneTabColor");
}

// Change de série
// exoNext numéro de l'exo suivant
function suivant(exoNext) {
    try {

        // On écrit dans la fiche les résultats
        if (rep != 0) {
            fiche(exo, rep);
        }

        // Change exo et mets compteur a 0
        rep++;
        total = 0;

        // Couleur
        document.getElementById("temps" + exo).innerHTML = "00:00,00";
        var ligne = "exo" + exo + "rep" + rep;
        var ligne2 = "exo" + exo + "rep" + (rep - 1);

        if (rep > 1) {
            document.getElementById(ligne2).classList.remove("ligneTabColor");
        }
        document.getElementById(ligne).classList.add("ligneTabColor");

        // clean et lance nouveau chrono
        clear();
        temps();
        document.getElementById("temps" + exo + ".1").innerHTML = dateActu();
    } catch (err) {
        console.log("Erreur function suivant()");

        // On colorie le round précédent (celui qu'on vient de finir)
        colorRoundExo(exo);

        exoSuivant(exoNext);
    }
}

// Appuie sur le bouton pour changer de module et appelle la fonction suivant2(exoNext)
// exoNext numéro de l'exo suivant
function exoSuivant(exoNext) {
    try {
        document.getElementById("btnNextExo" + exoNext).click();
    } catch (err) {
        //console.log(err);
        console.log("Erreur function exoSuivant()");
        document.getElementById("btnClose" + exo).click();
        clear();
    }
}

// change d'exo
// exoNext numéro de l'exo suivant
function suivant2(exoNext) {
    exo = exoNext;
    rep = 0;
    total = 0;

    numExo++;

    serieNext = 0;

    ancien = document.getElementById("progBar" + (exo - 1));

    suivant(exoNext);
}

// Lance le chrone
function temps() {
    const time = document.getElementById("temps" + exo);

    boucle = setInterval(function () {
        total++;
        var min = Math.floor(total / 600);
        var sec = Math.floor(total / 10 % 60);
        var micro = total % 10;

        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        micro = (micro < 10) ? "0" + micro : micro;

        time.innerHTML = min + ":" + sec + "," + micro;
    }, 100);
}

// Stop le chrono
function stop() {
    var btn = document.getElementById("btn-MA" + exo);

    // Lance chrono
    if (btn.value == "Marche") {
        temps(exo);

        btn.innerHTML = "Arret";
        btn.value = "Arret";

        // Stop chrono
    } else {
        clearInterval(boucle);
        document.getElementById("temps" + exo + ".2").innerHTML = dateActu();

        btn.innerHTML = "Marche";
        btn.value = "Marche";

    }
}

// Renvoie le temps du jour
function dateActu() {

    const d = new Date();

    let nowH = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    let nowM = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    let nowS = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds();

    return nowH + ":" + nowM + ":" + nowS;
}

// Clean le chrono et initialise le btn marche arret
function clear() {
    clearInterval(boucle);
    var btn = document.getElementById("btn-MA" + exo);
    btn.innerHTML = "Arret";
    btn.value = "Arret";
}

// AJoute une serie a l'exo
function addSerie(numExo) {

    var tableau = document.getElementById(numExo + "_statModule");

    if (serieNext == 0) {
        serieNext = (BD_Stat[numExo].length + 1) / 2;
    } else {
        serieNext++;
    }

    tableau.innerHTML +=
        `<div class="lineTab" id="exo` + numExo + `rep` + serieNext + `">
            <div class="caseTab_4 fw-9">` + serieNext + `</div>
            <div class="caseTab_4"><input id="exo` + numExo + `rep` + serieNext + `-Repetition" type="number" value="` + BD_Stat[numExo][BD_Stat[numExo].length - 2] + `"/></div>
            <div class="caseTab_4"><input id="exo` + numExo + `rep` + serieNext + `-Poids" type="number" value="` + BD_Stat[numExo][BD_Stat[numExo].length - 1] + `"/></div>
            <div class="caseTab_4">
                <button class="btn-module4" id="exo` + numExo + `rep` + serieNext + `-Avis" onclick="avis(` + numExo + `, ` + serieNext + `)" value="=">
                    <i class="fa-solid fa-equals"></i>
                </button>
            </div>
        </div> `;
}

// Masque tout les blocs pour afficher que la fiche de resultat
function ficheAffiche() {
    // Masque tout les blocs
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }

    let blocFicheResultat = document.getElementById("blocFicheResultat");
    blocFicheResultat.style.display = "block";
}

// Initialise la page des résultats
// @numProg numéro du programme
function ficheInitialisation(numProg) {
    let ficheResultat = document.getElementById("ficheResultat");

    // Date de créa
    var today = new Date();

    ficheResultat.innerHTML =
        `<p class="text-center taille fw-9" > `
        + BD_Programme[numProg][0] + ` : `
        + today.toLocaleDateString("en-US") +
        `</p >
        <div class="col-6" style="display: none">`;
}

// On écrit dans la fiche les résultats
// @exo numéro de l'exercice
// @rep numéro de la répétition
function fiche(exo, rep) {
    let ficheResultat = document.getElementById("ficheResultat");

    // On écrit le titre de l'exo
    if (rep == 1) {
        ficheResultat.innerHTML +=
            `</div>
            <div class="col-6" id="colExo` + exo + `">
            <p class="taille2 txtExo fw-600 depasse">` + BD_Exo[exo][1] + `</p>
        <hr class="hr-orange"/>
        
        <div class="lineMiniTabHead">
            <p class="caseMiniTab_3 fw-9">Rep</p>
            <p class="caseMiniTab_3 fw-9">Kilos</p>
            <p class="caseMiniTab_3 fw-9">Durée</p>
        </div>`;
    }

    // prends les valeurs de la ligne du tableau
    let nbRep = document.getElementById("exo" + exo + "rep" + rep + "-Repetition").value;
    let nbPoids = document.getElementById("exo" + exo + "rep" + rep + "-Poids").value;
    let avis = document.getElementById("exo" + exo + "rep" + rep + "-Avis"); let couleur = "";
    if (avis.value == "+") {
        couleur = "fd-vert";

    } else if (avis.value == "-") {
        couleur = "fd-orange";
    }

    // on prends le temps
    let tempsRep = document.getElementById("temps" + exo).textContent;

    // On écrit la def de la rep
    let colExo = document.getElementById("colExo" + exo);



    colExo.innerHTML +=
        `<div class="lineMiniTab ` + couleur + `">
            <p class="caseMiniTab_3">` + nbRep + `</p>
            <p class="caseMiniTab_3">` + nbPoids + `</p>
            <p class="caseMiniTab_3">` + tempsRep + `</p>
        </div>`;
}

function colorRoundExo(exoNumber) {
    const round = document.getElementsByClassName("roundClass" + exoNumber);

    for (i = 0; i < round.length; i++) {
        round[i].classList.add("roundExoSucced");
    }
}

function avis(exoActu, serieActu) {

    let avis = document.getElementById("exo" + exoActu + "rep" + serieActu + "-Avis");
    console.log("exo" + exoActu + "rep" + serieActu + "-Avis")

    if (avis.value == "=") {
        avis.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        avis.value = "+";

    } else if (avis.value == "+") {
        avis.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        avis.value = "-";

    } else if (avis.value == "-") {
        avis.innerHTML = `<i class="fa-solid fa-equals"></i>`;
        avis.value = "=";
    }
}
