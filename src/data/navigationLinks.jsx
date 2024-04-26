import { faArrowLeft, faGears, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import pl from "./pl";

const navigationLinks = {
	tools: [
		{
			id: "main-navigation-projects-button",
			link: `/projects`,
			label: pl.projects.navigationLink,
		},
		{
			id: "main-navigation-threads-button",
			link: `/threads`,
			label: pl.threads.navigationLink,
		},
		{
			id: "main-navigation-palettes-button",
			link: `/palettes`,
			label: pl.palettes.navigationLink,
		},
		{
			id: "main-navigation-shopping-list-button",
			link: `/shoppinglist`,
			label: pl.shoppingList.navigationLink,
		},
		{
			id: "main-navigation-substitutes-button",
			link: `/substitutes`,
			label: pl.substitutes.navigationLink,
		},
		{
			id: "main-navigation-search-button",
			link: `/search`,
			label: pl.search.navigationLink,
			icon: faSearch,
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
			link: `/`,
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
