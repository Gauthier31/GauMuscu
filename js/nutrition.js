var idNutri;


function nutrition(identifiantNutri) {

    gestionPage(3);
    const f2 = document.getElementById("infoNutrition");

    idNutri = identifiantNutri;

    const ingredient = NUTRITION[idNutri][3].split("|");

    let txt = "<ul>";
    for (let i = 0; i < ingredient.length; i++) {
        txt += "<li><b>" + (i + 1) + "</b>. " + ingredient[i] + "</li>";
    }
    txt += "<ul>";

    f2.innerHTML = `
                <img class="imgNutri" src="document/nutrition/` + NUTRITION[idNutri][1] + `.jpg"
                            onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>

                <div class="infoNutri">
                    <div class="nutriBlocTitre taille0">
                        <p class="titreNutri"> ` + NUTRITION[idNutri][1] + ` </p>
                        <i class="fa-solid fa-angle-left " onClick="gestionPage(1)"></i>
                        <div class="bouchon5"></div>
                    </div>

                    <div class="nutriBlocText">
                        <p class="taille descriptionNutri"> ` + NUTRITION[idNutri][2] + ` </p>

                        <p class="taille listIngredient" id="listIngredient"></p>
                    
                    </div>
                </div>`;

    document.getElementById("listIngredient").innerHTML += txt;
}