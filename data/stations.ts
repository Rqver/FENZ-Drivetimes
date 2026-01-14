export enum StationType {
    CAREER = "Career",
    VOLUNTEER = "Volunteer",
    COMPOSITE = "Composite",
    RURAL = "Rural",
    INDUSTRY = "Industry"
}

export interface Station {
    x: number,
    y: number,
    name: string,
    type: StationType,
    callsignPrefix: string,
    northIsland?: boolean
}

const stations: Station[] = [
    {
        x: 174.3207891,
        y: -35.72011822,
        name: "Whangarei",
        type: StationType.CAREER,
        callsignPrefix: "WHAN12",
        northIsland: true
    },
    {
        x: 173.9215429,
        y: -36.03190505,
        name: "Te Kopuru",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEKO13",
        northIsland: true
    },
    {
        x: 174.5046611,
        y: -35.8152879,
        name: "Whangarei Heads",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHAN14",
        northIsland: true
    },
    {
        x: 174.3281456,
        y: -35.80092183,
        name: "Portland",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PORT15",
        northIsland: true
    },
    {
        x: 174.448357,
        y: -35.98304322,
        name: "Waipu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIP16",
        northIsland: true
    },
    {
        x: 174.4500916,
        y: -35.90027752,
        name: "Ruakaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RUAK17",
        northIsland: true
    },
    {
        x: 173.1548291,
        y: -35.16652889,
        name: "Ahipara",
        type: StationType.VOLUNTEER,
        callsignPrefix: "AHIP18",
        northIsland: true
    },
    {
        x: 174.2995782,
        y: -35.68109736,
        name: "Kamo",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAMO19",
        northIsland: true
    },
    {
        x: 174.3667906,
        y: -35.76533531,
        name: "Onerahi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ONER20",
        northIsland: true
    },
    {
        x: 174.2030285,
        y: -35.84457322,
        name: "Maungakaramea",
        type: StationType.RURAL,
        callsignPrefix: "MAUN21",
        northIsland: true
    },
    {
        x: 173.9122616,
        y: -35.26317178,
        name: "Bay Of Islands Airport",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRKER23",
        northIsland: true
    },
    {
        x: 174.3623582,
        y: -35.76772177,
        name: "Air Rescue Whangarei",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRWHAN",
        northIsland: true
    },
    {
        x: 173.8019643,
        y: -35.41100313,
        name: "Kaikohe VRFF",
        type: StationType.RURAL,
        callsignPrefix: "KAIK65",
        northIsland: true
    },
    {
        x: 173.6816278,
        y: -34.98780535,
        name: "Taupo Bay",
        type: StationType.RURAL,
        callsignPrefix: "TAUP46",
        northIsland: true
    },
    {
        x: 174.2559944,
        y: -35.22069791,
        name: "Rawhiti",
        type: StationType.RURAL,
        callsignPrefix: "RAWH47",
        northIsland: true
    },
    {
        x: 173.9008063,
        y: -35.04440892,
        name: "Cavalli",
        type: StationType.RURAL,
        callsignPrefix: "CAVA48",
        northIsland: true
    },
    {
        x: 173.3815649,
        y: -34.86847189,
        name: "Karikari",
        type: StationType.RURAL,
        callsignPrefix: "KARI52",
        northIsland: true

    },
    {
        x: 173.2984743,
        y: -34.88046548,
        name: "Rangiputa",
        type: StationType.RURAL,
        callsignPrefix: "RANG53",
        northIsland: true
    },
    {
        x: 173.1273578,
        y: -34.82506112,
        name: "Houhora",
        type: StationType.RURAL,
        callsignPrefix: "HOUH54",
        northIsland: true
    },
    {
        x: 173.3905715,
        y: -35.25986186,
        name: "Broadwood",
        type: StationType.RURAL,
        callsignPrefix: "BROA55",
        northIsland: true
    },
    {
        x: 174.4603415,
        y: -35.50983338,
        name: "Whananaki",
        type: StationType.RURAL,
        callsignPrefix: "WHAN61",
        northIsland: true
    },
    {
        x: 173.8696024,
        y: -35.94001564,
        name: "Dargaville",
        type: StationType.VOLUNTEER,
        callsignPrefix: "DARG62",
        northIsland: true
    },
    {
        x: 174.0220281,
        y: -36.13625675,
        name: "Ruawai",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RUAW63",
        northIsland: true
    },
    {
        x: 174.2867459,
        y: -35.60115394,
        name: "Hikurangi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HIKU64",
        northIsland: true
    },
    {
        x: 173.7996923,
        y: -35.40702354,
        name: "Kaikohe",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIK65",
        northIsland: true
    },
    {
        x: 173.7782479,
        y: -35.09998855,
        name: "Kaeo",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAEO66",
        northIsland: true
    },
    {
        x: 173.9493858,
        y: -35.22823411,
        name: "Kerikeri",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KERI67",
        northIsland: true
    },
    {
        x: 173.5451801,
        y: -35.36004675,
        name: "Kohukohu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KOHU68",
        northIsland: true
    },
    {
        x: 173.7712593,
        y: -35.32068044,
        name: "Okaihau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OKAI69",
        northIsland: true
    },
    {
        x: 173.5037918,
        y: -35.39638179,
        name: "Rawene",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RAWE70",
        northIsland: true
    },
    {
        x: 173.3892589,
        y: -35.52230404,
        name: "Omapere",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OMAP71",
        northIsland: true
    },
    {
        x: 173.2606931,
        y: -35.11096185,
        name: "Kaitaia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIT72",
        northIsland: true
    },
    {
        x: 173.5223193,
        y: -34.99164206,
        name: "Mangonui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANG73",
        northIsland: true
    },
    {
        x: 174.0636887,
        y: -35.3798539,
        name: "Kawakawa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAWA74",
        northIsland: true
    },
    {
        x: 174.0905895,
        y: -35.28150659,
        name: "Paihia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PAIH75",
        northIsland: true
    },
    {
        x: 174.1243745,
        y: -35.26290261,
        name: "Russell",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RUSS76",
        northIsland: true
    },
    {
        x: 174.3608683,
        y: -36.10613495,
        name: "Maungaturoto",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MAUN77",
        northIsland: true
    },
    {
        x: 174.4437863,
        y: -36.15985046,
        name: "Kaiwaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIW78",
        northIsland: true
    },
    {
        x: 174.5052271,
        y: -35.62620503,
        name: "Ngunguru",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NGUN79",
        northIsland: true
    },
    {
        x: 174.5865718,
        y: -36.10168723,
        name: "Mangawhai",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANG80",
        northIsland: true
    },
    {
        x: 174.2277772,
        y: -36.10811413,
        name: "Paparoa",
        type: StationType.RURAL,
        callsignPrefix: "PAPA81",
        northIsland: true
    },
    {
        x: 174.1316782,
        y: -35.49396978,
        name: "Towai",
        type: StationType.RURAL,
        callsignPrefix: "TOWA81",
        northIsland: true
    },
    {
        x: 174.2475303,
        y: -36.24870054,
        name: "Tinopai",
        type: StationType.RURAL,
        callsignPrefix: "TINO88",
        northIsland: true
    },
    {
        x: 174.7591823,
        y: -36.85619113,
        name: "Auckland City",
        type: StationType.CAREER,
        callsignPrefix: "AUCK20",
        northIsland: true
    },
    {
        x: 174.7952263,
        y: -36.88063443,
        name: "Remuera",
        type: StationType.CAREER,
        callsignPrefix: "REMU21",
        northIsland: true
    },
    {
        x: 174.783977,
        y: -36.91423877,
        name: "Onehunga",
        type: StationType.CAREER,
        callsignPrefix: "ONEH22",
        northIsland: true
    },
    {
        x: 174.8540893,
        y: -36.89765376,
        name: "Mount Wellington",
        type: StationType.CAREER,
        callsignPrefix: "MTWE23",
        northIsland: true
    },
    {
        x: 174.8557224,
        y: -36.86246197,
        name: "Saint Heliers",
        type: StationType.CAREER,
        callsignPrefix: "STHE24",
        northIsland: true
    },
    {
        x: 174.7759223,
        y: -36.85011396,
        name: "Parnell",
        type: StationType.CAREER,
        callsignPrefix: "PARN25",
        northIsland: true
    },
    {
        x: 174.7391908,
        y: -36.86448254,
        name: "Grey Lynn",
        type: StationType.CAREER,
        callsignPrefix: "GREY26",
        northIsland: true
    },
    {
        x: 174.804764,
        y: -36.89944813,
        name: "Ellerslie",
        type: StationType.CAREER,
        callsignPrefix: "ELLE27",
        northIsland: true
    },
    {
        x: 174.8996273,
        y: -37.02467288,
        name: "Manurewa",
        type: StationType.CAREER,
        callsignPrefix: "MANU30",
        northIsland: true
    },
    {
        x: 174.8408937,
        y: -36.93964551,
        name: "Otahuhu",
        type: StationType.CAREER,
        callsignPrefix: "OTAH31",
        northIsland: true
    },
    {
        x: 174.9097562,
        y: -36.89897091,
        name: "Howick",
        type: StationType.COMPOSITE,
        callsignPrefix: "HOWI32",
        northIsland: true
    },
    {
        x: 174.8911755,
        y: -36.95421557,
        name: "Otara",
        type: StationType.CAREER,
        callsignPrefix: "OTAR33",
        northIsland: true
    },
    {
        x: 174.8715934,
        y: -36.98689654,
        name: "Papatoetoe",
        type: StationType.CAREER,
        callsignPrefix: "PAPA34",
        northIsland: true
    },
    {
        x: 174.7973225,
        y: -36.96671887,
        name: "Mangere",
        type: StationType.CAREER,
        callsignPrefix: "MANG35",
        northIsland: true
    },
    {
        x: 174.7953704,
        y: -37.00573507,
        name: "Auckland International Airport Rescue",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRAKL36",
        northIsland: true
    },
    {
        x: 174.939626,
        y: -37.05727144,
        name: "Papakura",
        type: StationType.COMPOSITE,
        callsignPrefix: "PAPA38",
        northIsland: true
    },
    {
        x: 175.0097305,
        y: -36.7834114,
        name: "Oneroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ONER40",
        northIsland: true
    },
    {
        x: 175.0766924,
        y: -36.79320811,
        name: "Onetangi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ONET41",
        northIsland: true
    },
    {
        x: 175.2965789,
        y: -37.10602883,
        name: "Kaiaua",
        type: StationType.RURAL,
        callsignPrefix: "KAIA42",
        northIsland: true
    },
    {
        x: 174.9996304,
        y: -36.88643272,
        name: "Beachlands",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BEAC43",
        northIsland: true
    },
    {
        x: 175.1690904,
        y: -36.94990104,
        name: "Kawakawa Bay",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAWA44",
        northIsland: true
    },
    {
        x: 175.2423806,
        y: -36.95995576,
        name: "Orere Point",
        type: StationType.RURAL,
        callsignPrefix: "ORER45",
        northIsland: true
    },
    {
        x: 175.0419298,
        y: -36.98867597,
        name: "Clevedon",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CLEV46",
        northIsland: true
    },
    {
        x: 175.0713712,
        y: -37.07869596,
        name: "Hunua",
        type: StationType.RURAL,
        callsignPrefix: "HUNU47",
        northIsland: true
    },
    {
        x: 174.7013782,
        y: -36.89723772,
        name: "Avondale",
        type: StationType.CAREER,
        callsignPrefix: "AVON60",
        northIsland: true
    },
    {
        x: 174.7449436,
        y: -36.88630481,
        name: "Balmoral",
        type: StationType.CAREER,
        callsignPrefix: "BALM61",
        northIsland: true
    },
    {
        x: 174.7378323,
        y: -36.91580188,
        name: "Mount Roskill",
        type: StationType.CAREER,
        callsignPrefix: "MTRO62",
        northIsland: true
    },
    {
        x: 174.6516856,
        y: -36.90900262,
        name: "Glen Eden",
        type: StationType.CAREER,
        callsignPrefix: "GLEN64",
        northIsland: true
    },
    {
        x: 174.6316983,
        y: -36.88433881,
        name: "Henderson",
        type: StationType.COMPOSITE,
        callsignPrefix: "HEND65",
        northIsland: true
    },
    {
        x: 174.6510429,
        y: -36.86067306,
        name: "Te Atatu",
        type: StationType.COMPOSITE,
        callsignPrefix: "TEAT66",
        northIsland: true
    },
    {
        x: 174.6160339,
        y: -36.81831725,
        name: "West Harbour",
        type: StationType.COMPOSITE,
        callsignPrefix: "WEST67",
        northIsland: true
    },
    {
        x: 174.61916425699056,
        y: -36.7937611209229,
        name: "RNZAF Base Auckland F5204",
        type: StationType.INDUSTRY,
        callsignPrefix: "WHEN68",
        northIsland: true
    },
    {
        x: 174.6550023,
        y: -36.94005557,
        name: "Titirangi",
        type: StationType.COMPOSITE,
        callsignPrefix: "TITI69",
        northIsland: true
    },
    {
        x: 174.6289209,
        y: -36.96348476,
        name: "Laingholm",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LAIN70",
        northIsland: true
    },
    {
        x: 174.5778041,
        y: -36.9339262,
        name: "Waiatarua",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIA71",
        northIsland: true
    },
    {
        x: 174.5641222,
        y: -37.00142309,
        name: "Huia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HUIA72",
        northIsland: true
    },
    {
        x: 174.5013842,
        y: -36.98865607,
        name: "Karekare",
        type: StationType.RURAL,
        callsignPrefix: "KARE73",
        northIsland: true
    },
    {
        x: 174.6570122,
        y: -36.50920943,
        name: "Puhoi",
        type: StationType.RURAL,
        callsignPrefix: "PUHO74",
        northIsland: true
    },
    {
        x: 174.4907704,
        y: -36.86877971,
        name: "Bethells Valley",
        type: StationType.RURAL,
        callsignPrefix: "BETH75",
        northIsland: true
    },
    {
        x: 174.4744314,
        y: -36.95406076,
        name: "Piha",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PIHA76",
        northIsland: true
    },
    {
        x: 174.5441814,
        y: -36.84878775,
        name: "Waitakere",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIT77",
        northIsland: true
    },
    {
        x: 174.4962002,
        y: -36.61883637,
        name: "Kaukapakapa (Under Construction)",
        type: StationType.RURAL,
        callsignPrefix: "KAUK78",
        northIsland: true
    },
    {
        x: 174.4957865,
        y: -36.49924225,
        name: "Ahuroa",
        type: StationType.RURAL,
        callsignPrefix: "AHUR79",
        northIsland: true
    },
    {
        x: 174.7447843,
        y: -36.77689804,
        name: "Takapuna",
        type: StationType.CAREER,
        callsignPrefix: "TAKA80",
        northIsland: true
    },
    {
        x: 174.7968002,
        y: -36.82197241,
        name: "Devonport",
        type: StationType.COMPOSITE,
        callsignPrefix: "DEVO81",
        northIsland: true
    },
    {
        x: 174.7158167,
        y: -36.81105499,
        name: "Birkenhead",
        type: StationType.COMPOSITE,
        callsignPrefix: "BIRK82",
        northIsland: true
    },
    {
        x: 174.724565,
        y: -36.70675098,
        name: "East Coast Bays",
        type: StationType.COMPOSITE,
        callsignPrefix: "EAST83",
        northIsland: true
    },
    {
        x: 174.6704349,
        y: -36.77636703,
        name: "Greenhithe",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GREE84",
        northIsland: true
    },
    {
        x: 174.7040279,
        y: -36.75217633,
        name: "Albany",
        type: StationType.CAREER,
        callsignPrefix: "ALBA85",
        northIsland: true
    },
    {
        x: 174.5438073,
        y: -36.77230382,
        name: "Kumeu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KUME86",
        northIsland: true
    },
    {
        x: 174.433331,
        y: -36.82447677,
        name: "Muriwai",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MURI87",
        northIsland: true
    },
    {
        x: 174.3775116,
        y: -36.5717639,
        name: "Shelly Beach",
        type: StationType.RURAL,
        callsignPrefix: "SHEL88",
        northIsland: true
    },
    {
        x: 174.451611,
        y: -36.67841491,
        name: "Helensville",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HELE89",
        northIsland: true
    },
    {
        x: 174.6899672,
        y: -36.60637546,
        name: "Silverdale",
        type: StationType.COMPOSITE,
        callsignPrefix: "SILV90",
        northIsland: true
    },
    {
        x: 174.7663916,
        y: -36.62987881,
        name: "Manly",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANL91",
        northIsland: true
    },
    {
        x: 174.7420296,
        y: -36.33972508,
        name: "Matakana",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MATA92",
        northIsland: true
    },
    {
        x: 174.663611,
        y: -36.40113202,
        name: "Warkworth",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WARK93",
        northIsland: true
    },
    {
        x: 174.803604,
        y: -36.2918949,
        name: "Leigh",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LEIG94",
        northIsland: true
    },
    {
        x: 174.5241766,
        y: -36.29793851,
        name: "Wellsford",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WELL95",
        northIsland: true
    },
    {
        x: 175.500551,
        y: -36.31276546,
        name: "Tryphena",
        type: StationType.RURAL,
        callsignPrefix: "TRYP96",
        northIsland: true
    },
    {
        x: 174.7263019,
        y: -36.42345618,
        name: "Mahurangi East",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MAHU98",
        northIsland: true
    },
    {
        x: 175.4668774,
        y: -36.2437169,
        name: "Kaitoke",
        type: StationType.RURAL,
        callsignPrefix: "KAIT??",
        northIsland: true
    },
    {
        x: 175.4045321,
        y: -36.15387842,
        name: "Okiwi",
        type: StationType.RURAL,
        callsignPrefix: "OKIW??",
        northIsland: true
    },
    {
        x: 175.1442022,
        y: -37.40249422,
        name: "Te Kauwhata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEKA31",
        northIsland: true
    },
    {
        x: 175.1610084,
        y: -37.55987956,
        name: "Huntly",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HUNT32",
        northIsland: true
    },
    {
        x: 175.1494251,
        y: -37.67135693,
        name: "Ngaruawahia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NGAR33",
        northIsland: true
    },
    {
        x: 175.345422,
        y: -37.59433788,
        name: "Whitikahu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHIT34",
        northIsland: true
    },
    {
        x: 175.4930372,
        y: -37.4998055,
        name: "Tahuna",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAHU35",
        northIsland: true
    },
    {
        x: 175.523702,
        y: -37.65786435,
        name: "Morrinsville",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MORR36",
        northIsland: true
    },
    {
        x: 175.7139585,
        y: -37.54187796,
        name: "Te Aroha",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEAR37",
        northIsland: true
    },
    {
        x: 175.7696211,
        y: -37.80770876,
        name: "Matamata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MATA38",
        northIsland: true
    },
    {
        x: 174.8684189,
        y: -37.80106761,
        name: "Raglan",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RAGL39",
        northIsland: true
    },
    {
        x: 175.2826679,
        y: -37.79106106,
        name: "Hamilton",
        type: StationType.CAREER,
        callsignPrefix: "HAMI41",
        northIsland: true
    },
    {
        x: 175.2888919,
        y: -37.75483073,
        name: "Chartwell",
        type: StationType.CAREER,
        callsignPrefix: "CHAR42",
        northIsland: true
    },
    {
        x: 175.2285693,
        y: -37.75283791,
        name: "Te Rapa",
        type: StationType.CAREER,
        callsignPrefix: "TERA43",
        northIsland: true
    },
    {
        x: 175.4689417,
        y: -37.89516893,
        name: "Cambridge",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CAMB44",
        northIsland: true
    },
    {
        x: 175.3246012,
        y: -38.01149937,
        name: "Te Awamutu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEAW45",
        northIsland: true
    },
    {
        x: 175.2103021,
        y: -38.18535034,
        name: "Otorohanga",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OTOR46",
        northIsland: true
    },
    {
        x: 175.1664136,
        y: -38.33453091,
        name: "Te Kuiti",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEKU47",
        northIsland: true
    },
    {
        x: 175.3638431,
        y: -38.52219468,
        name: "Benneydale",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BENN48",
        northIsland: true
    },
    {
        x: 175.0151097,
        y: -38.46756458,
        name: "Piopio",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PIOP49",
        northIsland: true
    },
    {
        x: 174.8210633,
        y: -38.06351377,
        name: "Kawhia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAWH50",
        northIsland: true
    },
    {
        x: 175.6703538,
        y: -37.37843926,
        name: "Paeroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PAER51",
        northIsland: true
    },
    {
        x: 175.4958376,
        y: -37.27497613,
        name: "Ngatea",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NGAT52",
        northIsland: true
    },
    {
        x: 175.5677956,
        y: -37.24075383,
        name: "Turua",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TURU53",
        northIsland: true
    },
    {
        x: 175.6359164,
        y: -37.23014309,
        name: "Puriri",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PURI54",
        northIsland: true
    },
    {
        x: 175.5405457,
        y: -37.13660061,
        name: "Thames",
        type: StationType.VOLUNTEER,
        callsignPrefix: "THAM55",
        northIsland: true
    },
    {
        x: 175.5017656,
        y: -36.98531544,
        name: "Tapu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAPU56",
        northIsland: true
    },
    {
        x: 175.4999488,
        y: -36.76233003,
        name: "Coromandel",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CORO57",
        northIsland: true
    },
    {
        x: 175.2003798,
        y: -37.99048649,
        name: "Pirongia",
        type: StationType.RURAL,
        callsignPrefix: "PIRO58",
        northIsland: true
    },
    {
        x: 175.694193,
        y: -36.83291129,
        name: "Whitianga",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHIT59",
        northIsland: true
    },
    {
        x: 175.8433059,
        y: -37.39156268,
        name: "Waihi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIH60",
        northIsland: true
    },
    {
        x: 175.7424551,
        y: -36.83825146,
        name: "Cooks Beach",
        type: StationType.VOLUNTEER,
        callsignPrefix: "COOK61",
        northIsland: true
    },
    {
        x: 175.8022681,
        y: -36.84097093,
        name: "Hahei",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HAHE62",
        northIsland: true
    },
    {
        x: 175.8484241,
        y: -37.00112759,
        name: "Tairua",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAIR63",
        northIsland: true
    },
    {
        x: 175.8606236,
        y: -37.0245817,
        name: "Pauanui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PAUA64",
        northIsland: true
    },
    {
        x: 175.87042,
        y: -37.20794731,
        name: "Whangamata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHAN65",
        northIsland: true
    },
    {
        x: 175.4812426,
        y: -36.85461373,
        name: "Manaia Hauraki",
        type: StationType.RURAL,
        callsignPrefix: "MANA66",
        northIsland: true
    },
    {
        x: 175.4726969,
        y: -36.54370441,
        name: "Port Charles",
        type: StationType.RURAL,
        callsignPrefix: "PORT67",
        northIsland: true
    },
    {
        x: 175.33643,
        y: -37.8650157,
        name: "Hamilton Airport Rescue",
        type: StationType.INDUSTRY,
        callsignPrefix: "HAMI68",
        northIsland: true
    },
    {
        x: 175.8740613,
        y: -37.15366445,
        name: "Onemana-Opoutere",
        type: StationType.RURAL,
        callsignPrefix: "ONEM79",
        northIsland: true
    },
    {
        x: 175.475231,
        y: -36.63325886,
        name: "Colville",
        type: StationType.RURAL,
        callsignPrefix: "COLV80",
        northIsland: true
    },
    {
        x: 175.5487189,
        y: -36.6824654,
        name: "Kennedy Bay",
        type: StationType.RURAL,
        callsignPrefix: "KENN81",
        northIsland: true
    },
    {
        x: 175.6141399,
        y: -36.71296849,
        name: "Whangapoua",
        type: StationType.RURAL,
        callsignPrefix: "WHAN82",
        northIsland: true
    },
    {
        x: 175.6617544,
        y: -36.73365187,
        name: "Matarangi",
        type: StationType.RURAL,
        callsignPrefix: "MATA83",
        northIsland: true
    },
    {
        x: 175.729979,
        y: -36.7222022,
        name: "Kuaotunu",
        type: StationType.RURAL,
        callsignPrefix: "KUAO84",
        northIsland: true
    },
    {
        x: 175.8975582,
        y: -37.28359138,
        name: "Whiritoa",
        type: StationType.RURAL,
        callsignPrefix: "WHIR86",
        northIsland: true
    },
    {
        x: 174.8578347,
        y: -37.67835729,
        name: "Te Akau",
        type: StationType.RURAL,
        callsignPrefix: "TEAK87",
        northIsland: true
    },
    {
        x: 175.2006261,
        y: -37.20047043,
        name: "Mangatangi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANG48",
        northIsland: true
    },
    {
        x: 175.2335279,
        y: -37.2533331,
        name: "Maramarua",
        type: StationType.RURAL,
        callsignPrefix: "MARA49",
        northIsland: true
    },
    {
        x: 175.0237542,
        y: -37.24698429,
        name: "Pokeno",
        type: StationType.VOLUNTEER,
        callsignPrefix: "POKE50",
        northIsland: true
    },
    {
        x: 174.9452195,
        y: -37.26006451,
        name: "Tuakau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TUAK51",
        northIsland: true
    },
    {
        x: 174.9138837,
        y: -37.32945992,
        name: "Onewhero",
        type: StationType.RURAL,
        callsignPrefix: "ONEW52",
        northIsland: true
    },
    {
        x: 174.724649,
        y: -37.39123594,
        name: "Port Waikato",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PORT53",
        northIsland: true
    },
    {
        x: 174.89805,
        y: -37.20445899,
        name: "Pukekohe",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PUKE55",
        northIsland: true
    },
    {
        x: 174.8276771,
        y: -37.18849251,
        name: "Patumahoe",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PATU56",
        northIsland: true
    },
    {
        x: 174.7290827,
        y: -37.24735409,
        name: "Waiuku",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIU57",
        northIsland: true
    },
    {
        x: 174.7517202,
        y: -37.13684578,
        name: "Waiau Pa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIA58",
        northIsland: true
    },
    {
        x: 174.6211198,
        y: -37.10819781,
        name: "Awhitu",
        type: StationType.RURAL,
        callsignPrefix: "AWHI59",
        northIsland: true
    },
    {
        x: 176.0761414,
        y: -38.69295948,
        name: "Taupo",
        type: StationType.COMPOSITE,
        callsignPrefix: "TAUP21",
        northIsland: true
    },
    {
        x: 175.9204265,
        y: -38.66263176,
        name: "Kinloch",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KINL22",
        northIsland: true
    },
    {
        x: 175.8063361,
        y: -38.9902551,
        name: "Turangi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TURA23",
        northIsland: true
    },
    {
        x: 176.1034733,
        y: -38.68701965,
        name: "Lake Taupo",
        type: StationType.RURAL,
        callsignPrefix: "LAKE29",
        northIsland: true
    },
    {
        x: 175.7614776,
        y: -38.89675696,
        name: "Southern Lakes",
        type: StationType.RURAL,
        callsignPrefix: "SOUT30",
        northIsland: true
    },
    {
        x: 176.9586281,
        y: -38.6132346,
        name: "Ruatahuna",
        type: StationType.INDUSTRY,
        callsignPrefix: "RUAT??",
        northIsland: true
    },
    {
        x: 176.7304001,
        y: -38.64244318,
        name: "Minginui",
        type: StationType.RURAL,
        callsignPrefix: "MING59",
        northIsland: true
    },
    {
        x: 176.9853828,
        y: -37.97986736,
        name: "Eastern Bay",
        type: StationType.RURAL,
        callsignPrefix: "EAST60",
        northIsland: true
    },
    {
        x: 176.5648468,
        y: -38.40823588,
        name: "Kaingaroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIN61",
        northIsland: true
    },
    {
        x: 176.3472668,
        y: -38.17576053,
        name: "Lake Okareka",
        type: StationType.RURAL,
        callsignPrefix: "LAKE65",
        northIsland: true
    },
    {
        x: 176.3948183,
        y: -38.19120818,
        name: "Lake Tarawera",
        type: StationType.RURAL,
        callsignPrefix: "LAKE66",
        northIsland: true
    },
    {
        x: 175.9353549,
        y: -37.3998246,
        name: "Waihi Beach",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIH60",
        northIsland: true
    },
    {
        x: 175.9635299,
        y: -37.44510982,
        name: "Mayor View",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MAYO68",
        northIsland: true
    },
    {
        x: 176.358257,
        y: -38.01805807,
        name: "Okere Falls",
        type: StationType.RURAL,
        callsignPrefix: "OKER69",
        northIsland: true
    },
    {
        x: 176.0750698,
        y: -37.59162455,
        name: "Matakana Island",
        type: StationType.RURAL,
        callsignPrefix: "MATA70",
        northIsland: true
    },
    {
        x: 176.1653876,
        y: -37.68539556,
        name: "Tauranga",
        type: StationType.COMPOSITE,
        callsignPrefix: "TAUR71",
        northIsland: true
    },
    {
        x: 176.208835,
        y: -37.66440814,
        name: "Mount Maunganui",
        type: StationType.COMPOSITE,
        callsignPrefix: "MOUN72",
        northIsland: true
    },
    {
        x: 176.3156552,
        y: -37.71013579,
        name: "Papamoa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PAPA73",
        northIsland: true
    },
    {
        x: 176.4522503,
        y: -37.75995957,
        name: "Maketu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MAKE74",
        northIsland: true
    },
    {
        x: 176.1270108,
        y: -37.73404733,
        name: "Greerton",
        type: StationType.COMPOSITE,
        callsignPrefix: "GREE75",
        northIsland: true
    },
    {
        x: 175.9185915,
        y: -37.56051519,
        name: "Katikati",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KATI76",
        northIsland: true
    },
    {
        x: 176.0264515,
        y: -37.65309893,
        name: "Omokoroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OMOK77",
        northIsland: true
    },
    {
        x: 176.5275401,
        y: -37.78933291,
        name: "Pukehina",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PUKE78",
        northIsland: true
    },
    {
        x: 176.3244014,
        y: -37.78663318,
        name: "Te Puke",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEPU79",
        northIsland: true
    },
    {
        x: 176.2361632,
        y: -38.13273882,
        name: "Rotorua",
        type: StationType.COMPOSITE,
        callsignPrefix: "ROTO81",
        northIsland: true
    },
    {
        x: 176.2118837,
        y: -38.08423289,
        name: "Ngongotaha",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NGON82",
        northIsland: true
    },
    {
        x: 176.5692042,
        y: -38.05269912,
        name: "Rotoma",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ROTO83",
        northIsland: true
    },
    {
        x: 176.0789996,
        y: -38.09426189,
        name: "Mamaku",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MAMA84",
        northIsland: true
    },
    {
        x: 175.7615597,
        y: -37.97440492,
        name: "Tirau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TIRA85",
        northIsland: true
    },
    {
        x: 175.7778088,
        y: -38.05006571,
        name: "Putaruru",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PUTA86",
        northIsland: true
    },
    {
        x: 175.8683457,
        y: -38.21911973,
        name: "Tokoroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TOKO87",
        northIsland: true
    },
    {
        x: 175.7735695,
        y: -38.37159363,
        name: "Mangakino",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANG88",
        northIsland: true
    },
    {
        x: 176.7020516,
        y: -38.4544269,
        name: "Murupara",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MURU89",
        northIsland: true
    },
    {
        x: 176.7103495,
        y: -38.08295388,
        name: "Kawerau",
        type: StationType.COMPOSITE,
        callsignPrefix: "KAWE91",
        northIsland: true
    },
    {
        x: 176.9928747,
        y: -37.95863994,
        name: "Whakatane",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHAK92",
        northIsland: true
    },
    {
        x: 176.8343075,
        y: -37.97983562,
        name: "Edgecumbe",
        type: StationType.VOLUNTEER,
        callsignPrefix: "EDGE93",
        northIsland: true
    },
    {
        x: 176.7576708,
        y: -37.88870549,
        name: "Matata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MATA94",
        northIsland: true
    },
    {
        x: 177.0033308,
        y: -38.06425583,
        name: "Taneatua",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TANE95",
        northIsland: true
    },
    {
        x: 177.2859794,
        y: -38.00659231,
        name: "Opotiki",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OPOT96",
        northIsland: true
    },
    {
        x: 177.070173,
        y: -37.97518943,
        name: "Ohope",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OHOP97",
        northIsland: true
    },
    {
        x: 177.0772239,
        y: -38.14396402,
        name: "Waimana",
        type: StationType.RURAL,
        callsignPrefix: "WAIM98",
        northIsland: true
    },
    {
        x: 177.9067597,
        y: -37.61864844,
        name: "Waihau Bay",
        type: StationType.RURAL,
        callsignPrefix: "WAIH99",
        northIsland: true
    },
    {
        x: 175.1371577,
        y: -39.0097869,
        name: "Kirikau",
        type: StationType.RURAL,
        callsignPrefix: "KIRI21",
        northIsland: true
    },
    {
        x: 175.2756263,
        y: -39.42568728,
        name: "Waimarino",
        type: StationType.RURAL,
        callsignPrefix: "WAIM22",
        northIsland: true
    },
    {
        x: 175.2604373,
        y: -38.84337614,
        name: "Ruapehu",
        type: StationType.RURAL,
        callsignPrefix: "RUAP23",
        northIsland: true
    },
    {
        x: 174.9828465,
        y: -38.84080901,
        name: "Ohura",
        type: StationType.RURAL,
        callsignPrefix: "OHUR24",
        northIsland: true
    },
    {
        x: 175.2632884,
        y: -38.88564788,
        name: "Taumarunui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAUM25",
        northIsland: true
    },
    {
        x: 175.329392,
        y: -38.88926368,
        name: "Manunui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANU26",
        northIsland: true
    },
    {
        x: 175.378097,
        y: -38.99842754,
        name: "Owhango",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OWHA27",
        northIsland: true
    },
    {
        x: 175.3960993,
        y: -39.17466421,
        name: "National Park",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NATI28",
        northIsland: true
    },
    {
        x: 175.5409818,
        y: -39.20339483,
        name: "Whakapapa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHAK29",
        northIsland: true
    },
    {
        x: 174.2338828,
        y: -39.00008176,
        name: "Waitara",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIT47",
        northIsland: true
    },
    {
        x: 174.2826865,
        y: -39.33908026,
        name: "Stratford",
        type: StationType.VOLUNTEER,
        callsignPrefix: "STRA48",
        northIsland: true
    },
    {
        x: 174.3939126,
        y: -39.3358317,
        name: "Toko",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TOKO49",
        northIsland: true
    },
    {
        x: 174.2985478,
        y: -39.4322163,
        name: "Eltham",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ELTH51",
        northIsland: true
    },
    {
        x: 174.148067,
        y: -39.42923451,
        name: "Kaponga",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAPO52",
        northIsland: true
    },
    {
        x: 173.8594892,
        y: -39.45372584,
        name: "Opunake",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OPUN53",
        northIsland: true
    },
    {
        x: 173.80261,
        y: -39.3276678,
        name: "Rahotu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RAHO54",
        northIsland: true
    },
    {
        x: 174.2846657,
        y: -39.59506807,
        name: "Hawera",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HAWE55",
        northIsland: true
    },
    {
        x: 174.1993484,
        y: -39.5281116,
        name: "Okaiawa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OKAI56",
        northIsland: true
    },
    {
        x: 174.1247166,
        y: -39.55007577,
        name: "Manaia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANA57",
        northIsland: true
    },
    {
        x: 174.4750719,
        y: -39.75758785,
        name: "Patea",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PATE58",
        northIsland: true
    },
    {
        x: 174.0768504,
        y: -39.05826936,
        name: "New Plymouth",
        type: StationType.COMPOSITE,
        callsignPrefix: "NEWP61",
        northIsland: true
    },
    {
        x: 174.026523,
        y: -39.06586642,
        name: "New Plymouth West",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NEWP62",
        northIsland: true
    },
    {
        x: 173.9562334,
        y: -39.11509771,
        name: "Oakura",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OAKU63",
        northIsland: true
    },
    {
        x: 174.2071846,
        y: -39.15540998,
        name: "Inglewood",
        type: StationType.VOLUNTEER,
        callsignPrefix: "INGL64",
        northIsland: true
    },
    {
        x: 173.8803263,
        y: -39.19169998,
        name: "Okato",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OKAT65",
        northIsland: true
    },
    {
        x: 174.3887469,
        y: -38.99885631,
        name: "Urenui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "UREN66",
        northIsland: true
    },
    {
        x: 174.0545858,
        y: -39.07351263,
        name: "Ngamotu",
        type: StationType.RURAL,
        callsignPrefix: "NGAM68",
        northIsland: true
    },
    {
        x: 174.6199533,
        y: -38.69796579,
        name: "Tainui Mokau",
        type: StationType.RURAL,
        callsignPrefix: "TAIN69",
        northIsland: true
    },
    {
        x: 175.0475654,
        y: -39.93751352,
        name: "Whanganui",
        type: StationType.COMPOSITE,
        callsignPrefix: "WHAN71",
        northIsland: true
    },
    {
        x: 174.6325114,
        y: -39.76266286,
        name: "Waverley",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAVE72",
        northIsland: true
    },
    {
        x: 174.2842396,
        y: -39.59509803,
        name: "Kohi",
        type: StationType.RURAL,
        callsignPrefix: "KOHI73",
        northIsland: true
    },
    {
        x: 175.4001854,
        y: -39.4165905,
        name: "Ohakune",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OHAK75",
        northIsland: true
    },
    {
        x: 175.2773537,
        y: -39.42540948,
        name: "Raetihi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RAET76",
        northIsland: true
    },
    {
        x: 175.1401495,
        y: -40.07070917,
        name: "Koitiata",
        type: StationType.RURAL,
        callsignPrefix: "KOIT96",
        northIsland: true
    },
    {
        x: 175.6204358,
        y: -40.33521057,
        name: "Milson",
        type: StationType.CAREER,
        callsignPrefix: "MILS20",
        northIsland: true
    },
    {
        x: 175.6026137,
        y: -40.36087385,
        name: "Palmerston North",
        type: StationType.COMPOSITE,
        callsignPrefix: "PALM21",
        northIsland: true
    },
    {
        x: 175.7534654,
        y: -40.29139643,
        name: "Ashhurst",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ASHH22",
        northIsland: true
    },
    {
        x: 175.6317179,
        y: -40.28266844,
        name: "Bunnythorpe",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BUNN23",
        northIsland: true
    },
    {
        x: 175.4235564,
        y: -40.29166431,
        name: "Rongotea",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RONG25",
        northIsland: true
    },
    {
        x: 175.2454952,
        y: -40.29557263,
        name: "Tangimoana",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TANG26",
        northIsland: true
    },
    {
        x: 175.5749805,
        y: -40.22176075,
        name: "Feilding",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FEIL28",
        northIsland: true
    },
    {
        x: 175.6596147,
        y: -40.13928116,
        name: "Cheltenham",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CHEL29",
        northIsland: true
    },
    {
        x: 175.8702073,
        y: -39.97268538,
        name: "Apiti",
        type: StationType.VOLUNTEER,
        callsignPrefix: "APIT31",
        northIsland: true
    },
    {
        x: 175.4945467,
        y: -40.14265327,
        name: "Halcombe",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HALC32",
        northIsland: true
    },
    {
        x: 175.7801061,
        y: -40.0596662,
        name: "Kimbolton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KIMB33",
        northIsland: true
    },
    {
        x: 175.2349691,
        y: -40.36902232,
        name: "Himatangi Beach",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HIMA38",
        northIsland: true
    },
    {
        x: 175.9007455,
        y: -39.89922808,
        name: "Rangiwahia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RANG42",
        northIsland: true
    },
    {
        x: 175.5884807,
        y: -40.4099658,
        name: "Linton",
        type: StationType.CAREER,
        callsignPrefix: "Linton",
        northIsland: true
    },
    {
        x: 175.1771819,
        y: -40.04185547,
        name: "Ratana",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RATA73",
        northIsland: true
    },
    {
        x: 175.8011087,
        y: -39.67800575,
        name: "Taihape",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAIH77",
        northIsland: true
    },
    {
        x: 175.7891296,
        y: -39.80800369,
        name: "Mangaweka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANG78",
        northIsland: true
    },
    {
        x: 175.5706,
        y: -39.93665674,
        name: "Hunterville",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HUNT79",
        northIsland: true
    },
    {
        x: 175.3788431,
        y: -40.07831249,
        name: "Marton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MART81",
        northIsland: true
    },
    {
        x: 175.3833095,
        y: -40.17511078,
        name: "Bulls",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BULL82",
        northIsland: true
    },
    {
        x: 175.374151,
        y: -40.0681067,
        name: "Rangitikei",
        type: StationType.RURAL,
        callsignPrefix: "RANG83",
        northIsland: true
    },
    {
        x: 175.602515,
        y: -40.36102769,
        name: "Palmerston North VFB",
        type: StationType.RURAL,
        callsignPrefix: "PALM4",
        northIsland: true
    },
    {
        x: 175.3791372,
        y: -40.20024985,
        name: "RNZAF Base Ohakea F6056",
        type: StationType.CAREER,
        callsignPrefix: "OHAK92",
        northIsland: true
    },
    {
        x: 175.6833914,
        y: -39.46752612,
        name: "Waiouru C364",
        type: StationType.CAREER,
        callsignPrefix: "WAIO93",
        northIsland: true
    },
    {
        x: 175.5749809,
        y: -40.22181672,
        name: "Manawatu",
        type: StationType.RURAL,
        callsignPrefix: "MANA96",
        northIsland: true
    },
    {
        x: 177.0237091,
        y: -39.06607946,
        name: "Kotemaori",
        type: StationType.RURAL,
        callsignPrefix: "KOTE47",
        northIsland: true
    },
    {
        x: 176.6055689,
        y: -39.13592792,
        name: "Te Haroto",
        type: StationType.RURAL,
        callsignPrefix: "TEHA48",
        northIsland: true
    },
    {
        x: 176.8163201,
        y: -39.24091747,
        name: "Waikoau",
        type: StationType.RURAL,
        callsignPrefix: "WAIK49",
        northIsland: true
    },
    {
        x: 176.828661,
        y: -39.6305839,
        name: "Heretaunga",
        type: StationType.RURAL,
        callsignPrefix: "HERE50",
        northIsland: true
    },
    {
        x: 176.8928286,
        y: -39.49732267,
        name: "Napier",
        type: StationType.COMPOSITE,
        callsignPrefix: "NAPI51",
        northIsland: true
    },
    {
        x: 176.9468877,
        y: -39.60554127,
        name: "Haumoana",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HAUM52",
        northIsland: true
    },
    {
        x: 176.8793316,
        y: -39.66692735,
        name: "Havelock North",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HAVE53",
        northIsland: true
    },
    {
        x: 176.8674789,
        y: -39.4215474,
        name: "Bay View",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BAYV54",
        northIsland: true
    },
    {
        x: 176.8494144,
        y: -39.53752723,
        name: "Taradale",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TARA55",
        northIsland: true
    },
    {
        x: 176.8293806,
        y: -39.63069455,
        name: "Hastings",
        type: StationType.COMPOSITE,
        callsignPrefix: "HAST56",
        northIsland: true
    },
    {
        x: 176.9183914,
        y: -39.79439116,
        name: "Maraetotara",
        type: StationType.RURAL,
        callsignPrefix: "MARA62",
        northIsland: true
    },
    {
        x: 176.6323625,
        y: -39.71697165,
        name: "Torran",
        type: StationType.RURAL,
        callsignPrefix: "TORR63",
        northIsland: true
    },
    {
        x: 176.6184674,
        y: -39.64883357,
        name: "Maraekakaho",
        type: StationType.RURAL,
        callsignPrefix: "MARA65",
        northIsland: true
    },
    {
        x: 176.4223963,
        y: -39.63610158,
        name: "Kereru",
        type: StationType.RURAL,
        callsignPrefix: "KERE66",
        northIsland: true
    },
    {
        x: 176.468108,
        y: -39.43448196,
        name: "Waiwhare",
        type: StationType.RURAL,
        callsignPrefix: "WAIW68",
        northIsland: true
    },
    {
        x: 176.6875517,
        y: -39.40559166,
        name: "Rissington",
        type: StationType.RURAL,
        callsignPrefix: "RISS76",
        northIsland: true
    },
    {
        x: 176.6031595,
        y: -39.34639266,
        name: "Patoka",
        type: StationType.RURAL,
        callsignPrefix: "PATO70",
        northIsland: true
    },
    {
        x: 176.554812,
        y: -39.57776014,
        name: "Matapiro",
        type: StationType.RURAL,
        callsignPrefix: "MATA71",
        northIsland: true
    },
    {
        x: 177.0057132,
        y: -39.13470409,
        name: "Putorino",
        type: StationType.RURAL,
        callsignPrefix: "PUTO72",
        northIsland: true
    },
    {
        x: 176.6979143,
        y: -39.25498909,
        name: "Te Pohue",
        type: StationType.RURAL,
        callsignPrefix: "TEPO73",
        northIsland: true
    },
    {
        x: 176.5462768,
        y: -39.27801923,
        name: "Puketitiri",
        type: StationType.RURAL,
        callsignPrefix: "PUKE74",
        northIsland: true
    },
    {
        x: 176.9837033,
        y: -39.81101017,
        name: "Waimarama",
        type: StationType.RURAL,
        callsignPrefix: "WAIM75",
        northIsland: true
    },
    {
        x: 177.9704066,
        y: -38.6485549,
        name: "Eastland",
        type: StationType.RURAL,
        callsignPrefix: "EAST78",
        northIsland: true
    },
    {
        x: 177.3729013,
        y: -38.76015701,
        name: "Ruakituri",
        type: StationType.RURAL,
        callsignPrefix: "RUAK79",
        northIsland: true
    },
    {
        x: 177.5681021,
        y: -38.77370443,
        name: "Tiniroto",
        type: StationType.RURAL,
        callsignPrefix: "TINI80",
        northIsland: true
    },
    {
        x: 178.0263094,
        y: -38.66412496,
        name: "Gisborne",
        type: StationType.COMPOSITE,
        callsignPrefix: "GISB81",
        northIsland: true
    },
    {
        x: 177.9090698,
        y: -38.6784974,
        name: "Manutuke",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANU82",
        northIsland: true
    },
    {
        x: 177.8876606,
        y: -38.62389802,
        name: "Patutahi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PATU83",
        northIsland: true
    },
    {
        x: 177.5345509,
        y: -38.35829826,
        name: "Matawai",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MATA84",
        northIsland: true
    },
    {
        x: 177.8641916,
        y: -38.46847604,
        name: "Te Karaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEKA85",
        northIsland: true
    },
    {
        x: 177.8335829,
        y: -38.38197156,
        name: "Whatatutu",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHAT86",
        northIsland: true
    },
    {
        x: 178.2964136,
        y: -38.37192793,
        name: "Tolaga Bay",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TOLA87",
        northIsland: true
    },
    {
        x: 178.3193873,
        y: -37.88792498,
        name: "Ruatoria",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RUAT88",
        northIsland: true
    },
    {
        x: 178.3691721,
        y: -37.6355174,
        name: "Te Araroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEAR89",
        northIsland: true
    },
    {
        x: 178.2900117,
        y: -37.5937576,
        name: "Hicks Bay",
        type: StationType.RURAL,
        callsignPrefix: "HICK90",
        northIsland: true
    },
    {
        x: 178.4108396,
        y: -37.79459321,
        name: "Tikitiki",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TIKI91",
        northIsland: true
    },
    {
        x: 178.3148596,
        y: -38.12989831,
        name: "Tokomaru Bay",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TOKO92",
        northIsland: true
    },
    {
        x: 178.3057238,
        y: -38.05795757,
        name: "Te Puia Springs",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEPU93",
        northIsland: true
    },
    {
        x: 177.4205639,
        y: -39.03514693,
        name: "Wairoa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIR94",
        northIsland: true
    },
    {
        x: 177.7433262,
        y: -39.04351526,
        name: "Nuhaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NUHA95",
        northIsland: true
    },
    {
        x: 177.8752008,
        y: -39.07720328,
        name: "Mahia",
        type: StationType.RURAL,
        callsignPrefix: "MAHI97",
        northIsland: true
    },
    {
        x: 177.146136,
        y: -38.81341198,
        name: "Tuai",
        type: StationType.RURAL,
        callsignPrefix: "TUAI79",
        northIsland: true
    },
    {
        x: 175.7042167,
        y: -40.64580229,
        name: "Eketahuna",
        type: StationType.VOLUNTEER,
        callsignPrefix: "EKET41",
        northIsland: true
    },
    {
        x: 175.8681539,
        y: -40.33647294,
        name: "Woodville",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WOOD43",
        northIsland: true
    },
    {
        x: 176.1926435,
        y: -40.54272296,
        name: "Pongaroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PONG44",
        northIsland: true
    },
    {
        x: 175.8411527,
        y: -40.45103491,
        name: "Pahiatua",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PAHI45",
        northIsland: true
    },
    {
        x: 176.4141533,
        y: -40.61607529,
        name: "Akitio",
        type: StationType.RURAL,
        callsignPrefix: "AKIT46",
        northIsland: true
    },
    {
        x: 176.0500666,
        y: -40.6314051,
        name: "Tiraumea",
        type: StationType.RURAL,
        callsignPrefix: "TIRA47",
        northIsland: true
    },
    {
        x: 176.5568055,
        y: -39.98676606,
        name: "Tamatea",
        type: StationType.RURAL,
        callsignPrefix: "TAMA56",
        northIsland: true
    },
    {
        x: 176.627946,
        y: -39.89538422,
        name: "Otane",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OTAN57",
        northIsland: true
    },
    {
        x: 176.5558895,
        y: -39.99415553,
        name: "Waipukurau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIP58",
        northIsland: true
    },
    {
        x: 176.6117185,
        y: -40.30211109,
        name: "Porangahau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PORA59",
        northIsland: true
    },
    {
        x: 176.3501894,
        y: -40.02682402,
        name: "Takapau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAKA61",
        northIsland: true
    },
    {
        x: 176.261917,
        y: -39.95039356,
        name: "Ashley Clinton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ASHL62",
        northIsland: true
    },
    {
        x: 176.5858812,
        y: -39.94217232,
        name: "Waipawa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIP63",
        northIsland: true
    },
    {
        x: 176.4148736,
        y: -39.91204092,
        name: "Ongaonga",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ONGA64",
        northIsland: true
    },
    {
        x: 176.4534435,
        y: -39.82019396,
        name: "Tikokino",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TIKO66",
        northIsland: true
    },
    {
        x: 176.0977177,
        y: -40.2110676,
        name: "Dannevirke",
        type: StationType.VOLUNTEER,
        callsignPrefix: "DANN67",
        northIsland: true
    },
    {
        x: 176.2164444,
        y: -40.0770955,
        name: "Norsewood",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NORS68",
        northIsland: true
    },
    {
        x: 176.2653128,
        y: -40.10911437,
        name: "Ormondville",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ORMO69",
        northIsland: true
    },
    {
        x: 176.3377696,
        y: -40.23756308,
        name: "Te Uri",
        type: StationType.RURAL,
        callsignPrefix: "TEUR70",
        northIsland: true
    },
    {
        x: 176.75413,
        y: -40.05168248,
        name: "Omakere",
        type: StationType.RURAL,
        callsignPrefix: "OMAK71",
        northIsland: true
    },
    {
        x: 176.5572113,
        y: -40.49180212,
        name: "Herbertville",
        type: StationType.RURAL,
        callsignPrefix: "HERB73",
        northIsland: true
    },
    {
        x: 176.4444087,
        y: -40.1506947,
        name: "Flemington",
        type: StationType.RURAL,
        callsignPrefix: "FLEM74",
        northIsland: true
    },
    {
        x: 176.3111453,
        y: -40.40093385,
        name: "Weber",
        type: StationType.RURAL,
        callsignPrefix: "WEBE76",
        northIsland: true
    },
    {
        x: 176.5908959,
        y: -40.191223,
        name: "Wallingford",
        type: StationType.RURAL,
        callsignPrefix: "WALL77",
        northIsland: true
    },
    {
        x: 173.9534751,
        y: -41.35153538,
        name: "Koromiko",
        type: StationType.RURAL,
        callsignPrefix: "KORO78"
    },
    {
        x: 176.8147507,
        y: -39.91622987,
        name: "Elsthorpe",
        type: StationType.RURAL,
        callsignPrefix: "ELST79",
        northIsland: true
    },
    {
        x: 176.843596,
        y: -40.14984863,
        name: "Aramoana",
        type: StationType.RURAL,
        callsignPrefix: "ARAM81",
        northIsland: true
    },
    {
        x: 176.8579986,
        y: -39.45689458,
        name: "Hawkes Bay Back Country",
        type: StationType.RURAL,
        callsignPrefix: "HAWK??",
        northIsland: true
    },
    {
        x: -176.5561249,
        y: -43.95355274,
        name: "Chatham Islands",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CHAT88",
        northIsland: true
    },
    {
        x: 175.5094319,
        y: -40.47477982,
        name: "Tokomaru",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TOKO27",
        northIsland: true
    },
    {
        x: 175.2846883,
        y: -40.62069253,
        name: "Levin",
        type: StationType.COMPOSITE,
        callsignPrefix: "LEVI34",
        northIsland: true
    },
    {
        x: 175.2058964,
        y: -40.55249147,
        name: "Waitarere Beach",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIT35",
        northIsland: true
    },
    {
        x: 174.9547645,
        y: -40.98548635,
        name: "Paekakariki",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PAEK36",
        northIsland: true
    },
    {
        x: 174.999109,
        y: -40.90590106,
        name: "Paraparaumu",
        type: StationType.COMPOSITE,
        callsignPrefix: "PARA37",
        northIsland: true
    },
    {
        x: 175.0473933,
        y: -40.87798416,
        name: "Waikanae",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIK38",
        northIsland: true
    },
    {
        x: 175.4167498,
        y: -40.54808625,
        name: "Shannon",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SHAN39",
        northIsland: true
    },
    {
        x: 175.1418929,
        y: -40.7532829,
        name: "Otaki",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OTAK41",
        northIsland: true
    },
    {
        x: 175.2304632,
        y: -40.46608172,
        name: "Foxton Beach",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FOXT42",
        northIsland: true
    },
    {
        x: 175.1238194,
        y: -40.80672888,
        name: "Te Horo",
        type: StationType.RURAL,
        callsignPrefix: "TEHO46",
        northIsland: true
    },
    {
        x: 175.2830627,
        y: -40.47261098,
        name: "Foxton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FOXT47",
        northIsland: true
    },
    {
        x: 175.2341146,
        y: -41.58903988,
        name: "Ngawi",
        type: StationType.RURAL,
        callsignPrefix: "NGAW51",
        northIsland: true
    },
    {
        x: 175.1461015,
        y: -41.39043728,
        name: "Lake Ferry",
        type: StationType.RURAL,
        callsignPrefix: "LAKE52",
        northIsland: true
    },
    {
        x: 175.7000743,
        y: -40.77825196,
        name: "Mauriceville",
        type: StationType.RURAL,
        callsignPrefix: "MAUR53",
        northIsland: true
    },
    {
        x: 175.8090779,
        y: -41.03670358,
        name: "Wainuioru",
        type: StationType.RURAL,
        callsignPrefix: "WAIN54",
        northIsland: true
    },
    {
        x: 176.220961,
        y: -40.89872666,
        name: "Castlepoint",
        type: StationType.RURAL,
        callsignPrefix: "CAST55",
        northIsland: true
    },
    {
        x: 176.0711724,
        y: -40.878355,
        name: "Tinui",
        type: StationType.RURAL,
        callsignPrefix: "TINU56",
        northIsland: true
    },
    {
        x: 175.4714155,
        y: -41.4270859,
        name: "Tora",
        type: StationType.RURAL,
        callsignPrefix: "TORA58",
        northIsland: true
    },
    {
        x: 176.0712312,
        y: -41.08757469,
        name: "Riversdale Beach",
        type: StationType.RURAL,
        callsignPrefix: "RIVE59",
        northIsland: true
    },
    {
        x: 175.5268042,
        y: -41.02606091,
        name: "Carterton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CART62",
        northIsland: true
    },
    {
        x: 175.3259856,
        y: -41.1166779,
        name: "Featherston",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FEAT63",
        northIsland: true
    },
    {
        x: 175.4629681,
        y: -41.07774465,
        name: "Greytown",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GREY64",
        northIsland: true
    },
    {
        x: 175.4607942,
        y: -41.21846979,
        name: "Martinborough",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MART65",
        northIsland: true
    },
    {
        x: 174.8287369,
        y: -41.16601958,
        name: "Wellington North",
        type: StationType.RURAL,
        callsignPrefix: "WELL92",
        northIsland: true
    },
    {
        x: 175.0786324,
        y: -41.12346577,
        name: "Remutaka VFB",
        type: StationType.RURAL,
        callsignPrefix: "REMU49",
        northIsland: true
    },
    {
        x: 174.9449372,
        y: -41.25801492,
        name: "Wainuiomata Bush",
        type: StationType.RURAL,
        callsignPrefix: "WAIN95",
        northIsland: true
    },
    {
        x: 175.2846819,
        y: -40.62079988,
        name: "Horowhenua",
        type: StationType.RURAL,
        callsignPrefix: "HORO97",
        northIsland: true
    },
    {
        x: 174.8089185,
        y: -41.32644591,
        name: "Wellington Airport",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRWELL",
        northIsland: true
    },
    {
        x: 174.7848206,
        y: -41.29330839,
        name: "Wellington City",
        type: StationType.CAREER,
        callsignPrefix: "WELL21",
        northIsland: true
    },
    {
        x: 174.7809774,
        y: -41.31819791,
        name: "Newtown",
        type: StationType.CAREER,
        callsignPrefix: "NEWT22",
        northIsland: true
    },
    {
        x: 174.7829867,
        y: -41.27529414,
        name: "Thorndon",
        type: StationType.CAREER,
        callsignPrefix: "THOR23",
        northIsland: true
    },
    {
        x: 174.8032023,
        y: -41.31819061,
        name: "Kilbirnie",
        type: StationType.COMPOSITE,
        callsignPrefix: "KILB24",
        northIsland: true
    },
    {
        x: 174.7643865,
        y: -41.30533997,
        name: "Brooklyn",
        type: StationType.CAREER,
        callsignPrefix: "BROO25",
        northIsland: true
    },
    {
        x: 174.7509263,
        y: -41.28062911,
        name: "Karori",
        type: StationType.CAREER,
        callsignPrefix: "KARO26",
        northIsland: true
    },
    {
        x: 174.8083575,
        y: -41.22163383,
        name: "Johnsonville",
        type: StationType.COMPOSITE,
        callsignPrefix: "JOHN28",
        northIsland: true
    },
    {
        x: 174.812801,
        y: -41.23238224,
        name: "Newlands",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NEWL29",
        northIsland: true
    },
    {
        x: 174.8471781,
        y: -41.13843719,
        name: "Porirua",
        type: StationType.COMPOSITE,
        callsignPrefix: "Porirua",
        northIsland: true
    },
    {
        x: 174.8223822,
        y: -41.17114639,
        name: "Tawa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAWA33",
        northIsland: true
    },
    {
        x: 174.8365543,
        y: -41.10860574,
        name: "Titahi Bay",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TITA34",
        northIsland: true
    },
    {
        x: 174.8630794,
        y: -41.08272973,
        name: "Plimmerton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PLIM35",
        northIsland: true
    },
    {
        x: 174.8965927,
        y: -41.21175085,
        name: "Hutt City",
        type: StationType.CAREER,
        callsignPrefix: "HUTT40",
        northIsland: true
    },
    {
        x: 174.9451869,
        y: -41.19270407,
        name: "Avalon",
        type: StationType.CAREER,
        callsignPrefix: "AVAL41",
        northIsland: true
    },
    {
        x: 174.91079,
        y: -41.23693799,
        name: "Seaview",
        type: StationType.COMPOSITE,
        callsignPrefix: "SEAV42",
        northIsland: true
    },
    {
        x: 174.9823678,
        y: -41.184034,
        name: "Stokes Valley",
        type: StationType.VOLUNTEER,
        callsignPrefix: "STOK43",
        northIsland: true
    },
    {
        x: 174.9479279,
        y: -41.25707281,
        name: "Wainuiomata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIN44",
        northIsland: true
    },
    {
        x: 174.8967641,
        y: -41.2919457,
        name: "Eastbourne",
        type: StationType.VOLUNTEER,
        callsignPrefix: "EAST46",
        northIsland: true
    },
    {
        x: 175.0092385,
        y: -41.14881784,
        name: "Silverstream",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SILV47",
        northIsland: true
    },
    {
        x: 175.0427286,
        y: -41.1311723,
        name: "Trentham",
        type: StationType.COMPOSITE,
        callsignPrefix: "TREN48",
        northIsland: true
    },
    {
        x: 175.0785243,
        y: -41.12359884,
        name: "Remutaka",
        type: StationType.COMPOSITE,
        callsignPrefix: "REMU49",
        northIsland: true
    },
    {
        x: 175.6653217,
        y: -40.94567516,
        name: "Masterton",
        type: StationType.COMPOSITE,
        callsignPrefix: "MAST61",
        northIsland: true
    },
    {
        x: 173.6704804,
        y: -41.29126456,
        name: "Canvastown",
        type: StationType.RURAL,
        callsignPrefix: "CANV02"
    },
    {
        x: 173.6998232,
        y: -41.50817303,
        name: "Northbank",
        type: StationType.RURAL,
        callsignPrefix: "NORT05"
    },
    {
        x: 174.0763826,
        y: -41.67254334,
        name: "Awatere",
        type: StationType.RURAL,
        callsignPrefix: "AWAT29"
    },
    {
        x: 173.9380939,
        y: -41.53965381,
        name: "Blenheim VRFF",
        type: StationType.RURAL,
        callsignPrefix: "BLEN09"
    },
    {
        x: 174.1383383,
        y: -41.8273429,
        name: "Flaxbourne",
        type: StationType.RURAL,
        callsignPrefix: "FLAX10"
    },
    {
        x: 173.8674472,
        y: -41.51444271,
        name: "RNZAF Base Woodbourne",
        type: StationType.CAREER,
        callsignPrefix: "WOOD151"
    },
    {
        x: 173.2767464,
        y: -41.27369695,
        name: "Nelson",
        type: StationType.COMPOSITE,
        callsignPrefix: "NELS21"
    },
    {
        x: 173.2350993,
        y: -41.31153629,
        name: "Stoke",
        type: StationType.VOLUNTEER,
        callsignPrefix: "STOK22"
    },
    {
        x: 173.5841401,
        y: -41.22674541,
        name: "Rai Valley",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RAIV23"
    },
    {
        x: 173.9591435,
        y: -41.51283317,
        name: "Blenheim",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BLEN24"
    },
    {
        x: 173.5405085,
        y: -41.5610859,
        name: "Wairau Valley",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIR25"
    },
    {
        x: 173.8262969,
        y: -41.50633043,
        name: "Renwick",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RENW26"
    },
    {
        x: 173.7661917,
        y: -41.27916703,
        name: "Havelock",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HAVE27"
    },
    {
        x: 174.076241,
        y: -41.67243983,
        name: "Seddon",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SEDD29"
    },
    {
        x: 174.006372,
        y: -41.29180735,
        name: "Picton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PICT30"
    },
    {
        x: 173.1003367,
        y: -41.25568739,
        name: "Mapua",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MAPU31"
    },
    {
        x: 173.006246,
        y: -41.26434314,
        name: "Upper Moutere",
        type: StationType.VOLUNTEER,
        callsignPrefix: "UPPE32"
    },
    {
        x: 173.1817067,
        y: -41.33809154,
        name: "Richmond",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RICH33"
    },
    {
        x: 173.0416081,
        y: -41.40528104,
        name: "Wakefield",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAKE34"
    },
    {
        x: 172.8227906,
        y: -41.38794324,
        name: "Tapawera",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAPA35"
    },
    {
        x: 173.011598,
        y: -41.10861213,
        name: "Motueka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MOTU36"
    },
    {
        x: 173.0155628,
        y: -41.0370432,
        name: "Kaiteriteri",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIT37"
    },
    {
        x: 172.3250725,
        y: -41.80534678,
        name: "Murchison",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MURC38"
    },
    {
        x: 172.8069076,
        y: -40.86063181,
        name: "Takaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAKA39"
    },
    {
        x: 172.6829186,
        y: -40.67697253,
        name: "Collingwood",
        type: StationType.VOLUNTEER,
        callsignPrefix: "COLL40"
    },
    {
        x: 173.9718092,
        y: -41.21657662,
        name: "Sounds",
        type: StationType.RURAL,
        callsignPrefix: "SOUN41"
    },
    {
        x: 173.7638682,
        y: -41.11980573,
        name: "Duncan Bay",
        type: StationType.RURAL,
        callsignPrefix: "DUNC44"
    },
    {
        x: 173.6585312,
        y: -41.11193894,
        name: "Okiwi Bay",
        type: StationType.RURAL,
        callsignPrefix: "OKIW46"
    },
    {
        x: 172.9946748,
        y: -41.12303215,
        name: "Tasman",
        type: StationType.RURAL,
        callsignPrefix: "TASM47"
    },
    {
        x: 173.10491,
        y: -41.31410804,
        name: "Appleby",
        type: StationType.RURAL,
        callsignPrefix: "APPL48"
    },
    {
        x: 173.7371379,
        y: -41.56933808,
        name: "Waihopai",
        type: StationType.RURAL,
        callsignPrefix: "WAIH49"
    },
    {
        x: 173.1128048,
        y: -41.37729293,
        name: "Brightwater",
        type: StationType.RURAL,
        callsignPrefix: "BRIG50"
    },
    {
        x: 172.8485508,
        y: -41.80135289,
        name: "Lake Rotoiti",
        type: StationType.RURAL,
        callsignPrefix: "LAKE51"
    },
    {
        x: 172.9453879,
        y: -40.82915119,
        name: "Wainui Bay",
        type: StationType.RURAL,
        callsignPrefix: "WAIN59"
    },
    {
        x: 172.8742766,
        y: -41.2016923,
        name: "Ngatimoti",
        type: StationType.RURAL,
        callsignPrefix: "NGAT53"
    },
    {
        x: 172.8229488,
        y: -41.02900269,
        name: "Upper Takaka",
        type: StationType.RURAL,
        callsignPrefix: "UPPE54"
    },
    {
        x: 173.3976519,
        y: -41.21345196,
        name: "Hira",
        type: StationType.RURAL,
        callsignPrefix: "HIRA55"
    },
    {
        x: 174.0428385,
        y: -41.4003665,
        name: "Rarangi",
        type: StationType.RURAL,
        callsignPrefix: "RARA57"
    },
    {
        x: 173.8791091,
        y: -41.28959301,
        name: "Linkwater",
        type: StationType.RURAL,
        callsignPrefix: "LINK58"
    },
    {
        x: 173.0065641,
        y: -41.00291026,
        name: "Marahau",
        type: StationType.RURAL,
        callsignPrefix: "MARA59"
    },
    {
        x: 171.2046518,
        y: -42.45796225,
        name: "Greymouth",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GREY61"
    },
    {
        x: 171.2122222,
        y: -42.44034765,
        name: "Cobden",
        type: StationType.VOLUNTEER,
        callsignPrefix: "COBD62"
    },
    {
        x: 171.3080118,
        y: -42.45199105,
        name: "Brunner",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BRUN63"
    },
    {
        x: 171.4800515,
        y: -42.57608945,
        name: "Moana",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MOAN64"
    },
    {
        x: 171.1856215,
        y: -42.63044684,
        name: "Kumara",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KUMA65"
    },
    {
        x: 171.442488,
        y: -42.39459243,
        name: "Ngahere",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NGAH66"
    },
    {
        x: 171.4121958,
        y: -42.36367242,
        name: "Blackball",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BLAC67"
    },
    {
        x: 171.8648524,
        y: -42.11829061,
        name: "Reefton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "REEF68"
    },
    {
        x: 171.6846738,
        y: -42.27139011,
        name: "Ikamatua",
        type: StationType.VOLUNTEER,
        callsignPrefix: "IKAM69"
    },
    {
        x: 171.251051,
        y: -42.40250051,
        name: "Runanga",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RUNA70"
    },
    {
        x: 173.2264484,
        y: -41.2981698,
        name: "Nelson Airport",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRNELS"
    },
    {
        x: 171.9525113,
        y: -41.85710927,
        name: "Inangahua",
        type: StationType.RURAL,
        callsignPrefix: "INAN94"
    },
    {
        x: 170.9749639,
        y: -42.72146189,
        name: "Hokitika",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HOKI71"
    },
    {
        x: 170.0147439,
        y: -43.46421445,
        name: "Fox Glacier",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FOXG72"
    },
    {
        x: 170.1822435,
        y: -43.3903223,
        name: "Franz Josef",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FRAN74"
    },
    {
        x: 170.5560964,
        y: -43.14880542,
        name: "Harihari",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HARI75"
    },
    {
        x: 170.3589779,
        y: -43.2611197,
        name: "Whataroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WHAT76"
    },
    {
        x: 170.81573,
        y: -42.89824159,
        name: "Ross",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ROSS77"
    },
    {
        x: 171.5983779,
        y: -41.75235573,
        name: "Westport",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WEST78"
    },
    {
        x: 171.8556641,
        y: -41.62693425,
        name: "Granity",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GRAN79"
    },
    {
        x: 172.1217018,
        y: -41.24936136,
        name: "Karamea",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KARA80"
    },
    {
        x: 172.0760372,
        y: -41.37670401,
        name: "Little Wanganui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LITT81"
    },
    {
        x: 171.764115,
        y: -41.71357146,
        name: "Waimangaroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIM82"
    },
    {
        x: 169.040835,
        y: -43.88062126,
        name: "Haast",
        type: StationType.RURAL,
        callsignPrefix: "HAAS83"
    },
    {
        x: 168.8595114,
        y: -43.94063429,
        name: "Hannahs Clearing",
        type: StationType.RURAL,
        callsignPrefix: "HANN85"
    },
    {
        x: 171.0457569,
        y: -42.83871116,
        name: "Kokatahi And Kowhitirangi",
        type: StationType.RURAL,
        callsignPrefix: "Kokatahi"
    },
    {
        x: 171.438948,
        y: -41.90656978,
        name: "Charleston",
        type: StationType.RURAL,
        callsignPrefix: "CHAR92"
    },
    {
        x: 171.9909175,
        y: -41.55530657,
        name: "Seddonville",
        type: StationType.RURAL,
        callsignPrefix: "SEDD93"
    },
    {
        x: 172.5325904,
        y: -43.49285226,
        name: "Christchurch Airport",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRCHRI"
    },
    {
        x: 172.3757808,
        y: -43.57984096,
        name: "Canterbury High Country",
        type: StationType.RURAL,
        callsignPrefix: "CANT19"
    },
    {
        x: 172.6442356,
        y: -43.52677378,
        name: "Christchurch City",
        type: StationType.CAREER,
        callsignPrefix: "CHRI21"
    },
    {
        x: 172.6197729,
        y: -43.55352575,
        name: "Spreydon",
        type: StationType.CAREER,
        callsignPrefix: "SPRE22"
    },
    {
        x: 172.604213,
        y: -43.4677487,
        name: "Redwood",
        type: StationType.CAREER,
        callsignPrefix: "REDW23"
    },
    {
        x: 172.6957478,
        y: -43.55584853,
        name: "Woolston",
        type: StationType.CAREER,
        callsignPrefix: "WOOL24"
    },
    {
        x: 172.5313276,
        y: -43.56020283,
        name: "Wigram",
        type: StationType.CAREER,
        callsignPrefix: "WIGR25"
    },
    {
        x: 172.5823557,
        y: -43.52021357,
        name: "Ilam",
        type: StationType.CAREER,
        callsignPrefix: "ILAM26"
    },
    {
        x: 172.7063092,
        y: -43.5050226,
        name: "Anzac",
        type: StationType.COMPOSITE,
        callsignPrefix: "ANZA27"
    },
    {
        x: 172.7589679,
        y: -43.57112769,
        name: "Sumner",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SUMN28"
    },
    {
        x: 172.7197995,
        y: -43.60232727,
        name: "Lyttelton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LYTT29"
    },
    {
        x: 172.7305402,
        y: -43.62815005,
        name: "Diamond Harbour",
        type: StationType.VOLUNTEER,
        callsignPrefix: "DIAM30"
    },
    {
        x: 172.6939087,
        y: -43.43025726,
        name: "Spencerville",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SPEN31"
    },
    {
        x: 172.6463246,
        y: -43.62693022,
        name: "Governors Bay",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GOVE33"
    },
    {
        x: 173.0606773,
        y: -43.76214569,
        name: "Banks Peninsula",
        type: StationType.RURAL,
        callsignPrefix: "BANK37"
    },
    {
        x: 172.5989596,
        y: -43.3162687,
        name: "Sefton",
        type: StationType.RURAL,
        callsignPrefix: "SEFT39"
    },
    {
        x: 172.654903,
        y: -43.38292793,
        name: "Kaiapoi",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIA40"
    },
    {
        x: 172.486284,
        y: -43.63945961,
        name: "Lincoln",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LINC41"
    },
    {
        x: 172.3768234,
        y: -43.59228928,
        name: "Rolleston",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ROLL42"
    },
    {
        x: 172.2998409,
        y: -43.76272459,
        name: "Leeston",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LEES43"
    },
    {
        x: 172.1921433,
        y: -43.6593908,
        name: "Dunsandel",
        type: StationType.VOLUNTEER,
        callsignPrefix: "DUNS44"
    },
    {
        x: 172.2509683,
        y: -43.80992687,
        name: "Southbridge",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SOUT45"
    },
    {
        x: 172.9646568,
        y: -43.80860448,
        name: "Akaroa",
        type: StationType.VOLUNTEER,
        callsignPrefix: "AKAR46"
    },
    {
        x: 172.7947624,
        y: -43.76391757,
        name: "Little River",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LITT47"
    },
    {
        x: 172.7264188,
        y: -43.15322075,
        name: "Amberley",
        type: StationType.VOLUNTEER,
        callsignPrefix: "AMBE48"
    },
    {
        x: 172.6426935,
        y: -42.9233233,
        name: "Hawarden",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HAWA49"
    },
    {
        x: 172.6868598,
        y: -42.96747505,
        name: "Waikari",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIK60"
    },
    {
        x: 172.7579138,
        y: -43.05731969,
        name: "Waipara",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIP61"
    },
    {
        x: 171.7504643,
        y: -43.90701034,
        name: "Ashburton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ASHB62"
    },
    {
        x: 171.6459443,
        y: -43.63136144,
        name: "Methven",
        type: StationType.VOLUNTEER,
        callsignPrefix: "METH63"
    },
    {
        x: 172.0195207,
        y: -43.75477593,
        name: "Rakaia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RAKA64"
    },
    {
        x: 173.2750518,
        y: -42.81346195,
        name: "Cheviot",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CHEV65"
    },
    {
        x: 172.8473661,
        y: -42.77608428,
        name: "Culverden",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CULV66"
    },
    {
        x: 171.5030383,
        y: -43.61201383,
        name: "Alford Forest",
        type: StationType.RURAL,
        callsignPrefix: "ALFO86"
    },
    {
        x: 171.3770238,
        y: -43.31605223,
        name: "Upper Rakaia",
        type: StationType.RURAL,
        callsignPrefix: "UPPE87"
    },
    {
        x: 171.7796023,
        y: -43.73198188,
        name: "Lauriston",
        type: StationType.RURAL,
        callsignPrefix: "LAUR88"
    },
    {
        x: 171.9822962,
        y: -43.88703948,
        name: "Pendarves",
        type: StationType.RURAL,
        callsignPrefix: "PEND89"
    },
    {
        x: 171.7505212,
        y: -43.9070643,
        name: "Ashburton VRFF",
        type: StationType.RURAL,
        callsignPrefix: "ASHB62"
    },
    {
        x: 172.3045221,
        y: -43.61480385,
        name: "Burnham Camp",
        type: StationType.CAREER,
        callsignPrefix: "BURN91"
    },
    {
        x: 172.9678577,
        y: -42.96471247,
        name: "Scargill",
        type: StationType.RURAL,
        callsignPrefix: "SCAR92"
    },
    {
        x: 171.5714911,
        y: -44.00396015,
        name: "Hinds",
        type: StationType.RURAL,
        callsignPrefix: "HIND93"
    },
    {
        x: 171.4192676,
        y: -43.82156374,
        name: "Mayfield",
        type: StationType.RURAL,
        callsignPrefix: "MAYF94"
    },
    {
        x: 172.369191,
        y: -43.52329545,
        name: "West Melton",
        type: StationType.RURAL,
        callsignPrefix: "WEST95"
    },
    {
        x: 171.4028936,
        y: -43.70578206,
        name: "Mount Somers",
        type: StationType.RURAL,
        callsignPrefix: "MTSO96"
    },
    {
        x: 173.0753046,
        y: -43.04807854,
        name: "Motunau",
        type: StationType.RURAL,
        callsignPrefix: "MOTU97"
    },
    {
        x: 171.6830665,
        y: -43.981119,
        name: "Willowby",
        type: StationType.RURAL,
        callsignPrefix: "WILL99"
    },
    {
        x: 171.0450684,
        y: -43.61046964,
        name: "Lake Clearwater",
        type: StationType.RURAL,
        callsignPrefix: "LAKE01"
    },
    {
        x: 173.5259487,
        y: -42.47774324,
        name: "Goose Bay",
        type: StationType.RURAL,
        callsignPrefix: "GOOS06"
    },
    {
        x: 173.4397376,
        y: -42.60802132,
        name: "Conway Flat",
        type: StationType.RURAL,
        callsignPrefix: "CONW08"
    },
    {
        x: 172.690379,
        y: -42.96792984,
        name: "Hurunui",
        type: StationType.RURAL,
        callsignPrefix: "HURU09"
    },
    {
        x: 173.1352603,
        y: -42.51629753,
        name: "Lyford",
        type: StationType.RURAL,
        callsignPrefix: "LYFO10"
    },
    {
        x: 172.8123932,
        y: -42.51333823,
        name: "Hanmer VRFF",
        type: StationType.RURAL,
        callsignPrefix: "HANM13"
    },
    {
        x: 172.5138634,
        y: -43.37280744,
        name: "Swannanoa",
        type: StationType.RURAL,
        callsignPrefix: "SWAN17"
    },
    {
        x: 172.7179467,
        y: -43.28719902,
        name: "Waikuku Beach",
        type: StationType.RURAL,
        callsignPrefix: "WAIK18"
    },
    {
        x: 172.7009449,
        y: -43.37731334,
        name: "Pines Beach",
        type: StationType.RURAL,
        callsignPrefix: "PINE19"
    },
    {
        x: 170.9496896,
        y: -44.3104105,
        name: "Cave",
        type: StationType.RURAL,
        callsignPrefix: "CAVE50"
    },
    {
        x: 171.3723722,
        y: -44.0663869,
        name: "Rangitata",
        type: StationType.RURAL,
        callsignPrefix: "RANG51"
    },
    {
        x: 171.2617044,
        y: -43.91360423,
        name: "Peel Forest",
        type: StationType.RURAL,
        callsignPrefix: "PEEL52"
    },
    {
        x: 171.3791855,
        y: -44.21116633,
        name: "Clandeboye",
        type: StationType.RURAL,
        callsignPrefix: "CLAN53"
    },
    {
        x: 171.2527892,
        y: -44.39863229,
        name: "Aorangi",
        type: StationType.RURAL,
        callsignPrefix: "AORA54"
    },
    {
        x: 171.012661,
        y: -43.69969728,
        name: "Rangitata Gorge",
        type: StationType.RURAL,
        callsignPrefix: "RANG55"
    },
    {
        x: 170.674564,
        y: -44.51040982,
        name: "Hakataramea",
        type: StationType.RURAL,
        callsignPrefix: "HAKA56"
    },
    {
        x: 170.825124,
        y: -44.73124793,
        name: "Waihaorunga",
        type: StationType.RURAL,
        callsignPrefix: "WAIH57"
    },
    {
        x: 170.9799057,
        y: -44.3794255,
        name: "Cannington",
        type: StationType.RURAL,
        callsignPrefix: "CANN58"
    },
    {
        x: 170.0977564,
        y: -44.260206,
        name: "Twizel VRFF",
        type: StationType.RURAL,
        callsignPrefix: "TWIZ61"
    },
    {
        x: 172.8304856,
        y: -42.52306488,
        name: "Hanmer Springs",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HANM67"
    },
    {
        x: 173.0411749,
        y: -42.65422497,
        name: "Waiau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIA68"
    },
    {
        x: 172.1139443,
        y: -43.48886916,
        name: "Darfield",
        type: StationType.VOLUNTEER,
        callsignPrefix: "DARF69"
    },
    {
        x: 171.9655808,
        y: -43.48213663,
        name: "Coalgate",
        type: StationType.VOLUNTEER,
        callsignPrefix: "COAL70"
    },
    {
        x: 172.019276,
        y: -43.38805557,
        name: "Sheffield",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SHEF71"
    },
    {
        x: 172.2128983,
        y: -43.49898409,
        name: "Kirwee",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KIRW72"
    },
    {
        x: 171.9605138,
        y: -43.53931039,
        name: "Hororata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HORO73"
    },
    {
        x: 171.9298743,
        y: -43.33674754,
        name: "Springfield",
        type: StationType.VOLUNTEER,
        callsignPrefix: "SPRI74"
    },
    {
        x: 173.6791245,
        y: -42.40453391,
        name: "Kaikoura",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIK75"
    },
    {
        x: 172.5940452,
        y: -43.30504196,
        name: "Rangiora",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RANG76"
    },
    {
        x: 172.6667378,
        y: -43.32235439,
        name: "Woodend",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WOOD77"
    },
    {
        x: 172.3796489,
        y: -43.31138676,
        name: "Cust",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CUST78"
    },
    {
        x: 172.1945458,
        y: -43.29696526,
        name: "Oxford",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OXFO79"
    },
    {
        x: 171.2529936,
        y: -44.39903693,
        name: "Timaru",
        type: StationType.CAREER,
        callsignPrefix: "TIMA80"
    },
    {
        x: 171.2439568,
        y: -44.37080656,
        name: "Washdyke",
        type: StationType.CAREER,
        callsignPrefix: "WASH81"
    },
    {
        x: 170.8286408,
        y: -44.09676593,
        name: "Fairlie",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FAIR82"
    },
    {
        x: 170.4791758,
        y: -44.00629173,
        name: "Lake Tekapo",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LAKE83"
    },
    {
        x: 171.2438795,
        y: -44.09720264,
        name: "Geraldine",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GERA84"
    },
    {
        x: 171.1305797,
        y: -44.25971981,
        name: "Pleasant Point",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PLEA85"
    },
    {
        x: 171.2789174,
        y: -44.24183688,
        name: "Temuka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEMU86"
    },
    {
        x: 171.1891407,
        y: -44.52827446,
        name: "Saint Andrews",
        type: StationType.VOLUNTEER,
        callsignPrefix: "STAN87"
    },
    {
        x: 171.0446867,
        y: -44.73743414,
        name: "Waimate",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIM88"
    },
    {
        x: 171.1014336,
        y: -44.91491061,
        name: "Glenavy",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GLEN89"
    },
    {
        x: 170.09775,
        y: -44.26026896,
        name: "Twizel",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TWIZ90"
    },
    {
        x: 170.101737,
        y: -43.74095605,
        name: "Mount Cook",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MTCO91"
    },
    {
        x: 170.655975,
        y: -44.0907895,
        name: "Burkes Pass",
        type: StationType.RURAL,
        callsignPrefix: "BURK92"
    },
    {
        x: 172.1134481,
        y: -43.4888175,
        name: "Darfield South",
        type: StationType.RURAL,
        callsignPrefix: "DARF69"
    },
    {
        x: 171.5621016,
        y: -42.93903934,
        name: "Arthur's Pass",
        type: StationType.RURAL,
        callsignPrefix: "ARTH96"
    },
    {
        x: 170.8720389,
        y: -44.23123355,
        name: "Albury",
        type: StationType.RURAL,
        callsignPrefix: "ALBU97"
    },
    {
        x: 172.1802906,
        y: -42.33461296,
        name: "Springs Junction",
        type: StationType.RURAL,
        callsignPrefix: "SPRI98"
    },
    {
        x: 170.5097443,
        y: -45.87278408,
        name: "Dunedin",
        type: StationType.CAREER,
        callsignPrefix: "DUNE21"
    },
    {
        x: 170.5096623,
        y: -45.89870267,
        name: "St Kilda",
        type: StationType.CAREER,
        callsignPrefix: "STKI22"
    },
    {
        x: 170.4625329,
        y: -45.89645311,
        name: "Lookout Point",
        type: StationType.CAREER,
        callsignPrefix: "LOOK23"
    },
    {
        x: 170.4863468,
        y: -45.8642081,
        name: "Roslyn",
        type: StationType.CAREER,
        callsignPrefix: "ROSL24"
    },
    {
        x: 170.5153434,
        y: -45.8553796,
        name: "Willowbank",
        type: StationType.CAREER,
        callsignPrefix: "WILL25"
    },
    {
        x: 170.5700895,
        y: -45.74735611,
        name: "Waitati",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIT26"
    },
    {
        x: 170.6218443,
        y: -45.81465482,
        name: "Port Chalmers",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PORT27"
    },
    {
        x: 170.5551304,
        y: -45.86600013,
        name: "Ravensbourne",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RAVE28"
    },
    {
        x: 170.6509692,
        y: -45.84031747,
        name: "Portobello",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PORT29"
    },
    {
        x: 170.3531583,
        y: -45.87622485,
        name: "Mosgiel",
        type: StationType.COMPOSITE,
        callsignPrefix: "MOSG31"
    },
    {
        x: 170.230668,
        y: -45.86075524,
        name: "Outram",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OUTR32"
    },
    {
        x: 170.3283738,
        y: -45.94945886,
        name: "Brighton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BRIG33"
    },
    {
        x: 170.1981187,
        y: -45.9248287,
        name: "Dunedin Airport",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRDUNE"
    },
    {
        x: 170.1217613,
        y: -45.50726237,
        name: "Middlemarch",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MIDD38"
    },
    {
        x: 169.3898479,
        y: -45.2524891,
        name: "Alexandra",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ALEX39"
    },
    {
        x: 169.3174646,
        y: -45.18724792,
        name: "Clyde",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CLYD41"
    },
    {
        x: 169.1954212,
        y: -45.04708778,
        name: "Cromwell",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CROM42"
    },
    {
        x: 169.413485,
        y: -45.66145815,
        name: "Millers Flat",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MILL43"
    },
    {
        x: 169.5978826,
        y: -45.09898462,
        name: "Omakau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OMAK44"
    },
    {
        x: 169.313795,
        y: -45.54131138,
        name: "Roxburgh",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ROXB45"
    },
    {
        x: 169.7379686,
        y: -46.23698538,
        name: "Balclutha",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BALC46"
    },
    {
        x: 169.5432581,
        y: -46.09643345,
        name: "Clutha Valley",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CLUT47"
    },
    {
        x: 169.7819208,
        y: -46.38660381,
        name: "Kaka Point",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAKA48"
    },
    {
        x: 169.3732671,
        y: -46.20281592,
        name: "Clinton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "CLIN49"
    },
    {
        x: 169.4909524,
        y: -46.21694996,
        name: "Waiwera South",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIW51"
    },
    {
        x: 169.8453619,
        y: -46.28673209,
        name: "Kaitangata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KAIT52"
    },
    {
        x: 169.9582833,
        y: -46.1202386,
        name: "Milton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MILT53"
    },
    {
        x: 169.6581199,
        y: -46.4515783,
        name: "Owaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OWAK54"
    },
    {
        x: 170.469933,
        y: -44.73354491,
        name: "Kurow",
        type: StationType.VOLUNTEER,
        callsignPrefix: "KURO55"
    },
    {
        x: 170.9225246,
        y: -45.10841502,
        name: "Waitaki",
        type: StationType.RURAL,
        callsignPrefix: "WAIT62"
    },
    {
        x: 169.5950874,
        y: -45.09903229,
        name: "Blackstone",
        type: StationType.RURAL,
        callsignPrefix: "BLAC64"
    },
    {
        x: 169.3896278,
        y: -45.25222897,
        name: "Dunstan",
        type: StationType.RURAL,
        callsignPrefix: "DUNS67"
    },
    {
        x: 170.0938779,
        y: -46.02382532,
        name: "Waihola",
        type: StationType.RURAL,
        callsignPrefix: "WAIH68"
    },
    {
        x: 170.6715398,
        y: -45.59673947,
        name: "East Otago / Waikouaiti",
        type: StationType.RURAL,
        callsignPrefix: "WAIK75"
    },
    {
        x: 169.9673609,
        y: -44.48881654,
        name: "Omarama",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OMAR56"
    },
    {
        x: 170.1933386,
        y: -44.60741275,
        name: "Otematata",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OTEM57"
    },
    {
        x: 169.6885299,
        y: -45.91298578,
        name: "Lawrence",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LAWR58"
    },
    {
        x: 169.757767,
        y: -45.98516412,
        name: "Waitahuna",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIT59"
    },
    {
        x: 168.738817,
        y: -45.02121916,
        name: "Queenstown Airport",
        type: StationType.INDUSTRY,
        callsignPrefix: "AIRQUEE"
    },
    {
        x: 170.9734937,
        y: -45.09164529,
        name: "Oamaru",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OAMA72"
    },
    {
        x: 170.9174328,
        y: -45.07847241,
        name: "Weston",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WEST73"
    },
    {
        x: 170.7134123,
        y: -45.48528464,
        name: "Palmerston",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PALM74"
    },
    {
        x: 170.6716278,
        y: -45.59671664,
        name: "Waikouaiti",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIK75"
    },
    {
        x: 168.658486,
        y: -45.02964426,
        name: "Queenstown",
        type: StationType.VOLUNTEER,
        callsignPrefix: "QUEE76"
    },
    {
        x: 168.736312,
        y: -45.02548863,
        name: "Frankton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "FRAN77"
    },
    {
        x: 168.8325519,
        y: -44.93963946,
        name: "Arrowtown",
        type: StationType.VOLUNTEER,
        callsignPrefix: "ARRO78"
    },
    {
        x: 170.1031449,
        y: -45.12891451,
        name: "Ranfurly",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RANF79"
    },
    {
        x: 170.1458363,
        y: -45.02309902,
        name: "Naseby",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NASE81"
    },
    {
        x: 169.2569979,
        y: -44.61293724,
        name: "Lake Hawea",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LAKE82"
    },
    {
        x: 169.2688659,
        y: -44.74683829,
        name: "Luggate",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LUGG83"
    },
    {
        x: 170.6811663,
        y: -44.85438972,
        name: "Duntroon",
        type: StationType.VOLUNTEER,
        callsignPrefix: "DUNT84"
    },
    {
        x: 169.1431436,
        y: -44.69584764,
        name: "Wanaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WANA85"
    },
    {
        x: 169.4275221,
        y: -44.83181024,
        name: "Tarras",
        type: StationType.RURAL,
        callsignPrefix: "TARR86"
    },
    {
        x: 168.8326242,
        y: -44.93970758,
        name: "Wakatipu",
        type: StationType.RURAL,
        callsignPrefix: "WAKA78"
    },
    {
        x: 169.2435987,
        y: -44.7228807,
        name: "Wanaka Airport",
        type: StationType.INDUSTRY,
        callsignPrefix: "Only manned during summer by Queenstown Airport Appliances."
    },
    {
        x: 170.8989243,
        y: -45.18147792,
        name: "Kakanui",
        type: StationType.RURAL,
        callsignPrefix: "KAKA91"
    },
    {
        x: 170.8160338,
        y: -45.32426963,
        name: "Hampden",
        type: StationType.RURAL,
        callsignPrefix: "HAMP92"
    },
    {
        x: 168.3891725,
        y: -44.84898629,
        name: "Glenorchy",
        type: StationType.RURAL,
        callsignPrefix: "GLEN95"
    },
    {
        x: 170.5053738,
        y: -45.88347549,
        name: "Wakari",
        type: StationType.RURAL,
        callsignPrefix: "WAKA96"
    },
    {
        x: 169.4691,
        y: -46.56047558,
        name: "Papatowai",
        type: StationType.RURAL,
        callsignPrefix: "PAPA97"
    },
    {
        x: 169.2300875,
        y: -44.23197327,
        name: "Makarora",
        type: StationType.RURAL,
        callsignPrefix: "MAKA99"
    },
    {
        x: 168.3564458,
        y: -46.41043866,
        name: "Invercargill",
        type: StationType.COMPOSITE,
        callsignPrefix: "INVE21"
    },
    {
        x: 168.3716004,
        y: -46.44657294,
        name: "Kingswell",
        type: StationType.CAREER,
        callsignPrefix: "KING22"
    },
    {
        x: 168.3364912,
        y: -46.59905439,
        name: "Bluff",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BLUF23"
    },
    {
        x: 168.2899112,
        y: -46.3293913,
        name: "Wallacetown",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WALL24"
    },
    {
        x: 168.943559,
        y: -46.56418732,
        name: "Tokanui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TOKA31"
    },
    {
        x: 168.8144241,
        y: -46.51595108,
        name: "Waimahaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIM32"
    },
    {
        x: 168.0131137,
        y: -46.35312605,
        name: "Riverton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RIVE33"
    },
    {
        x: 167.7369982,
        y: -46.28176334,
        name: "Orepuki",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OREP35"
    },
    {
        x: 168.0994749,
        y: -46.28693942,
        name: "Thornbury",
        type: StationType.VOLUNTEER,
        callsignPrefix: "THOR36"
    },
    {
        x: 168.3237787,
        y: -46.14216256,
        name: "Winton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WINT37"
    },
    {
        x: 168.4189461,
        y: -46.14972602,
        name: "Browns",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BROW38"
    },
    {
        x: 168.3698574,
        y: -45.89891542,
        name: "Dipton",
        type: StationType.VOLUNTEER,
        callsignPrefix: "DIPT39"
    },
    {
        x: 168.783774,
        y: -46.31385485,
        name: "Edendale",
        type: StationType.VOLUNTEER,
        callsignPrefix: "EDEN41"
    },
    {
        x: 168.8507781,
        y: -46.32608149,
        name: "Wyndham",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WYND42"
    },
    {
        x: 168.943976,
        y: -46.09435433,
        name: "Gore",
        type: StationType.VOLUNTEER,
        callsignPrefix: "GORE43"
    },
    {
        x: 169.0974225,
        y: -46.0968676,
        name: "Pukerau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "PUKE44"
    },
    {
        x: 168.8658443,
        y: -46.19307947,
        name: "Mataura",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MATA45"
    },
    {
        x: 168.8476862,
        y: -45.72432994,
        name: "Waikaia",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIK46"
    },
    {
        x: 169.0161365,
        y: -45.92216634,
        name: "Waikaka",
        type: StationType.VOLUNTEER,
        callsignPrefix: "WAIK47"
    },
    {
        x: 169.2620306,
        y: -45.94312988,
        name: "Tapanui",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TAPA51"
    },
    {
        x: 169.2694708,
        y: -45.84433507,
        name: "Heriot",
        type: StationType.VOLUNTEER,
        callsignPrefix: "HERI52"
    },
    {
        x: 168.740315,
        y: -45.89950113,
        name: "Riversdale",
        type: StationType.VOLUNTEER,
        callsignPrefix: "RIVE53"
    },
    {
        x: 168.4426057,
        y: -45.74069509,
        name: "Lumsden",
        type: StationType.VOLUNTEER,
        callsignPrefix: "LUMS54"
    },
    {
        x: 168.5869541,
        y: -45.83963674,
        name: "Balfour",
        type: StationType.VOLUNTEER,
        callsignPrefix: "BALF55"
    },
    {
        x: 168.2379973,
        y: -45.66956358,
        name: "Mossburn",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MOSS56"
    },
    {
        x: 168.0309905,
        y: -45.97233152,
        name: "Nightcaps",
        type: StationType.VOLUNTEER,
        callsignPrefix: "NIGH57"
    },
    {
        x: 167.9960254,
        y: -46.1431561,
        name: "Otautau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OTAU58"
    },
    {
        x: 167.9605071,
        y: -45.93205589,
        name: "Ohai",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OHAI59"
    },
    {
        x: 167.6905554,
        y: -46.13484513,
        name: "Tuatapere",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TUAT72"
    },
    {
        x: 167.7192467,
        y: -45.41653343,
        name: "Te Anau",
        type: StationType.VOLUNTEER,
        callsignPrefix: "TEAN73"
    },
    {
        x: 167.6174056,
        y: -45.56341829,
        name: "Manapouri",
        type: StationType.VOLUNTEER,
        callsignPrefix: "MANA74"
    },
    {
        x: 168.1267418,
        y: -46.89844317,
        name: "Oban",
        type: StationType.VOLUNTEER,
        callsignPrefix: "OBAN75"
    },
    {
        x: 168.5736415,
        y: -45.51140607,
        name: "Athol",
        type: StationType.RURAL,
        callsignPrefix: "ATHO91"
    },
    {
        x: 168.6838337,
        y: -45.46685028,
        name: "Garston",
        type: StationType.RURAL,
        callsignPrefix: "GARS92"
    },
    {
        x: 168.7225961,
        y: -45.33783271,
        name: "Kingston",
        type: StationType.RURAL,
        callsignPrefix: "KING93"
    },
    {
        x: 169.1339335,
        y: -46.62340086,
        name: "Waikawa",
        type: StationType.RURAL,
        callsignPrefix: "WAIK94"
    },
    {
        x: 168.5470078,
        y: -46.20743596,
        name: "Hedgehope",
        type: StationType.RURAL,
        callsignPrefix: "HEDG95"
    },
    {
        x: 167.9237376,
        y: -44.67600373,
        name: "Milford Sound",
        type: StationType.RURAL,
        callsignPrefix: "MILF96"
    },
    {
        x: 167.6730988,
        y: -45.79178324,
        name: "Blackmount",
        type: StationType.RURAL,
        callsignPrefix: "BLAC97"
    },
    {
        x: 168.1496699,
        y: -46.14802147,
        name: "Drummond",
        type: StationType.RURAL,
        callsignPrefix: "DRUM39"
    }
]

export function getStations(){
    return stations;
}