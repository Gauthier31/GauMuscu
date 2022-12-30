const ROUTEUR = [
    // Page 1
    ["Exo", "1", "teteBouchon", "tete", "liste", "acceuil"],
    ["Programme", "1", "teteBouchon", "tete", "programmeTitre", "programme"],
    ["Nutrition", "1", "teteBouchon", "tete", "nutritionTitre", "nutrition"],
    ["ajoutExo", "1", "liste", "acceuil"],
]

/*
function page(rout) {
    let i;

    for (i = 0; i < ROUTEUR.length
        && ROUTEUR[i][0] == rout; i++) { }

    // gestion erreur
    i = (i >= ROUTEUR.length) ? 0 : i;

    // Masque Les sections
    const masque = document.getElementsByClassName('bloc');
    for (k = 0; k < masque.length; k++) {
        masque[k].classList.add("hidden");
    }

    // On affiche la page;
    gestionPage(ROUTEUR[i][1]);

    for (let j = 2; j < ROUTEUR[i].length; j++) {
        console.log(ROUTEUR[i][j]);
        document.getElementById(ROUTEUR[i][j]).classList.remove("hidden");
    }
}
*/


function page(val) {

    closeNavBar();
    // on devine de quelle page on vient
    let page = document.getElementsByClassName("page");

    // Si on est pas sur la page 1
    if (page[0].className == "page hidden") {
        console.log("go page 1");
        gestionPage(1);
    }

    // Masque Les sections
    const masque = document.getElementsByClassName('bloc');
    for (i = 0; i < masque.length; i++) {
        masque[i].classList.add("none");
    }

    // Affiche
    switch (val) {
        case 'programme':
            document.getElementById('teteBouchon').classList.remove("none");
            document.getElementById('tete').classList.remove("none");

            document.getElementById('programmeTitre').classList.remove("none");
            document.getElementById('programme').classList.remove("none");
            break;

        case 'ajoutExo':
            document.getElementById('liste').classList.remove("none");
            document.getElementById('accueil').classList.remove("none");
            break;

        case 'nutrition':
            document.getElementById('teteBouchon').classList.remove("none");
            document.getElementById('tete').classList.remove("none");

            document.getElementById('nutritionTitre').classList.remove("none");
            document.getElementById('nutrition').classList.remove("none");
            break;

        //par defaut l'accueil
        default:
            document.getElementById('teteBouchon').classList.remove("none");
            document.getElementById('tete').classList.remove("none");

            document.getElementById('liste').classList.remove("none");
            document.getElementById('accueil').classList.remove("none");
            break;
    }
}

/////////////////////////////////////////////// Filtre les pages //////////////////////////////////////////

function gestionPage(numPage) {

    const p1 = document.getElementById('page1');
    const p2 = document.getElementById('page2');
    const p3 = document.getElementById('page3');

    switch (numPage) {
        case 1:

            p1.classList.remove("hidden");

            p2.classList.add("gaucheOutClass");
            p3.classList.add("gaucheOutClass");
            setTimeout(function () {
                masquePage(2);
                masquePage(3);
            }, 700);

            break;

        case 2:

            p2.classList.add("gaucheInClass");
            p2.classList.remove("hidden");
            setTimeout(function () {
                masquePage(1);
            }, 700);
            break;

        case 3:

            p3.classList.add("gaucheInClass");
            p3.classList.remove("hidden");
            setTimeout(function () {
                masquePage(1);
            }, 700);
            break;
    }

}

function masquePage(numPage) {

    const p1 = document.getElementById('page1');
    const p2 = document.getElementById('page2');
    const p3 = document.getElementById('page3');

    switch (numPage) {
        case 1:
            p1.classList.add("hidden");
            p2.classList.remove("gaucheInClass");
            p3.classList.remove("gaucheInClass");
            break;

        case 2:
            p2.classList.add("hidden");
            p2.classList.remove("gaucheOutClass");
            break;

        case 3:
            p3.classList.add("hidden");
            p3.classList.remove("gaucheOutClass");
            break;
    }
}

function closeNavBar() {
    // Masques la navbar
    const nav = document.getElementById("nav1");
    nav.classList.remove("show");
}
