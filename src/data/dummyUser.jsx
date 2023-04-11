const dummyUser = {
  user: {
    name: "Ewa",
  },
  projects: {
    prj0001: {
      id: "prj0001",
      name: "Wiosna",
      startDate: "12.03.2023",
      time: "10:28",
      img: new URL("../assets/img/demo/prj0001.jpeg", import.meta.url),
    },
    prj0002: {
      id: "prj0002",
      name: "Maskonury",
      startDate: "31.03.2023",
      time: "12:11",
      finishDate: "12.04.2023",
      img: new URL("../assets/img/demo/prj0002.jpeg", import.meta.url),
    },
    prj0003: {
      id: "prj0003",
      name: "Kot i motyl",
      startDate: "20.12.2022",
      time: "16:42",
      finishDate: "15.01.2023",
      img: new URL("../assets/img/demo/prj0003.jpeg", import.meta.url),
    },
    prj0004: {
      id: "prj0004",
      name: "Dom Muminków",
      startDate: "10.01.2023",
      time: "24:31",
      img: new URL("../assets/img/demo/prj0004.jpeg", import.meta.url),
    },
  },
  shoppingList: {
    items: 12,
  },
};

export default dummyUser;
