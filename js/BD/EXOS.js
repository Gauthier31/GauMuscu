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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
        id: 28,
        nom: "Tapis de course",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 29,
        nom: "Escalier",
        formatImg: ".jpg",
        muscleImg: "quadriceps.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
        id: 35,
        nom: "Abdominal crunch",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 36,
        nom: "Abduction leg lying, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 37,
        nom: "Abdominal knees up, low handle",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 38,
        nom: "Abdominal straight legs",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 39,
        nom: "Fente, alterné",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 40,
        nom: "Squat",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 41,
        nom: "Squat, sumo",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 42,
        nom: "Air plane",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 43,
        nom: "Arch chop",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 44,
        nom: "Arm extension",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 45,
        nom: "Arnold press seated",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "épaules-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 46,
        nom: "Back extension, machine - ground",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 47,
        nom: "Balance, standing",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 48,
        nom: "Balance, V+sit",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 49,
        nom: "Bench press, assited",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 50,
        nom: "Bench press, inclined assited",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 51,
        nom: "Bench arl pullover",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 52,
        nom: "Bent over row",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 53,
        nom: "Bent over row, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 54,
        nom: "Bent over row, standing",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 55,
        nom: "Bicep curl, machine",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 56,
        nom: "Bicep curl, poulie basse",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 57,
        nom: "Bicep curl, poulie haute",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 58,
        nom: "Bicep curl, suplinated (poulie)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 59,
        nom: "Bird dog",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 60,
        nom: "Bird dog, standing (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 61,
        nom: "Bottom up press",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 62,
        nom: "Box jumps",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 63,
        nom: "Bulgarian split squat (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 64,
        nom: "Burpees",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 65,
        nom: "Burpees, jump up",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 66,
        nom: "Burpees, jump up push up",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "cardio-abdominaux-jambes-pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 67,
        nom: "Butterfly",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 68,
        nom: "Calf raise",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 69,
        nom: "Calves",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 70,
        nom: "Chest press, suspension",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 71,
        nom: "Chest press, lower grip 2 mains",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 72,
        nom: "Chest press, lower grip split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 73,
        nom: "Chest press, upper grip 2 mains",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 74,
        nom: "Chest press, upper grip split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 75,
        nom: "Chest press, wide grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 76,
        nom: "Chest press, small grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 77,
        nom: "Child's pose",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 78,
        nom: "Chin up, narrow grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 79,
        nom: "Chin up",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 80,
        nom: "Crunch, machine",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 81,
        nom: "Crunch, sol",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 82,
        nom: "Crunch, bras extended",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 83,
        nom: "Crunch, diagonal alterned",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 84,
        nom: "Crunch, toe touch",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 85,
        nom: "Deadlift",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 86,
        nom: "Deadlift, sumo stance",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-fessiers-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 87,
        nom: "Dips, machine",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 88,
        nom: "Dips, chaise",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 89,
        nom: "Diverging lat pull down, 2 mains",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 90,
        nom: "Elbow, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 91,
        nom: "Donkey kick, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 92,
        nom: "Glute kickback, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 93,
        nom: "Glutes",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 94,
        nom: "Glutes raise, alterné",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 95,
        nom: "Goblet squat, split (gauche - droite)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 96,
        nom: "Goblet squat",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 97,
        nom: "Goodmorning",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 98,
        nom: "Hip trust, (haltère - machine)",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "fessiers-jambes-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 99,
        nom: "Reverse crunch",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 100,
        nom: "Reverse curl",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "bras-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 101,
        nom: "Reverse fly",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "pectoraux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 102,
        nom: "Reverse fly, horizontal grip",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "dos-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    },
    {
        id: 103,
        nom: "Russian twist",
        formatImg: ".jpg",
        muscleImg: "defautExo.jpg",
        listMuscle: "abdominaux-tousExo",
        description: "description",
        stat: [
            [0, 0, "03:00"],
        ]
    }
];