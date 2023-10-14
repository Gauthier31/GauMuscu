const NUTRITIONS = [
    {
        id: 0,
        titre: "titre",
        description: "description",
        apport: [{
            Kcal: 0,
            prot: 0,
            glucides: 0,
            lipides: 0,
        }],
        instruction: [
            "",
            "",
            ""
        ],
        ingredient: [""]
    },
    {
        id: 1,
        titre: "Shaker",
        description: "Ce shaker est conçu pour être pris tous les matins. Il fournit un apport calorique élevé, principalement en protéines et en glucides, ce qui en fait une option idéale pour la prise de masse. Assurez-vous de suivre les instructions pour préparer le shaker correctement. Vous pouvez également adapter les quantités en fonction de vos besoins nutritionnels spécifiques.",
        apport: [{
            Kcal: 1.312,
            prot: 60,
            glucides: 150,
            lipides: 50,
        }],
        instruction: [
            "Dans un mixeur, ajoutez une banane, 200 ml de lait, 80 g de flocons d'avoine, 1 grande cuillère de beurre de cacahuète, 1 petite cuillère de sirop d'agave, 300 ml d'eau, et 30 g de protéines en poudre.",
            "Mixez le tout pendant environ 1 minute jusqu'à obtenir un mélange homogène.",
            "Ce shaker est à prendre chaque matin."
        ],
        ingredient: [
            ["Banane", "1"],
            ["Lait", "200ml"],
            ["Flocon d'avoine", "80g"],
            ["Grande cuillère de beurre de cacahuète", "1"],
            ["Petite cuillère de sirop d'agave", "1"],
            ["Eau", "300ml"],
            ["Protéines en poudres", "30g"],
            ["Mixer", "1 minute"],
        ]
    },
    {
        id: 2,
        titre: "Déjeuner Protéiné",
        description: "Le petit-déjeuner est un repas essentiel pour commencer votre journée. Il fournit des protéines et des graisses saines pour maintenir votre énergie tout au long de la matinée. Les œufs fournissent des protéines de haute qualité et les légumes apportent des vitamines et des minéraux.",
        apport: [{
            Kcal: 800,
            prot: 40,
            glucides: 60,
            lipides: 30,
        }],
        instruction: [
            "Préparez des œufs brouillés avec du poulet grillé (200g) dans une poêle antiadhésive.",
            "Servez les œufs brouillés avec du riz brun (150g) et des légumes cuits à la vapeur (150g).",
            "Ajoutez une cuillère à soupe d'huile d'olive pour plus de saveur."
        ],
        ingredient: [
            ["Poulet grillé", "200g"],
            ["Riz brun", "150g"],
            ["Légumes cuits à la vapeur", "150g"],
            ["Huile d'olive", "1 cuillère à soupe"],
        ]
    },
    {
        id: 3,
        titre: "Collation de l'après-midi",
        description: "La collation de l'après-midi vous aide à éviter de trop manger au dîner. Le yaourt grec est riche en protéines, les fruits apportent des glucides naturels et les noix fournissent des graisses saines, ce qui en fait une option équilibrée.",
        apport: [{
            Kcal: 400,
            prot: 20,
            glucides: 40,
            lipides: 15,
        }],
        instruction: [
            "Prenez un yaourt grec (150g).",
            "Ajoutez des morceaux de fruits rouges (100g) et saupoudrez de 20g d'amandes hachées.",
        ],
        ingredient: [
            ["Yaourt grec", "150g"],
            ["Fruits rouges", "100g"],
            ["Amandes", "20g"],
        ]
    },
    {
        id: 4,
        titre: "Dîner Équilibré",
        description: " Le dîner doit être une portion équilibrée de protéines, de glucides et de légumes. Le saumon est une excellente source de protéines et d'acides gras oméga-3, tandis que le quinoa est riche en protéines et en glucides complexes.",
        apport: [{
            Kcal: 600,
            prot: 30,
            glucides: 50,
            lipides: 25,
        }],
        instruction: [
            "Faites cuire une portion de saumon au four (150g).",
            "Servez le saumon avec du quinoa (150g) et des légumes verts cuits à la vapeur (150g).",
            "Ajoutez une cuillère à soupe d'huile d'olive pour plus de saveur."
        ],
        ingredient: [
            ["Saumon cuit au four", "150g"],
            ["Quinoa", "150g"],
            ["Légumes verts", "150g"],
            ["Huile d'olive", "1 cuillère à soupe"],
        ]
    },
    {
        id: 5,
        titre: "Collation du Soir",
        description: "La collation du soir est une option si vous avez des besoins caloriques élevés. Le smoothie protéiné offre des protéines et des glucides pour la récupération nocturne, mais assurez-vous de ne pas manger trop près du coucher.",
        apport: [{
            Kcal: 300,
            prot: 15,
            glucides: 30,
            lipides: 10,
        }],
        instruction: [
            "Dans un bol, servez 150g de cottage cheese.",
            "Servez-le avec 2 tranches de pain complet et ajoutez une cuillère à café de miel pour plus de saveur."
        ],
        ingredient: [
            ["Cottage cheese", "150g"],
            ["Pain complet", "2 tranches"],
            ["Miel", "1 cuillère à café"],
        ]
    }
]
