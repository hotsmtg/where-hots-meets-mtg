const commanders = [
    {
        id: "001",
        name: "Abathur",
        cardType: "Transform",
        front: "resources/images/heroes/001a-abathur.png",
        back: "resources/images/heroes/001b-abathur.png"
    },
    {
        id: "002",
        name: "Alarak",
        front: "resources/images/heroes/002-alarak.png"
    },
    {
        id: "003",
        name: "Alexstrasza",
        cardType: "Transform",
        front: "resources/images/heroes/003a-alexstrasza.png",
        back: "resources/images/heroes/003b-alexstrasza.png"
    },
    {
        id: "004",
        name: "Ana",
        mana: "W R B",
        front: "resources/images/heroes/004-ana.png"
    },
    {
        id: "005",
        name: "Anduin",
        front: "resources/images/heroes/005-anduin.png"
    },
    {
        id: "006",
        name: "Anub'arak",
        front: "resources/images/heroes/006-anubarak.png"
    },
    {
        id: "007",
        name: "Artanis",
        mana: "2 W U",
        front: "resources/images/heroes/007-artanis.png"
    },
    {
        id: "008",
        name: "Arthas",
        front: "resources/images/heroes/008-arthas.png"
    },
    {
        id: "009",
        name: "Auriel",
        front: "resources/images/heroes/009-auriel.png"
    },
    {
        id: "010",
        name: "Azmodan",
        front: "resources/images/heroes/010-azmodan.png"
    },
    {
        id: "011",
        name: "Blaze",
        cardType: "Transform",
        front: "resources/images/heroes/11a-blaze.png",
        back: "resources/images/heroes/11b-blaze.png"
    },
    {
        id: "012",
        name: "Brightwing",
        front: "resources/images/heroes/012-brightwing.png"
    },
    {
        id: "013",
        name: "Cassia",
        front: "resources/images/heroes/013-cassia.png"
    },
    {
        id: "014",
        name: "Chen",
        front: "resources/images/heroes/014-chen.png"
    },
    {
        id: "015",
        name: "ChoGall",
    },
    {
        id: "016",
        name: "Chromie",
        front: "resources/images/heroes/016-chromie.png"
    },
    {
        id: "017",
        name: "D.Va",
        cardType: "Transform",
        front: "resources/images/heroes/017a-dva-meka.png",
        back: "resources/images/heroes/017b-dva-pilot.png"
    },
    {
        id: "018",
        name: "Deathwing",
        front: "resources/images/heroes/018-deathwing.png"
    },
    {
        id: "019",
        name: "Deckard",
        front: "resources/images/heroes/019-deckard.png"
    },
    {
        id: "020",
        name: "Dehaka",
        front: "resources/images/heroes/020-dehaka.png",
    },
    {
        id: "021",
        name: "Diablo",
        front: "resources/images/heroes/021-diablo.png"
    },
    {
        id: "022",
        name: "E.T.C.",
        front: "resources/images/heroes/022-etc.png"
    },
    {
        id: "023",
        name: "Falstad",
        front: "resources/images/heroes/023-falstad.png"
    },
    {
        id: "024",
        name: "Fenix",
        front: "resources/images/heroes/024-fenix.png"
    },
    {
        id: "025",
        name: "Garrosh",
        front: "resources/images/heroes/025-garrosh.png"
    },
    {
        id: "026",
        name: "Gazlowe",
        front: "resources/images/heroes/026-gazlowe.png"
    },
    {
        id: "027",
        name: "Genji",
        front: "resources/images/heroes/027-genji.png"
    },
    {
        id: "028",
        name: "Greymane",
        cardType: "Transform",
        front: "resources/images/heroes/028a-greymane.png",
        back: "resources/images/heroes/028b-greymane.png"
    },
    {
        id: "029",
        name: "Guldan",
        front: "resources/images/heroes/029-guldan.png"
    },
    {
        id: "030",
        name: "Hanzo",
        front: "resources/images/heroes/030-hanzo.png"
    },
    {
        id: "031",
        name: "Hogger",
        front: ""
    },
    {
        id: "032",
        name: "Illidan",
        front: "resources/images/heroes/032-illidan.png"
    },
    {
        id: "033",
        name: "Imperius",
        front: "resources/images/heroes/033-imperius.png"
    },
    {
        id: "034",
        name: "Jaina",
        front: "resources/images/heroes/034-jaina.png"
    },
    {
        id: "035",
        name: "Johanna",
        front: "resources/images/heroes/035-johanna.png"
    },
    {
        id: "036",
        name: "Junkrat",
        front: "resources/images/heroes/036-junkrat.png"
    },
    {
        id: "037",
        name: "Kael'thas",
        front: "resources/images/heroes/037-kaelthas.png"
    },
    {
        id: "038",
        name: "Kel'Thuzad",
        front: "resources/images/heroes/038-kelthuzad.png"
    },
    {
        id: "039",
        name: "Kerrigan",
        front: "resources/images/heroes/039-kerrigan.png"
    },
    {
        id: "040",
        name: "Kharazim",
        front: "resources/images/heroes/040-kharazim.png"
    },
    {
        id: "041",
        name: "Leoric",
        front: "resources/images/heroes/041-leoric.png"
    },
    {
        id: "042",
        name: "Li Li",
        front: "resources/images/heroes/042-lili.png"
    },
    {
        id: "043",
        name: "Li-Ming",
        front: "resources/images/heroes/043-liming.png"
    },
    {
        id: "044",
        name: "Morales",
        front: "resources/images/heroes/044-morales.png"
    },
    {
        id: "045",
        name: "Lunara",
        front: "resources/images/heroes/045-lunara.png"
    },
    {
        id: "046",
        name: "Lucio",
        front: "resources/images/heroes/046-lucio.png"
    },
    {
        id: "047",
        name: "Maiev",
        front: "resources/images/heroes/047-maiev.png"
    },
    {
        id: "048",
        name: "Malfurion",
        front: "resources/images/heroes/048-malfurion.png"
    },
    {
        id: "049",
        name: "Malthael",
        front: "resources/images/heroes/049-malthael.png"
    },
    {
        id: "050",
        name: "Mal'Ganis",
        front: "resources/images/heroes/050-malganis.png"
    },
    {
        id: "051",
        name: "Medivh",
        cardType: "Transform",
        front: "resources/images/heroes/051a-medivh.png",
        back: "resources/images/heroes/051b-medivh.png"
    },
    {
        id: "052",
        name: "Mei",
    },
    {
        id: "053",
        name: "Mephisto",
        front: "resources/images/heroes/053-mephisto.png"
    },
    {
        id: "054",
        name: "Muradin",
        front: "resources/images/heroes/054-muradin.png"
    },
    {
        id: "055",
        name: "Murky",
        front: "resources/images/heroes/055-murky.png"
    },
    {
        id: "056",
        name: "Nazeebo",
        front: "resources/images/heroes/056-nazeebo.png"
    },
    {
        id: "057",
        name: "Nova",
        front: "resources/images/heroes/057-nova.png"
    },
    {
        id: "058",
        name: "Orphea",
        front: "resources/images/heroes/058-orphea.png"
    },
    {
        id: "059",
        name: "Probius",
        front: "resources/images/heroes/059-probius.png"
    },
    {
        id: "060",
        name: "Qhira",
        front: "resources/images/heroes/060-qhira.png"
    },
    {
        id: "061",
        name: "Ragnaros",
        front: "resources/images/heroes/061a-ragnaros.png",
        back: "resources/images/heroes/061b-ragnaros.png"
    },
    {
        id: "062",
        name: "Raynor",
        front: "resources/images/heroes/062-raynor.png"
    },
    {
        id: "063",
        name: "Reghar",
        front: "resources/images/heroes/063-rehgar.png"
    },
    {
        id: "064",
        name: "Rexxar",
        front: "resources/images/heroes/064-rexxar.png"
    },
    {
        id: "065",
        name: "Samuro",
        front: "resources/images/heroes/065-samuro.png"
    },
    {
        id: "066",
        name: "Sgt. Hammer",
    },
    {
        id: "067",
        name: "Sonya",
        front: "resources/images/heroes/067-sonya.png"
    },
    {
        id: "068",
        name: "Stiches",
        front: "resources/images/heroes/068-stiches.png"
    },
    {
        id: "069",
        name: "Stukov",
        front: "resources/images/heroes/069-stukov.png"
    },
    {
        id: "070",
        name: "Sylvanas",
        front: "resources/images/heroes/070-sylvanas.png"
    },
    {
        id: "071",
        name: "Tassadar",
    },
    {
        id: "072",
        name: "The Butcher",
        front: "resources/images/heroes/072-butcher.png"
    },
    {
        id: "073",
        name: "The Lost Vikings",
    },
    {
        id: "074",
        name: "Thrall",
        front: "resources/images/heroes/074-thrall.png"
    },
    {
        id: "075",
        name: "Tracer",
        front: "resources/images/heroes/075-tracer.png"
    },
    {
        id: "076",
        name: "Tychus",
        front: "resources/images/heroes/076-tychus.png"
    },
    {
        id: "077",
        name: "Tyrael",
        front: "resources/images/heroes/077-tyrael.png"
    },
    {
        id: "078",
        name: "Tyrande",
        front: "resources/images/heroes/078-tyrande.png"
    },
    {
        id: "079",
        name: "Uther",
        front: "resources/images/heroes/079-uther.png"
    },
    {
        id: "080",
        name: "Valeera",
        front: "resources/images/heroes/080-valeera.png"
    },
    {
        id: "081",
        name: "Valla",
        front: "resources/images/heroes/081-valla.png"
    },
    {
        id: "082",
        name: "Varian",
        front: "resources/images/heroes/082-varian.png"
    },
    {
        id: "083",
        name: "Whitemane",
        front: "resources/images/heroes/083-whitemane.png"
    },
    {
        id: "084",
        name: "Xul",
        front: "resources/images/heroes/084-xul.png"
    },
    {
        id: "085",
        name: "Yrel",
        front: "resources/images/heroes/085-yrel.png"
    },
    {
        id: "086",
        name: "Zagara",
        front: "resources/images/heroes/086-zagara.png"
    },
    {
        id: "087",
        name: "Zarya",
        front: "resources/images/heroes/087-zarya.png"
    },
    {
        id: "088",
        name: "Zeratul",
        front: "resources/images/heroes/088-zeratul.png"
    },
    {
        id: "089",
        name: "Zul'jin",
        front: "resources/images/heroes/089-zuljin.png"
    }
]