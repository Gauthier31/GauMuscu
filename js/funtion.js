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
        `<div class="col-6 col-lg-4 col-xl-3 tous" id="` + BD_Exo[i][0] + `">
                    <div class="card">
                    <img class="card-img-top" src="document/exo/` + BD_Exo[i][1] + `.jpg"
                        alt="` + BD_Exo[i][2] + `">
                        <div class="card-body">
                            <div class="detail">

                                <button type="button" class="btn btn-dark btn-i" data-bs-toggle="modal"
                                    data-bs-target="#ModalExo" onclick="modal(` + BD_Exo[i][0] + `)">
                                    Info +
                                </button>

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

                                <h4 class="titre m-1">` + BD_Exo[i][0] + ` - ` + BD_Exo[i][1] + `</h4>

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
    for (j = 0; j < BD_Programme[i].length; j++) {

        txt += `<li class="list-group-item h4">` + (j + 1) + `. ` + BD_Exo[BD_Programme[i][j] - 1][1]
            + ` (id = ` + BD_Exo[BD_Programme[i][j] - 1][0] + `)</li>`;
        //<p class="exo"></p>
    }

    prog.innerHTML += `<div class="col-6 col-lg-4 col-xl-3">
            <ol class="list-group">` + txt + `
            <li class="list-group-item"> 
            <button type="button" class="btn orange" onclick="programmes(` + i + `)">Let's go</button>
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
function modal(val) {
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


function programmes(val) {
    // Masque
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].style.display = "none";
    }

    // Affiche 1 par un
}