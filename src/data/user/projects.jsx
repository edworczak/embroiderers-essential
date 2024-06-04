export const projects = [
    {
        id: "prj-test-1",
        name: "Test z kosztami i mulinami",
        startDate: "2024-04-10",
        img: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "5:12",
        hoop: "12",
        budget: {
            price: 120,
            costs: [
                {
                    id: "cost1",
                    label: "tamborek",
                    cost: 24,
                },
                {
                    id: "cost2",
                    label: "muliny",
                    cost: 8,
                },
                {
                    id: "cost3",
                    label: "materiał",
                    cost: 4,
                },
            ],
        },
        threads: [
            {
                id: "dmc310",
                description: "czarne pióra",
            },
            {
                id: "dmcb5200",
                description: "białe pióra",
            },
            {
                id: "dmc606",
                description: "dziób i płetwy",
            },
            {
                id: "dmc739",
                description: "paski na dziobie",
            },
            {
                id: "dmc839",
                description: "krajobraz",
            },
            {
                id: "dmc02",
                description: "podświetlenia na białych piórach",
            },
            {
                id: "dmc906",
                description: "trawa",
            },
            {
                id: "dmc164",
                description: "łodygi długich kwiatów",
            },
            {
                id: "dmc741",
                description: "niskie kwiaty",
            },
            {
                id: "dmc963",
                description: "wysokie kwiaty",
            },
        ],
    },
    {
        id: "prj-test-2",
        name: "Test",
        startDate: "2024-01-31",
        time: "0:00",
        hoop: "12",
    },
    {
        id: "prj0001",
        name: "Wiosna",
        finished: true,
        finishDate: "2023-03-08",
        img: new URL("../../assets/img/demo/wiosna.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "ciemnozielony drelich",
        threads: [
            {
                id: "dmc987",
                description: "koniczyna",
            },
            {
                id: "dmc988",
                description: "koniczyna",
            },
            {
                id: "dmc3052",
                description: "największy kwiat",
            },
            {
                id: "dmc948",
                description: "największy kwiat",
            },
            {
                id: "dmc472",
                description: "fioletowe kwiatki, lawenda",
            },
            {
                id: "dmc24",
                description: "fioletowe kwiatki",
            },
            {
                id: "dmc3042",
                description: "lawenda",
            },
            {
                id: "dmc368",
                description: "mały kwiatek",
            },
            {
                id: "dmc165",
                description: "mały kwiatek",
            },
            {
                id: "dmc905",
                description: "trawa",
            },
            {
                id: "dmc3364",
                description: "trawa",
            },
        ],
    },
    {
        id: "prj0002",
        name: "Maskonury",
        finished: true,
        finishDate: "2023-04-12",
        img: new URL("../../assets/img/demo/maskonury.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
        threads: [
            {
                id: "dmc310",
                description: "czarne pióra",
            },
            {
                id: "dmcb5200",
                description: "białe pióra",
            },
            {
                id: "dmc606",
                description: "dziób i płetwy",
            },
            {
                id: "dmc739",
                description: "paski na dziobie",
            },
            {
                id: "dmc839",
                description: "krajobraz",
            },
            {
                id: "dmc02",
                description: "podświetlenia na białych piórach",
            },
            {
                id: "dmc906",
                description: "trawa",
            },
            {
                id: "dmc164",
                description: "łodygi długich kwiatów",
            },
            {
                id: "dmc741",
                description: "niskie kwiaty",
            },
            {
                id: "dmc963",
                description: "wysokie kwiaty",
            },
        ],
    },
    {
        id: "prj0003",
        name: "Kot i motyl",
        finished: true,
        finishDate: "2023-01-15",
        img: new URL("../../assets/img/demo/kot.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
        threads: [
            {
                id: "dmc310",
                description: "kontury",
            },
            {
                id: "dmc435",
                description: "linie na skrzydłach",
            },
            {
                id: "dmc646",
                description: "linie na skrzydłach",
            },
            {
                id: "dmc747",
                description: "niebieskości",
            },
            {
                id: "dmc3766",
                description: "niebieskości",
            },
            {
                id: "dmc807",
                description: "niebieskości",
            },
            {
                id: "dmc931",
                description: "niebieskości",
            },
            {
                id: "dmc3747",
                description: "fiolety",
            },
            {
                id: "dmc159",
                description: "fiolety",
            },
            {
                id: "dmc156",
                description: "fiolety",
            },
            {
                id: "dmc932",
                description: "fiolety",
            },
            {
                id: "dmc160",
                description: "fiolety",
            },
            {
                id: "dmc3340",
                description: "podświetlenia",
            },
            {
                id: "dmc972",
                description: "podświetlenia",
            },
            {
                id: "dmc744",
                description: "podświetlenia",
            },
            {
                id: "dmc353",
                description: "podświetlenia",
            },
        ],
    },
    {
        id: "prj0004",
        name: "Dom Muminków",
        finished: true,
        finishDate: "2023-01-10",
        img: new URL("../../assets/img/demo/dom-muminkow.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
        threads: [
            {
                id: "dmc310",
                description: "obrys",
            },
            {
                id: "dmcb5200",
                description: "okna i kolumny",
            },
            {
                id: "dmc826",
                description: "niebieskie linie na domku",
            },
            {
                id: "dmc414",
                description: "fundamenty i czubek komina",
            },
            {
                id: "dmcecru",
                description: "podstawa komina",
            },
            {
                id: "dmc469",
                description: "drzewo",
            },
            {
                id: "dmc471",
                description: "krzaki",
            },
        ],
    },
    {
        id: "prj0005",
        name: "Zarośla",
        finished: true,
        finishDate: "2023-09-23",
        img: new URL("../../assets/img/demo/zarosla.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
        threads: [
            {
                id: "dmc310",
            },
            {
                id: "dmc407",
                description: "kropki beżowe",
            },
            {
                id: "dmcblanc",
            },
            {
                id: "dmc523",
                description: "jasna zieleń",
            },
            {
                id: "dmc3363",
                description: "średnia zieleń",
            },
            {
                id: "dmc895",
                description: "ciemna zieleń",
            },
        ],
    },
    {
        id: "prj0006",
        name: "Zelda",
        finished: true,
        finishDate: "2024-06-04",
        img: new URL("../../assets/img/demo/zelda.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
        threads: [
            {
                id: "dmc3799",
                description: "rzęsy, żrenice, szare elementy biżuterii",
            },
            {
                id: "dmcb5200",
                description: "błysk w oku",
            },
            {
                id: "dmc505",
                description: "tęczówka, tkanina",
            },
            {
                id: "dmc561",
                description: "tęczówka",
            },
            {
                id: "dmc437",
                description: "jasne rzęsy",
            },
            {
                id: "dmc739",
                description: "jasna skóra",
            },
            {
                id: "dmc3863",
                description: "ciemna skóra",
            },
            {
                id: "dmc729",
                description: "brwi",
            },
            {
                id: "dmc726",
                description: "włosy",
            },
            {
                id: "dmc725",
                description: "włosy",
            },
            {
                id: "dmc831",
                description: "włosy",
            },
            {
                id: "dmc3078",
                description: "podświetlenia na włosach",
            },
            {
                id: "dmc414",
                description: "szare elementy biżuterii",
            },
            {
                id: "dmc434",
                description: "jasne brązowe elementy",
            },
            {
                id: "dmc3031",
                description: "jasne brązowe elementy",
            },
            {
                id: "dmc938",
                description: "ciemne brązowe elementy",
            },
            {
                id: "dmc3371",
                description: "ciemne brązowe elementy",
            },
            {
                id: "dmc500",
                description: "tkanina",
            },
            {
                id: "dmc502",
                description: "tkanina",
            },
            {
                id: "dmc501",
                description: "tkanina",
            },
        ],
    },
    {
        id: "prj0007",
        name: "Pierwszy ptaszor",
        finished: true,
        finishDate: "2024-06-03",
        img: new URL("../../assets/img/demo/ptaszor-1.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "ciemnozielony drelich",
        threads: [
            {
                id: "dmc310",
            },
            {
                id: "dmc3790",
            },
            {
                id: "dmc976",
            },
            {
                id: "dmc169",
            },
            {
                id: "dmc807",
            },
            {
                id: "dmc3760",
            },
            {
                id: "dmc3765",
            },
            {
                id: "dmc312",
            },
            {
                id: "dmc791",
            },
            {
                id: "dmc823",
            },
            {
                id: "dmc3808",
            },
            {
                id: "dmc3827",
            },
            {
                id: "dmc3826",
            },
            {
                id: "dmc975",
            },
            {
                id: "dmc433",
            },
            {
                id: "dmc898",
            },
            {
                id: "dmc3781",
            },
            {
                id: "dmc838",
            },
            {
                id: "dmc644",
            },
            {
                id: "dmc642",
            },
            {
                id: "dmc01",
            },
            {
                id: "dmc04",
            },
            {
                id: "dmc413",
            },
            {
                id: "dmc3799",
            },
        ],
    },
    {
        id: "prj0008",
        name: "Ona i On",
        finished: true,
        finishDate: "2023-09-15",
        img: new URL("../../assets/img/demo/ona-i-on.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
    },
    {
        id: "prj0009",
        name: "Filip",
        finished: true,
        finishDate: "2021-09-13",
        img: new URL("../../assets/img/demo/filip.jpeg", import.meta.url).href,
        hoop: "12",
    },
    {
        id: "prj0010",
        name: "Korok",
        finished: true,
        finishDate: "2023-07-01",
        img: new URL("../../assets/img/demo/korok.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
        threads: [
            {
                id: "dmc310",
            },
            {
                id: "dmc16",
            },
            {
                id: "dmc703",
            },
            {
                id: "dmc986",
            },
            {
                id: "dmc543",
            },
            {
                id: "dmc3864",
            },
        ],
    },
    {
        id: "prj0011",
        name: "Lis",
        finished: true,
        finishDate: "2022-04-17",
        img: new URL("../../assets/img/demo/lis.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
    },
    {
        id: "prj0012",
        name: "Rozgwiazda",
        finished: true,
        finishDate: "2023-03-13",
        img: new URL("../../assets/img/demo/rozgwiazda.jpeg", import.meta.url).href,
        hoop: "12",
        fabric: "surowa bawełna",
        threads: [
            {
                id: "dmc728",
            },
            {
                id: "dmc783",
            },
            {
                id: "dmc3808",
            },
        ],
    },
    {
        id: "prj0013",
        name: "Haftowane święta",
        finished: true,
        finishDate: "2022-12-18",
        img: new URL("../../assets/img/demo/swieta.jpeg", import.meta.url).href,
        hoop: "12",
        threads: [
            {
                id: "dmc727",
                description: "okna",
            },
            {
                id: "dmc310",
                description: "drzwi",
            },
            {
                id: "dmc407",
                description: "jasna ściana",
            },
            {
                id: "dmc632",
                description: "ciemna ściana",
            },
            {
                id: "dmc3781",
                description: "dach",
            },
            {
                id: "dmc3756",
                description: "śnieg jasny",
            },
            {
                id: "dmc775",
                description: "śnieg ciemny",
            },
            {
                id: "dmc987",
                description: "gęsta choinka",
            },
            {
                id: "dmc3363",
                description: "choinka przy domku",
            },
        ],
    },
];
