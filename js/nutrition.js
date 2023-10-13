var idNutri;


function nutrition(identifiantNutri) {

    gestionPage(3);
    const f2 = document.getElementById("infoNutrition");

    let idNutri = identifiantNutri;

    // Mise en plave du tableau des apports journaliers
    let table1 = `<table class="tableRound">
                    <thead class="fw-9">
                        <tr>
                            <th>Calories</th>
                            <th>Protéines</th>
                            <th>Glucides</th>
                            <th>Lipides</th>
                        </tr>
                    </thead>
                    <tbody>`;

    table1 += `
                <tr>
                    <td class="center">` + NUTRITIONS[idNutri]["apport"]["Kcal"] + `Kcal</td>
                    <td class="center">` + NUTRITIONS[idNutri]["apport"]["prot"] + `g</td>
                    <td class="center">` + NUTRITIONS[idNutri]["apport"]["glucides"] + `g</td>
                    <td class="center">` + NUTRITIONS[idNutri]["apport"]["lipides"] + `g</td>
                </tr>`;

    table1 += "</tbody></table>";

    // Mise en plave du tableau des ingrédients
    let table2 = `<table class="tableRound">
                    <thead class="fw-9">
                        <tr>
                            <th>Ingrédient</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody>`;

    NUTRITIONS[idNutri]['ingredient'].forEach(nutri => {
        table2 += `
        <tr>
            <td>` + nutri[0] + `</td>
            <td>` + nutri[1] + `</td>
        </tr>`;
    });

    table2 += "</tbody></table>";

    f2.innerHTML = `
                <img class="imgNutri" src="document/nutrition/` + NUTRITIONS[idNutri]['titre'] + `.jpg"
                    onerror="this.onerror=null; this.src='document/exo/defautExo.jpg'"/>

                <div class="infoNutri">
                    <div class="nutriBlocTitre taille0">
                        <p class="fw-9"> ` + NUTRITIONS[idNutri]['titre'] + ` </p>
                        <i class="fa-solid fa-angle-left" onClick="gestionPage(1)"></i>
                        <div class="bouchon5"></div>
                    </div>

                    <div class="nutriBlocText">
                        <p class="taille descriptionNutri"> ` + NUTRITIONS[idNutri]["description"] + ` </p>
                        <p class="taille"><u><i>Total des apports nutritionnels :</i></u></p>
                        ` + table1 + `
                        <p class="taille"><u><i>Liste des ingrédients :</i></u></p>
                        ` + table2 + `
                    </div>
                </div>
    `;
}