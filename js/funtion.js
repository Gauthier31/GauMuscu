const item = document.getElementById('tous');
item.style.backgroundColor = "orange";

// Affichage masquage des blocs de sections
page("accueil");


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Affiche les cards //////////////////////////////////////////////////////

let card = document.getElementById("cards");
var i;

for (i = 0; i < BD_Exo.length; i++) {

    card.innerHTML +=
        `<div class="col-6 col-lg-4 col-xl-3 tous taille3 fw" id="` + BD_Exo[i][0] + `">
                    <div class="card">

                    <img class="card-img-top" src="document/exo/` + BD_Exo[i][1] + `.jpg"
                        alt="` + BD_Exo[i][2] + `">

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
                                <button type="button" class="btn btn-dark btn-i" data-bs-toggle="modal"
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
            `<li class="list-group-item taille2">` + j + `. ` + BD_Exo[BD_Programme[i][j] - 1][1]
            //+ ` (id = ` + BD_Exo[BD_Programme[i][j] - 1][0] + `)
            + `</li>`;

    }

    prog.innerHTML += `<div class="col-12 col-lg-4 col-xl-3">
            <ol class="list-group">
            <li class="list-group-item taille">` + BD_Programme[i][0] + `
                <button type="button" class="btn orange btn-prog taille2" onclick="programmes(` + i + `)">C'est partie</button>
            </li>`
        + txt + `   
            </ol></div>`;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// filtre les cards
function filtre(val) {
    let i;

    const cache = document.getElementsByClassName('tous');
    for (i = 0; i < cache.length; i++) {
        cache[i].style.display = "none";
    }

    const affiche = document.getElementsByClassName(val);
    for (i = 0; i < affiche.length; i++) {
        affiche[i].style.display = "block";
    }

    const all = document.getElementsByClassName('type');
    for (i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = "white";
    }

    const item = document.getElementById(val);
    item.style.backgroundColor = "orange";

}

// filtre les cards
function page(val) {
    // Masque
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }

    // Affiche
    document.getElementById('tete').style.display = "block";

    if (val == "accueil") {
        document.getElementById('liste').style.display = "block";
        document.getElementById('accueil').style.display = "block";

    } else if (val == "programme") {
        document.getElementById('programme').style.display = "block";
    } else if (val == "nutrition") {
        document.getElementById('nutrition').style.display = "block";
    }
}

// Affiche un modal avec les infos
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
var numExo = 1;          // enieme exo
var rep = 1;        // num rep 
var total = 0;      // temps en sec
var boucle;         // boucle 
var programme;      // num du prog choisi 

var btnExo = "";
var progresseBar = "";

// Liste des exo
// val = num exo
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
    affiche.innerHTML +=
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
                    <th>` + (j + 1) / 2 + `</th>
                    <td>` + BD_Stat[BD_Programme[val][i]][j] + `</td>
                    <td>` + BD_Stat[BD_Programme[val][i]][j + 1] + `</td>
                </tr> `;
        }

        // On prépare la progresse bar

        // Pour chaque exo = btn
        for (j = 1; j < BD_Programme[val].length; j++) {
            let classOp = "";

            if (j <= i) {
                classOp = "roundExoColor";
            }


            btnExo +=
                `<button type="button"
                class="roundExo ` + classOp + ` position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill"
                style="left: ` + (100 * (j - 1) / (BD_Programme[val].length - 2)) + `% ! important">
                ` + j + ` 
                </button>`;
        }

        progresseBar =
            `<div class="modal-header">
                <div class="position-relative m-4 progBar">
                    <div class="progress" style="height: 5px;">
                        <div id="progBar" class="progress-bar bg-warning" role="progressbar" aria-label="Progress" 
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
                            <p class="modal-title taille" id="titre-modal">` + BD_Exo[BD_Programme[val][i] - 1][1] + `</p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body taille2">
                            <img class="imgExo" src="document/exo/` + BD_Exo[BD_Programme[val][i] - 1][1] + `.jpg" alt="` + BD_Exo[BD_Programme[val][i] - 1][1] + `"/>
                            <hr/>

                            <table class="table table-striped">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Rep</th>
                                        <th>Poids</th>
                                    </tr>
                                    ` + tab + `
                                </thead>

                                <tbody id="` + BD_Exo[BD_Programme[val][i] - 1][0] + `_stat">
                                </tbody>
                            </table>

                            <!-- Info cachés -->
                            <div id="` + BD_Exo[BD_Programme[val][i] - 1][0] + `_info" hidden>
                                <p class="info">` + BD_Exo[BD_Programme[val][i] - 1][0] + ` - ` + BD_Exo[i][1] + `</p>
                                <p class="info">` + BD_Exo[BD_Programme[val][i] - 1][2] + `</p>
                                <p class="info">
                                    Imperio conplures aliis et diluere aurem nec 
                                    praedoctis reginae stimulis resedit resedit defensi 
                                    Caesarem Caesarem essent hinc cursim hinc et diluere 
                                    obiecta quid nec inde per subinde ad cuius nec 
                                    quaesitum permissi stimulis periere diluere iudex 
                                    cuius essent inde imaginarius.
                                </p>
                            </div>

                            <!--
                            <button type="button" class="btn btn-dark btn-i" data-bs-toggle="modal"
                                data-bs-target="#ModalExo" onclick="modalInfo(` + BD_Exo[BD_Programme[val][i] - 1][0] + `)">
                                Info +
                            </button>
                            -->
                        
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-dark btn-module2" onclick="stop()" id="btn-MA` + BD_Programme[val][i] + `" value="Marche">Marche</button>
                            <p id="temps` + BD_Programme[val][i] + `" class="taille">0m0s</p>
                            <button class="btn btn-warning btn-module2" onclick="suivant()">Suivant</button>
                            <button class="btn btn-dark btn-module" data-bs-target="#exo` + BD_Programme[val][i + 1] + `" data-bs-toggle="modal"  onclick="suivant2(` + BD_Programme[val][i + 1] + `)">
                                Exercice suivant
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    }



    document.getElementById("exo" + exo + "rep" + rep).classList.add("ligneTabColor");
    document.getElementById("progBar" + exo).innerHTML = progresseBar;
    document.getElementById("roundExo" + BD_Programme[val][1]).classList.add("roundExoColor");
    rep++;
}

// Change de série
function suivant() {
    document.getElementById("temps" + exo).innerHTML = "0m0s";
    var ligne = "exo" + exo + "rep" + rep;
    var ligne2 = "exo" + exo + "rep" + (rep - 1);

    // Couleur
    if (rep > 1) {
        document.getElementById(ligne2).classList.add("ligneTabNull");
    }
    document.getElementById(ligne).classList.add("ligneTabColor");

    // Change exo et mets compteur a 0
    rep++;
    total = 0;

    // clean et lance nouveau chrono
    clear();
    temps();
}

// change d'exo
function suivant2(val) {
    exo = val;
    rep = 1;
    total = 0;

    // Couleur roundExo
    document.getElementById("roundExo" + exo).classList.add("roundExoColor");
    document.getElementById("progBar").style.width = (100 * (numExo - 1) / (BD_Programme[programme].length - 2)) + "%";
    numExo++;

    ancien = document.getElementById("progBar" + (exo - 1));
    //document.getElementById("progBar" + exo).innerHTML = ancien;
    console.log(ancien);
    console.log(ancien.textContent);
    ancien.innerHTML = "";
    suivant();
}

function temps() {
    const time = document.getElementById("temps" + exo);

    boucle = setInterval(function () {
        total++;
        var min = Math.floor(total / 60);
        var sec = total % 60;
        time.innerHTML = min + "m" + sec + "s";
    }, 1000);
}

function stop() {
    var btn = document.getElementById("btn-MA" + exo);

    // Lance chrono
    if (btn.value == "Marche") {
        btn.innerHTML = "Arret";
        btn.value = "Arret";

        temps(exo);

        // Stop chrono
    } else {
        btn.innerHTML = "Marche";
        btn.value = "Marche";

        clearInterval(boucle);
    }


}

// Clean le chrono et initialise le btn marche arret
function clear() {
    clearInterval(boucle);
    var btn = document.getElementById("btn-MA" + exo);
    btn.innerHTML = "Arret";
    btn.value = "Arret";
}


