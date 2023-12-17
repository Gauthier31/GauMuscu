const EXOS = [
    {
        id: 0,
        nom: "1",
        formatImg: "-",
        muscleImg: "2",
        listMuscle: "3",
        description: "4",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 1,
        nom: "Développé couché avec haltères",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [12, 20, "03:00"],
            [12, 20, "01:30"],
            [12, 20, "01:30"],
            [12, 20, "01:30"],
        ]
    }, {
        id: 2,
        nom: "Développé incliné avec haltères",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [12, 17.5, "03:00"],
            [12, 17.5, "01:30"],
            [12, 17.5, "01:30"],
            [12, 17.5, "01:30"],
        ]
    }, {
        id: 3,
        nom: "Dips",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-épaules-bras-tousExo",
        description: "description",
        stat: [
            [10, 4, "03:00"],
            [10, 4, "01:30"],
            [10, 4, "01:30"],
            [10, 4, "01:30"],
        ]
    }, {
        id: 4,
        nom: "Pull over",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "dos-épaules-tousExo",
        description: "description",
        stat: [
            [12, 20, "03:00"],
            [12, 20, "01:30"],
            [12, 20, "01:30"],
            [12, 20, "01:30"],
        ]
    }, {
        id: 5,
        nom: "Écartés à la machine",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [12, 55, "03:00"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
        ]
    }, {
        id: 6,
        nom: "Écartés à la poulie haute",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [12, 7.5, "03:00"],
            [12, 7.5, "01:30"],
            [12, 7.5, "01:30"],
            [12, 7.5, "01:30"],
        ]
    }, {
        id: 7,
        nom: "Développé assis à la machine convergente",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [12, 60, "03:00"],
            [12, 60, "01:30"],
            [12, 60, "01:30"],
            [12, 60, "01:30"],
        ]
    }, {
        id: 8,
        nom: "Leg Press",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 120, "03:00"],
            [12, 120, "01:30"],
            [12, 120, "01:30"],
            [12, 120, "01:30"],
        ]
    }, {
        id: 9,
        nom: "Leg Extension",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 55, "03:00"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
        ]
    }, {
        id: 10,
        nom: "Leg Curl",
        formatImg: ".jpg",
        muscleImg: "ischio.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 55, "03:00"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
        ]
    }, {
        id: 11,
        nom: "Adducteurs",
        formatImg: ".jpg",
        muscleImg: "adducteur.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 60, "03:00"],
            [12, 60, "01:30"],
            [12, 60, "01:30"],
            [12, 60, "01:30"],
        ]
    }, {
        id: 12,
        nom: "Abduction",
        formatImg: ".jpg",
        muscleImg: "adducteur.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 55, "03:00"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
            [12, 55, "01:30"],
        ]
    }, {
        id: 13,
        nom: "Presse à mollets",
        formatImg: ".jpg",
        muscleImg: "mollet.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [20, 60, "03:00"],
            [20, 60, "01:30"],
            [20, 60, "01:30"],
            [20, 60, "01:30"],
        ]
    }, {
        id: 14,
        nom: "Traction",
        formatImg: ".jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-tousExo",
        description: "description",
        stat: [
            [10, 0, "03:00"],
            [10, 0, "01:30"],
            [10, 0, "01:30"],
            [10, 0, "01:30"],
        ]
    }, {
        id: 15,
        nom: "Traction prise large",
        formatImg: ".jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-tousExo",
        description: "description",
        stat: [
            [10, 0, "03:00"],
            [10, 0, "01:30"],
            [10, 0, "01:30"],
            [10, 0, "01:30"],
        ]
    }, {
        id: 16,
        nom: "Traction prise serré",
        formatImg: ".jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-tousExo",
        description: "description",
        stat: [
            [10, 0, "03:00"],
            [10, 0, "01:30"],
            [10, 0, "01:30"],
            [10, 0, "01:30"],
        ]
    }, {
        id: 17,
        nom: "Élévation latéral avec haltère",
        formatImg: ".jpg",
        muscleImg: "deltoide.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [24, 8, "03:00"],
            [24, 8, "01:30"],
            [24, 8, "01:30"],
            [24, 8, "01:30"],
        ]
    }, {
        id: 18,
        nom: "Shoulder press",
        formatImg: ".jpg",
        muscleImg: "deltoide.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [12, 30, "03:00"],
            [12, 30, "01:30"],
            [12, 30, "01:30"],
            [12, 30, "01:30"],
        ]
    }, {
        id: 19,
        nom: "Tirage horizontal",
        formatImg: ".jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [12, 44, "03:00"],
            [12, 44, "01:30"],
            [12, 44, "01:30"],
            [12, 44, "01:30"],
        ]
    }, {
        id: 20,
        nom: "Élévation latéral avec poulie",
        formatImg: ".jpg",
        muscleImg: "deltoide.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [12, 5, "03:00"],
            [12, 5, "01:30"],
            [12, 5, "01:30"],
            [12, 5, "01:30"],
        ]
    }, {
        id: 21,
        nom: "Squat",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 50, "03:00"],
            [12, 50, "01:30"],
            [12, 50, "01:30"],
            [12, 50, "01:30"],
        ]
    }, {
        id: 22,
        nom: "Soulevé de terre",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 50, "03:00"],
            [12, 50, "01:30"],
            [12, 50, "01:30"],
            [12, 50, "01:30"],
        ]
    }, {
        id: 23,
        nom: "Fente avec haltère",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 12.5, "03:00"],
            [12, 12.5, "01:30"],
            [12, 12.5, "01:30"],
            [12, 12.5, "01:30"],
        ]
    }, {
        id: 24,
        nom: "Fente surelevé avec haltère",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 10, "03:00"],
            [12, 10, "01:30"],
            [12, 10, "01:30"],
            [12, 10, "01:30"],
        ]
    }, {
        id: 25,
        nom: "Hip Thrust",
        formatImg: ".jpg",
        muscleImg: "ischio.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [12, 40, "03:00"],
            [12, 40, "01:30"],
            [12, 40, "01:30"],
            [12, 40, "01:30"],
        ]
    }, {
        id: 26,
        nom: "Low row",
        formatImg: ".jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-épaules-tousExo",
        description: "description",
        stat: [
            [12, 60, "03:00"],
            [12, 60, "01:30"],
            [12, 60, "01:30"],
            [12, 60, "01:30"],
        ]
    }, {
        id: 27,
        nom: "Soulevé de terre roumain",
        formatImg: ".jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [12, 30, "03:00"],
            [12, 30, "01:30"],
            [12, 30, "01:30"],
            [12, 30, "01:30"],
        ]
    }, {
        id: 28,
        nom: "Tapis de course",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 29,
        nom: "Escalier",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 30,
        nom: "Tirage vertical",
        formatImg: ".jpg",
        muscleImg: "dorseaux.jpg",
        listMuscle: "dos-bras-tousExo",
        description: "description",
        stat: [
            [12, 45, "03:00"],
            [12, 45, "01:30"],
            [12, 45, "01:30"],
            [12, 45, "01:30"],
        ]
    }, {
        id: 31,
        nom: "Curl haltere",
        formatImg: ".jpg",
        muscleImg: "bicep.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [9, 12.5, "03:00"],
            [9, 12.5, "01:30"],
            [9, 12.5, "01:30"],
            [9, 12.5, "01:30"],
        ]
    }, {
        id: 32,
        nom: "Curl haltere marteau",
        formatImg: ".jpg",
        muscleImg: "bicep.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [12, 10, "03:00"],
            [12, 10, "01:30"],
            [12, 10, "01:30"],
            [12, 10, "01:30"],
        ]
    }, {
        id: 33,
        nom: "Triceps",
        formatImg: ".jpg", //.gif
        muscleImg: "tricep.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [12, 15, "03:00"],
            [12, 15, "01:30"],
            [12, 15, "01:30"],
            [12, 15, "01:30"],
        ]
    }, {
        id: 34,
        nom: "Abdominal rollout on knees",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [12, 15, "03:00"],
            [12, 15, "01:30"],
            [12, 15, "01:30"],
            [12, 15, "01:30"],
        ]
    }, {
        id: 35,
        nom: "Abdominal crunch",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 36,
        nom: "Abduction leg lying, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 37,
        nom: "Abdominal knees up, low handle",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 38,
        nom: "Abdominal straight legs",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 39,
        nom: "Fente, alterné",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 40,
        nom: "Squat",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 41,
        nom: "Squat, sumo",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 42,
        nom: "Air plane",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 43,
        nom: "Arch chop",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 44,
        nom: "Arm extension",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 45,
        nom: "Arnold press seated",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 46,
        nom: "Back extension, machine - ground",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 47,
        nom: "Balance, standing",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 48,
        nom: "Balance, V+sit",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 49,
        nom: "Bench press, assited",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 50,
        nom: "Bench press, inclined assited",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 51,
        nom: "Bench arl pullover",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 52,
        nom: "Bent over row",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 53,
        nom: "Bent over row, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 54,
        nom: "Bent over row, standing",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 55,
        nom: "Bicep curl, machine",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 56,
        nom: "Bicep curl, poulie basse",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 57,
        nom: "Bicep curl, poulie haute",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 58,
        nom: "Bicep curl, suplinated (poulie)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 59,
        nom: "Bird dog",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 60,
        nom: "Bird dog, standing (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 61,
        nom: "Bottom up press",
        formatImg: ".gif",
        muscleImg: "épaules.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 62,
        nom: "Box jumps",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 63,
        nom: "Bulgarian split squat (gauche - droite)",
        formatImg: ".gif",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 64,
        nom: "Burpees",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 65,
        nom: "Burpees, jump up",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 66,
        nom: "Burpees, jump up push up",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 67,
        nom: "Butterfly",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 68,
        nom: "Élévation des mollets",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 69,
        nom: "Calves",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 70,
        nom: "Chest press, suspension",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 71,
        nom: "Chest press, lower grip 2 mains",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 72,
        nom: "Chest press, lower grip split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 73,
        nom: "Chest press, upper grip 2 mains",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 74,
        nom: "Chest press, upper grip split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 75,
        nom: "Chest press, wide grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 76,
        nom: "Chest press, small grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 77,
        nom: "Child's pose",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 78,
        nom: "Chin up, narrow grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 79,
        nom: "Chin up",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 80,
        nom: "Crunch, machine",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 81,
        nom: "Crunch, sol",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 82,
        nom: "Crunch, bras extended",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 83,
        nom: "Crunch, diagonal alterned",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 84,
        nom: "Crunch, toe touch",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 85,
        nom: "Deadlift",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 86,
        nom: "Deadlift, sumo stance",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 87,
        nom: "Dips, machine",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 88,
        nom: "Dips, chaise",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 89,
        nom: "Diverging lat pull down, 2 mains",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 90,
        nom: "Elbow, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 91,
        nom: "Donkey kick, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 92,
        nom: "Glute kickback, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 93,
        nom: "Glutes",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 94,
        nom: "Glutes raise, alterné",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 95,
        nom: "Goblet squat, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 96,
        nom: "Goblet squat",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 97,
        nom: "Goodmorning",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 98,
        nom: "Hip trust, (haltère - machine)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 99,
        nom: "Reverse crunch",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 100,
        nom: "Reverse curl",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 101,
        nom: "Reverse fly",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 102,
        nom: "Reverse fly, horizontal grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }, {
        id: 103,
        nom: "Russian twist",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    ////////////////////////////////////////////////////////////////
    {
        id: 104,
        nom: "Abdominal rollout on knees",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 105,
        nom: "Abdominal crunch",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 106,
        nom: "Abduction",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 107,
        nom: "Abduction leg lying, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 108,
        nom: "Abdominal knees up, low handle",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 109,
        nom: "Abdominal straight jambes",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 110,
        nom: "Adduction",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 111,
        nom: "Adduction leg standing, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 112,
        nom: "Adducteur",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 113,
        nom: "Lunge, alternated",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 114,
        nom: "Squat",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 115,
        nom: "Squat, sumo",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 116,
        nom: "Air plane",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 117,
        nom: "Arch chop",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 118,
        nom: "Arm extension",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 119,
        nom: "Arnold press seated",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 120,
        nom: "Assited dipping",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 121,
        nom: "Assisted pull up, neutral grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 122,
        nom: "Assisted pull up, wide grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 123,
        nom: "Back extension, machine - ground",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 124,
        nom: "Back extension",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 125,
        nom: "Balance, standing",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 126,
        nom: "Balance, V+sit",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 127,
        nom: "Bench press, 2 haltères",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 128,
        nom: "Bench press, assited",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 129,
        nom: "Bench press, inclined",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 130,
        nom: "Bench press, inclined assited",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 131,
        nom: "Bench press, alterned",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 132,
        nom: "Bench arl pullover",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo, bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 133,
        nom: "Bent over row",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 134,
        nom: "Bent over row, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 135,
        nom: "Bent over triceps kickback, alternated",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 136,
        nom: "Bent over row",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 137,
        nom: "Bent over row, standing",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 138,
        nom: "Bent over row, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 139,
        nom: "Bicep curl, machine",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 140,
        nom: "Bicep curl, 2 haltères (assis)",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 141,
        nom: "Bicep curl, poulie basse",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 142,
        nom: "Bicep curl, poulie haute",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 143,
        nom: "Bicep curl, seated",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 144,
        nom: "Bicep curl, suplinated (poulie)",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 145,
        nom: "Bicycle kick",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 146,
        nom: "Bird dog",
        formatImg: ".gif",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 147,
        nom: "Bird dog, standing (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 148,
        nom: "Bottom up press",
        formatImg: ".gif",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 149,
        nom: "Box jumps",
        formatImg: ".gif",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 150,
        nom: "Tapis de course",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg",
        listMuscle: "cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 151,
        nom: "Bulgarian split squat (gauche - droite)",
        formatImg: ".gif",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 152,
        nom: "Burpees",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg, abdominaux.jpg, jambes.jpg",
        listMuscle: "cardio-tousExo, abdominaux-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 153,
        nom: "Burpees, jump up",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg, abdominaux.jpg, jambes.jpg",
        listMuscle: "cardio-tousExo, abdominaux-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 155,
        nom: "Butterfly",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 156,
        nom: "Calf raise",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 157,
        nom: "Calves",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 158,
        nom: "Chest press, suspension",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 159,
        nom: "Chest press, lower grip 2 mains",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 160,
        nom: "Chest press, lower grip split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 161,
        nom: "Chest press, upper grip 2 mains",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 162,
        nom: "Chest press, upper grip split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 163,
        nom: "Chest press, wide grip",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 164,
        nom: "Chest press, small grip",
        formatImg: ".jpg",
        muscleImg: "pectorax.jpg",
        listMuscle: "pectorax-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 165,
        nom: "Child's pose",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 166,
        nom: "Chin up, narrow grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg, bras.jpg",
        listMuscle: "dos-tousExo, bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 167,
        nom: "Chin up",
        formatImg: ".jpg",
        muscleImg: "bras.jpg, dos.jpg",
        listMuscle: "bras-tousExo, dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 168,
        nom: "Chopper hight low",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg, épaules.jpg",
        listMuscle: "abdominaux-tousExo, épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 169,
        nom: "Concentration curl split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 170,
        nom: "Core rotation stanting split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 171,
        nom: "Escalier",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 172,
        nom: "Crunch, machine",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 173,
        nom: "Crunch, sol",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 174,
        nom: "Crunch, bras extended",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 175,
        nom: "Crunch, diagonal alterned",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 176,
        nom: "Crunch, toe touch",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 176,
        nom: "Deadlift, (jambes - kettlebell)",
        formatImg: ".jpg",
        muscleImg: "dos.jpg, jambes.jpg",
        listMuscle: "dos-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 177,
        nom: "Deadlift",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 178,
        nom: "Deadlift, sumo stance",
        formatImg: ".jpg",
        muscleImg: "dos.jpg, fessiers.jpg",
        listMuscle: "dos-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 179,
        nom: "Dips, barre parallèle",
        formatImg: ".jpg",
        muscleImg: "bras.jpg, pectoraux.jpg",
        listMuscle: "bras-tousExo, pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 180,
        nom: "Dips, machine",
        formatImg: ".jpg",
        muscleImg: "bras.jpg, pectoraux.jpg",
        listMuscle: "bras-tousExo, pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 181,
        nom: "Dips, chaise",
        formatImg: ".jpg",
        muscleImg: "bras.jpg, pectoraux.jpg",
        listMuscle: "bras-tousExo, pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 182,
        nom: "Diverging lat pull down, 2 mains",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 183,
        nom: "Trippling heel to butt",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 184,
        nom: "Trippling high knees",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 185,
        nom: "Endoration 45 degrees abduction, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 186,
        nom: "Endoration, standing split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 187,
        nom: "External épaules , split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 188,
        nom: "Fly",
        formatImg: ".jpg",
        muscleImg: "pectorau.jpg",
        listMuscle: "pectorau-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 189,
        nom: "Front lunge, alterned",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 190,
        nom: "Front lunge, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 191,
        nom: "Front lunge raise",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 192,
        nom: "Front lunge raise, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 193,
        nom: "Front rotation",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 194,
        nom: "Front squat, libre",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 195,
        nom: "Front squat, machine",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 196,
        nom: "Full body",
        formatImg: ".jpg",
        muscleImg: "échauffement.jpg",
        listMuscle: "échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 197,
        nom: "Full body, stretch standing",
        formatImg: ".jpg",
        muscleImg: "échauffement.jpg",
        listMuscle: "échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 199,
        nom: "Glutes",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 200,
        nom: "Glutes raise, alternated",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 201,
        nom: "Goblet lunge, alternated",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 202,
        nom: "Goblet squat, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 203,
        nom: "Goblet squat",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg, fessiers.jpg",
        listMuscle: "jambes-tousExo, fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 204,
        nom: "Goodmorning",
        formatImg: ".jpg",
        muscleImg: "dos.jpg, jambes.jpg",
        listMuscle: "dos-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 205,
        nom: "Half kneeling press, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 206,
        nom: "Hammer curl",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 207,
        nom: "Hammer curl, alternated",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 208,
        nom: "Hamstring",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 209,
        nom: "Hamstring curl",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 210,
        nom: "Hamstring curl, lying split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 211,
        nom: "Hand walk forward",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 212,
        nom: "Hand walk to plank walk sideways",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 213,
        nom: "Hanging knee raises",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 214,
        nom: "High intensity",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg",
        listMuscle: "cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 215,
        nom: "High intensity, low resistance",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg",
        listMuscle: "cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 216,
        nom: "High pull",
        formatImg: ".jpg",
        muscleImg: "dos.jpg, jambes.jpg",
        listMuscle: "dos-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 217,
        nom: "High pull, sumo stance",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 218,
        nom: "High resistance (bike - cross)",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg, jambes.jpg",
        listMuscle: "cardio-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 219,
        nom: "Hip abduction stanting, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 220,
        nom: "Hip bridge (libre - haltère)",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 221,
        nom: "Hip bridge, leg extension lying alterned",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 222,
        nom: "Hip thrust, (haltère - machine)",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 223,
        nom: "Horizontal row, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 224,
        nom: "Horizontal row, 2 mains",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 225,
        nom: "Horizontal row, poulie split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 226,
        nom: "Human board high",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 227,
        nom: "Jackknife",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 228,
        nom: "Jump squat",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 229,
        nom: "Tirage vertical",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 230,
        nom: "Tirage vertical, narrow grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 231,
        nom: "Tirage vertical, neutral grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 232,
        nom: "Tirage vertical, wide grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 233,
        nom: "Lateral jump floor tap, alternated",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 234,
        nom: "Lateral lunges",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 235,
        nom: "Lateral quick feet",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 236,
        nom: "Lateral raise poulit, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 237,
        nom: "Lateral star lunge, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 238,
        nom: "Leg curl, seated",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 239,
        nom: "Leg curl, seated split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 240,
        nom: "Leg extension, seated",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 241,
        nom: "Leg extension seated split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 242,
        nom: "Leg press",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 243,
        nom: "Quick feet in place",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg",
        listMuscle: "cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 244,
        nom: "Renegade rows",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 245,
        nom: "Reverse crunch",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 246,
        nom: "Reverse curl",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 247,
        nom: "Reverse fly",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 248,
        nom: "Reverse fly, horizontal grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 249,
        nom: "Reverse fly, horizontal low split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 250,
        nom: "Reverse fly, horizontal high split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 251,
        nom: "Reverse lunge to épaules  press, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 252,
        nom: "Reverse lunge, alternated",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 253,
        nom: "Romanian deadlift",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 254,
        nom: "Rotation, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 255,
        nom: "Row, supension",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 256,
        nom: "Runner's reach, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 257,
        nom: "Russian twist",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 256,
        nom: "Scissors",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 257,
        nom: "Épaules , foam roller",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 258,
        nom: "Standing calf raise",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 259,
        nom: "Standing pectoraux press",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 260,
        nom: "Standing high row",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 261,
        nom: "Standing low row",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 262,
        nom: "Standing épaules  press",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 263,
        nom: "Stationnary lunge, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 264,
        nom: "Stiff leg deadlift",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 265,
        nom: "Stiffed leg deadlift",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 266,
        nom: "Straight Arm Pullover",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 267,
        nom: "Sumo Squat",
        formatImg: ".jpg",
        muscleImg: "fessiers-jambes.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 268,
        nom: "Superman, Alternated",
        formatImg: ".jpg",
        muscleImg: "dos-epaules.jpg",
        listMuscle: "dos-epaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 269,
        nom: "Swing",
        formatImg: ".jpg",
        muscleImg: "dos-epaules.jpg",
        listMuscle: "dos-epaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 270,
        nom: "Swing, Americain",
        formatImg: ".jpg",
        muscleImg: "dos-epaules.jpg",
        listMuscle: "dos-epaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 271,
        nom: "Thruster",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 272,
        nom: "Total Abdominal",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 273,
        nom: "Triceps Extension, Poulie",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 274,
        nom: "Triceps Extension, Kettlebell",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 275,
        nom: "Triceps Extension, Lying",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 276,
        nom: "Triceps Extension, Seated",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 277,
        nom: "Triceps Kickback, Split (Gauche - Droite)",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 278,
        nom: "Triceps Push Down",
        formatImg: ".jpg",
        muscleImg: "bras.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 279,
        nom: "Tripling Heel to Butt",
        formatImg: ".jpg",
        muscleImg: "fessiers-jambes-échauffement.jpg",
        listMuscle: "fessiers-jambes-échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 280,
        nom: "Tripling High Knees",
        formatImg: ".jpg",
        muscleImg: "jambes-échauffement.jpg",
        listMuscle: "jambes-échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 281,
        nom: "Tuck Jump",
        formatImg: ".jpg",
        muscleImg: "cardio.jpg",
        listMuscle: "cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 282,
        nom: "Upright Row",
        formatImg: ".jpg",
        muscleImg: "epaules.jpg",
        listMuscle: "epaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 283,
        nom: "Upright Row, Standing",
        formatImg: ".jpg",
        muscleImg: "epaules.jpg",
        listMuscle: "epaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 284,
        nom: "V-Sit",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 285,
        nom: "Vertical Row",
        formatImg: ".jpg",
        muscleImg: "epaules.jpg",
        listMuscle: "epaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 286,
        nom: "Vertical Row, 2 Mains",
        formatImg: ".jpg",
        muscleImg: "epaules.jpg",
        listMuscle: "epaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 287,
        nom: "Walking Lunges",
        formatImg: ".jpg",
        muscleImg: "jambes-échauffement.jpg",
        listMuscle: "jambes-échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 288,
        nom: "Walking, Inclined",
        formatImg: ".jpg",
        muscleImg: "jambes-échauffement-cardio.jpg",
        listMuscle: "jambes-échauffement-cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 289,
        nom: "Walking, Neutral Incline",
        formatImg: ".jpg",
        muscleImg: "jambes-échauffement-cardio.jpg",
        listMuscle: "jambes-échauffement-cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 290,
        nom: "Wood Chop Horizontal, Split (Gauche - Droite)",
        formatImg: ".jpg",
        muscleImg: "abdominaux.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 291,
        nom: "Power clean press, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 292,
        nom: "Power pull",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg, épaules.jpg",
        listMuscle: "pectoraux-tousExo, épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 293,
        nom: "Press lying, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 294,
        nom: "Press out, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 295,
        nom: "Prisoner squat",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 296,
        nom: "Prone leg curl",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 297,
        nom: "Prone leg curl, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 298,
        nom: "Pull through",
        formatImg: ".jpg",
        muscleImg: "fessiers.jpg, jambes.jpg",
        listMuscle: "fessiers-tousExo, jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 299,
        nom: "Pull up wide grip",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 300,
        nom: "Pull up, neutral",
        formatImg: ".jpg",
        muscleImg: "dos.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 301,
        nom: "Push press",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 302,
        nom: "Push press, front",
        formatImg: ".jpg",
        muscleImg: "épaules.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 303,
        nom: "Push up",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 304,
        nom: "Push up, and release",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 305,
        nom: "Push up, narrow",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 306,
        nom: "Push up, incline",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 307,
        nom: "Push up, supension leg",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 308,
        nom: "Push up, équilibre",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 309,
        nom: "Push up, narrow alterned",
        formatImg: ".jpg",
        muscleImg: "pectoraux.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 310,
        nom: "Quadriceps",
        formatImg: ".jpg",
        muscleImg: "jambes.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 311,
        nom: "Quick feet in place",
        formatImg: ".jpg",
        muscleImg: "defautMuscle.jpg",
        listMuscle: "cardio-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 312,
        nom: "Étirement",
        formatImg: ".jpg",
        muscleImg: "defautMuscle.jpg",
        listMuscle: "échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }, {
        id: 313,
        nom: "Échauffement",
        formatImg: ".jpg",
        muscleImg: "defautMuscle.jpg",
        listMuscle: "échauffement-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"]
        ]
    }
];