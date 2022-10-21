const item = document.getElementById('tous').classList.add("typeActive");
//const header = document.getElementById('teteImg').classList.add("img-headerAfter");
// Affichage masquage des blocs de sections
page("accueil");


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Affiche les cards //////////////////////////////////////////////////////

let card = document.getElementById("cards");
var i;

for (i = 1; i < BD_Exo.length; i++) {

    card.innerHTML +=
        `<div class="col-6 col-lg-4 col-xl-3 tous taille3 fw-900" id="` + BD_Exo[i][0] + `">
                    <div class="card">

                    <div class="card-img-bloc">
                        <img class="card-img-top mx-auto d-block" src="document/exo/` + BD_Exo[i][1] + `.jpg"
                            alt="` + BD_Exo[i][2] + `">
                    </div>

                        <div class="card-body">
                            <p class="taille4 fw-900 depasse m-2">` + BD_Exo[i][1] + `</p>

                            <div class="m-2 taille5">
                            Imperio conplures aliis et diluere aurem nec 
                                        praedoctis reginae stimulis resedit resedit defen...
                            </div>
                            
                            <!-- detail cut -->

                            <div>
                                <button type="button" class="btn btn-warning btn-i" data-bs-toggle="modal"
                                    data-bs-target="#ModalExo" onclick="modalInfo(` + BD_Exo[i][0] + `)">
                                    En savoir plus
                                </button>
                            </div>

                        </div>
                    </div>
                </div > `;
}

/*
<div class="detail">

                                <table class="table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Rep</th>
                                            <th>Poids</th>
                                        </tr>
                                    </thead>

                                    <tbody id="` + BD_Exo[i][0] + `_stat">
                                    </tbody>
                                </table>

                                <!-- Info cachés -->
                                <div id="` + BD_Exo[i][0] + `_info" hidden>
                                    <p class="info">` + BD_Exo[i][0] + ` - ` + BD_Exo[i][1] + `</p>
                                    <p class="info">` + BD_Exo[i][2] + `</p>
                                    <p class="info">
                                        Imperio conplures aliis et diluere aurem nec 
                                        praedoctis reginae stimulis resedit resedit defensi 
                                        Caesarem Caesarem essent hinc cursim hinc et diluere 
                                        obiecta quid nec inde per subinde ad cuius nec 
                                        quaesitum permissi stimulis periere diluere iudex 
                                        cuius essent inde imaginarius.
                                    </p>
                                </div>
                            </div>
                            */

////////////////////////////////// Mets en place les class de style ///////////////////////////////////////

for (i = 0; i < BD_Type.length; i++) {

    for (j = 1; j < BD_Type[i].length; j++) {
        document.getElementById(BD_Type[i][0]).classList.add(BD_Type[i][j]);
    }
}

////////////////////////////////// Mets en place les stats ////////////////////////////////////////////////
/*
let txt = "";
for (i = 1; i < BD_Stat.length; i++) {

    txt = BD_Stat[i][0] + "_stat";

    for (j = 1; j < BD_Stat[i].length; j += 2) {
        document.getElementById(txt).innerHTML +=
            `<tr>
                <th>` + (j + 1) / 2 + `</th>
                <td>` + BD_Stat[i][j] + `</td>
                <td>` + BD_Stat[i][j + 1] + `</td>
            </tr>`;
    }
}
*/
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////








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
        txt = BD_Stat[i][0] + "_stat";
        let tab = "";

        for (j = 1; j < BD_Stat[i].length; j += 2) {
            tab +=
                `<tr id="exo` + BD_Programme[numProg][i] + `rep` + (j + 1) / 2 + `">
                    <th class="th">` + (j + 1) / 2 + `</th>
                    <td><input id="exo` + BD_Programme[numProg][i] + `rep` + (j + 1) / 2 + `-Repetition" type="text" value="` + BD_Stat[BD_Programme[numProg][i]][j] + `"/></td>
                    <td><input id="exo` + BD_Programme[numProg][i] + `rep` + (j + 1) / 2 + `-Poids" type="text" value="` + BD_Stat[BD_Programme[numProg][i]][j + 1] + `"/></td>
                </tr> `;
        }

        // On prépare la progresse bar

        // Pour chaque exo = btn
        btnExo = "";
        for (j = 1; j < BD_Programme[numProg].length; j++) {
            let classOp = "";

            btnExo +=
                `<button type="button"
                onclick="exoSuivant(` + BD_Programme[numProg][j] + `)"
                class="roundExo roundClass` + BD_Programme[numProg][j] + ` position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill"
                style="left: ` + (100 * (j - 1) / (BD_Programme[numProg].length - 2)) + `% ! important">

                ` + j + ` 
                </button>`;
        }

        // + (100 * (i - 1) / (BD_Programme[numProg].length - 2)) +
        progresseBar =
            `<div class="modal-header">
                <div class="position-relative m-4 progBar">
                    <div class="progress" style="height: 5px;">
                        <div id="progBar" class="progress-bar bg-warning" role="progressbar" aria-label="Progress" 
                        style="width: 100%;"></div>
                    </div>
                    ` + btnExo + `
                </div>
            </div>`;

        body.innerHTML +=
            `<div class="modal fade" id="exo` + BD_Programme[numProg][i] + `" tabindex="-1" aria-labelledby="exampleExo` + BD_Programme[numProg][i] + `" aria-modal="true" role="dialog">

                <div class="modal-dialog modal-dialog-centered modalExo">
                    <div class="modal-content modalExoIn">
                    
                        ` + progresseBar + `

                        <div class="modal-header">
                            <p class="modal-title taille fw-900 depasse" id="titre-modal">` + BD_Exo[BD_Programme[numProg][i]][1] + `</p>
                            <button type="button" id="btnClose` + BD_Programme[numProg][i] + `" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body taille2 detail2">
                            <div class="card-img-bloc2">
                                <img class="imgExo mx-auto d-block" src="document/exo/` + BD_Exo[BD_Programme[numProg][i]][1] + `.jpg" alt="` + BD_Exo[BD_Programme[numProg][i]][1] + `"/>
                            </div>
                            <hr class="hr-orange"/>

                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Rep</th>
                                        <th>Poids</th>
                                    </tr>
                                </thead>

                                <tbody class="tableProgExo" id="` + BD_Exo[BD_Programme[numProg][i]][0] + `_statModule">
                                    ` + tab + `
                                </tbody>
                            </table>

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
                            <p id="temps` + BD_Programme[numProg][i] + `" class="temps taille fw-900">0:0,0</p>
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
            </div>`;
    }


    // Colore la première ligne
    exo = BD_Programme[numProg][1];
    rep = 1;
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
        document.getElementById("temps" + exo).innerHTML = "0:0,0";
        var ligne = "exo" + exo + "rep" + rep;
        var ligne2 = "exo" + exo + "rep" + (rep - 1);

        if (rep > 1) {
            document.getElementById(ligne2).classList.remove("ligneTabColor");
        }
        document.getElementById(ligne).classList.add("ligneTabColor");

        // clean et lance nouveau chrono
        clear();
        temps();
    } catch (err) {
        //console.log(err);
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

        btn.innerHTML = "Marche";
        btn.value = "Marche";

    }
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
        `<tr id="exo` + numExo + `rep` + serieNext + `">
            <th class="th">` + serieNext + `</th>
            <td><input type="text" value="` + BD_Stat[numExo][BD_Stat[numExo].length - 2] + `"/></td>
            <td><input type="text" value="` + BD_Stat[numExo][BD_Stat[numExo].length - 2] + `"/></td>
        </tr>`;
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
    ficheResultat.innerHTML =
        `<p class="text-center taille fw-900">` + BD_Programme[numProg][0] + `</p>
        <div class="col-6" style="display: none">`;
}

// On écrit dans la fiche les résultats
// @exo numéro de l'éxercice
// @rep numéro de la répétition
function fiche(exo, rep) {
    let ficheResultat = document.getElementById("ficheResultat");
    // On écrit le titre de l'exo
    if (rep == 1) {
        ficheResultat.innerHTML +=
            `</div>
            <div class="col-6" id="colExo` + exo + `">
            <p class="taille2 txtExo fw-600 depasse">` + BD_Exo[exo][1] + `</p>
        <hr class="hr-orange"/>`;
    }

    // prends les valeurs de la ligne du tableau
    let nbRep = document.getElementById("exo" + exo + "rep" + rep + "-Repetition").value;
    let nbPoids = document.getElementById("exo" + exo + "rep" + rep + "-Poids").value;

    // on prends le temps
    let tempsRep = document.getElementById("temps" + exo).textContent;

    let colExo = document.getElementById("colExo" + exo);

    // On écrit la def de la rep
    colExo.innerHTML +=
        `<p class="taille3 txtRep fw-600">` + nbRep + ` Rep | ` + nbPoids + ` kilos | ` + tempsRep + `minutes</p>
            <hr/>`;
}

function colorRoundExo(exoNumber) {
    const round = document.getElementsByClassName("roundClass" + exoNumber);

    for (i = 0; i < round.length; i++) {
        round[i].classList.add("roundExoSucced");
    }
}
