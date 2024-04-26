import { faArrowLeft, faGears, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import pl from "./pl";

const navigationLinks = {
	tools: [
		{
			id: "main-navigation-projects-button",
			link: `/projects`,
			label: pl.tools.projects,
		},
		{
			id: "main-navigation-threads-button",
			link: `/threads`,
			label: pl.tools.threads,
		},
		{
			id: "main-navigation-palettes-button",
			link: `/palettes`,
			label: pl.tools.palettes,
		},
		{
			id: "main-navigation-shopping-list-button",
			link: `/shoppinglist`,
			label: pl.tools.shoppingList,
		},
		{
			id: "main-navigation-substitutes-button",
			link: `/substitutes`,
			label: pl.tools.substitutes,
		},
		{
			id: "main-navigation-search-button",
			link: `/search`,
			label: pl.navigation.search,
			icon: faSearch,
		},
		{
			id: "main-navigation-settings-button",
			link: `/settings`,
			label: pl.navigation.settings,
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
