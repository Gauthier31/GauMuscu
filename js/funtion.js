const item = document.getElementById('tous').classList.add("orange");
//const header = document.getElementById('teteImg').classList.add("img-headerAfter");
// Affichage masquage des blocs de sections
page("accueil");


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Affiche les cards //////////////////////////////////////////////////////

let card = document.getElementById("cards");
var i;

for (i = 1; i < BD_Exo.length; i++) {

    card.innerHTML +=
        `<div class="col-6 col-lg-4 col-xl-3 tous taille3 fw" id="` + BD_Exo[i][0] + `">
                    <div class="card">

                    <div class="card-img-bloc">
                        <img class="card-img-top mx-auto d-block" src="document/exo/` + BD_Exo[i][1] + `.jpg"
                            alt="` + BD_Exo[i][2] + `">
                    </div>

                        <div class="card-body">
                            <p class="taille4 fw depasse m-1">` + BD_Exo[i][1] + `</p>
                            
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

                            <div>
                                <button type="button" class="btn btn-warning btn-i" data-bs-toggle="modal"
                                    data-bs-target="#ModalExo" onclick="modalInfo(` + BD_Exo[i][0] + `)">
                                    Info +
                                </button>
                            </div>

                        </div>
                    </div>
                </div > `;
}

////////////////////////////////// Mets en place les class de style ///////////////////////////////////////

for (i = 0; i < BD_Type.length; i++) {

    for (j = 1; j < BD_Type[i].length; j++) {
        document.getElementById(BD_Type[i][0]).classList.add(BD_Type[i][j]);
    }
}

////////////////////////////////// Mets en place les stats ////////////////////////////////////////////////

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
        all[i].classList.remove("orange");

    }

    // On colorie le filtre
    const item = document.getElementById(val);
    item.classList.add("orange");
    //item.style.transition = "background-color 0.5s";

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
function programmes(val) {
    // Masque
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }

    exo = BD_Programme[val][1];
    programme = val;
    btnExo = "";
    progresseBar = "";


    const affiche = document.getElementById('exo');
    affiche.style.display = "block";
    affiche.innerHTML =
        `<button class="btn btn-dark position-absolute top-50 start-50 translate-middle btn-module" data-bs-toggle="modal" 
        href="#exo` + BD_Programme[val][1] + `" >
            Lancez le programme
        </button>`;



    const body = document.getElementById('body');
    // Affiche  modal 1 par 1
    for (i = 1; i < BD_Programme[val].length; i++) {

        // On prépare tab stat
        txt = BD_Stat[i][0] + "_stat";
        let tab = "";

        for (j = 1; j < BD_Stat[i].length; j += 2) {
            tab +=
                `<tr id="exo` + BD_Programme[val][i] + `rep` + (j + 1) / 2 + `">
                    <th class="th">` + (j + 1) / 2 + `</th>
                    <td><input type="text" value="` + BD_Stat[BD_Programme[val][i]][j] + `"/></td>
                    <td><input type="text" value="` + BD_Stat[BD_Programme[val][i]][j + 1] + `"/></td>
                </tr> `;
        }

        // On prépare la progresse bar

        // Pour chaque exo = btn
        btnExo = "";
        for (j = 1; j < BD_Programme[val].length; j++) {
            let classOp = "";

            if (j <= i) {
                classOp = "roundExoSucced";
            }

            btnExo +=
                `<button type="button"
                onclick="exoSuivant(` + BD_Programme[val][j] + `)"
                class="roundExo ` + classOp + ` position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill"
                style="left: ` + (100 * (j - 1) / (BD_Programme[val].length - 2)) + `% ! important">

                ` + j + ` 
                </button>`;
        }

        progresseBar =
            `<div class="modal-header">
                <div class="position-relative m-4 progBar">
                    <div class="progress" style="height: 5px;">
                        <div id="progBar" class="progress-bar bg-success" role="progressbar" aria-label="Progress" 
                        style="width: ` + (100 * (i - 1) / (BD_Programme[val].length - 2)) + `%;"></div>
                    </div>
                    ` + btnExo + `
                </div>
            </div>`;

        body.innerHTML +=
            `<div class="modal fade" id="exo` + BD_Programme[val][i] + `" tabindex="-1" aria-labelledby="exampleExo` + BD_Programme[val][i] + `" aria-modal="true" role="dialog">

                <div class="modal-dialog modal-dialog-centered modalExo">
                    <div class="modal-content modalExoIn">
                    
                        ` + progresseBar + `

                        <div class="modal-header">
                            <p class="modal-title taille fw depasse" id="titre-modal">` + BD_Exo[BD_Programme[val][i]][1] + `</p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body taille2 detail2">
                            <div class="card-img-bloc2">
                                <img class="imgExo mx-auto d-block" src="document/exo/` + BD_Exo[BD_Programme[val][i]][1] + `.jpg" alt="` + BD_Exo[BD_Programme[val][i]][1] + `"/>
                            </div>
                            <hr/>

                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Rep</th>
                                        <th>Poids</th>
                                    </tr>
                                </thead>

                                <tbody class="tableProgExo" id="` + BD_Exo[BD_Programme[val][i]][0] + `_statModule">
                                    ` + tab + `
                                </tbody>
                            </table>

                            <button onclick="addSerie(` + BD_Exo[BD_Programme[val][i]][0] + `)" class="btn btn-module3"> <i class="fa-solid fa-plus"></i> </button>

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
                            <button class="btn btn-dark btn-module2" onclick="stop()" id="btn-MA` + BD_Programme[val][i] + `" value="Marche">Marche</button>
                            <p id="temps` + BD_Programme[val][i] + `" class="temps taille fw">0:0,0</p>
                            <button class="btn btn-warning btn-module2" onclick="suivant(` + BD_Programme[val][i + 1] + `)">Suivant</button>

                            <button id="btnNextExo` + BD_Programme[val][i] + `" 
                                class="btn btn-dark btn-module" onclick="suivant2(` + BD_Programme[val][i] + `)" 
                                data-bs-target="#exo` + BD_Programme[val][i] + `" data-bs-toggle="modal"
                                style="display: none">
                                    Exercice suivant
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    }


    // Colore la première ligne
    document.getElementById("exo" + exo + "rep" + rep).classList.add("ligneTabColor");
    rep++;
}

// Change de série
// exoNext numéro de l'exo suivant
function suivant(exoNext) {
    try {
        document.getElementById("temps" + exo).innerHTML = "0:0,0";
        var ligne = "exo" + exo + "rep" + rep;
        var ligne2 = "exo" + exo + "rep" + (rep - 1);

        // Couleur
        if (rep > 1) {
            document.getElementById(ligne2).classList.remove("ligneTabColor");
        }
        document.getElementById(ligne).classList.add("ligneTabColor");


        // On écrit dans la fiche les résultats
        //const affiche = document.getElementById('exo');

        // Change exo et mets compteur a 0
        rep++;
        total = 0;

        // clean et lance nouveau chrono
        clear();
        temps();
    } catch (err) {
        console.log(err);

        exoSuivant(exoNext);
    }
}

// Exo suivant
// exoNext numéro de l'exo suivant
function exoSuivant(exoNext) {
    document.getElementById("btnNextExo" + exoNext).click();
}

// change d'exo
// exoNext numéro de l'exo suivant
function suivant2(exoNext) {
    exo = exoNext;
    rep = 1;
    total = 0;

    numExo++;

    serieNext = 0;

    ancien = document.getElementById("progBar" + (exo - 1));

    suivant(exoNext);
}

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
