const dummyUser = {
	user: {
		name: "Ewa",
		language: "pl",
	},
	projects: [
		{
			id: "prj0001",
			name: "Wiosna",
			startDate: "12.03.2023",
			time: "10:28",
			img: new URL("../assets/img/demo/prj0001.jpeg", import.meta.url),
			threads: [
				{
					id: "dmc987",
					group: "Koniczyna",
				},
				{
					id: "dmc988",
					group: "Koniczyna",
				},
				{
					id: "dmc3052",
					group: "Największy kwiat",
				},
				{
					id: "dmc948",
					group: "Największy kwiat",
				},
				{
					id: "dmc472",
					group: "Fioletowe kwiatki",
				},
				{
					id: "dmc24",
					group: "Fioletowe kwiatki",
				},
				{
					id: "dmc472",
					group: "Lawenda",
				},
				{
					id: "dmc3042",
					group: "Lawenda",
				},
				{
					id: "dmc368",
					group: "Mały kwiatek",
				},
				{
					id: "dmc165",
					group: "Mały kwiatek",
				},
				{
					id: "dmc905",
					group: "Trawa",
				},
				{
					id: "dmc3364",
					group: "Trawa",
				},
			],
		},
		{
			id: "prj0002",
			name: "Maskonury",
			startDate: "31.03.2023",
			time: "12:11",
			finishDate: "12.04.2023",
			img: new URL("../assets/img/demo/prj0002.jpeg", import.meta.url),
		},
		{
			id: "prj0003",
			name: "Kot i motyl",
			startDate: "20.12.2022",
			time: "16:42",
			finishDate: "15.01.2023",
			img: new URL("../assets/img/demo/prj0003.jpeg", import.meta.url),
		},
		{
			id: "prj0004",
			name: "To jest mój Dom Muminków",
			startDate: "10.01.2023",
			time: "24:31",
			img: new URL("../assets/img/demo/prj0004.jpeg", import.meta.url),
		},
		{
			id: "prj0005",
			name: "Krowa",
			startDate: "10.04.2023",
			time: "5:12",
		},
		{
			id: "prj0006",
			name: "Krowa w górach",
			startDate: "31.01.2024",
			time: "0:00",
		},
	],
};

export default dummyUser;
