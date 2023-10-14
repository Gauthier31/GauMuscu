// Declaration variable
var exo;                // num exo 
var numExo = 1;         // enieme exo du programme
var serie = 1;          // num serie 
var numProg = -1        // Numéro du programme
var newSerieNum = 0;    // Numéro de la série suivant en fonction de l'exo

var totalTemps = 0;     // temps en sec
var total = 0
var t1, t2;

var boucle;

// Liste des exo
// @numProg numéro du programme
function programmes(numProgramme) {

    gestionPage(2);
    // si prog déja lancé
    if (numProg == numProgramme) {
        return;
    }

    numProg = numProgramme;
    const f1 = document.getElementById('blocFicheResultat');

    f1.innerHTML = "";

    let listExoInfo = "";
    let listExo = "";

    let exoTab;
    let serieTab;

    for (i = 1; i < PROGRAMMES[numProg].length; i++) {

        let tab = "";

        // On mets en place les lignes du tableau de l'exo
        let exoAdd = EXOS.filter((EXOS) => EXOS['id'] === PROGRAMMES[numProg][i])[0]
        for (j = 0; j < exoAdd["stat"].length; j += 1) {

            exoTab = PROGRAMMES[numProg][i];
            serieTab = j + 1;

            stat = exoAdd["stat"]

            tab +=
                `<div class="lineTab taille3" id="exo` + exoTab + `serie` + serieTab + `">
                
                    <div class="caseTab_4_SE fw-9" onclick="colorSerie(` + serieTab + `)">` + serieTab + `</div>

                    <div class="caseTab_4_Mid">
                        <input type="number" pattern="\\d*" onkeyup="changeValue(this)" class="input" id="exo` + exoTab + `serie` + serieTab + `-Repetition" value="` + stat[j][0] + `">
                    </div>

                    <div class="caseTab_4_Mid">
                        <input type="number" pattern="\\d*" onkeyup="changeValue(this)" class="input" id="exo` + exoTab + `serie` + serieTab + `-Poids" value="` + stat[j][1] + `">
                    </div>

                    <div class="caseTab_4_SE">
                        <button class="btn-module4" id="exo` + exoTab + `serie` + serieTab + `-Avis" 
                            onclick="avis(` + exoTab + `, ` + serieTab + `)" value="+">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>`;
        }


        listExoInfo +=
            `<div class="none" id="Info_Exo` + exoAdd["id"] + `">
                <div class="exoHead">
                    <p class="modal-title taille fw-9 depasse">` + exoAdd['nom'] + `</p>
                </div>

                
                    <div class="card-img-bloc2">
                        <img class="imgExo mx-auto d-block" src="document/exo/` + exoAdd['nom'] + exoAdd['formatImg'] + `"
                                alt="` + exoAdd['nom'] + `" 
                                onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                    </div>
                    <hr class="hr-orange" />

                    <div class="tableStat">
                        <div class="lineTabHead taille1">
                            <div class="caseTab_4_SE fw-9">Serie</div>
                            <div class="caseTab_4_Mid fw-9">Rep</div>
                            <div class="caseTab_4_Mid fw-9">Kilos</div>
                            <div class="caseTab_4_SE fw-9"></div>
                        </div>
                        <div class="detail3" id="` + exoAdd['id'] + `_statModule">
                        ` + tab + `
                        </div>
                    </div>
            </div>`;




        listExo +=
            `<div class="ligne-list-exo" id="Lancement_Exo` + PROGRAMMES[numProg][i] + `">

                <div class="crossX" onClick="deleteExo(` + PROGRAMMES[numProg][i] + `)">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>

                <div class="ligne-img-bloc2">
                    <img class="ligne-img-left2" src="document/exo/` + exoAdd['nom'] + exoAdd['formatImg'] + `"
                    onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>
                </div>

                <div class="taille1 fw-9 txt-center">` + exoAdd['nom'] + `</div>

                <div class="triangle1" onclick="exoSuivant(` + i + `)"></div>
            </div>`;



    }


    f1.innerHTML +=
        `<div class="container-fluid" id="ficheResultat">

            <div class="row g-5" id="listExo">
            </div>

        </div>
            
        <div id="ticket1" class="ticket1 ticket1_Down">
            <div class="bloc-tiret" onclick="ticket1Up_Down()">
                <div class="tiret"></div>
            </div>

            <div class="detail bouchon4" id="bouchon4">
                    
                    <div class="none" id="Info_Exo0" >
                    <div class="exoHead">
                        <p class="modal-title taille fw-9 depasse">NULL</p>
                    </div>
            
                        
                        <div class="card-img-bloc2">
                            <img class="imgExo mx-auto d-block" />
                        </div>
                        <hr class="hr-orange" />
            
                        <div class="tableStat">
                            <div class="lineTabHead taille1">
                                <div class="caseTab_4_SE fw-9">Serie</div>
                                <div class="caseTab_4_Mid fw-9">Rep</div>
                                <div class="caseTab_4_Mid fw-9">Kilos</div>
                                <div class="caseTab_4_SE fw-9">
                                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <i class="fa-solid fa-pen btn-i"></i>
                                    </button>
                                </div>
                            </div>
            
                            <div class="detail3" id="0_statModule">
                            </div>
                        </div>
            
                        <button onclick="addSerie()" class="btn btn-module3">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                </div >

                ` + listExoInfo + `

            </div>
                  
            <div class="end">
                <div class="div-btn2">
                    <button onclick="addSerie()" class="btn btn-module3">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div> 

                <div id="exoFooter" class="exoFooter">
                    <button class="btn btn-dark btn-module2" onclick="stop()" id="btn-MA" value="Marche">Marche</button>
                    
                    <div class="temps">
                        <div>
                            <p id="temps" class="taille fw-9">00:00,0</p>
                            <p id="tempsReposExo" class="taille1 fw-6">0:00</p>
                        </div>
                    </div>

                    <button class="btn btn-warning btn-module2" onclick="serieSuivant()">Suivant</button>
                </div>

                <div class="bouchon3"></div>
            </div>
        </div>


        <div id="ticket2" class="ticket2 ticket2_Down">
            <div class="bloc-tiret2" onclick="ticket2Up_Down()">
                <div class="tiret"></div>
            </div>

            <div class="detail2_Up">
                <div id="detail3">
                    ` + listExo + `
                </div>

                <div class="div-btn2">
                    <button onClick="page('ajoutExo')" class="btn btn-ticket2 taille1">Ajouter un exercice</button>
                </div>
            </div>

        </div>`;

    // On affiche et color
    document.getElementById("Info_Exo" + PROGRAMMES[numProg][1]).classList.remove("none");
    document.getElementById("Info_Exo" + PROGRAMMES[numProg][1]).classList.add("block");
    document.getElementById("Lancement_Exo" + PROGRAMMES[numProg][1]).classList.add("exoActu");

    exo = PROGRAMMES[numProg][1];
    // serie = 1 // On le sait déja

    // On colorie la premiere série du premier exo
    document.getElementById("exo" + exo + "serie" + serie).classList.add("serieActu");

    ficheInitialisation(numProg);
}

// Initialise la page des résultats
// @numProg numéro du programme
function ficheInitialisation(numProg) {
    let ficheResultat = document.getElementById("listExo");

    // Date de créa
    var today = new Date();
    ficheResultat.innerHTML =
        `<p class="text-center taille" > `
        + PROGRAMMES[numProg][0] + ` : `
        + today.toLocaleDateString("en-US")
        + ` - `
        + today.getHours() + `h` + today.getMinutes() +
        `</p >
        <div class="col-6" style="display: none">`;
}

function ticket1Up_Down() {

    const ticket1 = document.getElementById("ticket1");
    const page2 = document.getElementById("page2");

    if (ticket1.className == "ticket1 ticket1_Down") {

        ticket1.classList.remove("ticket1_Down");
        ticket1.classList.add("ticket1_Up");
        ticket1.style.transition = "margin-top 0.5s";
    } else {
        ticket1.classList.remove("ticket1_Up");
        ticket1.classList.add("ticket1_Down");
        ticket1.style.transition = "margin-top 0.5s";
    }
}

function ticket2Up_Down() {

    const ticket2 = document.getElementById("ticket2");

    if (ticket2.className == "ticket2 ticket2_Down") {

        ticket2.classList.remove("ticket2_Down");
        ticket2.classList.add("ticket2_Up");
        ticket2.style.transition = "margin-top 0.5s";
    } else {

        ticket2.classList.remove("ticket2_Up");
        ticket2.classList.add("ticket2_Down");
        ticket2.style.transition = "margin-top 0.5s";
    }
}


// Appuie sur le bouton pour changer de module et appelle la fonction suivant2(exoNext)
// numExoNext numéro de l'exo suivant dans la table programme
function exoSuivant(numExoNext) {

    try {

        numExo = numExoNext;                         // Numéro de la case dans la tableau stat
        exoNext = PROGRAMMES[numProg][numExoNext];    // Numéro de l'exercice

        // On est jamais sur de rien
        document.getElementById('Info_Exo0').classList.remove("visibility_none");
        document.getElementById('Info_Exo0').classList.add("none");

        // On décolore le la ligne
        document.getElementById("exo" + exo + "serie" + serie).classList.remove("serieActu");
        // On enleve et affiche les infos des exos
        document.getElementById("Info_Exo" + exo).classList.add("none");
        document.getElementById("Info_Exo" + exo).classList.remove("block");

        document.getElementById("Info_Exo" + exoNext).classList.remove("none");
        document.getElementById("Info_Exo" + exoNext).classList.add("block");

        // On enleve et affiche l'exo actuel dans ticket2
        colorExo(exoNext);

    } catch (err) {
        console.log(err);
        document.getElementById('Info_Exo0').classList.remove("none");
        document.getElementById('Info_Exo0').classList.add("visibility_none");
    }

}


function serieSuivant() {
    fiche(exo, serie);
    colorSerie(serie + 1);

    clearInterval(boucle);
    total = 0;
    temps();

    document.getElementById("btn-MA").innerHTML = "Arret";
    document.getElementById("btn-MA").value = "Arret";
}

// On enleve et affiche l'exo actuel dans ticket2
function colorExo(exoNext) {

    try {
        document.getElementById("Lancement_Exo" + exo).classList.remove("exoActu");
    } catch (err) { }
    document.getElementById("Lancement_Exo" + exoNext).classList.add("exoActu");

    document.getElementById("exo" + exo + "serie" + 1).classList.add("serieActu");

    exo = exoNext;
    newSerieNum = 0;
    serie = 1;
    colorSerie(1);
}

// On colorie la premiere série du premier exo
function colorSerie(numSerie) {

    try {
        document.getElementById("exo" + exo + "serie" + serie).classList.remove("serieActu");
        document.getElementById("exo" + exo + "serie" + numSerie).classList.add("serieActu");

        serie = numSerie;
        let exoAdd = EXOS.filter((EXOS) => EXOS['id'] === exo)[0]
        document.getElementById("tempsReposExo").innerHTML = exoAdd["stat"][serie - 1][2]

    } catch (err) {
        console.log(err);

        document.getElementById("Lancement_Exo" + exo).classList.add("exoFini");
        exoSuivant(numExo + 1);
    }
}

// AJoute une serie a l'exo
function addSerie() {

    var tab = document.getElementById(exo + "_statModule");

    // calcul du num de la nouvelle série
    let exoAdd = EXOS.filter((EXOS) => EXOS['id'] === exo)[0]
    newSerieTab = exoAdd["stat"][exoAdd["stat"].length - 1];
    exoAdd["stat"].push(newSerieTab);
    newSerieNum = exoAdd["stat"].length;

    tab.innerHTML +=
        `<div class="lineTab taille2" id="exo` + exo + `serie` + newSerieNum + `">

                <div class="caseTab_4_SE fw-9" onclick="colorSerie(` + newSerieNum + `)">` + newSerieNum + `</div>

                <div class="caseTab_4_Mid">
                    <input type="number" pattern="\\d*" onkeyup="changeValue(this)" class="input" id="exo` + exo + `serie` + newSerieNum + `-Repetition" value="` + newSerieTab[0] + `">
                </div>

                <div class="caseTab_4_Mid">
                    <input type="number" pattern="\\d*" onkeyup="changeValue(this)" class="input" id="exo` + exo + `serie` + newSerieNum + `-Poids" value="` + newSerieTab[1] + `">
                </div>

                <div class="caseTab_4_SE">
                    <button class="btn-module4" id="exo` + exo + `serie` + newSerieNum + `-Avis"
                        onclick="avis(` + exo + `, ` + newSerieNum + `)" value="+">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>`;
}

function avis(exoActu, serieActu) {

    let avis = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Avis");

    if (avis.value == "-") {
        avis.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        avis.value = "+";

    } else if (avis.value == "=") {
        avis.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        avis.value = "-";

    } else if (avis.value == "+") {
        avis.innerHTML = `<i class="fa-solid fa-equals"></i>`;
        avis.value = "=";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lance le chrone
function temps() {
    const time = document.getElementById("temps");


    if (total == 0) {
        const d = new Date();
        t1 = Math.floor(d.getTime() / 100);
    } else {
        const f = new Date();
        t1 = Math.floor(f.getTime() / 100) - total;
    }

    boucle = setInterval(function () {

        const e = new Date();
        t2 = Math.floor(e.getTime() / 100);

        let tempsFinal = t2 - t1;

        var min = Math.floor(tempsFinal / 600);
        var sec = Math.floor(tempsFinal / 10 % 60);
        var micro = tempsFinal % 10;

        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        time.innerHTML = min + ":" + sec + "," + micro;
    }, 100);
}

// Stop le chrono
function stop() {
    var btn = document.getElementById("btn-MA");

    // Lance chrono
    if (btn.value == "Marche") {
        temps();

        btn.innerHTML = "Arret";
        btn.value = "Arret";

        // Stop chrono
    } else {
        clearInterval(boucle);

        total = t2 - t1;

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
    var btn = document.getElementById("btn-MA");
    btn.innerHTML = "Arret";
    btn.value = "Arret";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// On écrit dans la fiche les résultats
// @exo numéro de l'exercice
// @serie numéro de la répétition
function fiche(exoActu, serieActu) {

    // On verifie que le tableau existe
    let exist = document.getElementById("colExo" + exoActu);

    // Si la tableau n'existe pas
    if (!exist) {

        let listExo = document.getElementById("listExo");
        let exoAdd = EXOS.filter(EXOS => EXOS['id'] === exoActu)[0]

        listExo.innerHTML +=
            `<div class="col-6" id="colExo` + exoActu + `">
                <p class="taille2 txtExo depasse">` + exoAdd['nom'] + `</p>
                <hr class="hr-orange" />

                <div class="lineMiniTabHead">
                    <p class="caseMiniTab_4 fw-9">Rep</p>
                    <p class="caseMiniTab_4 fw-9">Kilos</p>
                    <p class="caseMiniTab_4 fw-9">Durée</p>
                    <p class="caseMiniTab_4End fw-9"></p>
                </div>`;
    }

    // prends les valeurs de la ligne du tableau
    let nbRep = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Repetition").value;
    let nbPoids = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Poids").value;
    let avis = document.getElementById("exo" + exoActu + "serie" + serieActu + "-Avis");
    let couleur = "";

    if (avis.value == "+") {
        couleur = "fd-vert";

    } else if (avis.value == "-") {
        couleur = "fd-rouge";
    } else {
        couleur = "fd-gris";
    }

    // on prends le temps
    let tempsSerie = document.getElementById("temps").textContent;

    // On écrit la def de la rep
    let colExo = document.getElementById("colExo" + exoActu);

    colExo.innerHTML +=
        `<div class="lineMiniTab ` + couleur + `" id="exo` + exoActu + `serie` + serieActu + `-Resultat">
                    <p class="caseMiniTab_4">` + nbRep + `</p>
                    <p class="caseMiniTab_4">` + nbPoids + `</p>
                    <p class="caseMiniTab_4">` + tempsSerie + `</p>
                    <p class="caseMiniTab_4End" onClick="deleteSerie(` + exoActu + `, ` + serieActu + `)">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </p>
                </div > `;
}


// Ajoute un exo
function addExo(numExo) {

    // si prog lancer alors on l'ajoute sinon on let mets au prog par defaut
    if (numProg != -1) {

        gestionPage(2);
        // Si exo déja pas comprise dans le tableau alors on l'ajoute
        if (!PROGRAMMES[numProg].includes(numExo)) {

            //////////////////////////////////////////////////////////////////////////////////////////////////
            PROGRAMMES[numProg].push(numExo)
            console.log(PROGRAMMES[numProg])
            let tab = "";

            // On mets en place les lignes du tableau
            let exoAdd = EXOS.filter(EXOS => EXOS['id'] === numExo)[0]
            for (j = 0; j < exoAdd["stat"].length; j += 1) {

                exoTab = numExo;
                serieTab = j + 1;

                tab +=
                    `<div class="lineTab taille2" id="exo` + exoTab + `serie` + serieTab + `" >

                    <div class="caseTab_4_SE fw-9" onclick="colorSerie(` + serieTab + `)">` + serieTab + `</div>

                    <div class="caseTab_4_Mid">
                        <input type="number" pattern="\\d*" onkeyup="changeValue(this)" class="input" id="exo` + exoTab + `serie` + serieTab + `-Repetition" value="` + exoAdd["stat"][j][0] + `">
                    </div>

                    <div class="caseTab_4_Mid">
                        <input type="number" pattern="\\d*" onkeyup="changeValue(this)" class="input" id="exo` + exoTab + `serie` + serieTab + `-Poids" value="` + exoAdd["stat"][j][1] + `">
                    </div>

                    <div class="caseTab_4_SE">
                        <button class="btn-module4" id="exo` + exoTab + `serie` + serieTab + `-Avis"
                            onclick="avis(` + exoTab + `, ` + serieTab + `)" value="+">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div > `;
            }

            // On l'ajoute dans le body du ticket1
            const bouchon4 = document.getElementById("bouchon4");
            bouchon4.innerHTML +=
                `<div class="none" id="Info_Exo` + exoAdd["id"] + `" >
                    <div class="exoHead">
                        <p class="modal-title taille fw-9 depasse">` + exoAdd['nom'] + `</p>
                    </div>

                        <div class="card-img-bloc2">
                            <img class="imgExo mx-auto d-block" src="document/exo/` + exoAdd['nom'] + `.jpg"
                                        alt="` + exoAdd['nom'] + `"
                                        onerror="this.onerror=null; this.src='document/exo/` + exoAdd['nom'] + `.gif'" />
                        </div>
                        <hr class="hr-orange" />

                        <div class="tableStat">
                            <div class="lineTabHead taille1">
                                <div class="caseTab_4_SE fw-9">Serie</div>
                                <div class="caseTab_4_Mid fw-9">Rep</div>
                                <div class="caseTab_4_Mid fw-9">Kilos</div>
                            </div>

                            <div class="detail3" id="` + exoAdd['id'] + `_statModule">
                                ` + tab + `
                            </div>
                        </div>
                </div > `;

            ////////////////////////////////////////////////////////////////////////////////////////////////////

            // On l'ajoute dans le detail3
            const detail3 = document.getElementById("detail3");
            detail3.innerHTML +=
                `<div class="ligne-list-exo" id="Lancement_Exo` + exoAdd["id"] + `" >
            
                    <div class="crossX" onClick="deleteExo(` + exoAdd["id"] + `)">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </div>

                    <div class="ligne-img-bloc2">
                        <img class="ligne-img-left2" src="document/exo/` + exoAdd['nom'] + `.jpg"
                        onerror="this.onerror=null; this.src='document/exo/` + exoAdd['nom'] + `.gif'" />
                    </div>

                    <div class="taille1 fw-9 txt-center">` + exoAdd['nom'] + `</div>
                    <div class="triangle1" onclick="exoSuivant(` + (PROGRAMMES[numProg].length - 1) + `)"></div>
                </div > `;

            exoSuivant(PROGRAMMES[numProg].length - 1);
        } else {
            exoSuivant(PROGRAMMES[numProg].indexOf(numExo));
        }

    } else {
        PROGRAMMES[0].push(numExo)
        programmes(0);
    }
}

function deleteSerie(exoActu, serieActu) {
    document.getElementById("exo" + exoActu + "serie" + serieActu + "-Resultat").remove();
}

function deleteExo(nbExo) {
    document.getElementById("Lancement_Exo" + nbExo).remove();
    if (exo == nbExo) {
        exoSuivant(0);
    }
}
