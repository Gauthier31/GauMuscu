/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tableau
// épaules, bras, pectoraux, abdominaux, jambes, dos
const BD_Exo = [

    // Bouchon
    [0, "titre", "petiteImage", "", "",
        "description"],

    [1, "Développé couché avec haltères", "pectoraux.jpg", "pectoraux-dos-bras",
        "description"],

    [2, "Développé incliné avec haltères", "pectoraux.jpg", "pectoraux-épaules-bras",
        "description"],

    [3, "Dips", "pectoraux.jpg", "pectoraux-épaules-bras",
        "description"],

    [4, "Pull over", "pectoraux.jpg", "pectoraux-épaules-bras",
        "description"],

    [5, "Écartés à la machine", "pectoraux.jpg", "pectoraux",
        "description"],

    [6, "Écartés à la poulie haute", "pectoraux.jpg", "pectoraux",
        "description"],

    [7, "Développé assis à la machine convergente", "pectoraux.jpg", "pectoraux-dos-bras",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [8, "Leg Press", "quadriceps.jpg", "jambes",
        "description"],

    [9, "Leg Extension", "quadriceps.jpg", "jambes",
        "description"],

    [10, "Leg Curl", "ischio.jpg", "jambes",
        "description"],

    [11, "Adducteurs", "adducteur.jpg", "jambes",
        "description"],

    [12, "Abduction", "adducteur.jpg", "jambes",
        "description"],

    [13, "Presse à mollets", "mollet.jpg", "jambes",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [14, "Traction", "dorseaux.jpg", "dos-bras-épaules",
        "description"],

    [15, "Traction prise large", "dorseaux.jpg", "dos-bras-épaules",
        "description"],

    [16, "Traction prise serré", "dorseaux.jpg", "dos-bras-épaules",
        "description"],

    [17, "Élévation latéral avec haltère", "deltoide.jpg", "épaules",
        "description"],

    [18, "Shoulder press", "deltoide.jpg", "épaules-bras",
        "description"],

    [19, "Tirage horizontal", "dorseaux.jpg", "dos-bras",
        "description"],

    [20, "Élévation latéral avec poulie", "deltoide.jpg", "épaules",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [21, "Squat", "quadriceps.jpg", "jambes",
        "description"],

    [22, "Soulevé de terre", "quadriceps.jpg", "jambes",
        "description"],

    [23, "Fente avec haltère", "quadriceps.jpg", "jambes",
        "description"],

    [24, "Fente surelevé avec haltère", "quadriceps.jpg", "jambes",
        "description"],

    [25, "Hip Thrust", "ischio.jpg", "jambes",
        "description"],

    [26, "Low row", "dorseaux.jpg", "dos-épaules",
        "description"],

    [27, "Soulevé de terre roumain", "dorseaux.jpg", "dos-épaules",
        "description"],


    [28, "Tapis de course", "quadriceps.jpg", "jambes",
        "description"],

    [29, "Escalier", "quadriceps.jpg", "jambes",
        "description"],

    [30, "Tirage vertical", "dorseaux.jpg", "dos-bras-épaules",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [31, "Curl haltere", "bicep.jpg", "bras",
        "description"],

    [32, "Curl haltere marteau", "bicep.jpg", "bras",
        "description"],

    [33, "Triceps", "tricep.jpg", "bras",
        "description"],


    /////////////////////////////////////////////////////////////////////////////////
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const BD_Stat = [
    // [n°exo, nbRep1, poid1, nbRep2, poid1, nbRep3, poid3, nbRep4, poid4]

    // Nom bouchon
    [0, 12, 10],

    // Développé couché avec haltères
    [1, 12, 20, 12, 20, 12, 20, 12, 20],
    // Développé incliné avec haltères
    [2, 12, 17.5, 12, 17.5, 12, 17.5, 12, 17.5],
    // Dips
    [3, 10, 4, 10, 4, 10, 4, 10, 4],
    // Pull over
    [4, 12, 20, 12, 20, 12, 20, 12, 20],
    // Écartés à la machine
    [5, 12, 55, 12, 55, 12, 55, 12, 55],
    // Écartés à la poulie haute
    [6, 12, 7.5, 12, 7.5, 12, 7.5, 12, 7.5],
    // Développé assis à la machine convergente
    [7, 12, 60, 12, 60, 12, 60, 12, 60],
    // Leg Press
    [8, 12, 120, 12, 120, 12, 120, 12, 120],
    // Leg Extension
    [9, 12, 55, 12, 55, 12, 55, 12, 55],
    // Leg Curl
    [10, 12, 55, 12, 55, 12, 55, 12, 55],
    // Adducteurs
    [11, 12, 60, 12, 60, 12, 60, 12, 60],
    // Abduction
    [12, 12, 55, 12, 55, 12, 55, 12, 55],
    // Presse à mollets
    [13, 20, 60, 20, 60, 20, 60, 20, 60],
    // Traction
    [14, 10, 0, 10, 0, 10, 0, 10, 0],
    // Traction prise large
    [15, 10, 0, 10, 0, 10, 0, 10, 0],
    // Traction prise serré
    [16, 10, 0, 10, 0, 10, 0, 10, 0],
    // Élévation latéral avec haltère
    [17, 24, 8, 24, 8, 24, 8, 24, 8],
    // Shoulder press
    [18, 12, 30, 12, 30, 12, 30, 12, 30],
    // Tirage horizontal
    [19, 12, 44, 12, 44, 12, 44, 12, 44],
    // Élévation latéral avec poulie
    [20, 12, 5, 12, 5, 12, 5, 12, 5],

    // Squat
    [21, 12, 50, 12, 50, 12, 50, 12, 50],
    // Soulevé de terre
    [22, 12, 50, 12, 50, 12, 50, 12, 50],
    // Fente avec haltère
    [23, 12, 12.5, 12, 12.5, 12, 12.5, 12, 12.5],
    // Fente surelevé avec haltère
    [24, 12, 10, 12, 10, 12, 10, 12, 10],
    // Hip Thrust
    [25, 12, 40, 12, 40, 12, 40, 12, 40],
    // Low row
    [26, 12, 60, 12, 60, 12, 60, 12, 60],
    // Soulevé de terre roumain
    [27, 12, 30, 12, 30, 12, 30, 12, 30],

    // Tapis de course
    [28, 0, 0],
    // Escalier
    [29, 0, 0],
    // Tirage vertical
    [30, 12, 45, 12, 45, 12, 45, 12, 45],

    // Curl haltere
    [31, 9, 12.5, 9, 12.5, 9, 12.5, 9, 12.5],
    // Curl haltere
    [32, 12, 10, 12, 10, 12, 10, 12, 10],
    // Triceps
    [33, 12, 15, 12, 15, 12, 15, 12, 15],

    /////////////////// ABS /////////////////////
    // Laying leg flutters

    // Jack knife

    // Boat hold

    // Wind shield wipers

    // Star crunches

    // Seated in and outs

    // Russian twists

    // Bicycles

    // Mountain Climbers

    // Each side plank reach through

];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const BD_Programme = [

    // Prog par defaut
    ["Programme par defaut"],

    // Push Gauthier
    ["Push V2", 1, 2, 6, 3, 33],
    // Leg Gauthier
    ["Leg V2", 8, 9, 10, 24, 13],
    // Pull Gauthier
    ["Pull V2", 30, 18, 26, 31, 32, 19],

    // Push Gauthier
    ["Push V1 (Pectauraux, Bras)", 1, 2, 7, 5, 3, 31, 32],
    // Leg Gauthier
    ["Leg V1 (Jambes)", 8, 9, 10, 11, 12, 13],
    // Pull Gauthier
    ["Pull V1 (Dos, Épaules)", 14, 18, 19, 20],

    // Jambe Juliette
    ["Jambe (Juliette)", 21, 22, 24, 8, 25, 9, 10, 11],

    //test
    //["Test", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
];

const BD_Nutrition = [

    // Bouchon
    [0, "", "", ""],

    // Plat 1
    [1, "Titre", "Ingredient gramme|Ingredient gramme", "description"],

    // Plat 2
    [2, "Titre2", "Ingredient gramme|Ingredient gramme", "description"]
];

const BD_Musique = [
    ["Playboi Carti", "Neva_2_Much"],
    ["Playboi Carti", "On_that_time"],
    ["Yeat", "Off_Tha_Lot"],
    ["Playboi Carti", "Neva_2_Much"],
    ["Playboi Carti", "On_that_time"],
    ["Yeat", "Off_Tha_Lot"],
    ["Playboi Carti", "Neva_2_Much"],
    ["Playboi Carti", "On_that_time"],
    ["Yeat", "Off_Tha_Lot"]
];

