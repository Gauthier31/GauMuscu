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
        `<div class="col-6 col-lg-4 col-xl-3 tous taille3" id="` + BD_Exo[i][0] + `">
                    <div class="card">

                    <img class="card-img-top" src="document/exo/` + BD_Exo[i][1] + `.jpg"
                        alt="` + BD_Exo[i][2] + `">

                        <div class="card-body">
                            <p class="taille4 depasse m-1">` + BD_Exo[i][1] + `</p>
                            
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

        txt += `<li class="list-group-item h4">` + (j + 1) + `. ` + BD_Exo[BD_Programme[i][j] - 1][1]
            + ` (id = ` + BD_Exo[BD_Programme[i][j] - 1][0] + `)</li>`;
        //<p class="exo"></p>
    }

    prog.innerHTML += `<div class="col-6 col-lg-4 col-xl-3">
            <ol class="list-group">
            <li class="list-group-item taille3">` + BD_Programme[i][0] + `</li>`
        + txt + `
                <li class="list-group-item"> 
                <button type="button" class="btn orange" onclick="programmes(` + i + `)">Let's go</button>
                </li>
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
var exo = 1;
var rep = 1;
var total = 0;
var boucle;

// Liste des exo
function programmes(val) {
    // Masque
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }


    const affiche = document.getElementById('exo');
    affiche.style.display = "block";
    affiche.innerHTML += `<button class="btn btn-dark position-absolute top-50 start-50 translate-middle" data-bs-toggle="modal" href="#exo` + BD_Programme[val][1] + `" >Lancez le programme</button>`;


    const body = document.getElementById('body');
    // Affiche  modal 1 1 par un
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

        body.innerHTML +=
            `<div class="modal fade" id="exo` + BD_Programme[val][i] + `" tabindex="-1" aria-labelledby="exampleExo` + BD_Programme[val][i] + `" aria-modal="true" role="dialog">

                <div class="modal-dialog modal-dialog-centered modalExo">
                    <div class="modal-content">
                        <div class="modal-header">
                            <p class="modal-title taille" id="titre-modal">` + BD_Exo[BD_Programme[val][i] - 1][1] + `</p>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body taille2">
                            <img class="imgExo" src="document/exo/` + BD_Exo[BD_Programme[val][i] - 1][1] + `.jpg" alt="` + BD_Exo[BD_Programme[val][i] - 1][1] + `"/>
                            
                            <p class="taille2 depasse m-1">` + BD_Exo[BD_Programme[val][i] - 1][1] + `</p>
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
                            <button class="btn btn-dark btn-module2" onclick="stop()">Marche<br/>Arret</button>
                            <p id="temps` + BD_Programme[val][i] + `" class="taille">0m0s</p>
                            <button class="btn btn-warning btn-module2" onclick="suivant(); temps(` + BD_Programme[val][i] + `)">Suivant</button>
                            <button class="btn btn-dark btn-module" data-bs-target="#exo` + BD_Programme[val][i + 1] + `" data-bs-toggle="modal"  onclick="suivant2(` + BD_Programme[val][i + 1] + `)">
                                Exercice suivant
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

suivant();

function suivant() {
    var ligne = "exo" + exo + "rep" + rep;
    var ligne2 = "exo" + exo + "rep" + (rep - 1);

    console.log(ligne);

    if (rep > 1) {
        document.getElementById(ligne2).classList.add("ligneTabNull");
    }
    document.getElementById(ligne).classList.add("ligneTabColor");

    rep++;
    stop();
}

function suivant2(val) {
    exo = val;
    rep = 1;

    suivant();
}

function temps(exo) {
    const time = document.getElementById("temps" + exo);
    total = 0;

    boucle = setInterval(function () {
        total++;
        var min = Math.round(total / 60);
        var sec = total % 60;
        time.innerHTML = min + "m" + sec + "s";
    }, 1000);
}

function stop() {
    total = 0;
    clearInterval(boucle);
}