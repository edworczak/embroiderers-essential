import {
	faArrowLeft,
	faBoxesStacked,
	faCartShopping,
	faGears,
	faHouse,
	faPalette,
	faPenRuler,
	faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

import pl from "./pl";

const navigationLinks = {
	tools: [
		{
			id: "main-navigation-projects-button",
			link: `/projects`,
			label: pl.projects.navigationLink,
			icon: faPenRuler,
		},
		{
			id: "main-navigation-threads-button",
			link: `/threads`,
			label: pl.threads.navigationLink,
			icon: faBoxesStacked,
		},
		{
			id: "main-navigation-palettes-button",
			link: `/palettes`,
			label: pl.palettes.navigationLink,
			icon: faPalette,
		},
		{
			id: "main-navigation-shopping-list-button",
			link: `/shoppinglist`,
			label: pl.shoppingList.navigationLink,
			icon: faCartShopping,
		},
		{
			id: "main-navigation-substitutes-button",
			link: `/substitutes`,
			label: pl.substitutes.navigationLink,
			icon: faSwatchbook,
		},
		{
			id: "main-navigation-settings-button",
			link: `/settings`,
			label: pl.settings.navigationLink,
			icon: faGears,
		},
	],
	historyNav: [
		{
			id: "main-navigation-home-button",
			link: `/home`,
			label: pl.navigation.home,
			icon: faHouse,
		},
		{
			id: "main-navigation-back-button",
			link: `/`,
			label: pl.navigation.back,
			icon: faArrowLeft,
		},
	],
};

export default navigationLinks;
