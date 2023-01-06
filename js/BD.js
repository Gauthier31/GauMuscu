/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tableau
// épaules, bras, pectoraux, abdominaux, jambes, dos
const EXO = [

    // Bouchon
    [0, "titre", "petiteImage", "", "-tousExo",
        "description"],

    [1, "Développé couché avec haltères", "pectoraux.jpg", "pectoraux-dos-bras-tousExo",
        "description"],

    [2, "Développé incliné avec haltères", "pectoraux.jpg", "pectoraux-épaules-bras-tousExo",
        "description"],

    [3, "Dips", "pectoraux.jpg", "pectoraux-épaules-bras-tousExo",
        "description"],

    [4, "Pull over", "pectoraux.jpg", "pectoraux-épaules-bras-tousExo",
        "description"],

    [5, "Écartés à la machine", "pectoraux.jpg", "pectoraux-tousExo",
        "description"],

    [6, "Écartés à la poulie haute", "pectoraux.jpg", "pectoraux-tousExo",
        "description"],

    [7, "Développé assis à la machine convergente", "pectoraux.jpg", "pectoraux-dos-bras-tousExo",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [8, "Leg Press", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [9, "Leg Extension", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [10, "Leg Curl", "ischio.jpg", "jambes-tousExo",
        "description"],

    [11, "Adducteurs", "adducteur.jpg", "jambes-tousExo",
        "description"],

    [12, "Abduction", "adducteur.jpg", "jambes-tousExo",
        "description"],

    [13, "Presse à mollets", "mollet.jpg", "jambes-tousExo",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [14, "Traction", "dorseaux.jpg", "dos-bras-épaules-tousExo",
        "description"],

    [15, "Traction prise large", "dorseaux.jpg", "dos-bras-épaules-tousExo",
        "description"],

    [16, "Traction prise serré", "dorseaux.jpg", "dos-bras-épaules-tousExo",
        "description"],

    [17, "Élévation latéral avec haltère", "deltoide.jpg", "épaules-tousExo",
        "description"],

    [18, "Shoulder press", "deltoide.jpg", "épaules-bras-tousExo",
        "description"],

    [19, "Tirage horizontal", "dorseaux.jpg", "dos-bras-tousExo",
        "description"],

    [20, "Élévation latéral avec poulie", "deltoide.jpg", "épaules-tousExo",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [21, "Squat", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [22, "Soulevé de terre", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [23, "Fente avec haltère", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [24, "Fente surelevé avec haltère", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [25, "Hip Thrust", "ischio.jpg", "jambes-tousExo",
        "description"],

    [26, "Low row", "dorseaux.jpg", "dos-épaules-tousExo",
        "description"],

    [27, "Soulevé de terre roumain", "dorseaux.jpg", "dos-épaules-tousExo",
        "description"],


    [28, "Tapis de course", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [29, "Escalier", "quadriceps.jpg", "jambes-tousExo",
        "description"],

    [30, "Tirage vertical", "dorseaux.jpg", "dos-bras-épaules-tousExo",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////

    [31, "Curl haltere", "bicep.jpg", "bras-tousExo",
        "description"],

    [32, "Curl haltere marteau", "bicep.jpg", "bras-tousExo",
        "description"],

    [33, "Triceps", "tricep.jpg", "bras-tousExo",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////

    [34, "Abdominal rollout on knees", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [35, "Abdominal crunch", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [36, "Abduction leg lying, split (gauche - droite)", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [37, "Abdominal knees up, low handle", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [38, "Abdominal straight legs", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [39, "Fente, alterné", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [40, "Squat", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [41, "Squat, sumo", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [42, "Air plane", "defautExo.jpg", "dos-tousExo",
        "description"],

    [43, "Arch chop", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [44, "Arm extension", "defautExo.jpg", "bras-tousExo",
        "description"],

    [45, "Arnold press seated", "defautExo.jpg", "épaules-tousExo",
        "description"],

    [46, "Back extension, machine - ground", "defautExo.jpg", "dos-tousExo",
        "description"],

    [47, "Balance, standing", "defautExo.jpg", "abdominaux-jambes-tousExo",
        "description"],

    [48, "Balance, V+sit", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [49, "Bench press, assited", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [50, "Bench press, inclined assited", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [51, "Bench arl pullover", "defautExo.jpg", "pectoraux-bras-tousExo",
        "description"],

    [52, "Bent over row", "defautExo.jpg", "dos-tousExo",
        "description"],

    [53, "Bent over row, split (gauche - droite)", "defautExo.jpg", "dos-tousExo",
        "description"],

    [54, "Bent over row, standing", "defautExo.jpg", "dos-tousExo",
        "description"],

    [55, "Bicep curl, machine", "defautExo.jpg", "bras-tousExo",
        "description"],

    [56, "Bicep curl, poulie basse", "defautExo.jpg", "bras-tousExo",
        "description"],

    [57, "Bicep curl, poulie haute", "defautExo.jpg", "bras-tousExo",
        "description"],

    [58, "Bicep curl, suplinated (poulie)", "defautExo.jpg", "bras-tousExo",
        "description"],

    [59, "Bird dog", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [60, "Bird dog, standing (gauche - droite)", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [61, "Bottom up press", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [62, "Box jumps", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [63, "Bulgarian split squat (gauche - droite)", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [64, "Burpees", "defautExo.jpg", "cardio-abdominaux-jambes-tousExo",
        "description"],

    [65, "Burpees, jump up", "defautExo.jpg", "cardio-abdominaux-jambes-tousExo",
        "description"],

    [66, "Burpees, jump up push up", "defautExo.jpg", "cardio-abdominaux-jambes-pectoraux-tousExo",
        "description"],

    [67, "Butterfly", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [68, "Calf raise", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [69, "Calves", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [70, "Chest press, suspension", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [71, "Chest press, lower grip 2 mains", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [72, "Chest press, lower grip split (gauche - droite)", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [73, "Chest press, upper grip 2 mains", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [74, "Chest press, upper grip split (gauche - droite)", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [75, "Chest press, wide grip", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [76, "Chest press, small grip", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [77, "Child's pose", "defautExo.jpg", "dos-tousExo",
        "description"],

    [78, "Chin up, narrow grip", "defautExo.jpg", "dos-tousExo",
        "description"],

    [79, "Chin up", "defautExo.jpg", "bras-dos-tousExo",
        "description"],

    [80, "Crunch, machine", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [81, "Crunch, sol", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [82, "Crunch, bras extended", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [83, "Crunch, diagonal alterned", "defautExo.jpg", "bras-tousExo",
        "description"],

    [84, "Crunch, toe touch", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [85, "Deadlift", "defautExo.jpg", "dos-tousExo",
        "description"],

    [86, "Deadlift, sumo stance", "defautExo.jpg", "dos-fessiers-tousExo",
        "description"],

    [87, "Dips, machine", "defautExo.jpg", "bras-pectoraux-tousExo",
        "description"],

    [88, "Dips, chaise", "defautExo.jpg", "bras-pectoraux-tousExo",
        "description"],

    [89, "Diverging lat pull down, 2 mains", "defautExo.jpg", "bras-tousExo",
        "description"],

    [90, "Elbow, split (gauche - droite)", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [91, "Donkey kick, split (gauche - droite)", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [92, "Glute kickback, split (gauche - droite)", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [93, "Glutes", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [94, "Glutes raise, alterné", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [95, "Goblet squat, split (gauche - droite)", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [96, "Goblet squat", "defautExo.jpg", "jambes-tousExo",
        "description"],

    [97, "Goodmorning", "defautExo.jpg", "dos-jambes-tousExo",
        "description"],

    [98, "Hip trust, (haltère - machine)", "defautExo.jpg", "fessiers-jambes-tousExo",
        "description"],

    [99, "Reverse crunch", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    [100, "Reverse curl", "defautExo.jpg", "bras-tousExo",
        "description"],

    [101, "Reverse fly", "defautExo.jpg", "pectoraux-tousExo",
        "description"],

    [102, "Reverse fly, horizontal grip", "defautExo.jpg", "dos-tousExo",
        "description"],

    [103, "Russian twist", "defautExo.jpg", "abdominaux-tousExo",
        "description"],

    /////////////////////////////////////////////////////////////////////////////////
];

const exercises = [
    {
        name: "Pompes",
        muscle: "Pectoraux"
    },
    {
        name: "Tractions",
        muscle: "Dorsaux"
    },
    {
        name: "Squats",
        muscle: "Quadriceps"
    }
    // Ajouter d'autres exercices ici...
];
const test = [
    {
        id: "0",
        nom: "titre",
        formatImg: "jpg",
        muscleImg: "petiteImage",
        listMuscle: "-tousExo",
        description: "description"
    },
    {
        id: "1",
        nom: "Développé couché avec haltères",
        formatImg: "jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-dos-bras-tousExo",
        description: "description"
    },
    {
        id: "2",
        nom: "Développé incliné avec haltères",
        formatImg: "jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-épaules-bras-tousExo",
        description: "description"
    },
    {
        id: "3",
        nom: "Dips",
        formatImg: "jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-épaules-bras-tousExo",
        description: "description"
    },
    {
        id: "4",
        nom: "Pull over",
        formatImg: "jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-épaules-bras-tousExo",
        description: "description"
    },
    {
        id: "5",
        nom: "Écartés à la machine",
        formatImg: "jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "6",
        nom: "Écartés à la poulie haute",
        formatImg: "jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "7",
        nom: "Développé assis à la machine convergente",
        formatImg: "jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-dos-bras-tousExo",
        description: "description"
    },
    {
        id: "8",
        nom: "Leg Press",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "9",
        nom: "Leg Extension",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "10",
        nom: "Leg Curl",
        formatImg: "jpg",
        muscleImg: "ischio.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "11",
        nom: "Adducteurs",
        formatImg: "jpg",
        muscleImg: "adducteur.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "12",
        nom: "Abduction",
        formatImg: "jpg",
        muscleImg: "adducteur.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "13",
        nom: "Presse à mollets",
        formatImg: "jpg",
        muscleImg: "mollet.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "14",
        nom: "Traction",
        formatImg: "jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-épaules-tousExo",
        description: "description"
    },
    {
        id: "15",
        nom: "Traction prise large",
        formatImg: "jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-épaules-tousExo",
        description: "description"
    },
    {
        id: "16",
        nom: "Traction prise serré",
        formatImg: "jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-épaules-tousExo",
        description: "description"
    },
    {
        id: "17",
        nom: "Élévation latéral avec haltère",
        formatImg: "jpg",
        muscleImg: "deltoide.jpg",
        listMuscle: "épaules-tousExo",
        description: "description"
    },
    {
        id: "18",
        nom: "Shoulder press",
        formatImg: "jpg",
        muscleImg: "deltoide.jpg",
        listMuscle: "épaules-bras-tousExo",
        description: "description"
    },
    {
        id: "19",
        nom: "Tirage horizontal",
        formatImg: "jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-tousExo",
        description: "description"
    },
    {
        id: "20",
        nom: "Élévation latéral avec poulie",
        formatImg: "jpg",
        muscleImg: "deltoide.jpg",
        listMuscle: "épaules-tousExo",
        description: "description"
    },
    {
        id: "21",
        nom: "Squat",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "22",
        nom: "Soulevé de terre",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "23",
        nom: "Fente avec haltère",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "24",
        nom: "Fente surelevé avec haltère",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "25",
        nom: "Hip Thrust",
        formatImg: "jpg",
        muscleImg: "ischio.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "26",
        nom: "Low row",
        formatImg: "jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-épaules-tousExo",
        description: "description"
    },
    {
        id: "27",
        nom: "Soulevé de terre roumain",
        formatImg: "jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-épaules-tousExo",
        description: "description"
    },
    {
        id: "28",
        nom: "Tapis de course",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "29",
        nom: "Escalier",
        formatImg: "jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "30",
        nom: "Tirage vertical",
        formatImg: "jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-épaules-tousExo",
        description: "description"
    },
    {
        id: "31",
        nom: "Curl haltere",
        formatImg: "jpg",
        muscleImg: "bicep.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "32",
        nom: "Curl haltere marteau",
        formatImg: "jpg",
        muscleImg: "bicep.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "33",
        nom: "Triceps",
        formatImg: "jpg",
        muscleImg: "tricep.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "34",
        nom: "Abdominal rollout on knees",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "35",
        nom: "Abdominal crunch",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "36",
        nom: "Abduction leg lying, split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "37",
        nom: "Abdominal knees up, low handle",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "38",
        nom: "Abdominal straight legs",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "39",
        nom: "Fente, alterné",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "40",
        nom: "Squat",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "41",
        nom: "Squat, sumo",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "42",
        nom: "Air plane",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "43",
        nom: "Arch chop",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "44",
        nom: "Arm extension",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "45",
        nom: "Arnold press seated",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "épaules-tousExo",
        description: "description"
    },
    {
        id: "46",
        nom: "Back extension, machine - ground",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "47",
        nom: "Balance, standing",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-jambes-tousExo",
        description: "description"
    },
    {
        id: "48",
        nom: "Balance, V+sit",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "49",
        nom: "Bench press, assited",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "50",
        nom: "Bench press, inclined assited",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "51",
        nom: "Bench arl pullover",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-bras-tousExo",
        description: "description"
    },
    {
        id: "52",
        nom: "Bent over row",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "53",
        nom: "Bent over row, split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "54",
        nom: "Bent over row, standing",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "55",
        nom: "Bicep curl, machine",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "56",
        nom: "Bicep curl, poulie basse",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "57",
        nom: "Bicep curl, poulie haute",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "58",
        nom: "Bicep curl, suplinated (poulie)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "59",
        nom: "Bird dog",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "60",
        nom: "Bird dog, standing (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "61",
        nom: "Bottom up press",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "62",
        nom: "Box jumps",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "63",
        nom: "Bulgarian split squat (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "64",
        nom: "Burpees",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-tousExo",
        description: "description"
    },
    {
        id: "65",
        nom: "Burpees, jump up",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-tousExo",
        description: "description"
    },
    {
        id: "66",
        nom: "Burpees, jump up push up",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-pectoraux-tousExo",
        description: "description"
    },
    {
        id: "67",
        nom: "Butterfly",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "68",
        nom: "Calf raise",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "69",
        nom: "Calves",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "70",
        nom: "Chest press, suspension",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "71",
        nom: "Chest press, lower grip 2 mains",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "72",
        nom: "Chest press, lower grip split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "73",
        nom: "Chest press, upper grip 2 mains",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "74",
        nom: "Chest press, upper grip split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "75",
        nom: "Chest press, wide grip",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "76",
        nom: "Chest press, small grip",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "77",
        nom: "Child's pose",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "78",
        nom: "Chin up, narrow grip",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "79",
        nom: "Chin up",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-dos-tousExo",
        description: "description"
    },
    {
        id: "80",
        nom: "Crunch, machine",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "81",
        nom: "Crunch, sol",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "82",
        nom: "Crunch, bras extended",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "83",
        nom: "Crunch, diagonal alterned",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "84",
        nom: "Crunch, toe touch",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "85",
        nom: "Deadlift",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "86",
        nom: "Deadlift, sumo stance",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-fessiers-tousExo",
        description: "description"
    },
    {
        id: "87",
        nom: "Dips, machine",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-pectoraux-tousExo",
        description: "description"
    },
    {
        id: "88",
        nom: "Dips, chaise",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-pectoraux-tousExo",
        description: "description"
    },
    {
        id: "89",
        nom: "Diverging lat pull down, 2 mains",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "90",
        nom: "Elbow, split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "91",
        nom: "Donkey kick, split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "92",
        nom: "Glute kickback, split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "93",
        nom: "Glutes",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "94",
        nom: "Glutes raise, alterné",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "95",
        nom: "Goblet squat, split (gauche - droite)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "96",
        nom: "Goblet squat",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description"
    },
    {
        id: "97",
        nom: "Goodmorning",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-jambes-tousExo",
        description: "description"
    },
    {
        id: "98",
        nom: "Hip trust, (haltère - machine)",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description"
    },
    {
        id: "99",
        nom: "Reverse crunch",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    },
    {
        id: "100",
        nom: "Reverse curl",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description"
    },
    {
        id: "101",
        nom: "Reverse fly",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description"
    },
    {
        id: "102",
        nom: "Reverse fly, horizontal grip",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description"
    },
    {
        id: "103",
        nom: "Russian twist",
        formatImg: "jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description"
    }
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const STAT = [
    // [n°exo, nbRep1, poid1, nbRep2, poid1, nbRep3, poid3, nbRep4, poid4]

    // Nom bouchon
    [0, 0, 0],

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

    [34, 12, 15],
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

];

const NUTRITION = [

    // Bouchon
    [0, "titre", "description", "ingredient"],

    // Plat 1
    [1, "Shaker", "Shaker à prendre tout les matins, contient : <br/> - 1,312 de <b>Kcal</b> <br/> - 60g de <b>protéines</b> <br/> - 150g de <b>glucides</b> <br/> - 50g de <b>lipides</b>",
        "Une banane |200ml de lait |80g de flocon d'avoine |Une grande cuillère de beurre de cacacuète |300ml d'eau |Une petite cuillère de sirop d'agave |Une portion de protéines | Mixer le tout pendant 1 minutes"],
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

