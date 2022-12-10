/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tableau
// épaules, bras, pectoraux, abdominaux, jambes, dos
const EXO = [

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
    /////////////////////////////////////////////////////////////////////////////////

    [34, "Abdominal rollout on knees", "defautExo.jpg", "abdominaux",
        "description"],

    [35, "Abdominal crunch", "defautExo.jpg", "abdominaux",
        "description"],

    [36, "Abduction leg lying, split (gauche / droite)", "defautExo.jpg", "jambes",
        "description"],

    [37, "Abdominal knees up, low handle", "defautExo.jpg", "abdominaux",
        "description"],

    [38, "Abdominal straight jambes", "defautExo.jpg", "abdominaux",
        "description"],

    [39, "Lunge, alternated", "defautExo.jpg", "jambes",
        "description"],

    [40, "Squat", "defautExo.jpg", "jambes",
        "description"],

    [41, "Squat, sumo", "defautExo.jpg", "jambes",
        "description"],

    [42, "Air plane", "defautExo.jpg", "dos",
        "description"],

    [43, "Arch chop", "defautExo.jpg", "abdominaux",
        "description"],

    [44, "Arm extension", "defautExo.jpg", "bras",
        "description"],

    [45, "Arnold press seated", "defautExo.jpg", "épaules",
        "description"],

    [46, "Back extension, machine / ground", "defautExo.jpg", "dos",
        "description"],

    [47, "Balance, standing", "defautExo.jpg", "abdominaux-jambes",
        "description"],

    [48, "Balance, V+sit", "defautExo.jpg", "abdominaux",
        "description"],

    [49, "Bench press, assited", "defautExo.jpg", "pectoraux",
        "description"],

    [50, "Bench press, inclined assited", "defautExo.jpg", "pectoraux",
        "description"],

    [51, "Bench arl pullover", "defautExo.jpg", "pectoraux-bras",
        "description"],

    [52, "Bent over row", "defautExo.jpg", "dos",
        "description"],

    [53, "Bent over row, split (gauche / droite)", "defautExo.jpg", "dos",
        "description"],

    [54, "Bent over row, standing", "defautExo.jpg", "dos",
        "description"],

    [55, "Bicep curl, machine", "defautExo.jpg", "bras",
        "description"],

    [56, "Bicep curl, poulie basse", "defautExo.jpg", "bras",
        "description"],

    [57, "Bicep curl, poulie haute", "defautExo.jpg", "bras",
        "description"],

    [58, "Bicep curl, suplinated (poulie)", "defautExo.jpg", "bras",
        "description"],

    [59, "Bird dog", "defautExo.jpg", "abdominaux",
        "description"],

    [60, "Bird dog, standing (gauche / droite)", "defautExo.jpg", "abdominaux",
        "description"],

    [61, "Bottom up press", "defautExo.jpg", "abdominaux",
        "description"],

    [62, "Box jumps", "defautExo.jpg", "jambes",
        "description"],

    [63, "Bulgarian split squat (gauche / droite)", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [64, "Burpees", "defautExo.jpg", "cardio-abdominaux-jambes",
        "description"],

    [65, "Burpees, jump up", "defautExo.jpg", "cardio-abdominaux-jambes",
        "description"],

    [66, "Burpees, jump up push up", "defautExo.jpg", "cardio-abdominaux-jambes-pectoraux",
        "description"],

    [67, "Butterfly", "defautExo.jpg", "pectoraux",
        "description"],

    [68, "Calf raise", "defautExo.jpg", "jambes",
        "description"],

    [68, "Calves", "defautExo.jpg", "jambes",
        "description"],

    [69, "Chest press, suspension", "defautExo.jpg", "pectoraux",
        "description"],

    [70, "Chest press, lower grip 2 mains", "defautExo.jpg", "pectoraux",
        "description"],

    [71, "Chest press, lower grip split (gauche / droite)", "defautExo.jpg", "pectoraux",
        "description"],

    [72, "Chest press, upper grip 2 mains", "defautExo.jpg", "pectoraux",
        "description"],

    [73, "Chest press, upper grip split (gauche / droite)", "defautExo.jpg", "pectoraux",
        "description"],

    [74, "Chest press, wide grip", "defautExo.jpg", "pectoraux",
        "description"],

    [75, "Chest press, small grip", "defautExo.jpg", "pectoraux",
        "description"],

    [76, "Child's pose", "defautExo.jpg", "dos",
        "description"],

    [77, "Chin up, narrow grip", "defautExo.jpg", "dos",
        "description"],

    [78, "Chin up", "defautExo.jpg", "bras-dos",
        "description"],

    [79, "Crunch, machine", "defautExo.jpg", "abdominaux",
        "description"],

    [80, "Crunch, sol", "defautExo.jpg", "abdominaux",
        "description"],

    [81, "Crunch, bras extended", "defautExo.jpg", "abdominaux",
        "description"],

    [82, "Crunch, diagonal alterned", "defautExo.jpg", "bras",
        "description"],

    [83, "Crunch, toe touch", "defautExo.jpg", "abdominaux",
        "description"],

    [84, "Deadlift", "defautExo.jpg", "dos",
        "description"],

    [85, "Deadlift, sumo stance", "defautExo.jpg", "dos-fessiers",
        "description"],

    [86, "Dips, machine", "defautExo.jpg", "bras-pectoraux",
        "description"],

    [87, "Dips, chaise", "defautExo.jpg", "bras-pectoraux",
        "description"],

    [88, "Diverging lat pull down, 2 mains", "defautExo.jpg", "bras",
        "description"],

    [89, "Elbow, split (gauche / droite)", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [90, "Donkey kick, split (gauche / droite)", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [91, "Glute kickback, split (gauche / droite)", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [92, "Glutes", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [93, "Glutes raise, alternated", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [94, "Goblet squat, split (gauche / droite)", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [95, "Goblet squat", "defautExo.jpg", "jambes",
        "description"],

    [96, "Goodmorning", "defautExo.jpg", "dos-jambes",
        "description"],

    [97, "Hip trust, (haltère / machine)", "defautExo.jpg", "fessiers-jambes",
        "description"],

    [98, "Reverse crunch", "defautExo.jpg", "abdominaux",
        "description"],

    [99, "Reverse curl", "defautExo.jpg", "bras",
        "description"],

    [100, "Reverse fly", "defautExo.jpg", "pectoraux",
        "description"],

    [101, "Reverse fly, horizontal grip", "defautExo.jpg", "dos",
        "description"],

    [102, "Russian twist", "defautExo.jpg", "abdominaux",
        "description"],






    /////////////////////////////////////////////////////////////////////////////////
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const STAT = [
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
const PROGRAMME = [

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
    [1, "Oeuf au plat", "Ingredient gramme|Ingredient gramme", "description"],

    // Plat 2
    [2, "Poisson", "Ingredient gramme|Ingredient gramme", "description"]
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

