// tableau
const BD_Exo = [

    // Bouchon
    [0, "titre", "petiteImage", `description`],

    [1, "Développé couché avec haltères", "pectoraux.jpg", "description"],

    [2, "Développé incliné avec haltères", "pectoraux.jpg", "description"],

    [3, "Dips", "pectoraux.jpg", "description"],

    [4, "Pull over", "pectoraux.jpg", "description"],

    [5, "Écartés à la machine", "pectoraux.jpg", "description"],

    [6, "Écartés à la poulie haute", "pectoraux.jpg", `description`],

    [7, "Développé assis à la machine convergente", "pectoraux.jpg", `description`],

    /////////////////////////////////////////////////////////////////////////////////

    [8, "Leg Press", "quadriceps.jpg", `description`],

    [9, "Leg Extension", "quadriceps.jpg", `description`],

    [10, "Leg Curl", "ischio.jpg", `description`],

    [11, "Adducteurs", "adducteur.jpg", `description`],

    [12, "Abduction", "adducteur.jpg", `description`],

    [13, "Presse à mollets", "mollet.jpg", `description`],

    /////////////////////////////////////////////////////////////////////////////////

    [14, "Traction", "dorseaux.jpg", `description`],

    [15, "Traction prise large", "dorseaux.jpg", `description`],

    [16, "Traction prise serré", "dorseaux.jpg", `description`],

    [17, "Élévation latéral avec haltère", "deltoide.jpg", `description`],

    [18, "Shoulder press", "deltoide.jpg", `description`],

    [19, "Tirage horizontal", "dorseaux.jpg", `description`],

    [20, "Élévation latéral avec poulie", "deltoide.jpg", `description`],

    /////////////////////////////////////////////////////////////////////////////////

    [21, "Squat", "quadriceps.jpg", `description`],

    [22, "Soulevé de terre", "quadriceps.jpg", `description`],

    [23, "Fente avec haltère", "quadriceps.jpg", `description`],

    [24, "Fente surelevé avec haltère", "quadriceps.jpg", `description`],

    [25, "Hip Thrust", "ischio.jpg", `description`],

    [26, "Low row", "dorseaux.jpg", `description`],

    [27, "Soulevé de terre roumain", "dorseaux.jpg", `description`],

    [28, "Tapis de course", "quadriceps.jpg", `description`],

    [29, "Escalier", "quadriceps.jpg", `description`],

    [30, "Tirage vertical", "dorseaux.jpg", `description`],

    /////////////////////////////////////////////////////////////////////////////////
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// epaule, bras, pec, abdo, jambes, dos
const BD_Type = [
    [0],

    [1, "pec", "dos", "bras"],
    [2, "pec", "epaule", "bras"],
    [3, "pec", "epaule", "bras"],
    [4, "pec", "epaule", "bras"],
    [5, "pec"],
    [6, "pec"],
    [7, "pec", "dos", "bras"],

    [8, "jambes"],
    [9, "jambes"],
    [10, "jambes"],
    [11, "jambes"],
    [12, "jambes"],
    [13, "jambes"],

    [14, "dos", "bras", "epaule"],
    [15, "dos", "bras", "epaule"],
    [16, "dos", "bras", "epaule"],
    [17, "epaule"],
    [18, "epaule", "bras"],
    [19, "dos", "bras"],
    [20, "epaule"],

    [21, "jambes"],
    [22, "jambes"],
    [23, "jambes"],
    [24, "jambes"],
    [25, "jambes"],
    [26, "dos", "epaule"],
    [27, "dos", "epaule"],

    [28, "jambes"],
    [29, "jambes"],
    [30, "dos", "bras", "epaule"],
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const BD_Stat = [
    // [n°exo, nbRep1, poid1, nbRep2, poid1, nbRep3, poid3, nbRep4, poid4]

    // Nom bouchon
    [0, 12, 10],

    // Développé couché avec haltères
    [1, 12, 17, 12, 17, 12, 17, 12, 17],
    // Développé incliné avec haltères
    [2, 12, 15, 12, 15, 10, 15, 10, 15],
    // Dips
    [3, 10, 0, 10, 0, 10, 0, 10, 0],
    // Pull over
    [4, 12, 20, 12, 20, 12, 20, 12, 20],
    // Écartés à la machine
    [5, 12, 55, 12, 55, 12, 55, 12, 55],
    // Écartés à la poulie haute
    [6, 12, 5, 12, 5, 12, 5, 12, 5],
    // Développé assis à la machine convergente
    [7, 12, 60, 12, 60, 12, 60, 12, 60],
    // Leg Press
    [8, 10, 110, 10, 110, 10, 110, 10, 110],
    // Leg Extension
    [9, 12, 50, 12, 50, 12, 50, 12, 50],
    // Leg Curl
    [10, 12, 50, 12, 50, 12, 50, 12, 50],
    // Adducteurs
    [11, 12, 60, 12, 60, 12, 60, 12, 60],
    // Abduction
    [12, 12, 55, 12, 55, 12, 55, 12, 55],
    // Presse à mollets
    [13, 16, 60, 16, 60, 16, 60, 16, 60],
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
    [23, 12, 12, 12, 12, 12, 12, 12, 12],
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
    // Push Gauthier
    ["Push (Pectauraux, Bras)", 1, 2, 7, 5, 3],
    // Leg Gauthier
    ["Leg (Jambes)", 8, 9, 10, 11, 12, 13],
    // Pull Gauthier
    ["Pull (Dos, Épaule)", 14, 18, 19, 20],

    // Jambe Juliette
    ["Jambe (Juliette)", 21, 22, 24, 8, 25, 9, 10, 11],
]
