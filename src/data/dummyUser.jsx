const dummyUser = {
	user: {
		name: "Ewa",
	},
	projects: [
		{
			id: "prj0001",
			name: "Wiosna",
			startDate: "12.03.2023",
			time: "10:28",
			img: new URL("../assets/img/demo/prj0001.jpeg", import.meta.url),
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
	shoppingList: {
		items: {
			item0: "DMC3866",
			item1: "DMC3760",
			item2: "DMC3765",
			item3: "DMC791",
			item4: "DMC939",
		},
	},
};

export default dummyUser;
