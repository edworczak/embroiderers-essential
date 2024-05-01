import { projects } from "./user/projects";
import { shoppingList } from "./user/shoppingList";
import { threads } from "./user/threads";

const dummyUser = {
	user: {
		name: "Ewa",
		language: "pl",
	},
	projects: projects,
	shoppingList: shoppingList,
	threads: threads,
};

export default dummyUser;
